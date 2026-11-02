# Local facts check, 2026-11-02

Independent check of ledger rows L1 to L11 and the sentences in the five BrickWood posts that use them or name a local place, tax or rule. Sources pulled with plain curl on 2026-11-02. The posts were not edited.

## Ledger rows

| ID | Result | Source quote |
|---|---|---|
| L1 | VERIFIED | OpenFEMA NfipCommunityStatusBook, lastRefresh 2026-08-25: HORRY COUNTY * 5 / 25% / 10%; MYRTLE BEACH, CITY OF 5 / 25% / 10%; PAWLEYS ISLAND, TOWN OF 5 / 25% / 10%; NORTH MYRTLE BEACH, CITY OF 6 / 20% / 10%; SURFSIDE BEACH, TOWN OF 7 / 15% / 05%; GEORGETOWN COUNTY * and GEORGETOWN, CITY OF 7 / 15% / 05%; Aynor, Conway, Loris, Atlantic Beach, Briarcliffe Acres: no class. All participatingInNFIP true, sanction false. |
| L2 | VERIFIED | currentlyEffectiveMapDate: Horry County and its towns 12/16/21; AYNOR "(NSFHA)" = "No Special Flood Hazard Area - All Zone C"; GEORGETOWN COUNTY * 06/18/25; GEORGETOWN, CITY OF and PAWLEYS ISLAND 05/09/23. |
| L3 | CORRECT TO: "At 65 or older, after one year as a South Carolina resident, the first $50,000 of the fair market value of your legal residence (permanent home, owned in fee simple or life estate) is exempt from county, municipal, school and special assessment property taxes. Apply to the county auditor, and to the town or city if the home is inside one, before July 16 for that tax year." | 12-37-250(A)(1): "dwelling place ... exempt from county, municipal, school, and special assessment real estate property taxes"; (A)(4)(a): "application ... must be made to the auditor of the county and to the governing body of the municipality in which the dwelling place is located"; (A)(5): "'Dwelling place' means the permanent home and legal residence of the applicant." |
| L4 | VERIFIED | 12-6-1120(4): "South Carolina gross income is determined without application of Internal Revenue Code Sections ... 86 (Social Security and Tier 1 Railroad Retirement Benefits)". |
| L5 | VERIFIED (note: school debt-service millage still applies) | 12-37-220(B)(47)(a): "exempt from all property taxes imposed for school operating purposes but not including millage imposed for the repayment of general obligation debt." |
| L6 | VERIFIED (registry says what the row says) | registry rental-vs-residence-tax: "A rental's property tax bill in Horry County is about 3.3 times (unincorporated) to 4.3 times (City of Myrtle Beach) an owner-occupant's, on 2025 and 2026 millage." The 6% ratio applies to any non-legal-residence, so it covers a second home too. |
| L7 | VERIFIED (registry) | mb-lodging-tax: "about 13 percent in total lodging taxes"; sc-transient-days: "supplied to the same person for a period of ninety continuous days are not considered proceeds from transients". |
| L8 | VERIFIED (registry; also checked live) | nmb.us/833, 2026-11-02: "All short-term rentals located within the City of North Myrtle Beach are required to obtain a business license." "There is currently no special zoning or permit process required beyond standard licensing." The page also lists public sessions on STRs, so the rule may change. |
| L9 | VERIFIED (registry; spot-checked at source) | 38-75-310(5)(c): "all areas in Horry County east of U.S. Highway No. 17 or By-Pass 17, whichever is farther to the west". Georgetown County has its own line, (5)(b). |
| L10 | VERIFIED | horrycountysc.gov/Online-Services/FEMA-Flood-Maps: "The FEMA Flood Insurance Rate Maps (FIRM) for Horry County have been scanned and converted to DjVu format for viewing." |
| L11 | VERIFIED | Census Bureau 2020 place-by-county file (www2.census.gov/geo/docs/reference/codes2020/place_by_cou/st45_sc_place_by_county2020.txt): "Horry County / Carolina Forest CDP / CENSUS DESIGNATED PLACE"; "Horry County / Socastee CDP / CENSUS DESIGNATED PLACE". Same file: "Georgetown County / Murrells Inlet CDP" (Murrells Inlet CDP is in Georgetown County, not Horry). |

## Sentences in the posts

### flood-insurance-mortgage-myrtle-beach

| Sentence | Result | Source quote |
|---|---|---|
| "Horry County also posts its FEMA flood maps on the county site." | VERIFIED | L10 |
| "The maps in effect for Myrtle Beach, North Myrtle Beach, Surfside Beach, Conway and the rest of Horry County date from December 16, 2021." | VERIFIED | L2 (Aynor has no high-risk zone) |
| "In Georgetown County, Pawleys Island's map dates from May 9, 2023." | CORRECT TO: "In Georgetown County, the Town of Pawleys Island's map dates from May 9, 2023. The map for the rest of the county, outside the City of Georgetown, dates from June 18, 2025." | L2: PAWLEYS ISLAND, TOWN OF 05/09/23; GEORGETOWN COUNTY * 06/18/25. Mainland Pawleys Island addresses are unincorporated county. |
| Heading "Grand Strand towns get a discount on flood insurance" | CORRECT TO: "Some Grand Strand communities get a discount on flood insurance" | L1: five towns get none; one discounted community is unincorporated Horry County, not a town. |
| "Several Grand Strand communities take extra flood-safety steps through FEMA's Community Rating System, and in return federal flood policies there cost less." | VERIFIED | OpenFEMA field classRating: "floodplain activities that are higher than the minimum requirements of the National Flood Insurance Program (NFIP)" |
| Table row "City of Myrtle Beach 25% 10%" | VERIFIED | L1 |
| Table row "Unincorporated Horry County (like Carolina Forest, Socastee, Murrells Inlet on the Horry side) 25% 10%" | CORRECT TO: "Unincorporated Horry County (like Carolina Forest, Socastee and Garden City)" | Census 2020: Murrells Inlet CDP is in Georgetown County; Garden City CDP is in Horry County. |
| Table row "Pawleys Island 25% 10%" | CORRECT TO: "Town of Pawleys Island" | L1: the 25% is the Town only. Mainland Pawleys Island addresses are unincorporated Georgetown County, 15% / 5%. |
| Table rows "North Myrtle Beach 20% 10%", "Surfside Beach 15% 5%" | CORRECT TO: "City of North Myrtle Beach", "Town of Surfside Beach" | L1: discount is by community limits. Surfside Beach mailing addresses outside town limits are unincorporated Horry, 25% / 10%. |
| Table row "Georgetown County and the City of Georgetown 15% 5%" | CORRECT TO: "Unincorporated Georgetown County (like Murrells Inlet) and the City of Georgetown" | L1: "GEORGETOWN COUNTY *" (asterisk = unincorporated areas). Without "unincorporated" it reads as covering Pawleys Island too. |
| Table row "Conway, Loris, Aynor, Atlantic Beach, Briarcliffe Acres None None" | VERIFIED | L1 |
| "These discounts apply to policies through FEMA's National Flood Insurance Program." | VERIFIED | Dataset: "provides the available insurance discount rates for communities that participate in the Community Rating System (CRS)" within the NFIP status book. (fema.gov CRS page returned 403 to plain curl; not worked around.) |
| "In Myrtle Beach, an X-zone policy also gets the 10% discount above." | CORRECT TO: "In the City of Myrtle Beach, a federal flood policy on a Zone X home also gets the 10% discount above." | L1: nonSfhaDiscount 10% is a CRS discount on NFIP policies; it does not follow a private policy, and the paragraph before it says only "a separate flood policy". |
| "Homes east of U.S. 17 or Bypass 17, whichever is farther west, are in South Carolina's coastal wind pool area." | CORRECT TO: "In Horry County, homes east of U.S. 17 or Bypass 17, whichever is farther west, are in South Carolina's coastal wind pool area." | 38-75-310(5)(c) is Horry only; (5)(b) sets a different line for Georgetown County (Pawleys Island). |
| "In Myrtle Beach, that line is the Bypass." | VERIFIED | L9 |
| FAQ "Federal flood policies in the City of Myrtle Beach get a 25% discount in high-risk zones and 10% elsewhere, through FEMA's Community Rating System." | VERIFIED | L1 |
| FAQ "North Myrtle Beach gets 20% and 10%, and Surfside Beach 15% and 5%." | CORRECT TO: "The City of North Myrtle Beach gets 20% and 10%, and the Town of Surfside Beach 15% and 5%." | L1 (by community limits) |

### myrtle-beach-second-home-vs-investment-property

| Sentence | Result | Source quote |
|---|---|---|
| "It's assessed at 4% of its value instead of 6%, and it's exempt from school operating taxes." | VERIFIED | 12-43-220(c)(1) "four percent"; (c)(2)(iv) "the six percent property tax assessment ratio applies"; L5 |
| "The result in Horry County: a second home or rental's tax bill runs about 3.3 times what an owner who lives there pays on the same house, and about 4.3 times inside the City of Myrtle Beach." | CORRECT TO: "The result at 2025 and 2026 tax rates: in unincorporated Horry County, a second home or rental's tax bill runs about 3.3 times what an owner who lives there pays on the same house, and about 4.3 times inside the City of Myrtle Beach." | L6: "3.3 times (unincorporated) to 4.3 times (City of Myrtle Beach) ... on 2025 and 2026 millage". "Second home" is fine: any non-legal-residence is at 6%. |
| FAQ "A second home or rental in Horry County pays about 3.3 times what an owner-occupant pays on the same house, and about 4.3 times inside the City of Myrtle Beach." | CORRECT TO: "A second home or rental in unincorporated Horry County pays about 3.3 times what an owner-occupant pays on the same house, and about 4.3 times inside the City of Myrtle Beach, at 2025 and 2026 tax rates." | L6 |
| FAQ "Your main home gets a 4% assessment and a school tax exemption that a second home doesn't." | CORRECT TO: "Your main home gets a 4% assessment and an exemption from school operating taxes that a second home doesn't." | L5: school debt-service millage is not exempt. |
| "A short-term rental inside the City of Myrtle Beach collects about 13% in lodging taxes on each stay." / FAQ "Short-term stays in the City of Myrtle Beach collect about 13% in lodging taxes." | VERIFIED | L7 |
| "South Carolina counts any stay under 90 days in a row as short-term." | CORRECT TO: "For lodging taxes, South Carolina counts any stay under 90 days in a row as short-term." | L7: the 90-day line is the accommodations-tax definition of transient, not a general rule. |
| "The city requires a business license to rent short-term." (North Myrtle Beach) | VERIFIED | L8 |

### myrtle-beach-condo-financing

| Sentence | Result | Source quote |
|---|---|---|
| "A short-term rental inside the City of Myrtle Beach collects about 13% in lodging taxes on each stay." / FAQ "In the City of Myrtle Beach, short-term stays collect about 13% in lodging taxes" | VERIFIED | L7 |
| "South Carolina counts any stay under 90 days in a row as short-term." | CORRECT TO: "For lodging taxes, South Carolina counts any stay under 90 days in a row as short-term." | L7 |
| "The city requires a business license to rent short-term, with no separate rental permit." (North Myrtle Beach) | CORRECT TO: "The city requires a business license to rent short-term. For now there is no separate rental permit." | nmb.us: "There is currently no special zoning or permit process required"; registry staleBy 2027-01-01; the city is holding public sessions. |
| "Myrtle Beach and North Myrtle Beach get discounts on federal flood insurance" | VERIFIED | L1 |
| "Buildings east of Bypass 17 in Myrtle Beach are also in the state's coastal wind pool area, which affects the wind part of the building's insurance." | VERIFIED | L9 |

### can-you-purchase-a-home-with-a-reverse-mortgage

| Sentence | Result | Source quote |
|---|---|---|
| "As your main home, it's assessed at 4% instead of 6%, and it's exempt from school operating taxes." | VERIFIED | 12-43-220(c); L5 |
| "You apply with the county." | VERIFIED | 12-43-220(c)(2)(ii): owner "applies for the four percent assessment ratio before the first penalty date" (to the county assessor) |
| "At 65 or older, after you've lived in South Carolina for a year, the first $50,000 of your home's value is exempt from property taxes." | CORRECT TO: "At 65 or older, after you've lived in South Carolina for a year, the first $50,000 of your main home's value is exempt from property taxes." | 12-37-250(A)(5): "permanent home and legal residence" |
| "Apply to the county auditor before July 16 for that year." | CORRECT TO: "Apply to the county auditor, and to the town or city if the home is inside one, before July 16 for that tax year." | 12-37-250(A)(4)(a) |
| "Social Security isn't taxed by South Carolina." | VERIFIED | L4 |
| FAQ "At 65 or older, after a year as a South Carolina resident, the first $50,000 of your home's value is exempt from property taxes." | CORRECT TO: same with "your main home's value" | 12-37-250(A)(5) |
| FAQ "Apply to the county auditor before July 16." | CORRECT TO: "Apply to the county auditor, and to the town or city if the home is inside one, before July 16." | 12-37-250(A)(4)(a) |
| "buys a house near Murrells Inlet" | VERIFIED (no claim about county) | |

### asset-depletion-mortgage-sc

| Sentence | Result | Source quote |
|---|---|---|
| "South Carolina also doesn't tax Social Security, and at 65 or older, after a year as a resident, the first $50,000 of your home's value is exempt from property taxes." | CORRECT TO: "South Carolina also doesn't tax Social Security, and at 65 or older, after a year as a resident, the first $50,000 of your main home's value is exempt from property taxes." | L4; 12-37-250(A)(5) |
