<template>
  <div class="vue-root">
    <smart-led id="led" false-content="OFF" indeterminate-content="||" true-content="ON"></smart-led>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.led.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.getElementById("led").checked = null;
    });
  }
};
</script>

<style>
#led {
  width: 100px;
  height: 100px;
  font-size: 30px;
}
</style>
