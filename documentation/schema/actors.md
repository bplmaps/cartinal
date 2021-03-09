---
---

<br>

[← Back to processing](./processing.html)

# actors

<template>
    <div v-if="this.lifecycle.processing" id = "container">
      <p class="larger-text">{{this.lifecycle.processing.properties.actors.description}}</p>
      <p >Expected Type: <strong>{{this.lifecycle.processing.properties.actors.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.lifecycle.processing.properties.actors.items[0].properties" :key="index">
            <td><a :href="index + '.html'" >{{index}}</a></td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.lifecycle.properties.processing.properties.actors.items[0].required)}}</td>
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
          console.log(this.schema.lifecycle.properties.processing.properties.actors.items[0].required)
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
"actors": [{
	"name": "Garrett Dash Nelson",
	"notes": "The LMEC carried out this data process and also described the processing steps in a Jupyter notebook.",
	"missingProcessingInformation": "No information is missing about the data processing. This processing description is healthy."
}]
```