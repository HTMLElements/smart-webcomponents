<template>
  <div class="vue-root">
    <smart-window opened header-template="headerTemplate" footer-template="footerTemplate">
      <section>
        <smart-gauge
          analog-display-type="needle"
          start-angle="-30"
          end-angle="210"
          min="0"
          max="100"
          value="0"
          size-mode="auto"
        ></smart-gauge>
      </section>
    </smart-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const headerTemplate = document.createElement("template");
      headerTemplate.id = "headerTemplate";
      headerTemplate.innerHTML = `<smart-power-button id="power" checked></smart-power-button>
      <label>Gauge</label>`;
      document.body.appendChild(headerTemplate);

      const footerTemplate = document.createElement("template");
      footerTemplate.id = "footerTemplate";
      footerTemplate.innerHTML = `<div>
        Value:
        <span id="value"></span>
      </div>`;
      document.body.appendChild(footerTemplate);

      const window = document.querySelector("smart-window");
      const gauge = document.querySelector("smart-gauge");
      window.whenRendered(() => {
        document.getElementById("power").addEventListener("click", function() {
          gauge.disabled = !this.checked;
        });
      });

      gauge.addEventListener("change", function(event) {
        document.getElementById("value").textContent = event.detail.value;
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
smart-window {
  --smart-window-header-height: 50px;
}

smart-window section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

smart-window > .smart-container > .smart-content {
  overflow-y: auto;
}

smart-window smart-gauge {
  height: 100%;
  width: 100%;
}

smart-window .smart-header,
smart-window .smart-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

smart-window .smart-header label {
  margin-left: 5px;
}
</style>
