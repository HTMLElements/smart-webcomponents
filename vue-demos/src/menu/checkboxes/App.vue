<template>
  <div class="vue-root">
    <smart-menu id="menu" checkboxes>
      <smart-menu-items-group>
        File
        <smart-menu-item shortcut="Ctrl+N">New</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+0">Open</smart-menu-item>
        <smart-menu-items-group>
          Open Containing Folder
          <smart-menu-item>Explorer</smart-menu-item>
          <smart-menu-item>cmd</smart-menu-item>
        </smart-menu-items-group>
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
      <smart-menu-items-group checkable check-mode="checkbox">
        View
        <smart-menu-item shortcut="Ctrl+W, S" checked>Solution Explorer</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+\, Ctrl+M" checked>Team Explorer</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+W, L">Server Explorer</smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group checkable check-mode="radioButton">
        Encoding
        <smart-menu-item>Encode in ANSI</smart-menu-item>
        <smart-menu-item>Encode in UTF-8</smart-menu-item>
        <smart-menu-item>Encode in UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 LE BOM</smart-menu-item>
      </smart-menu-items-group>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-menu {
  margin-left: 5%;
}
</style>
