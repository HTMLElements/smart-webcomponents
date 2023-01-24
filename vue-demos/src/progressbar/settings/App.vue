<template>
  <div class="vue-root">
    <div class="progress-bar-layout">
      <span class="label">Horizontal</span>
      <smart-progress-bar id="progressbar1" class="smart-unselectable" show-progress-value></smart-progress-bar>
      <span class="label">Vertical</span>
      <smart-progress-bar
        id="progressbar2"
        class="smart-unselectable"
        orientation="vertical"
        show-progress-value
      ></smart-progress-bar>
    </div>
    <div class="options">
      <span class="label">Settings</span>
      <div>
        <input type="text" id="input" value="30" />
        <smart-button class="settings-button" onclick="setValue()">Set Value</smart-button>
      </div>
      <span class="label">Layout:</span>
      <div>
        <smart-button class="layout" onclick="setSettings('normal')" disabled>Normal</smart-button>
        <smart-button class="layout" onclick="setSettings('inverted')">inverted</smart-button>
      </div>
      <span class="label">Min:</span>
      <div>
        <smart-button class="min" onclick="setSettings(0)" disabled>0</smart-button>
        <smart-button class="min" onclick="setSettings(50)">50</smart-button>
      </div>
      <span class="label">Max:</span>
      <div>
        <smart-button class="max" onclick="setSettings(100)" disabled>100</smart-button>
        <smart-button class="max" onclick="setSettings(200)">200</smart-button>
      </div>
    </div>
    <div>
      <span class="label">Circular</span>
      <smart-circular-progress-bar id="progressbar3" class="smart-unselectable" show-progress-value></smart-circular-progress-bar>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.progressbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const progressBar1 = document.getElementById("progressbar1"),
        progressBar2 = document.getElementById("progressbar2"),
        progressBar3 = document.getElementById("progressbar3");
      progressBar1.value = 50;
      progressBar2.value = 50;
      progressBar3.value = 50;

      window.setValue = function() {
        const input = document.getElementById("input");
        const value = parseInt(input.value, 10) || 0;
        progressBar1.value = value;
        progressBar2.value = value;
        progressBar3.value = value;
      };
      window.setSettings = function(key) {
        const layoutButtons = document.getElementsByClassName("layout");
        const minButtons = document.getElementsByClassName("min");
        const maxButtons = document.getElementsByClassName("max");
        switch (key) {
          case "normal":
            progressBar1.inverted = false;
            progressBar2.inverted = false;
            progressBar3.inverted = false;
            layoutButtons[0].disabled = true;
            layoutButtons[1].disabled = false;
            break;
          case "inverted":
            progressBar1.inverted = true;
            progressBar2.inverted = true;
            progressBar3.inverted = true;
            layoutButtons[0].disabled = false;
            layoutButtons[1].disabled = true;
            break;
          case 0:
            progressBar1.min = 0;
            progressBar2.min = 0;
            progressBar3.min = 0;
            minButtons[0].disabled = true;
            minButtons[1].disabled = false;
            break;
          case 50:
            progressBar1.min = 50;
            progressBar2.min = 50;
            progressBar3.min = 50;
            minButtons[0].disabled = false;
            minButtons[1].disabled = true;
            break;
          case 100:
            progressBar1.max = 100;
            progressBar2.max = 100;
            progressBar2.max = 100;
            maxButtons[0].disabled = true;
            maxButtons[1].disabled = false;
            break;
          case 200:
            progressBar1.max = 200;
            progressBar2.max = 200;
            progressBar2.max = 200;
            maxButtons[0].disabled = false;
            maxButtons[1].disabled = true;
            break;
          default:
            break;
        }
      };
    });
  }
};
</script>

<style>
#progressbar1 {
  margin-bottom: 20px;
}

input {
  height: 33px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  margin-top: 5px;
  width: 60px;
  border: 1px solid #fafafa;
}

.settings-button,
.layout,
.min,
.max {
  margin-top: 5px;
}

.smart-button,
.progress-bar-layout {
  display: inline-block;
}

.button-layout {
  display: inline-block;
  margin-left: 100px;
}

.label {
  margin-top: 10px;
  margin-bottom: 5px;
  display: inline-block;
}
</style>
