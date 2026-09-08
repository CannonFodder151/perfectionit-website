# Perfection IT Services — website

A clean, static rebuild of perfection-it.com — no build step, no dependencies. Plain HTML/CSS/JS, ready for GitHub Pages.

## What's here

```
index.html                    Home page (hero, services overview, about, testimonial, contact)
network-consulting.html       Service page — Network Consulting
fortinet-consulting.html      Service page — FortiNet Consulting (NSE7)
web-hosting-pentest.html      Service page — Website & Hosted Platform Consulting + Pen Testing
404.html                      Custom "page not found" page (GitHub Pages serves this automatically)
robots.txt                    Crawler rules + sitemap reference
sitemap.xml                   Lists all four pages for search engines
css/styles.css                 All styling, shared across every page
js/main.js                     Mobile nav toggle, Services dropdown, spam-safe mailto links
assets/logo-mark.png           Icon mark, transparent bg — used in header/footer on every page
assets/logo-full.png           Full icon + wordmark lockup, transparent bg (spare, white/light backgrounds only)
assets/hero-bg.jpg             Brand network-pattern texture used behind each hero
assets/favicon-32/48/64.png    Browser tab icons
assets/apple-touch-icon.png    iOS home-screen icon (opaque brand-navy bg)
assets/og-image.jpg            Social share preview image
```

The site is now four pages linked by a **Services** dropdown in the header (click/tap to open — it works the same on desktop and mobile). Every page shares the same header, footer, styling, and mailto behaviour, so there's no build step — just plain HTML files that happen to repeat the same header/footer markup.

## Publish it on GitHub Pages

1. Create a new GitHub repository (or use an existing one) and push everything in this folder to it — `index.html` needs to sit at the repo root (or in `/docs` if you prefer that layout).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", pick your branch (e.g. `main`) and the folder (`/root` or `/docs`), then **Save**.
4. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. If you own **perfection-it.com** and want that domain instead of the github.io URL: add a `CNAME` file at the repo root containing just `perfection-it.com`, and point your domain's DNS at GitHub Pages (an `A` record set to GitHub's Pages IPs, or a `CNAME` record to `<your-username>.github.io` for a subdomain) — GitHub's Pages docs walk through the exact records.

## SEO

⚠️ **Before any of this matters:** when I checked `https://perfection-it.com/` just now it was still serving the *old* single-page version, not this rebuild — no Services dropdown, no new pages. If you've already pushed this code, that's most likely DNS/CNAME still propagating or a cached copy; if you haven't pushed yet, ignore this. Either way, worth double-checking the live site actually shows the new pages before you submit anything to Google.

Everything below assumes the site lives at `https://perfection-it.com/` (no `www`, root domain) — if that's not the final URL, the canonical tags, sitemap, and structured data below all need the URLs updated to match.

**What's built into the HTML now:**

- **Canonical tags** on every page (`<link rel="canonical">`), so Google always indexes the one true URL for each page instead of treating `?query` variants or a future `www.perfection-it.com` as duplicate content.
- **Unique, keyword-focused title tags and meta descriptions** on all four pages — tightened to sit within the length Google typically shows in search results (~155–160 characters for descriptions) instead of getting truncated.
- **Open Graph and Twitter Card tags** (title, description, image, url, locale) on every page, using full absolute image URLs — so links shared in Slack, LinkedIn, or texts show a proper preview card instead of a blank one.
- **Structured data (JSON-LD)** — a `ProfessionalService` schema on the homepage (name, logo, email, ABN, service area, and your NSE7 credential), plus a `Service` + `BreadcrumbList` schema on each of the three service pages. This is what lets Google show rich results (breadcrumbs in the search snippet, business info in the knowledge panel) rather than a plain blue link.
- **`robots.txt`** at the root, pointing crawlers at the sitemap.
- **`sitemap.xml`** listing all four pages, so Google discovers new/updated pages without waiting to crawl the nav.
- **A branded `404.html`** — GitHub Pages automatically serves this for any URL that doesn't match a file, instead of a generic broken-looking error page, and it links back to Home and the three services so visitors (and search bots) don't dead-end.
- **`lang="en-AU"`** on every page (matching the Australian spelling already used throughout the copy) and your **ABN** in the footer and in the homepage's structured data — both are minor local-relevance/trust signals for AU search results.

**What you still need to do manually (I can't do these from here):**

1. **Verify perfection-it.com is actually serving this code** (see the warning above).
2. **Google Search Console** — add the property for `perfection-it.com`, verify ownership (GitHub Pages supports the HTML-file or DNS-TXT method), then submit `https://perfection-it.com/sitemap.xml` under Sitemaps. This is what gets the site properly crawled and indexed, and gives you search-performance data.
3. **Bing Webmaster Tools** — same idea, and it can import directly from Search Console in a couple of clicks.
4. **Google Business Profile** — since this is a real ABN-registered service business, a Business Profile listing (even service-area-only, no public address) is one of the highest-leverage things for local AU search visibility, and isn't something a static site's HTML can do on its own.
5. **Backlinks** — nothing here replaces having a couple of other sites link to perfection-it.com (a LinkedIn company page, a directory listing, a past client's site) — that's still one of the biggest ranking factors and has to happen off-site.

## Logo &amp; brand imagery

The environment that built the first draft couldn't download the live site's images, so that draft shipped with a placeholder mark. You then supplied the real logo and a brand background texture — those are now built in:

- `assets/logo-mark.png` — the checkmark/network icon, cropped from your logo and had its white background removed, used at small size in the header and footer next to the "Perfection IT Services" text.
- `assets/logo-full.png` — the full icon + wordmark lockup, background removed. Kept as a spare asset; the dark navy wordmark only reads clearly on a light background, so it isn't placed on the (dark) site itself — useful for letterhead, email signatures, light-background print, etc.
- `assets/hero-bg.jpg` — your dark network-pattern graphic, used as a subtle textured background behind the hero section.
- The site's accent colors were also updated to match your logo's actual blues (`#2a97d4` / `#0b63a5`) instead of the placeholder teal.

If you'd like the full lockup used somewhere on the page (e.g. a light-background "brand" panel), or want the hero texture cropped/positioned differently, just ask.

## Content

Homepage copy (hero text, About Us paragraphs, the Michael/MFG Enterprises testimonial, stats, footer) was pulled verbatim from the live site. The three service pages (Network Consulting, FortiNet Consulting, Web &amp; Hosting + Pen Testing) are new copy written for this rebuild, since the live site didn't have separate pages for them — happy to adjust tone, depth, or the specific services listed on any of them. The "Request Consultation" email address (`consulting@perfection-it.com`) was recovered from the original site's Cloudflare-obfuscated mailto link — double-check it's still the right inbox before publishing.

The FortiNet page calls out your NSE7 (Network Security Expert) certification in a dedicated badge section — update that copy if your certifications change.

## Editing later

Everything is plain HTML/CSS — no framework, no build tools. Because each page repeats the same header/footer markup, a change to the nav (a new page, a renamed link) needs to be copied into all four HTML files; everything else (colors, spacing, card styles) lives in the one shared `css/styles.css`. Open any `.html` file in a browser to preview locally, or run a static server (`python3 -m http.server`) from this folder to click through the site as a whole.
