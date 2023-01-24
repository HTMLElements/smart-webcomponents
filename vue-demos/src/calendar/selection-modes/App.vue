<template>
  <div class="vue-root">
    <smart-calendar></smart-calendar>
    <div class="options">
      <div class="option">
        <h3>SelectionMode</h3>
        <smart-drop-down-list id="modeSelector">
          <smart-list-item selected>default</smart-list-item>
          <smart-list-item>many</smart-list-item>
          <smart-list-item>none</smart-list-item>
          <smart-list-item>one</smart-list-item>
          <smart-list-item>oneExtended</smart-list-item>
          <smart-list-item>oneOrMany</smart-list-item>
          <smart-list-item>range</smart-list-item>
          <smart-list-item>week</smart-list-item>
          <smart-list-item>zeroOrOne</smart-list-item>
          <smart-list-item>zeroOrMany</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <h3>Description:</h3>
        <div id="modeDescription"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      function setDescription(mode) {
        let description = document.getElementById("modeDescription");
        switch (mode) {
          case "default":
            description.textContent =
              "Allows single date selection via keyboard/mouse and multiple date selection when 'Control' keyboard key is pressed.";
            break;
          case "none":
            description.textContent = "Date selection is disabled.";
            break;
          case "one":
            description.textContent = "Only one date can be selected.";
            break;
          case "oneExtended":
            description.textContent =
              'Only one date can be selected. Allows keyboard selection on "Enter/Space" key press.';
            break;
          case "many":
            description.textContent =
              "Allows multiple dates selection. The first selected date determines the begining of a date selection range. Last selected date sets the end of the range. All hovered dates in between will also be selected when the end date is decided. They will appear as hovered until the end date is selected.";
            break;
          case "zeroOrMany":
            description.textContent =
              "Allows zero or more dates to be selected.";
            break;
          case "oneOrMany":
            description.textContent =
              "Allows one or more dates to be selected. Doesn't allow zero selection.";
            break;
          case "zeroOrOne":
            description.textContent = "Zero or one date can be selected.";
            break;
          case "week":
            description.textContent =
              "Selects 7 days in a row from the selected date. The selected date is the beginning of the date range and the next 6 days are also selected to form a week( 7 days in a row).";
            break;
          case "range":
            description.textContent =
              "Selectes a range of dates between two dates. The first selected date marks the beginning of the range and the second selected date marks the end. Every date between the first and second date selection will also be selected. The next selected date will clear all previously selected and set the start for a new date range.  If the keyboard key 'Control' is pressed it is possible to start a second range selection by keeping the previous. All dates that are about to be selected are marked as hovered.";
            break;
        }
      }
      const calendar = document.querySelector("smart-calendar");
      if (calendar.selectionMode) {
        setDescription(calendar.selectionMode);
      }
      document
        .getElementById("modeSelector")
        .addEventListener("change", function(event) {
          calendar.selectionMode = event.detail.label;
          setDescription(event.detail.label);
        });
    });
  }
};
</script>

<style>
smart-drop-down-list,
#modeDescription {
  width: 100%;
}
</style>
