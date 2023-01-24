<template>
  <div class="vue-root">
    <div class="demo-description">smartDropDownButton resize modes are demonstrated in this example.</div>
    <smart-drop-down-button resize-mode="vertical" placeholder="DropDownButton">
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
    <div class="options">
      <div class="option">
        <div>Resize Mode:</div>
        <smart-radio-button>None</smart-radio-button>
        <smart-radio-button checked>Vertical</smart-radio-button>
        <smart-radio-button>Horizontal</smart-radio-button>
        <smart-radio-button>Both</smart-radio-button>
      </div>
      <br />
      <div class="option">
        <div>DropDown position:</div>
        <smart-radio-button checked>Bottom</smart-radio-button>
        <smart-radio-button>Top</smart-radio-button>
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
        dropDownButton.resizeMode = "none";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownButton.resizeMode = "vertical";
      });
      radioButtons[2].addEventListener("change", function() {
        dropDownButton.resizeMode = "horizontal";
      });
      radioButtons[3].addEventListener("change", function() {
        dropDownButton.resizeMode = "both";
      });
      radioButtons[4].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "bottom";
      });
      radioButtons[5].addEventListener("change", function() {
        dropDownButton.dropDownPosition = "top";
      });
    });
  }
};
</script>

<style>
smart-drop-down-button {
  position: absolute;
  left: 25%;
  top: 45%;
  --smart-drop-down-element-max-height: 300px;
}
@media only screen and (max-width: 500px) {
  smart-drop-down-button {
    position: static;
  }
}
</style>
