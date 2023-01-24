<template>
  <div class="vue-root">
    <smart-card class="basic-card">
      <div class="card-content">
        <span class="card-title">Card Title</span>
        <p>
          I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.
        </p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </smart-card>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.card.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

smart-card.basic-card .card-content,
smart-card.basic-card .card-action {
  box-sizing: border-box;
  padding: 20px;
  color: white;
  background-color: #546e7a;
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  border-radius: 2px 2px 2px 2px;
}

smart-card.basic-card .card-title {
  font-size: 18px;
}

smart-card.basic-card a {
  color: #ffab40;
  transition: color 0.3s ease;
  text-transform: uppercase;
  border-bottom: none;
  text-decoration: none;
  margin-right: 20px;
}

smart-card.basic-card a:hover {
  color: #ffd8a6;
}
</style>
