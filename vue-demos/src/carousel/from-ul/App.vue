<template>
  <div class="vue-root">
    <smart-carousel loop class="slide">
      <ul>
        <li>
          <h2>Slide 1</h2>
          <p>Pellentesque in est aliquet.</p>
          <p>Pellentesque in est aliquet, fringilla lorem a...</p>
        </li>
        <li>
          <h2>Slide 2</h2>
          <p>Pellentesque in est aliquet, fringilla lorem a.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </li>
        <li>
          <h2>Slide 3</h2>
          <p>Nulla facilisi. Sed dictum justo sit amet ligula cursus.</p>
          <p>Pellentesque in est aliquet, fringilla lorem a...</p>
        </li>
      </ul>
    </smart-carousel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.carousel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
h2 {
  margin-top: 40px;
}

h2,
p {
  text-align: center;
}
</style>
