<template>
  <div class="vue-root">
    <label>Custom Filering:</label>
    <br />
    <pre>Filtering by Value. Ex: BG, US, UK, BR, TR</pre>
    <smart-list-box grouped filterable filter-mode="custom">
      <smart-list-item value="AF">Afghanistan</smart-list-item>
      <smart-list-item selected value="AL">Albania</smart-list-item>
      <smart-list-item value="DZ">Algeria</smart-list-item>
      <smart-list-item value="AS">American Samoa</smart-list-item>
      <smart-list-item value="AD">Andorra</smart-list-item>
      <smart-list-item value="AO">Angola</smart-list-item>
      <smart-list-item value="AI">Anguilla</smart-list-item>
      <smart-list-item value="AQ">Antarctica</smart-list-item>
      <smart-list-item value="AG">Antigua and Barbuda</smart-list-item>
      <smart-list-item value="AR">Argentina</smart-list-item>
      <smart-list-item value="AM">Armenia</smart-list-item>
      <smart-list-item value="AW">Aruba</smart-list-item>
      <smart-list-item value="AU">Australia</smart-list-item>
      <smart-list-item value="AT">Austria</smart-list-item>
      <smart-list-item value="AZ">Azerbaijan</smart-list-item>
      <smart-list-item value="BS">Bahamas</smart-list-item>
      <smart-list-item value="BH">Bahrain</smart-list-item>
      <smart-list-item value="BD">Bangladesh</smart-list-item>
      <smart-list-item value="BB">Barbados</smart-list-item>
      <smart-list-item value="BY">Belarus</smart-list-item>
      <smart-list-item value="BE">Belgium</smart-list-item>
      <smart-list-item value="BZ">Belize</smart-list-item>
      <smart-list-item value="BJ">Benin</smart-list-item>
      <smart-list-item value="BM">Bermuda</smart-list-item>
      <smart-list-item value="BT">Bhutan</smart-list-item>
      <smart-list-item value="BO">Bolivia</smart-list-item>
      <smart-list-item value="BA">Bosnia and Herzegovina</smart-list-item>
      <smart-list-item value="BW">Botswana</smart-list-item>
      <smart-list-item value="BV">Bouvet Island</smart-list-item>
      <smart-list-item value="BR">Brazil</smart-list-item>
      <smart-list-item value="IO">British Indian Ocean Territory</smart-list-item>
      <smart-list-item value="BN">Brunei Darussalam</smart-list-item>
      <smart-list-item value="BG">Bulgaria</smart-list-item>
      <smart-list-item value="CU">Cuba</smart-list-item>
      <smart-list-item value="TR">Turkey</smart-list-item>
      <smart-list-item value="UG">Uganda</smart-list-item>
      <smart-list-item value="UA">Ukraine</smart-list-item>
      <smart-list-item value="AE Arab Emirates">United Arab Emirates</smart-list-item>
      <smart-list-item value="UK">United Kingdom</smart-list-item>
      <smart-list-item value="US">United States</smart-list-item>
    </smart-list-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.querySelector("smart-list-box").filterCallback = function(
        item,
        searchQuery
      ) {
        return item.value.toLowerCase() === searchQuery.toLowerCase();
      };
    });
  }
};
</script>

<style>
smart-list-box {
  width: 300px;
  height: 500px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
</style>
