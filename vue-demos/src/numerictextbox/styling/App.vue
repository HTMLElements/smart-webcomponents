<template>
  <div class="vue-root">
    <p>Default look:</p>
    <smart-numeric-text-box
      id="numericTextBox1"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <p>Spin buttons "outside" the input (similar to the appearance of smart-date-time-picker):</p>
    <smart-numeric-text-box
      id="numericTextBox2"
      class="non-default-look"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <p>Spin buttons "inside" the input:</p>
    <smart-numeric-text-box
      id="numericTextBox3"
      class="non-default-look"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <p>Default look (spin buttons on the left):</p>
    <smart-numeric-text-box
      id="numericTextBox4"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="left"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <p>Spin buttons on the left, "outside" the input:</p>
    <smart-numeric-text-box
      id="numericTextBox5"
      class="non-default-look"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="left"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <p>Spin buttons on the left, "inside" the input:</p>
    <smart-numeric-text-box
      id="numericTextBox6"
      class="non-default-look"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="left"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <p>Dropdown styled similar to that of smart-drop-down-list:</p>
    <smart-numeric-text-box
      id="numericTextBox7"
      value="0"
      input-format="integer"
      word-length="uint64"
      radix-display
      drop-down-enabled
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      placeholder="Please type..."
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-numeric-text-box {
  width: 300px;
  height: 40px;
}

.non-default-look {
  --smart-border-color: #000000;
  color: #000000;
}

.non-default-look input:focus,
.non-default-look .smart-numeric-text-box-focused-component {
  border-color: #ffbb00;
}

.non-default-look .smart-spin-button {
  background-color: transparent;
}

.non-default-look .smart-arrow:after {
  color: #000000;
}

#numericTextBox2 input {
  border-right-width: var(--smart-border-width);
}

#numericTextBox2 .smart-spin-buttons-container,
#numericTextBox5 .smart-spin-buttons-container {
  --smart-border-width: 0;
}

#numericTextBox3 .smart-spin-buttons-container {
  border-left: none;
}

#numericTextBox6 input {
  border-left: none;
}

#numericTextBox7 .smart-drop-down {
  background-color: white;
  color: black;
}

#numericTextBox7 .smart-drop-down .hovered {
  color: var(--smart-hover-color);
  background-color: transparent;
}

#numericTextBox7[radix="2"] .smart-list-item[data-value="2"],
#numericTextBox7 .smart-list-item[data-value="10"],
#numericTextBox7[radix="8"] .smart-list-item[data-value="8"],
#numericTextBox7[radix="16"] .smart-list-item[data-value="16"] {
  background-color: rgba(255, 187, 0, 0.3);
}

#numericTextBox7[radix="2"] .smart-list-item[data-value="10"],
#numericTextBox7[radix="8"] .smart-list-item[data-value="10"],
#numericTextBox7[radix="16"] .smart-list-item[data-value="10"] {
  background-color: transparent;
}
</style>
