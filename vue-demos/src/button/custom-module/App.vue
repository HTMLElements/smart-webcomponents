<template>
  <div class="vue-root">
    <smart-button id="button">Click Me</smart-button>
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
      class ModuleA {
        static get moduleName() {
          return "Module1";
        }
        static get properties() {
          const properties = {
            property1: {
              value: "red",
              type: "string",
              observer: "obsFunc"
            }
          };
          return properties;
        }
        obsFunc() {
          alert("test");
        }
      }
      class ModuleB extends ModuleA {
        moduleTwoFunc() {}
        obsFunc() {
          alert("test2");
        }
      }
      window.Smart.Elements.whenRegistered("smart-button", function(proto) {
        proto.addModule(ModuleB);
      });

      const button = document.getElementById("button");
      button.addEventListener("click", clickMe);

      function clickMe() {
        const button = document.getElementById("button");
        button.obsFunc();
      }
    });
  }
};
</script>

<style>
</style>
