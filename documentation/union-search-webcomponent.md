# LMEC Union Search web component

Digitized historic objects at the LMEC are found on two major repository systems: the [Digital Collections portal](https://collections.leventhalmap.org) and [Internet Archive](https://archive.org/details/normanbleventhalmapcenter). Because these two repositories do not have a shared search system, this web component offers a shim to search both with a single keyword search. It does not offer access to advanced search queries.


## Embedding the component in a page

This widget uses the [Web Component specification](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to create an encapsulated module with a separate DOM and styling.

To embed the component in any HTML page, copy the following code into the `body` of the page at the point where you would like the widget to appear.

```html
<script src="https://geoservices.leventhalmap.org/lmec-union-search-webcomponent/lmec-union-search.min.js"></script>
<lmec-union-search></lmec-union-search>
```

The `<script>` tag only needs to be included once on a single page; if you would like multiple search widgets, you can include any number of `<lmec-union-search></lmec-union-search>` tags after ther `<script>` tag

## Bundling Vue

This compiled web component bundles Vue, which is a dependency. If you are including it in a project where Vue is already available, you can recompile it using `vue-cli` with the `--inlineVue` flag excluded.

## Search access

The search widget passes the query to the following access, which return JSON with results.

Digital Collections: `https://collections.leventhalmap.org/search?utf8=✓&q={QUERY}`

Internet Archive: `https://archive.org/search.php?query=%28{QUERY}%29%20AND%20collection%3A%28normanbleventhalmapcenter%29`

## Source

[Source on GitHub](https://github.com/nblmc/union-search-tool/)