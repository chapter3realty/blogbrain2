---
name: brickwood-post
description: Make, upgrade, review or hand off a blog post for brickwoodmortgage.com (BrickWood Mortgage, a Surfside Beach SC mortgage broker, NMLS 189497). Use for any BrickWood topic choice, research, writing, design, fact check, owner feedback, packaging for the web team, or keeping published posts current.
---

# Making a BrickWood post

Read, in this order:
1. `brickwood/PLAYBOOK.md`: the whole way of working, learned from the first five posts.
2. `brickwood/VOICE.md` and `brickwood/VERDICTS.md`: Paul's own words, including what he praised.
3. `brickwood/LEGAL.md`: the legal block and what a post may never state.
4. `CRAFT.md` section 2, "True in practice, not only on paper": the general lesson behind most of Paul's corrections.

Run before you start: `node brickwood/stale.js` (dated facts due for a check).
Run before Paul reads: `node brickwood/readability.js`, `node tools/repeat-check.js <preview> --strict`, `node brickwood/linkcheck.js`, then open the preview yourself.
Hand off with: `node brickwood/package.js <batch>`.

The one test: would a BrickWood loan officer read each sentence and nod, and would a buyer on the Grand Strand understand it on a phone and know what to do next?
