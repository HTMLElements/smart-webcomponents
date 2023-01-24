<template>
  <div class="vue-root">
    <smart-accordion id="accordion" reorder>
      <smart-accordion-item label="Item 0">Content</smart-accordion-item>
      <smart-accordion-item label="Item 1">Content</smart-accordion-item>
      <smart-accordion-item label="Item 3">Content</smart-accordion-item>
      <smart-accordion-item label="Item 2">Content</smart-accordion-item>
      <smart-accordion-item label="Item 4">Content</smart-accordion-item>
      <smart-accordion-item label="Item 5">Content</smart-accordion-item>
    </smart-accordion>
    <div class="options">
      <div class="caption">Events</div>
      <div class="option" id="log"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const accordion = document.getElementById("accordion"),
        eventsLog = document.getElementById("log");
      //Expanding event
      accordion.addEventListener("expanding", function(event) {
        updateEventLog(event);
      });
      //Expanded event
      accordion.addEventListener("expand", function(event) {
        updateEventLog(event);
      });
      //Collapsing event
      accordion.addEventListener("collapsing", function(event) {
        updateEventLog(event);
      });
      //Collapsed event
      accordion.addEventListener("collapse", function(event) {
        updateEventLog(event);
      });
      //Drag Start event
      accordion.addEventListener("dragStart", function(event) {
        updateEventLog(event);
      });
      //Drag End event
      accordion.addEventListener("dragEnd", function(event) {
        updateEventLog(event);
      });

      function updateEventLog(event) {
        const eventContainer = document.createElement("div"),
          eventType = event.type;
        eventContainer.innerText = eventType + " item #" + event.detail.index;
        eventContainer.className = eventType === "expanded" ? "expanded" : "";
        if (eventsLog) {
          eventsLog.appendChild(eventContainer);
        }
      }
    });
  }
};
</script>

<style>
smart-accordion {
  width: 250px;
  height: 500px;
}
</style>
