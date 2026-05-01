# 🌴 CocoHarvest Exports — Website Package

**Professional company profile website for Indonesian cocopeat exporters**  
Built with Bootstrap 5, vanilla CSS & JS — zero framework dependency (except Bootstrap CDN).

---

## 📁 File Structure

```
cocopeat-website/
│
├── index.html              ← Homepage (Hero, About, Products, Why Us, Gallery, CTA)
├── about.html              ← About Us (Mission, Vision, Timeline, Certifications)
├── products.html           ← Products (Cocopeat Block, Coco Chips, others)
├── gallery.html            ← Gallery (filterable by category)
├── contact.html            ← Contact (form, map, FAQ)
├── request-sample.html     ← Free Sample request form
├── 404.html                ← Error page
├── sitemap.html            ← Site map / all pages index
│
├── navbar.html             ← 🔧 Navbar component (copy-paste snippet)
├── footer.html             ← 🔧 Footer component (copy-paste snippet)
│
└── assets/
    ├── css/
    │   ├── style.css       ← Global variables, typography, buttons, navbar, footer, animations
    │   └── components.css  ← Cards, gallery, forms, product tables, lightbox, timeline
    └── js/
        └── main.js         ← Scroll reveal, counter animation, gallery lightbox, navbar scroll
```

---

## 🎨 Design System

### Color Palette
| Variable | Value | Usage |
|---|---|---|
| `--clr-primary` | `#4A7C59` | Forest green — primary brand |
| `--clr-primary-dk` | `#2E5339` | Dark green — hover/CTA backgrounds |
| `--clr-primary-lt` | `#7DB08A` | Light green — accents |
| `--clr-accent` | `#C8873A` | Warm amber — buttons, badges |
| `--clr-accent-lt` | `#E5A96A` | Light amber — footer highlights |
| `--clr-cream` | `#FAF6EF` | Off-white — section backgrounds |
| `--clr-sand` | `#EDE0CC` | Sand — borders, dividers |
| `--clr-dark` | `#1A2A1E` | Near-black — footer, headings |

### Typography
- **Display / Headings:** Playfair Display (serif)
- **Body / UI:** DM Sans (sans-serif)
- Both loaded from Google Fonts CDN

---

## 🔄 How to Customize

### 1. Change Company Name
Search & replace `CocoHarvest` → `Your Company Name` across all HTML files.

### 2. Change Contact Details
In each HTML file, update:
- Phone: `+62 812-3456-7890`
- Email: `export@cocoharvest.id`
- WhatsApp link: `https://wa.me/6281234567890`
- Address: `Jl. Industri No. 45, Makassar...`

### 3. Change Colors
Edit `assets/css/style.css` — modify CSS variables in `:root {}`.

### 4. Replace Images
Images use Unsplash CDN placeholders. Replace `src="https://images.unsplash.com/..."` with your own product photos.

### 5. Google Maps
In `contact.html`, find the `<iframe src="https://www.google.com/maps/embed?..."` and replace with your own embed URL from Google Maps → Share → Embed a map.

### 6. Active Nav Link
Each page has `class="nav-link-custom active"` on the correct nav item. If copying the navbar, update accordingly.

---

## ✅ Features

- [x] Fully responsive (mobile-first Bootstrap 5)
- [x] Fixed transparent navbar → solid on scroll
- [x] Hero with animated stats counter
- [x] Scroll reveal animations (Intersection Observer)
- [x] Product cards with spec tables
- [x] Gallery with category filter + lightbox
- [x] Contact form with validation
- [x] Free Sample request form with product selector cards
- [x] FAQ accordion (contact page)
- [x] WhatsApp floating button
- [x] Back-to-top button
- [x] 404 error page
- [x] Sitemap page
- [x] Newsletter input in footer
- [x] Clean footer with social icons + certifications

---

## 🚀 Quick Start

1. Extract all files to your web server / hosting folder
2. Open `index.html` in browser — all assets load from CDN, no npm needed
3. Replace placeholder content with real company data
4. Upload to cPanel, Netlify, Vercel, or any static host

> **Tip:** For production, consider hosting fonts and Bootstrap locally for faster load times and GDPR compliance.

---

## 📦 Dependencies (all via CDN)

| Package | Version | URL |
|---|---|---|
| Bootstrap | 5.3.3 | `cdn.jsdelivr.net` |
| Font Awesome | 6.5.0 | `cdnjs.cloudflare.com` |
| Google Fonts | — | `fonts.googleapis.com` |

No build tools required. Just HTML, CSS, JS.

---

## 📄 License
Free to use for commercial projects. Replace all placeholder images with licensed or owned photography before going live.

---

*Made with 🌿 for Indonesian exporters*
