<template>
  <div class="vue-root">
    <div class="demo-description">Start typing to see the strength popup feedback template</div>
    <smart-password-text-box
      show-password-strength
      show-password-icon
      tooltip-arrow
      placeholder="Enter your password"
    ></smart-password-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const passwordStrengthTemplate = document.createElement("template");
      passwordStrengthTemplate.id = "passwordStrengthTemplate";
      passwordStrengthTemplate.innerHTML = `<div class="password-strength">
        <span style="margin-left:5px;">{{strength}}</span>
        <div class="strength-meter"></div>
      </div>`;
      document.body.appendChild(passwordStrengthTemplate);

      document.querySelector("smart-password-text-box").tooltipTemplate =
        "passwordStrengthTemplate";
    });
  }
};
</script>

<style>
smart-password-text-box {
  margin: 50px;
}

.password-strength {
  width: auto;
}

.strength-meter {
  margin: 5px 5% 0px 5%;
  width: 90%;
  height: 10px;
  border: lightgray solid 1px;
}

smart-password-text-box .strength-meter {
  background-clip: content-box;
  box-sizing: border-box;
}

smart-password-text-box[show-password-strength]
  .smart-password-short
  .strength-meter {
  background-color: red;
  padding-right: 80%;
}

smart-password-text-box[show-password-strength]
  .smart-password-weak
  .strength-meter {
  background-color: orange;
  padding-right: 60%;
}

smart-password-text-box[show-password-strength]
  .smart-password-far
  .strength-meter {
  background-color: yellow;
  padding-right: 40%;
}

smart-password-text-box[show-password-strength]
  .smart-password-good
  .strength-meter {
  background-color: deepskyblue;
  padding-right: 20%;
}

smart-password-text-box[show-password-strength]
  .smart-password-strong
  .strength-meter {
  background-color: green;
  padding-right: 0%;
}

smart-password-text-box smart-tooltip .smart-tooltip-content {
  border-radius: 2px;
}
</style>
