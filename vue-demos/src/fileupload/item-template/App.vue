<template>
  <div class="vue-root">
    <smart-file-upload show-progress multiple upload-url></smart-file-upload>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.fileupload.js";
import "smart-webcomponents/source/modules/smart.progressbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const itemTemplate = document.createElement("template");
      itemTemplate.id = "itemTemplate";
      itemTemplate.innerHTML = `<smart-progress-bar>{{filename}}</smart-progress-bar>`;
      document.body.appendChild(itemTemplate);

      const fileUpload = document.querySelector("smart-file-upload");
      fileUpload.itemTemplate = "itemTemplate";
    });
  }
};
</script>

<style>
.smart-file smart-progress-bar {
  height: 100%;
  width: 100%;
  display: block;
}

.smart-file smart-progress-bar .smart-value {
  opacity: 0.5;
}

.smart-file.smart-uploading::before,
.smart-file.smart-uploading::after {
  content: none;
}

smart-file-upload[show-progress] .smart-file smart-progress-bar {
  display: block;
  color: gray;
  font-size: 18px;
}
</style>
