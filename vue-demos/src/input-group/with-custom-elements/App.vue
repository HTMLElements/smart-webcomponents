<template>
  <div class="vue-root">
    <h3>With smart-input</h3>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <smart-input class="form-control" placeholder="Username"></smart-input>
    </div>
    <div class="input-group">
      <smart-input
        class="form-control"
        data-source="['oliver', 'george', 'harry', 'jack', 'jacob', 'noah', 'charlie']"
        placeholder="Recipient's username"
      ></smart-input>
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>
    <label for="basic-url">Your vanity URL</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
      </div>
      <smart-input
        class="form-control"
        data-source="['oliver', 'george', 'harry', 'jack', 'jacob', 'noah', 'charlie']"
        placeholder="Recipient's username"
      ></smart-input>
    </div>
    <h3>With smart-button</h3>
    <div class="input-group">
      <div class="input-group-prepend">
        <smart-button type="button">Button</smart-button>
      </div>
      <smart-input class="form-control"></smart-input>
    </div>
    <div class="input-group">
      <smart-input class="form-control" placeholder="Recipient's username"></smart-input>
      <div class="input-group-append">
        <smart-button type="button">Button</smart-button>
      </div>
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <smart-button type="button">Button</smart-button>
        <smart-button type="button">Button</smart-button>
      </div>
      <smart-input class="form-control"></smart-input>
    </div>
    <div class="input-group">
      <smart-input class="form-control" placeholder="Recipient's username"></smart-input>
      <div class="input-group-append">
        <smart-button type="button">Button</smart-button>
        <smart-button type="button">Button</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.input.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
body {
  font-family: var(--smart-font-family);
}

.input-group {
  margin-bottom: 15px;
  width: 800px;
}
</style>
