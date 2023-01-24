<template>
  <div class="vue-root">
    <smart-list-box allow-drag allow-drop>
      <smart-list-item selected value="volvo">Volvo</smart-list-item>
      <smart-list-item value="saab">Saab</smart-list-item>
      <smart-list-item value="saab">Scania</smart-list-item>
      <smart-list-item value="mercedes">Mercedes</smart-list-item>
      <smart-list-item value="vw">VW</smart-list-item>
      <smart-list-item value="audi">Audi</smart-list-item>
      <smart-list-item value="porsche">Porsche</smart-list-item>
      <smart-list-item value="mazda">Mazda</smart-list-item>
      <smart-list-item value="honda">Honda</smart-list-item>
      <smart-list-item value="infinity">Infinity</smart-list-item>
      <smart-list-item value="mitsubishi">Mitsubishi</smart-list-item>
      <smart-list-item value="toyota">Toyota</smart-list-item>
    </smart-list-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-list-box {
  width: 300px;
  height: 500px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
</style>
