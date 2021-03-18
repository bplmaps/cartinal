# Coordinates and projections

## How do we match feature data to the earth?

* In the last slide, we noted that vector data is like a game of connect the dots
* But how do we tell a computer where the dots are?
* Each dot is a *coordinate* in space, with `x` and `y` positions (and sometimes `z` if we're including elevation)
* There are thousands of different **coordinate reference systems** that are used to match points to the earth's surface

<aside>

If you go to Google Maps and right click anywhere on the map, the first entry in the menu will be the WGS 84 coordinates of the place you just clicked.

</aside>

  * The most common is known as **WGS 84**, and it uses latitude and longitude.
    * In **WGS 84**, the coordinate `(0, 0)` is at the intersection of the Equator and the Prime Meridian in the Gulf of Guinea
    * The front door of the Boston Public Library is `(42.34953, -71.0775)`. The first number is positive because we're north of the Equator, and the second is negative because we're west of the Prime Meridian
* There are many other coordinate systems that are used for different purposes

::: tip

Confusing coordinate systems are one of the number one reasons why you might encounter problems with data! While many modern data sets are standardizing on WGS 84 coordinates, you'll want to figure out what coordinate system your data is in when you access it.

:::

## Map projections


<aside>


Can you think of how ways in which projections relate to power and representation? Why might certain countries or people prefer one projection to another? 

</aside>

* If we ask the computer to graph the coordinates directly onto the screen, that's called an **unprojected** presentation
*  However, oftentimes we'll want to choose a **projection** which transforms the source coordinates into rendered coordinates on the screen or page
*  At smaller scales, like a single neighborhood, the projection doesn't make a huge difference, because there's not a lot of curvature in a small space
*  But at the global scale, a projection makes a *huge* difference in what we see, because the projection controls how the round earth is made flat

### Example: Goode Homolosine projection

![reference link](https://upload.wikimedia.org/wikipedia/commons/f/f2/Goode_homolosine_projection_SW.jpg)

### Example: Mercator projection


![reference link](https://upload.wikimedia.org/wikipedia/commons/7/73/Mercator_projection_Square.JPG)

<hideable>

Another key cartographic ingredient to get to know is the world of **projections**. When we take Earth, a spherical object, and represent it on a flat piece of paper, we have to distort its proportions. Different projections distort the Earth in different ways. The process can intentionally or unintentionally perpetuate pre-existing power structures and even construct new ones.

Many times we think about projections of the entire globe. A classic [controversy](https://www.theguardian.com/education/2017/mar/19/boston-public-schools-world-map-mercator-peters-projection) has to do with the Mercator projection, which is notorious for distorting the relative sizes of various land masses and making North America and Europe look proportionally much larger than they are. This distortion can perpetuate colonialist ideas of superiority. One of the most interesting aspects of this is that the original intention was that the map be used for navigation, yet it is now commonly used in schools and even on Google Maps. 

<aside> 

New digital applications like [The True Size Of...](https://thetruesize.com) show how much the Mercator projection distorts the size of landmasses. 

</aside>

The story of the Mercator projection demonstrates that unintended consequences abound in the world of cartography, and understanding the origins of maps can help avoid disaster later on. 

A common replacement many are turning to is the Galls-Peter projection, which does display relative size more accurately. There are also many more projections to check out, some of which are mentioned [here](https://www.visualcapitalist.com/problem-with-our-maps/). Every projection, though, comes with tradeoffs, which is why different projections are useful in different contexts.

Projections don't just have to do with how we look at the globe as a whole. Projections can be developed to look at a specific city with more accuracy than zooming in from a global projection would provide. GIS software allows you to choose what projection to use for your project. 

</hideable>

<Quizlet
	title="Check yourself"
	:questions="
	[{
		text: 'How many different numbers are necessary, at a minimum, to define a coordinate?',
		answers: [
		{text: '1'},
		{text: '2', correct: true},
		{text: '3'}
		]
	},
		{
		text: 'Which of these two maps will be more distorted depending on which projection system is chosen?',
		answers: [
		{text: 'A map of Copley Square'},
		{text: 'A map of North America', correct: true}
		]
		}]
	"
/>

