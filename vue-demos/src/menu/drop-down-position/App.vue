<template>
  <div class="vue-root">
    <smart-menu id="menu" class="material animation" drop-down-position="auto">
      <smart-menu-items-group>
        File
        <smart-menu-item shortcut="Ctrl+N">New</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+0">Open</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+S" disabled>Save</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+Alt+S" separator>Save As...</smart-menu-item>
        <smart-menu-item shortcut="Alt+F4">Exit</smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group>
        Edit
        <smart-menu-item shortcut="Ctrl+Z">Undo</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+Y" separator>Redo</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+X">Cut</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+C">Copy</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+V" disabled>Paste</smart-menu-item>
      </smart-menu-items-group>
    </smart-menu>
    <div class="options">
      <div class="caption">Dropdown Position</div>
      <div class="option">
        <smart-radio-button enable-container-click checked>Auto (browser bounds detection)</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click>Bottom left</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click>Bottom right</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click>Top left</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click>Top right</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click>Overlay left</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click>Overlay right</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const menu = document.getElementById("menu"),
        radioButtons = document.getElementsByTagName("smart-radio-button");
      radioButtons[0].addEventListener("change", function() {
        menu.dropDownPosition = "auto";
      });
      radioButtons[1].addEventListener("change", function() {
        menu.dropDownPosition = "bottom-left";
      });
      radioButtons[2].addEventListener("change", function() {
        menu.dropDownPosition = "bottom-right";
      });
      radioButtons[3].addEventListener("change", function() {
        menu.dropDownPosition = "top-left";
      });
      radioButtons[4].addEventListener("change", function() {
        menu.dropDownPosition = "top-right";
      });
      radioButtons[5].addEventListener("change", function() {
        menu.dropDownPosition = "overlay-left";
      });
      radioButtons[6].addEventListener("change", function() {
        menu.dropDownPosition = "overlay-right";
      });
    });
  }
};
</script>

<style>
html,
body {
  height: 1000px;
  overflow: hidden;
}
#menu {
  margin-left: 200px;
  margin-top: 310px;
}
</style>
