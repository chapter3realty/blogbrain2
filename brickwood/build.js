#!/usr/bin/env node
// Builds the BrickWood blog posts.
//   node brickwood/build.js            -> brickwood/dist/wp/<slug>.html (paste into a WordPress Custom HTML block)
//                                         brickwood/dist/preview/<slug>.html (full page to look at)
// Each post lives in brickwood/posts/<slug>/ as post.json (meta, FAQ) and body.html (the article).
// The byline, FAQ, sources and legal block are written here once, so every post carries the same legal text.
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE = 'https://brickwoodmortgage.com';
const css = fs.readFileSync(path.join(ROOT, 'assets/bw-post.css'), 'utf8');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '');

const LEGAL = {
  // Wording copied from BrickWood's own posts and footer (brickwoodmortgage.com, 2026-11-01).
  disclaimer: 'This article is provided for general educational purposes only and is not an offer or commitment to lend. Not all loan programs mentioned, including down payment assistance and third-party or government programs, are offered by BrickWood Mortgage Inc. Program availability, terms and eligibility vary by lender and location and are subject to change. Please contact a licensed loan officer to find out which programs we currently offer.',
  agency: 'This material is not provided by, endorsed by, or approved by HUD, FHA, VA, or any government agency.',
  company: 'BrickWood Mortgage Inc. NMLS #189497. 1601 Glenns Bay Rd., Surfside Beach, SC 29575. (843) 314-4101.',
  ehl: 'Equal Housing Lender. We do business in accordance with the Fair Housing Act and the Equal Credit Opportunity Act.',
  affiliate: 'BrickWood Mortgage Inc. has a business relationship with Chapter3 Realty. You are not required to use Chapter3 Realty. There are frequently other providers available. You are free to shop around.',
  reverse: 'A reverse mortgage is a loan. The borrower must live in the home as a principal residence, keep paying property taxes, homeowners insurance and any HOA dues, and keep the home in good repair. The loan becomes due when the last borrower sells the home, moves out permanently or dies, or does not meet these terms. Interest and fees are added to the loan balance over time. Counseling from a HUD-approved counselor is required.'
};
const AUTHOR = { name: 'Paul Hankins', title: 'Founder & Broker', nmls: '281393', url: SITE + '/loan-officers/paul-hankins/', photo: SITE + '/wp-content/uploads/2026/05/Paul-Hankins-CEO-300x276.png',
  bio: 'Paul founded BrickWood Mortgage in 2007 and has spent more than 20 years in residential lending. In 2025 the Governor appointed him to the South Carolina Council of Advisors on Consumer Credit.' };

function legalBlock(p) {
  const parts = [
    `<p><strong>Disclaimer.</strong> ${LEGAL.disclaimer}</p>`,
    p.reverse ? `<p><strong>About reverse mortgages.</strong> ${LEGAL.reverse}</p>` : '',
    `<p>${LEGAL.agency}</p>`,
    p.affiliate ? `<p>${LEGAL.affiliate}</p>` : '',
    `<p class="bw-ehl"><img src="${SITE}/wp-content/uploads/2026/06/Equal-Housing-Lender-150x150.png" alt="Equal Housing Lender logo" width="44" height="44" loading="lazy"><span>${LEGAL.ehl}</span></p>`,
    `<p>${LEGAL.company.replace('NMLS #189497', '<a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/189497" rel="nofollow">NMLS #189497</a>')}</p>`
  ];
  return `<aside class="bw-legal" aria-label="Licensing and disclosures">${parts.join('')}</aside>`;
}

function faqBlock(p) {
  if (!p.faq || !p.faq.length) return '';
  return `<section class="bw-faq" id="faq"><h2>${esc(p.faqHeading || 'Frequently asked questions')}</h2>` +
    p.faq.map(f => `<div class="bw-faq-item"><h3>${esc(f.q)}</h3><p>${f.a}</p></div>`).join('') + '</section>';
}

function sourcesBlock(p) {
  if (!p.sources || !p.sources.length) return '';
  return `<section class="bw-sources"><p>Sources</p><ul>` +
    p.sources.map(s => `<li><a href="${esc(s.url)}" rel="nofollow">${esc(s.name)}</a></li>`).join('') + '</ul></section>';
}

function schema(p) {
  const url = SITE + p.slug;
  const graph = [{
    '@type': 'BlogPosting',
    headline: p.h1,
    description: p.description,
    mainEntityOfPage: url,
    url,
    author: { '@type': 'Person', name: AUTHOR.name, jobTitle: AUTHOR.title, url: AUTHOR.url, identifier: 'NMLS ' + AUTHOR.nmls },
    publisher: { '@type': 'Organization', name: 'BrickWood Mortgage Inc.', url: SITE + '/', logo: { '@type': 'ImageObject', url: SITE + '/wp-content/uploads/2021/09/BrickWood-Mortgage-logo.png' }, identifier: 'NMLS 189497' },
    about: p.about || undefined,
    spatialCoverage: p.place ? { '@type': 'Place', name: p.place } : undefined,
    inLanguage: 'en-US'
  }];
  if (p.faq && p.faq.length) graph.push({
    '@type': 'FAQPage',
    mainEntity: p.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } }))
  });
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

function article(p, body) {
  const words = strip(body).split(/\s+/).length + (p.faq || []).reduce((n, f) => n + strip(f.a).split(/\s+/).length, 0);
  const minutes = Math.max(3, Math.round(words / 230));
  const head = `<header class="bw-head">
<p class="bw-meta"><span class="bw-tag">${esc(p.category || 'Home loans')}</span><span>${minutes} min read</span></p>
${p.h1InTheme ? '' : `<h1>${esc(p.h1)}</h1>`}
${p.dek ? `<p class="bw-dek">${esc(p.dek)}</p>` : ''}
<p class="bw-author"><img src="${AUTHOR.photo}" alt="${AUTHOR.name}" width="48" height="48" loading="lazy"><span><a href="${AUTHOR.url}">${AUTHOR.name}</a><br>${AUTHOR.title} · NMLS #${AUTHOR.nmls}</span></p>
</header>`;
  const bio = `<aside class="bw-bio"><img src="${AUTHOR.photo}" alt="" width="64" height="64" loading="lazy"><div><p class="bw-bio-name">About ${AUTHOR.name}</p><p>${AUTHOR.bio}</p></div></aside>`;
  const rail = `<aside class="bw-rail" aria-label="Talk to a loan officer"><div class="bw-rail-card"><img src="${AUTHOR.photo}" alt="" width="56" height="56" loading="lazy"><p class="bw-rail-head">${esc(p.railHead || 'Questions about your loan?')}</p><p>Talk with a BrickWood loan officer. No pressure, just answers.</p><a class="bw-btn" href="${SITE}/pre-qualify-your-loan/">Pre-qualify</a><a class="bw-rail-call" href="tel:+18433144101">or call (843) 314-4101</a></div></aside>`;
  return `<article class="bw-post"><div class="bw-main">${head}${body}${faqBlock(p)}${bio}${sourcesBlock(p)}${legalBlock(p)}</div>${rail}</article>`;
}

function wpFragment(p, body) {
  return `<!-- BrickWood post: ${p.slug} | Paste into one Custom HTML block. SEO title and meta description go in Yoast. -->\n<style>${css}</style>\n${article(p, body)}\n${schema(p)}\n`;
}

function previewLinks(html) {
  // In a preview, a link to another post in this batch opens that post's preview, so a reviewer never hits a page that is not live yet.
  return html.replace(/https:\/\/brickwoodmortgage\.com\/([a-z0-9-]+)\//g, (m, slug) => BATCH.has(slug) ? `${slug}.html` : m);
}

function preview(p, body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)}</title><meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${SITE}${p.slug}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<style>body{margin:0;background:#fff}.pv-top{background:#111;color:#fff;font:600 14px Merriweather,serif;padding:10px 16px;text-align:right}.pv-head{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid #eee}.pv-head img{height:64px}.pv-nav{font:700 15px Merriweather,serif;color:#333;flex:1;padding:0 32px}@media(max-width:800px){.pv-nav{display:none}}.pv-head a{background:#0400fb;color:#fff;text-decoration:none;font:500 14px Roboto,sans-serif;padding:10px 16px;border-radius:3px}.pv-hero{background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),#5a5550;color:#fff;text-align:center;padding:56px 16px}.pv-hero h1{font:900 clamp(1.7rem,4.5vw,2.5rem)/1.25 Merriweather,serif;margin:0 auto;max-width:900px}.pv-note{font:12px Roboto,sans-serif;color:#ddd;margin-top:10px}.pv-foot{background:#111;color:#bbb;font:14px Roboto,sans-serif;padding:24px 16px;text-align:center}
${css}</style></head><body>
<div class="pv-top">Reviews &nbsp; Contact &nbsp; Loan Officers &nbsp; Loans For Veterans</div>
<div class="pv-head"><img src="${SITE}/wp-content/uploads/2021/09/BrickWood-Mortgage-logo.png" alt="BrickWood Mortgage Inc."><nav class="pv-nav">Home &nbsp; Loan Programs &nbsp; Calculators &nbsp; About Us &nbsp; Resources</nav><a href="${SITE}/pre-qualify-your-loan/">PRE-QUALIFY</a></div>
${previewLinks(article(p, body))}
<div class="pv-foot">Preview only. The live page uses the site's own header and footer. © 2007-2026 Brickwood Mortgage Inc. NMLS #189497</div>
${schema(p)}
</body></html>`;
}

const postsDir = path.join(ROOT, 'posts');
const out = { wp: path.join(ROOT, 'dist/wp'), preview: path.join(ROOT, 'dist/preview') };
Object.values(out).forEach(d => fs.mkdirSync(d, { recursive: true }));
const only = process.argv[2];
const BATCH = new Set(fs.readdirSync(postsDir).map(d => JSON.parse(fs.readFileSync(path.join(postsDir, d, 'post.json'), 'utf8')).slug.replace(/\//g, '')));
for (const dir of fs.readdirSync(postsDir)) {
  if (only && dir !== only) continue;
  const p = JSON.parse(fs.readFileSync(path.join(postsDir, dir, 'post.json'), 'utf8'));
  const body = fs.readFileSync(path.join(postsDir, dir, 'body.html'), 'utf8');
  if (p.title.length > 60) console.warn(`WARN ${dir}: title tag is ${p.title.length} characters`);
  if (p.description.length > 160) console.warn(`WARN ${dir}: description is ${p.description.length} characters`);
  const banned = /(\d+(\.\d+)?\s?%\s*(apr|interest|rate))|\bAPR\b|monthly payment of \$|guaranteed approval|we guarantee|lowest rate|no closing costs|—/i;
  const hit = (strip(body) + ' ' + p.faq.map(f => strip(f.a)).join(' ')).match(banned);
  if (hit) console.warn(`WARN ${dir}: check wording "${hit[0]}" (rate, payment, guarantee or em dash)`);
  fs.writeFileSync(path.join(out.wp, dir + '.html'), wpFragment(p, body));
  fs.writeFileSync(path.join(out.preview, dir + '.html'), preview(p, body));
  console.log(`built ${dir}: ${strip(body).split(/\s+/).length} words in body, ${p.faq.length} FAQ`);
}
