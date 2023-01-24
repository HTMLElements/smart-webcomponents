<template>
  <div class="vue-root">
    <smart-menu id="menu">
      <smart-menu-item value="Sun">
        <img src="../../../images/sun.png" title="Sun" />Sun
      </smart-menu-item>
      <smart-menu-items-group>
        <img src="../../../images/earth.png" title="Planets" />Planets
        <smart-menu-item value="Earth">
          <img src="../../../images/earth.png" title="Earth" />Earth
        </smart-menu-item>
        <smart-menu-item value="Mars">
          <img src="../../../images/mars.png" title="Mars" />Mars
        </smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-item value="Moon">
        <img src="../../../images/moon.png" title="Moon" />Moon
      </smart-menu-item>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const menu = document.getElementById("menu");
      menu.addEventListener("itemClick", function(event) {
        window.open(
          "https://en.wikipedia.org/wiki/" + event.detail.value,
          "_blank"
        );
      });
    });
  }
};
</script>

<style>
img {
  margin-right: 7px;
}
smart-menu {
  height: 70px;
}
</style>
