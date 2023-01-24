<template>
  <div class="vue-root">
    <h3>Basic example</h3>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" />
    </div>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Recipient's username" />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>
    <label for="basic-url">Your vanity URL</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
      </div>
      <input type="text" class="form-control" id="basic-url" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
      </div>
      <input type="text" class="form-control" />
      <div class="input-group-append">
        <span class="input-group-text">.00</span>
      </div>
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">With textarea</span>
      </div>
      <textarea class="form-control"></textarea>
    </div>
    <h3>Multiple inputs</h3>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id>First and last name</span>
      </div>
      <input type="text" class="form-control" />
      <input type="text" class="form-control" />
    </div>
    <h3>Multiple addons</h3>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
        <span class="input-group-text">0.00</span>
      </div>
      <input type="text" class="form-control" />
    </div>
    <div class="input-group">
      <input type="text" class="form-control" />
      <div class="input-group-append">
        <span class="input-group-text">$</span>
        <span class="input-group-text">0.00</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";

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

textarea {
  resize: vertical;
}
</style>
