<template>
  <div class="vue-root">
    <h2>3d Carousel Square Style</h2>
    <smart-carousel
      id="carouselSquare"
      auto-play
      slide-show
      loop
      hide-indicators
      keyboard
      display-mode="3d"
    ></smart-carousel>
    <h2>3d Carousel Circle Style</h2>
    <smart-carousel
      id="carouselCircle"
      class="circle"
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
        carouselSquare = document.getElementById("carouselSquare"),
        carouselCircle = document.getElementById("carouselCircle");
      carouselSquare.interval = 10000;
      carouselCircle.interval = 10000;
      carouselSquare.dataSource = generateDataSource(7);
      carouselCircle.dataSource = generateDataSource(7);

      function generateDataSource(items) {
        let dataSource = Array(items).fill({});
        dataSource.forEach(
          (element, index) =>
            (dataSource[index] = {
              image: `${basePath}carousel-square-${index + 1}.jpg`
            })
        );
        return dataSource;
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
  background-color: #d3d3d369;
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
