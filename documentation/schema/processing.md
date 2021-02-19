---

---

<br>

[← Back to Schema Home](./)

# processing

<template>
   <table v-if="this.peopleLifecycle.processing" id ="property-table">
     <p class="larger-text">{{this.peopleLifecycle.processing.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.peopleLifecycle.processing.properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.peopleLifecycle.properties.processing.required)}}</td>
    <td>{{item.description}}</td>
  </tr>
</table> 
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
          peopleLifecycle: []
        }
    },
    methods: {
        whatsUp(){
          console.log(this.schema.peopleLifecycle.properties.processing)
        },
        checkRequired(evaluatedItem, requiredFieldsList){
          if (requiredFieldsList === undefined || requiredFieldsList.length == 0) {
              return ''
          } else {
            if (requiredFieldsList.includes(evaluatedItem)){
                return 'x'
            } else {
                return ''
            }
          }
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

td#required
  text-align center

</style>

## Example use
``` json
"processing": {
  "steps": "\n \n 1. We downloaded statistics about internet subscription rates from a census data download tool \n 2. We also downloaded census tract GIS boundary files from the same tool \n 3. We edited the data tables to only include important information about the topic of study \n 4. We renamed columns with human-readable column headers \n 5. We documented the new names in a codebook \n 6. We combined the new data tables to the GIS boundary files using GIS software to create the final dataset",
  "choices": [{
    "title": "Data Cleaning and Cartography Choices",
    "author": "Daniel Huffman",
    "format": "Plain-text README",
    "relatedResourceURL": "https://s3.us-east-2.wasabisys.com/public-geospatial/dkhm2yhrb/README/README.txt"
  }]
}
```