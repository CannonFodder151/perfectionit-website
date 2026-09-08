# Perfection IT Services — website

A clean, static rebuild of perfection-it.com — no build step, no dependencies. Plain HTML/CSS/JS, ready for GitHub Pages.

## What's here

```
index.html                    Home page (hero, services overview, about, testimonial, contact)
network-consulting.html       Service page — Network Consulting
fortinet-consulting.html      Service page — FortiNet Consulting (NSE7)
web-hosting-pentest.html      Service page — Website & Hosted Platform Consulting + Pen Testing
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
