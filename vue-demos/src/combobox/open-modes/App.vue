<template>
  <div class="vue-root">
    <div id="description">
      <h3>Modes Description</h3>
      <p>Auto - the comboBox is opened/closed when the element is hovered.</p>
      <p>Default - the comboBox is opened/closed when the element is clicked.</p>
      <p>
        DropDownButton - the comboBox is devided in two. An input field and a
        drop-down button.
        <br />Each component can be focused. The comboBox can be opened/closed when
        the dropDownButton is clicked.
      </p>
      <p>None - the dropDownList can't be opened/closed.</p>
    </div>
    <smart-combo-box class="drop-down-list-modes-demo"></smart-combo-box>
    <div class="options">
      <div class="caption">ComboBox Open Mode:</div>
      <div class="option">
        <smart-button disabled>Default</smart-button>
      </div>
      <div class="option">
        <smart-button>Auto</smart-button>
      </div>
      <div class="option">
        <smart-button>DropDownButton</smart-button>
      </div>
      <div class="option">
        <smart-button>None</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.combobox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const comboBox = document.querySelector("smart-combo-box");
      const buttons = document.getElementsByTagName("smart-button");
      comboBox.dataSource = [
        {
          label: "Andrew",
          value: 1,
          group: "A"
        },
        {
          label: "Natalia",
          value: 2,
          group: "B"
        },
        {
          label: "Michael",
          value: 3,
          group: "B"
        },
        {
          label: "Angel",
          value: 4,
          group: "A"
        },
        {
          label: "Hristo",
          value: 5,
          group: "C"
        },
        {
          label: "Peter",
          value: 6,
          group: "A"
        },
        {
          label: "Albert",
          value: 7,
          group: "A"
        },
        {
          label: "George",
          value: 8,
          group: "C"
        }
      ];
      buttons[0].addEventListener("click", function() {
        comboBox.dropDownOpenMode = "default";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[1].addEventListener("click", function() {
        comboBox.dropDownOpenMode = "auto";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[2].addEventListener("click", function() {
        comboBox.dropDownOpenMode = "dropDownButton";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[3].addEventListener("click", function() {
        comboBox.dropDownOpenMode = "none";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
    });
  }
};
</script>

<style>
html,
body {
  min-height: 600px;
}
</style>
