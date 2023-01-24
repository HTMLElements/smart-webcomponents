<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Masked Text fields use a mask to distinguish between proper and improper user input.</h2>
          <div class="module">
            <p>
              Masked Text fields typically reside in forms but can appear in other places,
              like dialog boxes and search.
            </p>
          </div>
        </div>
      </section>
      <section id="masked-text-box-layout">
        <div>
          <div class="module">
            <p></p>
          </div>
          <div class="module">
            <div class="light-theme">
              <smart-masked-text-box hint="Idle & empty" mask="###-###-##-##"></smart-masked-text-box>
              <br />
              <label>Idle & empty</label>
              <br />
              <br />
              <smart-masked-text-box hint="Press" mask="###-###-##-##" placeholder="Placeholder"></smart-masked-text-box>
              <br />
              <label>Placeholder</label>
              <br />
              <br />
              <smart-masked-text-box hint="Focus" mask="###-###-##-##" auto-show-mask></smart-masked-text-box>
              <br />
              <label>Auto-show mask</label>
              <br />
              <br />
              <smart-masked-text-box hint="Disabled" mask="###-###-##-##" disabled></smart-masked-text-box>
              <br />
              <label>Disabled</label>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div>
          <div class="module">
            <p>
              Input text can be grouped in different ways, with special characters added
              in appropriate places, such as hyphens added to a phone number. Once the
              first special character is reached, the cursor automatically jumps to the
              next group.
            </p>
          </div>
          <div class="module">
            <div class="light-theme">
              <smart-masked-text-box hint value="6503036565" mask="(###) ### - ####"></smart-masked-text-box>
            </div>
            <p>Input text grouped and formatted for a phone number</p>
          </div>
          <div class="module">
            <div class="light-theme">
              <smart-masked-text-box hint value="4147968713856921" mask="#### - #### - #### - ####"></smart-masked-text-box>
            </div>
            <p>Input text grouped and formatted for a credit card number</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // Your code here
    });
  }
};
</script>

<style>
</style>
