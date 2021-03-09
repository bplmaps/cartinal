---

---

<br>

[← Back to resources](./resources.html)

# tutorials

<template>
   <table v-if="this.schema.resources" id ="property-table">
     <p class="larger-text">{{this.schema.resources.properties.tutorials.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.schema.resources.properties.tutorials.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.resources.properties.tutorials.items[0].required)}}</td>
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
          console.log(this.schema.resources.properties.tutorials)
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