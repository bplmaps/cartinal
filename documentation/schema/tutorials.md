---

---

<br>

[← Back to relatedResources](./relatedResources.html)

# tutorials

<template>
  <button @click="whatsUp">HI</button>
   <table v-if="this.schema.relatedResources" id ="property-table">
     <p class="larger-text">{{this.schema.relatedResources.properties.tutorials.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.schema.relatedResources.properties.tutorials.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.relatedResources.properties.tutorials.items[0].required)}}</td>
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
          console.log(this.schema.relatedResources.properties.tutorials)
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

## Examples

```json
"tutorials": [{
		"$id": "https://github.com/nblmc/massachusetts-municipal-boundaries",
		"title": "Creating a clean boundary file for Massachusetts municipalities",
		"maintainedBy": "LMEC",
		"notes": "Step-by-step tutorial to reproduce the processing performed to create this dataset."
	},
	{
		"$id": "https://geoservices.leventhalmap.org/cartinal/guides/jupyter-binder.html",
		"title": "Understanding Jupyter and Binder",
		"maintainedBy": "LMEC",
		"notes": "Guide with notes about why and how LMEC uses Jupyter and Binder as a tutorial environment."
	}
]
```