---
---

<br>

[← Back to thematic](./thematic.html)

# LCSH

<template>
    <div id = "container">
      <p class="larger-text">{{this.subjectTagging.thematic.properties.LCSH.description}}</p>
      <p >Expected Type: <strong>{{this.subjectTagging.thematic.properties.LCSH.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Constant Value</th>
        </tr>
        <tr v-for="item, index in this.subjectTagging.thematic.properties.LCSH.items[0].properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
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
"LCSH": [{
		"authority": "LCSH",
		"authorityID": "http://id.loc.gov/authorities/subjects.html",
		"language": "eng",
		"subjectTag": "Cities and towns"
	},
	{
		"authority": "LCSH",
		"authorityID": "http://id.loc.gov/authorities/subjects.html",
		"language": "eng",
		"subjectTag": "Towns"
	},
	{
		"authority": "LCSH",
		"authorityID": "http://id.loc.gov/authorities/subjects.html",
		"language": "eng",
		"subjectTag": "Municipalities"
	},
	{
		"authority": "LCSH",
		"authorityID": "http://id.loc.gov/authorities/subjects.html",
		"language": "eng",
		"subjectTag": "Cartography"
	}
]
```