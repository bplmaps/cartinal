# Joining feature and attribute data

## How do features and attributes get together?

* Most data maps show both the shape and location of places (**features**) and information that we know about those places (**attributes**)
* How do we connect these two different types of data?
* Merging features and attributes typically requires connecting data sets through a process called a **join**
* To join two or more sets of data, we need something called **stable identifier** or **unique identifier**
    * A stable identifer is shared by the feature and attribute data and tells the computer which data corresponds to what geographical place.
    
## An example join

Looking at the attribute table for the Wi-Fi maps we have discussed, we can see how joins work:

* Each row of attribute data has a value called `GEO_ID`
* The feature data (which contians the shape of each Census tract) also has a `GEO_ID` value
* The GEO_ID is the **stable identifier** that we use to link the information about internet access with information about the shapes of Census tracts
* When we join attribute data to feature data, we tell the computer to fill the shape of the feature data (a polygon, a point, a line, or a grid square of a raster file) with the information in a certain row of the attribute data.

![Reference Link](https://i.imgur.com/ixxu4VB.png)

::: tip

To join data, the identifiers need to be **exactly** the same as one another.

:::


<Hideable title = 'On your own time'>

We know how powerful it can be to look at data on a map. Interesting and useful patterns emerge when we tie attribute data to geospatial feature data. Let’s recall the map made by John Snow, that tracked the cholera outbreak around the Broad Street pump, or the maps published by NPR that showed the spatial patterns between temperature and income in American cities. As we know, there are two components at play in these thematic maps: attribute data and feature data. To make a map, this information needs to be tied together, or joined. Joining data is an integral step in the mapmaking process. 

Mapmakers use software like ArcGIS and QGIS to join data—but before we can build those technical skills, we need to review the basic concept behind a join. 

When we join attribute data to feature data, we are essentially telling the computer to fill the shape of the feature data (a polygon, a point, a line, or a grid square of a raster file) with the information in a certain row of the attribute data. Let’s return (again!) to the BLS unemployment maps. The information held in the table (the name of the state and its unemployment rate) is joined to the shape of each state. The mapmaker tells the computer, through joining feature and attribute data, that the shape of Alaska has a numerical value of 5.8.

The key to a join is a **stable identifier**, or **unique identifier** that is shared by the feature and the attribute data that will fill it. In this table from the LMEC Public Data Portal, which has information about internet access in Boston, the unique ID for each entry is housed in the GEO_ID column. Each GEO_ID is associated with a census tract. When this attribute data is joined to the features data of census tracts, we can visualize the information on a map.  

![Reference Link](https://i.imgur.com/ixxu4VB.png)
###### Screenshot of the LMEC Boston Public Internet Access data table.

</Hideable>

<Quizlet
	title="Check yourself"
	:questions="[
		{text: 'You have some feature data of states where each state is defined by its abbrevation (e.g., MA). You also have an attribute table where each state is defined by its name (e.g., Massachusetts). Could we join these two data sets in their current format?',
		answers: [
			{text: 'Yes'},
			{text: 'No', correct: true}
		]}
	]"
/>

