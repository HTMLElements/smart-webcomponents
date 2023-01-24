<template>
  <div class="vue-root">
    <smart-list-box selection-mode="checkBox" id="list"></smart-list-box>
    <div class="options">
      <div class="caption">Methods</div>
      <div class="option">
        <smart-button id="unsort">Unsort</smart-button>
        <smart-button id="sort">Sort</smart-button>
      </div>
      <div class="option">
        <smart-button id="ungroup">Ungroup</smart-button>
        <smart-button id="group">Group</smart-button>
      </div>
      <div class="option">
        <smart-button id="default">Default</smart-button>
        <smart-button id="check">Check</smart-button>
        <br />
        <smart-button id="radio">Radio</smart-button>
      </div>
      <div class="option">
        <smart-button id="insert">Insert</smart-button>
        <smart-button id="update">Update</smart-button>
        <br />
        <smart-button id="remove">Remove</smart-button>
      </div>
      <div class="option">
        <smart-button style="width:auto;" id="disabled">Enable/Disable</smart-button>
        <br />
        <smart-button id="clearItems">Clear Items</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const list = document.getElementById("list"),
        data = [
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
            value: 2,
            group: "A"
          },
          {
            label: "Boyko",
            value: 8,
            group: "A"
          },
          {
            label: "Dimitar",
            value: 2,
            group: "B"
          },
          {
            label: "George",
            value: 10,
            group: "C"
          }
        ];
      list.dataSource = data;
      document.getElementById("unsort").onclick = function() {
        list.sorted = false;
      };
      document.getElementById("sort").onclick = function() {
        list.sorted = true;
      };
      document.getElementById("ungroup").onclick = function() {
        list.grouped = false;
      };
      document.getElementById("group").onclick = function() {
        list.grouped = true;
      };
      document.getElementById("default").onclick = function() {
        list.selectionMode = "one";
      };
      document.getElementById("check").onclick = function() {
        list.selectionMode = "checkBox";
      };
      document.getElementById("radio").onclick = function() {
        list.selectionMode = "radioButton";
      };
      document.getElementById("insert").onclick = function() {
        list.insert(0, "New Item");
      };
      document.getElementById("update").onclick = function() {
        list.update(0, "Updated Item");
      };
      document.getElementById("remove").onclick = function() {
        list.removeAt(0);
      };
      document.getElementById("disabled").onclick = function() {
        list.disabled = !list.disabled;
      };
      document.getElementById("clearItems").onclick = function() {
        list.clearItems();
      };
    });
  }
};
</script>

<style>
smart-list-box {
  width: 300px;
  height: 500px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
</style>
