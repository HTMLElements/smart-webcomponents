<template>
  <div class="vue-root">
    <div class="options">
      <div class="option">
        <smart-button id="openButton">Open/Close</smart-button>
      </div>
    </div>
    <smart-window opened label="Window 1">
      <div id="article">
        <section>
          <h3>Window Minimizataion?</h3>
          <p>
            Window minimization allows the element to be temporarly minimized and
            placed in the bottom left corner of the viewport. When minimized the window
            can't be dragged nor resized. The window can be restored to it's normal
            state by calling the
            <b>restore</b> method.
          </p>
        </section>
      </div>
    </smart-window>
    <smart-window opened label="Window 2">
      <div id="article">
        <section>
          <h3>Usage</h3>
          <p>
            When multiple windows are opened the user can minimize those that are
            not in use in order to free the screen and see the background. Minimized
            windows are placed next to each other in a single line starting from the
            bottom left corner of the viewport. When a window has been restored, the
            minimized windows are re-aranged.
          </p>
        </section>
      </div>
    </smart-window>
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
      const smartWindows = document.getElementsByTagName("smart-window");
      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          for (let w = 0; w < smartWindows.length; w++) {
            smartWindows[w].opened = !smartWindows[w].opened;
          }
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

smart-window > .smart-container > .smart-content {
  align-items: initial;
}

smart-window {
  --smart-window-default-height: 250px;
}

smart-window:nth-of-type(1) {
  left: calc(25% - var(--smart-window-default-width) / 2);
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
