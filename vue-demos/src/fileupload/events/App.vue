<template>
  <div class="vue-root">
    <div class="demo-description">File Upload | Events which are raised by the Web Component</div>
    <div class="container">
      <smart-file-upload multiple upload-url></smart-file-upload>
    </div>
    <div class="container" id="eventContainer">
      <h2>Events:</h2>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.fileupload.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const fileUpload = document.getElementsByTagName("smart-file-upload")[0];
      const eventContainer = document.getElementById("eventContainer");
      fileUpload.addEventListener("fileSelected", event =>
        printEventName(event)
      );
      fileUpload.addEventListener("uploadCanceled", event =>
        printEventName(event)
      );
      fileUpload.addEventListener("uploadCompleted", event =>
        printEventName(event)
      );
      fileUpload.addEventListener("uploadError", event =>
        printEventName(event)
      );
      fileUpload.addEventListener("uploadPaused", event =>
        printEventName(event)
      );
      fileUpload.addEventListener("uploadStarted", event =>
        printEventName(event)
      );
      fileUpload.addEventListener("validationError", event =>
        printEventName(event)
      );

      function printEventName(event) {
        const item = document.createElement("div");
        item.innerHTML = item.innerHTML + event.type + "<br />";
        eventContainer.appendChild(item);
      }
    });
  }
};
</script>

<style>
</style>
