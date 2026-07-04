# The Good Food Guys — Website

A premium, multi-page catering website for TGFG (The Good Food Guys), built
with React, Vite and React Router. Designed around a "Deccan luxury" visual
language — Nizami arches, bottle-green and brass — rather than a generic
template look.

## Pages
- **Home** — hero, brand intro, stats, services preview, testimonial, CTA
- **Services** — full list of offerings
- **Menu** — categorized menu (starters, biryani, mains, live counters, desserts)
- **Gallery** — filterable photo grid (arch-framed)
- **Achievements** — stats, testimonials, awards/press slots
- **Contact** — enquiry form + phone/WhatsApp/email/address

## Running locally

```bash
npm install
npm run dev
```
Open the URL it prints (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to add real content

Everything placeholder lives in **`src/data/content.js`** — services, menu
items, achievement stats, testimonials, gallery entries and contact details.
Edit that one file and it flows through to every page.

For photos: drop image files into `public/images/` and set the `src` field
on entries in `content.js` (e.g. `gallery-1.jpg` -> `/images/gallery-1.jpg`).
Until real photos are added, the site shows elegant arch-shaped placeholder
panels instead of broken images.

The logo/icon is currently a simple placeholder mark generated in the brand
colors (`public/icons/`) — swap in your real logo file when ready and update
`index.html` / `manifest.webmanifest` to point at it.

## Installing as an app (Android + iOS) — already working

The site is already a PWA (Progressive Web App):
- On **Android** (Chrome): visiting the site shows an "Install app" / "Add to
  Home screen" prompt — it then behaves like an app icon, opens full-screen.
- On **iPhone** (Safari): Share -> "Add to Home Screen" does the same.

No app store submission needed for this — it's the same website.

## Phase 2 (optional): real App Store / Play Store listing

If you later want an actual listing on both stores, wrap this same project
with **Capacitor** (no rewrite needed):

```bash
npm install @capacitor/core @capacitor/cli
npx cap init "The Good Food Guys" "com.tgfg.app"
npm run build
npx cap add android
npx cap add ios
npx cap sync
```

Then open the generated `android/` project in Android Studio and the `ios/`
project in Xcode to build, sign and submit. You'll need:
- A Google Play Developer account (~$25 one-time)
- An Apple Developer account ($99/year) + a Mac to run Xcode

## Deploying the website

Any static host works well — e.g. **Vercel**, **Netlify**, or **GitHub Pages**.
Simplest path: push this folder to a GitHub repo, then import it in Vercel or
Netlify — both auto-detect Vite and deploy on every push.
