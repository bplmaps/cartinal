<template>
<div>
    <h2>{{title}}</h2>

    <slot></slot>

    <QuizletQuestion v-for="q in questions" :question="q" />
    

    
</div>
</template>

<script>
import QuizletQuestion from './QuizletQuestion.vue'

export default {
  name: "Quizlet",
  components: {QuizletQuestion},
  data: function() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: function() { return "Quiz" }
    },
    questions: {
      type: Array
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">


</style>

