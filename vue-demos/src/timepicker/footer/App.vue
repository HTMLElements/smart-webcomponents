<template>
  <div class="vue-root">
    <smart-time-picker footer></smart-time-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.timepicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const templateWithButtons = document.createElement("template");
      templateWithButtons.id = "templateWithButtons";
      templateWithButtons.innerHTML = `<div id="buttonContainer">
        <smart-button class="flat primary">CANCEL</smart-button>
        <smart-button class="flat primary">OK</smart-button>
      </div>`;
      document.body.appendChild(templateWithButtons);

      document.querySelector("smart-time-picker").footerTemplate =
        "templateWithButtons";
    });
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
#buttonContainer {
  float: right;
}
</style>
