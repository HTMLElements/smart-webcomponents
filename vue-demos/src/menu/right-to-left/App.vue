<template>
  <div class="vue-root">
    <smart-menu id="menu" right-to-left>
      <smart-menu-items-group>
        קובץ
        <smart-menu-item shortcut="Ctrl+N">חדש</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+0">פתוח</smart-menu-item>
        <smart-menu-items-group>
          תיקייה פתוחה המכילה
          <smart-menu-item>מגלה ארצות</smart-menu-item>
          <smart-menu-item>cmd</smart-menu-item>
        </smart-menu-items-group>
        <smart-menu-item shortcut="Ctrl+S" disabled>להציל</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+Alt+S" separator>שמור כ...</smart-menu-item>
        <smart-menu-item shortcut="Alt+F4">יציאה</smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group>
        ערוך
        <smart-menu-item shortcut="Ctrl+Z">לבטל</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+Y" separator>מוכן</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+X">גזירה</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+C">עותק</smart-menu-item>
        <smart-menu-item shortcut="Ctrl+V" disabled>הדבק</smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-items-group drop-down-height="300">
        קידוד
        <smart-menu-item>קידוד ב ANSI</smart-menu-item>
        <smart-menu-item>קידוד ב UTF-8</smart-menu-item>
        <smart-menu-item>קידוד ב UTF-8-BOM</smart-menu-item>
        <smart-menu-item>קידוד ב UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>קידוד ב UTCS-2 LE BOM</smart-menu-item>
        <smart-menu-items-group separator>
          ערכות תווים
          <smart-menu-items-group>
            קירילית
            <smart-menu-item>ISO 8859-5</smart-menu-item>
            <smart-menu-item>KOI8-R</smart-menu-item>
            <smart-menu-item>KOI8-U</smart-menu-item>
            <smart-menu-item>Windows-1251</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            סינית
            <smart-menu-item>Big5 (מסורתית)</smart-menu-item>
            <smart-menu-item>GB2312 (מפושט)</smart-menu-item>
          </smart-menu-items-group>
          <smart-menu-items-group>
            מערב אירופאי
            <smart-menu-item>ISO 8859-1</smart-menu-item>
            <smart-menu-item>ISO 8859-15</smart-menu-item>
            <smart-menu-item>OEM 850</smart-menu-item>
            <smart-menu-item>Windows-1252</smart-menu-item>
          </smart-menu-items-group>
        </smart-menu-items-group>
        <smart-menu-item>להמיר ל ANSI</smart-menu-item>
        <smart-menu-item>להמיר ל UTF-8</smart-menu-item>
        <smart-menu-item>להמיר ל UTF-8-BOM</smart-menu-item>
        <smart-menu-item>להמיר ל UTCS-2 BE BOM</smart-menu-item>
        <smart-menu-item>להמיר ל UTCS-2 LE BOM</smart-menu-item>
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
smart-menu[right-to-left] {
  float: right;
}
</style>
