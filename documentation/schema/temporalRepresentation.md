---
sidebar: auto
---

<br>

[← Back to temporal](./temporal.html)

# temporalRepresentation

## Definition

<template>
   <table v-if="this.subjectTagging.temporal" id ="property-table">
     <p class="larger-text">{{this.subjectTagging.temporal.properties.temporalRepresentation.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.subjectTagging.temporal.properties.temporalRepresentation.properties" :key="index">
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
                this.citation = response.data.properties.citation.properties
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

### Singular Expression 

```json
"temporalRepresentation": {
	"encoding": "https://www.w3.org/TR/NOTE-datetime",
	"valueType": "singularExpression",
	"singleDate": "2020"
}
```


### Range 
```json
"temporalRepresentation": {
	"valueType": "temporalRange",
	"encoding": "https://www.w3.org/TR/NOTE-datetime",
	"rangeStart": "1630",
	"endRangeValue": "1995"
}
```