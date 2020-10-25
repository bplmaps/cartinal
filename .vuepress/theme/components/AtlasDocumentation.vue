<template>
    <!-- Frontmatter -->
    <main class="atlasdocumentation" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
        <header class="hero">
            <p v-if="data.tagline !== null" class="description"> {{ data.tagline || $description }}</p>
            <!-- <p v-if="data.bodycontent !== null" class="descriptionlong"> {{ data.bodycontent || $descriptionlong }}</p> -->
        </header>

      <h1>Accessing Atlascope Data</h1>
      <p id="intro">This documentation contains information about accessing the underlying data sources of the Atlascope project, including raster imagery web layers, vector boundary files, and metadata. It assumes prior knowledge with GIS and data tools.</p>

      <h2>Glossary</h2>

      <h3>Atlascope</h3>
      <p>You can learn more about urban atlases from our library research guides for <a target="_blank" href="https://guides.bpl.org/urban-atlases">Boston</a> or <a target="_blank" href="https://guides.bpl.org/mass-urban-atlases">other Massachusetts cities and towns</a>. To learn more about the Atlascope public discovery tool, <a target="_blank" href="../guides/atlascope-tool-guide.html">read the user manual</a> or <a target="_blank" href="https://atlascope.leventhalmap.org/">try the tool</a>.</p>

      <h3>Barcode</h3> 
      <p>The LMEC uses the <strong>barcode</strong> field as the stable identifier for a single atlas. We have derived these barcodes from the identifier physically attached to each atlas volume in the collections.</p>

      <h3>Bibliocommons</h3>
      <p><a target="_blank" href="https://bpl.bibliocommons.com/">Bibliocommons</a> is the name of the BPL's public access catalog, where each physical atlas volume has a MARC record containing complete bibliographic information.</p>

      <h3>Coverage</h3>
      <p>The titles of each atlas are deceiving. The geographic boundaries of each physical volume are idiosyncratic. Atlascope solves this problem by allowing you to search for layers by precise location. You should start with Atlascope, rather than the layer list, if you are unsure which layers are available for your area.</p>

      <h3>Mosaic GeoTIFFs</h3>
      <p>You can find a fully georeferenced and mosaiced GeoTIFF of a single atlas's full coverage in the atlas layer list. These are very large files. The LMEC recommends using the hosted tile web layers instead, but if you want to download these GeoTIFF imagery files, expect long download times.</p>

            <h3>Multiple Scale</h3>
      <p>Some single atlases include overlapping coverage of an area at multiple scales. Because of their overlapping extent, these are treated as distinct digital atlas objects. We use alphabetical suffixes appended to the barcode to create new identifiers for atlas layers that derive from the same original physical item.</p>

      <h3>Plate Boundaries</h3>
      <p>A GeoJSON file representing the coverage boundaries of each physical plate in an atlas as vector polygons is available from the atlas layer list. Geometry has been simplified for computational efficiency in Atlascope.</p>

      <h3>Volume</h3>
      <p>The LMEC has derived all of this data from large books in our physical collections. We refer to these books as volumes. Pages, or <strong>plates</strong> in the volumes show different portions of an area. The LMEC has stitched the plates in each <strong>volume</strong> together to create final stitched web layers. You can page through an <a target="_blank" href="https://collections.leventhalmap.org/book_viewer/commonwealth:tt44pw76m#1/1">example volume book</a> in our Digital Collections.</p>

      <h3>Volume Boundaries</h3>
      <p>A single GeoJSON file is available containing polygons corresponding to each physical volume's coverage boundaries. This layer is available here: <a target="_blank" href="https://s3.us-east-2.wasabisys.com/urbanatlases/extents/volume-extents.geojson">Volume Extents GeoJSON Download Link</a></p>

      <h3>XYZ Endpoints</h3>
      <p>The LMEC originally created tiles for atlases in this project using the TMS specification, and is currently converting each set to an XYZ specification to facilitate ArcGIS Online compatibility. You can use the layer list below to find out the status of each atlas web layer and the correct link syntax. Tiles are available at zoom levels 13 through 20.</p>
      
      <h2>Layer List</h2>
      <!-- ✔️ Container to hold all the drop-downs ✔ -->
      <div id="facet-bar">

          <!-- Type dropdown -->
          <label class = "dropdown">
              <div class="dd-button">Sort by Publisher</div>
              <input type="checkbox" class="dummy-input" @click="publisherseen= !publisherseen">
              <div v-if="publisherseen">
                <ul class="dd-menu" >
                    <!-- loop through all the possible options defined for guide types: i.e. "guide", "tutorial" -->
                    <li v-for="publisher in publishers">
                        <!-- create a checkbox input for each one -->
                        <!-- bind any checked options to the array "checkedTypes"  -->
                        <label><input type = "checkbox" v-model="checkedPublishers" v-bind:value="publisher"/> {{ publisher }} </label>
                    </li>
                </ul>
              </div>
          </label> 


          <!-- Level dropdown -->
          <label class = "dropdown">
              <div class="dd-button">Sort by Geography</div>
              <input type="checkbox" class="dummy-input" @click="geographyseen= !geographyseen">
              <div v-if="geographyseen">
                <ul class="dd-menu">
                    <li v-for="geography in geographies">
                        <label><input type = "checkbox" v-model="checkedGeographies" v-bind:value="geography"/> {{ geography}} </label>
                    </li>
                </ul>
              </div>
          </label> 

        <!-- ✔️ end of facet container ✔️ -->  
      </div>

        <!-- Display the results of the filters -->

        <div class ="atlas-results" v-for="atlas in displayAtlases">

            <div class = "atlas-result">
                <ul>
                  <h2 id="result-title">{{atlas.geo_extent }}, {{ atlas.year}}</h2>
                  <p>Barcode: <strong> {{atlas.barcode}} </strong> </p>
                  <p>Publisher: <strong> {{atlas.publisher}} </strong> </p>
                  <p><a target="_blank":href="atlas.bibliocommons">View in Bibliocommons</a></p>
                  <p><a target="_blank":href="'https://geoservices.leventhalmap.org/atlas-extent-viewer/index.html#'+atlas.barcode">View Extent and Plate Boundaries</a></p>
                  <p>Full Coverage GeoTIFF:</p>
                  <input class = "copyable-link" type = "text" v-bind:value="'https://s3.us-east-2.wasabisys.com/urbanatlases/'+atlas.barcode+'/src/mosaic/mosaic.tif'" id="mosaic-link">
                  <button class="clipboard-button" @click="copyToClipboard('xyz-tile-link')">📋</button>
                  <p>Plate Boundaries Outline:</p>
                  <input class = "copyable-link" type = "text" v-bind:value="'https://s3.us-east-2.wasabisys.com/urbanatlases/'+atlas.barcode+'/src/footprint/Boundary.geojson'" id="footprint-link">
                  <button class="clipboard-button" @click="copyToClipboard('footprint-link')">📋</button>
                  <div v-if="atlas.XYZ === 'done'">
                      <p>Tile Endpoint (XYZ): </p>
                      <input class = "copyable-link" type = "text" v-bind:value="'https://s3.us-east-2.wasabisys.com/urbanatlases/'+atlas.barcode+'/tiles/{z}/{x}/{y}.png'" id="xyz-tile-link">
                      <button class="clipboard-button" @click="copyToClipboard('xyz-tile-link')">📋</button>
                  </div>
                  <div v-else>
                      <p>Tile Endpoint (TMS): </p>
                      <input class = "copyable-link" type = "text" v-bind:value="'https://s3.us-east-2.wasabisys.com/urbanatlases/'+atlas.barcode+'/tiles/{z}/{x}/{-y}.png'" id="tms-tile-link">
                      <button class="clipboard-button" @click="copyToClipboard('tms-tile-link')">📋</button>
                  </div>
                  <p>ArcGIS Online Tile Endpoint:</p>
                  <div v-if="atlas.XYZ === 'done'">
                      <input class = "copyable-link" type = "text" v-bind:value="'https://s3.us-east-2.wasabisys.com/urbanatlases/'+atlas.barcode+'/tiles/{z}/{x}/{y}.png'" id="xyz-tile-link">
                      <button class="clipboard-button" @click="copyToClipboard('xyz-tile-link')">📋</button>
                  </div>
                  <div v-else>
                      <p class="agol-disclaimer">This layer is not yet available for ArcGIS Online. If you would like access, <a href="https://www.leventhalmap.org/research/geospatial/">submit a request</a>.</p>
                  </div>
                </ul>
            </div>
        </div>

        <!-- default VuePress component stuff -->
        <Content class="theme-default-content custom" />
        <div v-if="data.footer" class="footer">{{ data.footer }}</div> 
    </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import axios from 'axios'


export default {
    name: 'AtlasDocumentation',

    components: {
        NavLink
    },
    data() {
        return {
          atlases: [],
          geographyseen: false,
          yearseen: false,
          publisherseen: false,
          geographies: ["Boston Proper", "Brighton", "Brookline", "Cambridge", "Charlestown", "Chelsea", "Dorchester", "East Boston", "Hyde Park", "Mattapan", "Newton", "Revere", "Roxbury", "Somerville", "South Boston", "South End", "West Roxbury", "Winthrop"],
          publishers: ["Sanborn", "Hopkins", "Bromley", "Beers", "Richards", "Pinney", "Whitman & Howard", "Barnes"],
          checkedGeographies: [],
          checkedPublishers: []
        }
    },
    methods: {
        copyToClipboard(copiedvalue){
          var copyText = document.getElementById(copiedvalue)
          copyText.select()
          copyText.setSelectionRange(0,99999)
          document.execCommand("copy")
        },
        applyPublisher (item) {
            if (!this.checkedPublishers.length)
              return this.atlases
            return this.checkedPublishers.includes(item.publisher)
        },
        applyGeographies(item) {
          if (!this.checkedGeographies.length)
            return this.atlases
          for (let nesteditem = 0; nesteditem < item.geographies.length; nesteditem ++){
              const geography = item.geographies[nesteditem]
              return this.checkedGeographies.includes(geography)
          }
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        },
        displayAtlases: function(){
            return this.atlases
              .filter(this.applyPublisher)
              .filter(this.applyGeographies)
        }
    },
    created() {
        //returns a promise
        axios.get("https://s3.us-east-2.wasabisys.com/cartinal/atlases.json")
            .then(response => {
                this.atlases = response.data
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>
<style lang="stylus">
.atlasdocumentation
  padding 1rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align left
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
    .description
      margin-bottom 0
      margin-top 6rem
      font-size 2.5rem
      line-height 1.3
      color #1A1A37
  .descriptionlong
    font-size 1.3rem
  a.topic-link
      background-color #6B8BAD
      padding .1rem .8rem .1rem .8rem
      margin-bottom 1rem
      border-radius 4rem
      font-size 1.4rem
      font-weight 400
      border-bottom none
      padding-bottom 0
      color white
      box-shadow 0 0 1rem 0 rgba(0,0,0,0.1)
  a.topic-link:hover 
    background-color #3e6894
  .themes
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 1rem
    display flex
    flex-direction column
  .theme
    flex-grow 1
    h2
      font-size 1.6rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color #6a8bad
    p
      color lighten($textColor, 25%)
      font-weight 400
      font-family 'Avenir', Helvetica, Arial, sans-serif;
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
  ul
    padding-left 1.5rem

.dropdown 
  display inline-block
  position relative
.dd-button
  display inline-block
  border 1px solid gray
  border-radius 4rem
  padding 10px 30px 10px 20px
  cursor pointer
  white-space nowrap

.dd-button:after 
  content ''
  position absolute
  top 50%
  right 15px
  transform translateY(-50%)
  width 0
  height 0
  border-left 5px solid transparent
  border-right 5px solid transparent
  border-top 5px solid black

.dd-button:hover 
  background-color #eeeeee

.dummy-input
  display none

h2 
  padding-bottom .8rem

.dd-menu 
  position absolute
  margin-top 0
  top 100%
  border 1px solid #ccc
  border-radius 4px
  box-shadow 0 0 6px 0 rgba(0,0,0,0.1)
  background-color #ffffff
  list-style-type none
  max-height 300px

.dummy-input:checked + .dd-menu 
  display block


.dummy-input + .dd-menu 
  display none

.dd-menu li 
  z-index 20
  width 107%
  left -2.5rem
  position relative
  padding .5rem 1rem
  cursor pointer
  white-space nowrap


.dd-menu li:hover 
  background-color #f6f6f6;


.dd-menu li a 
  display block


.atlas-results{
  margin-top 2rem
  box-shadow .1rem .1rem lighten(#E8E8E8, 25%)
}

.atlas-result 
  border .05rem solid #E8E8E8
  margin-top .5rem 
  padding-right .5rem

div#facet-bar
  display flex
  flexbox-direction row
  flex-wrap wrap

ul.dd-menu
  z-index 20
  padding-left 2.5rem
  overflow auto
  overflow-x hidden

.copyable-link
  color #fff
  background-color #282D33
  border-radius 1rem
  padding .25rem
  width:90%

.clipboard-button
  border-radius .25rem
  border .25rem

.agol-disclaimer
  font-size .9rem

h2#result-title
    font-size 1.6rem

p#intro 
  font-size 1.1rem



@media (max-width: $MQMobileNarrow)
  .atlasdocumentation
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 1rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 2rem
        margin-top 6rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .dd-button 
    a.topic-link 
      font-size .8rem
  h2#result-title
    font-size 1.2rem
.copyable-link
  width:80%


</style>