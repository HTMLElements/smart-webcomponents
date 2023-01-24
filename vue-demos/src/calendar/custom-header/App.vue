<template>
  <div class="vue-root">
    <smart-calendar
      class="custom-header"
      selection-mode="one"
      selected-dates="['2017-08-17']"
    ></smart-calendar>
  </div>
</template>


<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar");
      calendar.whenRendered(() => {
        const template = document.createElement("template");

        template.id = "headerTemplate";
        template.innerHTML =
          '<div class="smart-date-element"><span>{{date}}</span></div>';

        document.body.appendChild(template);
        calendar.headerTemplate = "headerTemplate";
      });
    });
  }
};
</script>

<style>
</style>
