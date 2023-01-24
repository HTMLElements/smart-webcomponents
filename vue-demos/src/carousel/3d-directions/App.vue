<template>
  <div class="vue-root">
    <h2>Horizontal 3D Carousel</h2>
    <smart-carousel
      id="carouselHorizontal"
      class="horizontal"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
    ></smart-carousel>
    <smart-carousel
      id="carouselHorizontal2"
      class="horizontal circle"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
    ></smart-carousel>
    <br />
    <br />
    <h2>Bottom - Top 3D Carousel</h2>
    <smart-carousel
      id="carouselBottomTop"
      class="bottom-top"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
    ></smart-carousel>
    <smart-carousel
      id="carouselBottomTop2"
      class="bottom-top circle"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
    ></smart-carousel>
    <br />
    <br />
    <h2>Top - Bottom 3D Carousel</h2>
    <smart-carousel
      id="carouselTopBottom"
      class="top-bottom"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
    ></smart-carousel>
    <smart-carousel
      id="carouselTopBottom2"
      class="top-bottom circle"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
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
        carousels = document.getElementsByTagName("smart-carousel");
      carousels[0].interval = 10000;
      carousels[1].interval = 10000;

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
      for (let i = 0; i < carousels.length; i++) {
        carousels[i].dataSource = generateDataSource(6);
      }
    });
  }
};
</script>

<style>
smart-carousel {
  width: 1000px;
  height: 450px;
  border-width: 0px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("../../../images/carousel-background-3.jpg");
}

h2 {
  text-align: center;
}
@media only screen and (max-width: 800px) {
  smart-carousel {
    max-width: 600px;
    margin-bottom: 50px;
  }
  smart-carousel .smart-carousel-item {
    width: 250px;
  }
}

@media only screen and (max-width: 500px) {
  smart-carousel {
    width: 300px;
  }
  smart-carousel .smart-carousel-item {
    width: 180px !important;
  }
}
</style>
