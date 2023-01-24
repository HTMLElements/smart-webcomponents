<template>
  <div class="vue-root">
    mechanicalAction: 'switchWhileDragging'
    <em>(default)</em>
    <smart-slider
      id="smartSlider3"
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="10"
      scale-position="none"
      mechanical-action="switchWhileDragging"
    ></smart-slider>Value:
    <span id="smartSlider3Value">10.00</span>
    <br />
    <br />mechanicalAction: 'switchUntilReleased'
    <smart-slider
      id="smartSlider1"
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="20"
      scale-position="none"
      mechanical-action="switchUntilReleased"
    ></smart-slider>Value:
    <span id="smartSlider1Value">20.00</span>
    <br />
    <br />mechanicalAction: 'switchWhenReleased'
    <smart-slider
      id="smartSlider2"
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="30"
      scale-position="none"
      mechanical-action="switchWhenReleased"
    ></smart-slider>Value:
    <span id="smartSlider2Value">30.00</span>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sliders = ["smartSlider1", "smartSlider2", "smartSlider3"];
      for (let i = 0; i < sliders.length; i++) {
        const slider = document.getElementById(sliders[i]);
        slider.addEventListener("change", function(event) {
          const value = event.detail.value;
          const target = event.target;
          document.getElementById(target.id + "Value").innerHTML = parseFloat(
            value
          ).toFixed(2);
        });
      }
    });
  }
};
</script>

<style>
#smartSlider1,
#smartSlider2,
#smartSlider3 {
  width: 500px;
  height: 40px;
}
</style>
