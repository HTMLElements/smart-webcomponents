<template>
  <div class="vue-root">
    <smart-tabs class="auto-height" selected-index="1">
      <smart-tab-item label="TAB 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vehicula
        malesuada. Suspendisse potenti. Sed a bibendum augue. Phasellus imperdiet
        posuere libero, ac iaculis odio suscipit ac. Sed quis varius lectus, a
        semper dolor. Vivamus scelerisque maximus posuere. Pellentesque varius
        tellus ipsum, ullamcorper iaculis nisl blandit et.
      </smart-tab-item>
      <smart-tab-item label="TAB 2">Lorem ipsum</smart-tab-item>
      <smart-tab-item label="TAB 3">Lorem ipsum nec molestie massa</smart-tab-item>
      <smart-tab-item label="TAB 4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum eu
        urna sed dignissim. Fusce quis arcu arcu. Integer sed tristique felis.
        Fusce sit amet magna in nibh euismod molestie. Suspendisse potenti. Nulla
        erat elit, egestas a arcu eu, accumsan tincidunt arcu. Nunc gravida dui
        leo. Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
        <br />Phasellus nec molestie massa, eget auctor eros. Nullam ante mauris, accumsan
        at luctus sit amet, condimentum non urna. Aliquam erat volutpat. Maecenas
        pellentesque tellus ac sapien tempor, vitae tristique nibh facilisis. Mauris
        id efficitur massa. Pellentesque imperdiet vestibulum magna sit amet efficitur.
        Aliquam ut metus ligula. Curabitur metus risus, commodo sed tellus non,
        aliquam varius nisi. Vestibulum tempor semper erat nec iaculis. Sed et
        vehicula elit. Ut sollicitudin orci nibh, quis iaculis eros euismod et.
        Proin odio ipsum, auctor nec venenatis ut, iaculis sit amet mi. Nam tincidunt
        vitae nibh laoreet tristique.
      </smart-tab-item>
    </smart-tabs>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-tabs.auto-height {
  width: 100%;
  height: auto;
  min-height: initial;
}

smart-tabs.auto-height smart-tab-item:not(.smart-visibility-hidden) {
  position: relative;
}
</style>
