---
sidebar: none
---

<br>

[← Back to Schema Home](./)

# considerations

<template>
   <table v-if="this.schema.considerations" id ="property-table">
     <p class="larger-text">{{this.schema.considerations.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.considerations" :key="index">
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
          console.log(this.schema.considerations)
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


</style>

### Machine Readability

#### Definition
Machine readability refers to how easily intelligible a dataset is to a computer.
GIS data is considered machine readable when it is:
- available in formats such as shapefiles, geoJSONs and CSVs
- structured in a detailed way that allows for routine or programmatic use

#### More Resources
- [Machine Readable](https://opendatahandbook.org/glossary/en/terms/machine-readable/), Open Data Handbook
- [A Primer on Machine Readability for Online Documents and Data](https://www.data.gov/developers/blog/primer-machine-readability-online-documents-and-data), Data.gov 


### Human Readability

#### Definition
Human readability refers to how easily accessible or intelligible a dataset is to a human being. The LMEC considers a dataset human readable if it:
- has accompanying codebooks and data dictionaries
- has clearly and thoughtfully documented methodologies and lineage
- has context with definitions or explanations of discipline-specific jargon or technical language
- easily allows a data user to make sense of or reproduce the steps used to create it

#### More Resources
- [Human Readable](https://opendatahandbook.org/glossary/en/terms/human-readable/), Open Data Handbook
- [Metadata and Its Importance in a Data Driven World](https://www.villanovau.com/resources/bi/metadata-importance-in-data-driven-world/), Villanova University
- [What is Metadata and Why Do I Need It?](https://guides.lib.unc.edu/metadata/importance#:~:text=Metadata%20ensures%20that%20we%20will,unless%20text%20metadata%20is%20available.), UNC Libraries

### Social Embeddedness

#### Definition

Social embeddedness refers to the concept that datasets cannot be understood separately from the social circumstances in which they are created and used. The LMEC considers a dataset socially embedded if it:
- was created by, for, or collaboratively in partnership with the people it represents
- has accompanying materials which outline the questions it was designed to answer
- has accompanying materials which thoughtfully reflect on the dataset's usefulness for social justice

#### More resources
- [Embeddedness, Social Science Concept](https://www.britannica.com/topic/embeddedness), Encyclopedia Britannica 
- [The Numbers Don't Speak for Themselves](https://data-feminism.mitpress.mit.edu/pub/czq9dfs5/release/2), Klein & D'Ignazio
- [Data as Performace – Showcasing cities through open data maps](https://journals.sagepub.com/doi/10.1177/2053951720907953), Currie