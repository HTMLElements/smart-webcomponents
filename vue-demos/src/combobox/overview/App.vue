<template>
  <div class="vue-root">
    <h2>Smart HTML ComboBox is an editable form control with an input that allows selecting a value from a list.</h2>
    <br />
    <div>
      <p>
        A dropdown list selects between multiple selections. It displays the current
        state and a down/up arrow. Available states may be shown as a list of strings,
        a palette, or icons, for example.
        <br />
      </p>
      <p>
        When a user interacts with the dropDown, a menu can appear over, under
        or below the drop down list and displays the possible states. Pressing
        a state dismisses the menu if the selection is single and updates the button
        to display this new state.
        <br />
      </p>
      <p>Scrolling within the dropdown behaves the same way a menu scrolls.</p>
    </div>
    <br />
    <br />
    <smart-combo-box
      drop-down-position="bottom"
      selected-indexes="[0]"
      label="Phone"
      selection-mode="one"
      class="combos1"
    >
      <smart-list-item>Mobile</smart-list-item>
      <smart-list-item>Home</smart-list-item>
      <smart-list-item>Work</smart-list-item>
    </smart-combo-box>
    <br />
    <br />
    <smart-combo-box
      drop-down-position="bottom"
      selected-indexes="[0]"
      label="Email"
      selection-mode="one"
      class="combos1"
    >
      <smart-list-item>Work</smart-list-item>
      <smart-list-item>Mobile</smart-list-item>
      <smart-list-item>Home</smart-list-item>
    </smart-combo-box>
    <br />
    <br />
    <smart-combo-box
      drop-down-position="bottom"
      selected-indexes="[0]"
      label="Address"
      selection-mode="one"
      class="combos1"
    >
      <smart-list-item>Home</smart-list-item>
      <smart-list-item>Mobile</smart-list-item>
      <smart-list-item>Work</smart-list-item>
    </smart-combo-box>
    <br />
    <br />
    <div>
      <h2>Generic overflow combobox</h2>
      <p>
        The generic overflow combobox displays an arrow by default. When the button
        is pressed, the menu appears. Pressing an option on the menu navigates
        to further settings for that option.
      </p>
      <br />
      <smart-combo-box drop-down-position="bottom">
        <smart-list-item>Arial</smart-list-item>
        <smart-list-item selected>Calibri</smart-list-item>
        <smart-list-item>Courier</smart-list-item>
        <smart-list-item>Verdana</smart-list-item>
      </smart-combo-box>
    </div>
    <br />
    <br />
    <h2>ComboBox Style</h2>
    <br />
    <div>
      <p>Normal</p>
      <br />
      <smart-combo-box drop-down-position="bottom">
        <smart-list-item selected>Home</smart-list-item>
        <smart-list-item>Mobile</smart-list-item>
        <smart-list-item>Work</smart-list-item>
        <smart-list-item>Business</smart-list-item>
        <smart-list-item>Personal</smart-list-item>
      </smart-combo-box>
      <br />
      <p>Opened</p>
      <br />
      <smart-combo-box opened drop-down-position="bottom">
        <smart-list-item selected>Home</smart-list-item>
        <smart-list-item>Mobile</smart-list-item>
        <smart-list-item>Work</smart-list-item>
        <smart-list-item>Business</smart-list-item>
        <smart-list-item>Personal</smart-list-item>
      </smart-combo-box>
      <br />
      <p>Disabled</p>
      <br />
      <smart-combo-box drop-down-position="bottom" disabled>
        <smart-list-item>Home</smart-list-item>
        <smart-list-item>Mobile</smart-list-item>
        <smart-list-item>Work</smart-list-item>
        <smart-list-item>Business</smart-list-item>
        <smart-list-item selected>Personal</smart-list-item>
      </smart-combo-box>
    </div>
    <br />
    <br />
    <h2>ComboBox Open Directions</h2>
    <div class="module">
      <p>
        smartComboBox has a number of opening directions but the most popular
        are "bottom", "overlay-center" and "top".
      </p>
    </div>
    <div class="dropDownOpenModes">
      <table>
        <tbody>
          <tr>
            <td>Bottom</td>
            <td>
              <smart-combo-box drop-down-position="bottom">
                <smart-list-item>Africa</smart-list-item>
                <smart-list-item selected>America</smart-list-item>
                <smart-list-item>Asia</smart-list-item>
                <smart-list-item>Europe</smart-list-item>
              </smart-combo-box>
            </td>
          </tr>
          <tr>
            <td>Overlay-center</td>
            <td>
              <smart-combo-box drop-down-position="overlay-center">
                <smart-list-item>Yogurt</smart-list-item>
                <smart-list-item selected>Honey</smart-list-item>
                <smart-list-item>Strawberries</smart-list-item>
              </smart-combo-box>
            </td>
          </tr>
          <tr>
            <td>Top</td>
            <td>
              <smart-combo-box drop-down-position="top">
                <smart-list-item>Peanuts</smart-list-item>
                <smart-list-item selected>Hazelnuts</smart-list-item>
                <smart-list-item>Almonds</smart-list-item>
              </smart-combo-box>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <h2>ComboBox Selection Modes</h2>
    <div class="module">
      <p>
        smartComboBox has a variaty of selection modes allowing single or multiple
        item selection.
      </p>
    </div>
    <div>One(Selection of single item)</div>
    <br />
    <smart-combo-box drop-down-position="bottom">
      <smart-list-item selected>State 1</smart-list-item>
      <smart-list-item>State 2</smart-list-item>
      <smart-list-item>State 3</smart-list-item>
    </smart-combo-box>
    <br />
    <div>oneOrManyExtended - allows selection with shift and ctrl.</div>
    <br />
    <smart-combo-box drop-down-position="bottom" selection-mode="oneOrManyExtended">
      <smart-list-item>State 1</smart-list-item>
      <smart-list-item selected>State 2</smart-list-item>
      <smart-list-item>State 3</smart-list-item>
    </smart-combo-box>
    <br />
    <div>checkBox</div>
    <br />
    <smart-combo-box drop-down-position="bottom" selection-mode="checkBox">
      <smart-list-item>Item 1</smart-list-item>
      <smart-list-item selected>Item 2</smart-list-item>
      <smart-list-item>Item 3</smart-list-item>
    </smart-combo-box>
    <br />
    <div>radioButton</div>
    <br />
    <smart-combo-box drop-down-position="bottom" selection-mode="radioButton">
      <smart-list-item>Item 1</smart-list-item>
      <smart-list-item selected>Item 2</smart-list-item>
      <smart-list-item>Item 3</smart-list-item>
    </smart-combo-box>
    <br />
    <p>
      Additional selection modes are "zeroOrOne", "OneOrMany", "zeroOrMany"
      and "none"
    </p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.combobox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // Your code here.
    });
  }
};
</script>

<style>
@media only screen and (max-width: 500px) {
  body,
  html {
    font-size: 12px;
    width: 320px;
  }
}
</style>
