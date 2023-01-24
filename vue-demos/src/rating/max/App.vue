<template>
  <div class="vue-root">
    <div class="description">
      <h2>Rating 7/10 stars.</h2>
    </div>
    <smart-rating></smart-rating>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.rating.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const rating = document.querySelector("smart-rating");
      rating.max = 10;
      rating.value = 7;
    });
  }
};
</script>

<style>
body {
}
</style>
