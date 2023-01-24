<template>
  <div class="vue-root">
    <div class="demo-container">
      <form action="./">
        <label>Register</label>
        <br />
        <br />
        <div class="input-holder">
          <input placeholder="Username" type="text" id="userInput" class="smart-input" />
          <br />
          <br />
          <input
            placeholder="Password, Try: 123"
            type="password"
            id="accessPassword"
            class="smart-input"
          />
          <br />
          <br />
          <input placeholder="Age" type="text" id="ageInput" class="smart-input" />
          <br />
          <br />
          <input placeholder="Even number" type="text" id="evenInput" class="smart-input" />
          <br />
          <br />
          <input placeholder="1 + 1 = ?" type="text" id="calcInput" class="smart-input" />
          <br />
          <br />
          <input type="checkbox" id="terms" />
          <label for="terms">Terms!</label>
          <br />
          <br />
          <label>Choose gender:</label>
          <br />
          <input
            type="radio"
            name="genderRadioGroup"
            id="maleRadio"
            value="male"
            class="genderRadio"
          />
          <label for="maleRadio">Male</label>
          <br />
          <input
            type="radio"
            name="genderRadioGroup"
            id="femaleRadio"
            value="female"
            class="genderRadio"
          />
          <label for="femaleRadio">Female</label>
          <br />
          <input
            type="radio"
            name="genderRadioGroup"
            id="alienRadio"
            value="alien"
            class="genderRadio"
          />
          <label for="alienRadio">Alien</label>
          <br />
          <br />
          <input type="button" value="Send" id="register" class="button-input smart-button" />
          <input type="button" value="Reset" id="reset" class="button-input smart-button" />
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
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.validator.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      "use strict";
      let maxDate = new Date();
      maxDate.setFullYear(2025);
      // Even number
      function validationCallbackEvenNum(e) {
        return e.value % 2 === 0;
      }
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
          input: "#accessPassword",
          message: "Password field is required",
          action: "keyup",
          type: "required"
        },
        {
          input: "#accessPassword",
          message: "Your password must be between at least 3 characters!",
          action: "keyup, blur",
          type: "stringLength",
          min: 3
        },
        {
          input: "#accessPassword",
          message: "Your password is too weak",
          action: "keyup",
          type: "compare",
          comparisonTarget: function() {
            return "123";
          },
          comparisonType: "!=="
        },
        {
          input: "#ageInput",
          message: "Age field is required!",
          action: "keyup, blur",
          type: "required"
        },
        {
          input: "#ageInput",
          message: "The age field must contains only digits",
          action: "keyup, blur",
          type: "numeric"
        },
        {
          input: "#ageInput",
          message: "You are not between 10 and 20 years old",
          action: "keyup, blur",
          type: "compare",
          comparisonTarget: function() {
            return "10";
          },
          comparisonType: ">="
        },
        {
          input: "#ageInput",
          message: "You are not between 10 and 20 years old",
          action: "keyup, blur",
          type: "compare",
          comparisonTarget: function() {
            return "20";
          },
          comparisonType: "<="
        },
        {
          input: "#evenInput",
          message: "Please enter an even one.",
          action: "keyup, blur",
          type: "custom",
          validationCallback: validationCallbackEvenNum
        },
        {
          input: "#evenInput",
          message: "The even number must be between 20 and 50",
          action: "keyup, blur",
          type: "range",
          min: 20,
          max: 50
        },
        {
          input: "#calcInput",
          action: "keyup, blur",
          type: "compare",
          comparisonTarget: function() {
            return "2";
          },
          comparisonType: "===",
          message: "Try again!"
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
          validationCallback: function() {
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
          action: "change",
          type: "required",
          message: "You must agree to the Terms and Conditions"
        }
      ];
      const validator = new window.Smart.Utilities.Validator(
        rules,
        "#validationsummary"
      );
      document.querySelector("#register").addEventListener("click", () => {
        validator.validate();
      });
      document.querySelector("#reset").addEventListener("click", () => {
        validator.reset();
      });
    });
  }
};
</script>

<style>
h3 {
  display: inline-block;
  margin: 0px;
}

.text-input {
  height: 30px;
  width: 250px;
}

.button-input {
  width: 60px;
  height: 28px;
}

.input-holder {
  margin-left: 10px;
}

#validationsummary {
  margin-top: 10px;
}

#validationsummary span {
  display: block;
  color: #d9534f;
}
</style>
