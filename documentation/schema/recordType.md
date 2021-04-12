---
---

<br>

[← Back to Schema Home](./)

# recordType

<template>
    <div v-if="this.core.recordType" id = "container">
      <p class="larger-text">{{this.core.recordType.description}}</p>
      <p >Expected Type: <strong>{{this.core.recordType.type}}</strong></p>
      <p >Options: <strong></strong></p>
      <ul v-for="item, index in this.core.recordType.enum" :key="index">
      <li><strong>{{item}}</strong></li>
      </ul>
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
"recordType": "Dataset"
```