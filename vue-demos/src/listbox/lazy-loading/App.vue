<template>
  <div class="vue-root">
    <i>Hint: Scroll to the bottom to lazy load items.</i>
    <smart-list-box></smart-list-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const list = document.getElementsByTagName("smart-list-box")[0];
      list.dataSource = [
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
        "Iced Coffee",
        "Indian filter coffee",
        "Instant coffee",
        "Irish coffee",
        "Liqueur coffee"
      ];
      list.addEventListener("scrollBottomReached", function() {
        list.displayLoadingIndicator = true;
        setTimeout(function() {
          const index = list.items.length;
          let items = [];
          for (let i = 0; i < 10; i++) {
            items.push("Item " + parseInt("" + (i + index)));
          }
          list.insert(index, items);
          list.displayLoadingIndicator = false;
        }, 1000);
      });
    });
  }
};
</script>

<style>
smart-list-box {
  width: 300px;
  height: 500px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
</style>
