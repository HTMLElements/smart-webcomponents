<template>
  <div class="vue-root">
    <smart-editor id="editor"></smart-editor>
    <div class="options">
      <h4>Editor Import from TXT or HTML</h4>
      <div class="demo-description">
        <p>The Editor component can import content from TXT and HTML files.</p>
        <p>Click on the appropriate button for a live demonstration.</p>
      </div>
      <div class="option">
        <smart-button id="importFromHTML">Import from HTML</smart-button>
      </div>
      <div class="option">
        <smart-button id="importFromTXT">Import from TXT</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
              //Properties
              placeholder:
                "The Editor is empty. Click on the buttons in the Options area to import data.",
            };
          }
        }
      );

      const editor = document.querySelector("smart-editor"),
        button = document.getElementById("importFromHTML"),
        button2 = document.getElementById("importFromTXT");
      button.addEventListener("click", () => {
        button.disabled = true;
        editor.importData("./../../../src/common/demo.html");
      });
      button2.addEventListener("click", () => {
        button2.disabled = true;
        editor.importData("./../../../src/common/demo.txt");
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

.smart-editor .logo {
  background: linear-gradient(
    135deg,
    rgb(12, 61, 120) 0px,
    rgb(252, 55, 82) 100%
  );
  padding: 20px;
}

.smart-editor table td {
  height: 50px;
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
