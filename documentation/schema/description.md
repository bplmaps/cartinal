---

---

<br>

[← Back to Schema Home](./)

# description

<template>
   <table v-if="this.peopleLifecycle.description" id ="property-table">
     <p class="larger-text">{{this.peopleLifecycle.description.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.peopleLifecycle.description.properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.peopleLifecycle.properties.description.required)}}</td>
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
"description": {
  "contextProvider": {
    "name": "Belle Lipton",
    "relationshipToData": "Archivist"
  },
  "contextOnBehalfOf": {
    "name": "Daniel Huffman",
    "relationshipToData": "Cartographer"
  },
  "contextPublicationDate": "2020-11-24",
  "metadataSchema": {
    "schemaName": "LMEC Data Description Schema",
    "$id": "https://github.com/bplmaps/data-description-schema/blob/master/schema.json"
  }
}
```