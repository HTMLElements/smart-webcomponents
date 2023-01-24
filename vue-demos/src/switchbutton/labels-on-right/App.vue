<template>
  <div class="vue-root">
    <smart-switch-button class="labels-on-right"></smart-switch-button>
    <br />
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
smart-switch-button.labels-on-right:after {
  content: "";
  color: gray;
  font-size: 22px;
  font-weight: 800;
  position: absolute;
  display: inline-block !important;
  height: var(--main-switch-mark-size);
  font-family: Impact;
  left: 65px;
  top: 5px;
}

smart-switch-button.labels-on-right:after {
  content: "OFF";
}

smart-switch-button.labels-on-right[checked]:after {
  content: "ON";
}
</style>
