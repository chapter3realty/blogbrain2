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
2. Add one **Custom HTML** block and paste the whole of `dist/wp/<slug>.html`. It holds the styles, the article, the FAQ, the sources, the legal block and the structured data.
3. If the theme already prints the post title as the page H1 (the live posts do, over the header photo), set `"h1InTheme": true` in `post.json` and rebuild, so the page has one H1.
4. In Yoast: SEO title = `title`, meta description = `description`, focus keyphrase = `focusKeyphrase`. Turn off Yoast's own FAQ or Article schema for this post if it adds a second copy.
5. Category: the blog's usual category. Author: Paul Hankins.
6. Post 4 (`can-you-purchase-a-home-with-a-reverse-mortgage`) replaces the body of the existing post at the same URL. Keep the URL; do not create a new post.

## What these posts never state

No interest rate, APR, payment amount or down payment percentage (Regulation Z trigger terms; `LEGAL.md`). No promise of approval. Facts only from verified ledger rows.
