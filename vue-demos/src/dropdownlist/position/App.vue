<template>
  <div class="vue-root">
    <smart-drop-down-list class="drop-down-list-modes-demo"></smart-drop-down-list>
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
      const dropDownList = document.querySelector("smart-drop-down-list");
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      dropDownList.dataSource = [
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
        dropDownList.dropDownPosition = "auto";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownList.dropDownPosition = "bottom";
      });
      radioButtons[2].addEventListener("change", function() {
        dropDownList.dropDownPosition = "overlay-bottom";
      });
      radioButtons[3].addEventListener("change", function() {
        dropDownList.dropDownPosition = "overlay-center";
      });
      radioButtons[4].addEventListener("change", function() {
        dropDownList.dropDownPosition = "overlay-top";
      });
      radioButtons[5].addEventListener("change", function() {
        dropDownList.dropDownPosition = "top";
      });
      radioButtons[6].addEventListener("change", function() {
        dropDownList.dropDownPosition = "center-bottom";
      });
      radioButtons[7].addEventListener("change", function() {
        dropDownList.dropDownPosition = "center-top";
      });
    });
  }
};
</script>

<style>
smart-drop-down-list {
  position: relative;
  top: 260px;
  min-height: 35px;
  height: auto;
}
smart-drop-down-list .smart-drop-down {
  --smart-drop-down-element-max-height: 250px;
}

html,
body {
  min-height: 900px;
}

@media only screen and (max-width: 500px) {
  smart-drop-down-list {
    position: static;
  }
}
</style>
