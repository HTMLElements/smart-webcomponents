<template>
  <div class="vue-root">
    <smart-button class="smart-button-large">
      <span class="glyphicon glyphicon-ok"></span> OK
    </smart-button>
    <smart-button class="smart-button">
      <span class="glyphicon glyphicon-ok"></span> OK
    </smart-button>
    <smart-button class="smart-button-small">
      <span class="glyphicon glyphicon-ok"></span> OK
    </smart-button>
    <smart-button class="smart-button-very-small">
      <span class="glyphicon glyphicon-ok"></span> OK
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
</style>
