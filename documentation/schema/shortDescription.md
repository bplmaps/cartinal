---
---

<br>

[← Back to Schema Home](./)

# shortDescription

<template>
    <div v-if="this.citation.shortDescription" id = "container">
      <p class="larger-text">{{this.citation.shortDescription.description}}</p>
      <p >Expected Type: <strong>{{this.citation.shortDescription.type}}</strong></p>
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
"shortDescription": "Estimated modes of transportation as a percent of total workers over the age of 16, aggregated to the census tract level; geography covers the City of Boston; time period covers 2014-2018 as a five year average"

```