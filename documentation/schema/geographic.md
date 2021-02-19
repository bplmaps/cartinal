---

---

<br>

[← Back to Schema Home](./)

# geographic

<template>
   <table v-if="this.filterTagging.geographic" id ="property-table">
     <p class="larger-text">{{this.filterTagging.geographic.items[0].description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
  </tr>
  <tr v-for="item, index in this.filterTagging.geographic.items[0].properties" :key="index">
    <td>{{index}}</td>
    <td>{{item.type}}</td>
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
          console.log(this.filterTagging)
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
"geographic":  [{
  "authorityName": "geonames",
  "authorityID": "http://www.geonames.org/ontology#",
  "valueID": "http://sws.geonames.org/4930956",
  "placeTag": "Boston"
},
{
  "authorityName": "geonames",
  "authorityID": "http://www.geonames.org/ontology#",
  "valueID": "http://sws.geonames.org/4932780",
  "placeTag": "Charles River"
},
{
  "authorityName": "geonames",
  "authorityID": "http://www.geonames.org/ontology#",
  "valueID": "http://sws.geonames.org/4931972",
  "placeTag": "Cambridge"
},
{
  "authorityName": "geonames",
  "authorityID": "http://www.geonames.org/ontology#",
  "valueID": "http://sws.geonames.org/4951257",
  "placeTag": "Somerville"
}]
```