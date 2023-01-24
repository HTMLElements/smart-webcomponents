<template>
  <div class="vue-root">
    <smart-pager
      show-page-size-selector
      show-navigation-input
      show-prev-next-navigation-buttons
      pages-count="10"
      show-summary
    ></smart-pager>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.pager.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
