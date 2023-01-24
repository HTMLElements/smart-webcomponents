<template>
  <div class="vue-root">
    <smart-drop-down-button id="dropDownButtonDemo" placeholder="DropDownButton">
      <h4>What is Lorem Ipsum?</h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.
    </smart-drop-down-button>
    <div class="options">
      <div class="option" id="methodButtons">
        <smart-button id="open">Open</smart-button>
        <br />
        <br />
        <smart-button id="close">Close</smart-button>
        <br />
        <br />
        <smart-button id="appendChild">Append Child</smart-button>
        <br />
        <br />
        <smart-button id="removeChild">Remove Child</smart-button>
        <br />
        <br />
        <smart-button id="clear">Clear</smart-button>
        <br />
        <br />
        <smart-button id="disabled">Enable/Disable</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let dropDownButton = document.getElementById("dropDownButtonDemo");
      document.getElementById("open").onclick = function() {
        dropDownButton.open();
      };
      document.getElementById("close").onclick = function() {
        dropDownButton.close();
      };
      document.getElementById("clear").onclick = function() {
        dropDownButton.removeAll();
      };
      document.getElementById("appendChild").onclick = function() {
        let button = document.createElement("smart-button");
        button.id = "simpleButton";
        button.innerHTML = "Button";
        dropDownButton.appendChild(button);
      };
      document.getElementById("removeChild").onclick = function() {
        let button = document.getElementById("simpleButton");
        if (button) {
          dropDownButton.removeChild(button);
        }
      };
      document.getElementById("disabled").onclick = function() {
        dropDownButton.disabled = !dropDownButton.disabled;
      };
    });
  }
};
</script>

<style>
smart-drop-down-button {
  width: 300px;
}
</style>
