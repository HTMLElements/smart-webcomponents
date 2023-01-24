<template>
  <div class="vue-root">
    <div class="button-demo swipe-right-button">
      <label>Swipe Right Button</label>
      <div class="demo-buttons-group">
        <div class="wrapper">
          <smart-button class="swipe-right-btn">
            <a href="javascript:void(0);">
              <span>Hover Me!</span>
            </a>
          </smart-button>
        </div>
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

/* Swipe Right Button */
smart-button.swipe-right-btn {
  text-transform: none;
  border-radius: 0;
}

smart-button.swipe-right-btn {
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  outline: none;
}

smart-button.swipe-right-btn button {
  padding: 0;
}

a {
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
}

a span {
  position: relative;
  z-index: 2;
}

a:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff003b;
  transition: all 0.35s;
}

a:hover {
  color: #fff;
}

a:hover:after {
  width: 100%;
}
</style>
