---

---

<br>

[← Back to resourceConstellation](./resourceConstellation.html)

# tutorials

<template>
   <table v-if="this.resourceConstellation.tutorials" id ="property-table">
     <p class="larger-text">{{this.resourceConstellation.tutorials.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.resourceConstellation.tutorials.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>string</td>
    <td id="required">{{checkRequired(index, schema.resourceConstellation.properties.tutorials.items[0].required)}}</td>
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
          console.log(this.subjectTagging)
        },
        checkRequired(evaluatedItem, requiredFieldsList){
            if (requiredFieldsList.includes(evaluatedItem)){
                return 'x'
            } else {
                return ''
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