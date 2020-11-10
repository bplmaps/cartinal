<template>
    <div id="hierarchy-container">
          <br>
          <!-- Beginning of full hierarchy list -->
          <ul>
            <!-- Beginning of Core Citation section --> 
            <li> <a href="./coreCitation.html">coreCitation</a>  </li>
              <!-- Beginning of each property in Core Citation list --> 
              <ul v-for="item, index in this.coreCitation" :key="index">
                <li>
                  <a :href="index + '.html'" >{{index}}</a>
                </li>
              </ul>
            <!-- Beginning of Data Endpoint section --> 
            <li> <a href="./dataEndpoints.html">dataEndpoints</a></li>
            <!-- Beginning of Subject Tagging section --> 
            <li><a href="./subjectTagging.html"> subjectTagging </a></li>
                <ul v-for="item, index in this.subjectTagging" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                      <ul>
                        <li v-for="subitem, index in item.properties" :key="index">
                        <a :href="index + '.html'" >{{index}}</a>
                      </li>
                    </ul>
                </ul>
            <!-- Beginning of Data Biography section --> 
            <li><a href="./dataBiography.html"> dataBiography </a></li>
                <ul v-for="item, index in this.dataBiography" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                      <ul>
                        <li v-for="subitem, index in item.properties" :key="index">
                        <a :href="index + '.html'" >{{index}}</a>
                      </li>
                    </ul>
                </ul>
            <!-- Beginning of Resource Constellation section --> 
            <li><a href="./resourceConstellation.html"> resourceConstellation </a></li>
                <ul v-for="item, index in this.resourceConstellation" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                      <ul>
                        <li v-for="subitem, index in item.properties" :key="index">
                        <a :href="index + '.html'" >{{index}}</a>
                      </li>
                    </ul>
                </ul>
            <!-- Beginning of Data Lifecycle section --> 
            <li><a href="./dataLifecycle.html"> dataLifecycle </a></li>
                <ul v-for="item, index in this.dataLifecycle" :key="index">
                  <li><a :href="index + '.html'" >{{index}}</a></li>
                      <ul>
                        <li v-for="subitem, index in item.properties" :key="index">
                        <a :href="index + '.html'" >{{index}}</a>
                      </li>
                    </ul>
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
          coreCitation: [],
          dataEndpoints: [],
          subjectTagging: [],
          dataBiography: [],
          resourceConstellation: [],
          dataLifecycle: []
        }
    },
    methods: {
        whatsUp(){
          console.log(this.subjectTagging)
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        }
    },
    created() {
        //returns a promise
        axios.get("https://raw.githubusercontent.com/nblmc/Data-Context/master/schema.json")
            .then(response => {
                this.schema = response.data.properties
                this.coreCitation = response.data.properties.coreCitation.properties
                this.dataEndpoints = response.data.properties.dataEndpoints
                this.subjectTagging = response.data.properties.subjectTagging.properties
                this.dataBiography = response.data.properties.dataBiography.properties
                this.resourceConstellation = response.data.properties.resourceConstellation.properties
                this.dataLifecycle = response.data.properties.dataLifecycle.properties
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>

