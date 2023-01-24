<template>
  <div class="vue-root">
    <smart-menu id="menu" drop-down-append-to="body">
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
      <smart-menu-items-group id="help">
        <img id="helpIcon" src="../../../images/help-icon.png" title="help" />
        <smart-menu-item>About</smart-menu-item>
        <smart-menu-item>Help center</smart-menu-item>
        <smart-menu-item>Feedback</smart-menu-item>
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
#help {
  margin-left: auto;
  margin-right: 0;
}

#help .smart-menu-items-group-arrow {
  display: none;
}

#helpIcon {
  width: 30px;
  height: 30px;
}
smart-menu {
  margin-left: 5%;
}
</style>
