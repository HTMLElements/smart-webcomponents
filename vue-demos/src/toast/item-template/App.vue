<template>
  <div class="vue-root">
    <smart-toast
      position="top-left"
      show-close-button
      item-template="template"
      modal
    >Toast with custom template!</smart-toast>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="openButton">Open Toast</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.toast.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const template = document.createElement("template");
      template.id = "template";
      template.innerHTML = ` <span class="content">{{content}}</span>
      <div class="buttons">
        <smart-button id="closeButton">Close</smart-button>
      </div>`;
      document.body.appendChild(template);

      const toast = document.querySelector("smart-toast");
      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          toast.open();
        });
      toast.addEventListener("open", function() {
        document
          .getElementById("closeButton")
          .addEventListener("click", function() {
            toast.closeLast();
          });
      });
    });
  }
};
</script>

<style>
.smart-toast-item[show-close-button] .smart-toast-item-close-button {
  position: absolute;
  right: 5px;
  top: 5px;
}

.smart-toast-item {
  width: auto;
  position: relative;
  display: inline-block;
}

.content {
  padding: 30px 10px 10px 10px;
  display: block;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.buttons smart-button {
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 10px;
  border-radius: 3px;
}

.buttons smart-button button {
  border-radius: 3px;
  border-color: white;
  color: white;
}
</style>
