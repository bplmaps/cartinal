---
---

<br>

[← Back to citation](./citation.html) 

# previewDescription

<template>
    <div v-if="this.citation.previewDescription" id = "container">
      <p class="larger-text">{{this.citation.previewDescription.description}}</p>
      <p >Expected Type: <strong>{{this.citation.previewDescription.type}}</strong></p>
    </div>
</template>

<script>
import axios from 'axios'


export default {

    data() {
        return {
          schema: [],
          citation: [],
          dataEndpoints: [],
          subjectTagging: [],
          dataBiography: [],
          resourceConstellation: [],
          dataLifecycle: [],
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
        axios.get("https://raw.githubusercontent.com/nblmc/Data-Context/master/schema.json")
            .then(response => {
                this.schema = response.data.properties
                this.citation = response.data.properties.citation.properties
                this.dataEndpoints = response.data.properties.dataEndpoints
                this.subjectTagging = response.data.properties.subjectTagging.properties
                this.dataBiography = response.data.properties.dataBiography.properties
                this.resourceConstellation = response.data.properties.resourceConstellation.properties
                this.dataLifecycle = response.data.properties.dataLifecycle.properties
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

## Example 

``` json
"previewDescription": "Depicts Boston's historic shoreline from the year 1916."
```