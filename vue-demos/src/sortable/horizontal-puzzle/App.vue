<template>
  <div class="vue-root">
    <em>Drag and drop to solve the puzzle</em>
    <br />
    <br />
    <smart-sortable mode="horizontal">
      <img src="../../../images/squirrel-row-1-col-5.jpg" />
      <img src="../../../images/squirrel-row-1-col-1.jpg" />
      <img src="../../../images/squirrel-row-1-col-4.jpg" />
      <img src="../../../images/squirrel-row-1-col-3.jpg" />
      <img src="../../../images/squirrel-row-1-col-2.jpg" />
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
  width: 160px;
}
@media only screen and (max-width: 500px) {
  img {
    width: 50px;
  }
}
</style>
