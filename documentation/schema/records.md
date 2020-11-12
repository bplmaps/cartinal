---
---

<br>

[← Back to manipulation](./manipulation.html)

# records

<template>
    <div v-if="this.dataLifecycle.manipulation" id = "container">
      <p class="larger-text">{{this.dataLifecycle.manipulation.properties.records.description}}</p>
      <p >Expected Type: <strong>{{this.dataLifecycle.manipulation.properties.records.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.dataLifecycle.manipulation.properties.records.items[0].properties" :key="index">
            <td><a :href="index + '.html'" >{{index}}</a></td>
            <td>{{item.type}}</td>
            <td></td>
            <td>{{item.description}}</td>
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
          console.log(this.dataEndpoints)
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
"records": [{
	"relatedResourceURL": "https://github.com/nblmc/massachusetts-municipal-boundaries/blob/main/processor.ipynb",
	"format": "Jupyter Notebook",
	"author": "Garrett Dash Nelson"
}]
```