# Session 3 Teacher Notes


## Introduction  (0:05)
* Excited for Session 3 and looking forward to your feedback
* So, if you want to make a map, we've already reviewed that you'll need *data*. You'll also need *metadata*. 
* Today we're going to review all the type of data you need to make a map. We'll stop short of actually making a map, but we'll share lots of resources for learning that next step in the process. 
* In this course, we've aimed to prepare you all to be contientious mapmakers and map-readers, and today, we're finishing up with the very important part of mapmaking and mapreading: becoming a data detective. 

## Metadata: data about the data  (0:10) 
* Metadata is a crucial part of any map—though it might not seem like it at first. 
* To make a good, legible map that communicates an idea or argument, you need to know what the data behind your map is saying—how it was collected, what the column headers are, any caveats about how it should be used. 
* All of this information is called metadata—data about the data. 
* You might remember metadata coming up in class before... 
    * In Session 2, when we were talking about **attribute data**, we mentioned that, in order for numbers to be legible to computers as numbers, symbols like $ or % will be left out of the datatable. 
    * Are the numbers in a column a count or a percentage? That information will be in metadata.   
    * You also might remember taht coordinate reference system information—so, spatial information—is also included in metadata. 
* Metadata is one of the most valuable and important parts of the data and mapping process.  
    * It tells us what's *in* the dataset, by listing geographies, coordinate reference systems, describing column names, and things like that. 
    * All of that information is vital to know as a mapmaker.
    * But maybe more importantly, metadata also socially contextualizes the data. 
    * It tells us as mapmakers if the data was extracted in an unjust or problematic way, and can help describe the relationship of the data collector to the subjets. 
* Metadata will often come along with any dataset when you download it; but sometimes it can be tricky to find. 
* That's one of the reasons we created the Data Portal at the map center! 
    * We really believe that we can make better maps if metadata is organized and easy to read. 
* Let's take a quick tour of the Data Portal to show you what we mean.

## Metadata on the Portal (0:13) 
* We've seen this internet access map before, and are familiar with the dataset from Session 2. 
* We're going to breeze through some of the most important sections on the Portal very quickly, but please feel free to use this page of the textbook as a resource and revisit it as needed! 
* I'm going to be talking about the screenshots that are included here, and talking about the metadata of the internet access dataset.  
* The "About this data" section includes a simple description of the data. We can see here that the data came from the Census bureau, and was processed by Daniel Huffman. 
* Moving on to the "Get this data" section—We'll actually be using this later in today's class! 
    * It  gives you an option to download the data in different file types: you can see here, it's giving you the option to download the GeoJSON file and the CSV file, too. 
* The "Data Lifecycle" section shows that Belle and Daniel have both been involved in the creation of this dataset, Belle describing it for the Data Portal, and Daniel cleaning it for easier use. 
    * Daniel's also included a record of how they cleaned the data—this is a cool feature of the LMEC portal that you often won't find in other data discovery environments  -- it tells you about certain subjective choices that were made in how the data was reformatted or reorganized before it was made into a map.   
* We briefly discussed the "Data Geneology" section in Session 2, and how it shows that this dataset was created by **joining** the census boundary feature file and the statistical attributes describing internet access from the Census. 
* The "Related Resources" section here links out to a codebook that Daniel made, that describes how they renamed the column headers when they reformatted the data. Again, this is super useful when you're making a map, because you know how and why a certain field was changed! 
* Finally, "considersations" section covers the themes that we've become very familiar with in this class!
    * How legible is this dataset to a compter? How legible is this dataset to a human? 
    * And importantly, is the data social contextualized? Was it created collaboratively with the people it represents, or for a clearly-stated goal? A socially embedded dataset would provide super clear answers to these types of questions
* We'll think more about this idea of social embeddedness later in the class when we talks about "missing data."



## In Class Exercise: Peering into a Dataset (0:25)
* (Main Room Screenshare) Next we're going to return to a tool we used last time geoJSON.io to cement some of the things that we just touched upon about metadata
* One feature from the data portal which is neat is preview in geojson.io 
* As you can see here the spatial data is on the left and the attribute data is on the right
* You can see the relationship between these two things by clicking on them
* * But for now, we're going to peer inside a dataset, and see  how metadata will be helpful in visualizing the data on a map.
* Going to the table you can click on individual rows to see the information for that feature
* Each of the columns is a field but what do these mean if we just have this dataset? You could guess but the first step should be look at the metadata!
    * TRACTCE - what do you think this means (Tribal census tract how to look at geographic space metadata)
    * ALAND - what do you think this means (info that would be helpful like units maybe, precision)
    * NoInternet - codebook/ cartographer choices
    * PctInternet - codebook (and how this was changed by Daniel) / cartographer choices
* For check yourself exercise what might be a unique id?
* How did the PctNoInt value get made
## Missing Data - (0:30)
* Metadata can be missing which makes it hard to understand but what happens when data is missing?
* This can be on a small scale level i.e. an unfilled data point or a 0 which is unclear if the data wasn't collected or not such as missing a day 
* However the idea of missing data can also extend to a greater phenomena of things that people don't make datasets about which couples which centuries of societal and cultural norms and has kind of been set in stone by institutions
* Data gives substance to things but just because data isn't there doesn't mean something isn't going on. Minority populations and other disadvantaged groups may not have the means of creating data
* Analagous to history tells the winners' stories this is similar in that only the people who have power can do the mapping
* There is some safety that comes from not being mapped as well - once you are mapped and data is colelcted about you those people hold a certain power over you
* Some missing datasets could be info about tribal lands, an example could be the first map of San Francisco's chinatown actually created in their native language by an Asian American immigrant - before that data wasn't even a thing
* **Question:** What are some other potential missing datasets that you can think of - or things that aren't mapped commonly but shoudl be?


## Dealing with Data in the Wild - (0:35)
* So navigating back to the world of data that exists we've outlined a couple things that you might run into and want to think about as you're working thorugh different datasets and decoding what they all mean - we will soon put it into practice but a few to highlight
* No link between feature and attributes - eternal thread that keeps them togeter if that's missing you just have data floating around or unclear link i.e. one has a leading zero and one does not
* Numbers as strings briefly so remembering there is a difference between what the computer registers and what you see
* And the last two tie back into what we have talking about metadata
    * if we don't have metadata who knows what you are looking at! columns labelled field 1, field 2 etc don't provide much for you to go off of
    * context, metadata often gives context for unemployment pop you might think oh, makes sense but what about location, time frame, industry etc.

## Putting it All Together: Messy Data Exploration (0:50)
* **Main Breakout Room**
* Goals: how to use the knowledge we just covered over metadata and applying to the messy COVID data situation
* Maps are about places, which tabs are about places?
* Three key things
    * Why are there so many rows for each town? 
        * Look at column headers: each week has its own row
    * <5 isn't intelligible to a computer as a number, it's a string!   
        * Data encoding is weird because of signs and words
    * No features in this spreadsheet, how to connect this to a map? Find feature geometry separately
        * We'd have to find feature geometry separately
* Not malicious, it's another person making them in the most efficient way 

## Where Do We Go From Here? (0:55)
* So now as we approach the end of the class we want to leave you with some resources and information as where you can go from here armed with all this information 
* We outlined five key questions that are good to go over when planning your next data project and a lot of these are good reminders that the devil is in the detail
* Further resources we have included more tutorials from the Map Center along with projects made by our MIT lab collaborator Data + Feminism Lab
* We've also included some ways you can think about moving forward with map making after this course which you can peruse on your time



## Conclusion  (1:00)
* Survey + Final Break out Rooms
