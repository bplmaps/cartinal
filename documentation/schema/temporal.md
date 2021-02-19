---

---

<br>

[← Back to Schema Home](./)

# temporal

<template>
   <table v-if="this.filterTagging.temporal" id ="property-table">
     <p class="larger-text">{{this.filterTagging.temporal.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.filterTagging.temporal.properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.filterTagging.properties.temporal.required)}}</td>
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
"temporal": {
  "temporalNotes": "This data represents the historic state of the Boston shoreline in the year 1995. It was digitally derived in 2019 from born-digital maps published in 1995.",
  "temporalRepresentation": {
    "valueType": "temporalRange",
    "encoding": "https://www.w3.org/TR/NOTE-datetime",
    "rangeStart": "1630",
    "rangeEnd": "1995"
  },
  "temporalPublication": {
    "valueType": "singularExpression",
    "encoding": "https://www.w3.org/TR/NOTE-datetime",
    "singleDate": "2019"
  }
}
```