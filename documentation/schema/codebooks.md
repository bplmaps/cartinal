---

---

<br>

[← Back to resourceConstellation](./resourceConstellation.html)

# codebooks

<template>
   <table v-if="this.resourceConstellation.codebooks" id ="property-table">
     <p class="larger-text">{{this.resourceConstellation.codebooks.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.resourceConstellation.codebooks.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
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

</style>

## Example

```json
"codebooks": [{
	"$id": "https://docs.digital.mass.gov/dataset/massgis-data-community-boundaries-towns-survey-points",
	"title": "MassGIS Data: Community Boundaries (Towns) from Survey Points",
	"maintainedBy": "MassGIS",
	"notes": "Variable name breakdowns are available via the official MassGIS documentation for this dataset."
}]
```