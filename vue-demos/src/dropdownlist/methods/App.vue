<template>
  <div class="vue-root">
    <smart-drop-down-list id="dropDownListMethodsDemo"></smart-drop-down-list>
    <div class="options">
      <div class="option">Settings</div>
      <div class="option">
        <smart-button id="unsort">Unsort</smart-button>
        <smart-button id="sort">Sort</smart-button>
        <br />
        <br />
        <smart-button id="ungroup">Ungroup</smart-button>
        <smart-button id="group">Group</smart-button>
        <br />
        <br />
        <smart-button id="open">Open</smart-button>
        <smart-button id="close">Close</smart-button>
        <br />
        <br />
        <smart-button id="default">Default</smart-button>
        <smart-button id="check">Check</smart-button>
        <br />
        <br />
        <smart-button id="radio">Radio</smart-button>
        <br />
        <br />
        <smart-button id="insert">Insert</smart-button>
        <smart-button id="update">Update</smart-button>
        <br />
        <br />
        <smart-button id="remove">Remove</smart-button>
        <br />
        <br />
        <smart-button style="width:auto;" id="disabled">Enable/Disable</smart-button>
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
      const list = document.querySelector("smart-drop-down-list");
      list.dataSource = [
        {
          label: "Andrew",
          value: 1,
          group: "Product Owners"
        },
        {
          label: "Natalia",
          value: 2,
          group: "Developers"
        },
        {
          label: "Michael",
          value: 3,
          group: "Developers"
        },
        {
          label: "Angel",
          value: 4,
          group: "Product Owners"
        },
        {
          label: "Hristo",
          value: 5,
          group: "Developers"
        },
        {
          label: "Peter",
          value: 6,
          group: "Developers"
        },
        {
          label: "Albert",
          value: 7,
          group: "Support"
        },
        {
          label: "George",
          value: 8,
          group: "Support"
        }
      ];
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
      document.getElementById("open").onclick = function() {
        list.open();
      };
      document.getElementById("close").onclick = function() {
        list.close();
      };
      document.getElementById("default").onclick = function() {
        list.selectionMode = "oneOrManyExtended";
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
        const dropDownList = list;
        dropDownList.disabled = !dropDownList.disabled;
      };
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
