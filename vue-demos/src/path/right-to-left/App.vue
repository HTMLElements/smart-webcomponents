<template>
  <div class="vue-root">
    <smart-path
      label="בקרת נתיבים"
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
      right-to-left
      locale="he"
    ></smart-path>
    <smart-path
      indicator
      label="מחוון נתיב"
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
      right-to-left
      locale="he"
    ></smart-path>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.path.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const paths = document.querySelectorAll("smart-path"),
        messages = Object.assign({}, paths[0].messages);
      messages["he"] = {
        notAPath: "הגדר לא לנתיב",
        validPath: "הגדר לנתיב תקף"
      };
      for (let p = 0; p < paths.length; p++) {
        paths[p].messages = messages;
      }
    });
  }
};
</script>

<style>
smart-path {
  float: left;
  margin: 2.5%;
}
</style>
