---
---

<br>

[← Back to Schema Home](./)

# fullDescription

<template>
    <div v-if="this.citation.fullDescription" id = "container">
      <p class="larger-text">{{this.citation.fullDescription.description}}</p>
      <p >Expected Type: <strong>{{this.citation.fullDescription.type}}</strong></p>
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
"fullDescription": "This dataset represents modes of transportation as a percent of total workers over the age of 16. The data originates from the United States Census Bureau's American Community Survey. The Census Bureau has aggregated individual survey responses to census tract geographies. The LMEC worked with cartographer Daniel Huffman to process the census data. We created a new dataset from the census data to study popular modes of transportation in Boston. The geography covers the City of Boston. The time coverage compares changes between 2006-2010 and 2014-2018, each as five-year averages. "

```