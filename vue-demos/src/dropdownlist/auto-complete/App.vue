<template>
  <div class="vue-root">
    <smart-drop-down-list selected-indexes="[0]" min-length="1" selection-mode="zeroOrOne"></smart-drop-down-list>
    <br />
    <br />
    <br />
    <div class="description">Open the DropDownList and press "F" to select the "Frappuccino" item.</div>
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
      document.querySelector("smart-drop-down-list").dataSource = [
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
    });
  }
};
</script>

<style>
smart-drop-down-list {
  width: 300px;
  min-height: 35px;
  height: auto;
}
</style>
