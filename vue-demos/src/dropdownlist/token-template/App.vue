<template>
  <div class="vue-root">
    <smart-drop-down-list selection-display-mode="tokens" selection-mode="zeroOrMany">
      <smart-list-item selected>Andrew Watson</smart-list-item>
      <smart-list-item>Anne Kean</smart-list-item>
      <smart-list-item>Avril Janin</smart-list-item>
      <smart-list-item>Janet Pattenson</smart-list-item>
      <smart-list-item>Johanna Svensson</smart-list-item>
      <smart-list-item>Johnny Abana</smart-list-item>
      <smart-list-item>Laura Thene</smart-list-item>
      <smart-list-item>Margaret Vetton</smart-list-item>
      <smart-list-item>Maria Sevrano</smart-list-item>
      <smart-list-item>Mark Yemen</smart-list-item>
      <smart-list-item>Maya Verdara</smart-list-item>
      <smart-list-item>Michael Barton</smart-list-item>
      <smart-list-item>Monica Oghini</smart-list-item>
      <smart-list-item>Nancy Queens</smart-list-item>
      <smart-list-item>Robert Drawny</smart-list-item>
      <smart-list-item>Steven Fedrichy</smart-list-item>
      <smart-list-item>Toni Versachi</smart-list-item>
    </smart-drop-down-list>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dropDownList = document.querySelector("smart-drop-down-list");

      const tokenTemplate = document.createElement("template");
      tokenTemplate.id = "tokenTemplate";
      tokenTemplate.innerHTML = `<span>
        <img class="avatar" src="../../../images/phonebook/andrew.png" width="35" height="35" />
      </span>
      <span>{{data}}</span>`;
      document.body.appendChild(tokenTemplate);

      dropDownList.tokenTemplate = "tokenTemplate";

      dropDownList.addEventListener("change", function() {
        const tokens = this.getElementsByClassName("smart-token");
        for (let i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          var img = token.querySelector(".avatar");
          if (token.textContent.indexOf("Anne Kean") > -1) {
            img.src = "../../../images/phonebook/anne.png";
          } else if (token.textContent.indexOf("Andrew Watson") > -1) {
            img.src = "../../../images/phonebook/andrew.png";
          } else if (token.textContent.indexOf("Avril Janin") > -1) {
            img.src = "../../../images/phonebook/avril.jpeg";
          } else if (token.textContent.indexOf("Janet Pattenson") > -1) {
            img.src = "../../../images/phonebook/janet.png";
          } else if (token.textContent.indexOf("Johanna Svensson") > -1) {
            img.src = "../../../images/phonebook/johanna.jpeg";
          } else if (token.textContent.indexOf("Johnny Abana") > -1) {
            img.src = "../../../images/phonebook/johnny.jpeg";
          } else if (token.textContent.indexOf("Laura Thene") > -1) {
            img.src = "../../../images/phonebook/laura.png";
          } else if (token.textContent.indexOf("Margaret Vetton") > -1) {
            img.src = "../../../images/phonebook/margaret.png";
          } else if (token.textContent.indexOf("Maria Sevrano") > -1) {
            img.src = "../../../images/phonebook/Maria.jpeg";
          } else if (token.textContent.indexOf("Mark Yemen") > -1) {
            img.src = "../../../images/phonebook/mark.jpeg";
          } else if (token.textContent.indexOf("Maya Verdara") > -1) {
            img.src = "../../../images/phonebook/maya.jpeg";
          } else if (token.textContent.indexOf("Michael Barton") > -1) {
            img.src = "../../../images/phonebook/michael.png";
          } else if (token.textContent.indexOf("Monica Oghini") > -1) {
            img.src = "../../../images/phonebook/monica.jpeg";
          } else if (token.textContent.indexOf("Nancy Queens") > -1) {
            img.src = "../../../images/phonebook/nancy.png";
          } else if (token.textContent.indexOf("Robert Drawny") > -1) {
            img.src = "../../../images/phonebook/robert.png";
          } else if (token.textContent.indexOf("Steven Fedrichy") > -1) {
            img.src = "../../../images/phonebook/steven.jpeg";
          } else if (token.textContent.indexOf("Toni Versachi") > -1) {
            img.src = "../../../images/phonebook/toni.jpeg";
          }
        }
      });
    });
  }
};
</script>

<style>
.avatar {
  border-radius: 50%;
}

.smart-token > span:first-of-type {
  padding-left: initial;
}

.smart-token {
  margin-left: 5px;
}

.smart-token > span {
  display: table-cell;
  vertical-align: middle;
  padding-left: 5px;
}

smart-drop-down-list[selection-display-mode="tokens"]
  .smart-selection-field
  > .smart-token {
  box-shadow: initial;
}
smart-drop-down-list {
  width: 30%;
  min-height: 30px;
  height: auto !important;
}
</style>
