# BrickWood blog: the owner's rules

Read this before writing or editing any BrickWood post. It wins over anything carried over from the Chapter3 files in this repo. All BrickWood work happens in this repo (blogbrain2), never in the original Blog-Brain repo or the website repo (owner, 2026-11-01).

## The owner's first read, 2026-11-01

> "BrickWood Doesnt do what chapter3 says it will do they dont check hoa papers or anything before they offer we do nothing when it comes to underwriting before someone offers this is a completley different business than chapter3 and chapter3 promises dont trasnlate to brickwood. Also the site looks very AI generated and these titles arent SEO worthy nobody searches like this ... some of the data is wrong ... we have lenders that will divide by less ... the information is a hard read it doesnt look easy to swallow its complicated it doesn't look fun ... this is too overly complicate for a normal reader"

## 1. Promise only what BrickWood does

BrickWood is a mortgage broker. It pre-qualifies borrowers, answers questions, takes applications and shops the loan with its lenders. It does no underwriting or property checks before a buyer makes an offer.

- Never write "we check the building", "we read the HOA papers", "we order the flood check", "we confirm", "before you offer, we...". Those are Chapter3 services, and BrickWood does not do them.
- Say who does what. After the buyer is under contract and applies, **the lender** reviews the condo, orders the flood zone determination and underwrites the loan.
- Offers on a page: pre-qualify online, talk to a loan officer, call, or use the site's calculators. Nothing else.
- No Chapter3 links or Chapter3-style service promises in BrickWood posts.

## 2. Titles people actually search

- Build the H1 and title tag from Google's search suggestions for the topic (type the topic into Google and read what it suggests). Lead with the words people type: "asset depletion loan", "HECM for purchase", "is flood insurance required for a mortgage", "second home vs investment property", "condo loan requirements".
- No clever question that nobody types ("Can you get a mortgage using your assets instead of income?", "Did the 2026 condo loan changes make your building harder to finance?").
- H2s are the next questions people search ("Can I rent out my second home?", "Is flood insurance required in Zone X?").

## 3. Easy to swallow

- Write for a normal reader, not a loan officer. Aim for a 7th to 8th grade reading level (`node brickwood/readability.js`).
- 700 to 1,000 words. One idea per section. Short paragraphs.
- Lead with what the reader can do, not with rules. Use the rules only where they change the reader's decision.
- At most a few numbers per section. Explain any loan word the first time, or leave it out.
- One worked example a reader can picture, with round numbers.
- Friendly and direct, like a loan officer talking across the desk. It can be light. It is never salesy.
- Section numbers, rule citations and section IDs belong in the sources list, not in the body.

## 4. Not AI-looking

- No label boxes ("THE SHORT ANSWER"), no rows of stat cards, no dark gradient banners, no numbered circles, no table of contents on a short post.
- The page looks like a well-made blog article on BrickWood's site: the title, a byline, plain readable text, a simple table or picture where it helps, one plain call to action box with the site's blue button.
- Two posts must not share a skeleton. Each topic gets the shape its reader needs.

## 5. Real program terms, not only agency rules

Fannie Mae and FHA rules are a floor, not the whole market. BrickWood's lenders often allow more. When the owner or a lender gives real program terms, the post shows them, and says terms vary by lender. Example: asset depletion lenders who divide by 60 months instead of 360 (owner, 2026-11-01).

## 6. True in practice, not only on paper (Paul, 2026-11-02)

A sentence can match its source and still be wrong for BrickWood's clients ("None of our clients use the pool its really expensive"). Before Paul reads a page, every practice claim goes to a loan officer in `QUESTIONS.md`. A practice claim covers what clients do, what helps, costs, and real lender terms. The full lesson is in `CRAFT.md` 2. Run `node brickwood/linkcheck.js` and open the preview yourself before sending it.

## Still true from before

No interest rate, APR, payment amount or down payment percentage. Every fact from a verified row or from the owner. The legal block on every post (`LEGAL.md`).
