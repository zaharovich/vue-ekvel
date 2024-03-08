<script setup>
import "@/assets/style/footer.scss";
</script>
<template>
  <div class="footer">
    <div class="footer-mask">
      <div class="container">
        <div class="top">
          <a href="#"><img src="@/assets/img/Logo.svg" /></a>
          <span @click="scrollTop" class="top-arrow"></span>
        </div>
        <div class="row">
          <div class="left">
            <p>Redefine the way <br />you approach design</p>
            <div class="social">
              <a href="#" class="instagram"></a>
              <a href="#" class="linkedin"></a>
              <a href="#" class="tiktok"></a>
              <a href="#" class="telegram"></a>
              <a href="#" class="phone"></a>
              <a href="mailto:ekvel@gmail.io" class="mail"></a>
            </div>
          </div>
          <div class="right">
            <ul>
              <li>General</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Showcases</a></li>
            </ul>
            <ul>
              <li>Product</li>
              <li><a href="#">Mockups</a></li>
              <li><a href="#">Courses</a></li>
            </ul>
            <ul>
              <li>Company</li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
          <div class="bottom">
            <p>© 2023 EKVEL</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTop() {
      const duration = 1200; // Время прокрутки
      const startTime = performance.now();
      const startScrollY = window.scrollY;
      const endScrollY = 0;

      const scrollStep = (timestamp) => {
        const elapsed = timestamp - startTime;
        window.scrollTo(
          0,
          startScrollY +
            (endScrollY - startScrollY) * Math.pow(elapsed / duration, 3)
        );
        if (elapsed < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      };

      window.requestAnimationFrame(scrollStep);
    },
  },
};
</script>
