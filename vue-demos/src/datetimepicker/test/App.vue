<template>
  <div class="vue-root">
    <div class="timeContainer"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
@media only screen and (max-width: 500px) {
  .smart-drop-down.smart-date-time-drop-down {
    left: 70%;
  }
}
</style>
