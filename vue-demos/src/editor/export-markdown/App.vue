<template>
  <div class="vue-root">
    <smart-editor id="editor">
      <div>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <a href="www.htmlelements.com" title="Smart Elements"
            >Smart Elements</a
          >
        </p>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <h2>Why do we use it?</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
          <img src="./../../../src/images/Album.png" width="100" height="100" />
        </p>
      </div>
      <br />
      <div>
        <h2>Where does it come from?</h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </div>
      <div>
        <h2>Where can I get some?</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </smart-editor>
    <div class="options">
      <div class="demo-description">
        Editor's content can be Printed or exported to MD file via the
        <b>exportData</b> method by clicking on the corresponding button.
      </div>
      <div class="option">
        <smart-button id="exportToPDF">Export to PDF</smart-button>
      </div>
      <div class="option">
        <smart-button id="exportToMD">Export to Markdown</smart-button>
      </div>
      <div class="option">
        <smart-button id="print">Print</smart-button>
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
              editMode: "markdown",
              toolbarItems: [
                "Bold",
                "Italic",
                "Underline",
                "StrikeThrough",
                "|",
                "Formats",
                "OrderedList",
                "UnorderedList",
                "|",
                "hyperlink",
                "Image",
                "|",
                "Print",
                "sourcecode",
                "FullScreen",
                "|",
                "Undo",
                "Redo",
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

Supported Browsers: Chrome, Firefox, Safari, Edge, Opera`,
            };
          }
        }
      );

      const editor = document.querySelector("smart-editor");
      document
        .getElementById("exportToPDF")
        .addEventListener("click", () => editor.exportData("pdf"));
      document
        .getElementById("exportToMD")
        .addEventListener("click", () => editor.exportData("md"));
      document
        .getElementById("print")
        .addEventListener("click", () => editor.print());
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
