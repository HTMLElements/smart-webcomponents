<template>
  <div class="vue-root">
    <div id="demoBox">
      <div id="frame">
        <div id="frameHeader">Header</div>
        <div id="frameContent">Content</div>
      </div>
    </div>
    <br />
    <div>Border Color</div>
    <br />
    <smart-color-picker
      drop-down-append-to="body"
      display-mode="default"
      drop-down-width="auto"
      placeholder="Border Color"
      id="borderColor"
    ></smart-color-picker>
    <br />
    <div>Header Background</div>
    <br />
    <smart-color-picker
      drop-down-append-to="body"
      display-mode="default"
      drop-down-width="auto"
      placeholder="Header Background Color"
      id="headerBackground"
    ></smart-color-picker>
    <div>Header Font Color</div>
    <br />
    <smart-color-picker
      drop-down-append-to="body"
      display-mode="default"
      drop-down-width="auto"
      placeholder="Header Font Color"
      id="headerColor"
    ></smart-color-picker>
    <div>Background</div>
    <br />
    <smart-color-picker
      drop-down-append-to="body"
      display-mode="default"
      drop-down-width="auto"
      placeholder="Background Color"
      id="background"
    ></smart-color-picker>
    <div>Font Color</div>
    <br />
    <smart-color-picker
      drop-down-append-to="body"
      display-mode="default"
      drop-down-width="auto"
      placeholder="Font Color"
      id="color"
    ></smart-color-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const frame = document.getElementById("frame"),
        frameHeader = document.getElementById("frameHeader"),
        frameContent = document.getElementById("frameContent"),
        headerBackground = document.getElementById("headerBackground"),
        headerColor = document.getElementById("headerColor"),
        background = document.getElementById("background"),
        borderColor = document.getElementById("borderColor"),
        color = document.getElementById("color");
      headerBackground.addEventListener("change", function(event) {
        frameHeader.style.backgroundColor = event.detail.value;
      });
      headerColor.addEventListener("change", function(event) {
        frameHeader.style.color = event.detail.value;
      });
      background.addEventListener("change", function(event) {
        frameContent.style.backgroundColor = event.detail.value;
      });
      color.addEventListener("change", function(event) {
        frameContent.style.color = event.detail.value;
      });
      borderColor.addEventListener("change", function(event) {
        frame.style.borderColor = event.detail.value;
      });
    });
  }
};
</script>

<style>
smart-color-picker {
  --smart-drop-down-element-max-width: 500px;
  --smart-drop-down-element-max-height: auto;
  --smart-drop-down-element-min-width: 500px;
  --smart-drop-down-element-min-height: 350px;
  width: 250px;
  display: inline-block;
}

#demoBox {
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 60%;
  border: dashed lightgray 1px;
  color: gray;
  font-size: 20px;
  overflow-y: auto;
}

#frame {
  border: gray solid 1px;
  border-radius: 5px;
  overflow: hidden;
}

#frameHeader,
#frameContent {
  padding: 10px;
  font-size: 14px;
  font-family: Arial;
}

#frameHeader {
  background-color: #dedede;
  color: white;
}

#frameContent {
  background-color: #f7f7f7;
  color: gray;
  padding-bottom: 50px;
}
</style>
