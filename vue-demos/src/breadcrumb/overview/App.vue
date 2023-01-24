<template>
  <div class="vue-root">
    <smart-breadcrumb
      id="breadcrumb1"
      add-new-item
      allow-drag
      allow-drop
      close-buttons
      data-source="[{ 'label': 'Planets', 'value': 'A' }, { 'label': 'Continents', 'value': 'B' }, { 'label': 'Countries', 'value': 'C' }, { 'label': 'States', 'value': 'D' }, { 'label': 'Cities', 'value': 'E' }]"
    ></smart-breadcrumb>
    <br />
    <smart-breadcrumb
      id="breadcrumb2"
      allow-drag
      allow-drop
      close-buttons
      data-source="[{ 'label': 'Email', 'value': 'alternate_email' }, { 'label': 'Phone', 'value': 'phone' }, { 'label': 'TV', 'value': 'tv' }, { 'label': 'Video game', 'value': 'videogame_asset' }, { 'label': 'Laptop', 'value': 'laptop' }]"
      item-template="breadcrumb2Template"
    ></smart-breadcrumb>
    <br />
    <smart-breadcrumb
      id="breadcrumb3"
      minimize-width="150"
      allow-drag
      allow-drop
      close-buttons
      data-source="'[{ 'label': 'Planets', 'value': 'A' }, { 'label': 'Continents', 'value': 'B' }, { 'label': 'Countries', 'value': 'C' }, { 'label': 'States', 'value': 'D' }, { 'label': 'Cities', 'value': 'E' }]"
    ></smart-breadcrumb>
    <template id="breadcrumb2Template">
      <i class="material-icons">{{value}}</i>
      {{label}}
    </template>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.breadcrumb.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const breadcrumb1 = document.getElementById("breadcrumb1");
      let newItems = 0;

      breadcrumb1.addEventListener("addNewItem", function() {
        if (newItems === 0) {
          breadcrumb1.addItem({
            index: this.dataSource.length,
            label: "Districts",
            value: "F"
          });
          newItems++;
        } else if (newItems === 1) {
          breadcrumb1.addItem({
            index: this.dataSource.length,
            label: "Blocks",
            value: "G"
          });
          breadcrumb1.addNewItem = false;
        }
      });

      breadcrumb1.addEventListener("dragEnd", function(event) {
        if (!breadcrumb1.contains(event.detail.target)) {
          breadcrumb1.removeItem(event.detail.item);
        }
      });
    });
  }
};
</script>

<style>
#breadcrumb2 {
  --smart-breadcrumb-item-height: 50px;
  width: 800px;
}

#breadcrumb2 .smart-breadcrumb-item-label {
  display: flex;
  align-items: center;
}

.material-icons {
  margin-right: 5px;
  padding: 5px;
  width: 34px;
  height: 34px;
  background-color: var(--smart-success);
  border-radius: 100%;
}

#breadcrumb3 {
  width: 100px;
}
</style>
