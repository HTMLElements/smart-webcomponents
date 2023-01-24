<template>
  <div class="vue-root">
    <smart-button class="submit success smart-button-element">Click Me</smart-button>
    <smart-button class="submit primary smart-button-element">Click Me</smart-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      "use strict";
      let submitButtons = document.querySelectorAll("smart-button.submit");
      for (let i = 0; i < submitButtons.length; i++) {
        let submitButton = submitButtons[i];
        submitButton.addEventListener("click", function() {
          if (submitButton.classList.contains("sending")) {
            submitButton.classList.remove("sending");
          } else {
            submitButton.classList.add("sending");
          }
          setTimeout(function() {
            submitButton.classList.remove("sending");
          }, 4500);
        });
      }
    });
  }
};
</script>

<style>
.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
}

.demo-buttons-group {
  margin-top: 20px;
}

smart-button {
  height: 48px;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.submit.primary {
  color: #007bff;
  border-color: #007bff;
  background: transparent;
}

smart-button.submit.primary:hover {
  color: white;
  border-color: #007bff;
  transition: background 0.5s;
  background: #007bff;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.submit.success {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

smart-button.submit.success:hover {
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  transition: background 0.5s;
  background-color: #e0a800;
  border-color: #d39e00;
}

button {
  position: relative;
}

button::before {
  content: "";
  position: absolute;
  right: 16px;
  top: 50%;
  margin-top: -12px;
  width: 24px;
  height: 24px;
  border: 2px solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s;
  animation: 0.8s linear infinite rotate;
}

.sending button {
  pointer-events: none;
  cursor: not-allowed;
}

.sending button::before {
  transition-delay: 0.5s;
  transition-duration: 1s;
  visibility: visible;
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
