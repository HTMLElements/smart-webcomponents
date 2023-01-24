<template>
  <div class="vue-root">
    <smart-carousel></smart-carousel>
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
        carousel = document.querySelector("smart-carousel");
      carousel.dataSource = generateDataSource(6);

      function generateDataSource(items) {
        const dataSource = Array(items).fill({});
        dataSource.forEach(
          (element, index) =>
            (dataSource[index] = {
              image: `${basePath}carousel-medium-${index + 1}.jpg`,
              label: "Slide " + index,
              content: "Content " + index
            })
        );
        return dataSource;
      }
    });
  }
};
</script>

<style>
smart-carousel .smart-carousel-item .smart-carousel-item-content,
smart-carousel .smart-carousel-item .smart-carousel-item-label {
  font-size: 48px;
  color: #fafafa;
}

@media screen and (max-width: 700px) {
  smart-carousel {
    width: 100%;
  }
}
</style>
