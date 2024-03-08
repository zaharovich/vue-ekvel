<script setup>
import "@/assets/style/header.scss";
</script>

<template>
  <div class="container">
    <div class="header" :class="{ hidden: isHeaderHidden, active: isOpen }">
      <div class="animatet-area">
        <div class="left">
          <a href="/"><img src="@/assets/img/Logo.svg" alt="" /></a>
          <ul>
            <li><a href="#">Showcases</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Mockups</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Playground</a></li>
          </ul>
        </div>
        <div class="right">
          <div class="lang">
            <span><i></i></span>
            <ul>
              <li><a href="#" class="active">UA</a></li>
              <li><a href="#">EN</a></li>
            </ul>
          </div>
          <p class="login"><i class="i-person"></i>Log in</p>
        </div>
      </div>
      <div
        class="burger-container"
        :class="{ active: isOpen }"
        @click="toggleBurger"
      >
        <div class="burger-lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
export default {
  data() {
    return {
      isHeaderHidden: false,
      scrollThreshold: 50,
      isAtTop: true,
      isOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleBurger() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      this.isHeaderHidden = !this.isAtTop || scrollTop > this.scrollThreshold;
    },
    checkScrollPosition() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      this.isAtTop = scrollTop === 0;
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
