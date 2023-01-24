<template>
  <div class="vue-root">
    <smart-drop-down-list grouped sorted selection-mode="oneOrManyExtended"></smart-drop-down-list>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.querySelector("smart-drop-down-list").dataSource = [
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
      document
        .querySelector("smart-drop-down-list")
        .addEventListener("change", function(event) {
          console.log(event.detail);
        });
    });
  }
};
</script>

<style>
smart-drop-down-list {
  min-height: 35px;
  height: auto;
  width: 300px;
}
</style>
