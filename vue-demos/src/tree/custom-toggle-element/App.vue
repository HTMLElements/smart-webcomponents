<template>
  <div class="vue-root">
    <smart-tree id="tree1" class="animation">
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
      <smart-tree-items-group expanded>
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
    <smart-tree id="tree2" class="animation plus-minus">
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
      <smart-tree-items-group expanded>
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
      <div class="caption">Settings</div>
      <div>
        <p>Toggle element position:</p>
        <br />
        <smart-radio-button id="near" checked>Near</smart-radio-button>
        <br />
        <smart-radio-button id="far">Far</smart-radio-button>
      </div>
      <br />
      <smart-check-box id="autoHideToggleElement">Auto-hide toggle element</smart-check-box>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree1 = document.getElementById("tree1"),
        tree2 = document.getElementById("tree2");
      document.getElementById("near").addEventListener("change", function() {
        tree1.toggleElementPosition = "near";
        tree2.toggleElementPosition = "near";
      });
      document.getElementById("far").addEventListener("change", function() {
        tree1.toggleElementPosition = "far";
        tree2.toggleElementPosition = "far";
      });
      document
        .getElementById("autoHideToggleElement")
        .addEventListener("change", function(event) {
          const autoHideToggleElement = event.detail.value;
          tree1.autoHideToggleElement = autoHideToggleElement;
          tree2.autoHideToggleElement = autoHideToggleElement;
        });
    });
  }
};
</script>

<style>
smart-tree {
  margin-top: 50px;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
  }
}
</style>
