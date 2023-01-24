<template>
  <div class="vue-root">
    <smart-switch-button class="fluid-theme"></smart-switch-button>
    <smart-switch-button class="fluid-theme" inverted></smart-switch-button>
    <smart-switch-button class="fluid-theme" disabled></smart-switch-button>
    <smart-switch-button class="fluid-theme" inverted disabled></smart-switch-button>
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
.fluid-theme {
  width: 100%;
}
</style>
