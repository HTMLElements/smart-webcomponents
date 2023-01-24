<template>
  <div class="vue-root">
    <smart-text-box></smart-text-box>
    <div class="options">
      <div class="caption">Settings</div>
      <smart-button>Press to Change Value</smart-button>
      <br />
      <br />
      <label>Event log:</label>
      <div id="log"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const textBox = document.querySelector("smart-text-box"),
        button = document.querySelector("smart-button"),
        label = ["One", "Two", "Three", "Four", "Five"];
      textBox.addEventListener("change", function(event) {
        document.getElementById("log").innerHTML +=
          "<br>" +
          "<b>" +
          event.type +
          "</b>" +
          " event fired with details: " +
          "newValue: <b>" +
          event.detail.newValue +
          "</b>" +
          ", oldValue: <b>" +
          event.detail.oldValue +
          "</b>";
      });
      button.addEventListener("click", function() {
        const oldValue = textBox.value;
        textBox.value = label[Math.floor(Math.random() * Math.floor(5))];
        //Fire a 'change' event with details
        textBox.$.fireEvent("change", {
          newValue: textBox.value,
          oldValue: oldValue
        });
      });
    });
  }
};
</script>

<style>
</style>
