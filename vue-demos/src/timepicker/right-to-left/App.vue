<template>
  <div class="vue-root">
    <smart-time-picker right-to-left locale="he"></smart-time-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.timepicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-time-picker {
  width: 300px;
}
@media only screen and (max-width: 700px) {
  smart-time-picker {
    width: 100%;
  }
}
</style>
