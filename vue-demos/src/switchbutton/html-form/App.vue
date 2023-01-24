<template>
  <div class="vue-root">
    <form action name="testPost" method="get">
      <smart-switch-button id="switchButton" name="switchButton" value="switchButtonValue"></smart-switch-button>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
