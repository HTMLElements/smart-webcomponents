<template>
  <div class="vue-root">
    <p>overflow: 'auto'</p>
    <smart-menu id="menu1" drop-down-append-to="body" overflow="auto">
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
      <smart-menu-items-group drop-down-height="300">
        Encoding
        <smart-menu-item>Encode in ANSI</smart-menu-item>
        <smart-menu-item>Encode in UTF-8</smart-menu-item>
        <smart-menu-item>Encode in UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 LE BOM</smart-menu-item>
        <smart-menu-items-group separator>
          Character sets
          <smart-menu-items-group>
            Cyrillic
            <smart-menu-item>ISO 8859-5</smart-menu-item>
            <smart-menu-item>KOI8-R</smart-menu-item>
            <smart-menu-item>KOI8-U</smart-menu-item>
            <smart-menu-item>Windows-1251</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            Chinese
            <smart-menu-item>Big5 (Traditional)</smart-menu-item>
            <smart-menu-item>GB2312 (Simplified)</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            Western European
            <smart-menu-item>ISO 8859-1</smart-menu-item>
            <smart-menu-item>ISO 8859-15</smart-menu-item>
            <smart-menu-item>OEM 850</smart-menu-item>
            <smart-menu-item>Windows-1252</smart-menu-item>
          </smart-menu-items-group>
        </smart-menu-items-group>
        <smart-menu-item>Convert to ANSI</smart-menu-item>
        <smart-menu-item>Convert to UTF-8</smart-menu-item>
        <smart-menu-item>Convert to UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Convert to UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Convert to UTCS-2 LE BOM</smart-menu-item>
      </smart-menu-items-group>
    </smart-menu>
    <p>overflow: 'hidden'</p>
    <smart-menu id="menu2" drop-down-append-to="body" overflow="hidden">
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
      <smart-menu-items-group drop-down-height="300">
        Encoding
        <smart-menu-item>Encode in ANSI</smart-menu-item>
        <smart-menu-item>Encode in UTF-8</smart-menu-item>
        <smart-menu-item>Encode in UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 LE BOM</smart-menu-item>
        <smart-menu-items-group separator>
          Character sets
          <smart-menu-items-group>
            Cyrillic
            <smart-menu-item>ISO 8859-5</smart-menu-item>
            <smart-menu-item>KOI8-R</smart-menu-item>
            <smart-menu-item>KOI8-U</smart-menu-item>
            <smart-menu-item>Windows-1251</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            Chinese
            <smart-menu-item>Big5 (Traditional)</smart-menu-item>
            <smart-menu-item>GB2312 (Simplified)</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            Western European
            <smart-menu-item>ISO 8859-1</smart-menu-item>
            <smart-menu-item>ISO 8859-15</smart-menu-item>
            <smart-menu-item>OEM 850</smart-menu-item>
            <smart-menu-item>Windows-1252</smart-menu-item>
          </smart-menu-items-group>
        </smart-menu-items-group>
        <smart-menu-item>Convert to ANSI</smart-menu-item>
        <smart-menu-item>Convert to UTF-8</smart-menu-item>
        <smart-menu-item>Convert to UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Convert to UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Convert to UTCS-2 LE BOM</smart-menu-item>
      </smart-menu-items-group>
    </smart-menu>
    <p>overflow: 'scroll'</p>
    <smart-menu id="menu3" drop-down-append-to="body" overflow="scroll">
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
      <smart-menu-items-group drop-down-height="300">
        Encoding
        <smart-menu-item>Encode in ANSI</smart-menu-item>
        <smart-menu-item>Encode in UTF-8</smart-menu-item>
        <smart-menu-item>Encode in UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Encode in UTCS-2 LE BOM</smart-menu-item>
        <smart-menu-items-group separator>
          Character sets
          <smart-menu-items-group>
            Cyrillic
            <smart-menu-item>ISO 8859-5</smart-menu-item>
            <smart-menu-item>KOI8-R</smart-menu-item>
            <smart-menu-item>KOI8-U</smart-menu-item>
            <smart-menu-item>Windows-1251</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            Chinese
            <smart-menu-item>Big5 (Traditional)</smart-menu-item>
            <smart-menu-item>GB2312 (Simplified)</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            Western European
            <smart-menu-item>ISO 8859-1</smart-menu-item>
            <smart-menu-item>ISO 8859-15</smart-menu-item>
            <smart-menu-item>OEM 850</smart-menu-item>
            <smart-menu-item>Windows-1252</smart-menu-item>
          </smart-menu-items-group>
        </smart-menu-items-group>
        <smart-menu-item>Convert to ANSI</smart-menu-item>
        <smart-menu-item>Convert to UTF-8</smart-menu-item>
        <smart-menu-item>Convert to UTF-8-BOM</smart-menu-item>
        <smart-menu-item>Convert to UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>Convert to UTCS-2 LE BOM</smart-menu-item>
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
#menu1,
#menu2,
#menu3 {
  margin-bottom: 50px;
  width: 200px;
  margin-left: 5%;
}
</style>
