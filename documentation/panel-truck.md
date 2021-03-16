# Panel Truck

**panel-truck** is a web UI tool for creating interactive storylines using images and maps. It's especially useful for libraries and museums that want to create linear narrations on top of one or multiple deep-zoomable objects. Panel-truck supports IIIF, static images, and tiled web map layers as sources. It is trivial to embed into an existing web site, and requires only a simple JSON file to construct a presentation.

::: warning
panel-truck 0.2 was released on 2021-02-12, introducing breaking changes to the format of the screenplay document. The hosted version of panel-truck 0.1 is still available at `https://geoservices.leventhalmap.org/panel-truck/webcomponent-0.1/panel-truck.min.js`
:::

## Example

See an [example panel-truck presentation](https://geoservices.leventhalmap.org/panel-truck/example.html) that demonstrates some of its key features.

## Hosted Web Component

The simplest way is to embed panel-truck by importing it as a [Web Component](https://www.webcomponents.org) into an existing page.

1. Import a **Web Component polyfill** if you plan to support older browsers that do not have native support for Web Components.
2. Import **Vue** from a CDN or locally. If Vue is already part of your page's environment, you can omit this. 
3. Import the hosted panel-truck script from `https://geoservices.leventhalmap.org/panel-truck/webcomponent-0.2/panel-truck.min.js` 
4. Create a sized container for the p`anel-truck` component. It can be statically or dynamically sized; in either case, the `panel-truck` component will fill the size of its parent container.
5. Inside of your sized container, add the `panel-truck` component, and pass a JSON source for your screenplay, as `<panel-truck screenplaySrc="https://some-example.org/screenplay.json"></panel-truck>`


#### Nutshell example

```html
<!-- polyfill for Web Components; you can omit if you don't want to support older browsers -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    
<!-- you can omit the Vue import if Vue is already present -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

<script src="https://geoservices.leventhalmap.org/panel-truck/webcomponent-0.2/panel-truck.min.js"></script>

<div style="width:1000px;height:800px;"><!-- the panel-truck componenet will take the size of its parent element -->
<panel-truck screenplay-src="https://some-example.org/screenplay.json"></panel-truck>
</div>

```

## Creating a screenplay

A screenplay is a JSON file. You can host it anywhere, or generate it dynamically.

✴️ keys are required

`metadata`: ✴️ an object with the following key-value pairs:
 * `title`: ✴️ string
 * `subtitle`: string
 * `author`: string
 * `datePublished`: string; no date formatting is applied

`sources`: ✴️ an array of objects, each of which is a single visual source for a "scene" (i.e., "slide"). each source consists of the following key-value pairs:
* `id`: ✴️ string, must be unique amongst all source objects in the array
* `type`: ✴️ string, one of:
    * `iiifManifest`
    * `iiifImage`
    * `staticImage`
    * `geoMap`
* If `type` is `iiifManifest`, the additional key-value pairs:
    * `manifest`: fully qualified URL to a IIIF Manifest
    * `sequence`: defaults to `0` if unset
    * `canvas`: defaults to `0` if unset
    * `image`: defaults to `0` if unset
* If `type` is `iiifImage`:
    * `imageEndpoint`: fully qualified URL to Image endpoint
* If `type` is `staticImage`:
    * `imageFile`: a static image URL as a string
* If `type` is `geoMap`, one of the following key-value pairs:
     * `tileJSON`: a TileJSON URL as a string
     * `tileXYZ`: an XYZ tile scema as a string, which must contain `{x}`, `{y}`, and `{z}` placeholders
     * If neither `tileJSON` nor `tileXYZ` is set, the map loaded will be a default OSM map
* `moreInfo`: An optional URL to a page with more information about the object, such as a repository record page; this can also be overriden at the scene level by including a `moreInfo` key in a scene object

`scenes`: ✴️ an array of objects, each of which create a "scenes" (i.e., "slide") in the narration. Each scene object includes the following key-value pairs:
 * `sceneSource`: ✴️ a string which must match the `id` field of ONE entry in the `sources` array.
 * `caption`: ✴️ an object with the following key-value pairs:
     * `title`: string
     * `text`: ✴️ string, accepts Markdown formatting
 * `extent`: an array setting the extent of the image to be zoomed to fit the viewport, with the format `[minX,minY,maxX,maxY]`. If `extent` is unset, the scene will default to fit the entire image, or, in the case of a `geoMap`, the entire world. You can also specify `"extent": "fit"` to make this explicit.
 * `moreInfo`: a URL to a page containing more information about the object, which will override the `moreInfo` attribute of the source

#### Example: a minimum viable screenplay, with one scene

```json
{
    "metadata": {
        "title": "A single-scene screenplay"
    },

    "sources": [
        {
        "id": "1",
        "type": "iiifImage",
        "imageEndpoint": "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:x633fb18t"
        }
    ],
    
    "scenes": [
        {
            "source": "1",
            "caption": {
                "text": "This is a map made by John Speed"
            }
        }
    ]
}
```


#### Example: a complicated screenplay with every source type

See [this Gist](https://gist.githubusercontent.com/garrettdashnelson/725fa9dd3ff1987458fda4d8183236e7/raw/c36da07c2970f0a0bcbd2d58b4df96930a81098a/paneltruck-0.2-screenplay.json) for the screenplay used to create the example panel-truck presentation from the first section of this document.


## License

Panel-truck is released on the MIT License. You can find the source code on [GitHub](https://github.com/bplmaps/panel-truck). If you use it in a project and find it useful, you might:

- Let us know where you are using the project by sending us a note at <info@leventhalmap.org>
- Tag us on social media @bplmaps
- Retain the Leventhal Map & Education Center credit which is included by default in the final slide of a Panel Truck presentation

LMEC is a small nonprofit institution, financially independent of the Boston Public Library. If you have institutional resources available, consider [making a donation](https://www.leventhalmap.org/donate/) to support our mission.



