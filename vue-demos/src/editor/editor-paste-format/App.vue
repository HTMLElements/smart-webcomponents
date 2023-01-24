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
        </p>
      </div>
    </smart-editor>
    <div class="options">
      <h4>Description</h4>
      <div class="description">
        <p>
          The following demo illustrates the <b>pasteSettings</b> property in
          addition to the <b>advanced</b> 'paste' toolbar item.
        </p>
        <p>
          The <b>advanced</b> custom option is only available for the
          <b>paste</b> toolbar item and transforms the button into a drop down
          with format options.
        </p>
        Clicking on the <b>paste</b> button inside Editor's toolbar a drop down
        will open allowing to select a custom formatting options.
        <p>
          The <b>pasteSettings</b> property determines the default action for
          pasting inside the Editor.
        </p>
        <p>
          In the following demo the <b>pasteFormat="prompt"</b> is applied which
          triggers a Window on paste event that allows to select the desired
          format.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.editor.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const editor = document.getElementById("editor");
      window.Smart(
        "#editor",
        class {
          get properties() {
            return {
              //Properties
              pasteFormat: "prompt",
              toolbarItems: (() => {
                const customToolbarItems = editor.toolbarItems.slice();
                customToolbarItems.push({
                  name: "paste",
                  advanced: true,
                });
                return customToolbarItems;
              })(),
            };
          }
        }
      );
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
