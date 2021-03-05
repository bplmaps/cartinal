---
health:
    underConstruction: true
---

# (1) Session 1: Reverse Engineering Maps

Welcome to the first session of the **Critical Introduction to Maps and Data**.

![1910 map of National Forests](https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:7h149z08g/17479,10403,5665,2672/,1200/0/default.jpg)

In this lesson, we'll begin piecing together the relationship between the visual device called "a map" and the much larger category of "data." We'll take a look at some already-existing maps and think about what kind of data was needed to create them. We'll investigate what kinds of simple data structures computers are able to understand and process. And we'll conclude by opening up critical questions that we should bring to bear on any map or data set.

## Key Questions

* What is the difference between "a map" and "data"? 
* How can we interpret what kind of data was needed to make a map?
* When you set out to make a map on a particular topic, what kinds of data will you need?
* What are the limitations of what kind of information a computer can work with?
* What are some reasons we should be careful about the ways that data is represented and encoded?

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
* Data encode human observations of the world in a way that is legible to computers. 

<aside>

Try running a [Google Image search](https://www.google.com/search?tbm=isch&source=hp&biw=1280&bih=1341&ei=4IklYLu4CZC1ggeL5ZaIAQ&q=data&oq=data&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6AggAOggIABCxAxCDAVC-BFieBmCAB2gAcAB4AIABeogB9wGSAQMyLjGYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ved=0ahUKEwi7qMLYzOLuAhWQmuAKHYuyBREQ4dUDCAY&uact=5) for the word "data."  What kinds of stereotypes do you find relating to this word looking at just the first page of results?

</aside>


<Quizlet 
    title="Check your understanding"
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
