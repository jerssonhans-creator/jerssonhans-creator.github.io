# Ruzbeh Navabi – Portfolio

Personal portfolio site (German/English): a plain static site with no framework, no build step and no trackers. It is hosted on GitHub Pages.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content; the German text lives directly in the HTML |
| `style.css` | Layout and light/dark theme (`prefers-color-scheme`) |
| `script.js` | DE/EN toggle (English strings, saved in `localStorage`) and email obfuscation |
| `favicon.svg` | "RN" monogram |
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
