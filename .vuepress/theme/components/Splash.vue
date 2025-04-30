<template>
  <div v-if="visible" :class="{ loader: true }">
    <div id="announcement" class="transparent">
      <button @click="closeSplash" class="close-btn">X</button>
      <span>Hi! 👋 Thanks for visiting Cartinal.</span>
      <br /><br /><b>As of May 30, 2025, this site has been archived.</b
      ><br /><br />
      <span>
        These guides and documentation are no longer maintained and may be
        outdated.
      </span>
      <span>
        All documentation has been migrated to our GitHub repository at
        <a href="https://github.com/bplmaps" target="blank"
          >https://github.com/bplmaps</a
        >.
      </span>
      <span>
        Future guides will be published as part of our ongoing "Tools for
        Teachers" portal rebuild.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    closeSplash() {
      this.visible = false;
      sessionStorage.setItem("splashClosed", "true");
      this.$emit("splash-closed");
    },
  },
  mounted() {
    if (sessionStorage.getItem("splashClosed")) {
      this.visible = false;
    }
  },
};
</script>

<style>
.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.transparent {
  background: rgb(44, 61, 80, 0.9);
}

.loader {
  backdrop-filter: blur(4px);
  bottom: 0;
  color: white;
  display: block;
  font-size: 24px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  border-radius: 4px;
  z-index: 9999;
  box-shadow: 0px 20px 20px #5a6067;
}

#announcement {
  position: relative;
  border-radius: 4px;
  margin: 5em;
  padding: 3em;
  z-index: 9999;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 4px;
  background: white;
  color: rgb(72, 72, 72);
  border: none;
  cursor: pointer;
  z-index: 9999;
}
.close-btn:hover {
    background: rgb(186, 186, 186);
    color: black;
    transition: ease-in-out 0.5;
}
</style>
