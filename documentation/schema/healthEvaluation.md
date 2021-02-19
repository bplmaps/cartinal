---

---

<br>

[← Back to Schema Home](./)

# healthEvaluation

<template>
    <div id = "container" v-if="this.documentationHealth.representation">
      <p class="larger-text">{{this.documentationHealth.representation.properties.healthEvaluation.description}}</p>
      <p >Expected Type: <strong>{{this.documentationHealth.representation.properties.healthEvaluation.type}}</strong></p>
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
          peopleLifecycle: []
        }
    },
    methods: {
        whatsUp(){
          console.log(this.filterTagging)
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

## Health checklist

::: tip How we check documentation health
You can find out how we check documentation in the [documentation health check guide](./healthcheck.html)
:::


## Example Use

``` json
"healthEvaluation": "The documentation does not reflect on the ways the data program is at risk for repeating past harms. It does not describe the ways in which U.S. census data collection has considered its relationship and contribution to systemic injustice."		

```