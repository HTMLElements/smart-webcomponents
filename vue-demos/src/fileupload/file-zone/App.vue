<template>
  <div class="vue-root">
    <div id="fileZone">
      <h3>Files to upload:</h3>
    </div>
    <smart-file-upload
      append-to="fileZone"
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
#fileZone {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  /*border: lightgray solid 1px;
    */
}

#fileZone .smart-selected-files:empty::after {
  content: "No selected files";
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: lightgray;
  text-align: center;
}
</style>
