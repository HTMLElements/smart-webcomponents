<template>
  <div class="vue-root">
    <smart-gauge
      id="gauge1"
      analog-display-type="needle"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="-9223372036854775808"
      max="9223372036854775807"
      value="0"
      scale-type="integer"
      word-length="int64"
      significant-digits="2"
    ></smart-gauge>
    <smart-gauge
      id="gauge2"
      analog-display-type="line"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="1.8E+19"
      value="1.7E+19"
      scale-type="integer"
      word-length="uint64"
      significant-digits="2"
      coerce
      interval="1E+18"
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
