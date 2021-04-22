# In Class Exercise: Peering Into a Data Set

## Using metadata to understand what's inside

![Button to bring the dataset into geoJSON.io](./media/getdata.png)

* From the [Internet Access in Boston](https://data.leventhalmap.org/#/catalog/dkhm2yhrb) data set record, click on **Preview on GeoJSON.io**, which will open this raw data in the GeoJSON portal we used in Session 2.
* Some key points to note:
  * The left map showcases the spatial features of the dataset. Click on any polygon to learn more about a particular feature. The pop up window show information on how the shape is displayed and the attribute data for the given polygon.
  * The right hand map showcases the attribute data of the dataset.
    * **JSON tab**: A computer readable version of the dataset - essentially a long list of all the polygons that make up the entire dataset. Each polygon has its own information including attributes and geometric instructions for how to represent this shape in points.
    * **Table tab**: A more human friendly representation of the attribute data. Each row represents one polygon and each column represents one field. Click on a particular cell to see which feature it points to.



## Understanding attributes
* You'll notice that the GeoJSON file has **attributes** that might not make sense just by looking at their names. What do you think about ...
   * `TRACTCE`
   * `ALAND`
   * `NoInternet`
   * `PctInternt`
* Navigate back to the metadata page and see if you can find information that helps you understand what attributes are important and what they mean


<Quizlet
    title="Check yourself"    
    :questions="[
        {text: 'Which attribute in this data set do you think is most likely to be the unique identifier for joining?',
        answers: [
            {text: 'AFFGEOID', correct: true},
            {text: 'COUNTYFP'},
            {text: 'Households'},
            {text: 'PctNoInt'}
        ]},
        {text: 'What does the metadata tell you about how the PctNoInt attribute was created?',
        answers: [
            {text: 'The data creator asked individuals if they had internet at home'},
            {text: 'The data creator gathered information from internet service providers.'},
            {text: 'The data creator divided the Census estimated number of households without internet by the Census estimated total number of households.', correct: true}
        ]
        }
    ]"
></Quizlet>

