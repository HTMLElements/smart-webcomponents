<template>
  <div class="vue-root">
    <div class="button-demo simple-button">
      <label>Simple Button</label>
      <div class="demo-buttons-group">
        <smart-button class="button">button</smart-button>
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
  background: #fff;
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

/* Simple Button */
.button {
  width: auto;
  height: auto;
  border: none;
  border-radius: 0;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 9px 26px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #fc6e51;
  text-decoration: none;
  color: white;
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  position: absolute;
  transition: background-color 0.6s ease;
  overflow: hidden;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button button {
  pointer-events: none;
}

.button:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;
  -webkit-transform-style: flat;
  transform-style: flat;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  transition: width 0.3s ease, height 0.3s ease;
}

.button:active:after {
  width: 200px;
  height: 200px;
}
</style>
