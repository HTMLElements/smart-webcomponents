<template>
  <div class="vue-root">
    <smart-gauge
      id="gauge"
      analog-display-type="needle"
      scale-type="integer"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="25"
      right-to-left
      unit="קג"
      show-unit
    ></smart-gauge>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-gauge {
  width: 250px;
}
</style>
