<template>
    <div id="hierarchy-container">
          <br>
          <!-- Beginning of full hierarchy list -->
          <ul>
            <!-- Beginning of Core Citation section --> 
            <li> <a href="./citation.html">citation</a>  </li>
              <!-- Beginning of each property in Core Citation list --> 
              <ul v-for="item, index in this.citation" :key="index">
                <li>
                  <a :href="index + '.html'" >{{index}}</a>
                </li>
              </ul>
            <!-- Beginning of Data Endpoint section --> 
            <li><a href="./endpoints.html"> endpoints </a></li>
            <!-- Beginning of Filter Tagging section --> 
            <li><a href="./filterTagging.html"> filterTagging </a></li>
                <ul v-for="item, index in this.filterTagging" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
            <!-- Beginning of People Lifecycle section --> 
            <li><a href="./peopleLifecycle.html"> peopleLifecycle </a></li>
                <ul v-for="item, index in this.peopleLifecycle" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
            <!-- Beginning of Documentation Health section --> 
            <li><a href="./documentationHealth.html"> documentationHealth </a></li>
                <ul v-for="item, index in this.documentationHealth" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
            <!-- Beginning of Related Resources section --> 
            <li><a href="./relatedResources.html"> relatedResources </a></li>
                <ul v-for="item, index in this.relatedResources" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
          </ul>
          <!-- end of full hierarchy list --> 
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
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        }
    },
    created() {
        //returns a promise
        axios.get("https://raw.githubusercontent.com/bplmaps/Data-Context/master/schema.json")
            .then(response => {
                this.schema = response.data.properties
                this.citation = response.data.properties.citation.properties
                this.endpoints = response.data.properties.endpoints
                this.filterTagging = response.data.properties.filterTagging.properties
                this.peopleLifecycle = response.data.properties.peopleLifecycle.properties
                this.relatedResources = response.data.properties.relatedResources.properties
                this.documentationHealth = response.data.properties.documentationHealth.properties
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>

