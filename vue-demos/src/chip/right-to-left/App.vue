<template>
  <div class="vue-root">
    <smart-chip
      avatar="../../../images/phonebook/mark.jpeg"
      value="סטיבן בוקנאן"
      close-button
      right-to-left
    ></smart-chip>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
