<template>
  <div class="vue-root">
    <smart-button id="button">Click Me</smart-button>
    <br />
    <br />
    <div id="log">Disabled: false</div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const button = document.getElementById("button");
      button.addEventListener("click", clickMe);

      function clickMe() {
        const button = document.querySelector("smart-button");
        button.disabled = true;
        const attributeName = button.getAttribute("disabled");
        document.getElementById("log").innerHTML = "Disabled: " + attributeName;
      }
    });
  }
};
</script>

<style>
</style>
