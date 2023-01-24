<template>
  <div class="vue-root">
    <div class="button-demo button-n-45">
      <div class="demo-buttons-group">
        <div class="container">
          <div class="center">
            <smart-button class="btn">
              <svg width="180px" height="60px" viewBox="0 0 180 60">
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
              </svg>
              <span>HOVER ME</span>
            </smart-button>
          </div>
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
@import url("https://fonts.googleapis.com/css?family=Lato:100&display=swap");

.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
  color: white;
}

.demo-buttons-group {
  margin-top: 20px;
}

/* Button N° 045 */
.container {
  margin: 0;
}

.center {
  width: 180px;
  height: 60px;
  position: absolute;
}

smart-button.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  box-sizing: initial;
  background: transparent;
  border: 1px solid #91c9ff;
  outline: none;
  padding: 0;
  border-radius: 0;
  transition: 1s ease-in-out;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.btn {
  border-radius: 0;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: var(--smart-secondary);
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn:hover {
  transition: 1s ease-in-out;
  background: var(--smart-primary);
  color: var(--smart-primary-color);
}

.btn:hover svg {
  stroke-dashoffset: -480;
}

.btn span {
  font-size: 18px;
  font-weight: 100;
}
</style>
