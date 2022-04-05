---
sidebar: auto
---

# Georeferencing

## Background Information

Georeferencing is the process of matching a digital cartographic image file to real-life geography, by adding ground control points (GCP's). A GCP is simply a latitude-longiture pair that a computer can use to associate pixel space in an image with geographic space in a modern web map.

For example, 

![ground control points](./gcp.png)

## Georeferencing on the web

Georeferencing can be a challenging process to carry out on the web, because it requires the creation and storage of very large file

::: tip LMEC Map Warper
The LMEC Map Warper, previously used for georeferencing maps in our digital collections, is no longer being supported. You can learn about how to extract LMEC Digital Collections in geospatial formats from the <a href ='./lmec-dc-geo.html'>LMEC Georeferenced Collections Guide.</a>
:::

## Georeferencing in QGIS

The Leventhal Map & Education Center, which undertakes many digital humanities projects for which georeferencing is a core staple, carries out all georeferencing processes using QGIS. 

QGIS is a free desktop mapping software with a rich suite of functionalities. To get started with QGIS, please find the <a href ='./get-started-qgis/'>Get Started with QGIS Guide</a>.

Once you have QGIS installed on your computer, you can georeference any map by following this <a target = "_blank" href ='https://www.qgistutorials.com/en/docs/georeferencing_basics.html'>Georeferencing Basics Tutorial</a>.

All you need to start georeferencing is an image file of the map you wish to georeference. The Leventhal Map & Education Center and Boston Public Library make all of their digital collections available to patrons at their highest available resolution. 

To access high resolution downloads of our digitized map collections, navigate to the map you wish to georeference in our <a target = "_blank" href ='https://collections.leventhalmap.org/'>Digital Collections</a> and select `Download → Full Resolution, Uncompressed TIFF`

## Related Resources

- <a href ='atlascope-tool-guide.html'>Use the Atlascope Portal</a>
- <a href ='./atlascope-tiles.html'>Bring Atlascope Tiles into Your Map</a>
- <a href ='create-urban-atlas-data.html'>Geotransform Urban Atlases</a>



