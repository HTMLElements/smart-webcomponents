<template>
  <div class="vue-root">
    <div class="button-demo button-concept-demo">
      <br />
      <div class="demo-buttons-group">
        <smart-button class="button-concept">
          <a class="button" role="button">
            <span>remove</span>

            <div class="icon">
              <i class="fa fa-remove"></i>

              <i class="fa fa-check"></i>
            </div>
          </a>
        </smart-button>
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
    onMounted(() => {
      "use strict";
      let button = document.querySelector(".button");
      let removeSuccess = () => {
        button.classList.remove("success");
      };
      button.addEventListener("click", function() {
        button.classList.add("success");
        setTimeout(function() {
          removeSuccess();
        }, 3000);
      });
    });
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
  color: black;
}

.demo-buttons-group {
  margin-top: 20px;
}

/* Button concept */
/* Reset */
@import url(//codepen.io/chrisdothtml/pen/ojLzJK.css);

smart-button.button-concept {
  width: auto;
  height: auto;
  color: white;
  border: none;
  outline: none;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  background: transparent;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.button-concept button {
  padding: 0;
}

/* Main Styles */
smart-button.button-concept .button {
  display: flex;
  background-color: #c0392b;
  width: 300px;
  height: 100px;
  line-height: 100px;
  color: #fff;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

smart-button.button-concept .button span,
smart-button.button-concept .button .icon {
  display: block;
  height: 100%;
  text-align: center;
  position: relative;
  top: 0;
}

smart-button.button-concept .button span {
  width: 72%;
  line-height: inherit;
  font-size: 22px;
  text-transform: uppercase;
  left: 0;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

smart-button.button-concept .button span:after {
  content: "";
  background-color: #a53125;
  width: 2px;
  height: 70%;
  position: absolute;
  top: 15%;
  right: -1px;
}

smart-button.button-concept .button .icon {
  width: 28%;
  right: 0;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

smart-button.button-concept .button .icon .fa {
  font-size: 30px;
  vertical-align: middle;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
}

smart-button.button-concept .button .icon .fa-check {
  display: none;
}

smart-button.button-concept .button.success span,
smart-button.button-concept .button:hover span {
  left: -72%;
  width: 0 !important;
  opacity: 0;
}

smart-button.button-concept .button.success .icon,
smart-button.button-concept .button:hover .icon {
  width: 100%;
}

smart-button.button-concept .button.success .icon .fa,
smart-button.button-concept .button:hover .icon .fa {
  font-size: 45px;
}

smart-button.button-concept .button.success {
  background-color: #27ae60;
}

smart-button.button-concept .button.success .icon .fa-remove {
  display: none;
}

smart-button.button-concept .button.success .icon .fa-check {
  display: inline-block;
}

smart-button.button-concept .button:hover {
  opacity: 0.9;
}

smart-button.button-concept .button:active {
  opacity: 1;
}
</style>
