---
---

<br>

[← Back to geographic](./geographic.html)

# EPSG

<template>
    <div v-if="this.subjectTagging.geographic" id = "container">
      <p class="larger-text">{{this.subjectTagging.geographic.properties.EPSG.description}}</p>
      <p >Expected Type: <strong>{{this.subjectTagging.geographic.properties.EPSG.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Constant Value</th>
        </tr>
        <tr v-for="item, index in this.subjectTagging.geographic.properties.EPSG.items[0].properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.subjectTagging.properties.geographic.properties.EPSG.items[0].required)}}</td>
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
          console.log(this.schema.subjectTagging.properties.geographic)
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
"EPSG": [{
	"authority": "EPSG",
	"authorityID": "http://opengis.net/def/crs/EPSG/0/4326",
	"epsgTag": "EPSG:4326"
}]
```