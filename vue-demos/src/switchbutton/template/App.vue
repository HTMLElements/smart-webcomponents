<template>
  <div class="vue-root">
    Custom Switch Button template
    <br />
    <br />
    <smart-switch-button checked="null" true-content="On" false-content="Off"></smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const trueTemplate = document.createElement("template");
      trueTemplate.id = "trueTemplate";
      trueTemplate.innerHTML = `<span class="smart-true-content">{{content}}</span>`;
      document.body.appendChild(trueTemplate);

      const falseTemplate = document.createElement("template");
      falseTemplate.id = "falseTemplate";
      falseTemplate.innerHTML = `<span class="smart-false-content">{{content}}</span>`;
      document.body.appendChild(falseTemplate);

      const switchButton = document.querySelector("smart-switch-button");
      switchButton.trueTemplate = "trueTemplate";
      switchButton.falseTemplate = "falseTemplate";
    });
  }
};
</script>

<style>
smart-switch-button .smart-true-content,
smart-switch-button .smart-false-content {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

smart-switch-button .smart-true-content {
  background-color: green;
}

smart-switch-button .smart-false-content {
  background-color: red;
}
</style>
