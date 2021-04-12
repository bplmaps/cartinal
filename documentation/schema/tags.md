---

---

<br>

[← Back to Schema Home](./)

# tags

<template>
   <table v-if="this.schema.tags" id ="property-table">
     <p class="larger-text">{{this.schema.tags.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.tags" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.tags.required)}}</td>
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
        console.log(this.schema.tags.properties)
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

``` json
	"tags": {
		"thematic": {
			"LCSH": [{
					"authorityName": "LCSH",
					"authorityID": "http://id.loc.gov/authorities/subjects.html",
					"subjectTag": "Cities and towns"
				},
				{
					"authorityName": "LCSH",
					"authorityID": "http://id.loc.gov/authorities/subjects.html",
					"subjectTag": "Towns"
				},
				{
					"authorityName": "LCSH",
					"authorityID": "http://id.loc.gov/authorities/subjects.html",
					"subjectTag": "Municipalities"
				},
				{
					"authorityName": "LCSH",
					"authorityID": "http://id.loc.gov/authorities/subjects.html",
					"subjectTag": "Cartography"
				}
			]
		},
		"geographic": [{
			"authorityName": "geonames",
			"authorityID": "http://www.geonames.org/ontology#",
			"valueID": "http://sws.geonames.org/6254926",
			"placeTag": "Massachusetts"
		}],
		"temporal": {
			"temporalNotes": "This data cartographically improves upon data derived from surveys published in atlases going back to the 1890s. The original surveys were conducted in the 1890s. The Atlas series was published in the early 1900s and has since been updated by the Survey Section of the Massachusetts Highway Department (now The Massachusetts Department of Transportation (MassDOT) - Highway Division) with changes as they are approved by the legislature.",
			"temporalRepresentation": {
				"encoding": "https://www.w3.org/TR/NOTE-datetime",
				"valueType": "singularExpression",
				"singleDate": "2020"
			},
			"temporalPublication": {
				"encoding": "https://www.w3.org/TR/NOTE-datetime",
				"valueType": "singularExpression",
				"singleDate": "2020-06-16"
			}
		}
	}
```