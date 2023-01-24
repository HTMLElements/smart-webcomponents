<template>
  <div class="vue-root">
    <smart-input
      placeholder="בבקשה תבחר"
      drop-down-button-position="left"
      right-to-left
      data-source="['פריט 1', 'פריט 2', 'פריט 3', 'פריט 4']"
    ></smart-input>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.input.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
