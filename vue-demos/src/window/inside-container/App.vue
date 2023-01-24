<template>
  <div class="vue-root">
    <div class="options">
      <div class="option">
        <smart-button>Open/Close</smart-button>
      </div>
    </div>
    <div id="windowContainer">
      <smart-window opened label="Nested Window" window-parent="windowContainer" resize-mode="both">
        <div>This is a window inside a container</div>
      </smart-window>
    </div>
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
      const smartWindow = document.querySelector("smart-window");
      document
        .querySelector("smart-button")
        .addEventListener("click", function () {
          smartWindow.opened ? smartWindow.close() : smartWindow.open();
        });
    });
  },
};
</script>

<style>
#windowContainer {
  height: 500px;
  width: 300px;
  border: 1px solid #ddd;
  margin-left: 5%;
  margin-top: 5%;
  background-color: #f2f2f2;
}

#windowContainer > smart-button {
  margin-top: 10px;
  margin-left: 10px;
}

smart-window {
  --smart-window-default-width: 250px;
  --smart-window-default-height: 150px;
}
.smart-window #article {
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .smart-window {
    width: 90% !important;
    left: 5% !important;
    top: 5px !important;
  }
}
</style>
