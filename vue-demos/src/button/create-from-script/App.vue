<template>
  <div class="vue-root"></div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const button = document.createElement("smart-button");
      button.id = "button";
      button.innerHTML = "Click Me";
      document.body.appendChild(button);
      button.addEventListener("click", function() {
        button.innerHTML = "Clicked";
      });
    });
  }
};
</script>

<style>
</style>
