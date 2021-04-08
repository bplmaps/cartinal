---

---

<br>

[← Back to Schema Home](./)

# documentation

<template>
   <table v-if="this.resources.documentation" id ="property-table">
     <p class="larger-text">{{this.resources.documentation.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.resources.documentation.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.resources.properties.documentation.items[0].required)}}</td>
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
          console.log(this.schema.resources.properties.documentation.items[0].required)
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

## Example use

```json
  "documentation": [{
    "$id": "https://nhgis.org/sites/www.nhgis.org/files/tract-availability.pdf",
    "title": "Census Tract Boundary File Availability Chart by U.S. County",
    "maintainedBy": "National Historic GIS (NHGIS)"
  }
```