<template>
  <div class="vue-root">
    <smart-tabs class="demoTabs" tab-position="top">
      <smart-tab-items-group label="Tiger">
        <smart-tab-item label="Bengal tiger">
          <div class="demoContainer tabsContent">
            The Bengal tiger (
            <em>Panthera tigris tigris</em>) is the most numerous
            tiger. By 2011, the total population was estimated at fewer than 2,500
            individuals with a decreasing trend.
          </div>
          <div class="demoContainer tabsContent">
            <img
              class="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
            />
          </div>
        </smart-tab-item>
        <smart-tab-item label="Indochinese tiger">
          <div class="demoContainer tabsContent">
            The Indochinese tiger (
            <em>Panthera tigris corbetti</em>) is a tiger subspecies
            occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern
            China.
          </div>
          <div class="demoContainer tabsContent">
            <img
              class="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/220px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg"
            />
          </div>
        </smart-tab-item>
      </smart-tab-items-group>
      <smart-tab-item label="Snow leopard">
        <div class="demoContainer tabsContent">
          The snow leopard or ounce (
          <em>Panthera uncia</em> syn.
          <em>Uncia uncia</em>)
          is a large cat native to the mountain ranges of Central and South Asia.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lightmatter_snowleopard.jpg/220px-Lightmatter_snowleopard.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-items-group label="Lion">
        <smart-tab-item label="Asiatic lion">
          <div class="demoContainer tabsContent">
            The Asiatic lion (
            <em>Panthera leo persica</em>), also known as the Indian
            lion and Persian lion, is a lion subspecies that lives as a single population
            in Gujarat, India. It is listed as Endangered on the IUCN Red List because
            of its small population size.
          </div>
          <div class="demoContainer tabsContent">
            <img
              class="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Adult_Asiatic_Lion.jpg/220px-Adult_Asiatic_Lion.jpg"
            />
          </div>
        </smart-tab-item>
        <smart-tab-item label="West African lion" selected>
          <div class="demoContainer tabsContent">
            The West African lion (
            <em>Panthera leo senegalensis</em>), also called
            Senegal lion, was considered a lion subspecies native to Central and Western
            Africa.
          </div>
          <div class="demoContainer tabsContent">
            <img
              class="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lionne_du_Cameroun.JPG/220px-Lionne_du_Cameroun.JPG"
            />
          </div>
        </smart-tab-item>
      </smart-tab-items-group>
      <smart-tab-item label="Cheetah">
        <div class="demoContainer tabsContent">
          The cheetah (
          <em>Acinonyx jubatus</em>) is a large felid of the subfamily
          Felinae. Cheetahs are active mainly during the day, with hunting their
          major activity.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/220px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg"
          />
        </div>
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
    onMounted(() => {});
  }
};
</script>

<style>
smart-tabs {
  width: 100%;
  height: 250px;
}
@media only screen and (max-width: 600px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
