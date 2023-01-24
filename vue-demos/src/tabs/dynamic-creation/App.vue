<template>
  <div class="vue-root"></div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tabs = document.createElement("smart-tabs");
      document.body.appendChild(tabs);
      const tabItem1 = document.createElement("smart-tab-item"),
        tabItem2 = document.createElement("smart-tab-item");
      tabItem1.label = "TAB 1";
      tabItem1.content = "Content 1";
      tabItem2.label = "TAB 2";
      tabItem2.content = "Content 2";
      tabs.appendChild(tabItem1);
      tabs.appendChild(tabItem2);
    });
  }
};
</script>

<style>
smart-tabs {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
