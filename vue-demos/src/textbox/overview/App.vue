<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <template id="itemTemplate">
        <div class="templateContainer">
          <div class="primaryAction">
            <i class="material-icons"></i>
            {{label}}
          </div>
          <div class="secondaryAction"></div>
        </div>
      </template>

      <template id="multiLineTemplate">
        <div class="templateContainer">
          <div class="firstLine">{{label}}</div>
          <div class="secondLine"></div>
        </div>
      </template>

      <section>
        <div>
          <h2>Text fields allow users to input, edit, and select text.</h2>
          <div class="module">
            <p>
              Text fields typically reside in forms but can appear in other places,
              like dialog boxes and search.
            </p>
          </div>
          <div class="module">
            <h3>Usage</h3>
            <p>
              Text fields validate input, help users fix errors, autocomplete words,
              and provide suggestions.
            </p>
            <h3>Field types</h3>
            <p>
              Single-line
              <br />Multi-line
              <br />Text area
            </p>
            <h3>Input types</h3>
            <p>
              Formatted inputs
              <br />Nested menus & pickers
            </p>
          </div>
        </div>
      </section>
      <section id="text-box-principles">
        <h2>Principles</h2>
        <div class="module">
          <p>Text fields should have the following characteristics:</p>
        </div>
        <div class="module module-wide">
          <h2>Identifiable</h2>
          <p>
            Using a tappable touch target, text fields should indicate that users
            can enter information.
          </p>
          <h2>Findable</h2>
          <p>It should be easy to find a text field among other elements.</p>
          <h2>Legible</h2>
          <p>
            Text fields should indicate their state – whether enabled or disabled,
            empty or filled, valid or invalid – with clear label, input, and assistive
            text.
          </p>
        </div>
      </section>
      <section id="text-box-layout">
        <h2>Layout</h2>
        <p>Text fields contain the following elements:</p>
        <div>
          <div class="module">
            <h2>Label</h2>
            <p>
              Text field labels display the type of input a field requires. Every text
              field should have a label.
              <br />Labels are aligned with the input line and always visible. They can be
              resting (when a field is inactive and empty) or floating.
            </p>
            <h2>Input line</h2>
            <p>
              The input line indicates where to enter text, displayed below the label.
              <br />When a field is active or contains an error, the line’s color and thickness
              vary.
            </p>
            <h2>Cursor</h2>
            <p>
              The cursor indicates the user’s current input position.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div>
          <div class="module">
            <p>
              In forms with some required fields, indicate all of the required ones.
              However, if there are fewer optional fields, indicate those instead.
            </p>
          </div>
          <div class="module">
            <div class="light-theme" id="requiredExample">
              <smart-text-box id="layoutName" placeholder="Name *"></smart-text-box>
              <smart-text-box id="layoutAddress" placeholder="Address"></smart-text-box>
              <smart-text-box id="layoutCity" placeholder="City"></smart-text-box>
              <smart-combo-box id="layoutState">
                <smart-list-item>NY</smart-list-item>
                <smart-list-item>NC</smart-list-item>
                <smart-list-item>ND</smart-list-item>
                <smart-list-item>OH</smart-list-item>
              </smart-combo-box>
              <br />
              <smart-text-box id="layoutZip" placeholder="Zip"></smart-text-box>
              <smart-text-box id="layoutPhone" placeholder="Phone"></smart-text-box>
            </div>
            <p>Name and zip code are the only required fields in the form.</p>
          </div>
          <div class="module">
            <div class="light-theme" id="optionalExample">
              <smart-text-box id="layoutProductName" placeholder="Product name"></smart-text-box>
              <smart-text-box id="layoutPrice" placeholder="Price"></smart-text-box>
              <smart-combo-box
                id="layoutProductCategory"
                class="material animation"
                placeholder="Product category"
              >
                <smart-list-item>Alabama</smart-list-item>
                <smart-list-item>California</smart-list-item>
                <smart-list-item>Delaware</smart-list-item>
              </smart-combo-box>
              <br />
              <smart-text-box id="layoutLocation" placeholder="Location"></smart-text-box>
              <smart-text-box id="layoutDescription" placeholder="Description (optional)"></smart-text-box>
            </div>
            <p>Description is the only optional field in the form.</p>
          </div>
        </div>
      </section>
      <section id="text-box-layout">
        <h2>States</h2>
        <div>
          <div class="module">
            <p>Text fields have two major states: enabled or disabled.</p>
            <p>In the enabled state, these user interactions are available:</p>
          </div>
          <div class="module">
            <div class="light-theme">
              <smart-text-box disabled></smart-text-box>
            </div>
            <p>Text field is disabled.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.combobox.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
