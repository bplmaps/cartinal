---
---

<br>

[← Back to Schema Home](./)

# dataEndpoints

<template>
    <div v-if="this.dataEndpoints" id = "container">
      <p class="larger-text">{{this.dataEndpoints.description}}</p>
      <p >Expected Type: <strong>{{this.dataEndpoints.type}}</strong></p>
    <table v-if="this.dataEndpoints.items" id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.dataEndpoints.items[0].properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.dataEndpoints.required)}}</td>
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
	"dataEndpoints": [{
		"$id": "ark:/76611/dkgskarjx/endpoint/1",
		"relatedResourceURL": "http://download.massgis.digital.mass.gov/shapefiles/state/townssurvey_shp.zip",
		"format": "Shapefile",
		"source": "MassGIS",
		"accessedViaURL": "https://docs.digital.mass.gov/dataset/massgis-data-layers"
	}]
```