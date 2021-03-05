# Decoding Data Types


*This section can serve as a reference on your mapping journey. Do not feel pressure to dive into all of these techniques now, but the resources linked below can help you use these tools as you need them.* 

As you might imagine, data comes in many shapes and sizes and with that comes file extensions! Here are the most common ones that you might run into.

## Spatial Data File Types and Software

* Common spatial file types include **Shapefiles**, **GeoJSON**, and **GeoTIFF**
* Each file type stores geographic data in a different way and is used in specific circumstances (recall vector vs. raster!)
* GIS software reads these data types; there are desktop programs like QGIS and web-based programs like Carto. 

<hideable title = "On your own time">

There is a family of file types used specifially by the mapmakers of the world. These methods of data storage are specifically used for spatial or geographic purpose. Some common examples are Shapefiles, GeoJSON, and GeoTIFF. 

| File Type| Extension | Description |
| -------- | -------- | -------- |
| Shape File     | .shp     | contains feature geometry and attributes together; often a bundle of separate files each of which contains different information, like projection     |
| GeoJSON     | .GEOJSON     | JavaScript-based vector geometries (i.e. points, lines, and polygons); good for web-mapping, i.e. mapping on a browser-based platform like Google Maps and Carto    |
| GeoTIFF    | .TIF    | standard raster file type for satelite and GIS images     |

Read more about data types on Cartinal [here](https://geoservices.leventhalmap.org/cartinal/guides/file-formats.html).

We need specialized programs to open spatial files and view their contents. These programs come in two basic forms: you can download a desktop GIS program, like ArcGIS or [QGIS](https://www.qgis.org/en/site/), to your computer, or you can use a web-mapping service, which is based in an internet browser. Web-mapping progrms like [Carto](https://carto.com/), Google Maps, GeoJSON.io, have gained huge popularity because they're easy to use and don't require too much technical expertise. If you're ready to take the plunge into mapping wth desktop GIS software, the LMEC has a great [introduction to QGIS](https://geoservices.leventhalmap.org/cartinal/guides/get-started-qgis/).  

</hideable>

<aside>

**Geocoding** can convert address data to a GIS-readable format. This is what Google Maps does every time you enter an address into the search bar! Its algorithms assign that address a coordinate that can then displayed on the map. Think of it this way: a computer can't show you where an address is on a map, but it can show you where a coordinate point is on a map. Remember, computers aren't smart! Learn how to georeference [here](https://geoservices.leventhalmap.org/cartinal/guides/georeference.html). 

</aside>

## Attribute Data File Types and Software

* Attribute data are stored in a table with rows and columns. This is often called a tabular dataset.
* Some common file types for this include Excel Spreadsheets, Google Sheets, and Comma Separated Files

<Hideable title = "On your own time">

In most cases, you will find the information you want to use in a Comma Separated File. The CSV works very similarly to an Excel sheet or Google Sheet. Luckily, once you are comfortable working with one of these, you will be able to navigate all of them. 


| File Type| Extension | Description |
| -------- | -------- | -------- |
| Comma Separated Value     | .csv   | tabular data file usually with geometry id and characteristics of each geometry  |

A CSV is an example of a **tabular** data source: data that is formatted in a spreadsheet with rows and columns. This is how we look at our attribute data when using GIS software. When performing a join, a column from our tabular data source serves as the identifying information that makes the join possible. For example, there could be a column listing the names of states used to join the data with a spatial resources. 

These are just a few of the data types we think you should know so you can interpret what kind of data you may be downloading! For more information on other data types please refer to [this page](https://geoservices.leventhalmap.org/cartinal/guides/file-formats.html) from LMEC on file types.

</Hideable>
 
<aside>
 
**Discussion question**
How might these various file types and data collection and storage methods introduce bias?

</aside>