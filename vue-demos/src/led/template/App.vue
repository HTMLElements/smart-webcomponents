<template>
  <div class="vue-root">
    Custom LED template
    <br />
    <br />
    <smart-led indeterminate-content="||" true-content="On" false-content="Off"></smart-led>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.led.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const indeterminateTemplate = document.createElement("template");
      indeterminateTemplate.id = "indeterminateTemplate";
      indeterminateTemplate.innerHTML = `<span class="smart-indeterminate-content">{{content}}</span>`;
      document.body.appendChild(indeterminateTemplate);

      const trueTemplate = document.createElement("template");
      trueTemplate.id = "trueTemplate";
      trueTemplate.innerHTML = `<span class="smart-true-content">{{content}}</span>`;
      document.body.appendChild(trueTemplate);

      const falseTemplate = document.createElement("template");
      falseTemplate.id = "falseTemplate";
      falseTemplate.innerHTML = `<span class="smart-false-content">{{content}}</span>`;
      document.body.appendChild(falseTemplate);

      const led = document.querySelector("smart-led");
      led.checked = null;
      led.indeterminateTemplate = "indeterminateTemplate";
      led.trueTemplate = "trueTemplate";
      led.falseTemplate = "falseTemplate";
    });
  }
};
</script>

<style>
.smart-indeterminate-content,
.smart-true-content,
.smart-false-content {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 10px;
}

.smart-indeterminate-content {
  background-color: blue;
}

.smart-true-content {
  background-color: green;
}

.smart-false-content {
  background-color: red;
}
</style>
