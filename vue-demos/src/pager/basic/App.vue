<template>
  <div class="vue-root">
    <smart-pager
      show-prev-next-navigation-buttons
      show-first-last-navigation-buttons
      show-page-index-selectors
      pages-count="5"
      page-index-selectors="5"
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
