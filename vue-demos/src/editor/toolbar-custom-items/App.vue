<template>
  <div class="vue-root">
    <smart-editor id="editor"
      >smartEditor represents a ready-for-use HTML text editor which can
      simplify web content creation or be a replacement of your HTML Text
      Areas.</smart-editor
    >
    <div class="options">
      <div class="description">
        <h4>Description</h4>
        The following demo shows how the user can customize some items and event
        add a custom Toolbar item to the Editor.
        <p>The <b>BackgroundColor</b> item has been disabled.</p>
        <p>The <b>FontSize</b> item has custom drop down options.</p>
        <p>A new <b>Custom</b> Toolbar item named 'ddl' has been added.</p>
        <p>
          A new <b>Custom</b> Toolbar item named 'customButton' has been added.
        </p>
        <p>
          The <b>Hyperlink</b> Toolbar item's window editor has some of it's
          input fields pre-populated.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.editor.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

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
              toolbarItems: [
                {
                  name: "BackgroundColor",
                  disabled: true,
                },
                {
                  name: "FontSize",
                  dataSource: ["10", "20", "30", "40"],
                },
                {
                  name: "ddl",
                  value: "2",
                  width: 100,
                  template: (element, item) => {
                    if (item.name === "ddl") {
                      const dropDownList = document.createElement(
                        "smart-drop-down-list"
                      );
                      dropDownList.dataSource = ["1", "2", "3"];
                      dropDownList.dropDownAppendTo = "body";
                      dropDownList.placeholder = "Enter...";
                      dropDownList.classList.add(
                        "custom-drop-down-toolbar-item"
                      );
                      element.appendChild(dropDownList);
                    }
                  },
                },
                {
                  name: "customButton",
                  width: 100,
                  template: "<smart-button>Button</smart-button>",
                },
                {
                  name: "hyperlink",
                  inlineToolbarItems: [
                    {
                      width: 100,
                      template: "<smart-button>Button</smart-button>",
                    },
                  ],
                  editor: {
                    address: "http://www.",
                    target: "ala",
                  },
                },
                "removeLink",
              ],
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
