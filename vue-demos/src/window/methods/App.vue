<template>
  <div class="vue-root">
    <smart-window opened label="Window 1">
      <section>
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
    </smart-window>

    <div class="options">
      <div class="caoption">Methods:</div>
      <div class="option">
        <smart-button id="open">Open/Close</smart-button>
      </div>
      <div class="option">
        <smart-button id="max">Maximize/Restore</smart-button>
      </div>
      <div class="option">
        <smart-button id="min">Minimize/Restore</smart-button>
      </div>
      <div class="option">
        <smart-button id="pin">Pin/Unpin</smart-button>
      </div>
      <div class="option">
        <smart-button id="collapse">Collapse/Expand</smart-button>
      </div>
      <div class="option">
        <smart-button id="disable">Disable/Enable</smart-button>
      </div>
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
      document.getElementById("open").addEventListener("click", function() {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
      });
      document.getElementById("max").addEventListener("click", function() {
        smartWindow.maximized ? smartWindow.restore() : smartWindow.maximize();
      });
      document.getElementById("min").addEventListener("click", function() {
        smartWindow.minimized ? smartWindow.restore() : smartWindow.minimize();
      });
      document.getElementById("pin").addEventListener("click", function() {
        smartWindow.pinned ? smartWindow.unpin() : smartWindow.pin();
      });
      document.getElementById("collapse").addEventListener("click", function() {
        smartWindow.collapsed ? smartWindow.expand() : smartWindow.collapse();
      });
      document.getElementById("disable").addEventListener("click", function() {
        smartWindow.disabled = !smartWindow.disabled;
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
