<template>
  <div class="vue-root">
    <div>
      <h3>Resize Mode:</h3>
      <smart-radio-button>None</smart-radio-button>
      <smart-radio-button checked>Vertical</smart-radio-button>
      <smart-radio-button>Horizontal</smart-radio-button>
      <smart-radio-button>Both</smart-radio-button>
    </div>
    <br />
    <div>
      <h3>DropDown position:</h3>
      <smart-radio-button checked>Bottom</smart-radio-button>
      <smart-radio-button>Top</smart-radio-button>
    </div>
    <smart-drop-down-list resize-mode="vertical">
      <smart-list-item value="1">Affogato</smart-list-item>
      <smart-list-item value="2">Americano</smart-list-item>
      <smart-list-item value="3">Bicerin</smart-list-item>
      <smart-list-item value="4">Breve</smart-list-item>
      <smart-list-item value="5">Cappuccino</smart-list-item>
      <smart-list-item value="6">Cafe Crema</smart-list-item>
      <smart-list-item value="7">Cafe Corretto</smart-list-item>
      <smart-list-item value="8">Cafe macchiato</smart-list-item>
      <smart-list-item value="9">Cafe mocha</smart-list-item>
      <smart-list-item value="10">Cortado</smart-list-item>
      <smart-list-item value="11">Cuban espresso</smart-list-item>
      <smart-list-item value="12">Espresso</smart-list-item>
      <smart-list-item value="13">Eiskaffee</smart-list-item>
      <smart-list-item value="14">Frappuccino</smart-list-item>
      <smart-list-item value="15">Galao</smart-list-item>
      <smart-list-item value="16">Greek frappe coffee</smart-list-item>
      <smart-list-item value="17">Iced Coffee</smart-list-item>
      <smart-list-item value="18">Instant Coffee</smart-list-item>
      <smart-list-item value="19">Latte</smart-list-item>
      <smart-list-item value="20">Liqueur coffee</smart-list-item>
    </smart-drop-down-list>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      const dropDownList = document.querySelector("smart-drop-down-list");
      radioButtons[0].addEventListener("change", function() {
        dropDownList.resizeMode = "none";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownList.resizeMode = "vertical";
      });
      radioButtons[2].addEventListener("change", function() {
        dropDownList.resizeMode = "horizontal";
      });
      radioButtons[3].addEventListener("change", function() {
        dropDownList.resizeMode = "both";
      });
      radioButtons[4].addEventListener("change", function() {
        dropDownList.dropDownPosition = "bottom";
      });
      radioButtons[5].addEventListener("change", function() {
        dropDownList.dropDownPosition = "top";
      });
    });
  }
};
</script>

<style>
smart-drop-down-list {
  position: absolute;
  left: 35%;
  top: 45%;
  min-height: 35px;
  height: auto;
}
</style>
