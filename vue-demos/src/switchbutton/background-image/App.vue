<template>
  <div class="vue-root">
    <smart-switch-button>
      <span class="smart-true-content">On</span>
      <span class="smart-false-content">Off</span>
    </smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-switch-button {
  --smart-switch-button-thumb-size: 25px;
  width: 60px;
  height: 27px;
  /* background-image: url("../../../images/switch-button-off.png"); */
  background-repeat: no-repeat;
  /*border-color:transparent;*/
  border-radius: 12px;
  background-position: center;
  background-size: 110% 110%;
}

smart-switch-button[checked] {
  /* background-image: url("../../../images/switch-button-on.png"); */
  border-color: lightblue;
}

smart-switch-button .smart-true-content-container,
smart-switch-button .smart-false-content-container {
  background-color: transparent;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
}

smart-switch-button .smart-true-content-container,
smart-switch-button .smart-false-content-container {
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: darkgray;
}

smart-switch-button .smart-true-content-container {
  color: white;
}

smart-switch-button .smart-thumb,
smart-switch-button .smart-thumb.dragged,
smart-switch-button[checked] .smart-thumb {
  border-radius: 12px;
  background-color: white;
}
</style>
