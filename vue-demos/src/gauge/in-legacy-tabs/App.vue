<template>
  <div class="vue-root">
    <div id="smartTabs">
      <ul>
        <li>Gauge 1</li>
        <li>Gauge 2</li>
      </ul>
      <div id="gauge1Container" style="padding: 10px;"></div>
      <div id="gauge2Container" style="padding: 10px;"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";

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
