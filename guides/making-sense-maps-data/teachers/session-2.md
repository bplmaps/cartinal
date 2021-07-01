# Session 2 Teacher Notes


## Introduction (0:02)

* Hello and welcome back to the critical introduction to data and mapping course! 
* Today's focus is all things *data*. We'll go over different types of spatial data and review the concept of *joining data*, which is a term you'll hear a lot in mapping. 
* We'll also review projections—how the round world is made flat—and some common file types you'll encounter in a mapping project. 
* By the end of today's session, you'll be able to identify the types of data you'll need for a mapping project, and how they all work together. 

## Attribute data (0:05)

* As we learned last time, attribute data tell us **what** is happening in the world. 
* Attribute data describes things like household income, air quality, and unemployment rates; street names are also an example of attribute data.
    * Right off the bat: does anyone want to provide an example of attribute data in the chat or by unmuting? 
* We touched a bit on this last time, but today we're going to get into more detail. Computers require data to be in very specific and structured formats in order for the information to be legible. Think of it a bit like translating data from human language to computer language—but where we have many different types of words (nouns, adjectives, adverbs, active verbs, passive verbs, gerunds, etc.) the computer can only understand a few types of words.
* Two of these computer-legible forms are strings and numbers
* Strings are combinations of letters and numbers—often strings are human-legible, too, as they look like words or codes. 
* Numbers record countable observations and values. Lots of things can be numbered: counts of individual occurances, or percentages. 
    * Human-legible signs that we associate with numbers—like $ or %—can confuse computers, so are left out of data tables. Sometimes given the context, you can figure out that a given column is talking about percentages, or dollar amounts—but sometimes it's not so clear. Information like this—that tells you what the numbers in this column are—is included in metadata! We'll get into this in more detail next time, but this is a good preview of what's to come. 

**break for questions** 

* In this unemployment map, humans see the data about the unemployment rate in each state is visualized as shades of blue.
* But the computer "sees" this table. We call this an attribute table. 
    * Can you identify what type of data is in each column? 


## Feature data (0:12)

* Feature data describe where something is happening. Features refer to the actual geography of the earth's surface. Features can be visible—like rivers, roads, mountain ranges—or invisible—like political boundaries. But in all cases, feature data have to do with physical space. 
* Just like attribute data, we have to translate these complex features to very structured and pre-determined data types to ensure that the computer knows what we're talking about. It doesn't know what Massachusetts looks like, where "Boston" is without us encoding these things in very specific ways.
* There are two types of feature data: raster and vector 
* Raster data is like a giant sheet of gridded paper, dividing up the earth's surface into squares of equal size. 
* Vector data is slightly smoother, like drawing: it renders the world in three types of shapes: points, lines, and polygons. 
* One good analogy comes from art: raster data shows the world like a huge mosaic, whereas vector data shows the world like stained glass.  
* Let's look at some exapmles 
* This map uses raster data to show air quality across the northeast. 
* Raster data is often used in cases like this: continuous phenomenon that don't conform to politial boundaries but flow over or across space. Air quality and land cover are two common examples. 
* Vector data, on the other hand, is often used to show phenomena that occur *within* a certain boundary. 
* In this case, we see changes in death rates and money saved across a few counties in Massachusetts
* The shapes of the counties and states are formed by connecting many many points to form a closed shape: a polygon. 
* Boston is a point here, because it has no dimension. 

**Break for questions** 

* Have a look at the comprehension check below and see how you do! Ask any questions that might come up by unmuting or posting in the chat. 

## Coordinates and projections (0:17)


* So, in the last section, we learned that polygons and lines are formed by connecting a lot of dots to form a shape. 
* But how does the computer know where the dots are? 
* We use something called a coordinate system. 
* A coordinate is a location in space, defined by x and y positions.
* There are lots of different coordinate reference systems out there, which each have a slightly different way of matching points to the earth's surface. 
* WGS 84 is the most common one.
* Coordinates in WGS 84 are derived from latitude and longitude: the grid system that covers the globe and is based on the Equator and the Prime Meridian. 
* If you go to Google Maps, you can find the WGS 84 coordinates by right-clicking on a location. 
* The Boston Public Library's coordinates are 42.34953, -71.0775. These numbers describe the library's location as it corresponds to the Equator and the Prime Meridian.
* Coordinate systems are often the cause of confusion and frustration in mapping projects: you might get a geographic file expecting to see points around the Boston area, but they show up in the middle of the Pacific Ocean, or you might find that Massachusetts looks much tinier than you expected—these sorts of issues are almost always a question of a mismatched coordinate system within the data itself. To avoid these annoyances, you want to take note of the coordiate system when you download data. It's often specified in metadata, a topic we'll be discussing next time. 
* Coordinates are closely related to projections.
* Projections allow the curved surace of the earth to be *projected* onto a page or screen—a flat surface
* Maybe you'll remember doing an experiment in high school science class of trying to flatten an orange peel... 
* Projections matter a lot in maps that show the whole world—they don't matter as much when you're looking at just a neighborhood or a few square blocks. 
* Projections are an interesting place to think about the power of mapping... when we look at these two examples, the Goode Homolosine projection and the Mercator projection, what do you notice about the shapes of the countries? 
    * Does anyone want to unmute and share your thoughts and describe what you see? 
    * Setting North at the top of the map is an arbirary convention...that also allows Europe to be at the top and roughly the middle of the earth.  
* Projections can intentionally or unintentionally perpetuate pre-existing power structures and even construct new ones.  
* But, as we discussed last time, it's important to remember that what we now see are conventions were at one point choices made by a cartograhper. 
* Try answering these quick questions below and let us know if you have any questions. 

**Break for questions** 

## Joining feature and attribute data (0:22)

* So we learned about these two types of data: the features are the "where," and the attributes are the "what."
* In order to make a thematic map, feature and attribute data needs to be combined.
    * Without attribute data, feature data are just shapes! This would be OK for a reference map—which just shows location—but for a thematic map, something has to be happening *within* these shapes, so we can see patterns across space.  
* This process of combining feature and attribute is called a *join* 
* The key principle of a join is having a stable identifier that is shared by both the feature and its attribute. 
    * For example, in this sketch, the dotted line represents the stable identifier. Connective tissue between the shape and the statistic/attribute associated with the shape. This might take the form of a code—but it is never random!  
* Let's take a look at how a join works
* Here, we're looking at a table that has information about households with intenet access within certain census tracts in Boston.
* This is an attribute table because it holds attribute data. 
* Notice the 'geoID' column—this is the stable identifier that will link this numerical data about intenet access to the shape of each census tract. You can see how each census tract shap has an associated Geo_ID in the annotated map below. 
* The Geo_ID noticible because every entry, every row, is unique, but it is also clearly based on some specific code structure. It's unlikely that this column will be misinterpreted as attribute data, as a count or a percentage. 
    * Unique IDs are never simply numbers like 1, 2, 3—they're often alphanumeric codes. 
* It's often helpful think about joining as "filling" the shape (or feature) with attribute data.  
* Again, this comes back to the main theme of this class! Computers are stupid! They need us to tell them very specifically which attribute data is associated with which shape.
    * Not only do computers not know the shape of a certain census tract—remember, the shape is just a lot of points, each with its own x and y coordinates, connected together—but it also has to be told very specifically that this shape has a certain attribute or quality. 

**Break for questions**  

## Exercise: geojson.io (0:37)

* We're going to take a little time in breakout rooms to create our own geospatial data using geoJSON.io! 
* We're going to draw some shapes, and then assign these shapes some attribute data. 

**breakout rooms** 

* *teachers will screenshare and do a quick demo of the platform*

## Decoding data types (0:40)

* So, we wanted to provide a quick overview of types of data you'll likely come across, and which you'll hear us reference throughout the rest of our time together. 
* Attribute data will most often come in a CSV file, or comma separated values file. This can be opened and edited in Excel, or Google Sheets. 
* Spatial data—that is, vector and raster data—comes in forms that you often need special GIS software to view and edit. 
* The most common form is a Shapefile, which is a vector file; geoJSON is also a vector file, and that's what we were just playing around with in geoJSON.io. GeoTIFF is the most common raster file type. 
    * If you ever want to download a georeferenced map from the Leventhal collection, you'll be downloading a GeoTIFF! 
* If you're interested in reading more about georeferencing, there's a section at the bottom of this page that you can come back to later! 

**Break for questions**

## Introducing the Public Data Portal (0:45)

* The LMEC Public Data Portal is a great place to find spatial data. 
* The portal houses a collection of datasets that have been reviewed by GIS librarians
* The librarians have often included robust information *about* the datasets, like where it came from, how its changed over time, who has changed it. 
* This information is called *metadata* and we'll spend all of next session talking about metadata. 
* The data portal is designed to be simple to use—unlike a lot of other data download portals! 
* You have an option to explore some specific collections according to a theme, but if you know what you're looking for, you can go ahead and simply search for a keyword. 
* Next time, we'll be working with the internet access data, so these screenshots show how to search and download that dataset. 
* We wanted to highlight just one thing before we close tonight's session, which is the Data Geneology section, because it shows information related to our topic tonight: joins! 
* If you read through the steps, you'll see that step 5 describes a join process! 
    * Can anyone take a guess, based on the file names, which of the source datasets is the attribute table and which is the feature data? 

## Concluding thoughts (0:55)

* We saw today how projections produce one form of distortion... 
* But distortion begins much earlier than that, often in the data collection process itself. Next week we'll talk about this in the context of metadata
* Because there are humans at every step of the way in the data collection and mapping process, human bias creeps in!! 
* Bias can distort the maps that are produced...
* Briefly, there are a few common ways to describe distortion caused by human bias in data collection: 
* Response bias describes the general tendency for people not to respond accurately or truthfully on surveys
* Too small a sample size might overmagnify the phenomena that's being recorded
* Leading questions in surveys can push people toward responding in a ceratin way.
* Sometimes, we don't even know the questions to ask! We'll talk more about this concept of "missing data" next time.  

