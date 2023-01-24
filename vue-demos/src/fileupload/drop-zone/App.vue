<template>
  <div class="vue-root">
    <div id="dropZone"></div>
    <smart-file-upload
      drop-zone="dropZone"
      multiple
      upload-url="http://localhost/fileUpload/indexMultiple.php"
    ></smart-file-upload>
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
#dropZone {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border: lightgray solid 1px;
}
</style>
