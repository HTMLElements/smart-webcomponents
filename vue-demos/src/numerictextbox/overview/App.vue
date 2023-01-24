<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Numeric Text fields allow users to enter and edit any type of numbers.</h2>
          <div class="module">
            <p>
              Numeric Text fields typically reside in forms but can appear in other
              places, like dialog boxes and search.
            </p>
          </div>
        </div>
      </section>
      <div>
        <smart-numeric-text-box
          placeholder="Enter a number..."
          input-type="integer"
          hint="Idle & empty"
          nullable
          value="null"
        ></smart-numeric-text-box>
        <br />
        <br />
        <br />
        <smart-numeric-text-box placeholder="Enter" show-unit nullable value="null"></smart-numeric-text-box>
        <br />
        <br />
        <br />
        <smart-numeric-text-box radix-display value="123" nullable></smart-numeric-text-box>
        <br />
        <br />
        <br />
        <smart-numeric-text-box disabled nullable></smart-numeric-text-box>
        <p>disabled</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

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
</style>
