<template>
  <div class="vue-root">
    <div class="demo-description">This example shows how to create a Reactive Form with Validation.</div>
    <form id="profileForm">
      <div class="smart-form-row">
        <label>First Name:</label>
        <smart-input class="underlined" form-control-name="firstName"></smart-input>
      </div>
      <div class="smart-form-row">
        <label>Last Name:</label>
        <smart-input class="underlined" form-control-name="lastName"></smart-input>
      </div>
      <div class="smart-form-row" form-group-name="address">
        <h3>Address</h3>
        <div class="smart-form-row">
          <label>Street:</label>
          <smart-input class="underlined" form-control-name="street"></smart-input>
        </div>
        <div class="smart-form-row">
          <label>City:</label>
          <smart-input class="underlined" form-control-name="city"></smart-input>
        </div>
        <div class="smart-form-row">
          <label>State:</label>
          <smart-input class="underlined" form-control-name="state"></smart-input>
        </div>
        <div class="smart-form-row">
          <label>Zip Code:</label>
          <smart-input class="underlined" form-control-name="zip"></smart-input>
        </div>
      </div>
      <div class="smart-form-row submit">
        <smart-button class="success" form-control-name="submit" type="submit">Submit</smart-button>
      </div>
    </form>
    <br />
    <br />
    <div id="log"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.form.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.input.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // Create a Reactive Form.
      const form = new window.Smart.Form("#profileForm", {
        firstName: [
          "",
          {
            validationRules: [
              {
                type: "required",
                message: "First Name is required"
              },
              {
                type: "stringLength",
                min: 2,
                message: "First Name requires minimum 2 characters"
              }
            ]
          }
        ],
        lastName: [
          "",
          {
            validationRules: [
              {
                type: "required",
                message: "Last Name is required"
              }
            ]
          }
        ],
        address: new window.Smart.FormGroup({
          street: [
            "",
            {
              validationRules: [
                {
                  type: "required",
                  message: "Street is required"
                }
              ]
            }
          ],
          city: [""],
          state: [""],
          zip: [""]
        })
      });
      // set form's value.
      form.value = {
        firstName: "Peter",
        lastName: "Smith",
        address: {
          street: "507 - 20th Ave. E. Apt. 2A",
          city: "Seattle",
          state: "WA",
          zip: "98122"
        }
      };
      const log = document.getElementById("log");
      // handle value changes and log them.
      form.onValueChanges = function(value) {
        log.innerHTML = JSON.stringify(value);
      };
      // log Form's value
      log.innerHTML = JSON.stringify(form.value);
    });
  }
};
</script>

<style>
form {
  width: 350px;
}

.smart-form-row .smart-form-label {
  width: 100px;
}

.smart-form-row.submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
