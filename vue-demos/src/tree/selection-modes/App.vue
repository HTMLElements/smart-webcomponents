<template>
  <div class="vue-root">
    <smart-tree
      id="tree"
      class="animation"
      selection-mode="zeroOrMany"
      selected-indexes="['0', '4']"
    >
      <smart-tree-item>Home</smart-tree-item>
      <smart-tree-item selected>Education</smart-tree-item>
      <smart-tree-item>Financial services</smart-tree-item>
      <smart-tree-item>Government</smart-tree-item>
      <smart-tree-item disabled>Manufacturing</smart-tree-item>
      <smart-tree-items-group>
        Solutions
        <smart-tree-item>Education</smart-tree-item>
        <smart-tree-item>Financial services</smart-tree-item>
        <smart-tree-item>Government</smart-tree-item>
        <smart-tree-item>Manufacturing</smart-tree-item>
        <smart-tree-items-group>
          Solutions
          <smart-tree-item>Consumer photo and video</smart-tree-item>
          <smart-tree-item>Mobile</smart-tree-item>
          <smart-tree-item>Rich Internet applications</smart-tree-item>
          <smart-tree-item>Technical communication</smart-tree-item>
          <smart-tree-item>Training and eLearning</smart-tree-item>
          <smart-tree-item>Web conferencing</smart-tree-item>
        </smart-tree-items-group>
        <smart-tree-item>All industries and solutions</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group disabled>
        Products
        <smart-tree-item>PC products</smart-tree-item>
        <smart-tree-item>Mobile products</smart-tree-item>
        <smart-tree-item>All products</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        Communities
        <smart-tree-item>Designers</smart-tree-item>
        <smart-tree-item>Developers</smart-tree-item>
        <smart-tree-item>Educators and students</smart-tree-item>
        <smart-tree-item>Partners</smart-tree-item>
        <smart-tree-items-group>
          By resource
          <smart-tree-item>Labs</smart-tree-item>
          <smart-tree-item>TV</smart-tree-item>
          <smart-tree-item>Forums</smart-tree-item>
          <smart-tree-item>Exchange</smart-tree-item>
          <smart-tree-item>Blogs</smart-tree-item>
          <smart-tree-item>Experience Design</smart-tree-item>
        </smart-tree-items-group>
      </smart-tree-items-group>
    </smart-tree>
    <div class="options">
      <div class="caption"></div>
      <div class="option">
        <div>
          <p>Selection mode:</p>
          <smart-radio-button id="none">None</smart-radio-button>
          <br />
          <smart-radio-button id="one">One</smart-radio-button>
          <br />
          <smart-radio-button id="zeroOrOne">Zero or one</smart-radio-button>
          <br />
          <smart-radio-button id="zeroOrMany" checked>Zero or many</smart-radio-button>
          <br />
          <smart-radio-button id="oneOrMany">One or many</smart-radio-button>
          <br />
          <smart-radio-button id="oneOrManyExtended">One or many extended</smart-radio-button>
          <br />
          <smart-radio-button id="checkBox">Checkbox</smart-radio-button>
          <br />
          <smart-radio-button id="radioButton">Radio button</smart-radio-button>
        </div>
        <br />
        <div>
          <p>Toggle mode:</p>
          <smart-radio-button id="dblclick" checked>Item double click</smart-radio-button>
          <br />
          <smart-radio-button id="click">Item click</smart-radio-button>
          <br />
          <smart-radio-button id="arrow">Item arrow click</smart-radio-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree = document.querySelector("smart-tree");
      document.getElementById("none").addEventListener("change", function() {
        tree.selectionMode = "none";
      });
      document.getElementById("one").addEventListener("change", function() {
        tree.selectionMode = "one";
      });
      document
        .getElementById("zeroOrOne")
        .addEventListener("change", function() {
          tree.selectionMode = "zeroOrOne";
        });
      document
        .getElementById("zeroOrMany")
        .addEventListener("change", function() {
          tree.selectionMode = "zeroOrMany";
        });
      document
        .getElementById("oneOrMany")
        .addEventListener("change", function() {
          tree.selectionMode = "oneOrMany";
        });
      document
        .getElementById("oneOrManyExtended")
        .addEventListener("change", function() {
          tree.selectionMode = "oneOrManyExtended";
        });
      document
        .getElementById("checkBox")
        .addEventListener("change", function() {
          tree.selectionMode = "checkBox";
        });
      document
        .getElementById("radioButton")
        .addEventListener("change", function() {
          tree.selectionMode = "radioButton";
        });
      document
        .getElementById("dblclick")
        .addEventListener("change", function() {
          tree.toggleMode = "dblclick";
        });
      document.getElementById("click").addEventListener("change", function() {
        tree.toggleMode = "click";
      });
      document.getElementById("arrow").addEventListener("change", function() {
        tree.toggleMode = "arrow";
      });
    });
  }
};
</script>

<style>
smart-tree {
  width: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
  }
}
</style>
