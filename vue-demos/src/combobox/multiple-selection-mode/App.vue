<template>
  <div class="vue-root">
    <div class="demo-description">Hold Ctrl or Shift key while selecting items</div>
    <smart-combo-box grouped sorted selection-mode="oneOrManyExtended"></smart-combo-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.combobox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const comboBox = document.querySelector("smart-combo-box");
      comboBox.dataSource = [
        {
          label: "Andrew",
          value: 1,
          group: "A"
        },
        {
          label: "Natalia",
          value: 5,
          group: "B"
        },
        {
          label: "Michael",
          value: 4,
          group: "B"
        },
        {
          label: "Angel",
          value: 2,
          group: "A"
        },
        {
          label: "Hristo",
          value: 6,
          group: "C"
        },
        {
          label: "Peter",
          value: 13,
          group: "A"
        },
        {
          label: "Albert",
          value: 34,
          group: "A"
        },
        {
          label: "Boyko",
          value: 32,
          group: "A"
        },
        {
          label: "Dimitar",
          value: 113,
          group: "B"
        },
        {
          label: "George",
          value: 31,
          group: "C"
        }
      ];
    });
  }
};
</script>

<style>
</style>
