---
sidebar: auto
---

<br>

[← Back to acquisition](./acquisition.html)

# ingredients

## Definition

<template>
   <table v-if="this.peopleLifecycle.acquisition" id ="property-table">
     <p class="larger-text">{{this.peopleLifecycle.acquisition.properties.ingredients.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.peopleLifecycle.acquisition.properties.ingredients.items[0].properties" :key="index">
    <td>{{index}}</td>
    <td>{{item.type}}</td>
    <td></td>
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