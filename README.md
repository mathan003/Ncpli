# Ncpli — Website (React + Vite)

A responsive recreation of the Ncpli home page, built with
React, Vite, and plain CSS. The Header and Footer are shared components used
on every route, so they stay identical across the whole site.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, which you can deploy to any
static host (Netlify, Vercel, GitHub Pages, an S3 bucket, etc).

## Project structure

```
src/
  assets/images/       All images used across the site (optimized copies of
                        the originals you supplied)
  components/
    Layout.jsx          Wraps every page in the shared Header + Footer
    Header.jsx/css      Top navigation, including dropdowns and mobile menu
    Footer.jsx/css      Site footer with sitemap and office details
    Hero.jsx/css        Homepage hero banner
    MeetNetcom.jsx/css  "Meet Netcom" about section with the photo grid
    Services.jsx/css    The 9-card services grid
    Stats.jsx/css       25+ / 30+ / 100+ / 20+ stats strip
    ProductsCarousel.jsx/css  Auto-rotating "Our Products" carousel
    Clients.jsx/css     Client & government partner logo grid
  pages/
    Home.jsx            Composes all of the sections above
    About.jsx, Projects.jsx, ProductsPage.jsx, Service.jsx,
    Portfolio.jsx, Career.jsx, Contact.jsx, NotFound.jsx
                         Placeholder pages reachable from the nav — they
                         already use the same Header/Footer; fill in their
                         content whenever you're ready.
```

## Notes

- Navigation, dropdowns, and the products carousel are all built with plain
  React state — no extra UI libraries.
- The design is responsive from small phones up through large desktop
  screens; the nav collapses into a slide-in mobile menu under ~960px.
- All images were resized/compressed from the original source files to keep
  the site fast to load. If you want the full-resolution originals in the
  service/product cards, swap the files in `src/assets/images/`.
- Only the Home page layout was fully specified in the brief, so the other
  nav pages (About, Projects, Products, Service, Portfolio, Career, Contact)
  are simple placeholder pages ready for you to fill in with real content.
