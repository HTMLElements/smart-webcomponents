<template>
  <div class="vue-root">
    <smart-check-box id="showLines" checked>Show lines</smart-check-box>
    <smart-check-box id="showRootLines" checked>Show root lines</smart-check-box>
    <br />
    <br />
    <smart-tree
      id="tree1"
      class="animation"
      auto-load-state
      show-lines
      show-root-lines
      auto-save-state
      filterable
      filter-input-placeholder="Filter query..."
      filter-mode="containsIgnoreCase"
      toggle-element-position="far"
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
    <smart-tree
      id="tree2"
      class="animation"
      auto-load-state
      show-lines
      show-root-lines
      auto-save-state
      filterable
      filter-input-placeholder="Filter query..."
      filter-mode="containsIgnoreCase"
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
    <smart-tree
      id="tree3"
      class="animation"
      auto-load-state
      show-lines
      show-root-lines
      auto-save-state
      filterable
      filter-input-placeholder="Filter query..."
      filter-mode="containsIgnoreCase"
      right-to-left
      toggle-element-position="far"
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
    <smart-tree
      id="tree4"
      class="animation"
      auto-load-state
      show-lines
      show-root-lines
      auto-save-state
      filterable
      filter-input-placeholder="Filter query..."
      filter-mode="containsIgnoreCase"
      right-to-left
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
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree1 = document.getElementById("tree1"),
        tree2 = document.getElementById("tree2"),
        tree3 = document.getElementById("tree3"),
        tree4 = document.getElementById("tree4");
      document
        .getElementById("showLines")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          tree1.showLines = checked;
          tree2.showLines = checked;
          tree3.showLines = checked;
          tree4.showLines = checked;
        });
      document
        .getElementById("showRootLines")
        .addEventListener("change", function() {
          const checked = event.detail.value;
          tree1.showRootLines = checked;
          tree2.showRootLines = checked;
          tree3.showRootLines = checked;
          tree4.showRootLines = checked;
        });
    });
  }
};
</script>

<style>
smart-tree {
  width: 300px;
  margin-top: 20px;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
  }
}
</style>
