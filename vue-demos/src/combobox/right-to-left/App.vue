<template>
  <div class="vue-root">
    <div class="demo-description">
      ComboBox fully supports right-to-left (RTL) language locales. You can
      enable/disable the right-to-left support using rightToLeft property.
    </div>
    <smart-combo-box selected-values="['5']" right-to-left>
      <smart-list-item value="1">אפוגאטו</smart-list-item>
      <smart-list-item value="2">אמריקאי</smart-list-item>
      <smart-list-item value="3">Bicerin</smart-list-item>
      <smart-list-item value="4">קצר</smart-list-item>
      <smart-list-item value="5">קפוצ'ינו</smart-list-item>
      <smart-list-item value="6">קפה קרמה</smart-list-item>
      <smart-list-item value="7">בית קפה נכון</smart-list-item>
      <smart-list-item value="8">בית קפה מוכתם</smart-list-item>
      <smart-list-item value="9">קפה מוקה</smart-list-item>
      <smart-list-item value="10">מנותק</smart-list-item>
      <smart-list-item value="11">אספרסו קובני</smart-list-item>
      <smart-list-item value="12">אספרסו</smart-list-item>
      <smart-list-item value="13">אייסקאפי</smart-list-item>
      <smart-list-item value="14">פרפוצ'ינו</smart-list-item>
      <smart-list-item value="15">שחק</smart-list-item>
      <smart-list-item value="16">יווני מכה קפה</smart-list-item>
      <smart-list-item value="17">קפה קר</smart-list-item>
      <smart-list-item value="18">קפה נמס</smart-list-item>
      <smart-list-item value="19">חלב</smart-list-item>
      <smart-list-item value="20">קפה ליקר</smart-list-item>
    </smart-combo-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.combobox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-combo-box {
  width: 300px;
}
</style>
