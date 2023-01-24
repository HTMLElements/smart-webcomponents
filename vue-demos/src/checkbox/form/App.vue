<template>
  <div class="vue-root">
    <form action name="testPost" method="get">
      <smart-check-box
        id="checkBox"
        name="checkBox"
        value="checkBoxValue"
        enable-container-click
      >Check Box</smart-check-box>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
