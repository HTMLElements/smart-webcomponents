<template>
  <div class="vue-root">
    <div class="options">
      <div class="option">
        <smart-button id="openAlertButton">Alert Window</smart-button>
      </div>
      <div class="option">
        <smart-button id="openDialogButton">Dialog Window</smart-button>
      </div>
      <div class="option">
        <smart-button id="openProgressButton">Progress Window</smart-button>
      </div>
      <div class="option">
        <smart-button id="openWaitButton">Wait Window</smart-button>
      </div>
      <div class="option">
        <smart-button id="openPromptButton">Prompt Window</smart-button>
      </div>
      <div class="option">
        <smart-button id="openMultilinePromptButton">Multiline Window</smart-button>
      </div>
      <div class="option">
        <label>Hide on mask click:</label>
        <smart-check-box enable-container-click></smart-check-box>
      </div>
      <div class="caption">
        <label>Choose icon:</label>
      </div>
      <div class="option">
        <smart-drop-down-list>
          <smart-list-item value="remove-sign">Error</smart-list-item>
          <smart-list-item value="info-sign">Information</smart-list-item>
          <smart-list-item value="question-sign">Question</smart-list-item>
          <smart-list-item value="exclamation-sign">Warning</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <smart-button id="openIconDialogButton">Icon Dialog Window</smart-button>
      </div>
      <div class="caption">Log:</div>
      <div class="option">
        <span id="log"></span>
      </div>
    </div>
    <smart-dialog-window id="iconDialogWindow" label="Icon Dialog Window" class="material">
      <div class="smart-icon-dialog-icon">
        <span class="smart-icon-dialog-content">&#xe82f;</span>
      </div>
      <div class="smart-icon-dialog-content">Continue ?</div>
    </smart-dialog-window>
    <smart-dialog-window label="Dialog Window" class="material">
      <div class="smart-dialog-icon"></div>
      <div class="smart-dialog-content"></div>
    </smart-dialog-window>
    <smart-alert-window label="Alert Window" class="material">Operation Successful !</smart-alert-window>
    <smart-progress-window label="Progress Window" class="material">Loading...</smart-progress-window>
    <smart-wait-window label="Wait Window" class="material"></smart-wait-window>
    <smart-prompt-window label="Prompt Window" prompt-label="Enter your name:" class="material"></smart-prompt-window>
    <smart-multiline-prompt-window
      label="Prompt Window"
      prompt-label="Enter your address:"
      class="material"
    ></smart-multiline-prompt-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dialogWindow = document.querySelector("smart-dialog-window"),
        alertWindow = document.querySelector("smart-alert-window"),
        progressWindow = document.querySelector("smart-progress-window"),
        waitWindow = document.querySelector("smart-wait-window"),
        promptWindow = document.querySelector("smart-prompt-window"),
        multilinePromptWindow = document.querySelector(
          "smart-multiline-prompt-window"
        ),
        iconDialogWindow = document.getElementById("iconDialogWindow"),
        dropDownList = document.querySelector("smart-drop-down-list");

      progressWindow.max = 50;
      const log = document.getElementById("log");

      function dialogButtonsHandler(event) {
        const target = event.target;
        if (target.closest(".smart-cancel-button")) {
          log.textContent = "Canceled";
          target.close();
        } else if (target.closest(".smart-confirm-button")) {
          log.textContent = "Confirmed";
          target.close();
        }
      }
      document
        .getElementById("openDialogButton")
        .addEventListener("click", function() {
          dialogWindow.opened ? dialogWindow.close() : dialogWindow.open();
        });
      document
        .getElementById("openAlertButton")
        .addEventListener("click", function() {
          alertWindow.opened ? alertWindow.close() : alertWindow.open();
        });
      dialogWindow.addEventListener("click", dialogButtonsHandler);
      alertWindow.addEventListener("click", function(event) {
        const target = event.target;
        if (target.closest(".smart-confirm-button")) {
          log.textContent = "Confirmed";
          alertWindow.close();
        }
      });
      document
        .getElementById("openProgressButton")
        .addEventListener("click", function() {
          if (progressWindow.opened) {
            return;
          }
          progressWindow.innerHTML = "Loading...";
          progressWindow.open();
          let interval = setInterval(function() {
            if (progressWindow.value >= progressWindow.max) {
              progressWindow.innerHTML = "Finished";
              clearInterval(interval);
            }
            progressWindow.value = progressWindow.value + Math.random() * 10;
          }, 500);
        });
      progressWindow.addEventListener("click", function(event) {
        const target = event.target;
        if (target.closest(".smart-complete-button")) {
          progressWindow.close();
          progressWindow.value = 0;
        }
      });
      document
        .getElementById("openWaitButton")
        .addEventListener("click", function() {
          if (waitWindow.opened) {
            return;
          }
          waitWindow.open();
          setTimeout(function() {
            waitWindow.close();
          }, 2500);
        });
      document
        .getElementById("openPromptButton")
        .addEventListener("click", function() {
          promptWindow.opened ? promptWindow.close() : promptWindow.open();
        });
      promptWindow.addEventListener("click", dialogButtonsHandler);
      document
        .getElementById("openMultilinePromptButton")
        .addEventListener("click", function() {
          multilinePromptWindow.opened
            ? multilinePromptWindow.close()
            : multilinePromptWindow.open();
        });
      multilinePromptWindow.addEventListener("click", dialogButtonsHandler);
      document
        .getElementById("openIconDialogButton")
        .addEventListener("click", function() {
          const selectedItem = dropDownList.getItem(
            dropDownList.selectedValues[0]
          );
          document.getElementsByClassName(
            "smart-icon-dialog-icon"
          )[0].innerHTML =
            '<span class="glyphicon glyphicon-' +
            selectedItem.value +
            '"></span>';
          document.getElementsByClassName(
            "smart-icon-dialog-content"
          )[0].innerHTML = selectedItem.label;
          for (let i = 0; i < iconDialogWindow.classList.length; i++) {
            if (iconDialogWindow.classList[i].indexOf("smart-theme-") > -1) {
              iconDialogWindow.classList.remove(iconDialogWindow.classList[i]);
            }
          }
          iconDialogWindow.classList.add(
            "smart-theme-" + selectedItem.label.toLowerCase()
          );
          iconDialogWindow.opened
            ? iconDialogWindow.close()
            : iconDialogWindow.open();
        });
      iconDialogWindow.addEventListener("click", dialogButtonsHandler);
      document.addEventListener("click", function() {
        if (document.querySelector("smart-check-box").checked) {
          dialogWindow.closeOnMaskClick = alertWindow.closeOnMaskClick = progressWindow.closeOnMaskClick = waitWindow.closeOnMaskClick = promptWindow.closeOnMaskClick = multilinePromptWindow.closeOnMaskClick = iconDialogWindow.closeOnMaskClick = true;
        } else {
          dialogWindow.closeOnMaskClick = alertWindow.closeOnMaskClick = progressWindow.closeOnMaskClick = waitWindow.closeOnMaskClick = promptWindow.closeOnMaskClick = multilinePromptWindow.closeOnMaskClick = iconDialogWindow.closeOnMaskClick = false;
        }
      });
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root {
  width: 99%;
  height: 99%;
}

.smart-window #article {
  overflow: auto;
}

.smart-multiline-prompt-window.smart-window
  .smart-content-container
  > .smart-content {
  padding-top: 20px;
}

@media screen and (max-width: 700px) {
  .smart-window {
    width: 90% !important;
    left: 5% !important;
    top: 5px !important;
  }
}
.smart-dialog-window.smart-window .smart-content-container > .smart-content {
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.smart-dialog-window.smart-window .smart-dialog-icon,
.smart-dialog-window.smart-window .smart-icon-dialog-icon {
  position: relative;
  font-family: "smart-icons";
  /*margin-right: 10%;*/
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  margin-right: 5px;
}

.smart-dialog-window.smart-window .smart-dialog-icon:empty {
  margin: initial;
}

#controlTable {
  border: 1px solid black;
  padding: 20px;
  width: 450px;
}

#controlTable table {
  width: 100%;
  height: 100%;
}

#controlTable smart-drop-down-list {
  width: 120px;
}

#controlTable table smart-button {
  height: 30px;
  width: 100%;
}

#controlTable > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#controlTable > div:last-of-type {
  justify-content: space-between;
}

#controlTable > div:last-of-type smart-button {
  height: 30px;
  width: 150px;
}

#controlTable smart-check-box {
  margin-left: 10px;
}

#controlTable > div {
  margin-top: 20px;
}

.smart-dialog-window.smart-window.smart-theme-warning .glyphicon {
  color: #ffd800;
}

.smart-dialog-window.smart-window.smart-theme-error .glyphicon {
  color: #ff0000;
}

.smart-dialog-window.smart-window.smart-theme-information .glyphicon {
  color: #0094ff;
}

.smart-alert-window.smart-window,
.smart-prompt-window.smart-window {
  height: 160px;
}

.smart-alert-window.smart-window .smart-content-container > .smart-content {
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

.smart-progress-window.smart-window {
  height: 150px;
}

.smart-multiline-prompt-window.smart-window {
  height: 250px;
}

.smart-multiline-prompt-window.smart-window smart-multiline-text-box {
  height: 100%;
}

.smart-wait-window.smart-window {
  height: 75px;
}

.smart-wait-window.smart-window smart-progress-bar {
  height: 100%;
}

.smart-window button,
.smart-dialog-window.smart-window .smart-button.material,
.smart-progress-window.smart-window .smart-button.material,
.smart-alert-window.smart-window .smart-button.material,
.smart-prompt-window.smart-window .smart-button.material,
.smart-multiline-prompt-window.smart-window .smart-button.material {
  padding-top: 4px;
  padding-bottom: 4px;
}

.smart-multiline-prompt-window.smart-window.material smart-multiline-text-box {
  width: 100%;
}
</style>
