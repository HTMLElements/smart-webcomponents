<template>
  <div class="vue-root">
    <div class="demo-description">DateTimePicker Web Component with enabled Right to Left Layout</div>
    <smart-date-time-picker
      drop-down-position="bottom"
      calendar-button
      drop-down-display-mode="default"
      right-to-left
      locale="he"
    ></smart-date-time-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dateTimePicker = document.querySelector("smart-date-time-picker"),
        messages = Object.assign({}, dateTimePicker.messages);
      messages["he"] = {
        now: "עכשיו",
        dateTabLabel: "תאריך",
        timeTabLabel: "זמן"
      };
      dateTimePicker.messages = messages;
      dateTimePicker.placeholder = "הזן תאריך";
    });
  }
};
</script>

<style>
body,
html {
  min-height: 1500px;
}
smart-date-time-picker {
  position: relative;
  left: 0px;
  width: 305px;
}
</style>
