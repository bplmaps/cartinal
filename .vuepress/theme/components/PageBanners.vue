<template>
  <div id="page-banners" :class="showPageBanners">
    <div v-if="underConstruction">
      <h3>{{ this.emoji.constructionalert }} Page Health</h3>
      This page is <strong>under construction</strong>.
    </div>
    <div v-if="flagged">
      <h3>{{ this.emoji.flaggedalert }} Page Health</h3>
      This page has been <strong>flagged</strong>. It may contain known errors or problems.
    </div>
    <div v-if="outOfDate">
      <h3>{{ this.emoji.outdatedalert }} Page Health</h3>
      It has been {{daysSinceUpdate}} days since this page was <strong>last updated</strong>.
    </div>
  </div>
</template>

<script>
import isNil from 'lodash/isNil'

export default {
  name: 'PageBanners',
    data() {
        return {
          title: "Page Health",
          emoji: {
            constructionalert: "🚧",
            flaggedalert: "📢",
            outdatedalert: "🕒"
          }
        }
    },
  computed: {
    showPageBanners() {
      if( isNil(this.$page.frontmatter.health) && !(Math.round((Date.now() - new Date(this.$page.lastUpdated))/(1000 * 3600 * 24)) > this.$site.themeConfig.oldPageCutoff)) {
        return "hidden"
      } else {
        return null
      }
    },

    underConstruction () {
      if( !isNil(this.$page.frontmatter.health) && !isNil(this.$page.frontmatter.health.underConstruction)) { return true } else { return false }
    },

    flagged() {
      if( !isNil(this.$page.frontmatter.health) && !isNil(this.$page.frontmatter.health.flagged)) { return true } else { return false }
    },

    daysSinceUpdate() {
      return Math.round((Date.now() - new Date(this.$page.lastUpdated))/(1000 * 3600 * 24))
    },

    outOfDate() {
      if(Math.round((Date.now() - new Date(this.$page.lastUpdated))/(1000 * 3600 * 24) > this.$site.themeConfig.oldPageCutoff)) {
        return true
      } else {
        return false
      }
    }

  },

  methods:
  {  }
}
</script>

<style lang="stylus">
.hidden {
  display: none;
}

#page-banners
  position: fixed
  text-align: left;
  left: 15px
  bottom: 15px
  max-width: 20%;
  z-index: 9999;
  padding: 10px;
  background-color: rgb(250, 248, 206)
  border: 1px solid darken( rgb(250, 248, 206), 50);
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.2);

  div
    margin: 0 0 4px 0

  h3
    margin: 0 0 5px 0
    font-size: 1.1em

@media (max-width: 450px)
  #page-banners
    width: 50%;
    max-width: none



</style>
