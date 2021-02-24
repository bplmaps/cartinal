---
health:
    underConstruction: true
---

# What is a map? What is data?

## How maps and data are different

* Like most people, you might find that the terms "maps" and "data" blend together in your head
* Do you think ...
    * Is a map data?
    * Does a map *show* data?
    * Is a map *made up of* data?
    * Are *all* maps related to data, or are data maps a particular type of map?
* A metaphor from language
    * Data sets are the "words" which, in isolation, don't mean very much
    * A mapmaker uses a "grammar" to make data communicable
* Breaking down a map into its components allows us to understand what's going on
* It also gives us a framework for thinking about how to "speak" in this language yourself

<Hideable title="More reading on your own time">

A good way to think about it is this: When someone is working on their written literacy skills, they usually practice both reading *and* writing to become a more skilled communicator. We believe  visual means of communication (like maps) are exactly the same — in order to best "read" maps, you should also be able to understand a little about the craft by which they are constructed. Today, this almost always involves the use of geospatial data. You can think about data, with all of its formats, rules and structure, like the underlying grammar beneath maps.

</Hideable>


## Data are observations about the world

* You might have a strong association between the word "data" and "numbers in a computer"
* Data is really a more general term about _information_
    * Medieval European maps, for example, were made up of "data" that were gathered from sources of evidence like the passages of the Bible

<aside>

Can you think of a type of geographic data that you create and use in your everyday life? Think about observations about space and place that you are making all the time.

</aside>

* Consider an ordinary web map that you might use to get to the nearest coffee shop
    * It would include data about ...
    * Where coffee shops are located
    * What those coffee shops are called and when they're open
    * Where you are located
    * How you're planning to get around (walk, bike, transit, drive)
    * How roads and paths are connected in space
    * What the roads are named
    * And more!

<Hideable title="More reading on your own time" >

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

Geographer Dennis Cosgove has described maps as an “instrument,” like the microscope or telescope, that “allows us to see at scales impossible for the naked eye to see and without moving the physical body over space.” But, then, would an aerial image count as a map? What about a [hand drawing of your neighborhood](https://www.bloomberg.com/features/2020-coronavirus-lockdown-neighborhood-maps/)? Is a diagram of the body’s circulatory system a map? With such a broad definition, many things can qualify as maps. 

We would all agree that an atlas is a book of maps, that the folded paper map in your car's glove compartment is a map, and that Google Maps is a map. These maps are called **reference maps**: they describe physical qualities of space and the location of physical things, like coastlines, roads, rivers, cities, mountain ranges, and coffee shops. On the other hand, there are **thematic maps**, which show the spatial aspect of a specific theme. There are many different themes that maps can show, like household income, annual rainfall, population density, or air quality. In this course, we focus on the creation of thematic maps because they show us how to work with *both spatial and non-spatial data*. Denis Cosgrove’s image of a microscope or telescope applies here, too: thematic maps “reveal the presence of phenomena that are beyond our normal bodily senses.” We cannot see the themes that are depicted in thematic maps without those themes being visualized.

Making a map is a long process of abstraction, translation, and communication. We will soon learn that part of the abstraction begins much earlier than that: in the collection and creation of data. 

</Hideable>

## In between data and a map are people

<aside>

Try running a [Google Image search](https://www.google.com/search?tbm=isch&source=hp&biw=1280&bih=1341&ei=4IklYLu4CZC1ggeL5ZaIAQ&q=data&oq=data&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6AggAOggIABCxAxCDAVC-BFieBmCAB2gAcAB4AIABeogB9wGSAQMyLjGYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ved=0ahUKEwi7qMLYzOLuAhWQmuAKHYuyBREQ4dUDCAY&uact=5) for the word "data."  What kinds of stereotypes do you find relating to this word looking at just the first page of results?

</aside>

* Data can *never* become a map all by itself
* For even the simplest data set, there are hundreds of different methods and techniques for possible visual representation
* The relationship betwen "data" and "map" is never one-to-one


<Quizlet 
    title="Check yourself"
    :questions="[
        {text: 'A given map is produced from exactly one data set.',
        answers: [
            {text: 'True'},
            {text: 'False', correct: true}
        ]},

        {text: 'Only specific types of data can be read by computers.',
        answers: [
            {text: 'True', correct: true},
            {text: 'False'}
        ]
        }
    ]"
/>





