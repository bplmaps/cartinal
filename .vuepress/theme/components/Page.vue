<template>
  <main class="page">
    <slot name="top" />
    <PageBanners />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageBanners from '@theme/components/PageBanners.vue'

export default {
  components: { PageEdit, PageNav, PageBanners },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  & aside
    width: 40%
    float: right
    margin-left: 20px
    margin-top: 20px
    border 1px dotted #1a1a37
    padding: 0 15px
    color: #777
    box-shadow: -3px -3px 0 lighten(#1a1a37, 80%)
    background-color: white




</style>
