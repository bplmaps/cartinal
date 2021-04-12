---
---

<br>

[← Back to geographic](./geographic.html)

# geonames

<template>
    <div v-if="this.tags.geographic" id = "container">
      <p class="larger-text">{{this.tags.geographic.properties.geonames.description}}</p>
      <p >Expected Type: <strong>{{this.tags.geographic.properties.geonames.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Constant Value</th>
        </tr>
        <tr v-for="item, index in this.tags.geographic.properties.geonames.items[0].properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.tags.properties.geographic.properties.geonames.items[0].required)}}</td>
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

td#required
  text-align center

</style>

## Example 

``` json
"geonames": [{
	"authority": "geonames",
	"authorityID": "http://www.geonames.org/ontology#",
	"language": "eng",
	"valueID": "http://sws.geonames.org/6254926",
	"placeTag": "Massachusetts"
}]
```