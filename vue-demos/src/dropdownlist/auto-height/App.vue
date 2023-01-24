<template>
  <div class="vue-root">
    <smart-drop-down-list
      selected-indexes="[0]"
      class="auto-height animated"
      selection-display-mode="tokens"
      selection-mode="oneOrManyExtended"
    ></smart-drop-down-list>
    <br />
    <br />
    <br />
    <div class="description">
      When multiple DropDownList items are selected, the height of the component
      is updated and items are wrapped in multiple rows.
    </div>
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
smart-drop-down-list {
  min-height: 35px;
  height: auto;
}
</style>
