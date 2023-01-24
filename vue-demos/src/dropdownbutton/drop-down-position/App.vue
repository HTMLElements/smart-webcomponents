<template>
  <div class="vue-root">
    <div id="container">
      <smart-drop-down-button
        class="drop-down-list-modes-demo"
        drop-down-append-to="body"
        placeholder="Press to Open"
      >
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin literature
        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the more
        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the undoubtable
        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
        in 45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
        sit amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those interested.
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
        are also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </smart-drop-down-button>
      <div id="controlPanel">
        <div>DropDown list Position:</div>
        <smart-radio-button checked>Auto</smart-radio-button>
        <smart-radio-button>Bottom</smart-radio-button>
        <smart-radio-button>Overlay-bottom</smart-radio-button>
        <smart-radio-button>Overlay-center</smart-radio-button>
        <smart-radio-button>Overlay-top</smart-radio-button>
        <smart-radio-button>Top</smart-radio-button>
        <smart-radio-button>Center-bottom</smart-radio-button>
        <smart-radio-button>Center-top</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      const dropDownButton = document.querySelector("smart-drop-down-button");
      radioButtons[0].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "auto";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "bottom";
      });
      radioButtons[2].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "overlay-bottom";
      });
      radioButtons[3].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "overlay-center";
      });
      radioButtons[4].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "overlay-top";
      });
      radioButtons[5].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "top";
      });
      radioButtons[6].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "center-bottom";
      });
      radioButtons[7].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "center-top";
      });
    });
  }
};
</script>

<style>
</style>
