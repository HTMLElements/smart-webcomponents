<template>
  <div class="vue-root">
    <smart-drop-down-button placeholder="Button">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </smart-drop-down-button>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <div>Open Mode:</div>
        <smart-radio-button checked>Default</smart-radio-button>
        <br />
        <smart-radio-button>DropDownButton</smart-radio-button>
      </div>
      <div class="option" id="eventLog">
        <h4>Event log:</h4>
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const radioButtons = document.getElementsByTagName("smart-radio-button"),
        dropDownButton = document.querySelector("smart-drop-down-button");
      radioButtons[0].addEventListener("change", function() {
        dropDownButton.dropDownOpenMode = "default";
        dropDownButton.placeholder = "Button";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownButton.dropDownOpenMode = "dropDownButton";
        dropDownButton.placeholder = "Action";
      });
      dropDownButton.addEventListener("actionButtonClick", function(event) {
        document.getElementById("log").innerHTML += event.type + "<br />";
      });
      dropDownButton.addEventListener("dropDownButtonClick", function(event) {
        document.getElementById("log").innerHTML += event.type + "<br />";
      });
      dropDownButton.addEventListener("opening", function(event) {
        document.getElementById("log").innerHTML += event.type + "<br />";
      });
      dropDownButton.addEventListener("closing", function(event) {
        document.getElementById("log").innerHTML += event.type + "<br />";
      });
    });
  }
};
</script>

<style>
smart-drop-down-button {
  width: 250px;
}
</style>
