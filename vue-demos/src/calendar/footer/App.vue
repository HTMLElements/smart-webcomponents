<template>
  <div class="vue-root">
    <smart-calendar id="customFooter"></smart-calendar>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar");
      calendar.viewSections = ["title", "header", "footer"];

      calendar.whenRendered(() => {
        const template = document.createElement("template");

        template.id = "templateWithButtons";
        template.innerHTML = `<div id="buttonContainer">
                    <smart-button class="flat primary">CANCEL</smart-button>
                    <smart-button class="flat primary">OK</smart-button>
                </div>`;

        document.body.appendChild(template);
        calendar.footerTemplate = "templateWithButtons";
      });
    });
  }
};
</script>

<style>
</style>
