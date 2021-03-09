---
health:
    underConstruction: true
---

# How does a computer make a map?

## 

<Hideable title="More reading on your own time">
    
> **“It is better for us to begin from the premise that cartography is seldom what cartographers say it is.” ([J.B. Harley, "Deconstructing the Map"](https://quod.lib.umich.edu/p/passages/4761530.0003.008/--deconstructing-the-map?rgn=main;view=fulltext))**

</Hideable>

In order to learn how to critically evaluate maps, we will start by destructing one. While this might sound complicated and confusing, it really boils down to understanding the choices made by the mapmaker. 

Let’s start by taking a look at [this](https://data.bls.gov/lausmap/showMap.jsp;jsessionid=EC696AF4A62D14FE2E82DA3648051184._t3_07v) **thematic map** published by the US Bureau of Labor Statistics.

![](https://i.imgur.com/BP8YjPZ.jpg)
###### Local Area Unemployment Statistics Map, US Bureau of Labor Statistics, November 2020.


You will notice that different states are filled in with varying shades of blue. States with relatively lower unemployment rates are shown in lighter shades, while states with relatively higher unemployment rates are shown in darker shades of blue. This kind of map is refered to as a **choropleth map**: it pairs different shades of color with different statistics of the theme it's showing. A key concept to keep in mind with this kind of map is the ability of the cartographer to choose **buckets**, or ranges for each shade included in the map. Sometimes cartographers choose buckets using **equal intervals** or **equal counts**, among other possibilities, and the choices made at this stage largely influence the appearance of the map. 

Notice how in the November 2020 map, the highest bucket of unemployment rates includes 8.4-10.2% unemployment. States with unemployment rates in this range are drawn in the darkest shade of blue, bringing the viewer’s eye to these areas as warranting particular attention. 

Now, let’s take a look at the BLS map for April 2020:

![](https://i.imgur.com/GNOUv16.jpg) 
###### Local Area Unemployment Statistics Map, US Bureau of Labor Statistics

Now, our lowest bucket (8.3-10.2%) is almost the same as the highest bucket from the November 2020 map. What drew the most attention in November 2020 now appears to be “good” compared to areas with even higher unemployment. 

How do you think the BLS cartographers chose to design these buckets, and how does that change our interpretation of the data? 

~~It looks like an algorithm takes the range of unemployment rates for a given month and draws the much such that a fairly equal number of states falls into each one. This makes sense and is a fairly common approach to cartographic design, but it also means that problems could be overlooked and underestimated through decisions made by mapmakers.~~ At first, we might not notice the difference in buckets, and it might seem like a small detail. But what if we wanted to *compare* unemployment rates in April and Novemeber? How would the different buckets affect our intepretation of the data?

No matter the map, no matter the topic, cartographers make conscious and unconscious decisions in how they choose to display information and data. As Harley wrote, “All maps state an argument about the world and they are propositional in nature.” ([Harley](https://quod.lib.umich.edu/p/passages/4761530.0003.008/--deconstructing-the-map?rgn=main;view=fulltext))  

Every component of a map represents the mapmaker's choices, arguments, or assumptions. We've seen how different buckets of data can change the entire look and message of a choropleth map, and there are similar choices behind *every part* of *every map*. In the BLS maps, the mapmaker chose how to represent borders of states and which colors to use; they chose how to name the map and where to place Alaska, Hawaii, and Puerto Rico relative to the contiguous United States. Even the decision to have a white background instead of a basemap showing bodies of water and surrounding countries was a decision that affects the how we as viewers understand map.

