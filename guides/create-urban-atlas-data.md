---
sidebar: auto
internal: true
---

# Geotransform Digitized Urban Atlases with QGIS and GDAL

::: warning

As of 1/13/2023, this documentation is considered deprecated. For information on the most up-to-date workflow for urban atlas geotransformation, see our guide on [Georeferencing with Allmaps](../guides/georeferencing-with-allmaps.md).

:::

## About Urban Atlases

This documentation contains information on how to create the underlying data sources of the Atlascope project, including raster imagery, vector boundary files, and metadata records. It assumes prior knowledge with GIS and data tools.


For a more contextual and step-by-step overview of the process, visit our [create mosaics guide](#/guides/tools-guides/atlascope/create-mosaics "create mosaics guide").

::: details Requirements for this process

- Scans of the individual atlas plates (recommended ≥ 300 dpi TIFF format)
- GIS Application - this documentation is written for QGIS
- Text editor - Atom, Notepad ++, Visual Studio Code or other
- FTP Client - these guides are written for Cyber Duck
- (**$**) Cloud storage - BPL uses low-cost Boston-based Wasabi
- (**$**) External hard drive for backup (optional/recommended) - tiles are large

:::



## QGIS workspace

To set up the QGIS workspace for this process, `qgis plugins → python console → show editor`
copy the below script into the editor & press **run**

```shell
for layer in [layer for layer in QgsProject.instance().mapLayers().values()]:
  if layer.name().lower() in ["openstreetmap", "index", "boundary"]:
    continue
    layer.renderer().setOpacity(0.6) #can change 6 for different opacity value
    provider = layer.dataProvider()
    provider.setNoDataValue(1,0) 
    layer.triggerRepaint()
```
## Long Term Preservation

This project creates many different files, some of which are temporary, intermediary working files, others which will be backed up long-term. 

::: tip Files to be backed up long term 
<b>GCPS:</b> control points created for spatial alignment purposes in EPSG: 4326 (.txt) <br><br>
<b>Boundary:</b> vector polygon where each feature corresponds to an atlas plate. Used for masking out unwanted data for the mosaic & to link tiles back to unique digital collections items by joining with library metadata (.geojson)<br><br>
<b>Tiles:</b> web layer tiles are generated from a virtual raster mosaic for zoom levels 13 - 20  (XYZ tile pyramid specification)
:::



## Georeferencing

### Bit depth
Images should have been scanned at `8-bit depth`. If they are 16-bit, you will need to convert the images to 8-bit.

### Projection
Individual plates should be referenced to `EPSG: 4326` projection and will be transformed during subsequent mosaicing steps to EPSG: 3857 to be compatible with web mapping

::: danger
Please note that subsequent steps in this process are projection-dependent, and if an alternate projection is chosen during georeferencing, the mosaicing and tiling process will fail. Step-by-step instructions for setting up a proper georeferencing environment for this project are available in [create mosaics → georeferencing](./guides/create-mosaics.html "create mosaics guide").
:::


### Transformation Settings

::: tip GDAL Georeferencer transformation settings
Transformation type: Polynomial 1 <br>
Resampling method: Cubic <br>
Target SRS: EPSG: 4326 - WGS 84 <br>
Output Raster: spatial_imagery/**identifer** <br>
Compression: LZW <br>
Save GCP points: checked <br>
Load in QGIS when done: checked <br>
Everything else unchecked <br>
:::


### Handling Insets

Insets are duplications of a georeferenced source image, referenced to a different, often smaller area of the page. Inset identifiers should be stored with suffixes `_insetN` with N increasing numerically depending on the number of insets per sheet.

Bibliographic metadata records for insets should be identical to that of the main plate, with the only difference being the new, suffixed `identifier` value. 


## Masking footprint

### Generating a boilerplate footprint file

Run this script from inside the folder containing spatial imagery to create a boilerplate boundary file with a feature for every spatial image and corresponding identifier information in the attribute table

```
https://github.com/nblmc/atlascope-assets/blob/master/scripts/create-plate-index.py
```


### Vector editing snapping settings

Step-by-step footprinting instructions are available in [create mosaics → masking](#/guides/tools-guides/atlascope/create-mosaics?id=masking "create mosaics guide").

::: tip Snapping settings
Project → Snapping options <br>
Snapping is set to **Vertex and Segment** <br>
Topological Editing and Snapping on Intersection are **enabled**
:::


## Joining metadata 

### Boundary.geoJSON fields

Each Feature in the GeoJSON FeatureCollection should be a Polygon or MultiPolygon with the total geographic extent of a single plate's coverage.

::: tip The properties of each feature should include:
→ **volume_identifier:** This should match exactly to the `identifier` field of one Feature in the extents.geojson file<br>
→ **plate_identifier:** This should be a unique identifier for the plate-level image<br>
→ **digital_collections_permanent_uri**: The plate-level digital collections record, if available<br>
→ **plate_name**: a human-readable description of the plate, e.g. "Plate 16" or "Inset C"
 :::

### Boundary export settings

When the geometry has been appropriately edited and joined with metadata, boundaries should be exported from QGIS using the following settings:

::: tip Boundary export settings
→ Format = **GeoJSON** <br>
→ Destination path = `volume_identifier/footprint/Boundary.geoJSON` <br>
→ CRS: **EPSG 4326 - WGS 84** <br>
:::


### Null plate values

To get missing plate values atlases, run this script from inside the folder holding Boundary.geoJSON

::: warning
This will only work for BPL atlases
:::

```
https://github.com/nblmc/atlascope-assets/blob/master/scripts/get-plate-value.py 
```

## Mosaicing


### Atlas toolkit 
The mosaicing toolkit can be accessed here
```
https://github.com/nblmc/atlascope-assets
```

### Windows environment settings
::: warning PC Users
If you are on a PC, you will need to make sure your enviroments are configured properly before being able to run any of our atlas tools. Follow the [Set Up A PC for Python & GIS Libraries Tutorial](./guides/anaconda-windows.html "anaconda windows tutorial") before running `atlas-tools.py`
:::


## XYZ Tiling

### Gdal2tiles command
This command creates tile pyramids in the XYZ schema. It creates tiles from the resulting virtual raster created from running `atlas-tools.py --step vrt-mosaic`

``` shell 
$ gdal2tiles.py --xyz -z 15-20 --exclude --processes 4 mosaic.vrt tiles
```

### Remove blank tiles
To get rid of blank or extraneous files run this command from inside the tiles folder

``` shell
$ find . -type f -size -335c -delete
```


## Cloud upload

### Wasabi config

Tiles are pushed to Wasabi cloud storage via s3cmd. 
s3cmd can be installed using `brew install s3cmd` and configuring our Wasabi credentials by following the steps [here](https://wasabi-support.zendesk.com/hc/en-us/articles/115001757791-How-do-I-use-s3cmd-with-Wasabi- "here")

### Recursive upload command

Once s3cmd is configured, run the following command from the tiles directory:

``` shell
 $ for i in {13..20}; do cd $i; for f in *; do s3cmd put --recursive $f s3://urbanatlases/BARCODE/tiles/$i/; done; cd ../; done
```

