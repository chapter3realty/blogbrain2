# BrickWood Mortgage blog posts

Posts for brickwoodmortgage.com, made with this repo's craft (`CRAFT.md`) in BrickWood's brand, with BrickWood's legal block on every post. The plan is in `BRIEF.md`; the legal block is in `LEGAL.md`; every fact is a row in `facts/ledger.md`, checked by a separate verifier (`facts/verify-*.md`).

## Files

| Path | What |
|---|---|
| `posts/<slug>/body.html` | The article. Edit this, never the built files. |
| `posts/<slug>/post.json` | SEO title, meta description, H1, URL, FAQ, sources, and whether the post needs the affiliate or reverse mortgage disclosure. |
| `assets/bw-post.css` | The post design, scoped to `.bw-post`, in BrickWood's brand. |
| `build.js` | `node brickwood/build.js` builds every post (or `node brickwood/build.js <slug>`). |
| `dist/wp/<slug>.html` | What goes into WordPress. |
| `dist/preview/<slug>.html` | The same post inside a mock BrickWood header and footer, to look at. |

## Brand, as measured on brickwoodmortgage.com (2026-11-01)

- Headings: Merriweather, weight 900, near-black.
- Text: Roboto. The live posts use light gray text (#7a7a7a) at 16 px. These posts use #2b2b2e at 18 px, because readers on phones need dark, large text (CRAFT 4).
- Brick red #8b090d, sampled from the BWM logo: section rules, the "short answer" bar, links.
- Button blue #0400fb, the site's own button color: every call to action.
- Black top bar and footer, from the site.

## Publishing a post in WordPress

1. New post. Title: the H1 from `post.json`. Slug: the `slug` from `post.json`, without slashes.
2. Add one **Custom HTML** block and paste the whole of `dist/wp/<slug>.html`. It holds the styles, the header (category, read time, title, author), the article, the FAQ, the author bio, the sources, the legal block, the side card and the structured data.
3. The post prints its own title. Turn off the theme's title band and featured image for these posts (in Elementor, a full-width post template without the title widget), so the page has one title. The featured image is still set in WordPress for sharing and the blog list.
4. The side card with Paul's photo shows only when the content area is at least 1,100 px wide. On narrower layouts and phones it hides, and the call to action inside the article does the job.
5. In Yoast: SEO title = `title`, meta description = `description`, focus keyphrase = `focusKeyphrase`. Turn off Yoast's own FAQ or Article schema for this post if it adds a second copy.
6. Author: Paul Hankins.
7. Post 4 (`can-you-purchase-a-home-with-a-reverse-mortgage`) replaces the body of the existing post at the same URL. Keep the URL.

## Handing a batch to the web team

1. `node brickwood/linkcheck.js`: no broken links.
2. `node brickwood/package.js <batch>` builds `handoff/<batch>/` (the post files, `PUBLISH.md` with slugs, Yoast fields and the publish order, `UPDATE-CALENDAR.md`) and `handoff/brickwood-posts-<batch>.zip`.
3. Put the zip in the shared Google Drive or OneDrive folder. Never paste the posts into an email: Outlook rewrites every link into a "safe link" (web team, 2026-11-03).
4. Every post in the batch goes in the package, and the team publishes them together, in the order given, because they link to each other.

## Keeping posts current

`facts/dated.json` lists every fact in a published post that can change, with the date to check it. Run `node brickwood/stale.js` at the start of every batch, and at least once a month. When one changes, fix the post, rebuild, package only the changed post, and send it with one line on what changed. `node brickwood/stale.js --all` prints the whole calendar.

## What these posts never state

No interest rate, APR, payment amount or down payment percentage (Regulation Z trigger terms; `LEGAL.md`). No promise of approval. Facts only from verified ledger rows.
