<template>
  <div class="vue-root">
    <table>
      <thead>
        <tr>
          <th>Encoded Path</th>
          <th>Windows</th>
          <th>Linux</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>//rel//../Folder/File.txt</td>
          <td>..\Folder\File.txt</td>
          <td>../Folder/File.txt</td>
          <td>This represents a relative file path.</td>
        </tr>
        <tr>
          <td>//abs//C/Folder/File.txt</td>
          <td>C:\Folder\File.txt</td>
          <td>/C/Folder/File.txt</td>
          <td>This represents an absolute file path.</td>
        </tr>
        <tr>
          <td>//unc//Server/Folder/File.txt</td>
          <td>\\Server\Folder\File.txt</td>
          <td>//Server/Folder/File.txt</td>
          <td>This represents a UNC path.</td>
        </tr>
        <tr>
          <td>//</td>
          <td>
            <strong>not a path</strong>
          </td>
          <td>
            <strong>not a path</strong>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>////</td>
          <td>
            <strong>empty path</strong>
          </td>
          <td>
            <strong>empty path</strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <smart-path label="Path Control" value="C:\Folder\File.txt"></smart-path>
    <div class="options">
      <div class="option">
        <smart-drop-down-list>
          <smart-list-item>..\Folder\File.txt</smart-list-item>
          <smart-list-item>../Folder/File.txt</smart-list-item>
          <smart-list-item selected>C:\Folder\File.txt</smart-list-item>
          <smart-list-item>/C/Folder/File.txt</smart-list-item>
          <smart-list-item>//Server/Folder/File.txt</smart-list-item>
          <smart-list-item>\\Server\Folder\File.txt</smart-list-item>
          <smart-list-item>//rel//../Folder/File.txt</smart-list-item>
          <smart-list-item>//abs//C/Folder/File.txt</smart-list-item>
          <smart-list-item>//unc//Server/Folder/File.txt</smart-list-item>
          <smart-list-item>//</smart-list-item>
          <smart-list-item>////</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <h3>Select path format:</h3>
        <smart-radio-button checked group-name="pathFormat">windows</smart-radio-button>
        <smart-radio-button group-name="pathFormat">unix</smart-radio-button>
      </div>
      <div class="option">
        <h2>Value:</h2>
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.path.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.addEventListener("change", function(event) {
        const pathControl = document.querySelector("smart-path");
        if (event.target.groupName === "pathFormat") {
          pathControl.pathFormat = event.target.innerHTML.trim();
          return;
        }
        if (
          event.target instanceof window.Smart.ListBox ||
          event.target instanceof window.Smart.DropDownList
        ) {
          pathControl.value = event.detail.label;
          return;
        }
        if (event.target instanceof window.Smart.Path) {
          document.getElementById("log").innerHTML = event.detail.value;
        }
      });
    });
  }
};
</script>

<style>
smart-path {
  float: left;
  margin: 5%;
}

smart-drop-down-list {
  width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 16px;
  margin-top: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

table td,
table th {
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
}

table th {
  font-weight: 600;
}

table tr:nth-child(2n) {
  background-color: #f6f8fa;
}
</style>
