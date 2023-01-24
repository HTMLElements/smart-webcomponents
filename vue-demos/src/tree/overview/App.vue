<template>
  <div class="vue-root">
    <smart-tree id="tree">
      <smart-tree-items-group>
        <i class="material-icons">&#xE53F;</i> Attractions
        <smart-tree-item>Movies</smart-tree-item>
        <smart-tree-item>Circus</smart-tree-item>
        <smart-tree-item>Concerts</smart-tree-item>
        <smart-tree-item>Monuments</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE56C;</i> Dining
        <smart-tree-item>Restaurants</smart-tree-item>
        <smart-tree-item>Caf&eacute;s</smart-tree-item>
        <smart-tree-item>Bars</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE80C;</i> Education
        <smart-tree-item>Schools</smart-tree-item>
        <smart-tree-item>Colleges</smart-tree-item>
        <smart-tree-item>Universities</smart-tree-item>
        <smart-tree-item>Educational courses</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xEB41;</i> Family
        <smart-tree-item>Babysitting</smart-tree-item>
        <smart-tree-item>Family trips</smart-tree-item>
        <smart-tree-item>Theme parks</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE87D;</i> Health
        <smart-tree-item>Hospitals</smart-tree-item>
        <smart-tree-item>Family physicians</smart-tree-item>
        <smart-tree-item>Optics</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE30A;</i> Office
        <smart-tree-item>Offices for rent</smart-tree-item>
        <smart-tree-item>Office equipment</smart-tree-item>
        <smart-tree-item>Repair works</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE25C;</i> Promotions
        <smart-tree-item>Sales</smart-tree-item>
        <smart-tree-item>Malls</smart-tree-item>
        <smart-tree-item>Collective buying</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE03E;</i> Radio
        <smart-tree-item>Available stations</smart-tree-item>
        <smart-tree-item>Search</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE7E9;</i> Recipes
        <smart-tree-item>With meat</smart-tree-item>
        <smart-tree-item>With fish</smart-tree-item>
        <smart-tree-item>Vegetarian recipes</smart-tree-item>
        <smart-tree-item>Vegan recipes</smart-tree-item>
        <smart-tree-item>Desserts</smart-tree-item>
        <smart-tree-item>Chef's recommendations</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE52F;</i> Sports
        <smart-tree-item>Football</smart-tree-item>
        <smart-tree-item>Basketball</smart-tree-item>
        <smart-tree-item>Tennis</smart-tree-item>
        <smart-tree-item>Baseball</smart-tree-item>
        <smart-tree-item>Cycling</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">&#xE53D;</i> Travel
        <smart-tree-item>Local destinations</smart-tree-item>
        <smart-tree-item>Book tickets</smart-tree-item>
        <smart-tree-item>Organised travel</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

smart-tree {
  width: 60%;
  height: auto;
}
smart-tree i {
  margin-right: 8px;
}
@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
    height: 100%;
  }
  body,
  html {
    width: 100%;
    height: 100%;
  }
}
</style>
