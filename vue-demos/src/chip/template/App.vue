<template>
  <div class="vue-root">
    <smart-chip avatar="S" value="Steven Buchanan"></smart-chip>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const chip = document.querySelector("smart-chip");
      chip.whenRendered(() => {
        const template = document.createElement("template");
        template.id = "itemTemplate";
        template.innerHTML = `<div>
        <span class="smart-avatar"></span>
        <span class="smart-value">
          {{value}}
          <i class="material-icons">&#xE86A;</i>
        </span>
        <span class="smart-close-button"></span>
      </div>`;

        document.body.appendChild(template);
        chip.itemTemplate = "itemTemplate";
      });
    });
  }
};
</script>

<style>
i {
  line-height: 35px;
  vertical-align: middle;
  margin-left: 20px;
  transform: rotate(0deg);
  transition: transform 2s;
}

smart-chip:hover i {
  transform: rotate(-360deg);
  transition: transform 2s;
}

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
