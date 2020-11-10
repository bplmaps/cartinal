---
---

<br>

[← Back to description](./description.html)

# contextProvider

<template>
    <div v-if="this.dataLifecycle.description" id = "container">
      <p class="larger-text">{{this.dataLifecycle.description.properties.contextProvider.description}}</p>
      <p >Expected Type: <strong>{{this.dataLifecycle.description.properties.contextProvider.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.dataLifecycle.description.properties.contextProvider.properties" :key="index">
            <td><a :href="index + '.html'" >{{index}}</a></td>
            <td>{{item.type}}</td>
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
"contextProvider": {
	"name": "Belle Lipton",
	"relationshipToData": "Archivist"
}
```