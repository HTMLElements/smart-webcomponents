<template>
  <div class="vue-root">
    <smart-color-picker enable-custom-colors editable></smart-color-picker>
    <div class="options">
      <div class="option">
        <h3>Toggle Value Display Mode</h3>
        <smart-radio-button group-name="valueFormat" checked>default</smart-radio-button>
        <br />
        <smart-radio-button group-name="valueFormat">rgb</smart-radio-button>
        <br />
        <smart-radio-button group-name="valueFormat">rgba</smart-radio-button>
        <br />
        <smart-radio-button group-name="valueFormat">hex</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Edit Alpha Channel</h3>
        <smart-check-box id="editAlphaChannel">Edit Alpha Channel</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.colorpicker.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPicker = document.querySelector("smart-color-picker");
      document.addEventListener("change", function(event) {
        const radioButton = event.target;
        const checkBox = event.target;
        //Set ApplyValueMode and Palette
        if (radioButton.groupName === "valueFormat") {
          colorPicker.valueFormat = radioButton.innerHTML;
          return;
        }
        if (checkBox.id === "editAlphaChannel") {
          colorPicker.editAlphaChannel = event.detail.value;
        }
      });
    });
  }
};
</script>

<style>
</style>
