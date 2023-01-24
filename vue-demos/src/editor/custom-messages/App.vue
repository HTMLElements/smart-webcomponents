<template>
  <div class="vue-root">
    <smart-editor id="editor">
      <div class="section">
        <div>
          <h2 style="text-align: center">Camels</h2>
          <p>
            A camel is an even-toed ungulate in the genus Camelus that bears
            distinctive fatty deposits known as "humps" on its back. Camels have
            long been domesticated and, as livestock, they provide food (milk
            and meat) and textiles (fiber and felt from hair). Camels are
            working animals especially suited to their desert habitat and are a
            vital means of transport for passengers and cargo. There are three
            surviving species of camel. The one-humped dromedary makes up 94% of
            the world's camel population, and the two-humped Bactrian camel
            makes up 6%. The Wild Bactrian camel is a separate species and is
            now critically endangered. The word camel is also used informally in
            a wider sense, where the more correct term is "camelid", to include
            all seven species of the family Camelidae: the true camels (the
            above three species), along with the "New World" camelids: the
            llama, the alpaca, the guanaco, and the vicuña. The word itself is
            derived via Latin: camelus and Greek: κάμηλος (kamēlos) from Hebrew,
            Arabic or Phoenician: gāmāl.
          </p>
        </div>
        <img src="./../../../src/images/travel/1.jpg" />
      </div>
    </smart-editor>
    <div class="options">
      <div class="description">
        <h4>Editor Messages</h4>
        <p>
          Messages can be displayed inside the Editor via the
          <b>showMessage</b> API method. Messages can be customized.
        </p>
        <p>
          The <b>required</b> property set to the Editor opens an error message
          on Editor blur if the content is empty.
        </p>
      </div>
      <div class="option">
        <h3>Select a message type:</h3>
        <smart-radio-button id="info">Info</smart-radio-button>
        <smart-radio-button id="success" checked>Success</smart-radio-button>
        <smart-radio-button id="warning">Warning</smart-radio-button>
      </div>
      <div class="option">
        <smart-button id="showMessage">Show Message</smart-button>
        <smart-button id="hideLastMessage">Hide Last Message</smart-button>
        <smart-button id="hideAllMessages">Hide All Messages</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
              //Properties
              required: true,
            };
          }
        }
      );

      window.onload = function () {
        const editor = document.getElementById("editor");
        let messageSettings = {
          iconType: "success",
          autoClose: true,
          autoCloseDelay: 5000,
        };
        editor.addEventListener("change", function () {
          messageSettings.iconType = "warning";
          messageSettings.autoCloseDelay = 2500;
          editor.showMessage(
            "The Editor value has changed ! Current number of chars inside:" +
              editor.getCharCount(),
            messageSettings
          );
        });
        document
          .querySelector(".options")
          .addEventListener("change", function (event) {
            messageSettings.iconType = event.target.id;
          });
        document
          .getElementById("showMessage")
          ?.addEventListener("click", function () {
            editor.showMessage("Show Message button clicked", messageSettings);
          });
        document
          .getElementById("hideLastMessage")
          ?.addEventListener("click", function () {
            editor.hideLastMessage();
          });
        document
          .getElementById("hideAllMessages")
          ?.addEventListener("click", function () {
            editor.hideMessage();
          });
        editor.showMessage(
          "Welcome ! A custom message will appear each time value of the Editor is changed",
          messageSettings
        );
      };
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

.smart-editor .section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-column-gap: 20px;
}

.smart-editor .section img {
  border: 1px dashed var(--smart-border);
  padding: 10px;
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
