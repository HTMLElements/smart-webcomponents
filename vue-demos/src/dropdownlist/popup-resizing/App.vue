<template>
  <div class="vue-root">
    <div class="options">
      <div class="caption">Resize Mode</div>
      <div class="option">
        <smart-radio-button>None</smart-radio-button>
        <br />
        <br />
        <smart-radio-button>Horizontal</smart-radio-button>
        <br />
        <br />
        <smart-radio-button>Both</smart-radio-button>
        <br />
        <br />
        <smart-radio-button checked>Vertical</smart-radio-button>
        <br />
        <br />
      </div>
      <div class="caption">DropDown position</div>
      <div class="option">
        <smart-radio-button checked>Bottom</smart-radio-button>
        <smart-radio-button>Top</smart-radio-button>
      </div>
    </div>
    <smart-drop-down-list selected-indexes="[0]" resize-mode="vertical">
      <smart-list-item value="Afghanistan">Afghanistan</smart-list-item>
      <smart-list-item selected value="Albania">Albania</smart-list-item>
      <smart-list-item value="Algeria">Algeria</smart-list-item>
      <smart-list-item value="American Samoa">American Samoa</smart-list-item>
      <smart-list-item value="Andorra">Andorra</smart-list-item>
      <smart-list-item value="Angola">Angola</smart-list-item>
      <smart-list-item value="Anguilla">Anguilla</smart-list-item>
      <smart-list-item value="Antarctica">Antarctica</smart-list-item>
      <smart-list-item value="Antigua and Barbuda">Antigua and Barbuda</smart-list-item>
      <smart-list-item value="Argentina">Argentina</smart-list-item>
      <smart-list-item value="Armenia">Armenia</smart-list-item>
      <smart-list-item value="Aruba">Aruba</smart-list-item>
      <smart-list-item value="Australia">Australia</smart-list-item>
      <smart-list-item value="Austria">Austria</smart-list-item>
      <smart-list-item value="Azerbaijan">Azerbaijan</smart-list-item>
      <smart-list-item value="Bahamas">Bahamas</smart-list-item>
      <smart-list-item value="Bahrain">Bahrain</smart-list-item>
      <smart-list-item value="Bangladesh">Bangladesh</smart-list-item>
      <smart-list-item value="Barbados">Barbados</smart-list-item>
      <smart-list-item value="Belarus">Belarus</smart-list-item>
      <smart-list-item value="Belgium">Belgium</smart-list-item>
      <smart-list-item value="Belize">Belize</smart-list-item>
      <smart-list-item value="Benin">Benin</smart-list-item>
      <smart-list-item value="Bermuda">Bermuda</smart-list-item>
      <smart-list-item value="Bhutan">Bhutan</smart-list-item>
    </smart-drop-down-list>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      const dropDownList = document.querySelector("smart-drop-down-list");
      radioButtons[0].addEventListener("change", function() {
        dropDownList.resizeMode = "none";
      });
      radioButtons[1].addEventListener("change", function() {
        dropDownList.resizeMode = "vertical";
      });
      radioButtons[2].addEventListener("change", function() {
        dropDownList.resizeMode = "horizontal";
      });
      radioButtons[3].addEventListener("change", function() {
        dropDownList.resizeMode = "both";
      });
      radioButtons[4].addEventListener("change", function() {
        dropDownList.dropDownPosition = "bottom";
      });
      radioButtons[5].addEventListener("change", function() {
        dropDownList.dropDownPosition = "top";
      });
    });
  }
};
</script>

<style>
smart-drop-down-list {
  position: relative;
  top: 260px;
  min-height: 35px;
  height: auto;
}
smart-drop-down-list .smart-drop-down {
  --smart-drop-down-element-max-height: 250px;
}

html,
body {
  min-height: 900px;
}
</style>
