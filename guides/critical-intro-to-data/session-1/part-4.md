---
health:
    underConstruction: true
---

# Geospatial data: the what and the where

* **Data** are records of observations of phenomena. Data do not exist without human observation, classification, organization, and maintenance. 
* Many types of observations can be organized into datasets and visualized, but only spatial data can be visualized on a map.

![reference link](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/1200px-Snow-cholera-map-1.jpg)
**John Snow's map of the cholera outbreak around the Broad Street pump (1854).** 

* **Geospatial data** are records of what occurs in a certain place. Geospatial data are inherently locational, and, when analyzed, can shed light on patterns across space.
* There are two elements of geospatial data: **feature data** (which encodes information about *where* an observation occurs) and **attribute data** (which encodes information about what occurs). 

<Hideable title = "More reading on your own time">

Data do not exist without human observation, classification, organization, and maintenance. When data are organized and analyzed, we can call it “information.” But in its raw, unprocessed form, data are relatively useless, simply observations that are seemingly random. 

Lots of observations can be organized into data sets. Let’s consider a data set of texts we receive in a day. Through observation, we can see we receive texts and there are some qualities of the text that might be interesting to record. We might want to record who sent the text, when they sent it, and the overall subject matter. 

Many people have undertaken projects like this and recorded the texts they received in a year, emotions felt in a day, or types of goodbyes they say in a week. A whole year can be spent recording and visualizing data in this way, [as Giorgia Lupi and Stefanie Posavec did in their project, Dear Data](http://www.dear-data.com/theproject). 

![reference link](https://images.squarespace-cdn.com/content/v1/54eec73ee4b0ae0904da0e94/1469543541721-UB2SLPATTAHHT23DXU3K/ke17ZwdGBToddI8pDm48kAYCpg1VIiwn4rHNOpB5c4B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVjdAUSUmuEOi_N_6GrwUPyU5pNi1K8-4PrHaCC_jPqmRwI9WTNiCkeSufsKtaOj1w/image-asset.jpeg?format=1500w) 
###### Dear Data postcards, Giorgia Lupi and Stefanie Posavec (2016). 

[Some people even spend a decade](https://www.wired.com/2015/10/nicholas-felton-obsessively-recorded-his-private-data-for-10-years/) observing their lives and recording it in data. 

**Geospatial data** are records of what occurs in a certain place. Geospatial data are inherently locational, and, when analyzed, can shed light on patterns of occurrence across space. We could make the Texts Received data into geospatial data by including information on *where we were* when we received the texts. 

Perhaps this text data set wouldn’t show any sort of spatial pattern. But consider a dataset about instances of illness, like this one, drawn in 1854. 

![reference link](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/1200px-Snow-cholera-map-1.jpg)
**John Snow's map of the cholera outbreak around the Broad Street pump (1854).** 

The cartographer, John Snow, drew upon work done in the Paris cholera outbreak of 1832 and visualized individual cases not in a table or graph, but on a map. The result is striking; it shows that there was an outbreak clustered around the water pump on Broad Street. 

Snow’s map showed a compelling spatial pattern that would have been more difficult to discern if he had kept his data in a table. Nowadays, geospatial data are most often visualized and manipulated in geographic information system (GIS) software such as ArcGIS, QGIS. 

There are generally two elements of geospatial data: the *what* and the *where*. The where data are called **feature data**, and they provide the spatial information that will be the visual basis of your map. Features data are things like state or national boundaries, cities, roads, rivers, buildings, things that are physically in the world. 

The what data are called **attribute data**. You can’t see attribute data with your naked eye: attribute data describe an object’s characteristics, like the name, depth, and water quality of a river, the height, construction date, and use of a building, or household income. 

You can think of features as an empty cup that the attribute data is poured into, or the tack that pins the what data to a specific where. 

</Hideable>

<Quizlet 
    title="Check your understanding"    
    :questions="[
        {text: 'What are the features of this map?',
        answers: [
            {text: 'Unemployment percentages'},
            {text: 'The states', correct: true}
        ]},
        {text: 'What are the attributes of this map?',
        answers: [
            {text: 'Unemployment percentages', correct: true},
            {text: 'Shades of blue'}
        ]
        }
    ]"
>

![](https://i.imgur.com/BP8YjPZ.jpg)

</Quizlet>