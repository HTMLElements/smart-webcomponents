<template>
  <div class="vue-root">
    <div class="demo-description">Reactive Form with Validation created from HTML</div>
    <smart-form id="profileForm">
      <smart-form-group id="employee" label="Employee" data-field="employee">
        <smart-form-group data-field="name">
          <smart-form-control column-span="2" label="Photo" control-type="template">
            <div style="overflow: hidden;">
              <img width="100" src="../../../images/people/anne.png" />
            </div>
          </smart-form-control>
          <smart-form-control
            info="Enter First Name"
            required
            placeholder="First Name"
            control-type="input"
            data-field="firstName"
            label="First Name"
            class="outlined"
          ></smart-form-control>
          <smart-form-control
            info="Enter Last Name"
            required
            placeholder="Last Name"
            control-type="input"
            data-field="lastName"
            label="Last Name"
            class="outlined"
          ></smart-form-control>
        </smart-form-group>
        <smart-form-group label="Details" data-field="details">
          <smart-form-control
            placeholder="Company Name"
            required
            control-type="input"
            data-field="company"
            label="Company"
            class="outlined"
          ></smart-form-control>
          <smart-form-control
            placeholder="Address"
            required
            control-type="input"
            data-field="address"
            label="Address"
            class="outlined"
          ></smart-form-control>
          <smart-form-control
            placeholder="City"
            required
            control-type="input"
            data-field="city"
            label="City"
            class="outlined"
          ></smart-form-control>
          <smart-form-control
            placeholder="State"
            required
            control-type="input"
            data-field="state"
            label="state"
            class="outlined"
          ></smart-form-control>
          <smart-form-control
            placeholder="Zip / Postal Code"
            required
            control-type="input"
            data-field="zip"
            label="Zip / Postal Code"
            class="outlined"
          ></smart-form-control>
        </smart-form-group>
        <smart-form-group columns=columns>
          <smart-form-control align="right" control-type="submit" label="Submit" class="primary"></smart-form-control>
          <smart-form-control align="left" action="reset" control-type="button" label="Reset"></smart-form-control>
        </smart-form-group>
      </smart-form-group>
    </smart-form>
    <h3>Form Value:</h3>
    <div id="log"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.form.js";
import "smart-webcomponents/source/modules/smart.input.js";

export default {
  name: "app",
  data() {
    return {
      columns: 2
    };
  },
  setup() {
    onMounted(() => {
      const form = document.getElementById("profileForm");
      form.value = {
        employee: {
          name: {
            firstName: "Anne",
            lastName: "Smith"
          },
          details: {
            address: "1st Ave SW",
            company: "N/A",
            city: "Austin",
            state: "Texas",
            zip: "78209"
          }
        }
      };
      const log = document.getElementById("log");
      log.innerHTML = JSON.stringify(form.value);
      form.onValueChanges = function(value) {
        log.innerHTML = JSON.stringify(value);
      };
    });
  }
};
</script>

<style>
</style>
