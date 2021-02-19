---
---

<br>

[← Back to Schema Home](./)

# freeSubjectTags

<template>
    <div v-if="this.filterTagging.thematic" id = "container">
      <p class="larger-text">{{this.filterTagging.thematic.properties.freeSubjectTags.description}}</p>
      <p >Expected Type: <strong>{{this.filterTagging.thematic.properties.freeSubjectTags.type}}</strong></p>
    <table id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.filterTagging.thematic.properties.freeSubjectTags.items[0].properties" :key="index">
            <td>{{index}}</td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.filterTagging.properties.thematic.properties.freeSubjectTags.items[0].required)}}</td>
            <td>{{item.description}}</td>
        </tr>
    </table> 
    </div>
</template>

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
          peopleLifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.endpoints)
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

</style>
