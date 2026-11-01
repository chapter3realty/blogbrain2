# BrickWood Mortgage: the legal block on every post

`build.js` writes this block at the end of every post from one place, so all posts carry the same words. The wording below was copied from brickwoodmortgage.com on 2026-11-01 where the site already had it. BrickWood's compliance contact approves the block once; after that it is fixed.

## On every post

| Item | Wording | Where it came from |
|---|---|---|
| Disclaimer | "This article is provided for general educational purposes only and is not an offer or commitment to lend. Not all loan programs mentioned, including down payment assistance and third-party or government programs, are offered by BrickWood Mortgage Inc. Program availability, terms and eligibility vary by lender and location and are subject to change. Please contact a licensed loan officer to find out which programs we currently offer." | BrickWood's existing posts, word for word |
| Agency statement | "This material is not provided by, endorsed by, or approved by HUD, FHA, VA, or any government agency." | BrickWood's site footer, word for word |
| Equal Housing | Equal Housing Lender logo (the site's own file) and "Equal Housing Lender. We do business in accordance with the Fair Housing Act and the Equal Credit Opportunity Act." | Logo from the site; the sentence is new and needs approval |
| Company and NMLS | "BrickWood Mortgage Inc. NMLS #189497. 1601 Glenns Bay Rd., Surfside Beach, SC 29575. (843) 314-4101." The NMLS number links to NMLS Consumer Access. | Site footer and contact page |
| Author | "By Paul Hankins, Founder, CEO and Broker, NMLS #281393", linked to his loan officer page | BrickWood's About and loan officer pages |

## On some posts

| When | Wording |
|---|---|
| The post links to Chapter3 Realty (posts 1, 2, 3) | "BrickWood Mortgage Inc. has a business relationship with Chapter3 Realty. You are not required to use Chapter3 Realty. There are frequently other providers available. You are free to shop around." This mirrors the wording approved on chapter3realty.com. |
| Reverse mortgage (post 4) | "A reverse mortgage is a loan. The borrower must live in the home as a principal residence, keep paying property taxes, homeowners insurance and any HOA dues, and keep the home in good repair. The loan becomes due when the last borrower sells the home, moves out permanently or dies, or does not meet these terms. Interest and fees are added to the loan balance over time. Counseling from a HUD-approved counselor is required before applying." |

## Never on a post

- An interest rate, APR, payment amount, number of payments or finance charge (Regulation Z trigger terms, 12 CFR 1026.24).
- A down payment percentage, until owner question 1 is answered.
- "Guaranteed approval", "lowest rates", "no closing costs", "pre-approved" said to the reader.
- Any wording that discourages a reader based on a protected class, or that describes who lives somewhere.

## Owner questions

1. **Down payment percentages.** May a post state an agency limit as a rule, for example Fannie Mae's 70% (80% at 62 or older) loan cap on asset depletion loans? Proposed answer: not until compliance approves the wording once. The posts now say what changes the down payment and offer the reader their own figure.
2. **South Carolina license number.** The site shows NMLS #189497 but no South Carolina license type or number. If BrickWood's license is required on advertising, send it and `build.js` adds it to every post. NMLS Consumer Access blocks automated lookups, so this repo could not read it.
3. **The Equal Housing sentence.** Approve "We do business in accordance with the Fair Housing Act and the Equal Credit Opportunity Act", or keep the logo alone.
