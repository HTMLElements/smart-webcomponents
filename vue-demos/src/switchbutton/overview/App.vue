<template>
  <div class="vue-root">
    <p>
      On/off switches toggle the state of a single settings option. The option
      that the switch controls, as well as the state it’s in, should be made
      clear from the corresponding inline label. Switches take on the same visual
      properties of the radio button.
    </p>
    <br />
    <br />
    <smart-switch-button checked></smart-switch-button>
    <br />
    <br />
    <smart-switch-button></smart-switch-button>
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
      // Your code here
    });
  }
};
</script>

<style>
smart-switch-button {
  margin-left: 50px;
}
</style>
