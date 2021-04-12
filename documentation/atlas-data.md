---
sidebar: auto
---
# Accessing Atlascope Data

<p style="font-size:1.1rem;" id="intro">This documentation contains information about accessing the underlying data sources of the Atlascope project, including raster imagery web layers, vector boundary files, and metadata. It assumes prior knowledge with GIS and data tools.</p>

## Glossary

### Atlascope
You can learn more about urban atlases from our library research guides for <a target="_blank" href="https://guides.bpl.org/urban-atlases">Boston</a> or <a target="_blank" href="https://guides.bpl.org/mass-urban-atlases">other Massachusetts cities and towns</a>. To learn more about the Atlascope public discovery tool, <a target="_blank" href="../guides/atlascope-tool-guide.html">read the user manual</a> or <a target="_blank" href="https://atlascope.leventhalmap.org/">try the tool</a>.


### Barcode
The LMEC uses the <strong>barcode</strong> field as the stable identifier for a single atlas. We have derived these barcodes from the identifier physically attached to each atlas volume in the collections.

### Bibliocommons
<a target="_blank" href="https://bpl.bibliocommons.com/">Bibliocommons</a> is the name of the BPL's public access catalog, where each physical atlas volume has a MARC record containing complete bibliographic information.

### Coverage
The titles of each atlas are deceiving. The geographic boundaries of each physical volume are idiosyncratic. Atlascope solves this problem by allowing you to search for layers by precise location. You should start with Atlascope, rather than the layer list, if you are unsure which layers are available for your area.

### Mosaic GeoTIFFs
You can find a fully georeferenced and mosaiced GeoTIFF of a single atlas's full coverage in the atlas layer list. These are very large files. The LMEC recommends using the hosted tile web layers instead, but if you want to download these GeoTIFF imagery files, expect long download times.

### Multiple Scale
Some single atlases include overlapping coverage of an area at multiple scales. Because of their overlapping extent, these are treated as distinct digital atlas objects. We use alphabetical suffixes appended to the barcode to create new identifiers for atlas layers that derive from the same original physical item.

### Plate Boundaries
A GeoJSON file representing the coverage boundaries of each physical plate in an atlas as vector polygons is available from the atlas layer list. Geometry has been simplified for computational efficiency in Atlascope.

### Volumes
The LMEC has derived all of this data from large books in our physical collections. We refer to these books as volumes. Pages, or <strong>plates</strong> in the volumes show different portions of an area. The LMEC has stitched the plates in each <strong>volume</strong> together to create final stitched web layers. You can page through an <a target="_blank" href="https://collections.leventhalmap.org/book_viewer/commonwealth:tt44pw76m#1/1">example volume book</a> in our Digital Collections.

### Volume Boundaries
A single GeoJSON file is available containing polygons corresponding to each physical volume's coverage boundaries. This layer is available here: <a target="_blank" href="https://s3.us-east-2.wasabisys.com/urbanatlases/extents/volume-extents.geojson">Volume Extents GeoJSON Download Link</a>

### XYZ access
The LMEC originally created tiles for atlases in this project using the TMS specification, and is currently converting each set to an XYZ specification to facilitate ArcGIS Online compatibility. You can use the layer list below to find out the status of each atlas web layer and the correct link syntax. Tiles are available at zoom levels 13 through 20.

## Layer List

<atlas-layer-list/>