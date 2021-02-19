---
sidebar: auto
---

<br>

[← Back to Schema Home](./)

# peopleLifecycle

## Schema 

<template>
   <table v-if="this.schema.peopleLifecycle" id ="property-table">
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.peopleLifecycle" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.peopleLifecycle.required)}}</td>
    <td>{{item.description}}</td>
  </tr>
</table> 
</template>

<div id = "aside">

## Meet 'People Lifecycle' 👋

The schema designation `peopleLifecycle` refers to the various stages data pass through, from their conception with a data collector's creation of a dataset to a researcher sharing the results of an analysis in a publication. Data are not required to move through every stage of the lifecycle, but a typical progression can include collecting, structuring, value entering, formatting or "cleaning", safe-keeping (backing up or archiving), analyzing, visualizing, making arguments based upon, and finally sharing. For any given dataset, it is common that different folks are involved at each stage in this sometimes-linear, sometimes-iterative lifecycle.


The people involved at each stage will necessarily make decisions that end up impacting  future users. For instance, a data collector might wonder, "Should I let my survey participants choose from a set of pre-defined gender options, which will make analysis simpler, or should I leave that field open-ended to allow for more nuance?" Likewise, a data analyst might ask, "Should I delete columns irrelevant to my own research to improve readability, or might these fields someday be useful to someone else?"


In making choices, sometimes humans are deliberate and thoughtful. Other times, and this can be especially true when technology is involved, people default to expediency, making quick judgements as they experiment with tools and techniques, until they hit upon workable solutions to the task at hand. It is common, especially in this latter scenario, for people forget to document their workflow, preserving instead only the final results.

Much is at stake when humans do not document their decision making process when it comes to changes they have made to data. It makes it harder for someone else using the data to be able to understand how it came to be, which can impact these future users' own decision-making abilities about how to approach the data.


The goal of this section of the schema is to encourage, to the degree possible, clear and thorough documentation of human decisions throughout the course of the People Lifecycle, ultimately striving to present context about data to users in a way that makes the 'data genealogy' or progression through the lifecycle as clear and understandable as possible. 

::: warning NOTE
Because libraries that archive data deal largely with changes made to data after the original collection process, we begin our lifecycle with acquisition. You can find notes, where available, on collection methodology in the [documentationHealth](./documentationHealth.html) section of the schema, along with other context about conception and design. 
:::

</div>

## Example use

``` json
	"peopleLifecycle": {
		"acquisition": {
			"ingredients": [{
				"$id": "ark:/76611/dkgskarjx",
				"notes": "The Leventhal Map & Education Center changed this ingredient dataset to create the new simplified towns dataset"
			}]
		},
		"description": {
			"contextProvider": {
				"name": "Belle Lipton",
				"relationshipToData": "Archivist"
			},
			"contextOnBehalfOf": {
				"name": "Garrett Dash Nelson",
				"relationshipToData": "Processor/Cleaner"
			},
			"contextPublicationDate": "2020-10-02",
			"metadataSchema": {
				"schemaName": "LMEC Data Description Schema",
				"$id": "https://github.com/nblmc/Data-Context/blob/master/schema.json"
			}
		},
		"maintenance": {
			"officialMaintainer": "Leventhal Map & Education Center",
			"maintenanceFrequency": "This dataset is not frequently updated"
		},
		"processing": {
			"choices": [{
				"title": "Step-by-Step Process",
				"author": "Garrett Dash Nelson",
				"format": "Jupyter Notebook",
				"relatedResourceURL": "https://github.com/nblmc/massachusetts-municipal-boundaries/blob/main/processor.ipynb"
			}]
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
          console.log(this.citation)
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

#aside{
  border: 1px dotted #1a1a37;
  padding: 0 15px;
  color: #777;
  box-shadow: -3px -3px 0 lighten(#1a1a37, 80%);
  background-color: white;
  margin-top:1rem;

}


</style>

