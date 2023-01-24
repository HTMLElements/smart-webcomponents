<template>
  <div class="vue-root">
    <smart-accordion expand-mode="singleFitHeight" id="accordion">
      <smart-accordion-item label="Item 0">Content</smart-accordion-item>
      <smart-accordion-item label="Item 1">Content</smart-accordion-item>
      <smart-accordion-item label="Item 3">Content</smart-accordion-item>
      <smart-accordion-item label="Item 2">Content</smart-accordion-item>
      <smart-accordion-item label="Item 4">Content</smart-accordion-item>
    </smart-accordion>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <smart-drop-down-list id="expandMode" selection-mode="one" selected-indexes="[1]">
          <smart-list-item value="single">Single</smart-list-item>
          <smart-list-item value="singleFitHeight">SingleFitHeight</smart-list-item>
          <smart-list-item value="multiple">Multiple</smart-list-item>
          <smart-list-item value="toggle">Toggle</smart-list-item>
          <smart-list-item value="none">None</smart-list-item>
        </smart-drop-down-list>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const accordion = document.getElementById("accordion"),
        expandModeDropDown = document.getElementById("expandMode");
      if (expandModeDropDown) {
        expandModeDropDown.addEventListener("change", function(event) {
          accordion.expandMode = event.detail.value;
        });
      }
    });
  }
};
</script>

<style>
smart-accordion {
  width: 250px;
  height: 500px;
}
</style>
