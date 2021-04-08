---
---

<br>

[← Back to Schema Home](./)

# temporalNotes

<template>
    <div v-if="this.tags.temporal" id = "container">
      <p class="larger-text">{{this.tags.temporal.properties.temporalNotes.description}}</p>
      <p >Expected Type: <strong>{{this.tags.temporal.properties.temporalNotes.type}}</strong></p>
    </div>
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
          lifecycle: [],
        }
    },
    methods: {
        whatsUp(){
          console.log(this.core)
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

## Example use

``` json
"temporalNotes": "This data represents the historic state of the Boston shoreline in the year 1916. It was digitally derived in 2019 from born-digital maps published in 1995."
```