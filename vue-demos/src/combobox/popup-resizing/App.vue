<template>
  <div class="vue-root">
    <smart-combo-box resize-mode="vertical">
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
    </smart-combo-box>
    <div class="options">
      <div class="caption">Resize Mode</div>
      <div class="option">
        <smart-radio-button>None</smart-radio-button>
        <br />
        <br />
        <smart-radio-button>Horizontal</smart-radio-button>
        <br />
        <br />
        <smart-radio-button>Both</smart-radio-button>
        <br />
        <br />
        <smart-radio-button checked>Vertical</smart-radio-button>
        <br />
        <br />
      </div>
      <div class="ddp caption">DropDown position</div>
      <div class="ddp option">
        <smart-radio-button checked>Bottom</smart-radio-button>
        <smart-radio-button>Top</smart-radio-button>
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
      window.onload = function() {
        const radioButtons = document.getElementsByTagName(
          "smart-radio-button"
        );
        const comboBox = document.querySelector("smart-combo-box");
        radioButtons[0].addEventListener("change", function() {
          comboBox.resizeMode = "none";
        });
        radioButtons[1].addEventListener("change", function() {
          comboBox.resizeMode = "vertical";
        });
        radioButtons[2].addEventListener("change", function() {
          comboBox.resizeMode = "horizontal";
        });
        radioButtons[3].addEventListener("change", function() {
          comboBox.resizeMode = "both";
        });
        radioButtons[4].addEventListener("change", function() {
          comboBox.dropDownPosition = "bottom";
        });
        radioButtons[5].addEventListener("change", function() {
          comboBox.dropDownPosition = "top";
        });
      };
    });
  }
};
</script>

<style>
smart-combo-box {
  position: relative;
  top: 260px;
}

@media only screen and (max-width: 500px) {
  body,
  html {
    font-size: 12px;
    width: 320px;
  }
  smart-combo-box {
    position: static;
  }

  .ddp {
    display: none;
  }
}

smart-combo-box .smart-drop-down {
  --smart-drop-down-element-max-height: 250px;
}

html,
body {
  min-height: 900px;
}
</style>
