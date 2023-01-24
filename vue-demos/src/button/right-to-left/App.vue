<template>
  <div class="vue-root">
    <div class="demo-buttons-group">
      <smart-button right-to-left>רגיל.</smart-button>
      <smart-button class="raised" right-to-left>גויס.</smart-button>
      <smart-button class="outlined" right-to-left>מתואר</smart-button>
      <smart-button class="flat" right-to-left>שטוח</smart-button>
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
}
label {
  font-size: 14px;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}
.demo-buttons-group {
  margin: 8px;
}
.demo-buttons-group smart-button {
  margin: 8px;
}
.glyphicon {
  left: 0;
  top: 3px;
  font-size: 30px;
}

smart-button.floating {
  --smart-button-padding: 0;
}
</style>
