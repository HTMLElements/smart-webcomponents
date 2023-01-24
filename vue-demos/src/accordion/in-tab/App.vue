<template>
  <div class="vue-root">
    <smart-tabs id="tabs" selected-index="0">
      <smart-tab-item label="Accordion 1">
        <smart-accordion expand-mode="single">
          <smart-accordion-item label="Item 0">Content</smart-accordion-item>
          <smart-accordion-item label="Item 1">Content</smart-accordion-item>
          <smart-accordion-item label="Item 3">Content</smart-accordion-item>
        </smart-accordion>
      </smart-tab-item>
      <smart-tab-item label="Accordion 2">
        <smart-accordion expand-mode="single">
          <smart-accordion-item label="Item 0">Content</smart-accordion-item>
          <smart-accordion-item label="Item 1">Content</smart-accordion-item>
          <smart-accordion-item label="Item 3">Content</smart-accordion-item>
        </smart-accordion>
      </smart-tab-item>
      <smart-tab-item label="Accordion 3">
        <smart-accordion expand-mode="single">
          <smart-accordion-item label="Item 0">Content</smart-accordion-item>
          <smart-accordion-item label="Item 1">Content</smart-accordion-item>
          <smart-accordion-item label="Item 3">Content</smart-accordion-item>
        </smart-accordion>
      </smart-tab-item>
    </smart-tabs>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const accordionItems = document.querySelectorAll("smart-accordion-item");
      accordionItems[0].index = 0;
      accordionItems[1].index = 1;
      accordionItems[2].index = 2;

      accordionItems[3].index = 0;
      accordionItems[4].index = 1;
      accordionItems[5].index = 2;

      accordionItems[6].index = 0;
      accordionItems[7].index = 1;
      accordionItems[8].index = 2;
    });
  }
};
</script>

<style>
smart-accordion {
  width: 100%;
  height: 80%;
}

#tabs {
  width: 100%;
  height: 350px;
}
@media only screen and (max-width: 500px) {
  #tabs {
    max-width: 350px;
  }
}
</style>
