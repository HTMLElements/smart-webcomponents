<template>
  <div class="vue-root">
    <div class="demo-description">File Upload | Allows Upload of multiple files</div>
    <smart-file-upload multiple upload-url></smart-file-upload>
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
