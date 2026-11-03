# How to make a BrickWood post

What I learned making the first five posts (November 2026), written as one way of working, not a list of patches. Read it before anything else. `CRAFT.md` is the general skill; this file is how it applies to BrickWood. The owner's own words are in `VOICE.md` and `VERDICTS.md`, and the legal block is in `LEGAL.md`.

## Know the business before the topic

BrickWood Mortgage is a broker in Surfside Beach. It pre-qualifies people, answers their questions, takes applications and shops each loan across its lenders. It does nothing on a property before an offer. The lender does the building review, the flood certificate and the underwriting, after application. Every promise on a page has to fit that.

BrickWood isn't Chapter3. They are affiliated, but they are different businesses. Chapter3 sells places and does checks before an offer. BrickWood sells loans and answers. Never carry a Chapter3 promise, tone or link across.

Paul's buyer has some money and is close to applying: a second home buyer, someone retiring to the coast, a buyer with savings but no paycheck, a condo buyer from out of state. Choose the audience by topic. Never write anything that turns a reader away.

## Choosing topics

1. **Local first.** National lenders own the national searches. BrickWood wins on searches that name Myrtle Beach, the Grand Strand, Horry County or South Carolina. Read Google's suggestions for the topic with and without a place name, and build the title from the words people actually type.
2. **Check three places for overlap:** BrickWood's own sitemap, chapter3realty.com and the posts in flight. If BrickWood already has a thin post on the topic, upgrade it at its URL instead of writing a second one. If Chapter3 owns a topic (closing costs, where to buy, the cost of insurance), take the lender's angle or leave the topic alone.
3. **High intent.** The reader is about to apply or make an offer. Skip topics for browsing.
4. **The broker's edge.** The best topics are ones where shopping across lenders changes the answer: asset depletion divisors, non-warrantable condos, builder incentives. That's what national pages can't say.
5. **Ask Paul at the start, not the end.** For each topic, send two questions before writing: "What do your clients get wrong about this?" and "What do you always tell them?" His answers made the best lines last time (the flood cert, the elevation certificate, the trade-off behind a short divisor). Waiting for his review to get them cost a full round.

## Facts: three kinds, three checkers

- **Rules** come from law, agency guides and programs. Use primary sources, checked by an independent verifier. Scope every rule exactly: which town (town limits, not mailing addresses), which year, which loan type, and which exceptions.
- **Practice** is how it really goes: what clients do, what helps, what it costs, real lender terms. Only Paul or a loan officer can confirm it. Put every practice claim on `QUESTIONS.md` with a proposed answer, and get it answered before Paul reads the page. A true statute line that nobody uses (the wind pool) is a wrong sentence.
- **Our offers** are what BrickWood does. Only Paul confirms them, as owner rows in the ledger.

Before any fact goes in, ask what the reader will do differently because of it. A local fact that changes nothing is padding, even when it's verified.

Every best case comes with its cost. If a 60-month divisor appears, the tougher terms appear with it. Prefer "can" to "do", and "most" only when it's counted.

Dated facts (limits, rates of tax, rule effective dates, local ordinances) go in `facts/dated.json` with a check date the day they're written.

## Writing

- **The reader is a normal person,** not a loan officer. 700 to 1,000 words, about a 6th grade reading level (`readability.js`). Short paragraphs, friendly and direct, the way Paul talks across a desk.
- **Lead with the answer** in the first two sentences, the way people ask it.
- **One example a reader can picture,** with round numbers and a place on the Grand Strand.
- **Simplify the words, never the rule.** Keep every condition that flips the answer for someone (an age deadline, a second way to qualify, two kinds of Zone X).
- **Use the reader's real words,** the ones on their paperwork and in their searches, explained once ("flood certificate, often called a flood cert").
- **Headings are the next questions people search.**
- **No rates, APRs, payments or down payment percentages.** No promise of approval.
- **Each post gets its own shape.** A decision table for second homes, a two-bar chart for asset depletion, a discount table for flood, steps for HECM. Paul praised exactly those.

## Design

Sleek editorial. Our own header (category, read time, title, Paul's photo), plain dark text, soft cards for the example and the call to action, charts built in HTML so they read on a phone, a side card on wide screens, open FAQ, author bio, a small legal block. Never label boxes, rows of stat cards, dark gradient banners or anything else that reads as machine-made. Check every page at 390 and 1280 px.

## Checking, in order

1. Readability and `repeat-check --strict`.
2. An independent verifier on every new rule row, and on every sentence reworded after a correction.
3. Practice claims answered by Paul or a loan officer (`QUESTIONS.md`).
4. A fresh reviewer with `prompts/owner-eye.md`, including the practitioner questions.
5. `linkcheck.js`, then open the preview yourself and click everything.
6. Only then does Paul read it.

## Handing off and keeping current

`package.js <batch>` makes one zip: the post files, `PUBLISH.md` (slugs, Yoast fields, publish order from the links between posts) and `UPDATE-CALENDAR.md`. It goes in a shared folder, never an email, because Outlook rewrites links. The posts in a batch go live together. Run `stale.js` at the start of every batch and send replacement text when a dated fact changes.

## What it cost when I skipped a step

| Skipped | What happened |
|---|---|
| Learning what BrickWood actually does | Chapter3 promises on every page; a full rewrite |
| Google suggestions for titles | Titles nobody searches; retitled twice |
| Asking Paul about practice | The wind pool line, a missing trade-off, a missing term; another round |
| Opening the preview as the reader | Broken links in front of Paul |
| Packaging as files | Outlook mangled every link for the web team |
