<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >File Upload - Component which allows you to upload one or multiple files.</div>
    <smart-file-upload upload-url></smart-file-upload>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.fileupload.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
