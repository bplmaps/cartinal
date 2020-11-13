---
---

<br>

[← Back to process](./process.html) 

# shortProcessDescription

<template>
    <div v-if="this.dataLifecycle.manipulation" id = "container">
      <p class="larger-text">{{this.dataLifecycle.manipulation.properties.process.properties.shortProcessDescription.description}}</p>
      <p >Expected Type: <strong>{{this.dataLifecycle.manipulation.properties.process.properties.shortProcessDescription.type}}</strong></p>
    </div>
</template>

<script>
import axios from 'axios'


export default {

    data() {
        return {
          schema: [],
          coreCitation: [],
          dataEndpoints: [],
          subjectTagging: [],
          dataBiography: [],
          resourceConstellation: [],
          dataLifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.coreCitation)
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        }
    },
    created() {
        //returns a promise
        axios.get("https://raw.githubusercontent.com/nblmc/Data-Context/master/schema.json")
            .then(response => {
                this.schema = response.data.properties
                this.coreCitation = response.data.properties.coreCitation.properties
                this.dataEndpoints = response.data.properties.dataEndpoints
                this.subjectTagging = response.data.properties.subjectTagging.properties
                this.dataBiography = response.data.properties.dataBiography.properties
                this.resourceConstellation = response.data.properties.resourceConstellation.properties
                this.dataLifecycle = response.data.properties.dataLifecycle.properties
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>

<style lang="stylus">

table#property-table
  width:100%

p.larger-text
  font-size 120%

</style>

## Example 

``` json
"shortProcessDescription": "The LMEC has manipulated the original MassGIS towns file to create the data described by this record. This process was aimed to address the issue that the original MassGIS Towns Boundary file, which contains the most accurate geographies for municipal cities and towns in Massachusetts, does not contain census name or ID fields, which would facilitate the ability to join the official town data with other statistical information published by the census. Data is published by the census at the town level, but the census town geographies are generally less reliable than the frequently updated MassGIS boundaries. The goal was to create a new file that contains MassGIS geographies, but includes census attributes for each town. This processing uses Python and Python modules Geopandas and Difflib to perform a fuzzy string match between town names in both the official MassGIS towns data and the census towns data for Massachusetts. After performing the string match, the two files are joined, with the MassGIS data absorbing some of the census attributes, including census name and ID. The data is cleaned a bit, with extraneous cluttering field names removed. Resulting is a useful MassGIS town boundary file with census attributes. The full process can be followed along in the included Jupyter notebook tutorial."
```