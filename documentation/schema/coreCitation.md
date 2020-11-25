---
sidebar: auto
---

<br>

[← Back to Schema Home](./)

# coreCitation

## Schema

<template>
  <table v-if="this.schema.coreCitation" id ="property-table">
    <p class="larger-text">{{this.schema.coreCitation.description}}</p>
    <tr>
      <th>Property</th>
      <th>Expected Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
    <tr v-for="item, index in this.schema.coreCitation.properties" :key="index">
      <td><a :href="index + '.html'" >{{index}}</a></td>
      <td>{{item.type}}</td>
      <td id="required">{{checkRequired(index, schema.coreCitation.required)}}</td>
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
      console.log(this.schema.coreCitation.required)
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

## Examples

### Dataset Example

```json
"coreCitation": {
	"$id": "ark:/76611/dkgsk7g8m",
	"title": "Simplified Massachusetts Town Boundaries",
	"recordType": "Dataset",
	"hostedBy": "Internal",
	"shortDataDescription": "LMEC-recommended dataset for representing Massachusetts town features.",
	"shortGenealogyDescription": "The data described by this record was inferred from the official MassGIS-maintained town boundary data, and simplified in order to facilitate easier use with census products.",
	"includesDataTypes": ["MultiPolygon"],
	"bboxPreview": {
		"previewSRS": "EPSG:4326",
		"lowerCorner": [-73.508210, 41.239062],
		"upperCorner": [-69.928093, 42.886778]
	},
	"accessCondition": "This item is in the public domain. There are no restrictions on use."
}
```

### Collection Example
``` json
"coreCitation": {
	"$id": "ark:/76611/dkgsjlciz",
	"title": "Historic Boston Shoreline",
	"recordType": "Collection",
	"hostedBy": "Internal",
	"shortDataDescription": "Collection of data files depicting Boston's historic shoreline across various years.",
	"shortGenealogyDescription": "These files were created by manually 'digitizing' or  creating vector features from a collectin of born-digital maps held by the Leventhal Map and Education Center. This collection can be accessed here: https://collections.leventhalmap.org/search?utf8=%E2%9C%93&q=mapworks . As the original data used to create these maps was not preserved, the geospatial vector data was re-created in 2019, and this collection refers to the data created by that process.",
	"accessCondition": "This collection is in the public domain. There are no restrictions on use.",
	"collectionItems": ["ark:/76611/dkhgt7w5x", "ark:/76611/dkhgt8ebr", "ark:/76611/dkhgt8vf7", "ark:/76611/dkhgt9azf", "ark:/76611/dkgsjly1z", "ark:/76611/dkhgt9v8a", "ark:/76611/dkhgtbi20", "ark:/76611/dkhgtbvan"]
}
```