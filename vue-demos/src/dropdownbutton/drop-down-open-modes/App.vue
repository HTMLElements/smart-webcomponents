<template>
  <div class="vue-root">
    <div id="container">
      <smart-drop-down-button placeholder="Select" drop-down-width="auto">
        <smart-tabs id="tab">
          <smart-tab-item label="Tab 1">Content of Item 1</smart-tab-item>
          <smart-tab-item label="Tab 2">Content of Item 2</smart-tab-item>
          <smart-tab-item label="Tab 3">Content of Item 3</smart-tab-item>
        </smart-tabs>
      </smart-drop-down-button>
    </div>
    <div class="options">
      <div class="option">
        <div>Open Mode:</div>
        <br />
        <smart-button disabled>Default</smart-button>
        <br />
        <br />
        <smart-button>Auto</smart-button>
        <br />
        <br />
        <smart-button>Button</smart-button>
        <br />
        <br />
        <smart-button>None</smart-button>
        <br />
      </div>
      <div class="option" id="eventLog">
        <h4>Event log:</h4>
        <div id="log">...</div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div id="description">
      <div>Modes Description</div>
      <ul>
        <li>Auto - the dropDownButton is opened/closed when the element is hovered.</li>
        <li>Default - the dropDownButton is opened/closed when the element is clicked.</li>
        <li>
          DropDownButton - the dropDownButton is devided in two components. An Action
          Button and a dropDown Button.
          <br />The dropDownButton can be opened/closed when the dropDownButton is clicked.
        </li>
        <li>None - the dropDownButton can't be opened/closed.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dropDownButton = document.querySelector("smart-drop-down-button");
      const buttons = document.getElementsByTagName("smart-button");
      buttons[0].addEventListener("click", function() {
        dropDownButton.dropDownOpenMode = "default";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[1].addEventListener("click", function() {
        dropDownButton.dropDownOpenMode = "auto";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[2].addEventListener("click", function() {
        dropDownButton.dropDownOpenMode = "dropDownButton";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[3].addEventListener("click", function() {
        dropDownButton.dropDownOpenMode = "none";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      dropDownButton.addEventListener("click", function(event) {
        const log = document.getElementById("log");
        const target = event.target;
        if (dropDownButton.dropDownOpenMode !== "dropDownButton") {
          log.innerHTML = "DropDownButton clicked";
          return;
        }
        if (target.classList.contains("smart-action-button")) {
          log.textContent = "ActionButton clicked";
        } else if (target.classList.contains("smart-drop-down-button")) {
          log.textContent = "DropDownButton clicked";
        }
      });
      document
        .getElementById("tab")
        .addEventListener("change", function(event) {
          const tabsItems = this.getElementsByTagName("smart-tab-item");
          const tabIndex = event.detail.index;
          dropDownButton.placeholder = tabsItems[tabIndex].label;
        });
    });
  }
};
</script>

<style>
smart-drop-down-button {
  --smart-editor-drop-down-max-height: 500px;
  width: 200px;
}
body,
html {
  height: 800px;
}
</style>
