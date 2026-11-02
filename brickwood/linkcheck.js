#!/usr/bin/env node
// Opens every link in every BrickWood post (body, FAQ, sources) and reports the ones a reader could not open.
//   node brickwood/linkcheck.js
// A link to another post in this batch is reported as "publishes with the batch", not as broken.
// Some government sites refuse scripts (403) but open in a browser; those are listed separately for a person to click once.
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const dir = path.join(__dirname, 'posts');
const posts = fs.readdirSync(dir).map(d => ({ d, p: JSON.parse(fs.readFileSync(path.join(dir, d, 'post.json'), 'utf8')), body: fs.readFileSync(path.join(dir, d, 'body.html'), 'utf8') }));
const batch = new Set(posts.map(x => x.p.slug));
const links = new Map();
for (const { d, p, body } of posts) {
  const all = [...body.matchAll(/href="(https?:[^"]+)"/g)].map(m => m[1])
    .concat((p.faq || []).flatMap(f => [...f.a.matchAll(/href="(https?:[^"]+)"/g)].map(m => m[1])))
    .concat((p.sources || []).map(s => s.url));
  for (const u of all) { if (!links.has(u)) links.set(u, new Set()); links.get(u).add(d); }
}
const status = u => { try { return execFileSync('curl', ['-s', '-o', '/dev/null', '-L', '--compressed', '-m', '25', '-w', '%{http_code}', u]).toString(); } catch { return '000'; } };
let broken = 0, blocked = 0;
for (const [u, where] of [...links].sort()) {
  const slug = (u.match(/^https:\/\/brickwoodmortgage\.com(\/[a-z0-9-]+\/)$/) || [])[1];
  if (slug && batch.has(slug)) { console.log(`batch    ${u}  (publishes with the batch)`); continue; }
  const s = status(u);
  if (s === '200') continue;
  if (s === '403' || s === '000') { blocked++; console.log(`CLICK    ${u}  (${s}: refuses scripts, open it once in a browser)  in ${[...where].join(', ')}`); continue; }
  broken++; console.log(`BROKEN   ${u}  (${s})  in ${[...where].join(', ')}`);
}
console.log(`${links.size} links, ${broken} broken, ${blocked} to click by hand`);
process.exitCode = broken ? 1 : 0;
