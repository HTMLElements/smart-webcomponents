<template>
  <div class="vue-root">
    <smart-combo-box selected-values="['Cappuccino']">
      <smart-list-item value="1">Affogato</smart-list-item>
      <smart-list-item value="2">Americano</smart-list-item>
      <smart-list-item value="3">Bicerin</smart-list-item>
      <smart-list-item value="4">Breve</smart-list-item>
      <smart-list-item value="5">Cappuccino</smart-list-item>
      <smart-list-item value="6">Cafe Crema</smart-list-item>
      <smart-list-item value="7">Cafe Corretto</smart-list-item>
      <smart-list-item value="8">Cafe macchiato</smart-list-item>
      <smart-list-item value="9">Cafe mocha</smart-list-item>
      <smart-list-item value="10">Cortado</smart-list-item>
      <smart-list-item value="11">Cuban espresso</smart-list-item>
      <smart-list-item value="12">Espresso</smart-list-item>
      <smart-list-item value="13">Eiskaffee</smart-list-item>
      <smart-list-item value="14">Frappuccino</smart-list-item>
      <smart-list-item value="15">Galao</smart-list-item>
      <smart-list-item value="16">Greek frappe coffee</smart-list-item>
      <smart-list-item value="17">Iced Coffee</smart-list-item>
      <smart-list-item value="18">Instant Coffee</smart-list-item>
      <smart-list-item value="19">Latte</smart-list-item>
      <smart-list-item value="20">Liqueur coffee</smart-list-item>
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
