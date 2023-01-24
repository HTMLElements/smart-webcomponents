<template>
  <div class="vue-root">
    <smart-accordion right-to-left locale="he">
      <smart-accordion-item label="פריט ראשון">תוכן הפריט הראשון.</smart-accordion-item>
      <smart-accordion-item label="פריט שני">תוכן הפריט השני.</smart-accordion-item>
      <smart-accordion-item label="פריט שלישי">תוכן הפריט השלישי.</smart-accordion-item>
      <smart-accordion-item label="פריט רביעי">תוכן הפריט הרביעי.</smart-accordion-item>
    </smart-accordion>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-accordion {
  width: 250px;
  height: 350px;
}
</style>
