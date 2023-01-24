<template>
  <div class="vue-root">
    <smart-masked-text-box label="מספר טלפון" mask="+1 (###) ### - ####" right-to-left></smart-masked-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-masked-text-box {
  margin-top: 25px;
}
</style>
