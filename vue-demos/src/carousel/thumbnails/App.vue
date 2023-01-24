<template>
  <div class="vue-root">
    <smart-carousel id="carousel" auto-play slide-show loop></smart-carousel>
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
      const template = document.createElement("template");
      template.id = "thumb";
      template.innerHTML = `<img src="{{thumb}}" />`;
      document.body.appendChild(template);

      const basePath = "../../../images/",
        carousel = document.getElementById("carousel");
      carousel.indicatorTemplate = "thumb";
      carousel.dataSource = generateDataSource(7);

      function generateDataSource(items) {
        let dataSource = Array(items).fill({});
        dataSource.forEach(
          (element, index) =>
            (dataSource[index] = {
              image: `${basePath}carousel-large-${index + 1}.jpg`,
              thumb: `${basePath}carousel-xs-${index + 1}.jpg`
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
  height: 500px;
  border-color: transparent;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

smart-carousel .smart-carousel-item .smart-carousel-item-container {
  background-position: initial;
  background-size: 100% 90%;
  background-repeat: no-repeat;
}

smart-carousel:focus,
smart-carousel:active {
  border-color: transparent;
}

smart-carousel .smart-arrow:after {
  color: white;
}

smart-carousel .smart-indicator {
  width: 60px;
  height: 30px;
}

smart-carousel smart-repeat-button {
  display: none !important;
}

smart-carousel {
  --smart-background-color: transparent;
  --smart-active-background-color: transparent;
  --smart-hover-background-color: transparent;
  --smart-focus-background-color: transparent;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
@media only screen and (max-width: 800px) {
  smart-carousel {
    width: 100%;
    height: 100%;
  }
  smart-carousel .smart-indicator {
    width: 30px;
    height: 30px;
  }
  smart-carousel .smart-indicator img {
    width: 30px;
    height: 30px;
  }

  smart-carousel .smart-carousel-item {
    width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  smart-carousel {
    width: 300px;
  }
}
</style>
