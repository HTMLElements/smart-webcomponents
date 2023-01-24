<template>
  <div class="vue-root">
    <smart-pager
      show-prev-next-navigation-buttons
      show-first-last-navigation-buttons
      show-page-index-selectors
      pages-count="10"
      page-index-selectors="5"
      show-summary
    ></smart-pager>
    <div class="options">
      <div class="caption">Event Log:</div>
      <div class="option">
        <div id="eventLog"></div>
      </div>
      <div class="option">
        <div id="selectedPage"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.pager.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const pager = document.querySelector("smart-pager"),
        eventLog = document.getElementById("eventLog");
      pager.addEventListener("change", function(event) {
        const details = event.detail;
        eventLog.innerHTML = "Selected item #" + details.index;
        console.log("Selected item #" + details.index);
      });
    });
  }
};
</script>

<style>
smart-pager {
  width: 60%;
}

@media only screen and (max-width: 700px) {
  smart-pager {
    width: 100%;
  }
}
</style>
