<template>
  <div class="vue-root">
    <p>
      Click on item, press Ctrl or Shift key and select another item for multiple
      selection.
    </p>
    <smart-list-box id="list"></smart-list-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const list = document.getElementById("list"),
        data = [
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
            value: 3,
            group: "A"
          },
          {
            label: "Albert",
            value: 3,
            group: "A"
          },
          {
            label: "Boyko",
            value: 3,
            group: "A"
          },
          {
            label: "Dimitar",
            value: 3,
            group: "B"
          },
          {
            label: "George",
            value: 3,
            group: "C"
          }
        ];
      list.dataSource = data;
    });
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
