---
---

<br>

[← Back to Schema Home](./)

# dataTypes

<template>
    <div v-if="this.citation.dataTypes" id = "container">
      <p class="larger-text">{{this.citation.dataTypes.description}}</p>
      <p >Expected Type: <strong>{{this.citation.dataTypes.type}}</strong></p>
      <p >Options: <strong></strong></p>
      <ul v-for="item, index in this.citation.dataTypes.items.enum" :key="index">
      <li><strong>{{item}}</strong></li>
      </ul>
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
          console.log(this.citation)
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
"dataTypes": ["Line", "Point"]
```