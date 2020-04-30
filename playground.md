---
sidebar: auto
---

# The Cartwheel playground

AKA notes from Garrett to Belle to see if this works

## Read the VuePress docs

There's a lot going on with VuePress, but I think we can use just the features that we need and leave the rest for if and when we need them. 

From the VuePress docs, I'd read these two things to get started: 

1. The very end of [this page](https://vuepress.vuejs.org/guide/directory-structure.html), to understand the routing table. Basically, a directory's `README.md` becomes the base URL of that directory, and `anything.md` becomes `anything.html`.
1. The [Navbar and Sidebar sections](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar) of the VuePress default theme.

## Clone this repository and try it out

Use Git to clone the `nblmc/cartwheel` repo. Then run `npm install` in the resulting directory. Now you should be able to run `npm run dev` to get a development server at `localhost:8080`.

## Play around with it

Try messing with files and directories and see what happens!

## Couple of notes ...

1. All of the nav and sidebar customizations are in in `.vuepress/config.js`. I recommend opening it in a JSON editor for readability, since it's such a deep tree.
1. Check out the directory structure for your Census how-to, and I also created a custom sidebar tree for that URL. It does pagination! So cool!
1. You can force a page to just display its own header structure as the sidebar by putting `sidebar: auto` in the frontmatter. Check out this very page for an example.
1. Many of the inline images are still working because they are hard-URL linked to Geoservices. We shouldn't do that as a general practice, and instead do links that are relative to the base URL, e.g.: `![search menu](/media/img/menu-search.png)`.

## Push to Geoservices

Do `npm run build` and then `npm run sync` (you have to be on VPN for the latter).
