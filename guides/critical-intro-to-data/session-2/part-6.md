# Decoding Data Types


*As you might imagine, data comes in many shapes and sizes and with that comes file extensions! Here are the most common ones that you might run into. This section can serve as a reference on your mapping journey.*

## Attribute Data File Types and Software

* Attribute data are stored in a table with rows and columns. This is often called a tabular dataset.
* A Comma-Separated Values file, or CSV, is the most common file type you'll see for attribute data.

| File Type| Extension | Description |
| -------- | -------- | -------- |
| Comma Separated Value     | .csv   | tabular data file usually with geometry id and characteristics of each geometry  |

* You can open and read a CSV file in Excel or Google Sheets

<aside>

**Consider this:** How might these various file types and data collection and storage methods introduce bias?

</aside>

## Spatial Data File Types and Software

* Common spatial file types include **Shapefiles**, **GeoJSON**, and **GeoTIFF**
* Each file type stores geographic data in a different way and is used in specific circumstances (recall vector vs. raster!)
* GIS software can these data types; there are desktop programs like QGIS and web-based programs like Carto.

| File Type| Extension | Description |
| -------- | -------- | -------- |
| Shape File     | .shp     | contains feature geometry and attributes together; often a bundle of separate files each of which contains different information, like projection     |
| GeoJSON     | .GEOJSON     | JavaScript-based vector geometries (i.e. points, lines, and polygons); good for web-mapping, i.e. mapping on a browser-based platform like Google Maps and Carto    |
| GeoTIFF    | .TIF    | standard raster file type for satellite and GIS images     |


<hideable title = "More resources on file types and software">

Cartinal has an extended [post](https://geoservices.leventhalmap.org/cartinal/guides/file-formats.html) on file formats and types, and provides a lot of information on Shapefiles in particular.

You'll hear people talk about GIS software in two forms: desktop software and webmapping services. Web-mapping programs like [Carto](https://carto.com/), Google Maps, GeoJSON.io, have gained huge popularity because they're easy to use and don't require too much technical expertise. You can upload your geospatial data and view it on a familiar-looking basemap. For more robust geospatial data analysis, you can download a desktop GIS program, like ArcGIS or [QGIS](https://www.qgis.org/en/site/), to your computer. There's a bit of a learning curve to desktop GIS software, but if you're ready to take the plunge into mapping with desktop GIS software, the LMEC has a great [introduction to QGIS](https://geoservices.leventhalmap.org/cartinal/guides/get-started-qgis/).

## Other ways to make non-spatial assets spatial

Geocoding and georeferencing are two ways to assign coordinates to things that are not by themselves spatial.

**Geocoding** is when a machine converts address data to a GIS-readable format. This is what Google Maps does every time you enter an address into the search bar! Its algorithms assign that address a coordinate that can then displayed on the map. Think of it this way: a computer can't show you where an address is on a map, but it can show you where a coordinate point is on a map. Remember, computers aren't smart!

**Georeferencing** is how digital scans of historic maps (often in TIFF format) can be seen on modern-day basemaps. Georeferencing is at the heart of LMEC programs like [AtlasScope](https://atlascope.leventhalmap.org/#view:map), [MapJunction](https://www.mapjunction.com/), and the LMEC exhibit, [Bending Lines](https://www.leventhalmap.org/digital-exhibitions/bending-lines/). Learn how to georeference [here](https://geoservices.leventhalmap.org/cartinal/guides/georeference.html).

Geocoding and georeferencing are other ways that non-spatial information is *pinned down* or *poured into* geographic shapes.  

</hideable>
