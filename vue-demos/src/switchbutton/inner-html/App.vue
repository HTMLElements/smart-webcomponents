<template>
  <div class="vue-root">
    <smart-switch-button>
      <span class="smart-true-content">Hello</span>
      <span class="smart-false-content">Bye</span>
    </smart-switch-button>
    <br />
    <smart-switch-button orientation="vertical">
      <span class="smart-true-content">Hello</span>
      <span class="smart-false-content">Bye</span>
    </smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>
 
<style>
smart-switch-button {
  font-size: 10px;
}

smart-switch-button .smart-true-content {
  color: rosybrown;
}

smart-switch-button .smart-false-content {
  color: gray;
}

smart-switch-button[orientation="vertical"] .smart-true-content,
smart-switch-button[orientation="vertical"] .smart-false-content {
  writing-mode: tb-rl;
}

smart-switch-button[orientation="vertical"] .smart-true-content {
  padding: 0px 0px 5px 0px;
}

smart-switch-button[orientation="vertical"] .smart-false-content {
  padding: 5px 0px 0px 0px;
}
</style>
