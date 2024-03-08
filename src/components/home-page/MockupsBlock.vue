<script setup>
import "@/assets/style/home-page/mockups.scss";
import Swiper from "swiper"; // Импортируем Swiper.js
import "swiper/swiper-bundle.css"; // Импортируем стили Swiper.js
</script>
<template>
  <div class="mockups">
    <div class="container">
      <a href="#" class="primary-button">Mockups<i></i></a>
      <div class="mockup-row">
        <a href="#" class="mockup-item">
          <div class="slider-mockup">
            <div class="swiper-container mockupSlider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image-3.jpg" alt="" />
                </div>
              </div>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>

          <p class="mockup-info">
            <span class="mockup-name">Mock up pack vol. 1</span>
            <span class="mockup-anons">
              Clean lines, modern aesthetics. This mockup<br />
              brings simplicity to the forefront, highlighting<br />
              your product's essence effortlessly.
            </span>
            <span class="mockup-price" v-on:click="cartFunction"> $ 39</span>
            <span class="mockup-like" v-on:click="likeFunction(0, $event)">
              {{ likes[0].count }}
            </span>
          </p>
        </a>
        <a href="#" class="mockup-item">
          <div class="slider-mockup">
            <div class="swiper-container mockupSlider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image-3.jpg" alt="" />
                </div>
              </div>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <p class="mockup-info">
            <span class="mockup-name">Mock up pack vol. 2</span>
            <span class="mockup-anons">
              A vibrant mockup that breathes life into your product. Realistic
              details and vibrant colors that captivate the eye.
            </span>
            <span class="mockup-price" v-on:click="cartFunction"> $ 39</span>
            <span class="mockup-like" v-on:click="likeFunction(1, $event)">
              {{ likes[1].count }}
            </span>
          </p>
        </a>
        <a href="#" class="mockup-item">
          <div class="slider-mockup">
            <div class="swiper-container mockupSlider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image-3.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image-2.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/mockup-image.jpg" alt="" />
                </div>
              </div>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <p class="mockup-info">
            <span class="mockup-name">Mock up pack vol. 3</span>
            <span class="mockup-anons">
              Less is more. This mockup embraces minimalism, letting your
              product shine in its simplicity.
            </span>
            <span class="mockup-price" v-on:click="cartFunction"> $ 39</span>

            <span class="mockup-like" v-on:click="likeFunction(2, $event)">
              {{ likes[2].count }}
            </span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const sliders = document.querySelectorAll(".mockupSlider");
    sliders.forEach((slider) => {
      const swiperInstance = new Swiper(slider, {
        loop: true,
        speed: 500,
      });

      const buttons = slider.querySelectorAll(
        ".swiper-button-prev, .swiper-button-next"
      );
      buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          swiperInstance[
            button.classList.contains("swiper-button-prev")
              ? "slidePrev"
              : "slideNext"
          ]();
        });
      });
    });
  },
  data() {
    return {
      likes: [
        { count: 67, liked: false },
        { count: 213, liked: false },
        { count: 116, liked: false },
      ],
    };
  },

  methods: {
    cartFunction(event) {
      if (event) {
        event.preventDefault();
      }
    },
    likeFunction(index, event) {
      this.toggleLike(index, event);
    },
    toggleLike(index, event) {
      event.preventDefault();

      if (this.likes[index].liked) {
        this.likes[index].count--;
      } else {
        this.likes[index].count++;
      }
      this.likes[index].liked = !this.likes[index].liked;

      const element = event.target;
      if (this.likes[index].liked) {
        element.classList.add("liked");
      } else {
        element.classList.remove("liked");
      }
    },
  },
};
</script>
