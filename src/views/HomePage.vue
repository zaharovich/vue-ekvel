<script setup>
import PartnersLogo from "@/components/home-page/PartnersLogo.vue";
import ShowCases from "@/components/home-page/ShowcasesBlock.vue";
import ServicesBlock from "@/components/home-page/ServicesBlock.vue";
import MockupsBlock from "@/components/home-page/MockupsBlock.vue";
import CoursesBlock from "@/components/home-page/CoursesBlock.vue";
import BlockBlog from "@/components/home-page/BlockBlog.vue";
</script>

<template>
  <div class="herosection">
    <img
      class="heroimg"
      src="@/assets/img/hero-img.png"
      alt="Ekvel"
      title="Ekvel"
    />
    <div class="container">
      <div class="hero-block">
        <img class="herotext" src="@/assets/img/Visual Future.svg" alt="" />
        <a href="#" class="hero-button">Let’s Talk<i></i></a>
      </div>
    </div>

    <PartnersLogo />
  </div>
  <ShowCases />
  <ServicesBlock />
  <MockupsBlock />
  <CoursesBlock />
  <BlockBlog />
</template>
