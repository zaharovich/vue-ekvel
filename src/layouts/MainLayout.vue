<script setup>
import "@/assets/style/main.scss";
import "@/assets/js/scripts.js";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>
<template>
  <div class="wrapper" ref="wrapper">
    <MainHeader />
    <router-view></router-view>
    <MainFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseWidth: 1440,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.$refs.wrapper.style.zoom = window.innerWidth / this.baseWidth;
    },
  },
};
</script>
