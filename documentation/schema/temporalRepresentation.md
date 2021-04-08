---
sidebar: auto
---

<br>

[← Back to Schema Home](./)

# temporalRepresentation

## Definition

<template>
   <table v-if="this.tags.temporal" id ="property-table">
     <p class="larger-text">{{this.tags.temporal.properties.temporalRepresentation.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.tags.temporal.properties.temporalRepresentation.properties" :key="index">
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
          core: [],
          access: [],
          tags: [],
          considerations: [],
          resources: [],
          lifecycle: []
        }
    },
    methods: {
        whatsUp(){
          console.log(this.tags)
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
                this.core = response.data.properties.core.properties
                this.access = response.data.properties.access
                this.tags = response.data.properties.tags.properties
                this.considerations = response.data.properties.considerations.properties
                this.resources = response.data.properties.resources.properties
                this.lifecycle = response.data.properties.lifecycle.properties
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

### Single Date

```json
"temporalRepresentation": {
	"encoding": "https://www.w3.org/TR/NOTE-datetime",
	"valueType": "singleDate",
	"singleDate": "2020"
}
```


### Range 
```json
"temporalRepresentation": {
  "valueType": "range",
  "encoding": "https://www.w3.org/TR/NOTE-datetime",
  "rangeStart": "1630",
  "rangeEnd": "1995"
}
```