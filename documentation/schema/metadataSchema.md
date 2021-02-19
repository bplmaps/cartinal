---
---

<br>

[← Back to Schema Home](./)

# metadataSchema

<template>
    <div v-if="this.peopleLifecycle.description" id = "container">
      <p class="larger-text">{{this.peopleLifecycle.description.properties.metadataSchema.description}}</p>
      <p >Expected Type: <strong>{{this.peopleLifecycle.description.properties.metadataSchema.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Constant Value</th>
        </tr>
        <tr v-for="item, index in this.peopleLifecycle.description.properties.metadataSchema.properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
            <td>{{item.const}}</td>
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

## Example use

``` json
"metadataSchema": {
    "schemaName": "LMEC Data Description Schema",
    "$id": "https://github.com/bplmaps/data-description-schema/blob/master/schema.json"
}
```