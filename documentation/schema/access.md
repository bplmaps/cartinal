
<br>

[← Back to Schema Home](./)

# access

<template>
    <div v-if="this.access" id = "container">
      <p class="larger-text">{{this.access.description}}</p>
      <p >Expected Type: <strong>{{this.access.type}}</strong></p>
    <table v-if="this.access.items" id ="property-table">
        <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr v-for="item, index in this.access.items[0].properties" :key="index">
            <td><a :href="index + '.html'" >{{index}}</a></td>
            <td>{{item.type}}</td>
            <td id="required">{{checkRequired(index, schema.access.required)}}</td>
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
          console.log(this.access)
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
	"access":[{
		"$id": "ark:/76611/dkgsk7g8m/endpoint/1",
		"accessURL": "https://s3.us-east-2.wasabisys.com/public-geospatial/dkgsk7g8m/mass-municipalities.geojson",
		"title": "Massachusetts Town Boundaries GeoJSON",		
		"source": "Leventhal Map & Education Center",
		"format": "GeoJSON"
	}]
```