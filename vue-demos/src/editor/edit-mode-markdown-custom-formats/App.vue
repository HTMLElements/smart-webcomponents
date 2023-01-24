<template>
  <div class="vue-root">
    <smart-editor id="editor"></smart-editor>
    <div class="options">
      <h3>Description</h3>
      <div class="description">
        Smart Editor\'s drop down toolbar items can be customized in order to
        have different values. In the following demo the <b>formats</b> toolbar
        item has been modified to include additional headings. Click on the
        toobar item in order to add a format. Clicking on the
        <b>Source Code</b> Toolbar item will show the HTML output of the
        markdown.
      </div>
      <div class="option">
        <h4>Preview HTML Output:</h4>
        <smart-switch-button id="switchButton"
          >Show HTML Output</smart-switch-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";
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
              editMode: "markdown",
              toolbarItems: [
                "bold",
                "italic",
                "Underline",
                "StrikeThrough",
                "hyperlink",
                "removeLink",
                "copy",
                "cut",
                "paste",
                "alignment",
                "table",
                "image",
                "sourcecode",
                {
                  name: "formats",
                  dataSource: [
                    {
                      label: "Header 1",
                      value: "#",
                    },
                    {
                      label: "Header 2",
                      value: "##",
                    },
                    {
                      label: "Header 3",
                      value: "###",
                    },
                    {
                      label: "Header 4",
                      value: "####",
                    },
                    {
                      label: "Header 5",
                      value: "#####",
                    },
                    {
                      label: "Header 6",
                      value: "######",
                    },
                    {
                      label: "Code Block",
                      value: "``````",
                    },
                  ],
                },
                "splitmode",
              ],
              value: `
# Smart UI
Web Components, Anguiar UI Components and React UI Components  for Professional Web Applications

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/collection/HTMLElements/smarthtmlelements-core)


Build responsive, mobile-first projects on the Web with the most advanced front-end component library
-----------------------------------------------------------------------------------------------------

What is Smart UI?
----------------------------

Smart UI is a Framework for building  Web Components and Custom Elements. Smart is similar to Stencil and LitElement. It supports two-way data-binding, templates, property change notifications, Typescript-like type-checking and validation.
Smart does not have third-party dependencies. It is pure Javascript code.
60+ UI Components are built with Smart including Grid, Chart, Kanban, Gantt, Table, Tabs, Accordion, Gauge, DateTimePicker and others. Some of the UI Components built with the library are commercial. Others are open-source.
Smart UI components are available in Javascript, Angular and React. Typescript definitions are included.

Works across devices and browsers
---------------------------------

Supported Browsers: Chrome, Firefox, Safari, Edge, Opera

| Header 1 | Header 2 | Header 3 |
|--------- |--------- |--------- |
| Column A 1 | Column A 2 | Column A 3 |
| Column A 1 | Column A 2 | Column A 3 |
| Column B 1 | Column B 2 | Column B 3 |
`,
            };
          }
        }
      );

      const editor = document.getElementById("editor");
      document
        .getElementById("switchButton")
        .addEventListener("change", function (event) {
          editor.previewMode(event.detail.value);
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
