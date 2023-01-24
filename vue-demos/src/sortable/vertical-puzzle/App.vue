<template>
  <div class="vue-root">
    <em>Drag and drop to solve the puzzle</em>
    <br />
    <br />
    <smart-sortable>
      <img src="../../../images/row-2-col-1.jpg" />
      <img src="../../../images/row-4-col-1.jpg" />
      <img src="../../../images/row-3-col-1.jpg" />
      <img src="../../../images/row-1-col-1.jpg" />
    </smart-sortable>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.sortable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
img {
  width: 500px;
  height: 70px;
}
</style>
