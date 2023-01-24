<template>
  <div class="vue-root">
    <smart-carousel
      id="carousel"
      class="vertical circle"
      auto-play
      slide-show
      loop
      keyboard
      display-mode="3d"
      interval="10000"
    ></smart-carousel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.carousel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const basePath = "../../../images/",
        carousel = document.getElementById("carousel");
      carousel.dataSource = generateDataSource(7);

      function generateDataSource(items) {
        let dataSource = [];
        for (let i = 0; i < items; i++) {
          const item = {
            image: `${basePath}carousel-square-${i + 1}.jpg`
          };
          dataSource.push(item);
        }
        return dataSource;
      }
    });
  }
};
</script>

<style>
body,
.vue-root {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
}

smart-carousel {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-image: url("../../../images/carousel-background-1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  border-width: 0px;
}

smart-carousel .smart-indicators-container {
  display: flex;
  flex-direction: column;
  bottom: auto;
  left: auto;
  right: 50px;
  top: 30px;
}
</style>
