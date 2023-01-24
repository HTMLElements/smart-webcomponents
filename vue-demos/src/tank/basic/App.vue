<template>
  <div class="vue-root">
    <smart-tank id="tank" max="100" value="22" interval="10"></smart-tank>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-tank {
  width: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
