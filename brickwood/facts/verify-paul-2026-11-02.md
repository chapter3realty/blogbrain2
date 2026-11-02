# Facts check of Paul's rows, 2026-11-02

Independent check of ledger rows P1 to P6 and the sentences that use them. Sources pulled with plain curl on 2026-11-02 (no user-agent change). fema.gov returned 403 and was not used. The posts and the ledger were not edited.

Kind: R = rule (law, agency guide, program). P = practice claim. O = our own offer.

## Ledger rows

| ID | Kind | Result | Source quote |
|---|---|---|---|
| P1 | R | VERIFIED, two conditions to keep | floodsmart.gov/flood-zones-and-maps/what-is-my-flood-zone: "Zone B & X: Area of moderate flood hazard, usually between the limits of 100-year and 500-year floods. B Zones are also used to designate base floodplains of lesser hazards, such as areas protected by levees from 100-year floods, or shallow flooding areas with average depths of less than 1 foot or drainage areas less than 1 square mile." "Zone C & X: Area of minimal flood hazard, usually depicted on Flood Insurance Rate Maps (FIRMs) as above the 500-year flood level. Zone C may have ponding and local drainage problems." Both tabs: "Flood insurance is recommended." The row's "shallow flooding" leaves out "less than 1 foot". |
| P2 | R | VERIFIED | agents.floodsmart.gov/articles/risk-rating-20-what-goes-rate (May 2022): "Under Risk Rating 2.0, an EC is no longer required to purchase coverage. Instead, FEMA will use its tools and resources to determine the first-floor height of a building as one of the factors used when calculating rates. However, a property owner may choose to provide an EC to the agent to determine if it will lower the cost of insurance." |
| P3 | P (a name, not a rule) | VERIFIED as usage, from industry sources; the form name is a rule | The form is set by statute: 42 U.S.C. 4104b(a) (law.cornell.edu): "shall develop a standard form for determining ... whether the building or mobile home is located in an area ... having special flood hazards". Its name, "Standard Flood Hazard Determination", is on DocMagic's lender help page. The common names: Wolters Kluwer loan software help ("order the certificate", "Show Flood Certificate", then "print the Standard Flood Determination document"); DocMagic page titled "Flood Certification"; Krieg DeVault (law firm), "A flood certification is a document that states the flood zone status of real property." "Flood certificate", "flood certification" and "flood cert" are all in use. No FEMA page opened with plain curl uses the term. Paul is the practitioner for the usage. |
| P4 | R | WRONG as a page sentence (row is right; the page drops its date test for residency) | S.C. Code 12-37-250(A)(1): "(i) has been a resident of this State for at least one year and has reached the age of sixty-five years on or before December thirty-first; ... preceding the tax year in which the exemption is claimed". Read this way, the year of residency is counted by the same December 31. (A)(3): apply "before July sixteenth of that tax year". (A)(5): "'Dwelling place' means the permanent home and legal residence of the applicant." The SC DOR and Horry auditor pages returned 404, so this reading is from the statute alone. |
| P5 | R | VERIFIED, with one note | 24 CFR 206.51: "the project in which the unit is located must be acceptable to the Commissioner as set forth in 24 CFR 203.43b." 203.43b(c): "a Condominium Unit must be located in a Condominium Project approved by HUD or a DELRAP mortgagee ..., or meet the additional requirements for approval as a Site Condominium or Single-Unit Approval." 203.43b(i)(1): Single-Unit Approval only in a project that is complete, is not a manufactured home, and "has at least five (5) dwelling units". The ledger's "VERIFIED (C12)" points to C12, which has no status. 206.51 and 203.43b were read here, so P5 stands on its own. Note: the regulation lists a third way (Site Condominium), and the HUD handbook's HECM rules for Single-Unit Approval were not checked. |
| P6 | R | VERIFIED | 26 U.S.C. 280A(d)(1): "a taxpayer uses a dwelling unit during the taxable year as a residence if he uses such unit ... for personal purposes for a number of days which exceeds the greater of (A) 14 days, or (B) 10 percent of the number of days during such year for which such unit is rented at a fair rental." |

## Sentences in the posts

### flood-insurance-mortgage-myrtle-beach

| Sentence | Kind | Result |
|---|---|---|
| Table: "Shaded X (called B on older maps) / Moderate risk. Usually between the 100-year and 500-year flood lines, or shallow flooding." | R | CORRECT TO: "Moderate risk. Usually between the 100-year and 500-year flood lines, or shallow flooding, usually under a foot deep." [P1: "average depths of less than 1 foot"] |
| Table: "Unshaded X (called C on older maps) / Low risk. Usually above the 500-year flood line." | R | VERIFIED (P1) |
| Table, both X rows: "No, but you can still buy it" | R | CORRECT TO: "Usually not, but you can still buy it". The lead and the FAQ name the protected coastal barrier areas as a second case where it is required (row F3). The table and the Zone X section drop it. |
| "Once you're under contract and apply, the lender orders a flood certificate (often called a flood cert) on the home." | P | VERIFIED as usage (P3). Paul is the practitioner for "once you're under contract and apply". |
| "It's the official record of the home's flood zone." | R | CORRECT TO: "It's a standard FEMA form that shows which flood zone the house is in on FEMA's map." "The official record" overstates it: the FEMA map is the official record, and the form is a determination made from it (42 U.S.C. 4104b). |
| "Usually not. Your lender won't require it in shaded or unshaded Zone X." | R, plus P | CORRECT TO: "Usually not. Federal rules don't require it in shaded or unshaded Zone X, unless the home is in one of the protected coastal barrier areas." Whether a lender ever requires it in Zone X by its own policy is a practice claim (needs practitioner). Question for the sheet: "Do any of BrickWood's lenders require flood insurance on a Zone X home?" |
| "But Zone X isn't "no risk", and homes there can flood, often from heavy rain and drainage problems." | R, plus P | CORRECT TO: "But Zone X isn't "no risk". Homes there can flood, for example from heavy rain that collects or drains poorly." [P1: "ponding and local drainage problems"]. "Often" has no source. |
| "FEMA recommends flood insurance there." | R | VERIFIED (P1) |
| "An elevation certificate is a form a surveyor fills out showing how high the house sits compared with the flood level on the map." | R | VERIFIED in substance (P2 does not define the form; not a P row). |
| "FEMA no longer requires one to buy a federal flood policy. It estimates each home's height from its own data." | R | VERIFIED (P2) |
| "But if the house sits higher than FEMA's estimate, giving the certificate to your insurance agent may lower your premium." | R | VERIFIED. The source says only "to determine if it will lower the cost". "If the house sits higher than FEMA's estimate" is a fair reading, not a quote. |
| "Ask the seller early whether they have one. If not, your agent can tell you whether paying a surveyor for one is likely to help on that house." | P | NEEDS PRACTITIONER. Change "your agent" to "your insurance agent": a buyer will read "your agent" as the real estate agent. |
| post.json FAQ: "In shaded or unshaded Zone X it's your choice, though homes there can still flood." | R | CORRECT TO: "In shaded or unshaded Zone X, outside those coastal barrier areas, it's usually your choice, though homes there can still flood." |
| post.json FAQ: "A flood certificate, or flood cert, is the lender's official record of a home's FEMA flood zone." | R | CORRECT TO: "A flood certificate, or flood cert, is a standard FEMA form the lender uses to record a home's FEMA flood zone." |
| post.json FAQ: "The lender orders it after you apply. If the home is in a high-risk zone, flood insurance becomes a requirement of the loan." | P, R | VERIFIED (P3 usage; F3 for the requirement) |

### can-you-purchase-a-home-with-a-reverse-mortgage

| Sentence | Kind | Result |
|---|---|---|
| body and post.json FAQ: "If you turned 65 by December 31 of the year before [the tax year], and have lived in South Carolina for at least a year, the first $50,000 of your main home's value is exempt from property taxes." | R | WRONG: the plain wording drops the date for the year of residency. Someone who moved in June 2026 would read it as qualifying for 2027 in June 2027. CORRECT TO: "If by December 31 of the year before the tax year you were 65 and had lived in South Carolina for at least a year, the first $50,000 of your main home's value is exempt from county, city and school property taxes." [12-37-250(A)(1)]. The July 16 sentence in the body is right; keep it. Add it to the FAQ too: "Apply to the county auditor before July 16 of that tax year." |
| body: "A condo needs an FHA-approved building, or FHA approval for that single unit." | R | VERIFIED (P5). Optional fuller version: "A condo needs an FHA-approved building. If the building isn't approved, the unit may get approval on its own, if the building is finished and has at least five units." [203.43b(i)(1)] |
| body: "It needs an FHA-approved building or a single-unit FHA approval." | R | VERIFIED (P5) |
| post.json FAQ: "Yes, if the condo is in an FHA-approved building or the unit gets FHA approval on its own (a single-unit approval)." | R | VERIFIED (P5). Same optional five-unit condition. |

### myrtle-beach-second-home-vs-investment-property

| Sentence | Kind | Result |
|---|---|---|
| FAQ: "The two-week figure people often hear is an IRS tax rule about personal use of a rental, not a mortgage rule. Ask your tax advisor about that one." | R | VERIFIED (P6). It names the rule without stating it, so no condition is dropped. If the page ever states the rule, it must keep "or 10% of the days it's rented, whichever is more". "People often hear" is a practice claim of no weight. |
| FAQ: "Fannie Mae's second home rule doesn't set a number of days. You must live there for some part of the year, and the home must be livable year-round." | R | Not a P row. It rests on S1 and S12, which have no status yet. |

## Counts

- Rows: 5 verified (P1, P2, P3 as usage, P5, P6), with conditions noted; 1 wrong as used on the page (P4, residency date).
- Sentences: 8 to correct, 1 needs a practitioner, the rest verified.
- Nothing here should be held back from publishing once the corrections are made.

## Struck wording (for a struck list, if BrickWood gets one)

| Pattern | Struck | Use |
|---|---|---|
| `lender won't require it in shaded or unshaded Zone X` | Your lender won't require it in shaded or unshaded Zone X. | Federal rules don't require it in shaded or unshaded Zone X, unless the home is in one of the protected coastal barrier areas. |
| `official record of (the\|a) home's (FEMA )?flood zone` | the official record of the home's flood zone | a standard FEMA form that shows which flood zone the house is in |
| `turned 65 by December 31[^.]{0,60}, and have lived in South Carolina for at least a year` | If you turned 65 by December 31 of the year before, and have lived in South Carolina for at least a year | If by December 31 of the year before the tax year you were 65 and had lived in South Carolina for at least a year |
| `can flood, often from heavy rain` | homes there can flood, often from heavy rain and drainage problems | Homes there can flood, for example from heavy rain that collects or drains poorly. |
