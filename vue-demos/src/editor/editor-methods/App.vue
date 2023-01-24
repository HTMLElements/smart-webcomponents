<template>
<div class="vue-root">
<smart-editor id="editor">
<p>smartEditor represents a ready-for-use HTML text editor which can simplify
web content creation or be a replacement of your HTML Text Areas.</p>
<h2>Features:</h2>
<ul>
<li>Basic &amp; advanced styling. With smartEditor, you can easily apply bold,
italic, underline styles as well as different fonts and font size.</li>
<li>Colors Picking. The built-in Color Pickers allow you to highlight text
by changing its text color or background color.</li>
<li>Inline editing. The feature allows you to edit inline and the smartEditor's
toolbar is displayed on demand above the editing area.</li>
<li>Right to left interface. smartEditor can switch to Right to Left layout
and editing mode by setting a single property called "rtl" to true.</li>
<li>Hyperlinks. A built-in tool for inserting, modifying and removing hyperlinks
is available.</li>
<li>Images. Images can be edited via a built-in Dialog where you can define
the image's url, size, alt text and layout.</li>
<li>Tables. The Editor allows to creata tables with custom rows/colums and
apply attributes like header, alternation and etc.</li>
<li>Export to HTML and Print.</li>
<li>Customizable Toolbars. The Toolbar items can be customized as well as
the Dialog Window for the table/image/hyperlink actions.</li>
<li>Force paste as plain text. smartEditor has a property called "pasteFormat".
By setting it to "plainText", the clipboard data will be always pasted
as plain text</li>
<li>PC, Touch and Mobile Devices Support</li>
<li>Web Standards Compliant</li>
<li>Rich and easy to use JavaScript API</li>
<li>Easy customization and built-in themes</li>
</ul>
<p>
<table class="browserref notranslate">
<tbody>
<tr>
<th style="font-size:16px;text-align:left;">Element</th>
<th title="Chrome">
<div class="bsChrome"></div>
</th>
<th title="MS Edge">
<div class="bsEdge"></div>
</th>
<th title="Firefox">
<div class="bsFirefox"></div>
</th>
<th title="Safari">
<div class="bsSafari"></div>
</th>
<th title="Opera">
<div class="bsOpera"></div>
</th>
</tr>
<tr>
<td style="text-align:left;">&lt;smart-editor&gt;</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</p>
</smart-editor>
<div class="options">
<div class="description">
<h4>Description</h4>
The following demo showcases most of the Smart Editor Methods. Clicking
on a button below will call the according method.</div>
<div class="option">
<smart-button id="focus">Focus</smart-button>
</div>
<div class="option">
<smart-button id="blur">Blur</smart-button>
</div>
<div class="option">
<smart-button id="collapseToolbar">Collapse toolbar</smart-button>
</div>
<div class="option">
<smart-button id="expandToolbar">Expand Toolbar</smart-button>
</div>
<div class="option">
<smart-button id="disableToolbarItem">Disable Formats Item</smart-button>
</div>
<div class="option">
<smart-button id="enableToolbarItem" disabled>Enable Formats Item</smart-button>
</div>
<div class="option">
<smart-button id="getCharCount">Get Char Count</smart-button>
</div>
<div class="option">
<smart-button id="selectAll">Select All</smart-button>
</div>
<div class="option">
<smart-button id="clearContent">Clear Content</smart-button>
</div>
<div class="option">
<smart-button id="getHTML">Get HTML</smart-button>
</div>
<div class="option">
<smart-button id="getText">Get Text</smart-button>
</div>
<div class="option">
<smart-button id="splitMode">Split Mode</smart-button>
</div>
<div class="option">
<smart-button id="previewMode">Preview / Source Code Mode</smart-button>
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
      const editor = document.getElementById("editor"),
        disableToolbarItemButton = document.getElementById(
          "disableToolbarItem"
        ),
        enableToolbarItemButton = document.getElementById("enableToolbarItem");
      document
        .querySelector(".options")
        .addEventListener("click", function (event) {
          const button = event.target.closest("smart-button");
          if (!button) {
            return;
          }
          const methodName = event.target.closest("smart-button").id;
          let value;
          if (methodName === "disableToolbarItem") {
            value = "formats";
            disableToolbarItemButton.disabled = true;
            enableToolbarItemButton.disabled = false;
          } else if (methodName === "enableToolbarItem") {
            value = "formats";
            disableToolbarItemButton.disabled = false;
            enableToolbarItemButton.disabled = true;
          }
          const output = editor[methodName](value ? value : undefined);
          if (output) {
            window.alert(output);
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

.options smart-button {
  width: 100%;
}

table.browserref {
  border-collapse: collapse;
  width: 100%;
}

table.browserref tr:nth-child(even) {
  background-color: #f1f1f1;
}

table.browserref tr:nth-child(odd) {
  background-color: #ffffff;
}

table.browserref tr.fixzebra {
  background-color: #f1f1f1;
}

table.browserref th {
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #d4d4d4;
  background-color: #ffffff;
  font-weight: normal;
  color: #555555;
  padding: 11px 5px 11px 5px;
  vertical-align: middle;
}

table.browserref th div {
  width: 48px;
  height: 48px;
  display: inline-block;
}

table.browserref td {
  border: 1px solid #d4d4d4;
  text-align: center;
  padding: 8px;
  vertical-align: top;
}

table.browserref th:first-child,
table.browserref td:first-child {
  padding-left: 16px;
}

table.browserref .bsEdge {
  background: url(https://www.htmlelements.com/demos/images/browsers.png) -78px -10px;
}

table.browserref .bsFirefox {
  background: url(https://www.htmlelements.com/demos/images/browsers.png) -10px -78px;
}

table.browserref .bsChrome {
  background: url(https://www.htmlelements.com/demos/images/browsers.png) -10px -10px;
}

table.browserref .bsSafari {
  background: url(https://www.htmlelements.com/demos/images/browsers.png) -146px -10px;
}

table.browserref .bsOpera {
  background: url(https://www.htmlelements.com/demos/images/browsers.png) -78px -78px;
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
