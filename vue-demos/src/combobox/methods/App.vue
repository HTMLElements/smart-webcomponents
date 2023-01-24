<template>
  <div class="vue-root">
    <smart-combo-box id="dropDownListMethodsDemo"></smart-combo-box>
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
import "smart-webcomponents/source/modules/smart.combobox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const comboBox = document.querySelector("smart-combo-box");
      comboBox.dataSource = [
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
        comboBox.sorted = false;
      };
      document.getElementById("sort").onclick = function() {
        comboBox.sorted = true;
      };
      document.getElementById("ungroup").onclick = function() {
        comboBox.grouped = false;
      };
      document.getElementById("group").onclick = function() {
        comboBox.grouped = true;
      };
      document.getElementById("open").onclick = function() {
        comboBox.open();
      };
      document.getElementById("close").onclick = function() {
        comboBox.close();
      };
      document.getElementById("default").onclick = function() {
        comboBox.selectionMode = "oneOrManyExtended";
      };
      document.getElementById("check").onclick = function() {
        comboBox.selectionMode = "checkBox";
      };
      document.getElementById("radio").onclick = function() {
        comboBox.selectionMode = "radioButton";
      };
      document.getElementById("insert").onclick = function() {
        comboBox.insert(0, "New Item");
      };
      document.getElementById("update").onclick = function() {
        comboBox.update(0, "Updated Item");
      };
      document.getElementById("remove").onclick = function() {
        comboBox.removeAt(0);
      };
      document.getElementById("disabled").onclick = function() {
        const dropDownList = comboBox;
        dropDownList.disabled = !dropDownList.disabled;
      };
    });
  }
};
</script>

<style>
</style>
