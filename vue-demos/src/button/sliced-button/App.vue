<template>
  <div class="vue-root">
    <div class="button-demo sliced-button">
      <label>Sliced Button</label>
      <div class="demo-buttons-group">
        <smart-button class="btn-slice" href="javascript:void(0)">
          <div class="top">
            <span>Sliced Button</span>
          </div>
          <div class="bottom">
            <span>Sliced Button</span>
          </div>
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
    onMounted(() => {});
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");

.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
}

.demo-buttons-group {
  margin-top: 20px;
}

/* Sliced Button */
.demo-buttons-group а {
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*--Button Styles--*/
smart-button.btn-slice {
  background: transparent;
  width: auto;
  height: auto;
  overflow: initial;
  font-family: "Fjalla One", sans-serif;
  padding: 0;
  border-radius: 0rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  position: relative;
  -webkit-transition: all 1000ms cubic-bezier(0.89, 0, 0.14, 1); /* older webkit */
  -webkit-transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225);
  -moz-transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225);
  -o-transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225);
  transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */
  -webkit-transition-timing-function: cubic-bezier(
    0.89,
    0,
    0.14,
    1
  ); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.89, -0.17, 0.14, 1.225);
  -moz-transition-timing-function: cubic-bezier(0.89, -0.17, 0.14, 1.225);
  -o-transition-timing-function: cubic-bezier(0.89, -0.17, 0.14, 1.225);
  transition-timing-function: cubic-bezier(
    0.89,
    -0.17,
    0.14,
    1.225
  ); /* custom */
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.btn-slice button {
  padding: 0;
  overflow: hidden;
  padding: 22px;
}

smart-button.btn-slice .top {
  position: relative;
  height: 6px;
  overflow: hidden;
  top: 0;
  -webkit-transition: all 300ms cubic-bezier(1, 0, 0.025, 1); /* older webkit */
  -webkit-transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04);
  -moz-transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04);
  -o-transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04);
  transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */
  -webkit-transition-timing-function: cubic-bezier(
    1,
    0,
    0.025,
    1
  ); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04);
  -moz-transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04);
  -o-transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04);
  transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */
  -webkit-transition-delay: 0.35s;
  -moz-transition-delay: 0.35s;
  -ms-transition-delay: 0.35s;
  -o-transition-delay: 0.35s;
  transition-delay: 0.35s;
}

smart-button.btn-slice .bottom {
  position: relative;
  height: 6px;
  overflow: hidden;
  bottom: 0;
  -webkit-transition: all 300ms cubic-bezier(1, 0, 0.025, 1); /* older webkit */
  -webkit-transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04);
  -moz-transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04);
  -o-transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04);
  transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */
  -webkit-transition-timing-function: cubic-bezier(
    1,
    0,
    0.025,
    1
  ); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04);
  -moz-transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04);
  -o-transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04);
  transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */
  -webkit-transition-delay: 0.35s;
  -moz-transition-delay: 0.35s;
  -ms-transition-delay: 0.35s;
  -o-transition-delay: 0.35s;
  transition-delay: 0.35s;
}

smart-button.btn-slice .bottom span {
  top: -6px;
  position: absolute;
  left: 0;
}

smart-button.btn-slice:hover .top {
  top: -5px;
  -webkit-transition-delay: 0.35s;
  -moz-transition-delay: 0.35s;
  -ms-transition-delay: 0.35s;
  -o-transition-delay: 0.35s;
  transition-delay: 0.35s;
}

smart-button.btn-slice:hover .bottom {
  bottom: -5px;
  -webkit-transition-delay: 0.35s;
  -moz-transition-delay: 0.35s;
  -ms-transition-delay: 0.35s;
  -o-transition-delay: 0.35s;
  transition-delay: 0.35s;
}

smart-button.btn-slice:hover,
smart-button.btn-slice:focus,
smart-button.btn-slice:active {
  margin-left: 10px;
}

smart-button.btn-slice:before {
  content: "";
  height: 1px;
  width: 60px;
  position: absolute;
  margin-top: 28px;
  right: -35px;
  transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */
  transition-timing-function: cubic-bezier(
    0.89,
    -0.17,
    0.14,
    1.225
  ); /* custom */
}

smart-button.btn-slice:hover:before {
  width: 130%;
}
</style>
