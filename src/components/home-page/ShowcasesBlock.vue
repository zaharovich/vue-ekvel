<script setup>
import "@/assets/style/home-page/showcases.scss";
</script>
<template>
  <div class="showcases">
    <div class="container">
      <a href="#" class="primary-button">Showcases<i></i></a>

      <div class="showcases-container">
        <a href="#" class="case-link template-1">
          <div class="case-img">
            <img src="@/assets/img/favbet.jpg" />
            <span class="arrow"></span>
            <div class="case-info">
              <p>Favbet</p>
              <div class="categoryes">
                <span>Category</span>
                <span>Category</span>
                <span>Category</span>
              </div>
            </div>
          </div>
          <svg>
            <clipPath id="mask">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 37C0 16.5655 16.5655 0 37 0H619C639.435 0 656 16.5655 656 37V136.673C656 146.419 660.182 155.696 667.485 162.15L808.745 286.984C820.988 297.804 828 313.357 828 329.696V587C828 618.48 802.48 644 771 644H37C16.5654 644 0 627.435 0 607V37Z"
                fill="white"
                fill-opacity="0.15"
              />
            </clipPath>
          </svg>
        </a>

        <div class="top-right">
          <a href="#" class="case-link template-2">
            <div class="case-img">
              <img src="@/assets/img/Konor.jpg" />
              <span class="arrow"></span>
              <div class="case-info">
                <p>Parimatch</p>
                <div class="categoryes">
                  <span>Category</span>
                  <span>Category</span>
                  <span>Category</span>
                </div>
              </div>
            </div>
            <svg>
              <clipPath id="mask2">
                <path
                  d="M0 37C0 16.5655 16.5655 0 37 0H619C639.435 0 656 16.5655 656 37V136V235C656 255.435 639.435 272 619 272H177.593C163.68 272 150.248 266.911 139.827 257.693L12.4848 145.044C4.5458 138.021 0 127.931 0 117.331V37Z"
                />
              </clipPath>
            </svg>
          </a>
        </div>

        <a href="#" class="case-link template-3">
          <div class="case-img">
            <img src="@/assets/img/andy.jpg" />
            <span class="arrow"></span>
            <div class="case-info">
              <p>Andy Kutson</p>
              <div class="categoryes">
                <span>Category</span>
                <span>Category</span>
                <span>Category</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
