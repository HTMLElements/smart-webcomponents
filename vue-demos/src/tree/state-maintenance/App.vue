<template>
  <div class="vue-root">
    <smart-tree
      id="tree"
      filterable
      filter-input-placeholder="Filter query..."
      filter-mode="containsIgnoreCase"
      selection-mode="oneOrMany"
    >
      <smart-tree-item>Home</smart-tree-item>
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
      <smart-tree-items-group>
        Products
        <smart-tree-item>PC products</smart-tree-item>
        <smart-tree-item>Mobile products</smart-tree-item>
        <smart-tree-item>All products</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        Support
        <smart-tree-item>Support home</smart-tree-item>
        <smart-tree-item>Customer Service</smart-tree-item>
        <smart-tree-item>Knowledge base</smart-tree-item>
        <smart-tree-item>Books</smart-tree-item>
        <smart-tree-item>Training and certification</smart-tree-item>
        <smart-tree-item>Support programs</smart-tree-item>
        <smart-tree-item>Forums</smart-tree-item>
        <smart-tree-item>Documentation</smart-tree-item>
        <smart-tree-item>Updates</smart-tree-item>
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
      <smart-tree-items-group>
        Company
        <smart-tree-item>About Us</smart-tree-item>
        <smart-tree-item>Press</smart-tree-item>
        <smart-tree-item>Investor Relations</smart-tree-item>
        <smart-tree-item>Corporate Affairs</smart-tree-item>
        <smart-tree-item>Careers</smart-tree-item>
        <smart-tree-item>Showcase</smart-tree-item>
        <smart-tree-item>Events</smart-tree-item>
        <smart-tree-item>Contact Us</smart-tree-item>
        <smart-tree-item>Become an affiliate</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <div class="options">
      <div class="caption"></div>
      <div class="option">
        <smart-button id="getState">Get state</smart-button>
        <br />
        <br />
        <smart-button id="saveState">Save state</smart-button>
        <br />
        <br />
        <smart-button id="loadState" disabled>Load state</smart-button>
        <br />
        <br />
        <br />
        <smart-check-box id="sorted">Sorted tree</smart-check-box>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree = document.getElementById("tree");
      const loadState = document.getElementById("loadState");
      const getState = document.getElementById("getState");
      const saveState = document.getElementById("saveState");
      getState.addEventListener("click", function() {
        const state = tree.getState();
        alert(JSON.stringify(state));
      });
      loadState.addEventListener("click", function() {
        tree.loadState();
        document.getElementById("sorted").checked = tree.sorted;
      });
      saveState.addEventListener("click", function() {
        tree.saveState();
        loadState.disabled = false;
      });
      document
        .getElementById("sorted")
        .addEventListener("change", function(event) {
          tree.sorted = event.detail.value;
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
