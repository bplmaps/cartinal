---
sidebar: auto
---

# The holy trinity

|![The holy trinity](./media/trinity-example.png)
|:---:|
|The holy trinity ([source](https://www.redbeansanderic.com/what-is-the-holy-trinity-of-creole-and-cajun-cooking/))

## HTML: the core ingredients

Every dish has core ingredients that comprise its foundation. Think the veggies in your stew, or the eggs in your frittata. Without these structural ingredients, your dish would hardly be a dish at all.

<aside>

**Note**: HTML documents have a file extension of `.html` and are usually named `index.html` by convention.

</aside>

[Hypertext Markup Language](https://en.wikipedia.org/wiki/HTML), or HTML, is a programming language designed to provide web pages with structure and content. HTML provides the core ingredients to a web page, including text, images, and—eventually—interactive maps!

HTML syntax is organized around **elements**, or lines of code defined by a **start tag** `<tagname>` and an **end tag** `</tagname>`. There are many kinds of elements, for example:

- the `<section>` element defines page sections
- the `<h1>` element defines a large header
- the `<p>` element defines a new paragraph
- the `<body>` element defines all content in an HTML document

Put together, this looks like:

```html
<section>
  <h1>Your delicious web map!</h1>
  <p>This code will serve as the building blocks of your web map.</p>
</section>
```

## CSS: the spice cabinet

Should your soup be more sweet or more savory? How much cayenne pepper belongs in your chicken rub? You can't make a recipe without the core ingredients, but of course, that recipe won't be complete without spices. Cascading style sheets, or [CSS](https://www.w3schools.com/css/css_intro.asp), are the spices of web technology.

<aside>

**Note**: CSS documents have a file extension of `.css` or `.scss` (for now, don't worry about the difference between them). They're usually named `styles.css` or `styles.scss` by convention.

</aside>

CSS describes how HTML elements are to be displayed on a screen. This includes font and text size, as well as the size and layout of rows, columns, and sections.

You can use the CSS language to assign style attributes to specific HTML element classes. In order to reference an HTML element, you would type its name, followed by style information contained between **curly braces**:

```css
html, body {
  margin: 0px;
}

body {
  text-align: center;
  font-family: monospace;
  background: #fefefe;
}

h1 {
  margin-top: 0px;
  color: ;
}

p {
  max-width: 500px;
  font-size: 18px;
  margin: auto;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

You can add CSS directly to an HTML document by enclosing the CSS code within `<style>` tags. Alternatively (and more commonly), you might load an external `.css` file into your HTML document by placing the following code between the `<head>` tags, like so:

```html
<head>
    <link rel="stylesheet" href="/style.css"/>
</head>
```

## JavaScript: utensils, presentation, atmosphere

Whether it's dimming the lights for a cozy home-cooked dinner or springing for a seat at the fancy hibachi restaurant, presentation and atmosphere greatly affect how you experience a meal. Furthermore, the utensils you have on hand will govern how you consume it. You wouldn't try to eat soup with chopsticks—or, at least, you wouldn't be very successful.

<aside>

**Note**: JavaScript documents have a file extension of `.js`. They're usually named `app.js` or `script.js` by convention.

</aside>

That's where [JavaScript](https://www.w3schools.com/js/js_intro.asp) comes in. By programming the behavior of web pages, JavaScript decides how a user will interact with your web page. This programming language can dictate simple behavior, like changing the color of text when a button is clicked, or more complex stuff such as managing (and remembering!) which items are in your online shopping cart.

As we'll see in the next section, it's in the JavaScript file `.js` where we program the behavior of web maps.

<!-- ## Putting it all together

In the [Codepen](https://codepen.io/) example below, you can toggle between the ingredients of a static web page while simultaneously viewing the page as it's rendered. Take a moment to click through each file—the HTML, SCSS, and JS—and see if you can parse out the syntax. What are the key elements of each file? How do they correspond to the rendered web page?

<html>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="WNMOdem" data-user="codepen" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/itspangler/pen/WNMOdem">
  Your Delicious Web Map</a> by Ian (<a href="https://codepen.io/team/codepen">@codepen</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</html>

### Challenge

<Hideable>

Once you've familiarized yourself with the ingredients, click "Edit on Codepen" and make a few changes to the code:

- 

</Hideable> -->
=======

---

# A recipe for modern mapping

Imagine you are a chef, and your web map is a delicious meal. The first step to making this meal is understanding what its components are: or, in other words, its ingredients!

|![Boy chef with lobster](https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:pz50hc948/108,75,1468,982/full/0/default.jpg)
|:---:|
|Boy dressed as a chef holding a lobster on a plate, _[Digital Commonwealth](https://www.digitalcommonwealth.org/search/commonwealth:pz50hc930)_

In Cajun cooking, there is a so-called ["holy trinity"](https://www.nola.com/entertainment_life/eat-drink/article_b33ce87d-77f1-56b9-a32e-fc725b5a4de5.html): two parts onion, one part celery, and one part carrots. This blend is said to provide the foundation of popular Cajun dishes like etouffee, gumbo, and fricassee.

There's a holy trinity in web maps too, but it's a little different than gumbo. In most web maps, the three building-block ingredients are **HTML**, **CSS**, and **JavaScript**. They each perform a specific function, just like ingredients in a recipe—and just like ingredients in a recipe, when you put them together, they create something larger than themselves.

These ingredients serve as building blocks not just for web maps, but for the *entire internet*. Once you have a better understanding of what the ingredients do, you can get more creative with your maps and more.

| | [HTML](https://www.w3schools.com/html/html_intro.asp) | [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)       | [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)      |
|--------------- | --------------- | ------------- | ---------------- |
| **_Full name_** | Hypertext Markup Language | Cascading style sheet | JavaScript |
| **_Purpose_** | Provide **structure, layout, and content** to a web page | Provide **style** to the structure, layout, and content | Allow **user interaction** with page content |
| **_Mapping example_** | How is the map placed in relation to other items on your web page? | How big is the map? | Does the map have a zoom button? Can a user retrieve information by clicking on a feature? |

Let's dive into each of these "ingredients" in greater detail.

<!-- 


## Differences between desktop and web mapping

[QGIS](https://cartinal.leventhalmap.org/guides/getting-started-with-qgis/) is an excellent software for creating spatial data and static maps, but it's not as good for generating interactive maps that you can share on the web.

This table details a few key differences between creating maps with a desktop GIS software (like QGIS) and creating maps in a web environment.

|  | Desktop       | Web mapping      |
| --------------- | ------------- | ---------------- |
| **_Purpose_** | Project-oriented; best for data creation, manipulation, and analysis | Tool- and app-oriented; best for data visualization and user interactivity |
| **_Interface_** | Point-and-click or drag-and-drop in a graphical user interface | Edit raw files in a text editor or integrated development environment |
| **_Formats_** | Shapefiles for vector data, GeoTIFFs for raster data | GeoJSON for vector data, tile services for raster data |
| **_Programming languages_** | Python for spatial analysis and geoprocessing | HTML for structure, CSS for style, JavaScript for interaction |

<aside>

**Note**: One of the reasons that web mapping isn't ideal for spatial analysis is that modern web browsers are restricted 

</aside>

## What is Leaflet?

Test

## Getting started with Glitch

Glitch, a web tool for real-time app development, will serve as our "home base" in this tutorial. It's where you'll store all your spatial data, as well as edit the files that will structure your web map.

To open your first Glitch project:

1. Navigate to [Glitch's website](https://glitch.com) and create an account
2. Open up our [LMEC data viz starter pack](https://glitch.com/~lmec-dv-starter), a Glitch project that functions as a web map template
3. Click `"Remix your own"`

Welcome to your first Glitch project! You should see something like this:

|![glitch project](../media/glitchgif.gif)
|:--:|

<aside>

**Note:** Glitch automatically names remixed projects with three random words (mine above is called "brawny-resolute-tick"), so give your new project a better name. You can change the name by clicking `Settings` > `Edit project details`.

</aside>

There are three panes in the Glitch app. On the left side, the **file tree** shows all the files that comprise your project. In the middle, the **file editor** allows you to edit those files directly. And on the right side, the **preview pane** provides a fully rendered and actively updated view of your app.

In the preview pane, the web map is currently being rendered by three files in your file tree:

1. `index.html`
2. `script.js`
3. `style.css`

| | index.html | styles.css       | script.js      |
|--------------- | --------------- | ------------- | ---------------- |
| **_Language_** | [HTML](https://www.w3schools.com/html/html_intro.asp) | [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS) | [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) |
| **_Purpose_** | Provide **structure, layout, and content** to a web page | Provide **style** to the structure, layout, and content | Allow **user interaction** with page content |
| **_Example_** | What text appears on your web page? Where does the map go? | In what font will the text be rendered? How big is the map? | Does the map have a zoom button? Can a user retrieve information by clicking on a feature? |

Each of these files contains code, or instructions, which tell a computer how to render parts of a page. Let's explore each file individually and see how changing its content affects our map.

### Dive into `index.html`

In your project, click on `index.html` to view its contents. You'll see a lot of angular brackets `< >`, or **tags**, throughout the file. Navigate to the section below...

```html
<section class="top-matter mb-4">
    <div class="glitchButton m-3" style="float:right;z-index:3">
    <img
        src="https://s3.us-east-2.wasabisys.com/lmec-public-files/images/LMEC_compass_transparent.png"
        id="lmec-logo"
        alt="LMEC Logo"
    />
    </div>
    <div class="container">
    <h1 class="heading is-size-2 has-text-centered">
        Project Name Goes
    </h1>
    <p class="has-text-centered">
        You can add some text here.
    </p>
    </div>
</section>
```
<aside>

**Note:** Titles like `index.html`, `styles.css`, and `script.js` are _mainly_ named as such by convention.

</aside>

...  and make a few changes!

1. Update the project name between the `<h1>` tags
2. Add some text between the `<p>` tags
3. OPTIONAL: Trade out the LMEC logo for a different one (you can do this by replacing the URL between quotes at the `src` tag with a different URL )

For an in-depth description of what different HTML tags and elements mean, check out [Mozilla's documentation on the topic](https://developer.mozilla.org/en-US/docs/Web/HTML). What else might you want to add or change about the structure of this page?

### Dive into `styles.css` -->
