# LMEC Public Data Portal

## Overview

* The **LMEC Public Data Portal** houses a variety of datasets drawn from data collectors and sources like federal and local governments. 
* The Data Portal is a useful resource because it offers a more critical look into where the data comes from and how the data was created. This additional information is called **metadata**, and it is an integral part of any dataset—but unfortunately, this information is not  included with every dataset. 
* Many of the features and search tools mirror other data retrieval sites so you can apply these skills to other data portals you might run into.  

## Searching the Data Portal

When you first enter the data portal you will see this search screen.

![](https://ibb.co/XsV8Wtv)


Let's try searching for the Boston internet access data we were looking at in the last Session. 

[insert image here]

Enter a key word, such as "internet," that relate to the topic you want to find. When you see the result you want to explore, click on the data to be taken to the main page for the data source. 

[insert image here]

Here you can see various information about the data being collected including authors, sources, curators, and more. This is metadata, which we'll dive into in Session 3. 



## Data Geneology 
* The **Data Geneology** section on the Data Portal tells you if the dataset you're looking at was created from multiple source datasets were combined to create the dataset 

![Reference Link](https://i.imgur.com/U06yfZ6.png)

* The Source Datasets indicate which datasets make up the final version being offered for download on the site. 
* Processing Steps outline the actions taken by the mapmaker to alter or combine the Source Datasets to create the dataset being offered for download. 

<aside> 

Often when making a map, data needs to be changed an adapted to fit the user's need. This is called **data cleaning** and is an important step in all mapping projects. Because this introduces humans playing with the data, it is important to document what changes and steps were made to get to the dataset as presented. Many times this information is not included but here in the BPL Data Portal we can clearly follow how the dataset was made.

</aside>



## Human bias in data

<aside>


Example: Covid-19 testing capacity

Early in the pandemic, a lack of testing infrastructure clouded our understanding of community spread and transmission. Fluctuations in testing capacity and infrastructure affect the accuracy of the data.

</aside>

* What gets lost in translation between spreadsheet and map?
  * Distortion actually begins with data collection (and lack thereof)
  * Some helpful vocabulary for identifying this distortion:
    * **Response bias**
    * **Non-response bias** 
    * **Sample size** 
    * **Survey design (e.g. leading questions)**
    * **Missing data**
      * i.e. the information that we fail to record  (more to come in session 3)

Any mode of data collection is imperfect; it is an attempt to record phenomena in our world. Let's learn more about methods of data collection. 



## Comprehension check
What do you notice about the two Source Datasets listed in the Data Geneology for the internet access dataset? Can you recognize feature and attribute data? How do you think this spatial and attribute data were combined into one? 

<hideable title = "Check your answer">

You probably guessed it: a join! Joining is a common data processing step that allows us to give attribute data spatial significance so we can understand how the information is spread out.

</hideable>