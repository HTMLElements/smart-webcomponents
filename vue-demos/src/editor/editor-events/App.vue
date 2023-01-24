<template>
  <div class="vue-root">
    <smart-editor id="editor">
      <h1>HTML Image</h1>
      <img
        src="https://www.htmlelements.com/wp-content/design/assets/images/device-section-bg.png"
        alt="Smart HTML Elements Browser Support"
      />
      <p></p>
      <h1>HTML Links</h1>
      <p>
        <a href="https://www.htmlelements.com/">Smart Web Components Library</a>
      </p>
      <p></p>
      <h1>HTML Table</h1>
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
          <td>France</td>
        </tr>
      </table>
    </smart-editor>
    <div class="options">
      <h3>Events:</h3>
      <div class="demo-description">
        <p>Smart Editor fires the following events:</p>
        <ul>
          <li>change - fired on blur if the content has changed</li>
          <li>
            actionStart - fired when a Toolbar action is about to start.
            Cancelable
          </li>
          <li>actionEnd - fired when a Toolbar action has ended.</li>
          <li>resizeStart - fired when an image/table resizing has started</li>
          <li>resizeEnd - fired when an image/table resizing has ended</li>
          <li>inlineToolbarOpen - fired when the inline Toolbar is opening</li>
          <li>inlineToolbarClose - fired when the inline Toolbar is closed</li>
          <li>
            dropDownToolbarOpen - fired when the Drop Down Toolbar is opened
          </li>
          <li>
            dropDownToolbarClose - fired when the Drop Down Toolbar is closed
          </li>
          <li>dialogOpen - fired when the Dialog Window is opened</li>
          <li>
            dialogOpening - fired when the Dialog Window is opening. Cancelable
          </li>
          <li>dialogClose - fired when the Dialog Window is closed</li>
          <li>
            dialogClosing - fired when the Dialog Window is closing. Cancelable
          </li>
          <li>
            imageUploadSuccess - fired when the uploading of an image is
            successful
          </li>
          <li>
            imageUploadFailed - fired when the uploading of an image is
            unsuccessful
          </li>
          <li>toobarItemClick - fired when a toolbar item is clicked</li>
        </ul>
      </div>
      <div class="option" id="eventLog">
        <h3>Event Log:</h3>
        <div id="log"></div>
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
      const editor = document.querySelector("smart-editor"),
        log = document.getElementById("log"),
        eventNames = [
          "change",
          "actionStart",
          "actionEnd",
          "resizeStart",
          "resizeEnd",
          "inlineToolbarOpen",
          "inlineToolbarClose",
          "dropDownToolbarOpen",
          "dropDownToolbarClose",
          "dialogOpen",
          "dialogOpening",
          "dialogClose",
          "dialogClosing",
          "imageUploadSuccess",
          "imageUploadFailed",
          "toobarItemClick",
        ];
      for (let i = 0; i < eventNames.length; i++) {
        editor.addEventListener(eventNames[i], function (e) {
          log.innerHTML += e.type + "<br />";
        });
      }
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

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
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
