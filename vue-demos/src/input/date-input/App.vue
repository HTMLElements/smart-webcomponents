<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.DateInput</b> is an input that allows selection of a single date.
        It uses the Intl.DateTimeFormat API for formatting the dates.
      </p>
    </div>
    <h3>Default</h3>
    <smart-date-input placeholder="Please Enter a Date"></smart-date-input>
    <br />
    <br />
    <br />
    <h3>Underlined</h3>
    <smart-date-input class="underlined" placeholder="Please Enter a Date"></smart-date-input>
    <br />
    <br />
    <br />
    <h3>Outlined</h3>
    <smart-date-input class="outlined" placeholder="Please Enter a Date"></smart-date-input>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dateinput.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
