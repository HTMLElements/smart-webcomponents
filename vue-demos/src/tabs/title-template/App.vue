<template>
  <div class="vue-root">
    <smart-tabs id="tabs">
      <smart-tab-item label="template1">The Sun is the star at the center of the Solar System.</smart-tab-item>
      <smart-tab-item label="template2" selected>
        Earth is the third planet from the Sun and the only object in the Universe
        known to harbor life.
      </smart-tab-item>
      <smart-tab-item label="template3">
        The Moon is an astronomical body that orbits planet Earth, being Earth's
        only permanent natural satellite.
      </smart-tab-item>
      <smart-tab-item label="template4">
        Mars is the fourth planet from the Sun and the second-smallest planet
        in the Solar System, after Mercury.
      </smart-tab-item>
    </smart-tabs>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const template1 = document.createElement("template");
      template1.id = "template1";
      template1.innerHTML = `<img src="../../../images/sun.png" />Sun`;
      document.body.appendChild(template1);

      const template2 = document.createElement("template");
      template2.id = "template2";
      template2.innerHTML = `<img src="../../../images/earth.png" />Earth`;
      document.body.appendChild(template2);

      const template3 = document.createElement("template");
      template3.id = "template3";
      template3.innerHTML = `<img src="../../../images/moon.png" />Moon`;
      document.body.appendChild(template3);

      const template4 = document.createElement("template");
      template4.id = "template4";
      template4.innerHTML = `<img src="../../../images/mars.png" />Mars`;
      document.body.appendChild(template4);
    });
  }
};
</script>

<style>
smart-tabs {
  width: 100%;
  height: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tabs {
    width: 100%;
  }
}

smart-tabs .smart-tab-label-text-container {
  display: flex;
  align-items: center;
}
</style>
