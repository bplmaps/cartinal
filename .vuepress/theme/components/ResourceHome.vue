<template>
<main class="resourcehome" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <header class="hero">
        <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt">
        <p v-if="data.tagline !== null" class="description"> {{ data.tagline || $description }}</p>
    </header>

    <div v-if="data.themes && data.themes.length" class="themes">
        <div v-for="(theme, index) in data.themes" :key="index" class="theme">
            <h2>{{theme.themeTitle}} </h2>
            <div v-if="theme.topics && theme.topics.length" class="topics">
                <div v-for="(topic, index) in theme.topics" :key="index" class="topic">
                <ul>
                    <li><a class="topic-link" :href="topic.link">{{topic.topicName}} </a></li>
                </ul>
                </div>


            </div>


        </div>

    </div>
    </div>

    <Content class="theme-default-content custom" />
    <div v-if="data.footer" class="footer">{{ data.footer }}</div>
</main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
export default {
    name: 'ResourceHome',
    components: {
        NavLink
    },
    methods: {
        whatsUp() {
            console.log(this.data)
        }
    },
    computed: {
        data() {
            return this.$page.frontmatter
        }
    }
}
</script>

<style lang="stylus">
.resourcehome
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
      font-size 1.2rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color #2c503e
   a.topic-link:hover
    font-weight 600
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
    padding-left 2.5rem
@media (max-width: $MQMobileNarrow)
  .resourcehome
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
</style>