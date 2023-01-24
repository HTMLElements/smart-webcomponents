<template>
  <div class="vue-root">
    Round and Square LED shapes
    <br />
    <br />
    <smart-led></smart-led>
    <smart-led shape="square"></smart-led>- checked=false;
    <br />
    <smart-led id="nullLed"></smart-led>
    <smart-led id="nullSquareLed" shape="square"></smart-led>- checked='null';
    <br />
    <smart-led checked></smart-led>
    <smart-led shape="square" checked></smart-led>- checked=true;
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
      document.getElementById("nullLed").checked = null;
      document.getElementById("nullSquareLed").checked = null;
    });
  }
};
</script>

<style>
</style>
