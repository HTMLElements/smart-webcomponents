<template>
  <div class="vue-root">
    <div id="description">
      <h3>Modes Description</h3>
      <pre>Auto - the dropDownList is opened/closed when the element is hovered.</pre>
      <pre>Default - the dropDownList is opened/closed when the element is clicked.</pre>
      <pre>DropDownButton - the dropDownList is divided in two components. An Action Button and a dropDown Button. The dropDownList can be opened/closed when the dropDownButton is clicked.</pre>
      <pre>None - the dropDownList can't be opened/closed.</pre>
    </div>
    <div id="eventLog">
      <h4>Event log:</h4>
      <div id="log">...</div>
    </div>
    <div id="container">
      <smart-drop-down-list class="drop-down-list-modes-demo"></smart-drop-down-list>
      <div id="controlPanel">
        <h3>DropDownListOpen Mode:</h3>
        <smart-button disabled>Default</smart-button>
        <smart-button>Auto</smart-button>
        <smart-button style="font-size: 10px;">DropDownButton</smart-button>
        <smart-button>None</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dropDownList = document.querySelector("smart-drop-down-list");
      const buttons = document.getElementsByTagName("smart-button");
      dropDownList.dataSource = [
        {
          label: "Andrew",
          value: 1,
          group: "A"
        },
        {
          label: "Natalia",
          value: 5,
          group: "B"
        },
        {
          label: "Michael",
          value: 4,
          group: "B"
        },
        {
          label: "Angel",
          value: 2,
          group: "A"
        },
        {
          label: "Hristo",
          value: 6,
          group: "C"
        },
        {
          label: "Peter",
          value: 3,
          group: "A"
        },
        {
          label: "Albert",
          value: 3,
          group: "A"
        },
        {
          label: "Boyko",
          value: 7,
          group: "A"
        },
        {
          label: "Dimitar",
          value: 3,
          group: "B"
        },
        {
          label: "George",
          value: 25,
          group: "C"
        }
      ];
      buttons[0].addEventListener("click", function() {
        dropDownList.dropDownOpenMode = "default";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[1].addEventListener("click", function() {
        dropDownList.dropDownOpenMode = "auto";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[2].addEventListener("click", function() {
        dropDownList.dropDownOpenMode = "dropDownButton";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      buttons[3].addEventListener("click", function() {
        dropDownList.dropDownOpenMode = "none";
        for (let b = 0; b < buttons.length; b++) {
          buttons[b].disabled = buttons[b] === this ? true : false;
        }
      });
      dropDownList.addEventListener("click", function(event) {
        const log = document.getElementById("log");
        const target = event.target;
        if (dropDownList.dropDownOpenMode !== "dropDownButton") {
          log.innerHTML = "DropDownButton clicked";
          return;
        }
        if (target.classList.contains("smart-action-button")) {
          log.textContent = "ActionButton clicked";
        } else if (target.classList.contains("smart-drop-down-button")) {
          log.textContent = "DropDownButton clicked";
        }
      });
    });
  }
};
</script>

<style>
smart-drop-down-list {
  min-height: 35px;
  height: auto;
  width: 300px;
}
</style>
