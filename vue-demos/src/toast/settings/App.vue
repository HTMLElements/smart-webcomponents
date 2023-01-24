<template>
  <div class="vue-root">
    <smart-toast position="top-left" auto-open show-close-button>Toast !</smart-toast>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="openButton">Open</smart-button>
        <br />
        <smart-button id="closeLastButton">CloseLast</smart-button>
        <br />
        <smart-button id="closeAllButton">CloseAll</smart-button>
        <br />
        <br />Position:
        <br />
        <smart-radio-button id="toastTopLeft" group-name="toastPosition" checked>Top-left</smart-radio-button>
        <br />
        <smart-radio-button id="toastTopRight" group-name="toastPosition">Top-right</smart-radio-button>
        <br />
        <smart-radio-button id="toastBottomLeft" group-name="toastPosition">Bottom-left</smart-radio-button>
        <br />
        <smart-radio-button id="toastBottomRight" group-name="toastPosition">Bottom-right</smart-radio-button>
        <hr />Type:
        <br />
        <smart-drop-down-list id="type"></smart-drop-down-list>
        <hr />
        <smart-check-box id="autoClose">Auto close</smart-check-box>
        <br />
        <smart-check-box id="blink">Blink</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.toast.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const toast = document.querySelectorAll("smart-toast")[0],
        openButton = document.getElementById("openButton"),
        closeLastButton = document.getElementById("closeLastButton"),
        toastTopLeft = document.getElementById("toastTopLeft"),
        toastTopRight = document.getElementById("toastTopRight"),
        toastBottomLeft = document.getElementById("toastBottomLeft"),
        toastBottomRight = document.getElementById("toastBottomRight"),
        type = document.getElementById("type"),
        closeAllButton = document.getElementById("closeAllButton"),
        autoClose = document.getElementById("autoClose"),
        blink = document.getElementById("blink");

      toast.type = null;
      type.dataSource = [
        "info",
        "warning",
        "success",
        "error",
        "mail",
        "time",
        "null"
      ];
      openButton.addEventListener("click", function() {
        toast.open();
        if (
          type.selectedValues.length > 0 &&
          type.selectedValues[0] !== "null"
        ) {
          toast.value = type.selectedValues[0];
        } else {
          toast.value = "Toast !";
        }
      });
      closeLastButton.addEventListener("click", function() {
        toast.closeLast();
      });
      closeAllButton.addEventListener("click", function() {
        toast.closeAll();
      });
      toastTopLeft.addEventListener("change", function() {
        toast.position = "top-left";
      });
      toastTopRight.addEventListener("change", function() {
        toast.position = "top-right";
      });
      toastBottomLeft.addEventListener("change", function() {
        toast.position = "bottom-left";
      });
      toastBottomRight.addEventListener("change", function() {
        toast.position = "bottom-right";
      });
      type.addEventListener("change", function() {
        toast.type =
          type.selectedValues[0] === "null" ? null : type.selectedValues[0];
      });
      autoClose.addEventListener("change", function() {
        toast.autoClose = autoClose.checked;
      });
      blink.addEventListener("change", function() {
        blink.checked
          ? toast.classList.add("blink")
          : toast.classList.remove("blink");
      });
    });
  }
};
</script>

<style>
#settingsContainer {
  width: 380px;
  position: absolute;
  left: calc(50% - 210px);
  top: 50px;
  padding: 20px;
  border: 1px gray dashed;
}
</style>
