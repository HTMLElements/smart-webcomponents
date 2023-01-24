<template>
  <div class="vue-root">
    <smart-window opened label="Window Snapping Demo">
      <section>
        <h3>What is Window snapping ?</h3>
        <p>
          Window snapping is a feature that allows the window custom element to
          attach or detach quickly to the edges of the viewport. When the element
          is dragged near the edges of the browser so that the mouse pointer is over
          the edge or passing it a snapping animation will appear indicating that
          the window can be snapped to the edge. When snapped-on the window takes
          the dimensions of the viewport but can still be resized. In order to detach
          it from it's snapped state simply drag the window away. The moment the
          user starts dragging, the window will restore itself to it's original dimensions
          (before snapping). Snapping can occure from the left,right or top side
          of the viewport.
        </p>
      </section>
    </smart-window>
    <div class="options">
      <div class="caption">
        <label>Hint:</label>
      </div>
      <div class="option">
        <p>
          To snap a window on, simply drag it to the left, right or top until the
          mouse pointer reaches the edge of the browser or passes it. An animation
          will appear when the window can be snapped on.
        </p>
      </div>
      <div class="option">
        <smart-button id="controlSnapping">Disable Snapping</smart-button>
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
      document
        .querySelector("smart-button")
        .addEventListener("click", function() {
          if (smartWindow.disableSnap) {
            smartWindow.disableSnap = false;
            this.innerHTML = "Disable Snapping";
          } else {
            smartWindow.disableSnap = true;
            this.innerHTML = "Enable Snapping";
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
