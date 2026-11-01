# BrickWood posts: owner's-eye re-check, 2026-11-01

Reviewer: a fresh agent that did not write these posts. Checked against the owner's first read in `VOICE.md`, and nothing more. Files read: each `body.html`, `post.json` (title, H1, dek, FAQ, sources), the ledger, the verifier's file.

## Grades

| Post | Grade | Main reason it is not a 10 |
|---|---|---|
| Asset depletion | **9** | Two lines speak for "lenders" when the source is one lender. |
| HECM for Purchase | **8** | "The seller can't give you a credit" is a line the verifier struck (R17, rule 30). |
| Condo loan requirements | **8** | "The limit on rentals is gone" plus "Good news for beach buildings full of rentals" leans on banned line 3. The non-warrantable lender claim has no owner row. |
| Flood insurance | **7** | The lead breaks banned line 9 (A and V only). Four smaller fact slips. |
| Second home vs investment | **8** | Down payment and pricing lines are not scoped to Fannie Mae. "A manager you can fire" is not the rule. 629 words, under the 700 floor. |

## What the owner asked for, post by post

| Check | Asset | HECM | Condo | Flood | Second home |
|---|---|---|---|---|---|
| 1. BrickWood promises a check or review before an offer | None | None | None. "Once you're under contract and apply, the lender reviews the building." Correct (O5). | None. "the lender orders an official flood zone check". Correct. | None |
| 2. Title and H1 are searched words | Yes: "asset depletion loan requirements", "mortgage with no income" | Yes: "hecm for purchase", "how to buy a house with a reverse mortgage" | Lead phrase yes ("condo loan requirements"). "What Changed for Buyers" and "2026" are not suggested. | Yes, exact suggestion. "does flood zone x require flood insurance for a mortgage" is also suggested, and matches an H2. | Yes: "second home vs investment property mortgage". "Which Mortgage Do You Need?" is not typed, but it is the H1 tail only. |
| 3. Reading grade (readability.js) | 6.5 | 4.8 | 5.4 | 5.7 | 5.4 |
| 4. Facts outside a verified or owner row | 3 small | 2 | 3 | 6 | 4 |
| 5. Rate, APR, payment, down payment figure, approval promise | None. $2,500 and $15,000 are labeled income. | None, except "you never make a monthly mortgage payment" (see fix) | None | None | None |

## Rows checked by this reviewer with plain curl

- **F20: VERIFIED.** 12 CFR 339.9(a) and (c): a written notice "within a reasonable time before the completion of the transaction". It binds FDIC-supervised institutions, so it carries the same scope note as F1 and F8. The page's "you'll get a written notice before closing" is fine.
- **F21: CORRECT TO** "Most homeowners insurance does not cover flood damage." floodsmart.gov says "most", twice. The page says it never does and calls a flood policy "the only way".
- **F22: VERIFIED.** floodsmart.gov flood zones page: "Zones B & X ... moderate risk", "Zones C & X are at a lower risk". The table's "Moderate or low risk" matches.
- **R18: VERIFIED.** 24 CFR 206.3: principal limit uses "the age of the youngest borrower or Eligible Non-Borrowing Spouse". The example ("based on her age, the younger of the two") matches R16 and R18.

## Changes needed

### Asset depletion

1. "Some of the lenders we work with divide by just 60." O1 is one lender.
   Replace: "Some of the lenders we work with divide by fewer months. One divides by just 60."
2. "Your mortgage itself is still a normal home loan." No row. Delete it.
3. "Lenders don't count every dollar the same way. Cash counts in full. Stocks and retirement accounts count for less, because their value can drop and withdrawals can be taxed." The reasons are not in a row, and "Cash counts in full" is O2 stated as a rule for all lenders.
   Replace: "Lenders don't count every dollar the same way. Here is how one of our lenders counts them:"
4. "These are typical, from one of the lenders we work with:"
   Replace: "Here are the rules at one of the lenders we work with:" ("typical" has no row.)
5. FAQ, "Do retirement accounts count?": "Cash in checking or savings counts in full."
   Replace: "That lender counts cash in checking or savings in full." (Banned line 20 forbids this as a general rule.)

### HECM for Purchase

1. Lead: "and you never make a monthly mortgage payment." R14: you may pay.
   Replace: "and you don't have to make a monthly mortgage payment."
2. Requirements: "The seller can't give you a credit toward it." R17 verdict says drop it; banned line 30.
   Delete the sentence.
3. "It fits less well if you may move again soon, because the costs come up front" No row for up-front costs.
   Replace: "It fits less well if you may move again soon, or if leaving the full home to your heirs matters most to you."
4. Low: "The counselor is independent" has no row. Replace with "The counselor walks you through the loan and your other choices."

### Condo loan requirements

1. Point 2. "The limit on rentals is gone, for finished buildings." and "Good news for beach buildings full of rentals." Banned line 3: Fannie Mae still limits one owner's units, and treats a building of mostly rentals as a possible condo hotel.
   Replace the paragraph: "**2. The 50% investor limit is gone, for finished buildings.** Fannie Mae used to require that at least half the units in a building be owned by people who live there or use them as second homes, before it would back a loan on a rental unit. That rule is gone for established buildings. A building full of rentals can still fail if it runs like a hotel. A brand-new building still needs at least half its units sold to people who will live there or use them as second homes." This also fixes the hardest paragraph on the page (two long sentences, the same phrase twice).
2. Point 1 and FAQ leave out Fannie Mae's PERS review (C1). "now needs a full review of its budget, savings, repairs and insurance, or approval from the FHA."
   Replace: "now needs a full review of its budget, savings, repairs and insurance, FHA approval, or a review by Fannie Mae itself."
   FAQ: "Established buildings with more than 10 units now need a full review, FHA approval or a Fannie Mae review."
3. "we can take your loan to lenders that make condo loans outside Fannie Mae's rules" and CTA "We work with lenders for both regular and non-warrantable condos". No owner row says BrickWood has such lenders. Ask the owner and add an O row. Until then:
   Body: "BrickWood is a mortgage broker, so we can shop your loan with our lenders and tell you which ones lend on condos outside Fannie Mae's rules."
   CTA: "Get pre-qualified with BrickWood. We shop your loan with several lenders, so you can compare options."
4. Low: "Fannie Mae won't finance a unit" Fannie Mae buys loans. Replace "finance" with "back a loan on".
5. Low, sources list: LL-2026-03 links to the bot-check URL. Use the copy the verifier read (tenaco.com). The "Full Review requirements" link is B4-2.2-01, not 2.2-02 (C9).
6. Optional title tag: "Condo Loan Requirements for Conventional Loans: 2026 Changes". "condo requirements for conventional loans" is a Google suggestion; "What Changed for Buyers" is not.

### Flood insurance

1. Lead: "...which is any FEMA flood zone that starts with A or V. ... If the home is outside those zones, flood insurance is your choice." Banned line 9 (F3: CBRS and OPA areas too).
   Replace the last sentence: "It is also required in a few protected coastal barrier areas. Outside those areas, flood insurance is usually your choice."
   Zone X answer: replace "No. Your lender won't require it in Zone X." with "Usually not."
2. "A shed or detached garage in the zone doesn't trigger the rule" Banned line 15 (F12).
   Replace: "A shed, or a detached garage with no living space, in the zone doesn't trigger the rule when the house itself is outside it."
3. "A home is in the zone if any part of the house is in it." No row. Delete it, or add a row from Fannie Mae B7-3-06.
4. "Homeowners insurance doesn't cover flooding, so a flood policy is the only way to be covered." F21 says "most".
   Replace: "Most homeowners insurance doesn't cover flooding, so you need a separate flood policy."
5. "Coverage for your furniture and belongings is optional. Flood insurance never covers the land itself." F18 and F2 verdicts: the rule covers personal property that secures the loan; the "not the land" part is about required coverage.
   Replace: "Coverage for your furniture and belongings is usually your choice. The required coverage is on the house, not the land under it."
6. "A federal flood policy bought with your new loan starts at closing." Banned line 13 (F9). Same in the FAQ.
   Replace: "A federal flood policy bought with your new loan starts at closing, as long as you apply and pay by closing."
7. LOMA: "If a house sits higher than the flood level shown on the map" A house raised on pilings does not get a LOMA. F19: the ground next to the house must be above the flood level.
   Replace: "If the ground right next to the house is higher than the flood level on the map, the owner can ask FEMA for a Letter of Map Amendment, called a LOMA."
8. Condo section: "the HOA carries a master flood policy on the building" F10 is what the lender requires, not what every HOA does.
   Replace: "the lender looks for a master flood policy the HOA carries on the building." Also drop "small" from "a small policy of your own".
9. Low: "Common near marshes, rivers and low ground." No row. Replace the cell with "High risk."

### Second home vs investment

1. "When you buy, an investment property needs a bigger down payment than a second home." S8 is a Fannie Mae rule; VOICE 5 says lenders differ.
   Replace: "With a Fannie Mae loan, an investment property needs a bigger down payment than a second home when you buy."
2. "Investment property loans are priced higher, through a higher rate or an extra fee at closing. Some second home loans carry an added charge too." S4 is Fannie Mae's fee.
   Replace: "Fannie Mae adds a charge to every investment property loan, and to some second home loans. It shows up in the rate or as a fee at closing."
3. "Listing the house yourself is fine, and so is hiring a manager you can fire." S2: the test is who controls the bookings, not whether you can fire the manager.
   Replace: "Listing the house yourself is fine, and so is hiring a manager, as long as you decide when the house is booked."
4. "At closing, you sign a statement saying how you'll use the home." No row. S11 is about the application.
   Replace: "On your loan application, you say how you'll use the home."
5. "A DSCR loan can even qualify you on the rent alone, with no personal income check." No DSCR row. Cut "with no personal income check", or add an owner row.
6. Low: "We'll match it to a second home or investment loan from our lenders." Replace with "We'll shop it with our lenders for the right second home or investment loan."
7. Low: 629 words, under the 700 floor in VOICE 3. Not worth padding. If the owner wants it longer, the next searched question is "second home vs investment property tax implications", and the tax section can grow from S6 only.

## Not changed and fine

- No Chapter3 links or Chapter3 service promises on any page.
- No label boxes, stat cards, numbered circles or table of contents in the post bodies. The dark hero band in the preview (`.pv-hero`) is preview chrome, not post markup.
- Each post has its own shape: formula and chart, steps and picture, numbered changes, zone table, plan table.
- All five read at grade 4.8 to 6.5. No paragraph is still hard except condo point 2 (fixed above).
