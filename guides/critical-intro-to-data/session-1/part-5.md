---
health:
    underConstruction: true
---

# Learning to question data

## In between the world and data are people
* Just as there's a human behind every map, there is a human behind every dataset. This person chooses how to observe the world, how to organize these observations, and how to share the dataset with the world. 
* Because there are humans in data, data is exposed to human error, oversight, and bias. 

![](https://i.imgur.com/hAo8TCn.png)


## What questions should we ask of data?

* To start to understand the human element in every dataset, we can pose questions like these:  
    * **Who** made the data? 
    * **Why** was this data collected? Are there particular motives that lie behind the reason for the dataset's creation? Personal bias of the data collectors can easily skew data to tell one side of the story but not the other. 
    * **When** was the data collected? Can the data still be used to make accurate and current conclusions about what it represents. 
    * **What** is being counted or collected? Even more interesting to consider, what is not being counted and what implications does that have for the data? 
    * **Where** is the region that this data covers? Where was the data collected?

## Changing spaces, changing data
* Both attribute and feature data can be critically questioned in this way.
* The world around us is continuously changing; this means, as mapmakers, we must constantly update datasets that describe what we know; as mapreaders, we must keep asking questions of the data as it is updated. 
* An example of changing feature data: rising sea levels mean that feature data that describes the coastline has to be updated frequently, and old files might be inaccurate.

![Reference Link](https://i.imgur.com/mxDglHY.jpg)
*Flood Progression Map: 2070 and Beyond*
 
*  Open Street Map and crowdsourced platforms offer ways for the general public to update spatial data—but who feels empowered to partake in these mappings and remappings? Does everyone have equal access?  

<hideable> 

It might seem counterintuitive at first, but we can also ask questions of feature data—the *where* data. Remember that feature data include streets, country borders, townlines and other physical elements of the world.Can these physical elements around us change? 

The simple answer is: yes! And we can recognize this in our own lifetimes: street locations, national borders, and boundaries are constantly changing. Climate change presents a particularly stark example. Data that represents the coastline from five years ago is simply out of date. Because of rising sea levels, today's coastline is significantly different than the coastline that the old data represents. Spatial data also needs constant maintenance to stay up to date. We need to ask the same questions of it as we do of attribute data: who, what, where, when, why, and how. We can see this idea reflected in the LMEC's work to [map the effects of climate change in Boston](https://collections.leventhalmap.org/map-sets/191).  In this map we see how rising sea levels and floods may change the geography of the city and what areas are above water. 

![Reference Link](https://i.imgur.com/mxDglHY.jpg)
###### Flood Progression Map: 2070 and Beyond

Another example of how spatial data should be questioned is regarding politically recognized borders and or regions. If one entity - such as a country - does not legally recognize the rights of a certain people or group, their datasets may not reflect the existence of such boundaries.

While looking at numbers and letters in organized columns may lead you to believe that data is objective we must not let ourselves be fooled! The decisions that go in to collecting data along with the everchanging world around us means we must not take data given to us at face value but engage in the constant process of updating what we know and asking questions. 

[Open Street Map](https://www.openstreetmap.org/#map=5/38.007/-95.844) or OSM for short, is an open source map project created and maintained by the public is a great example of how datasets can be changing and evolving over time. Users can add in polygons, points, and lines to update the world around them - this collective approach to data maitenance is a refreshing take on closed static mapmaking and empowers users to take charge of mapping themselves and their communities. 

However, we must also acknowledge questions of underlying power and privilege that may be hidden beneath the surface on platforms like these. Does everyone have equal access and ability to contribute? Who might feel intimidated to make changes?

</hideable>

## Introduction to the LMEC Public Data Portal

* In this series of workshops, we will introduce the Leventhal Map and Education Center's Public Data Portal.
* It offers curated Boston-centric datasets along with a variety of other resources to kickstart your mapping adventures! 
* It includes robust information about the datasets it houses. This information helps us answer the critical questions we've discussed today. It is called *metadata*, and we'll learn more about it in Session 3. 

[insert screenshot of homepage here]

<Quizlet 
    title="Check your understanding"
    :questions="[
        {text: 'Datasets never have to be updated or altered; once they\'re made, they remain accurate for all time.',
        answers: [
            {text: 'True'},
            {text: 'False', correct: true}
        ]},
        {text: 'Computers can update data automatically, without human input.',
        answers: [
            {text: 'True'},
            {text: 'False', correct: true}
        ]
        }
    ]"
/>