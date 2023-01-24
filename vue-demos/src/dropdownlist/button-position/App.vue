<template>
  <div class="vue-root">
    <div id="comboBoxContainer">
      <smart-drop-down-list selected-indexes="[0]" class="drop-down-list-button-positions-demo">
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
      <div class="options">
        <div class="caption">Dropdown button Position</div>
        <div class="option">
          <smart-radio-button>Left</smart-radio-button>
          <smart-radio-button checked>Right</smart-radio-button>
        </div>
      </div>
    </div>
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
      const radioButtons = document.querySelectorAll("smart-radio-button");
      const list = document.querySelector("smart-drop-down-list");
      radioButtons[0].addEventListener("change", function() {
        list.dropDownButtonPosition = "left";
      });
      radioButtons[1].addEventListener("change", function() {
        list.dropDownButtonPosition = "right";
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
