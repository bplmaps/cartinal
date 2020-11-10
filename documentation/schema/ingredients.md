---
sidebar: auto
---

<br>

[← Back to acquisition](./acquisition.html)

# ingredients

## Definition

<template>
   <table v-if="this.dataLifecycle.acquisition" id ="property-table">
     <p class="larger-text">{{this.dataLifecycle.acquisition.properties.ingredients.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.dataLifecycle.acquisition.properties.ingredients.items[0].properties" :key="index">
    <td>{{index}}</td>
    <td>{{item.type}}</td>
    <td>{{item.description}}</td>
  </tr>
</table> 
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
          dataLifecycle: []
        }
    },
    methods: {
        whatsUp(){
          console.log(this.subjectTagging)
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

## Examples

### Linear 

``` json
"ingredients": [{
	"$id": "ark:/76611/dkgskarjx",
	"type": "linearPredecessor",
	"notes": "This data directly improves upon the MassGIS Data: Community Boundaries (Towns) from Survey Points"
}]
```

### Composite 
```json
"ingredients": [{
		"$id": "ark:/76611/dkgsjlciz",
		"type": "compositeIngredient",
		"notes": "The statistical demographic data present in the dataset being described was inferred from this source ingredient, extracted from NHGIS.org."
	},
	{
		"$id": "ark:/76611/dkgsjly1z",
		"type": "compositeIngredient",
		"notes": "During processing, statistical demographic data was joined to this ingredient, United States Census Tract Geographies, obtained from NHGIS.org."
	},
	{
		"$id": "ark:/76611/dkgsk7g8m",
		"type": "compositeIngredient",
		"notes": "This cartography ingredient was used to clip the joined population statistics and census tract files to create the new dataset this record describes, which represents population data only for the geographic extent of Boston, Massachusetts."
	}
]
```