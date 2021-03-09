<template>
<div class="question-block">
 <p>{{question.text}}</p>
  <div class="answer-button" v-for="answer in question.answers" :class="answered ? answer.correct ? 'answered-correct' : 'answered-incorrect' : ''" @click="clickAnswer">{{answer.text}} <span class="correct-text" v-if="answered && answer.correct">Correct answer!</span></div>
</div>
</template>

<script>

export default {
  name: "QuizletQuestion",
  data: function() {
    return {
      answered: false
    }
  },
  props: {
    question: {
      type: Object
    }
  },
  computed: {
  },
  methods: {
    clickAnswer: function() { this.answered = true; }
  }
}
</script>

<style scoped lang="stylus">

.question-label {
  font-size: 0.8em;
}

.question-block 
  border-left: 3px solid lighten(#1a1a37, 80%)
  padding-left: 10px;


.answer-button 
  display: inline-block;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
  font-size: 0.9em;
  cursor: pointer;
  &:hover
    box-shadow: 2px 2px #1a1a37;

.answered-correct 
  background-color: #d8fabb

.answered-incorrect 
  background-color: #ffe0ea

.correct-text {
  font-size: 80%;
  font-style: italic;
}
</style>

