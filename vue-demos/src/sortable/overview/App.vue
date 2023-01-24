<template>
  <div class="vue-root">
    <em>Drag and drop to change list order</em>
    <smart-sortable id="sortable" items="li">
      <ol>
        <li>Strawberries</li>
        <li>Mango</li>
        <li>Watermelon</li>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Grapes</li>
        <li>Pineapples</li>
        <li>Oranges</li>
        <li>Raspberries</li>
        <li>Peaches</li>
        <li>Cherries</li>
        <li>Kiwi</li>
        <li>Blueberries</li>
        <li>Pomegranate</li>
        <li>Lemons</li>
      </ol>
    </smart-sortable>
    <div class="options">
      <smart-check-box id="handle">
        <code>drag-mode="handle"</code>
      </smart-check-box>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.sortable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sortable = document.getElementById("sortable");
      document.getElementById("handle").addEventListener("change", function() {
        if (event.detail.value) {
          sortable.dragMode = "handle";
          sortable.handleVisibility = "visible";
        } else {
          sortable.dragMode = "item";
        }
      });
    });
  }
};
</script>

<style>
smart-sortable {
  width: 300px;
}

ol {
  background-color: rgba(var(--smart-primary-rgb), 0.6);
  padding: 30px;
}

ol li {
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  color: var(--smart-primary-color);
  font-family: var(--smart-font-family);
  font-size: 20px;
}
</style>
