#!/usr/bin/env node
// Builds the handoff package for BrickWood's SEO team: one folder and one zip to put in a shared drive.
//   node brickwood/package.js <batch-name>        e.g. 2026-11
// Sends files, not email text: Outlook rewrites every link in an email body into a "safe link" (SEO team, 2026-11-03).
// The package holds every post in the batch, so a link between two new posts never points at a post the team doesn't have.
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const batch = process.argv[2];
if (!batch) { console.error('usage: node brickwood/package.js <batch-name>'); process.exit(1); }
const root = __dirname;
execFileSync('node', [path.join(root, 'build.js')], { stdio: 'inherit' });
const out = path.join(root, 'handoff', batch);
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const posts = fs.readdirSync(path.join(root, 'posts')).map(d => ({ d, p: JSON.parse(fs.readFileSync(path.join(root, 'posts', d, 'post.json'), 'utf8')), body: fs.readFileSync(path.join(root, 'posts', d, 'body.html'), 'utf8') })).filter(x => x.p.batch === batch);
if (!posts.length) { console.error(`no posts have "batch": "${batch}" in post.json`); process.exit(1); }
const slugs = new Set(posts.map(x => x.p.slug));
// Publish order: a post that others link to goes up before the posts that link to it.
const linksTo = x => [...x.body.matchAll(/https:\/\/brickwoodmortgage\.com(\/[a-z0-9-]+\/)/g)].map(m => m[1]).filter(s => slugs.has(s) && s !== x.p.slug);
const inbound = s => posts.filter(x => linksTo(x).includes(s)).length;
posts.sort((a, b) => inbound(b.p.slug) - inbound(a.p.slug) || a.d.localeCompare(b.d));

let sheet = `# BrickWood blog posts, batch ${batch}\n\nFor the web team. Each post is one HTML file in this folder. Paste the whole file into one Custom HTML block in WordPress. It holds the styles, the article, the FAQ, the author box, the sources, the legal block and the structured data.\n\nPublish all ${posts.length} posts together, in this order. They link to each other, so a post published alone would link to a page that isn't live yet. Links to earlier BrickWood posts assume those are already live.\n\n`;
posts.forEach((x, i) => {
  const p = x.p;
  fs.copyFileSync(path.join(root, 'dist/wp', x.d + '.html'), path.join(out, `${String(i + 1).padStart(2, '0')}-${x.d}.html`));
  const links = linksTo(x);
  sheet += `## ${i + 1}. ${p.h1}\n\n- File: \`${String(i + 1).padStart(2, '0')}-${x.d}.html\`\n- URL slug: \`${p.slug.replace(/\//g, '')}\`${p.upgradeOf ? ` (this **replaces the body of the existing post** at ${p.upgradeOf}. Keep the URL)` : ' (new post)'}\n- Post title (H1): ${p.h1}\n- Yoast SEO title: ${p.title}\n- Yoast meta description: ${p.description}\n- Yoast focus keyphrase: ${p.focusKeyphrase}\n- Category: ${p.category || 'Home loans'}\n- Author: Paul Hankins\n${links.length ? `- Links to other posts in this batch: ${links.map(s => '`' + s + '`').join(', ')}\n` : ''}\n`;
});
sheet += `## For every post\n\n- The post prints its own title, so hide the theme's title band for these posts, or the title shows twice. Set a featured image for sharing and the blog list.\n- Turn off Yoast's own FAQ or Article schema on these posts if it adds a second copy; the file already has it.\n- Dated facts: see UPDATE-CALENDAR.md. BrickWood will tell you when one of them changes, with the replacement text.\n`;
fs.writeFileSync(path.join(out, 'PUBLISH.md'), sheet);

const dated = JSON.parse(fs.readFileSync(path.join(root, 'facts/dated.json'), 'utf8')).sort((a, b) => a.checkBy.localeCompare(b.checkBy));
let cal = `# Update calendar, batch ${batch}\n\nThese facts in the posts can change. BrickWood checks each one by the date shown and sends replacement text when it changes. Nothing needs doing until then.\n\n| Check by | Post | What the post says | Why it can change |\n|---|---|---|---|\n`;
for (const i of dated) cal += `| ${i.checkBy} | ${i.posts.join(', ')} | ${i.says} | ${i.changes} |\n`;
fs.writeFileSync(path.join(out, 'UPDATE-CALENDAR.md'), cal);

const zip = path.join(root, 'handoff', `brickwood-posts-${batch}.zip`);
fs.rmSync(zip, { force: true });
execFileSync('python3', ['-I', '-c', `import zipfile,os,sys\nsrc,dst,name=sys.argv[1],sys.argv[2],sys.argv[3]\nwith zipfile.ZipFile(dst,'w',zipfile.ZIP_DEFLATED) as z:\n  [z.write(os.path.join(src,f),os.path.join(name,f)) for f in sorted(os.listdir(src))]`, out, zip, `brickwood-posts-${batch}`]);
console.log(`package: ${path.relative(process.cwd(), out)}/ and ${path.relative(process.cwd(), zip)}`);
console.log(fs.readdirSync(out).join('\n'));
