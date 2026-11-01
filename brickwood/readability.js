#!/usr/bin/env node
// Reading level of each BrickWood post body: Flesch-Kincaid grade, word count, longest sentences.
//   node brickwood/readability.js [slug]
'use strict';
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'posts');
const syl = w => {
  w = w.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
};
for (const slug of fs.readdirSync(dir)) {
  if (process.argv[2] && slug !== process.argv[2]) continue;
  const html = fs.readFileSync(path.join(dir, slug, 'body.html'), 'utf8');
  const text = html.replace(/<(table|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z0-9$"])/).filter(s => s.split(' ').length > 2);
  const words = text.split(' ').filter(w => /[a-z0-9]/i.test(w));
  const syllables = words.reduce((n, w) => n + syl(w), 0);
  const grade = 0.39 * (words.length / sentences.length) + 11.8 * (syllables / words.length) - 15.59;
  const long = sentences.filter(s => s.split(' ').length > 25);
  console.log(`${slug}: grade ${grade.toFixed(1)}, ${words.length} words, ${(words.length / sentences.length).toFixed(1)} words a sentence, ${long.length} sentences over 25 words`);
  long.slice(0, 3).forEach(s => console.log('   long: ' + s.slice(0, 140)));
}
