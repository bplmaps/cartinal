---

---

<br>

[← Back to dataCollection](./dataCollection)

# startDate

<template>
   <table v-if="this.dataBiography.dataCollection" id ="property-table">
     <p class="larger-text">{{this.dataBiography.dataCollection.properties.startDate.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.dataBiography.dataCollection.properties.startDate.items[0].properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
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

``` json
"startDate": [{
	"notes": "With full implementation beginning in 2005, population and housing profiles for 2005 first became available in the summer of 2006 and have been available every year thereafter for specific geographic areas with populations of 65,000 or more. Three-year period estimates, reflecting combined data from the 2005−2007 ACS, were available for the first time late in 2008 for specific areas with populations of 20,000 or more, and 5-year period estimates, reflecting combined data from the 2005−2009 ACS, became available late in 2010 for areas down to the smallest block groups, census tracts, and small local governments. Beginning in 2010, the nation had a 5-year period estimate, available as an alternative to the decennial census long-form sample, for nearly all geographic areas recognized by the Census Bureau, including census tracts and block groups.",
	"resource": "https://www2.census.gov/programs-surveys/acs/methodology/design_and_methodology/acs_design_methodology_ch02_2014.pdf"
}]
```