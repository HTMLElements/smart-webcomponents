<template>
  <div class="vue-root">
    <p>closeButtonMode 'default'</p>
    <smart-tabs id="tabs1" class="demoTabsShort" close-buttons>
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2" selected>Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3" close-button-hidden>Content 3</smart-tab-item>
    </smart-tabs>
    <br />
    <p>closeButtonMode 'selected'</p>
    <smart-tabs
      id="tabs2"
      class="demoTabsShort"
      close-buttons
      close-button-mode="selected"
      add-new-tab
    >
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3" selected>Content 3</smart-tab-item>
    </smart-tabs>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-toggle-button id="toggleCloseButtons" class="demoButton" checked>Toggle close buttons</smart-toggle-button>
        <br />
        <br />
        <smart-button id="showCloseButton" class="demoButton">Show third close button</smart-button>
        <br />
        <br />
        <smart-button id="hideCloseButton" class="demoButton" disabled>Hide third close button</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tabs1 = document.getElementById("tabs1");
      document
        .getElementById("toggleCloseButtons")
        .addEventListener("change", function(event) {
          tabs1.closeButtons = event.target.checked;
        });
      const showCloseButton = document.getElementById("showCloseButton"),
        hideCloseButton = document.getElementById("hideCloseButton");
      tabs1.addEventListener("close", function() {
        showCloseButton.disabled = true;
        hideCloseButton.disabled = true;
      });
      showCloseButton.addEventListener("click", function() {
        tabs1.getElementsByTagName(
          "smart-tab-item"
        )[2].closeButtonHidden = false;
        showCloseButton.disabled = true;
        hideCloseButton.disabled = false;
      });
      document
        .getElementById("hideCloseButton")
        .addEventListener("click", function() {
          tabs1.getElementsByTagName(
            "smart-tab-item"
          )[2].closeButtonHidden = true;
          hideCloseButton.disabled = true;
          showCloseButton.disabled = false;
        });
      document
        .getElementById("tabs2")
        .addEventListener("closing", function(event) {
          const close = window.confirm(
            "Do you wish to close tab with index " + event.detail.index + "?"
          );
          if (!close) {
            event.preventDefault();
          }
        });
    });
  }
};
</script>

<style>
smart-tabs {
  width: 60%;
  height: 200px;
}

@media only screen and (max-width: 700px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
