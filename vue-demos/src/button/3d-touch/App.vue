<template>
  <div class="vue-root">
    <div class="button-demo threed-touch">
      <br />
      <div class="demo-buttons-group">
        <div class="button">
          <smart-button>Mobile First</smart-button>
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

/* 3D Touch */
.button {
  position: relative;
  display: inline-block;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  --smart-border-width: 0px;
}

.button a {
  padding: 20px 40px;
}

.button a,
.button smart-button {
  text-transform: none;
  width: auto;
  height: auto;
  color: white;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  background-color: #ffa12b;
  display: block;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  -webkit-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
  -moz-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
  box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button smart-button button {
  padding: 20px 40px;
  letter-spacing: initial;
  text-shadow: 0px 1px 0px #000;
}

.button a:active,
.button smart-button:active {
  top: 10px;
  background-color: #f78900;
  -webkit-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  -moz-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3pxpx 0 #915100;
  box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
}

.button:after {
  content: "";
  height: 100%;
  width: 100%;
  padding: 4px;
  position: absolute;
  bottom: -15px;
  left: -4px;
  z-index: -1;
  background-color: #2b1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
</style>
