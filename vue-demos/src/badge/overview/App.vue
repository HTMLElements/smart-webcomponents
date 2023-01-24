<template>
  <div class="vue-root">
    <div id="container" class="module">
      <br />
      <p>Badges may be used to put label or count next to a component.</p>
      <h1>
        Example heading
        <span class="smart-badge smart-badge-dark">New</span>
      </h1>
      <h2>
        Example heading
        <span class="smart-badge smart-badge-dark">New</span>
      </h2>
      <h3>
        Example heading
        <span class="smart-badge smart-badge-dark">New</span>
      </h3>
      <h4>
        Example heading
        <span class="smart-badge smart-badge-dark">New</span>
      </h4>
      <h5>
        Example heading
        <span class="smart-badge smart-badge-dark">New</span>
      </h5>
      <h6>
        Example heading
        <span class="smart-badge smart-badge-dark">New</span>
      </h6>
      <h1>Contextual</h1>
      <span class="smart-badge smart-badge-light">Default</span>
      <span class="smart-badge smart-badge-dark">Primary</span>
      <span class="smart-badge smart-badge-info">Success</span>
      <span class="smart-badge smart-badge-success">Info</span>
      <span class="smart-badge smart-badge-warning">Warning</span>
      <span class="smart-badge smart-badge-danger">Danger</span>
      <h1>Pills</h1>
      <span class="smart-badge smart-badge-light smart-badge-pill">Light</span>
      <span class="smart-badge smart-badge-dark smart-badge-pill">Dark</span>
      <span class="smart-badge smart-badge-info smart-badge-pill">Info</span>
      <span class="smart-badge smart-badge-success smart-badge-pill">Success</span>
      <span class="smart-badge smart-badge-warning smart-badge-pill">Warning</span>
      <span class="smart-badge smart-badge-danger smart-badge-pill">Danger</span>
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
#container h1 {
  display: block;
  font-size: 2em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
  position: static;
}
#container h2 {
  display: block;
  font-size: 1.5em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
#container h3 {
  display: block;
  font-size: 1.17em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
#container h4 {
  display: block;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
#container h5 {
  display: block;
  font-size: 0.83em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
#container h6 {
  display: block;
  font-size: 0.67em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
</style>
