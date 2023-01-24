<template>
  <div class="vue-root">
    <div class="demo-container">
      <form id="testForm" action="./">
        <div class="fieldset">
          <div class="fieldset-header">Register</div>
          <div class="field">
            <div class="field-label">User name</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="User name" id="userInput"></smart-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Your password</div>
            <div class="field-value">
              <smart-password-text-box
                select-all-on-focus
                placeholder="Your password"
                id="passwordInput"
              ></smart-password-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Confirm password</div>
            <div class="field-value">
              <smart-password-text-box
                select-all-on-focus
                placeholder="Confirm password"
                id="passwordConfirmInput"
              ></smart-password-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Real name</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="Real name" id="realNameInput"></smart-text-box>
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
                id="birthInput"
                spin-buttons
                spin-buttons-position="left"
              ></smart-date-time-picker>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
              <smart-text-box select-all-on-focus placeholder="Email" id="emailInput"></smart-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">SSN</div>
            <div class="field-value">
              <smart-masked-text-box class="material" hint mask="###-##-####" id="ssnInput"></smart-masked-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Phone number</div>
            <div class="field-value">
              <smart-masked-text-box class="material" hint mask="(###)###-####" id="phoneInput"></smart-masked-text-box>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Zip code</div>
            <div class="field-value">
              <smart-masked-text-box class="material" hint mask="#####-####" id="zipInput"></smart-masked-text-box>
            </div>
          </div>
        </div>
        <div class="fieldset">
          <div class="field-label">Choose gender</div>
          <div class="field-value genderRadioHolder">
            <smart-radio-button
              id="maleRadioButton"
              name="genderRadioGroup"
              value="male"
              class="genderRadio"
            >Male</smart-radio-button>
            <smart-radio-button
              id="femaleRadioButton"
              name="genderRadioGroup"
              value="female"
              class="genderRadio"
            >Female</smart-radio-button>
            <smart-radio-button
              id="otherRadioButton"
              name="genderRadioGroup"
              value="alien"
              class="genderRadio"
            >Alien</smart-radio-button>
          </div>
        </div>
        <div id="check" class="checkbox-validator">
          <smart-check-box click-mode="press" id="terms">Accept terms</smart-check-box>
          <br />
        </div>
        <div class="fieldset">
          <div id="registerButton" class="submit-button">
            <smart-button id="submitFormButton" type="button" class="success">Send</smart-button>
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
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/modules/smart.validator.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      "use strict";
      // initialize validator.
      const rules = [
        {
          input: "#userInput",
          message: "Username is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#userInput",
          message: "Your username must be between 3 and 12 characters!",
          action: "keyup, blur",
          type: "stringLength",
          min: 3,
          max: 12
        },
        {
          input: "#passwordInput",
          message: "Password is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#passwordInput",
          message: "Your password must be between 4 and 12 characters!",
          action: "keyup, blur",
          type: "stringLength",
          min: 4,
          max: 12
        },
        {
          input: "#passwordConfirmInput",
          message: "Confirm Password is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#passwordConfirmInput",
          message: "Passwords doesn't match!",
          action: "keyup, focus",
          type: "custom",
          validationCallback: function(input) {
            if (
              input.value === document.querySelector("#passwordInput").value
            ) {
              return true;
            }
            return false;
          }
        },
        {
          input: "#realNameInput",
          message: "Real Name is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#realNameInput",
          message: "Your real name must contain only letters!",
          action: "keyup",
          type: "pattern",
          pattern: /^[^0-9]+$/
        },
        {
          input: "#realNameInput",
          message: "Your real name must be between 3 and 12 characters!",
          action: "keyup",
          type: "stringLength",
          min: 3,
          max: 12
        },
        {
          input: "#birthInput",
          message: "Your birth date must be between 1/1/1900 and 1/1/2025.",
          action: "change",
          type: "custom",
          validationCallback: function() {
            var date = document.querySelector("#birthInput").value;
            var result = date.year() >= 1900 && date.year() <= 2025;
            return result;
          }
        },
        {
          input: "#emailInput",
          message: "E-mail is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#emailInput",
          message: "Invalid e-mail!",
          action: "keyup",
          type: "email"
        },
        {
          input: "#ssnInput",
          message: "Invalid SSN!",
          action: "valuechanged, blur",
          type: "pattern",
          pattern: /\d{3}-\d{2}-\d{4}/
        },
        {
          input: "#phoneInput",
          message: "Invalid phone number!",
          action: "valuechanged, blur",
          type: "phone"
        },
        {
          input: "#zipInput",
          message: "Invalid zip code!",
          action: "valuechanged, blur",
          type: "zipCode"
        },
        {
          input: ".genderRadio",
          message: "You must select your gender",
          action: "change",
          type: "required"
        },
        {
          input: ".genderRadio",
          message: "Please choose Male or Female",
          action: "change",
          type: "custom",
          validationCallback: function(event) {
            const target = event.target || event;
            //change event
            if (target.value) {
              return target.value !== "alien";
            }
            //form submit
            let checkboxes = document.querySelectorAll(".genderRadio");
            let result = true;
            if (checkboxes && checkboxes.length > 1) {
              for (let i = 0; i < checkboxes.length; i++) {
                let checkbox = checkboxes[i];
                if (checkbox.checked && checkbox.value === "alien") {
                  result = false;
                }
              }
            }
            return result;
          }
        },
        {
          input: "#terms",
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
      document
        .querySelector("#submitFormButton")
        .addEventListener("click", () => {
          validator.validate();
        });
    });
  }
};
</script>

<style>
.demo-container {
  max-width: 750px;
  margin-left: 10px;
}

.fieldset {
  font-family: "Helvetica Neue", "Segoe UI", Helvetica, Verdana, sans-serif;
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

.field .field-value > :first-child:not(.error-holder) {
  width: 100%;
}

.checkbox-validator {
  margin-top: 10px;
}

.fieldset #submitFormButton {
  width: 100%;
}

.fieldset #attachFormButton {
  width: 48%;
  float: left;
}

.fieldset #resetFormButton {
  width: 48%;
  float: right;
}

.fieldset #detachFormButton {
  width: 48%;
  float: right;
}

.buttons-container {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

#validationsummary {
  clear: both;
  padding-top: 10px;
}

#validationsummary span {
  display: block;
  color: #d9534f;
}
</style>
