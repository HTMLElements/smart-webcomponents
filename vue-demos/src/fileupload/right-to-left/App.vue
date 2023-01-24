<template>
  <div class="vue-root">
    <div class="demo-description">העלאת קבצים - רכיב המאפשר להעלות קובץ אחד או מספר רב של קבצים.</div>
    <smart-file-upload right-to-left locale="he"></smart-file-upload>
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
      const fileUpload = document.querySelector("smart-file-upload"),
        messages = Object.assign({}, fileUpload.messages);
      messages["he"] = {
        browse: "דפדף",
        uploadFile: "העלה קובץ",
        cancelFile: "בטל קובץ",
        pauseFile: "השהה קובץ",
        uploadAll: "העלה הכל",
        cancelAll: "בטל הכל",
        pauseAll: "השהה הכל",
        totalFiles: "סך הקבצים: ",
        connectionError: "{{elementType}}: העלאת קובץ דורשת חיבור לשרת.",
        wrongItemIndex:
          "{{elementType}}: אין קובץ עם אינדקס כזה ברשימת הקבצים שהועלה.",
        tooLongFileName: "{{elementType}}: שם הקובץ ארוך מדי."
      };
      fileUpload.messages = messages;
    });
  }
};
</script>

<style>
</style>
