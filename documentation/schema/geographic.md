---

---

<br>

[← Back to Schema Home](./)

# geographic

<template>
   <table v-if="this.tags.geographic" id ="property-table">
     <p class="larger-text">{{this.tags.geographic.items[0].description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
  </tr>
  <tr v-for="item, index in this.tags.geographic.items[0].properties" :key="index">
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
          core: [],
          access: [],
          tags: [],
          considerations: [],
          resources: [],
          lifecycle: []
        }
    },
    methods: {
        whatsUp(){
          console.log(this.tags)
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
                this.core = response.data.properties.core.properties
                this.access = response.data.properties.access
                this.tags = response.data.properties.tags.properties
                this.considerations = response.data.properties.considerations.properties
                this.resources = response.data.properties.resources.properties
                this.lifecycle = response.data.properties.lifecycle.properties
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