---

---

<br>

[← Back to Schema Home](./)

# futureUse

<template>
   <table v-if="this.documentationHealth.futureUse" id ="property-table">
     <p class="larger-text">{{this.documentationHealth.futureUse.description}}</p>
  <tr>
    <th>Property</th>
    <th>Expected Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr v-for="item, index in this.documentationHealth.futureUse.properties" :key="index">
    <td><a :href="index + '.html'" >{{index}}</a></td>
    <td>{{item.type}}</td>
    <td id="required">{{checkRequired(index, schema.documentationHealth.properties.futureUse.properties.required)}}</td>
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
          citation: [],
          endpoints: [],
          filterTagging: [],
          documentationHealth: [],
          relatedResources: [],
          peopleLifecycle: []
        }
    },
    methods: {
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

## Health checklist

::: tip How we check documentation health
You can find out how we check documentation in the [documentation health check guide](./healthcheck.html)
:::

## Example use

```json
"futureUse":{
  "healthScore": 3,
  "healthEvaluation": "Documentation is clear about potential positive impact from the data. Public materials also outline future funding dependent on this data program. \n \n There is not discoverable information about potential negative impact. The documentation could be more clear how someone should and should not use the data. There are not accessible guides about known limitations for any given set of census data."		
}
```
