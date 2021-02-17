---
---

<br>

[← Back to processing](./processing.html)

# process

<template>
    <div v-if="this.peopleLifecycle.processing" id = "container">
      <p class="larger-text">{{this.peopleLifecycle.processing.properties.process.description}}</p>
      <p >Expected Type: <strong>{{this.peopleLifecycle.processing.properties.process.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.peopleLifecycle.processing.properties.process.properties" :key="index">
            <td><a :href="index + '.html'" >{{index}}</a></td>
            <td>{{item.type}}</td>
            <td></td>
            <td>{{item.description}}</td>
        </tr>
    </table> 
    </div>
</template>

<script>
import axios from 'axios'


export default {

    data() {
        return {
          schema: [],
          citation: [],
          endpoints: [],
          filterTagging: [],
          documentationHealth: [],
          relatedResources: [],
          peopleLifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.endpoints)
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        }
    },
    created() {
        //returns a promise
        axios.get("https://raw.githubusercontent.com/bplmaps/data-description-schema/master/schema.json")
            .then(response => {
                this.schema = response.data.properties
                this.citation = response.data.properties.citation.properties
                this.endpoints = response.data.properties.endpoints
                this.filterTagging = response.data.properties.filterTagging.properties
                this.documentationHealth = response.data.properties.documentationHealth.properties
                this.relatedResources = response.data.properties.relatedResources.properties
                this.peopleLifecycle = response.data.properties.peopleLifecycle.properties
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
"process": {
	"shortDescription": "The LMEC has manipulated the original MassGIS towns file to create the data described by this record. This process was aimed to address the issue that the original MassGIS Towns Boundary file, which contains the most accurate geographies for municipal cities and towns in Massachusetts, does not contain census name or ID fields, which would facilitate the ability to join the official town data with other statistical information published by the census. Data is published by the census at the town level, but the census town geographies are generally less reliable than the frequently updated MassGIS boundaries. The goal was to create a new file that contains MassGIS geographies, but includes census attributes for each town. This processing uses Python and Python modules Geopandas and Difflib to perform a fuzzy string match between town names in both the official MassGIS towns data and the census towns data for Massachusetts. After performing the string match, the two files are joined, with the MassGIS data absorbing some of the census attributes, including census name and ID. The data is cleaned a bit, with extraneous cluttering field names removed. Resulting is a useful MassGIS town boundary file with census attributes. The full process can be followed along in the included Jupyter notebook tutorial.",
	"successes": "This processing improves the source data by making it compatible with census statistical information.",
	"challenges": "Challenges and technical hangups, which are mostly related to the idiosyncratic way towns are named across the two datasets, are described in full detail in the Jupyter tutorial."
}
```