<template>
  <div class="vue-root">
    <smart-gauge
      analog-display-type="fill"
      start-angle="0"
      end-angle="180"
      min="-15"
      max="15"
      value="13"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      analog-display-type="needle"
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="0"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      analog-display-type="needle"
      start-angle="30"
      end-angle="70"
      min="0"
      max="100"
      value="100"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      analog-display-type="fill"
      start-angle="30"
      end-angle="70"
      min="0"
      max="100"
      value="100"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      id="gaugeLargeFont"
      analog-display-type="fill"
      start-angle="30"
      end-angle="70"
      min="0"
      max="100"
      value="100"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      analog-display-type="line"
      start-angle="-30"
      end-angle="-70"
      min="0"
      max="100"
      value="100"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      analog-display-type="line"
      start-angle="-70"
      end-angle="-30"
      min="0"
      max="100"
      value="100"
      size-mode="auto"
    ></smart-gauge>
    <smart-gauge
      analog-display-type="line"
      start-angle="80"
      end-angle="100"
      min="0"
      max="100"
      value="100"
      size-mode="auto"
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
  margin-top: 100px;
}
#gaugeLargeFont {
  font-size: 24px;
}
</style>
