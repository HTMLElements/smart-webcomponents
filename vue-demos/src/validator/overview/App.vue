<template>
  <div class="vue-root">
    <div class="demo-container">
      <form id="testForm" action="./">
        <div class="fieldset">
          <div class="fieldset-header">Credentials</div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="Email" id="email-validation"></smart-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Password</div>
            <div class="field-value">
              <smart-password-text-box
                select-all-on-focus
                placeholder="Password"
                id="password-validation"
              ></smart-password-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Confirm Password</div>
            <div class="field-value">
              <smart-password-text-box
                select-all-on-focus
                placeholder="Confirm Password"
                id="confirm-password-validation"
              ></smart-password-text-box>
            </div>
          </div>
        </div>
        <div class="fieldset clear">
          <div class="fieldset-header">Personal Data</div>
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="Name" id="name-validation"></smart-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Date of birth</div>
            <div class="field-value">
              <smart-date-time-picker
                format-string="dddd, MMM dd, yyyy"
                calendar-button
                enable-mouse-wheel-action
                drop-down-position="bottom"
                id="date-validation"
                spin-buttons
                spin-buttons-position="left"
              ></smart-date-time-picker>
            </div>
          </div>
        </div>
        <div class="fieldset">
          <div class="fieldset-header">Billing address</div>
          <div class="field">
            <div class="field-label">Country</div>
            <div class="field-value">
              <smart-drop-down-list id="country-validation">
                <smart-list-item value="Australia">Australia</smart-list-item>
                <smart-list-item value="Bulgaria">Bulgaria</smart-list-item>
                <smart-list-item value="Canada">Canada</smart-list-item>
              </smart-drop-down-list>
            </div>
          </div>
          <div class="field">
            <div class="field-label">City</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="City" id="city-validation"></smart-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Address</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="Address" id="address-validation"></smart-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Phone (optional)</div>
            <div class="field-value">
              <smart-masked-text-box
                class="material"
                hint
                mask="+1 (###) ###-####"
                id="phone-validation"
              ></smart-masked-text-box>
            </div>
          </div>
          <div class="field clear">
            <div class="field-label">Post code (optional)</div>
            <div class="field-value">
              <smart-numeric-text-box
                id="post-code-validation"
                input-format="integer"
                min="0"
                spin-buttons
                spin-buttons-position="right"
                spin-buttons-step="1"
                enable-mouse-wheel-action
              ></smart-numeric-text-box>
            </div>
          </div>
          <div id="check" class="checkbox-validator clear">
            <smart-check-box click-mode="press" id="termsInput">Accept terms</smart-check-box>
            <br />
          </div>
        </div>
        <div class="fieldset">
          <div id="registerButton" class="submit-button">
            <smart-button id="register" type="button" class="success">Register</smart-button>
          </div>
        </div>
      </form>
      <div id="validationsummary"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/modules/smart.validator.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      "use strict";
      let maxDate = new Date();
      maxDate.setFullYear(2025);
      const rules = [
        //Email
        {
          input: "#email-validation",
          message: "E-mail is required",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#email-validation",
          message: "Email is invalid",
          action: "keyup",
          type: "email"
        },
        //Password
        {
          input: "#password-validation",
          message: "Password is required!",
          action: "keyup, blur",
          type: "required"
        },
        //Confirm password
        {
          input: "#confirm-password-validation",
          message: "Confirm Password is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#confirm-password-validation",
          message: "'Password' and 'Confirm Password' do not match.",
          action: "keyup, blur",
          type: "compare",
          comparisonTarget: function() {
            let password = document.querySelector("#password-validation");
            if (password) {
              return password.value;
            }
          }
        },
        //Name
        {
          input: "#name-validation",
          message: "Name is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#name-validation",
          message: "Do not use digits in the Name.",
          action: "keyup, blur",
          type: "pattern",
          pattern: /^[^0-9]+$/
        },
        {
          input: "#name-validation",
          message: "Name must have at least 2 symbols",
          action: "keyup, blur",
          type: "stringLength",
          min: 2
        },
        //Date
        //{ input: '#date-validation', message: 'Date of birth is required', action: 'change', type: 'required' },
        {
          input: "#date-validation",
          message: "You must be at least 21 years old",
          action: "change",
          type: "range",
          max: maxDate
        },
        //Country
        {
          input: "#country-validation",
          message: "Country is required",
          action: "change",
          type: "required"
        },
        //City
        {
          input: "#city-validation",
          message: "City is required",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#city-validation",
          message: "Do not use digits in the City name.",
          action: "keyup, blur",
          type: "pattern",
          pattern: /^[^0-9]+$/
        },
        {
          input: "#city-validation",
          message: "City must have at least 2 symbols",
          action: "keyup, blur",
          type: "stringLength",
          min: 2
        },
        //Address
        {
          input: "#address-validation",
          message: "Address is required",
          action: "keyup, blur",
          type: "required"
        },
        //Phone
        {
          input: "#phone-validation",
          message: "The phone must have a correct USA phone format",
          action: "valuechanged, blur",
          type: "pattern",
          pattern: /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/
        },
        //Post  code
        {
          input: "#post-code-validation",
          message: "The post code must contains only digits",
          action: "change",
          type: "numeric"
        },
        {
          input: "#post-code-validation",
          message: "The post code must have at least 4 symbols",
          action: "change",
          type: "stringLength",
          min: 4
        },
        //Terms
        {
          input: "#termsInput",
          message: "You must agree to the Terms and Conditions",
          action: "change",
          type: "required"
        }
      ];
      //SmartValidator
      const validator = new window.Smart.Utilities.Validator(
        rules,
        "#validationsummary"
      );
      document.querySelector("#register").addEventListener("click", () => {
        validator.validate();
      });
    });
  }
};
</script>

<style>
body,
html {
  height: 1300px;
}

.demo-container {
  max-width: 750px;
  margin-left: 10px;
}

.fieldset {
}

.fieldset-header {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
}

.field {
  margin-left: 10px;
  min-height: 36px;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
}

.field .field-label {
  float: left;
  width: 30%;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
}

.field .field-value {
  width: 70%;
  float: right;
}

.field .field-value > :first-child {
  width: 100%;
}

.fieldset #registerButton :first-child {
  width: 100%;
}

#validationsummary {
  margin-top: 10px;
}

#validationsummary span {
  display: block;
  color: #d9534f;
}

.clear {
  clear: both;
}
</style>
