<template>
  <div class="vue-root">
    <smart-check-box checked class="heart">Check Box</smart-check-box>
    <smart-check-box class="heart">Check Box 2</smart-check-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // Your code here
    });
  }
};
</script>

<style>
smart-check-box {
  --smart-check-box-default-size: 24px;
  overflow: visible;
  margin-top: 30px;
}

smart-check-box.heart .smart-input {
  background-image: url(../../../images/check-mark-heart-empty.svg);
  background-repeat: no-repeat;
  border-color: transparent;
  background-color: transparent;
}

smart-check-box.heart .smart-input::after {
  content: "";
}

smart-check-box.heart .smart-overlay {
  display: none;
}

smart-check-box.heart[checked] .smart-input {
  background-image: url(../../../images/check-mark-heart.svg);
  background-repeat: no-repeat;
  color: var(--smart-error);
}

smart-check-box.heart[checked="null"] .smart-input {
  background-image: url(../../../images/check-mark-heart-indetermined.svg);
  background-repeat: no-repeat;
}
</style>
