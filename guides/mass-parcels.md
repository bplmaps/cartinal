---
sidebar: auto
---

# Downloading Massachusetts Parcels

## Finding by location

Each Massachusetts municipality creates and maintains their own property boundary files. MassGIS has worked to standardize these files across municipalities. 

To **download the data** in this tutorial, learn more about this dataset and access the data codebook, please find <a target = "_blank" href ='https://docs.digital.mass.gov/dataset/massgis-data-standardized-assessors-parcels'>MassGIS Data: Standardized Assessors' Parcels</a>

On this page, there are options for finding the data. To narrow down the data to the correct location you are looking for, select the `From a Map` option.

![MassGIS](./media/by-map.png)

You will be taken to a web app where you are presented with a data layer showing every municipality in Massachusetts.

![MassGIS](./media/municipalities.png)

Each boundary will be labeled with the town or city name, and the most recent year that town or city's data was contributed to the standardized, open MassGIS dataset.

Zoom in to the area of interest, and select the city or town by clicking on the appropriate polygon.

## Downloading

![Somerville parcels](./media/somerville-parcels.png)

Select `Download Shapefile` and unzip / extract the download.

::: danger
The data inside this data folder, when unzipped will look very messy and confusing. If you are new to working with shapefiles, it may be helpful to read our <a href ='./file-formats.html'>Common GIS File Formats: Shapefile Guide</a> first.
:::


## Bringing into QGIS

In an attempt to standardize the way this data is compiled across multiple municipalities, MassGIS has broken the data in to three different layers: `Miscellaneous Features`, `Other Legal Interests`, and `Tax Parcels`. 

We are interested in the `Tax Parcels` layer, so we are looking for the file that has `TaxPar` in the name.

From QGIS, select `Layer > Add Layer > Add Vector Layer`.

`Source Type: File` is OK as default, then click the elipses button to the right of `Source Vector Datasets`

Navigate to the file that contains the string `TaxPar` and ends in the file extension `.shp`. QGIS is smart enough to bring in all of the other files associated with that file, so selecting just the `.shp` extension is OK.

Select `Add` and then `OK`.

![Somerville parcels](./media/somerville-parcels-2.png)

## Interpreting the data

- To get information about any feature, you can use the <a target = "_blank" href ='https://docs.qgis.org/2.8/en/docs/user_manual/introduction/general_tools.html#:~:text=Identify%20features&text=icon%20in%20the%20toolbar.,followed%20by%20the%20layer%20name.'>QGIS Identify Tool</a>.


- To view the attribute table for the whole dataset, you can use the <a target = "_blank" href ='https://docs.qgis.org/2.18/en/docs/user_manual/working_with_vector/attribute_table.html'>QGIS Attribute Table</a>.


- To learn how to interpret field names in the attribute table, and learn more about the particulars of this dataset, visit <a target = "_blank" href ='https://docs.digital.mass.gov/dataset/massgis-data-standardized-assessors-parcels'>MassGIS Data: Standardized Assessors' Parcels</a>.