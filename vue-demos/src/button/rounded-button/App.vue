<template>
  <div class="vue-root">
    <div class="button-demo rounded-button">
      <label>Rounded Button</label>
      <div class="demo-buttons-group">
        <smart-button class="button">Hover me</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
body {
  font-family: Arial;
  text-decoration: none;
  font-size: 20px;
}

.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
  color: black;
}

.demo-buttons-group {
  margin-top: 20px;
}

/* Rounded Button */
smart-button.button {
  display: inline-block;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-family: Arial;
  font-size: 20px;
  height: 53px;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  line-height: initial;
  background: transparent;
  width: auto;
  border: none;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0cf;
  border-radius: 10rem;
  z-index: -2;
}

smart-button.button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #008fb3;
  transition: all 0.3s;
  border-radius: 10rem;
  z-index: -1;
}

smart-button.button:hover {
  color: #fff;
}

smart-button.button:hover:before {
  width: 100%;
}
</style>
