<template>
  <div class="vue-root">
    <smart-carousel id="carousel" class="slide" auto-play slide-show loop></smart-carousel>
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
      template.id = "itemTemplate";
      template.innerHTML = `
        <h3 class="template-header">{{label}}</h3>
      <p class="template-content">{{content}}</p>
      <img class="template-image" src="{{image}}" />`;
      document.body.appendChild(template);

      const basePath = "../../../images/",
        carousel = document.getElementById("carousel");
      carousel.itemTemplate = "itemTemplate";

      carousel.dataSource = [
        {
          label: "Mauris eget nisi ipsum",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisi ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
per inceptos himenaeos.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus.
In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
          image: `${basePath}carousel-square-1.jpg`
        },
        {
          label: "Ut faucibus commodo velit",
          content: `Duis non viverra nisl, at varius arcu. Ut faucibus commodo velit id blandit. In diam nisi, congue in leo quis, sodales pharetra elit. Sed eu facilisis lectus.
In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus.
In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
          image: `${basePath}carousel-square-2.jpg`
        },
        {
          label: "Donec tincidunt",
          content: `Nulla imperdiet eleifend laoreet. Fusce tincidunt ligula nisi, ac lobortis neque aliquet ac. Donec tincidunt, justo et viverra feugiat, metus neque efficitur arcu,
vel condimentum diam dolor ut mi.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Donec tincidunt, justo et viverra feugiat, metus neque efficitur arcu,
vel condimentum diam dolor ut mi.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
          image: `${basePath}carousel-square-3.jpg`
        }
      ];
    });
  }
};
</script>

<style>
smart-carousel {
  width: 1000px;
  height: 450px;
  border-color: transparent;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #d3d3d369;
}

smart-carousel:focus,
smart-carousel:active {
  border-color: transparent;
}

smart-carousel .smart-carousel-html-content {
  padding-left: 30px;
  padding-right: 20px;
}

.template-image,
.template-header,
.template-content {
  position: absolute;
}

.template-image {
  right: 50px;
  top: 25px;
}

.template-header,
.template-content {
  left: 55px;
  color: gray;
}

.template-header {
  top: 60px;
}

.template-content {
  top: 120px;
  width: 400px;
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
  smart-carousel .smart-carousel-item {
    width: 100%;
  }

  .template-header {
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    position: static;
    width: 100%;
  }
  .template-image {
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    position: static;
    width: 50%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5px;
  }
  .template-content {
    position: static;
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  smart-carousel {
    width: 300px;
  }
}
</style>
