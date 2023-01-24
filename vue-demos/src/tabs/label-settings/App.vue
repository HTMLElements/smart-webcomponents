<template>
  <div class="vue-root">
    <smart-tabs
      id="tabs"
      class="demoTabs"
      selected-index="3"
      tab-position="left"
      selectionMode="click"
      tab-text-orientation="vertical"
    >
      <smart-tab-item label="New York">
        <div id="map-canvas-0"></div>
      </smart-tab-item>
      <smart-tab-item label="Hong Kong">
        <div id="map-canvas-1"></div>
      </smart-tab-item>
      <smart-tab-item label="Troyan">
        <div id="map-canvas-2"></div>
      </smart-tab-item>
      <smart-tab-item label="Bali">
        <div id="map-canvas-3"></div>
      </smart-tab-item>
    </smart-tabs>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <p>Tab position</p>
        <smart-radio-button id="top" group-name="tabPosition">top</smart-radio-button>
        <br />
        <smart-radio-button id="bottom" group-name="tabPosition">bottom</smart-radio-button>
        <br />
        <smart-radio-button id="left" group-name="tabPosition" checked>left</smart-radio-button>
        <br />
        <smart-radio-button id="right" group-name="tabPosition">right</smart-radio-button>
      </div>
      <div class="option">
        <p>Tab text orientation</p>
        <smart-radio-button id="horizontal" group-name="tabTextOrientation">horizontal</smart-radio-button>
        <br />
        <smart-radio-button id="vertical" group-name="tabTextOrientation" checked>vertical</smart-radio-button>
      </div>
      <div class="option">
        <p>Selection mode</p>
        <smart-radio-button id="click" group-name="selectionMode" checked>click</smart-radio-button>
        <br />
        <smart-radio-button id="dblclick" group-name="selectionMode">dblclick</smart-radio-button>
        <br />
        <smart-radio-button id="mouseenter" group-name="selectionMode">mouseenter</smart-radio-button>
        <br />
        <smart-radio-button id="none" group-name="selectionMode">none</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.initializeMaps = function() {
        new window.google.maps.Map(document.getElementById("map-canvas-3"), {
          center: new window.google.maps.LatLng(-10.516768, 119.680272),
          zoom: 8,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP
        });
      };

      const tabs = document.getElementById("tabs"),
        script = document.createElement("script"),
        initialized = [false, false, false, true],
        mapCoordinates = [
          {
            lat: 40.7590403,
            long: -74.0392705
          },
          {
            lat: 22.257983,
            long: 114.1696828
          },
          {
            lat: 42.8863169,
            long: 24.7089964
          }
        ];
      tabs.addEventListener("change", function(event) {
        const index = event.detail.index;
        if (!initialized[index]) {
          new window.google.maps.Map(
            document.getElementById("map-canvas-" + index),
            {
              center: new window.google.maps.LatLng(
                mapCoordinates[index].lat,
                mapCoordinates[index].long
              ),
              zoom: 10,
              mapTypeId: window.google.maps.MapTypeId.ROADMAP
            }
          );
          initialized[index] = true;
        }
      });
      [].slice
        .call(document.querySelectorAll("smart-radio-button"))
        .map(function(button) {
          button.addEventListener("change", function(event) {
            const target = event.target;
            tabs[target.groupName] = target.id;
          });
        });
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=initializeMaps";
      document.body.appendChild(script);
    });
  }
};
</script>

<style>
#map-canvas-0,
#map-canvas-1,
#map-canvas-2,
#map-canvas-3 {
  width: 100%;
  height: 100%;
}
smart-tabs {
  width: 60%;
}
@media only screen and (max-width: 600px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
