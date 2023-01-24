<template>
  <div class="vue-root">
    <smart-combo-box auto-complete="manual" min-length="1" selection-mode="zeroOrOne"></smart-combo-box>
    <div class="options">
      <div class="caption">Auto Complete Modes</div>
      <div class="option">
        <smart-radio-button>None</smart-radio-button>
        <smart-radio-button>Auto</smart-radio-button>
        <smart-radio-button>Inline</smart-radio-button>
        <smart-radio-button checked>Manual</smart-radio-button>
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
        "Indian filter coffee",
        "Instant coffee",
        "Irish coffee",
        "Liqueur coffee"
      ];
      document
        .getElementsByTagName("smart-radio-button")[0]
        .addEventListener("change", function() {
          comboBox.autoComplete = "none";
        });
      document
        .getElementsByTagName("smart-radio-button")[1]
        .addEventListener("change", function() {
          comboBox.autoComplete = "auto";
        });
      document
        .getElementsByTagName("smart-radio-button")[2]
        .addEventListener("change", function() {
          comboBox.autoComplete = "inline";
        });
      document
        .getElementsByTagName("smart-radio-button")[3]
        .addEventListener("change", function() {
          comboBox.autoComplete = "manual";
        });
    });
  }
};
</script>

<style>
smart-combo-box {
  width: 300px;
}
</style>
