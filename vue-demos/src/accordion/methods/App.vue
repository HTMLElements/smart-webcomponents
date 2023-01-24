<template>
  <div class="vue-root">
    <smart-accordion expand-mode="toggle" id="accordion">
      <smart-accordion-item label="Item 0">Content 0</smart-accordion-item>
      <smart-accordion-item label="Item 1">Content 1</smart-accordion-item>
      <smart-accordion-item label="Item 2">Content 2</smart-accordion-item>
    </smart-accordion>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <smart-button id="collapse">Collapse #</smart-button>
      </div>
      <div class="option">
        <smart-button id="expand">Expand #</smart-button>
      </div>
      <div class="option">
        <input
          class="text-input"
          type="text"
          id="expandCollapseIndex"
          placeholder="Item Index"
          value="0"
        />
      </div>
      <div class="option">
        <smart-button id="insert">Insert #</smart-button>
      </div>
      <div class="option">
        <smart-button id="update">Update #</smart-button>
      </div>
      <div class="option">
        <smart-button id="remove">Remove #</smart-button>
      </div>
      <div class="option">
        <input class="text-input" type="text" placeholder="Item Index" id="crudIndex" value="0" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const accordion = document.getElementById("accordion"),
        collapseBtn = document.getElementById("collapse"),
        expandBtn = document.getElementById("expand"),
        insertBtn = document.getElementById("insert"),
        updateBtn = document.getElementById("update"),
        removeBtn = document.getElementById("remove"),
        crudIndex = document.getElementById("crudIndex"),
        expandCollapseIndex = document.getElementById("expandCollapseIndex"),
        baseValue = 0;
      let insertCounter = 0;
      //Expand, Collapse
      if (collapseBtn) {
        collapseBtn.addEventListener("click", function() {
          const position = Number(expandCollapseIndex.value) || baseValue;
          accordion.collapse(position);
        });
      }
      if (expandBtn) {
        expandBtn.addEventListener("click", function() {
          const position = Number(expandCollapseIndex.value) || baseValue;
          accordion.expand(position);
        });
      }
      //Insert, Update, Remove
      const updateButtons = function() {
        if (!insertBtn || !removeBtn) {
          return;
        }
        if (insertCounter === 3) {
          insertBtn.disabled = true;
        } else {
          insertBtn.disabled = false;
        }
        if (insertCounter === -3) {
          removeBtn.disabled = true;
        } else {
          removeBtn.disabled = false;
        }
      };
      insertBtn.addEventListener("click", function() {
        insertCounter++;
        const position = Number(crudIndex.value) || baseValue;
        accordion.insert(position, {
          label: "New label",
          content: "New content"
        });
        updateButtons();
      });
      updateBtn.addEventListener("click", function() {
        const position = Number(crudIndex.value) || baseValue;
        accordion.update(position, {
          label: "Updated Label",
          content: "Updated Content"
        });
      });
      removeBtn.addEventListener("click", function() {
        const position = Number(crudIndex.value) || baseValue;
        accordion.removeAt(position);
        insertCounter--;
        updateButtons();
      });
    });
  }
};
</script>

<style>
smart-accordion {
  width: 250px;
  height: 500px;
}

#sideContainer {
  margin-top: 20px;
}
</style>
