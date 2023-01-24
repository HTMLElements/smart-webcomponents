<template>
  <div class="vue-root">
    <div class="options">
      <div class="option">
        <smart-button id="openButton">Open</smart-button>
      </div>
    </div>
    <smart-wait-window label="Wait Window" modal></smart-wait-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smartWindow = document.querySelector("smart-wait-window");
      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          if (smartWindow.opened) {
            return;
          }
          smartWindow.open();
          setTimeout(function() {
            smartWindow.close();
          }, 2500);
        });
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root {
  width: 99%;
  height: 99%;
}

.smart-window {
  --smart-window-default-height: 100px;
}

@media screen and (max-width: 700px) {
  .smart-window {
    width: 90% !important;
    left: 5% !important;
    top: 5px !important;
  }
}
</style>
