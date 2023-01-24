<template>
  <div class="vue-root">
    <section id="check-box">
      <div>
        <p>Checkboxes allow the user to select multiple options from a set.</p>
        <br />
        <p>
          If you have multiple options appearing in a list, you can preserve space
          by using checkboxes instead of on/off switches.
        </p>
        <br />
        <p>
          If you have a single option, avoid using a checkbox and use an on/off
          switch instead.
        </p>
        <br />
      </div>
      <br />
      <div>
        <div class="check-box-container-light">
          <smart-check-box checked></smart-check-box>
          <smart-check-box></smart-check-box>
        </div>
      </div>
    </section>
    <br />
    <section id="check-box-light">
      <div>
        <div class="check-box-table-light">
          <table>
            <tbody>
              <tr>
                <td>
                  <p></p>
                </td>
                <td>
                  <p>hover</p>
                </td>
                <td>
                  <p>focused</p>
                </td>
                <td>
                  <p>pressed</p>
                </td>
                <td>
                  <p>disabled</p>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <p>On</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p></p>
                </td>
                <td>
                  <smart-check-box hover checked></smart-check-box>
                </td>
                <td>
                  <smart-check-box class="focus" checked></smart-check-box>
                </td>
                <td>
                  <smart-check-box active checked></smart-check-box>
                </td>
                <td>
                  <smart-check-box checked disabled></smart-check-box>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <p>Off</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p></p>
                </td>
                <td>
                  <smart-check-box hover></smart-check-box>
                </td>
                <td>
                  <smart-check-box class="focus" focus></smart-check-box>
                </td>
                <td>
                  <smart-check-box active></smart-check-box>
                </td>
                <td>
                  <smart-check-box disabled></smart-check-box>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document
        .querySelectorAll("smart-check-box.focus")[0]
        .setAttribute("focus", true);
      document
        .querySelectorAll("smart-check-box.focus")[1]
        .setAttribute("focus", true);
    });
  }
};
</script>

<style>
</style>
