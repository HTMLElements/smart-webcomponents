<template>
  <div class="vue-root">
    <smart-combo-box
      selection-mode="zeroOrMany"
      selection-display-mode="tokens"
      placeholder="Select items:"
    ></smart-combo-box>
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
    });
  }
};
</script>

<style>
smart-combo-box input {
  padding: 0px;
}
</style>
