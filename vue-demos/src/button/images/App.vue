<template>
  <div class="vue-root">
    <smart-button class="primary large">
      <i class="material-icons">&#xE53F;</i> Attractions
    </smart-button>
    <smart-button class="secondary">
      <i class="material-icons">&#xE53F;</i> Attractions
    </smart-button>
    <smart-button class="success small">
      <i class="material-icons">&#xE53F;</i> Attractions
    </smart-button>
    <smart-button class="very-small">
      <i class="material-icons">&#xE53F;</i> Attractions
    </smart-button>
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
smart-button {
  width: auto;
  height: auto;
}
.material-icons {
  display: flex;
  flex-flow: column;
}

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
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
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
