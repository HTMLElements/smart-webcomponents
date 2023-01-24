<template>
  <div class="vue-root">
    <smart-circular-progress-bar indeterminate>
      <smart-toggle-button></smart-toggle-button>
    </smart-circular-progress-bar>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.progressbar.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const button = document.querySelector("smart-toggle-button"),
        progressBar = document.querySelector("smart-circular-progress-bar");
      progressBar.value = 100;

      button.addEventListener("change", function() {
        if (button.checked) {
          progressBar.indeterminate = false;
        } else {
          progressBar.indeterminate = true;
        }
      });
    });
  }
};
</script>

<style>
smart-toggle-button {
  width: 100%;
  height: 100%;
  display: inherit;
}

smart-toggle-button,
smart-toggle-button .smart-button {
  border-radius: 100%;
  border: none;
  background-image: url(../../../images/power-button-off.svg);
  background-repeat: no-repeat;
}

smart-toggle-button[checked] .smart-button {
  background-image: url(../../../images/power-button-on.svg);
  background-color: #b9b9b9;
  background-repeat: no-repeat;
  border: 1px solid #a9a9a9;
}
</style>
