<template>
  <div class="vue-root">
    <smart-pager
      show-navigation-button-labels
      show-prev-next-navigation-buttons
      show-first-last-navigation-buttons
      show-page-index-selectors
      pages-count="300"
      page-index-selectors="10"
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
    onMounted(() => {
      const pager = document.querySelector("smart-pager");
      pager.messages = {
        en: {
          firstButton: "Premier",
          lastButton: "Dernier",
          previousButton: "Précédent",
          nextButton: "Prochain"
        }
      };
    });
  }
};
</script>

<style>
</style>
