<template>
  <div class="vue-root">
    <div class="demo-horizontal-layout">
      <div>
        <div class="demo-buttons-group">
          <smart-toggle-button class="primary">Toggle Button</smart-toggle-button>
          <smart-toggle-button class="primary raised">Raised Toggle Button</smart-toggle-button>
          <smart-toggle-button class="primary outlined">Outlined Toggle Button</smart-toggle-button>
          <smart-toggle-button class="primary flat">Flat Toggle Button</smart-toggle-button>
          <smart-toggle-button class="primary floating">
            <span class="glyphicon glyphicon-cloud"></span>
          </smart-toggle-button>
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
  width: 300px;
}
label {
  font-size: 14px;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}
.demo-buttons-group {
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 200px;
}
.demo-buttons-group smart-button {
  margin: 8px;
}
.glyphicon {
  display: flex;
  justify-content: center;
  font-size: 30px;
}
</style>
