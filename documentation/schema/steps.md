---

---

<br>

[← Back to Schema Home](./)

# steps

<template>
    <div id = "container" v-if="this.peopleLifecycle.processing">
      <p class="larger-text">{{this.peopleLifecycle.processing.properties.steps.description}}</p>
      <p >Expected Type: <strong>{{this.peopleLifecycle.processing.properties.steps.type}}</strong></p>
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

## Example Use

``` json
"steps": "\n \n 1. We downloaded statistics about median home value from a census data download tool \n 2. We also downloaded census tract GIS boundary files from the same tool \n 3. We edited the data tables to only include important information about the topic of study \n 4. We renamed columns with human-readable column headers \n 5. We documented the new names in a codebook \n 6. We combined the new data tables to the GIS boundary files using GIS software to create the final dataset"
```