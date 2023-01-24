<template>
  <div class="vue-root">
    <smart-drop-down-list></smart-drop-down-list>
    <smart-drop-down-list id="last"></smart-drop-down-list>
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
      const comboBoxes = document.querySelectorAll("smart-drop-down-list");
      for (let i = 0; i < comboBoxes.length; i++) {
        comboBoxes[i].dataSource = [
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
      }
    });
  }
};
</script>

<style>
smart-drop-down-list {
  width: 300px;
}
body,
html {
  min-height: 450px;
}
smart-drop-down-list#last {
  position: absolute;
  bottom: 20px;
}
</style>
