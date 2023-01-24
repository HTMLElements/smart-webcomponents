<template>
  <div class="vue-root">
    <smart-pager
      show-navigation-button-labels
      show-prev-next-navigation-buttons
      show-first-last-navigation-buttons
      show-page-index-selectors
      pages-count="5"
      page-index-selectors="5"
      right-to-left
      locale="he"
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
      const pager = document.querySelector("smart-pager"),
        messages = Object.assign({}, pager.messages);
      messages["he"] = {
        firstButton: "ראשון",
        lastButton: "אחרון",
        previousButton: "קודם",
        nextButton: "הבא",
        navigateToLabel: "לך ל:",
        pageSizeLabel: "הצג:",
        navigateToInputPlaceholder: "",
        ellipsis: "...",
        summaryString: "של",
        summaryPrefix: "של",
        summarySuffix: ""
      };
      pager.messages = messages;
    });
  }
};
</script>

<style>
</style>
