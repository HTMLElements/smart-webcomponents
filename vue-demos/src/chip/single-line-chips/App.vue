<template>
  <div class="vue-root">
    <h1>Single line chips</h1>
    <smart-chip avatar="A" value="Chip with text avatar"></smart-chip>
    <smart-chip avatar="../../../images/phonebook/mark.jpeg" value="Chip with image avatar"></smart-chip>
    <smart-chip
      avatar="../../../images/phonebook/margaret.png"
      value="Chip with close button"
      close-button
    ></smart-chip>
    <smart-chip>Basic chip</smart-chip>
    <h1>Disabled</h1>
    <smart-chip avatar="A" value="Chip with text avatar" disabled></smart-chip>
    <smart-chip
      avatar="../../../images/phonebook/mark.jpeg"
      value="Chip with image avatar"
      disabled
    ></smart-chip>
    <smart-chip
      avatar="../../../images/phonebook/margaret.png"
      value="Chip with close button"
      close-button
      disabled
    ></smart-chip>
    <smart-chip disabled>Basic chip</smart-chip>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
