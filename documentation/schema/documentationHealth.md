---
sidebar: none
---

<br>

[← Back to Schema Home](./)

# documentationHealth

<template>
   <table v-if="this.schema.documentationHealth" id ="property-table">
     <p class="larger-text">{{this.schema.documentationHealth.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.documentationHealth" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td></td>
    <td>{{item.description}}</td>
  </tr>
</table> 
</template>

## Example use

``` json
	"documentationHealth": {
		"representation":{
			"healthScore": 3,
			"healthEvaluation": "Official census documentation details how survey questions were first developed. It describes how ACS project designers first included stakeholders in that process. \n \n When it comes to future data collection and survey design, there is less information. The documentation does not address plans to include those the the data is most likely to affect."		
		},
		"publicTrust":{
			"healthScore": 3,
			"healthEvaluation": "Census documentation is clear about methods used for anonymizing and participant privacy. It discusses the challenges of grouping or [aggregating](http://wiki.gis.com/wiki/index.php/Aggregation) survey responses into homogenous areas. It acknowledges Census Bureau reasoning for why the survey is mandatory. It explains why the data is beneficial to society. \n \n The documentation does not address how the Census Bureau understands participant consent. It is not clear if all participants understand how their data will be used. "		
		},
		"systemicInjustice":{
			"healthScore": 0,
			"healthEvaluation": "The documentation does not reflect on the ways the data program is at risk for repeating past harms. It does not describe the ways in which U.S. census data collection has considered its relationship and contribution to systemic injustice."		
		},
		"origins": {
			"healthScore": 4,
			"healthEvaluation": "Official census documentation describes all technical methods used to produce the survey data. Census annual budgets are public and discoverable. \n \n There are not easy-to-find public materials explaining the budgeting process for everyday citizens."
		},
		"futureUse":{
			"healthScore": 3,
			"healthEvaluation": "Documentation is clear about potential positive impact from the data. Public materials also outline future funding dependent on this data program. \n \n There is not discoverable information about potential negative impact. The documentation could be more clear how someone should and should not use the data. There are not accessible guides about known limitations for any given set of census data."		
		}
	}
```

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
          console.log(this.schema.documentationHealth)
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


</style>