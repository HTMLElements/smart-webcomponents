<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.NumberInput</b> is an input that allows you to easily enter and
        format numbers. It uses the Intl.NumberFormat API for formatting the numbers.
      </p>
    </div>
    <h2>Styling and Appearance</h2>
    <h3>Default "1000"</h3>
    <smart-number-input placeholder="Please Enter a Number"></smart-number-input>
    <h3>Underlined</h3>
    <smart-number-input class="underlined" placeholder="Please Enter a Number"></smart-number-input>
    <h3>Outlined</h3>
    <smart-number-input class="outlined" placeholder="Please Enter a Number"></smart-number-input>
    <h2>Number Formats</h2>
    <h3>Number "1000.42"</h3>
    <smart-number-input value="1000.42" id="numericInput" placeholder="Please Enter a Number"></smart-number-input>
    <h4>Currency "$1000.42"</h4>
    <smart-number-input value="1000.42" id="currencyInput" placeholder="Please Enter a Currency"></smart-number-input>
    <h4>Accounting "($1000.42)"</h4>
    <smart-number-input value="-1000.42" id="accountingInput" placeholder="Please Enter a Currency"></smart-number-input>
    <h4>Currency Localized "1000,42 EUR"</h4>
    <smart-number-input
      value="1000.42"
      id="currencyInputLocalized"
      placeholder="Please Enter a Currency"
    ></smart-number-input>
    <h4>Percent "10%"</h4>
    <smart-number-input value="10" id="percentInput" placeholder="Please Enter a Percent"></smart-number-input>
    <h4>Custom "10 litres"</h4>
    <smart-number-input value="10" id="customInput" placeholder="Please Enter litres"></smart-number-input>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.numberinput.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.getElementById("accountingInput").min = -9999;

      window.numericInput.numberFormat = {
        minimumFractionDigits: 2
      };
      window.currencyInput.numberFormat = {
        style: "currency",
        currency: "USD"
      };
      window.currencyInputLocalized.numberFormat = {
        style: "currency",
        currency: "EUR"
      };
      window.currencyInputLocalized.locale = "de";
      window.accountingInput.numberFormat = {
        style: "currency",
        currency: "USD",
        currencySign: "accounting"
      };
      window.percentInput.numberFormat = {
        style: "percent"
      };
      window.customInput.numberFormat = {
        style: "unit",
        unit: "liter",
        unitDisplay: "long"
      };
    });
  }
};
</script>

<style>
</style>
