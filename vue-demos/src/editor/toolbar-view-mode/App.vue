<template>
  <div class="vue-root">
    <smart-editor id="editor"></smart-editor>
    <div class="options">
      <div class="description">
        <h4>Toolbar Scroll View Mode</h4>
      </div>
      <div class="option">
        <p>
          <smart-radio-button group-name="editorOptions"
            ><b>multiRow</b> - Multi-row Toolbar</smart-radio-button
          >
        </p>
        <p>
          <smart-radio-button group-name="editorOptions" checked
            ><b>toggle</b> - Expandable Toolbar</smart-radio-button
          >
        </p>
        <p>
          <smart-radio-button group-name="editorOptions"
            ><b>scroll</b> - Scrollable Toolbar</smart-radio-button
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.editor.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#editor",
        class {
          get properties() {
            return {
              placeholder: "Please Enter content...",
              //Properties
              toolbarItems: [
                "Bold",
                "Italic",
                "Underline",
                "StrikeThrough",
                "FontName",
                "FontSize",
                "FontColor",
                "BackgroundColor",
                "LowerCase",
                "UpperCase",
                "|",
                "Formats",
                "Alignment",
                "OrderedList",
                "UnorderedList",
                "Outdent",
                "Indent",
                "|",
                "hyperlink",
                "Image",
                "|",
                "ClearFormat",
                "SourceCode",
                "FullScreen",
                "|",
                "Undo",
                "Redo",
              ],
            };
          }
        }
      );

      const editor = document.getElementById("editor"),
        options = document.querySelector(".options");

      options.addEventListener("change", function (event) {
        const target = event.target,
          innerHTML = target.innerHTML;

        if (target instanceof window.Smart.RadioButton) {
          if (innerHTML.indexOf("multiRow") > -1) {
            editor.toolbarViewMode = "multiRow";
          } else if (innerHTML.indexOf("toggle") > -1) {
            editor.toolbarViewMode = "toggle";
          } else {
            editor.toolbarViewMode = "scroll";
          }
        }
      });
    });
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.smart-editor {
  width: calc(100% - 300px);
  height: 100%;
}

@media (max-width: 750px) {
  .smart-editor {
    width: 100%;
  }
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 260px;
}

@media (max-width: 750px) {
  .options {
    position: relative;
    top: 30px;
    width: 240px;
    margin: 0 auto;
  }
}

#app,
.vue-root {
  width: 100%;
  height: 100%;
}
</style>
