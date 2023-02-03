---

---

# Getting started with Leaflet

![Leaflet logo](./media/leaflet-logo.png)

## What is Leaflet?

<aside>

In computer programming, you can **comment** code by pressing `cmd + /` (Mac) or `ctrl + /` (Windows). This means it won't be read by the computer when a file is executed.

</aside>

**[Leaflet](https://leafletjs.com)** is a JavaScript library that you can use to easily create web maps. In programming, a "library" is simply a collection of pre-written code that simplifies different tasks.

Thanks to the kind folks behind Leaflet (which is an [open-source](https://en.wikipedia.org/wiki/Open-source_software) library), accessing a JavaScript library is as easy as copying one line of code into your `index.html` file.

In your `index.html` file, take a look beneath the comment that says "External JS goes here." You should see the following line of code:

```HTML
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
```

This line of code is very important. If you comment it out of the script and wait for the preview to reload, you'll notice that your map disappears. Feel free to read more about the technology behind [unpkg](https://unpkg.com), the [content delivery network](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) that makes it so easy to import Leaflet (and other JS libraries) into your project.

## Understanding Leaflet

What's going on to make this map possible, and how can you add more information to it? Let's dive into the `script.js` file to learn more.

Right now there's only one **variable** in your file: `leafletMap`. A variable is simply a [container for storing data](https://www.w3schools.com/js/js_variables.asp).
=======
# test text
