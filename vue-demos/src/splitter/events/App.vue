<template>
  <div class="vue-root">
    <smart-splitter>
      <smart-splitter-item collapsible size="150"></smart-splitter-item>
      <smart-splitter-item collapsible></smart-splitter-item>
    </smart-splitter>
    <div class="options">
      <div>Event Log:</div>

      <div class="option">
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smartSplitter = document.querySelector("smart-splitter"),
        eventLog = document.getElementById("log");

      function getElement(event) {
        const element = document.createElement("div");
        element.textContent = "Type: " + event.type;
        if (event.detail.x) {
          element.textContent +=
            ", X: " + event.detail.x + ", Y: " + event.detail.y;
        }
        return element;
      }
      smartSplitter.addEventListener("resize", function(event) {
        if (!event.detail) {
          return;
        }
        eventLog.appendChild(getElement(event));
      });
      smartSplitter.addEventListener("expand", function(event) {
        eventLog.appendChild(getElement(event));
      });
      smartSplitter.addEventListener("collapse", function(event) {
        eventLog.appendChild(getElement(event));
      });
      smartSplitter.addEventListener("resizeStart", function(event) {
        eventLog.appendChild(getElement(event));
      });
      smartSplitter.addEventListener("resizeEnd", function(event) {
        eventLog.appendChild(getElement(event));
      });
    });
  }
};
</script>

<style>
smart-splitter {
  width: 60%;
}

@media screen and (max-width: 700px) {
  smart-splitter {
    width: 100%;
  }
}
</style>
