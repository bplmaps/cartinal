---
---

<br>

[← Back to Schema Home](./)

# metadataSchema

<template>
    <div v-if="this.lifecycle.description" id = "container">
      <p class="larger-text">{{this.lifecycle.description.properties.metadataSchema.description}}</p>
      <p >Expected Type: <strong>{{this.lifecycle.description.properties.metadataSchema.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Constant Value</th>
        </tr>
        <tr v-for="item, index in this.lifecycle.description.properties.metadataSchema.properties" :key="index">
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
          core: [],
          access: [],
          tags: [],
          considerations: [],
          resources: [],
          lifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.access)
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

## Example use

``` json
"metadataSchema": {
    "schemaName": "LMEC Data Description Schema",
    "$id": "https://github.com/bplmaps/data-description-schema/blob/master/schema.json"
}
```