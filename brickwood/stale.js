#!/usr/bin/env node
// Lists the dated facts in BrickWood posts that are due for a check (facts/dated.json).
//   node brickwood/stale.js            due within 60 days, or overdue
//   node brickwood/stale.js --all      the whole calendar
// Run it at the start of every BrickWood batch, and before any post is republished.
'use strict';
const fs = require('fs');
const path = require('path');
const items = JSON.parse(fs.readFileSync(path.join(__dirname, 'facts/dated.json'), 'utf8'));
const today = new Date(process.env.SCORE_TODAY || new Date().toISOString().slice(0, 10));
const soon = new Date(today.getTime() + 60 * 864e5);
const all = process.argv.includes('--all');
const rows = items.slice().sort((a, b) => a.checkBy.localeCompare(b.checkBy)).filter(i => all || new Date(i.checkBy) <= soon);
for (const i of rows) {
  const due = new Date(i.checkBy);
  const tag = due < today ? 'OVERDUE' : due <= soon ? 'DUE SOON' : 'later';
  console.log(`${tag.padEnd(8)} ${i.checkBy}  ${i.id}  (${i.posts.join(', ')})\n         says: ${i.says}\n         why:  ${i.changes}\n         how:  ${i.how}\n`);
}
console.log(`${rows.length} of ${items.length} dated facts listed.`);
