---

---

# Part 1: A recipe for modern mapping

It can be useful to think metaphorically when it comes to writing code, so let's get started by imagining that the web map is a delicious meal that you'll create. The first step to making this meal is understanding what its components are: in other words, its ingredients.

|![Boy chef with lobster](https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:pz50hc948/108,75,1468,982/full/0/default.jpg)
|:---:|
|Boy dressed as a chef holding a lobster on a plate, _[Digital Commonwealth](https://www.digitalcommonwealth.org/search/commonwealth:pz50hc930)_

In Cajun cooking, there is a so-called ["holy trinity"](https://www.nola.com/entertainment_life/eat-drink/article_b33ce87d-77f1-56b9-a32e-fc725b5a4de5.html): two parts onion, one part celery, and one part carrots. This blend provides the foundation of popular Cajun dishes like etouffee, gumbo, and fricassee.

<aside>

[W3schools](https://www.w3schools.com/) and Mozilla's [Developer Guides](https://developer.mozilla.org/en-US/docs/Web/Guide) provide fantastic guides and tutorials on HTML, CSS, JavaScript, and more.

</aside>

There's a holy trinity in web maps too, but it's a little different than gumbo. In most web maps, the three building-block ingredients are **HTML**, **CSS**, and **JavaScript**. Just like ingredients in a recipe, they each perform a specific function, and leaving any one out would result in a rather underwhelming end product.

These ingredients serve as building blocks not just for web maps, but for the *entire internet*. Once you have a better understanding of what the ingredients do, you can get more creative with your maps.

| | [HTML](https://www.w3schools.com/html/html_intro.asp) | [CSS](https://www.w3schools.com/css/css_intro.asp)       | [JavaScript](https://www.w3schools.com/js/js_intro.asp)      |
|--------------- | --------------- | ------------- | ---------------- |
| **_Full name_** | Hypertext Markup Language | Cascading style sheet | JavaScript |
| **_Purpose_** | Provide **structure, layout, and content** to a web page | Provide **style** to the structure, layout, and content | Allow **user interaction** with page content |
| **_Mapping example_** | How is the map placed in relation to other items on your web page? | How big is the map? | Does the map have a zoom button? Can a user retrieve information by clicking on a feature? |

Let's dive more deeply each of these "ingredients" in the holy trinity.

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