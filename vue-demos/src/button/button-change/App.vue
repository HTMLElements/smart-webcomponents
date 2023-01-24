<template>
  <div class="vue-root">
    <div class="button-demo">
      <label>Button Change</label>
      <div class="button-change">
        <div class="wrapper">
          <div class="link_wrapper">
            <a href="javascript:void(0)">
              <smart-button>Hover Me!</smart-button>
            </a>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path
                  d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"
                />
              </svg>
            </div>
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
body {
  background: #000;
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

/* Button change */
.button-change .wrapper {
  position: relative;
}

.button-change .link_wrapper {
  width: 250px;
  position: relative;
}

.button-change a smart-button {
  background: #333;
  color: #fff;
  border: none;
  width: 250px;
  height: 50px;
  font: inherit;
  border: 3px solid #333;
  border-radius: 0;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

.button-change a smart-button button {
  outline: none;
}

.button-change a:hover {
  text-decoration: none;
}

.button-change a {
  display: block;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.35s;
}

.button-change .icon {
  margin-top: 2px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  top: 0;
  z-index: -1;
  transition: all 0.35s;
}

.button-change .icon svg {
  width: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  transform: rotate(-45deg);
  fill: #2ecc71;
  transition: all 0.35s;
}

.button-change a:hover {
  transform: scaleX(0.9);
}

.button-change a:hover smart-button {
  color: #2ecc71;
  background: transparent;
  border: 3px solid #2ecc71;
}

.button-change a:hover + .icon {
  border: 3px solid #2ecc71;
  right: -15%;
}
</style>
