<template>
  <div class="vue-root">
    <smart-carousel id="carousel"></smart-carousel>
    <div id="navigationBox">
      <smart-check-box id="arrows" enable-container-click checked>Show Arrows</smart-check-box>
      <br />
      <smart-check-box id="indicators" enable-container-click checked>Show Indicators</smart-check-box>
      <br />
      <smart-check-box id="wheel" enable-container-click>Navigate via Mouse Wheel</smart-check-box>
      <br />
      <smart-check-box id="swipe" enable-container-click>Navigate via Swipe Left / Swipe Right</smart-check-box>
      <br />
      <smart-check-box id="slideShow" enable-container-click>SlideShow</smart-check-box>
      <br />
      <smart-check-box id="loop" enable-container-click>Loop</smart-check-box>
      <br />
      <hr />
      <smart-button id="playButton">Play</smart-button>
      <smart-button id="pauseButton">Pause</smart-button>
      <br />
      <br />
      <smart-button id="prevButton">Prev</smart-button>
      <smart-button id="nextButton">Next</smart-button>
      <br />
      <br />
      <smart-button id="slideToButton">Slide To</smart-button>
      <br />
      <smart-text-box id="slideToValue" placeholder="Value"></smart-text-box>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.carousel.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const basePath = "../../../images/",
        carousel = document.getElementById("carousel"),
        arrows = document.getElementById("arrows"),
        indicators = document.getElementById("indicators"),
        wheel = document.getElementById("wheel"),
        swipe = document.getElementById("swipe"),
        slideShow = document.getElementById("slideShow"),
        loop = document.getElementById("loop"),
        playButton = document.getElementById("playButton"),
        pauseButton = document.getElementById("pauseButton"),
        prevButton = document.getElementById("prevButton"),
        nextButton = document.getElementById("nextButton"),
        slideToButton = document.getElementById("slideToButton"),
        slideToValue = document.getElementById("slideToValue");
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
      arrows.addEventListener(
        "change",
        () => (carousel.hideArrows = !arrows.checked)
      );
      indicators.addEventListener(
        "change",
        () => (carousel.hideIndicators = !indicators.checked)
      );
      wheel.addEventListener("change", () => (carousel.wheel = wheel.checked));
      swipe.addEventListener("change", () => (carousel.swipe = swipe.checked));
      slideShow.addEventListener(
        "change",
        () => (carousel.slideShow = slideShow.checked)
      );
      loop.addEventListener("change", () => (carousel.loop = loop.checked));
      playButton.addEventListener("click", () => carousel.play());
      pauseButton.addEventListener("click", () => carousel.pause());
      prevButton.addEventListener("click", () => carousel.prev());
      nextButton.addEventListener("click", () => carousel.next());
      if (slideToValue) {
        slideToButton.addEventListener("click", () => {
          const value = parseInt("" + slideToValue.value) || 0;
          carousel.slideTo(value);
        });
      }
    });
  }
};
</script>

<style>
#carousel {
  margin: 16px;
}

#navigationBox {
  position: absolute;
  padding: 16px;
  box-sizing: border-box;
  right: 20px;
  top: 2%;
  width: 500px;
  height: 95%;
  border: dashed lightgray 1px;
  color: gray;
  font-size: 20px;
}
</style>
