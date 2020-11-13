---
---

<br>

[← Back to records](./records.html) 

# format

<template>
    <div v-if="this.dataLifecycle.manipulation" id = "container">
      <p class="larger-text">{{this.dataLifecycle.manipulation.properties.records.description}}</p>
      <p >Expected Type: <strong>{{this.dataLifecycle.manipulation.properties.records.type}}</strong></p>
      <p >Options: <strong></strong></p>
      <ul v-for="item, index in this.dataLifecycle.manipulation.properties.records.items[0].properties.format.enum" :key="index">
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
          coreCitation: [],
          dataEndpoints: [],
          subjectTagging: [],
          dataBiography: [],
          resourceConstellation: [],
          dataLifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.coreCitation)
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
                this.coreCitation = response.data.properties.coreCitation.properties
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
"format": "Jupyter Notebook"
```