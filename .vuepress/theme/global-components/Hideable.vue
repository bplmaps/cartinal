<template>
<div>
    <h4><button @click="toggle">{{hideShowText}}</button> {{title}}</h4>
    <div class="content">
    <slot v-if="!hidden"></slot>
    </div>
</div>
</template>

<script>
export default {
  name: "Hideable",
  data: function() {
    return {
      'hidden': true
    }
  },
  props: ['title'],
  computed: {
    hideShowText: function(){ return this.hidden ? 'show this' : 'hide this' }
  },
  methods: {
    toggle: function() { this.hidden = !this.hidden; }
  }
}
</script>

<style scoped lang="stylus">
button {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px 5px;
  position: relative;
  bottom: 3px;
  text-shadow: 0px 0px 0px transparent;
  cursor: pointer;
}

button:hover {
  background: transparent;
  box-shadow: -1px 1px 0px #1a1a37;
  text-shadow: 0px 0px 0px transparent;
}

button:active {
  outline: none;
  border: 1px solid #1a1a37;
}

button:focus {
  outline: 0;
}

.content {
  border-left: 3px solid lighten(#1a1a37, 80%)
  padding-left: 10px;
  color: #777
}
</style>

