<template>
  <div class="vue-root">
    <smart-switch-button class="ios-theme" checked inverted></smart-switch-button>
    <br />
    <smart-switch-button class="circle-theme"></smart-switch-button>
    <br />
    <smart-switch-button class="heart-theme"></smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-switch-button.heart-theme,
smart-switch-button.circle-theme {
  width: 200px;
  height: 40px;
  border-width: 0px;
  --smart-switch-button-thumb-size: 40px;
}

smart-switch-button.heart-theme,
smart-switch-button.circle-theme {
  background-color: transparent;
  border-width: 0px;
}

smart-switch-button.circle-theme .smart-container::before,
smart-switch-button.heart-theme .smart-container::before {
  content: "";
  margin-top: 17px;
  width: 200px;
  height: 8px;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 3px;
  background-color: gray;
}

smart-switch-button.circle-theme[checked] .smart-container::before,
smart-switch-button.heart-theme[checked] .smart-container::before {
  background-color: darkred;
}

smart-switch-button.circle-theme .smart-thumb,
smart-switch-button.heart-theme .smart-thumb {
  width: 40px;
  border-radius: 50%;
}

smart-switch-button.circle-theme .smart-thumb::before,
smart-switch-button.circle-theme .smart-thumb::after,
smart-switch-button.heart-theme .smart-thumb::before,
smart-switch-button.heart-theme .smart-thumb::after {
  content: none !important;
  width: 0px;
  background-color: transparent;
  border-width: 0px;
}

smart-switch-button.circle-theme .smart-thumb.moved,
smart-switch-button.heart-theme .smart-thumb.moved {
  background-color: #999;
}

smart-switch-button.heart-theme .smart-container::before {
  content: "";
  margin-top: 17px;
  width: 180px;
  height: 8px;
  position: absolute;
  left: 10px;
  top: 0px;
  border-radius: 3px;
  background-color: gray;
}

smart-switch-button.heart-theme .smart-container::before {
  margin-top: 18px;
  height: 3px;
}

smart-switch-button.heart-theme .smart-thumb {
  background: url("../../../images/switch-mark-heart-gray.svg") no-repeat
    center center;
  background-color: transparent !important;
  border-radius: 0;
  background-size: 70% 70%;
}

smart-switch-button.heart-theme[checked] .smart-thumb {
  background: url("../../../images/switch-mark-heart-red.svg") no-repeat
    center center;
  background-color: transparent !important;
  border-radius: 0;
  background-size: 70% 70%;
}

smart-switch-button.heart-theme .smart-thumb:active::before,
smart-switch-button.heart-theme .smart-thumb:hover::before {
  content: " " !important;
  width: 40px !important;
  height: 40px !important;
  left: 0px !important;
  top: 0px !important;
  right: auto !important;
  opacity: 0.1;
  border-radius: 50% !important;
  background-color: red !important;
}

smart-switch-button.heart-theme .smart-thumb:active {
  animation-duration: 0.5s !important;
  animation-iteration-count: infinite !important;
  animation-timing-function: ease-in-out !important;
  animation-direction: normal !important;
  animation-name: smart-heart-animation !important;
}

smart-switch-button.heart-theme .smart-thumb:hover {
  background-size: 65% 65%;
}

@keyframes smart-heart-animation {
  0% {
    background-size: 70% 70%;
  }

  50% {
    background-size: 60% 60%;
  }

  100% {
    background-size: 70% 70%;
  }
}

smart-switch-button.ios-theme {
  width: 50px;
  height: 30px;
  border-width: 0px;
  box-shadow: 0 0 1px 0 grey;
  --smart-switch-button-thumb-size: 30px;
}

smart-switch-button.ios-theme {
  background-color: white;
  border-radius: 15px;
  padding: 1px;
  cursor: pointer;
  border-color: lightgray;
}

smart-switch-button.ios-theme[checked] {
  background-color: lightgreen;
  /*border-color:transparent;*/
}

smart-switch-button.ios-theme .smart-thumb {
  width: 26px;
  height: 26px;
  background-color: white !important;
  border-radius: 50%;
  box-shadow: 0px 1px 3px #666;
}

smart-switch-button.ios-theme .smart-thumb::before,
smart-switch-button.ios-theme .smart-thumb::after {
  background-color: transparent !important;
  border-color: transparent !important;
}

smart-switch-button .smart-true-content-container,
smart-switch-button .smart-false-content-container {
  visibility: hidden;
}
</style>
