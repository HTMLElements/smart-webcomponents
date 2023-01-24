<template>
  <div class="vue-root">
    <smart-splitter id="splitter" live-resize>
      <smart-splitter-item id="item0">
        <p>
          The tiger (Panthera tigris) is the largest cat species, most recognizable
          for its pattern of dark vertical stripes on reddish-orange fur with a lighter
          underside.
        </p>
      </smart-splitter-item>
      <smart-splitter-item id="item1">
        <h2>BENGAL TIGER</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
        />
        <p>
          The Bengal tiger's coat is yellow to light orange, with stripes ranging
          from dark brown to black; the belly and the interior parts of the limbs
          are white, and the tail is orange with black rings.
        </p>
        <p>
          Males have an average total length of 270 to 310 cm (110 to 120 in) including
          the tail, while females measure 240 to 265 cm (94 to 104 in) on average.
          The tail is typically 85 to 110 cm
        </p>
      </smart-splitter-item>
    </smart-splitter>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-splitter {
  width: 800px;
  max-width: 100%;
  height: auto;
}

smart-splitter-item > .smart-container {
  padding: 10px;
}

smart-splitter smart-splitter-item {
  border: lightgray solid 1px;
  background-color: white;
}

#item0 {
  width: 200px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
