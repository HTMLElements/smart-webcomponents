<template>
  <div class="vue-root">
    <h3>מתג אופקי מימין לשמאל</h3>
    <smart-switch-button right-to-left></smart-switch-button>
    <h3>מתג אנכי מימין לשמאל</h3>
    <smart-switch-button orientation="vertical" right-to-left></smart-switch-button>
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
</style>
