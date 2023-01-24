<template>
  <div class="vue-root">
    <h1>Progress Bar with Barber Shop Style</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>
      <smart-progress-bar class="smart-progress-bar-horizontal barber-shop-effect"></smart-progress-bar>
      <smart-progress-bar
        orientation="vertical"
        class="smart-progress-bar-vertical barber-shop-effect"
      ></smart-progress-bar>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.progressbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.querySelectorAll("smart-progress-bar")[0].value = 50;
      document.querySelectorAll("smart-progress-bar")[1].value = 50;
    });
  }
};
</script>

<style>
.smart-progress-bar-horizontal {
  margin-bottom: 20px;
}

div {
  display: inline-block;
}

h2 {
  margin-top: 40px;
}
</style>
