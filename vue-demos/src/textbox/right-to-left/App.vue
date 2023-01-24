<template>
  <div class="vue-root">
    <smart-text-box select-all-on-focus placeholder="בבקשה היכנס" label="תיבת טקסט"></smart-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-text-box {
  margin: 20px;
}
</style>
