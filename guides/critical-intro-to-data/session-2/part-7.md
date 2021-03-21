# Introducing the LMEC Public Data Portal

## Overview

* The **[LMEC Public Data Portal](data.leventhalmap.org)** houses a variety of datasets drawn from numerous data sources
* This search tool expands the usefulness of these data sources by offering a more detailed information than is commonly available about:
    - **where** the data came from,
    - **how** it has evolved over time,
    - **who** has changed or edited it,
    - and how **easy** it is for people to use
* Information about data is called **metadata**, and it is integral to understanding how to work with a dataset
* You might not always be able to find *as* detailed information as is available with the LMEC portal, but no matter which data retrieval site you are using, you will need to know how to work with metadata


## Searching the Data Portal

When you first enter the data portal you will see this search screen.

[insert image here]

Let's try searching for the Boston internet access data we were looking at in the last Session.

[insert image here]

Enter a key word, such as "internet," that relate to the topic you want to find. When you see the result you want to explore, click on the data to be taken to the main page for the data source.

[insert image here]

Here you can see various information about the data being collected including authors, sources, curators, and more. This is metadata, which we'll dive into in Session 3.



## Data Geneology
* The **Data Geneology** section on the Data Portal traces the data lineage of a dataset
* Was it combined from other sources? Joined like how we learned in Session 2?
* Processing steps are provided so you could retrace the steps

![Reference Link](https://i.imgur.com/U06yfZ6.png)

<hideable title = "Learn more: cleaning data">

Often when making a map, data needs to be changed and adapted to fit the user's need. This is called **data cleaning** and is an important step in all mapping projects. Because this introduces the element of humans manipulating the original data, it is important to document what changes and steps were made to get to the dataset as presented. Many times this information is not included but here in the LMEC Data Portal we can clearly follow how the dataset was made.

</hideable>



## Human bias in data

<aside>

**Real-world example:** Covid-19 testing capacity. Early in the pandemic, a lack of testing infrastructure clouded our understanding of community spread and transmission. Fluctuations in testing capacity and infrastructure affected the accuracy of the data.

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
