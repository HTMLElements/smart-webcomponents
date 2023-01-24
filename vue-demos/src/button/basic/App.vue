<template>
  <div class="vue-root">
    <div class="demo-horizontal-layout">
      <div>
        <label>Default Buttons</label>
        <div class="demo-buttons-group">
          <smart-button>Normal</smart-button>
          <smart-button class="raised">Raised</smart-button>
          <smart-button class="outlined">Outlined</smart-button>
          <smart-button class="flat">Flat</smart-button>
          <smart-button class="floating">
            <span
              class="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"
            >
              <i class="material-icons">&#xE53F;</i>
            </span>
          </smart-button>
        </div>
      </div>
      <div>
        <label>Primary Buttons</label>
        <div class="demo-buttons-group">
          <smart-button class="primary">Normal</smart-button>
          <smart-button class="raised primary">Raised</smart-button>
          <smart-button class="outlined primary">Outlined</smart-button>
          <smart-button class="flat primary">Flat</smart-button>
          <smart-button class="floating primary">
            <span
              class="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"
            >
              <i class="material-icons">&#xE53F;</i>
            </span>
          </smart-button>
        </div>
      </div>
      <div>
        <label>Secondary Buttons</label>
        <div class="demo-buttons-group">
          <smart-button class="secondary">Normal</smart-button>
          <smart-button class="raised secondary">Raised</smart-button>
          <smart-button class="outlined secondary">Outlined</smart-button>
          <smart-button class="flat secondary">Flat</smart-button>
          <smart-button class="floating secondary">
            <span
              class="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"
            >
              <i class="material-icons">&#xE53F;</i>
            </span>
          </smart-button>
        </div>
      </div>
      <div>
        <label>Success Buttons</label>
        <div class="demo-buttons-group">
          <smart-button class="success">Normal</smart-button>
          <smart-button class="raised success">Raised</smart-button>
          <smart-button class="outlined success">Outlined</smart-button>
          <smart-button class="flat success">Flat</smart-button>
          <smart-button class="floating success">
            <span
              class="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"
            >
              <i class="material-icons">&#xE53F;</i>
            </span>
          </smart-button>
        </div>
      </div>
      <div>
        <label>Error Buttons</label>
        <div class="demo-buttons-group">
          <smart-button class="error">Normal</smart-button>
          <smart-button class="raised error">Raised</smart-button>
          <smart-button class="outlined error">Outlined</smart-button>
          <smart-button class="flat error">Flat</smart-button>
          <smart-button class="floating error">
            <span
              class="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"
            >
              <i class="material-icons">&#xE53F;</i>
            </span>
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
.demo-horizontal-layout {
  display: flex;
  flex-direction: column;
}
.dark-mode .demo-icon {
  background-image: none;
}
label {
  font-size: 14px;
}
.demo-buttons-group {
  margin: 8px;
}
.demo-buttons-group smart-ui-button {
  margin: 8px;
}
.button-demo-icon {
  position: relative;
  left: -5px;
}

/* fallback */
@font-face {
	font-family: 'Material Icons';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

.material-icons {
	font-family: 'Material Icons';
	font-weight: normal;
	font-style: normal;
	font-size: inherit;
	line-height: 1;
	letter-spacing: normal;
	text-transform: none;
	display: inline-block;
	white-space: nowrap;
	word-wrap: normal;
	direction: ltr;
	-webkit-font-feature-settings: 'liga';
	-webkit-font-smoothing: antialiased;
}
</style>
