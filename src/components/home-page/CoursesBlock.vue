<script setup>
import "@/assets/style/home-page/courses.scss";
</script>
<template>
  <div class="courses">
    <div class="container">
      <a href="#" class="primary-button">Courses<i></i></a>
      <div class="course-iteam">
        <div class="mask-area">
          <span class="topper">Coming Soon</span>
          <h2>How to become <br />a graphic designer</h2>
          <p class="description">
            6 video lessons to start designing. You will learn how to build best
            brand identity. Video lessons to start designing.
          </p>
          <a href="#" class="secondary-button">Сontact Me</a>
          <svg>
            <clipPath id="courseMask">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M1324 0H20C8.95431 0 0 8.95432 0 20V496C0 507.046 8.95431 516 20 516H767.494C774.072 516 780.229 512.766 783.962 507.349L823.038 450.651C826.771 445.234 832.928 442 839.506 442H1324C1335.05 442 1344 433.046 1344 422V20C1344 8.95431 1335.05 0 1324 0Z"
                fill="#D9D9D9"
              />
            </clipPath>
          </svg>
        </div>
        <div class="timer">
          <p>{{ days }} <span>d</span></p>
          <p>{{ hours }} <span>h</span></p>
          <p>{{ minutes }} <span>m</span></p>
          <p>{{ seconds }} <span>s</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      targetDate: new Date("2024-03-10"), // когда курс
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
    };
  },
  mounted() {
    this.updateTimer();
    this.timer = setInterval(this.updateTimer, 1000);
  },
  methods: {
    updateTimer() {
      const currentTime = new Date().getTime();
      const timeDifference = this.targetDate - currentTime;

      if (timeDifference > 0) {
        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      } else {
        clearInterval(this.timer);

        console.log("бабах");
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
