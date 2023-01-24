<template>
  <div class="vue-root">
    <div class="demo-description">File Upload | Localization of Strings</div>
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
    onMounted(() => {
      const fileUpload = document.getElementsByTagName("smart-file-upload")[0];
      fileUpload.messages = {
        en: {
          browse: "Browse",
          uploadFile: "Upload File",
          cancelFile: "Cancel File",
          pauseFile: "Pause File",
          uploadAll: "Upload All",
          cancelAll: "Cancel All",
          pauseAll: "Pause All",
          totalFiles: "Total files: ",
          connectionError:
            "{{elementType}}: File Upload requires connection to the server.",
          wrongItemIndex:
            "{{elementType}}: There is no file with such an index in the list of uploaded files.",
          tooLongFileName: "{{elementType}}: File name is too long."
        },
        de: {
          browse: "Durchsuche",
          uploadFile: "Hochladen",
          cancelFile: "Absagen",
          pauseFile: "Abbrechen",
          uploadAll: "Alle Hochladen",
          cancelAll: "Alle Absagen",
          pauseAll: "Abbrechen",
          totalFiles: "Gesamtzahl der Dateien: ",
          connectionError:
            "{{elementType}}: Der Datei-Upload erfordert eine Verbindung zum Server.",
          wrongItemIndex:
            "{{elementType}}: Es gibt keine Datei mit einem solchen Index in der Liste der hochgeladenen Dateien.",
          tooLongFileName: "{{elementType}}: Dateiname ist zu lang."
        }
      };
      fileUpload.locale = "de";
    });
  }
};
</script>

<style>
smart-file-upload .smart-upload-all-button,
smart-file-upload .smart-cancel-all-button,
smart-file-upload .smart-pause-all-button {
  width: 120px;
  height: 35px;
}

smart-file-upload {
  width: 380px;
}
</style>
