<template>
  <div class="vue-root">
    <div id="container">
      <smart-combo-box class="drop-down-list-modes-demo"></smart-combo-box>
      <div class="options">
        <div class="caption">DropDown list Position:</div>
        <div class="option">
          <smart-radio-button checked>Auto</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Bottom</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Overlay-bottom</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Overlay-center</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Overlay-top</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Top</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Center-bottom</smart-radio-button>
          <br />
          <br />
          <smart-radio-button>Center-top</smart-radio-button>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.combobox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const comboBox = document.querySelector("smart-combo-box");
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      comboBox.dataSource = [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Café Bombón",
        "Café au lait",
        "Caffé Corretto",
        "Café Crema",
        "Caffé Latte",
        "Caffé macchiato",
        "Café mélange",
        "Coffee milk",
        "Cafe mocha",
        "Cappuccino",
        "Carajillo",
        "Cortado",
        "Cuban espresso",
        "Espresso",
        "Eiskaffee",
        "The Flat White",
        "Frappuccino",
        "Galao",
        "Greek frappé coffee",
        "Alabala",
        "Indian filter coffee",
        "Instant coffee",
        "Irish coffee",
        "Liqueur coffee"
      ];
      radioButtons[0].addEventListener("change", function() {
        comboBox.dropDownPosition = "auto";
      });
      radioButtons[1].addEventListener("change", function() {
        comboBox.dropDownPosition = "bottom";
      });
      radioButtons[2].addEventListener("change", function() {
        comboBox.dropDownPosition = "overlay-bottom";
      });
      radioButtons[3].addEventListener("change", function() {
        comboBox.dropDownPosition = "overlay-center";
      });
      radioButtons[4].addEventListener("change", function() {
        comboBox.dropDownPosition = "overlay-top";
      });
      radioButtons[5].addEventListener("change", function() {
        comboBox.dropDownPosition = "top";
      });
      radioButtons[6].addEventListener("change", function() {
        comboBox.dropDownPosition = "center-bottom";
      });
      radioButtons[7].addEventListener("change", function() {
        comboBox.dropDownPosition = "center-top";
      });
    });
  }
};
</script>

<style>
smart-combo-box {
  position: relative;
  top: 260px;
}
smart-combo-box .smart-drop-down {
  --smart-drop-down-element-max-height: 250px;
}

html,
body {
  min-height: 900px;
}
</style>
