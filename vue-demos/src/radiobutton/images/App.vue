<template>
  <div class="vue-root">
    <smart-radio-button checked class="heart">On</smart-radio-button>
    <smart-radio-button class="heart">Off</smart-radio-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

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
smart-radio-button {
  --smart-radio-button-default-size: 24px;
  overflow: visible;
  margin-top: 30px;
  margin-left: 30px;
}

smart-radio-button.heart .smart-input {
  background-image: url(../../../images/check-mark-heart-empty.svg);
  background-repeat: no-repeat;
  border-color: transparent;
  background-color: transparent;
}

smart-radio-button.heart .smart-input::after {
  content: "";
  background: transparent;
}

smart-radio-button.heart .smart-overlay {
  display: none;
}

smart-radio-button.heart[checked] .smart-input {
  background-image: url(../../../images/check-mark-heart.svg);
  background-repeat: no-repeat;
  color: var(--smart-error);
}

smart-radio-button.heart[checked="null"] .smart-input {
  background-image: url(../../../images/check-mark-heart-indetermined.svg);
  background-repeat: no-repeat;
}
</style>
