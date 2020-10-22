<template>
    <!-- Frontmatter -->
    <main class="guideslanding" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
        <header class="hero">
            <p v-if="data.tagline !== null" class="description"> {{ data.tagline || $description }}</p>
            <p v-if="data.bodycontent !== null" class="descriptionlong"> {{ data.bodycontent || $descriptionlong }}</p>
        </header>

      <!-- ✔️ Container to hold all the drop-downs ✔-->
      <div id="facet-bar">

          <!-- Type dropdown -->
          <label class = "dropdown">
              <div class="dd-button">What do you need?</div>
              <input type="checkbox" class="dummy-input" @click="typeseen= !typeseen">
              <div v-if="typeseen">
                <ul class="dd-menu" >
                    <!-- loop through all the possible options defined for guide types: i.e. "guide", "tutorial" -->
                    <li v-for="type in types">
                        <!-- create a checkbox input for each one -->
                        <!-- bind any checked options to the array "checkedTypes"  -->
                        <label><input type = "checkbox" v-model="checkedTypes" v-bind:value="type"/> {{ type }} </label>
                    </li>
                </ul>
              </div>
          </label>


          <!-- Level dropdown -->
          <label class = "dropdown">
              <div class="dd-button">What skill level are you looking for?</div>
              <input type="checkbox" class="dummy-input" @click="levelseen= !levelseen">
              <div v-if="levelseen">
                <ul class="dd-menu">
                    <li v-for="level in levels">
                        <label><input type = "checkbox" v-model="checkedLevels" v-bind:value="level"/> {{ level}} </label>
                    </li>
                </ul>
              </div>
          </label>

          <!-- Theme dropdown -->
          <label class = "dropdown">
              <div class="dd-button">What do you want to do?</div>
              <input type="checkbox" class="dummy-input" @click="themeseen= !themeseen">
              <div v-if="themeseen">
                <ul class="dd-menu">
                    <li v-for="theme in themes">
                        <label><input type = "checkbox" v-model="checkedThemes" v-bind:value="theme"/> {{ theme}} </label>
                    </li>
                </ul>
              </div>
          </label>

        <!-- ✔️ end of facet container ✔️ -->  
      </div>

        <!-- Display the results of the filters -->
    
        <div class ="guide-results" v-for="guide in displayGuides">
            <div class = "guide-result">
                <ul>
                  <h2><a class = "topic-link" :href="guide.path">{{guide.name }}</a></h2>
                      <p> {{guide.description }} </p>
                      <div id="holds-tags"></div>
                      <p> Type: <strong> {{guide.type}} </strong> </p>
                      <p> Level: <strong> {{guide.level}} </strong> </p>
                      <p> Theme: <strong> {{guide.theme}} </strong> </p>
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
    name: 'GuidesLanding',

    components: {
        NavLink
    },
    data() {
        return {
          guides: [],
          types: ["Tutorial", "Guide"],
          levels: ["Beginning", "Fundamentals", "Advanced"],
          themes: ["Make a map", "Georeference", "Find and use data", "Use BPL map collections", "Teach spatial concepts"],
          checkedTypes: [],
          checkedLevels: [],
          checkedThemes: [],
          typeseen: false,
          levelseen: false,
          themeseen: false
        }
    },
    methods: {
        whatsUp() {
            console.log("hi :)")
        },
        applyType (item) {
            if (!this.checkedTypes.length)
              return this.guides
            return this.checkedTypes.includes(item.type)
        },
        applyLevel(item) {
            if (!this.checkedLevels.length)
              return this.guides
            return this.checkedLevels.includes(item.level)
        },
        applyTheme(item) {
            if (!this.checkedThemes.length)
              return this.guides
            return this.checkedThemes.includes(item.theme)
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        },
        displayGuides: function(){
            return this.guides
              .filter(this.applyType)
              .filter(this.applyLevel)
              .filter(this.applyTheme)
        }
    },
    created() {
        //returns a promise
        axios.get("https://s3.us-east-2.wasabisys.com/cartinal/guides.json")
            .then(response => {
                this.guides = response.data
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>
<style lang="stylus">
.guideslanding
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


.guide-results{
  margin-top 2rem
  box-shadow .1rem .1rem lighten(#E8E8E8, 25%)
}

.guide-result 
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



@media (max-width: $MQMobileNarrow)
  .guideslanding
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


</style>