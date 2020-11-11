---
---

<br>

[← Back to manipulation](./manipulation.html)

# actors

<template>
    <div v-if="this.dataLifecycle.manipulation" id = "container">
      <p class="larger-text">{{this.dataLifecycle.manipulation.properties.actors.description}}</p>
      <p >Expected Type: <strong>{{this.dataLifecycle.manipulation.properties.actors.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.dataLifecycle.manipulation.properties.actors.items[0].properties" :key="index">
            <td><a :href="index + '.html'" >{{index}}</a></td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.dataLifecycle.properties.manipulation.properties.actors.items[0].required)}}</td>
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
          console.log(this.schema.dataLifecycle.properties.manipulation.properties.actors.items[0].required)
        },
        checkRequired(evaluatedItem, requiredFieldsList){
            if (requiredFieldsList.includes(evaluatedItem)){
                return 'x'
            } else {
                return ''
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

td#required
  text-align center

</style>

## Example 

``` json
"actors": [{
	"name": "Garrett Dash Nelson",
	"notes": "The LMEC carried out this data process and also described the processing steps in a Jupyter notebook.",
	"missingProcessingInformation": "No information is missing about the data processing. This processing description is healthy."
}]
```