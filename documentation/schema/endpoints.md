---
---

<br>

[← Back to Schema Home](./)

# endpoints

<template>
    <div v-if="this.endpoints" id = "container">
      <p class="larger-text">{{this.endpoints.description}}</p>
      <p >Expected Type: <strong>{{this.endpoints.type}}</strong></p>
    <table v-if="this.endpoints.items" id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.endpoints.items[0].properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.endpoints.required)}}</td>
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
          citation: [],
          endpoints: [],
          filterTagging: [],
          documentationHealth: [],
          relatedResources: [],
          peopleLifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.endpoints)
        },
        checkRequired(evaluatedItem, requiredFieldsList){
            if (requiredFieldsList === undefined || requiredFieldsList.length == 0) {
                return ''
            } else {
            if (requiredFieldsList.includes(evaluatedItem)){
                return 'x'
            } else {
                return ''
            }
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
        axios.get("https://raw.githubusercontent.com/bplmaps/data-description-schema/master/schema.json")
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

td#required
  text-align center

</style>

## Example 

``` json
	"endpoints":[{
		"$id": "ark:/76611/dkgsk7g8m/endpoint/1",
		"accessURL": "https://s3.us-east-2.wasabisys.com/public-geospatial/dkgsk7g8m/mass-municipalities.geojson",
		"title": "Massachusetts Town Boundaries GeoJSON",		
		"source": "Leventhal Map & Education Center",
		"format": "GeoJSON"
	}]
```