<template>
    <div id="hierarchy-container">
          <ul>
            <!-- Beginning of description section --> 
            <li> <a href="./core.html">core</a>  </li>
              <!-- Beginning of each property in description list --> 
              <ul v-for="item, index in this.core" :key="index">
                <li>
                  <a :href="index + '.html'" >{{index}}</a>
                </li>
              </ul>
            <!-- Beginning of Data Endpoint section --> 
            <li v-if="this.access.items"><a href="./access.html"> access </a></li>
                <ul>
                  <li><a href="$id.html" >$id</a></li>
                  <li><a href="accessURL.html" >accessURL</a></li>
                  <li><a href="title.html" >title</a></li>
                  <li><a href="source.html" >source</a></li>
                  <li><a href="format.html" >format</a></li>
                </ul>
            <!-- Beginning of Filter Tagging section --> 
            <li><a href="./tags.html"> tags </a></li>
                <ul v-for="item, index in this.tags" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
            <!-- Beginning of People Lifecycle section --> 
            <li><a href="./lifecycle.html"> lifecycle </a></li>
                <ul v-for="item, index in this.lifecycle" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
            <!-- Beginning of Documentation Health section --> 
            <li><a href="./considerations.html"> considerations </a></li>
                <ul v-for="item, index in this.considerations" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                </ul>
            <!-- Beginning of Related Resources section --> 
            <li><a href="./resources.html"> resources </a></li>
                <ul v-for="item, index in this.resources" :key="index">
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
          console.log(this.tags)
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
                this.lifecycle = response.data.properties.lifecycle.properties
                this.resources = response.data.properties.resources.properties
                this.considerations = response.data.properties.considerations.properties
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>

