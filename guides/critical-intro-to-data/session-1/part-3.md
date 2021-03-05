---
health:
    underConstruction: true
---

# Introducing geospatial data

## Types of maps

* Maps are an instrument that allow us to see themes and scales that are impossible to see with the naked eye.
* **Reference maps** show us space at scales we cannot otherwise see. 
* **Thematic maps** show us themes across space, which are otherwise invisible.  
* Both kinds of map show not only space, but also data.

<hideable title = "More reading on your own time">
 
There are, generally, two different types of maps: on one hand, we have atlases, road maps, globes, Google Maps. These  are called **reference maps**: they describe physical qualities of space and the location of physical things, like coastlines, roads, rivers, cities, mountain ranges, and coffee shops. 

On the other hand, there are **thematic maps**, which show the spatial aspect of a specific theme. There are many different themes that maps can show, like household income, annual rainfall, population density, or air quality. In this course, we focus on the creation of thematic maps because they show us how to work with *both spatial and non-spatial data*. 

Geographer Dennis Cosgove has described maps as an instrument, like the microscope or telescope, that “allows us to see at scales impossible for the naked eye." Thematic maps, focused as they are on a spatial theme, “reveal the presence of phenomena that are beyond our normal bodily senses.”

### Maps and abstractions

In 1893, long before the advent of mapping software, Lewis Carroll summarized many of the fundamental troubles faced by contemporary mapmakers. In his book Sylvie and Bruno Concluded, he describes a conversation between the narrator and a German man, Mein Herr: 

> “What a useful thing a pocket-map is!” I remarked.
> 
> “That’s another thing we’ve learned from your Nation,” said Mein Herr, “map-making. But we’ve carried it much further than you. What do you consider the largest map that would be really useful?”
> 
> “About six inches to the mile.”
> 
> “Only six inches!” exclaimed Mein Herr. “We very soon got to six yards to the mile. Then we tried a hundred yards to the mile. And then came the grandest idea of all! We actually made a map of the country, on the scale of a mile to the mile!”
> 
> “Have you used it much?” I enquired.
> 
> “It has never been spread out, yet,” said Mein Herr: “the farmers objected: they said it would cover the whole country, and shut out the sunlight!” 

You might be thinking, “That’s absurd!” (*Sylvie and Bruno Concluded* is indeed billed as a comedy.) But the absurd comedy of Mein Herr’s one-mile-to-one-mile map exposes one assumption we have of maps: that they are smaller than the space they are representing. We know already, then, that a map is an abstraction of the world. It is a simplification, a representation, a “[scaled model of reality.](https://projecteuclid.org/euclid.ss/1124891287)” Maps are not supposed to be reality itself—which is why Mein Herr’s map is so preposterous.

Making a map is a long process of abstraction, translation, and communication. We know already that part of the abstraction begins much earlier than visualizing space: it begins in the collection and creation of data. 

</hideable>

## Geospatial data: the what and the where

* **Data** are records of observations of phenomena. Data do not exist without human observation, classification, organization, and maintenance. 
* Many types of observations can be organized into datasets and visualized—but only spatial data can be visualized on a map.

![reference link](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/1200px-Snow-cholera-map-1.jpg)
**John Snow's map of the cholera outbreak around the Broad Street pump (1854).** 

* **Geospatial data** are records of what occurs in a certain place. Geospatial data are inherently locational, and, when analyzed, can shed light on patterns of occurrence across space.
* There are two elements of geospatial data: **feature data** (which encodes information about *where* an observation occurs) and **attribute data** (which encodes informatoin about what occurs). 

<Hideable title = "More reading on your own time">

Data do not exist without human observation, classification, organization, and maintenance. When data are organized and analyzed, we can call it “information.” But in its raw, unprocessed form, data are relatively useless, simply observations that are seemingly random. 

Lot's of observations can be organized into datasets. Let’s consider a dataset of texts we receive in a day. Through observation, we can see we receive texts and there are some qualities of the text that might be interesting to record. We might want to record who the text is from, at what time it’s received, and the general nature of the text. Many people have undertaken projects like this, where they record texts received in a year, emotions felt in a day, or types of goodbyes they say in a week. A whole year can be spent recording and visualizing data in this way, [as Giorgia Lupi and Stefanie Posavec did in their project, Dear Data](http://www.dear-data.com/theproject). 

![reference link](https://images.squarespace-cdn.com/content/v1/54eec73ee4b0ae0904da0e94/1469543541721-UB2SLPATTAHHT23DXU3K/ke17ZwdGBToddI8pDm48kAYCpg1VIiwn4rHNOpB5c4B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVjdAUSUmuEOi_N_6GrwUPyU5pNi1K8-4PrHaCC_jPqmRwI9WTNiCkeSufsKtaOj1w/image-asset.jpeg?format=1500w) 
###### Dear Data postcards, Giorgia Lupi and Stefanie Posavec (2016). 

[Some people even spend a decade](https://www.wired.com/2015/10/nicholas-felton-obsessively-recorded-his-private-data-for-10-years/) observing their lives and recording it in data. In Session 3, we’ll spend time thinking about how to make our own datasets. But for now, let’s turn to geospatial data.  

**Geospatial data** are records of what occurs in a certain place. Geospatial data are inherently locational, and, when analyzed, can shed light on patterns of occurrence across space. We could make the Texts Received data into geospatial data by including information on *where we were* when the text was received. Perhaps this wouldn’t show any sort of spatial pattern. But consider a dataset about instances of illness, like this one, drawn in 1854. 

![reference link](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/1200px-Snow-cholera-map-1.jpg)
**John Snow's map of the cholera outbreak around the Broad Street pump (1854).** 

The cartographer, John Snow, drew on work done in the Paris cholera outbreak of 1832 and visualized individual cases not in a table, or a data visualization, but on a map. The result is striking: it shows that there was an outbreak clustered around the water pump on Broad Street. Snow’s map showed a compelling spatial pattern that would have been more difficult to discern if he had kept his data in a table. Nowadays, geospatial data are most often visualized and manipulated in geographic information system (GIS) software such as ArcGIS, QGIS. 

There are generally two elements of geospatial data: the *what* and the *where*. The where data are called **features data**, and they provide the spatial information that will be the visual basis of your map. Features data are things like state or national boundaries, cities, roads, rivers, buildings: things that are physically in the world. The what data are called **attribute data**. You can’t see attribute data with your naked eye: attribute data describe an object’s characteristics, like the name, depth, and water quality of a river; the height, construction date, and use of a building; or household income. You can think of features as an empty cup that the what data is poured into, or the tack that pins the what data to a specific location. 

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