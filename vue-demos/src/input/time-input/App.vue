<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.TimeInput</b> is an input that allows selection of a Time. It
        uses the Intl.DateTimeFormat API for formatting the time.
      </p>
    </div>
    <h3>Default</h3>
    <smart-time-input placeholder="Please Enter a Time"></smart-time-input>
    <br />
    <br />
    <br />
    <h3>Underlined</h3>
    <smart-time-input class="underlined" placeholder="Please Enter a Time"></smart-time-input>
    <br />
    <br />
    <br />
    <h3>Outlined</h3>
    <smart-time-input class="outlined" placeholder="Please Enter a Time"></smart-time-input>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.timeinput.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
