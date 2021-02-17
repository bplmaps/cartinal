---
sidebar: auto
---

<br>

[← Back to Schema Home](./)


# citation

## Schema

<template>
  <table v-if="this.schema.citation" id ="property-table">
    <p class="larger-text">{{this.schema.citation.description}}</p>
    <tr>
      <th>Property</th>
      <th>Expected Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
    <tr v-for="item, index in this.schema.citation.properties" :key="index">
      <td><a :href="index + '.html'" >{{index}}</a></td>
      <td>{{item.type}}</td>
      <td id="required">{{checkRequired(index, schema.citation.required)}}</td>
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
      console.log(this.schema.citation.required)
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


```json
	"citation": {
		"$id": "ark:/76611/dkgsk7g8m",
		"title": "LMEC Massachusetts Town Boundaries",
		"recordType": "Dataset",
		"shortDescription": "Standardized boundary file showing city and town extents, updated to include a census join field; geography covers the state of Massachusetts; time period reflects the present",
		"fullDescription": "This dataset represents town boundaries in the state of Massachusetts. The geographic coverage is the state of Massachusetts. The time coverage reflects the present day. This dataset originates from data created and published by MassGIS. The LMEC has standardized MassGIS's town boundaries to ensure compatibility with census products. ",
		"keyAttributes": ["MassGIS Town Name", "MassGIS Town ID", "Census Town Name", "Census Town ID"],
		"dataTypes": ["MultiPolygon"],
		"bboxPreview": {
			"previewSRS": "EPSG:4326",
			"lowerCorner": [-73.508210, 41.239062],
			"upperCorner": [-69.928093, 42.886778]
		},
		"accessCondition": "This item is in the public domain. There are no restrictions on use."
	}
```
