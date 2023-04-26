---
home: true
title: Cartinal
subtitle: Documentation, guides, and resources for GIS, data, and mapmaking from the Leventhal Map & Education Center at the Boston Public Library
features:
- title: Get Started with Guides
  details: Browse guides and tutorials for all skill levels
  link: ./guides/
- title: Documentation
  details: Documentation for technical services provided by LMEC
  link: ./documentation/
- title: Make a Data Request
  details: Book a librarian for personalized help with your project
  link: https://www.leventhalmap.org/research/geospatial/

footer: MIT Licensed | Unless otherwise noted, all content is CC BY-NC 2.0, Leventhal Map & Education Center 2021
---

# To update guides

1. Create new guide as `<guide-name>.md` file in `/guides` directory
2. Add that guide as an item in the `guides.json` file

# Staging and local development

1. Staging site builds from Netlify via the `netlify-build` 
2. See staging site here: [https://cartinal-dev.netlify.app/](https://cartinal-dev.netlify.app/)

For local development:

    npm run dev

Use Node version 15.14.0. To downgrade or update Node, see [Node Version Manager](https://github.com/nvm-sh/nvm).

> All updates to Cartinal should be pushed to the `netlify-build` staging branch before being merged to `master`.

# Production deployment

No CLI is set up for Cartinal production. In order to build and deploy:

1. Push all new changes to GitHub
2. Build site locally with `npm run build`
3. Hand copy `.vuepress/dist` into Wasabi