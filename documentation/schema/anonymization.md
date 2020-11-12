---

---

<br>

[← Back to privacy](./privacy)

# anonymization

<template>
   <table v-if="this.dataBiography.sampling" id ="property-table">
     <p class="larger-text">{{this.dataBiography.privacy.properties.anonymization.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.dataBiography.privacy.properties.anonymization.items[0].properties" :key="index">
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
"anonymization": [{
		"notes": "Notes about the Census Bureau's activities geared towards confidentiality in preparing data products are available in the ACS Design and Methodology Preparation/Review of Data Products.",
		"resource": "https://www2.census.gov/programs-surveys/acs/methodology/design_and_methodology/acs_design_methodology_ch13_2014.pdf"
	},
	{
		"notes": "Post-processing steps performed on this data to ensure anonymization are described in the ACS Desgin and Methodology Preparation/Review of Data Products.",
		"resource": "https://www2.census.gov/programs-surveys/acs/methodology/design_and_methodology/acs_design_methodology_ch13_2014.pdf"
	}
]
```