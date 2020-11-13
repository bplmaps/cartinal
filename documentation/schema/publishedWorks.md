---

---

<br>

[← Back to resourceConstellation](./resourceConstellation.html)

# publishedWorks

<template>
   <table v-if="this.resourceConstellation.publishedWorks" id ="property-table">
     <p class="larger-text">{{this.resourceConstellation.publishedWorks.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.resourceConstellation.publishedWorks.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>string</td>
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

## Examples

``` json
"publishedWorks": [{
	"$id": "https://www.nationalgeographic.com/news/2017/06/Boston-landfill-maps-history/#close",
	"title": "All Over the Map: How Boston Made Itself Bigger",
	"author": "Betsy Mason",
	"publisher": "National Geographic",
	"datePublished": "2017-06-13"
}]
```