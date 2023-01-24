<template>
  <div class="vue-root">
    <section>
      <div>
        <h2>smartAccordion element represents a custom element with expandable items. It is a lightweight container that may either stand alone or be connected to a larger surface.</h2>
        <div>
          <p>
            Each accordion item contains header and content part. Click on the header
            toggles the content part.
          </p>
          <p>smartAccordion may be used for a variety of tasks, such as:</p>
          <ul>
            <li>To edit a setting</li>
            <li>To create a tool for ad campaigns</li>
          </ul>
        </div>
        <br />
        <div>
          <h3>Usage</h3>
          <p>
            Editing
            <br />Creating flows
          </p>
          <br />
          <h3>Behavior</h3>
          <p>
            Expand
            <br />Collapse
            <br />Focus
          </p>
        </div>
      </div>
    </section>
    <br />
    <section>
      <h2>Accordion Web Components Usage</h2>
      <br />
      <div>
        <p>
          <strong>Editing</strong>
        </p>
        <p>
          Accordions are best used for lightweight editing of an element, such as
          selecting a value for a setting.
        </p>
        <p>
          For example, an app that contains tables may use accordion to adjust settings
          on table elements.
        </p>
        <br />
        <p>
          <strong>Creation flows</strong>
        </p>
        <p>Accordion items may be displayed in a sequence to form creation flows.</p>
        <p>This is an example of a tool for creating ad campaigns.</p>
      </div>
      <div>
        <smart-accordion expand-mode="toggle" id="accordionUsage">
          <smart-accordion-item
            label="Trip name <span class='description'>Carribean cruise</span>"
            expanded
          >Carribean cruise</smart-accordion-item>
          <smart-accordion-item label="Location <span class='description'>Barbados</span>">Barbados</smart-accordion-item>
          <smart-accordion-item label="Start and end dates"></smart-accordion-item>

          <smart-accordion-item
            label="Carrier <span class='description'>The best cruise line</span>"
          >The best cruise line</smart-accordion-item>
          <smart-accordion-item
            label="Meal preferences <span class='description'>Vegetarian</span>"
          >Vegetarian</smart-accordion-item>
        </smart-accordion>
      </div>
      <div class="module"></div>
    </section>
    <section>
      <h2>Behavior</h2>
      <div>
        <h2>Collapsed accordion item</h2>
        <p>
          Displays summary information. Upon selecting the collapsed panel, it expands
          to display the full expansion panel.
        </p>
        <h2>Expanded accordion item</h2>
        <p>
          Upon selection, a collapsed panel expands, allowing users to add or edit
          information.
        </p>
        <p>Helper text may be added to the panel to assist the user.</p>
        <h2>Focus state</h2>
        <p>
          An expansion panel may use a focus state (by using a grey background on
          the list item) to provide focus to individual list items.
        </p>
        <p>
          On a keyboard, users may traverse through list items by using the Tab
          key.
        </p>
      </div>
      <div>
        <smart-accordion expand-mode="toggle" id="accordionBehavior">
          <smart-accordion-item label="Personal data" expanded>
            <br />
            <br />
            <smart-text-box label="First name"></smart-text-box>
            <br />
            <br />
            <smart-text-box label="Age"></smart-text-box>
            <br />
            <br />
          </smart-accordion-item>
          <smart-accordion-item label="<span class='description'>Currently I am closed</span>">
            I'm visible because I am open
            <br />
            <br />
          </smart-accordion-item>
        </smart-accordion>
      </div>
    </section>
  </div>
</template> 

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const accordionItems = document.querySelectorAll("smart-accordion-item");
      accordionItems[0].index = 0;
      accordionItems[1].index = 1;
      accordionItems[2].index = 2;
      accordionItems[3].index = 3;
      accordionItems[4].index = 4;

      accordionItems[5].index = 0;
      accordionItems[6].index = 1;

      const accordionBehavior = document.getElementById("accordionBehavior");
      accordionBehavior.addEventListener("expanded", function(event) {
        var index = event.detail.index;
        if (index === 1) {
          accordionBehavior.update(1, {
            label: "<span class='description'>Currently I am open</span>"
          });
        }
      });
      accordionBehavior.addEventListener("collapsed", function(event) {
        var index = event.detail.index;
        if (index === 1) {
          accordionBehavior.update(1, {
            label: "<span class='description'>Currently I am closed</span>"
          });
        }
      });
    });
  }
};
</script>

<style>
smart-accordion {
  width: 100%;
  max-width: 350px;
  height: auto;
}
smart-text-box {
  max-width: 200px;
}
body {
  font-size: 13px;
  line-height: 24px;
}
</style>
