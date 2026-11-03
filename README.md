# Ruzbeh Navabi – Portfolio

Personal portfolio site (German/English): a plain static site with no framework, no build step and no trackers. It is hosted on GitHub Pages.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content; the German text lives directly in the HTML |
| `style.css` | Layout, colour palette (#17252A · #2B7A78 · #3AAFA9 · #DEF2F1 · #FEFFFF) and light/dark theme |
| `script.js` | DE/EN toggle (English strings, saved in `localStorage`), email obfuscation and scroll animations |
| `favicon.svg` | "RN" monogram |
| `photo-480/800.webp`, `photo-480/800.jpg` | Portrait (metadata stripped), served responsively |
| `img/heatmap-bilinear.webp`, `img/dashboard-overview.webp` | Project card images, copied from the [heatmap-generator-c](https://github.com/ruzbeh21/heatmap-generator-c) and [hamburg-werkstudent-dashboard](https://github.com/ruzbeh21/hamburg-werkstudent-dashboard) repos |
| `og-image.jpg` | 1200×630 preview image for LinkedIn and other link previews |
| `cv.pdf` / `cv_en.pdf` | German / English CV. The CV button links to the one matching the selected language. Replace the files to update them. |

## Edit content

- German text: edit `index.html`.
- English text: edit the `EN` object in `script.js`. Use the same key as the element's `data-i18n` attribute.

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deploy

Push to `main`. GitHub Pages serves the repo root automatically.

## Privacy

The site contains no street address, phone number, API keys or other secrets, and none should be added. The email address is assembled in JavaScript so it does not appear as plain text in the HTML.
