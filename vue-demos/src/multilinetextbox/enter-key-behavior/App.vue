<template>
  <div class="vue-root">
    <smart-window id="messageWindowJ" label="Johnny">
      <smart-multiline-text-box
        id="messageBoxJ"
        placeholder="Type a message here"
        enter-key-behavior="clearOnSubmit"
      ></smart-multiline-text-box>
    </smart-window>
    <smart-window id="messageWindowS" label="Sam">
      <smart-multiline-text-box
        id="messageBoxS"
        placeholder="Type a message here"
        enter-key-behavior="clearOnSubmit"
      ></smart-multiline-text-box>
    </smart-window>
    <div class="options">
      <div class="caption">Enter Key Behavior</div>
      <div class="option">
        <smart-radio-button
          id="radioBtn0"
          value="clearOnSubmit"
          checked
          enable-container-click
        >clearOnSubmit</smart-radio-button>
        <smart-radio-button id="radioBtn1" value="submit" enable-container-click>submit</smart-radio-button>
        <smart-radio-button id="radioBtn2" value="newLine" enable-container-click>newLine</smart-radio-button>
      </div>
      <div class="option">
        <smart-button id="startChat">Start chat</smart-button>
      </div>
      <div class="option">
        <div id="messageContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.multilinetextbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.window.js";
import "smart-webcomponents/source/modules/smart.chip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const messageContainer = document.getElementById("messageContainer"),
        messages = [],
        messageWindowJ = document.getElementById("messageWindowJ"),
        messageWindowS = document.getElementById("messageWindowS"),
        startChat = document.getElementById("startChat"),
        messageBoxJ = document.getElementById("messageBoxJ"),
        messageBoxS = document.getElementById("messageBoxS"),
        enterKeyOptions = document.querySelectorAll("smart-radio-button");
      startChat.addEventListener("click", function() {
        messageWindowJ.open();
        messageWindowS.open();
      });
      messageBoxJ.addEventListener("change", function(event) {
        updateMessageContainer(event, "J");
      });
      messageBoxS.addEventListener("change", function(event) {
        updateMessageContainer(event, "S");
      });
      enterKeyOptions[0].addEventListener("change", function() {
        enterKeyBehaviorTo("clearOnSubmit");
      });
      enterKeyOptions[1].addEventListener("change", function() {
        enterKeyBehaviorTo("submit");
      });
      enterKeyOptions[2].addEventListener("change", function() {
        enterKeyBehaviorTo("newLine");
      });

      function updateMessageContainer(event, user) {
        if (!event.detail || event.detail.type !== "submit") {
          return;
        }
        const value = event.detail.value,
          messageChip = document.createElement("smart-chip");
        messages.push(value);
        messageChip.value = value.replace(/(?:\r\n|\r|\n)/g, "<br/>");
        messageChip.avatar = user;
        messageContainer.appendChild(messageChip);
      }

      function enterKeyBehaviorTo(option) {
        messageBoxJ.enterKeyBehavior = option;
        messageBoxS.enterKeyBehavior = option;
      }
    });
  }
};
</script>

<style>
#messageContainer {
  position: fixed;
  bottom: 50px;
  left: 10px;
  width: 400px;
  height: 700px;
  max-height: 90vh;
  box-sizing: border-box;
  border: dashed 1px lightgray;
  padding: 5px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #f9f9f9;
}

#messageWindowJ,
#messageWindowS {
  height: auto;
  width: 200px;
  left: 10px;
  top: 10px;
}

#messageWindowS {
  top: 50px;
}

#messageBoxJ,
#messageBoxS {
  border: none;
  margin: 20px;
  width: 100%;
}

#startChat {
  width: 200px;
  height: 30px;
  position: fixed;
  bottom: 10px;
  left: 10px;
}

smart-chip .smart-avatar {
  vertical-align: top;
}

smart-chip[avatar="J"] .smart-avatar {
  background-color: brown;
}
</style>
