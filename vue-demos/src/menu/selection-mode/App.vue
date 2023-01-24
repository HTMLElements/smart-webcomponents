<template>
  <div class="vue-root">
    <smart-menu id="menu">
      <smart-menu-items-group label="File">
        <smart-menu-item label="New" shortcut="Ctrl+N"></smart-menu-item>
        <smart-menu-item label="Open" shortcut="Ctrl+0"></smart-menu-item>
        <smart-menu-items-group label="Open Containing Folder">
          <smart-menu-item label="Explorer"></smart-menu-item>
          <smart-menu-item label="cmd"></smart-menu-item>
        </smart-menu-items-group>
        <smart-menu-item label="Save" shortcut="Ctrl+S" disabled></smart-menu-item>
        <smart-menu-item label="Save As..." shortcut="Ctrl+Alt+S" separator></smart-menu-item>
        <smart-menu-item label="Exit" shortcut="Alt+F4"></smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group label="Edit">
        <smart-menu-item label="Undo" shortcut="Ctrl+Z"></smart-menu-item>
        <smart-menu-item label="Redo" shortcut="Ctrl+Y" separator></smart-menu-item>
        <smart-menu-item label="Cut" shortcut="Ctrl+X"></smart-menu-item>
        <smart-menu-item label="Copy" shortcut="Ctrl+C"></smart-menu-item>
        <smart-menu-item label="Paste" shortcut="Ctrl+V" disabled></smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group label="Encoding">
        <smart-menu-item label="Encode in ANSI"></smart-menu-item>
        <smart-menu-item label="Encode in UTF-8"></smart-menu-item>
        <smart-menu-item label="Encode in UTF-8-BOM"></smart-menu-item>
        <smart-menu-item label="Encode in UTCS-2 BE BOM"></smart-menu-item>
        <smart-menu-item label="Encode in UTCS-2 LE BOM" separator></smart-menu-item>
        <smart-menu-items-group label="Character sets">
          <smart-menu-items-group label="Cyrillic">
            <smart-menu-item label="ISO 8859-5"></smart-menu-item>
            <smart-menu-item label="KOI8-R"></smart-menu-item>
            <smart-menu-item label="KOI8-U"></smart-menu-item>
            <smart-menu-item label="Windows-1251"></smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group label="Chinese">
            <smart-menu-item label="Big5 (Traditional)"></smart-menu-item>
            <smart-menu-item label="GB2312 (Simplified)"></smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group label="Western European">
            <smart-menu-item label="ISO 8859-1"></smart-menu-item>
            <smart-menu-item label="ISO 8859-15"></smart-menu-item>
            <smart-menu-item label="OEM 850"></smart-menu-item>
            <smart-menu-item label="Windows-1252"></smart-menu-item>
          </smart-menu-items-group>
        </smart-menu-items-group>
      </smart-menu-items-group>
    </smart-menu>
    <div class="options">
      <div class="caption">Selection mode:</div>
      <smart-radio-button enable-container-click checked>On click</smart-radio-button>
      <smart-radio-button enable-container-click>On mouseenter</smart-radio-button>
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
        menu.selectionMode = "click";
      });
      radioButtons[1].addEventListener("change", function() {
        menu.selectionMode = "mouseenter";
      });
    });
  }
};
</script>

<style>
smart-menu {
  margin-left: 5%;
}
</style>
