# Sri Varalakshmi Catering — Static Website

A fully self-contained static website for **Sri Varalakshmi Catering** (Rajahmundry, established 2000s).
Works 100% offline after download — no build tools, no backend, no npm required.

## Folder Structure

```
svc-website/
├── index.html      ← open this in a browser
├── style.css       ← all styling (royal gold, maroon, cream)
├── script.js       ← interactivity (menu tabs, form, navbar, reveal)
├── images/         ← 30 optimized WebP images (logo, food, gallery)
└── README.md
```

## How to use

1. Unzip the archive.
2. Double-click `index.html` (or open it in any modern browser).
3. That's it — everything works offline, including:
   - Menu category filtering
   - Sticky navbar with smooth scrolling
   - Booking form → opens WhatsApp pre-filled
   - Image hovers, animations
   - Floating WhatsApp button

## Notes

- **Fonts**: loaded from Google Fonts CDN. If you need complete offline fonts, download
  Cormorant Garamond and Outfit from https://fonts.google.com and self-host.
- **Google Map**: embedded via Google Maps iframe — requires internet for the map
  (everything else works offline).
- **WhatsApp links**: point to `+91 73964 99996`. Change in `script.js` → `BRAND`
  object and in `index.html` (search for `917396499996`).
- **Images**: all converted to WebP for speed (~3.4 MB total). Supported by every
  modern browser (Chrome, Edge, Firefox, Safari 14+).

## Updating content

- **Menu items** → edit `MENU` array in `script.js`.
- **Testimonials** → edit `TESTIMONIALS` array in `script.js`.
- **Services** → edit `SERVICES` array in `script.js`.
- **Phone / WhatsApp** → edit `BRAND` object in `script.js` and the `tel:` / `wa.me`
  links in `index.html`.
- **Gallery** → add/replace images inside `<section id="gallery">` in `index.html`.
- **Colours** → edit CSS variables at the top of `style.css` (`--svc-maroon`,
  `--svc-gold`, etc.).

## Deploy to any static host

Drop the `svc-website` folder into:
- GitHub Pages
- Netlify (drag & drop the folder)
- Vercel
- Cloudflare Pages
- Any shared web host via FTP

No configuration needed.

© Sri Varalakshmi Catering. Head Chef · Kovvur Siva ✦ Proprietor · Smt. Varalakshmi Garu
