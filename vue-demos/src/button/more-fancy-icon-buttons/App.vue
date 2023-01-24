<template>
  <div class="vue-root">
    <div class="button-demo more-fancy-icon-buttons">
      <label>More fancy Icon buttons</label>
      <div class="demo-buttons-group">
        <div class="icon-container">
          <smart-button class="icon icon-fill">
            <i class="fa fa-home"></i>
          </smart-button>
          <smart-button class="icon icon-enter">
            <i class="fa fa-user"></i>
          </smart-button>
          <smart-button class="icon icon-expand">
            <i class="fa fa-bars"></i>
          </smart-button>
          <smart-button class="icon icon-collapse">
            <i class="fa fa-sign-in"></i>
          </smart-button>
          <smart-button class="icon icon-rotate">
            <i class="fa fa-phone"></i>
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
.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.demo-buttons-group {
  margin-top: 20px;
}

/* More fancy Icon buttons */
smart-button.icon {
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  background: transparent;
  border: none;
}

smart-button.icon button {
  z-index: 2;
}

.container {
  display: table;
  height: 95vh;
  width: 90%;
  padding-bottom: 5vh;
  margin: auto auto;
  background: #2d2c3e;
  z-index: -1;
}

.content {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

h1 {
  font-family: "Lato", sans-serif;
  font-size: 36px;
  font-weight: 300;
}

.icon-container {
  width: 100%;
  height: 60px;
}

.icon {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 30px;
  overflow: hidden;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.25s ease;
  border-radius: 30px;
}

.icon i {
  position: relative;
  font-size: 30px;
  color: inherit;
  transition: all 0.25s ease;
}

.icon-fill {
  color: #16a085;
}
.icon-enter {
  color: #eb9532;
}
.icon-expand {
  color: #c82647;
}
.icon-collapse {
  color: #8cc63f;
}
.icon-rotate {
  color: #7e3661;
}

.icon-fill:hover {
  color: #fff;
}
.icon-enter:hover {
  color: #fff;
}
.icon-expand:hover {
  color: #fff;
}
.icon-collapse:hover {
  color: #fff;
}
.icon-rotate:hover {
  color: #fff;
}

.icon-fill::before {
  transition-duration: 0.5s;
  box-shadow: inset 0 0 0 1px #16a085;
}

.icon-fill:hover::before {
  box-shadow: inset 0 0 0 60px #16a085;
}

.icon-enter::after {
  box-shadow: inset 0 0 0 1px #eb9532;
}

.icon-enter::before {
  border-radius: 0;
  margin-left: -100%;
  box-shadow: inset 0 0 0 60px #eb9532;
}

.icon-enter:hover::before {
  margin-left: 0;
}

.icon-expand::after {
  box-shadow: inset 0 0 0 1px #c82647;
}

.icon-expand::before {
  margin-left: -100%;
  box-shadow: inset 0 0 0 60px #c82647;
}

.icon-expand:hover::before {
  box-shadow: inset 0 0 0 1px #c82647;
  margin-left: 0px;
  background: #c82647;
}

.icon-collapse::before {
  border-radius: 0;
}

.icon-collapse:hover::before {
  box-shadow: inset 0 30px 0 0 #8cc63f, inset 0 -30px 0 0 #8cc63f;
}

.icon-collapse::after {
  box-shadow: inset 0 0 0 1px #8cc63f;
}

.icon-rotate {
  box-shadow: inset 0 0 0 1px #7e3661;
}

.icon-rotate::after,
.icon-rotate::before {
  border: 0px solid transparent;
}

.icon-rotate:hover::before {
  transition: border-top-width 0.3s ease, border-top-color 0.3s ease;
  border-width: 60px;
  border-top-color: #7e3661;
}

.icon-rotate:hover::after {
  transition: border-left-width 0.3s ease, border-left-color 0.3s ease;
  border-width: 60px;
  border-left-color: #7e3661;
}

.icon-rotate:hover {
  transition: background 0.001s ease 0.3s;
  background: #7e3661;
}

.icon-rotate i {
  z-index: 1;
}
</style>
