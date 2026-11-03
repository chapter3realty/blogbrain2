# Batch B review: five posts, read as Paul would (2026-11-03)

Fresh reviewer, `prompts/owner-eye.md` with the practitioner questions. Facts were not checked against sources (another agent does that). High and medium findings only. Links: `linkcheck.js` reports 70 links, 0 broken. Reading level 5.2 to 6.9 on all five.

| Post | Grade | Words | Shape |
|---|---|---|---|
| Horry County loan limits | 8 | 611 | Limits table, then options list |
| Builder's preferred lender | 8 | 678 | "What to compare" table, contract checklist |
| Buy before you sell | 7 | 856 | Four-option table, numbered program steps |
| VA loan for a Myrtle Beach condo | 7.5 | 695 | Three-step lookup, paths if not approved |
| Seasonal income | 7 | 548 | Three-item rule list, paperwork checklist |

None reaches 9 yet. Most fixes are one sentence each.

Across the batch (medium): all five end with the same "We help ... across ... from X and Y to Z" sentence, and the VA entitlement paragraph is nearly word for word in the loan limits post, its FAQ, the VA post and its FAQ. Vary the city line, and cut the VA post's version to one sentence plus the link. Two posts (loan limits, seasonal income) are under 700 words.

## 1. Horry County loan limits (8)

Clear, local, searched title, a real table. Nothing promises a check before an offer. No trigger terms.

- **High, practice, open in QUESTIONS.md.** "Two loans. A first mortgage at the conforming limit, plus a second loan for the rest." Keep only if Paul confirms BrickWood offers a first and second. If not: cut the bullet and the "first and second mortgage" path in the example.
- **Medium, dropped condition.** "In Horry County for 2026, a conventional loan can go up to $832,750 for a single-family home before it becomes a jumbo loan." A condo buyer reads this as "not for me." Replace: "In Horry County for 2026, a conventional loan can go up to $832,750 on a one-unit home (a house, townhouse or condo) before it becomes a jumbo loan."
- **Medium, dropped condition and missing purpose.** "If you've used part of your entitlement on another loan you haven't paid off, the county's conforming limit ... is used to figure how much of your loan VA will guarantee." Entitlement can stay tied up after a payoff if the home wasn't sold, and the reader is never told what this means for them. Replace: "If part of your entitlement is still tied up in another VA loan, the county's conforming limit, $832,750 in Horry County, sets how much of your new loan VA will guarantee. Above that, you may need some money down. A loan officer can work out your remaining entitlement."
- **Medium, no reader purpose.** "That's up $26,250 from 2025." Nobody acts on it. Cut.
- **Medium, timing.** The page goes live weeks before the 2027 limits come out, and the H1 says 2026. `dated.json` checks on 2026-12-15. Either publish with "2027 limits will be posted here when announced" in the lead, or hold the update text ready so the swap happens the day FHFA announces.

Paul would say: "Good, useful. Do we even do piggybacks?"

## 2. Builder's preferred lender (8)

Does what Paul asked: argues for comparing through a broker and stays fair ("Sometimes the builder's deal wins", "When the builder's lender might be the right call"). The compare table is the right shape. No compensation talk.

- **High, check before an offer.** "We can tell you whether the financing timeline works for your loan." This sits in "before you sign", so it reads as BrickWood reviewing the contract before the offer. Replace: "Ask us how long a loan like yours usually takes to close, so you can set that next to the contract's deadline."
- **High, check before an offer.** CTA: "Send it to us. We'll get you a Loan Estimate from our lenders so you can compare the whole loan, not just the incentive." "Send it to us" reads as "we'll review the builder's offer." Replace: "Apply with us too. You'll get a Loan Estimate to set beside the builder's lender's, so you can compare the whole loan, not just the incentive."
- **High, practice, open in QUESTIONS.md.** "Often the incentive looks bigger than it is once you see the whole loan." Paul's direction, but "often" needs his files behind it. If he can't say "often", use "Sometimes".
- **Medium, overstatement.** "The builder's lender has one set of programs. We have access to many." Many builders' lenders are large lenders with many programs; a loan officer reading this would wince. Replace: "The builder's lender can only offer its own programs. We can take your loan to many lenders."
- **Medium, what the page forgot (practice, add to QUESTIONS.md).** New construction buyers search "rate lock for new construction." A build that takes months is where the builder's lender often has the edge (long locks). Add to the table: "Rate lock | If the home won't be done for months, ask each lender how long it can lock your rate and what a longer lock costs." Also ask Paul whether Grand Strand builders make buyers pre-qualify with their lender even when financing elsewhere; if yes, one line in the contract section.
- **Medium, compliance to confirm.** "A builder in Carolina Forest offers a $10,000 closing cost credit". A credit isn't a Regulation Z trigger term on its face, but it is a dollar figure about closing costs in a lender's ad. Ask compliance once; if no, "offers a large closing cost credit".

Paul would say: "This is the argument I wanted. Don't make it sound like we review their contract."

## 3. Buy before you sell (7)

The most useful post in the batch and the right four-way shape, but it carries the most risk. Program terms match owner row O9; bridge loan matches O10; HELOC lines match O11. Loan officer pay is not mentioned. No rate, fee amount or payment.

- **High, overstatement and promise.** "Sell your old home on your timeline, with the agent of your choice, at full market value." No one can promise full market value. Replace: "Sell your old home on your timeline, with the agent of your choice, at the price you and your agent set."
- **High, dropped condition (practice, ask Paul).** "If your old home hasn't sold within 120 days after you buy, the program buys it." Also the FAQ answer. The reader needs to know at what price (the backup offer), and that the backup offer is usually below what the home might sell for. Also, the reader's home is "up north": which states does the program cover? Replace after Paul answers: "If your old home hasn't sold within 120 days after you buy, the program buys it at the backup offer price, which is usually below what the home might bring on the open market." Add: "The program works in many states, not all. Ask us whether your current home's area is covered."
- **Medium, HELOC percentages.** "Some lenders capped the total of both loans at 70% of the home's value, others at 80%." Not a 1026.16 trigger term on its face, but it is a percentage of the borrower's required equity, and LEGAL.md holds down payment percentages until compliance approves. Also, O11 was a second home, and here it is presented as the home you're leaving. Replace: "**The maximum loan nearly doubled from one lender to another,** on the same home with the same borrower, because lenders let you borrow against different shares of your home's value."
- **Medium, the client example.** "When we priced HELOCs for one client recently:" Paul said no client details. This is thin, but "one client" plus "same home with the same borrower" is a client. Replace: "When we compare HELOCs for the same home, the results can be far apart:"
- **Medium, uncounted "most".** Table: "Most move-up and relocating buyers with solid equity". Replace: "Relocating buyers with solid equity who want to move once".
- **Medium, practice, open in QUESTIONS.md.** "A HELOC is easier to set up before your home is listed for sale" and "A loan officer will check that you can qualify with both on your budget". Paul has not answered either. Keep both if he says yes.
- **Medium, sources.** `post.json` has an empty sources list. The program facts are owner rows, so name the source the way other posts do, or the page shows no sources at all.

Paul would say: "Good post. Don't promise full value, and say what happens at day 120."

## 4. VA loan for a Myrtle Beach condo (7.5)

Clear steps, a searchable lookup, honest options. The non-warrantable line rests on O6.

- **High, dropped condition.** Nowhere does the post say a VA loan is for a home you'll live in. Most Myrtle Beach condo buyers are buying a second home or a rental. A loan officer would say this first. Add to the lead or the first section: "A VA loan is for a home you'll live in as your main home. For a second home or a rental, see our guide to Myrtle Beach condo financing."
- **High, practice, open in QUESTIONS.md.** "Try a short version of the name, because projects are often listed under their legal association name, not the name on the sign." and "It takes time, and the association has to cooperate". Keep both if Paul confirms.
- **Medium, implied check.** "When you pre-qualify, tell your loan officer the building name too." and CTA "tell us the building you like ... if the building isn't VA-approved". Together these read as "we'll check the building." Cut the first sentence. CTA: "Pre-qualify with your VA benefit. A BrickWood loan officer will walk you through your options, including the other loans that fit if the building isn't on VA's list."
- **Medium, overstatement.** "If it's approved, you can use your VA benefit there." Replace: "If it's approved, a VA loan can work there. You still need to qualify, and the unit still needs a VA appraisal." Same for "An FHA loan works" and "A conventional loan works": change "works" to "can work".
- **Medium, title search words.** Focus phrase is "va approved condos myrtle beach", but the title leads with "VA Loan for a Myrtle Beach Condo". Replace title: "VA-Approved Condos in Myrtle Beach: How to Check".
- **Medium, example.** "...and the VA loan goes ahead on the unit's appraisal. Her friend's building down the street wasn't on the list, so he compared an FHA loan instead." Two people in four lines, and "goes ahead" sounds like an approval. Replace the last two sentences: "She pre-qualifies with her VA benefit, and after she's under contract the lender orders the VA appraisal on the unit."

Paul would say: "Has to be her primary. Say that."

## 5. Seasonal income (7)

Local and kind to the reader. The weakest shape in the set: three lists and a checklist, no example a reader can picture, 548 words.

- **High, practice, open in QUESTIONS.md.** "In spring, before your season gets going, your year-to-date number is small. Ask your loan officer how the timing affects your numbers before you apply." It raises a worry and sends the reader off to ask. Get Paul's answer on the best time to apply and state it.
- **Medium, dropped scope.** "If you collect unemployment every off-season, a lender can count it as income when:" The rule is Fannie Mae's; FHA and VA are open questions. Replace: "With a conventional loan, a lender can count it as income when:" Widen it only if Paul confirms FHA and VA.
- **Medium, dropped condition.** "Because it's an average, a slow year and a busy year even each other out." If income is falling, lenders can use the lower recent figure. Add: "If your income has dropped, the lender may use the lower, more recent figure instead of the average."
- **Medium, best case without its cost.** "A bank statement loan looks at 12 to 24 months of deposits instead, which captures both the busy months and the slow ones." Add: "The terms are different from a regular loan, so compare them."
- **Medium, shape.** The example has no numbers, so the reader can't see the average. Add round wages to Jake's example (a monthly income figure is not a trigger term), or a simple year strip: March to November working, December to February on unemployment.

Paul would say: "Good topic for here. Make it easier to see how the average works."
