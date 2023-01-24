<template>
  <div class="vue-root">
    <smart-drop-down-button
      placeholder="DropDown"
      class="dropDownButtonAbsolute"
      drop-down-append-to="body"
    >
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
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dropDownLists = document.querySelectorAll("smart-drop-down-list");
      for (let i = 0; i < dropDownLists.length; i++) {
        dropDownLists[i].dataSource = [
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
.dropDownButtonAbsolute {
  position: absolute;
}

.dropDownButtonAbsolute:nth-last-of-type(1) {
  top: 20px;
}

.dropDownButtonAbsolute:nth-last-of-type(2) {
  top: 20px;
  left: calc(100% - 50px);
}

.dropDownButtonAbsolute:nth-last-of-type(3) {
  top: calc(100% - 50px);
}

.dropDownButtonAbsolute:nth-last-of-type(4) {
  top: calc(100% - 50px);
  left: calc(100% - 50px);
}
</style>
