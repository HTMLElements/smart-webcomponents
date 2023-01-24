<template>
  <div class="vue-root">
    <smart-path
      label="Path Control"
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
    ></smart-path>
    <div class="options">
      <div class="option">
        <smart-button>setToNotAPath</smart-button>
      </div>
      <div class="option">
        <smart-button>setToEmptyPath</smart-button>
      </div>
      <div class="option">
        <smart-button>open</smart-button>
      </div>
      <div class="option">
        <smart-button>close</smart-button>
      </div>
      <div class="option">
        <h4>Value:</h4>
        <div id="log">C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.path.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const path = document.querySelector("smart-path");
      document.addEventListener("click", function(event) {
        const methodName = event.target.textContent;
        switch (methodName) {
          case "setToNotAPath":
            path.setToNotAPath();
            break;
          case "setToEmptyPath":
            path.setToEmptyPath();
            break;
          case "open":
            path.open();
            break;
          case "close":
            path.close();
            break;
        }
      });
      path.addEventListener("change", function(event) {
        document.querySelector("#log").innerHTML = event.detail.value;
      });
    });
  }
};
</script>

<style>
smart-path {
  float: left;
  margin: 2.5%;
}

smart-button {
  width: 100%;
}
</style>
