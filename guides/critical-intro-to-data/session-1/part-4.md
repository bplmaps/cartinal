

# Geospatial data: the what and the where

* **Data** are records of observations of phenomena. Data do not exist without human observation, classification, organization, and maintenance.
* Many types of observations can be organized into data sets and visualized, but only spatial data can be visualized on a map.

![John Snow cholera map](./media/JohnSnowCholeraMap.jpeg)
**John Snow's map of the cholera outbreak around the Broad Street pump (1854).** Source: Artoria2e5, Wikipedia, Wiki./media Commons.

* **Geospatial data** are records of what occurs in a certain place. Geospatial data are inherently locational, and, when analyzed, can shed light on patterns across space.
* There are two elements of geospatial data: **feature data** (which encode information about *where* an observation occurs) and **attribute data** (which encode information about *what* occurs).
* An easy rule of thumb: Feature data are things like state or national boundaries, cities, roads, rivers, and building - things that are physically and observably in the world. Attribute  data describe an object’s characteristics, like the name, depth, and water quality of a river, the height, construction date, and use of a building, and household income - things you can't see with your naked eye.

<Hideable title = "More on data: observation, visualization, and discerning patterns">

When data are organized and analyzed, we can call the result “information.” But in their raw, unprocessed forms, data are relatively useless.

Lots of observations can be organized into data sets. Let’s consider a data set of texts we receive in a day. Through observation, we can see we receive texts, and there are some qualities of the texts that might be interesting to record. We might want to record who sent the text, when they sent it, and the overall subject matter.

Many people have undertaken projects like this and recorded texts received in a year, emotions felt in a day, or types of goodbyes said in a week. A whole year can be spent recording and visualizing data in this way, [as Giorgia Lupi and Stefanie Posavec did in their project, Dear Data](http://www.dear-data.com/theproject).

![reference link](https://images.squarespace-cdn.com/content/v1/54eec73ee4b0ae0904da0e94/1469543541721-UB2SLPATTAHHT23DXU3K/ke17ZwdGBToddI8pDm48kAYCpg1VIiwn4rHNOpB5c4B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVjdAUSUmuEOi_N_6GrwUPyU5pNi1K8-4PrHaCC_jPqmRwI9WTNiCkeSufsKtaOj1w/image-asset.jpeg?format=1500w)
###### Dear Data postcards, Giorgia Lupi and Stefanie Posavec (2016).

[Some people even spend a decade](https://www.wired.com/2015/10/nicholas-felton-obsessively-recorded-his-private-data-for-10-years/) observing their lives and recording it in data.

**Geospatial data** are records of what occurs in a certain place. Geospatial data are inherently locational, and, when analyzed, can shed light on patterns of occurrence across space. One way we could make the Texts Received data into geospatial data by including information on *where we were* when we received the texts.

You can think of geospatial data as means to *pin down* non-spatial information to a specific place.

John Snow did something similar when he decided to attach a spatial location to the cholera occurence data. Think about it like this: Snow could have kept the Cholera Occurence data in a table and tracked the outbreak that way. But, drawing on work done in the Paris cholera outbreak of 1832, he chose to record and visualize the spatial distribution of each case. Mapping the locations of cases revealed the source of the outbreak.

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

![Map showing unemployment rates in America by state, January 2021](./media/BLSUnemploymentMap.png)
**Local Area Unemployment Statistics Map, US Bureau of Labor Statistics, January 2021.** Source: [Bureau of Labor Statistics]( https://www.bls.gov/charts/state-employment-and-unemployment/state-unemployment-rates-map.htm#)

</Quizlet>
