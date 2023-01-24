<template>
  <div class="vue-root">
    <h3>Gauge with analogDisplayType: 'needle'</h3>
    <div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="needle"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="10"
          scale-position="outside"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="needle"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="20"
          scale-position="inside"
        ></smart-gauge>
      </div>
    </div>
    <br style="clear: both;" />
    <h3>Gauge with analogDisplayType: 'fill'</h3>
    <div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="fill"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="30"
          scale-position="outside"
          ticks-position="scale"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="fill"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="40"
          scale-position="inside"
          ticks-position="scale"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="fill"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="50"
          scale-position="inside"
          ticks-position="track"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="fill"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="60"
          scale-position="outside"
          ticks-position="track"
        ></smart-gauge>
      </div>
    </div>
    <br style="clear: both;" />
    <h3>Gauge with analogDisplayType: 'line'</h3>
    <div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="line"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="70"
          scale-position="outside"
          ticks-position="scale"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="line"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="60"
          scale-position="inside"
          ticks-position="scale"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="line"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="50"
          scale-position="inside"
          ticks-position="track"
        ></smart-gauge>
      </div>
      <div class="gauge-container">
        <smart-gauge
          digital-display
          analog-display-type="line"
          start-angle="-30"
          min="0"
          max="100"
          end-angle="210"
          value="40"
          scale-position="outside"
          ticks-position="track"
        ></smart-gauge>
      </div>
    </div>
    <div class="options">
      <div class="option">
        <div class="caption">Labels</div>
        <smart-radio-button id="all" name="labelsVisibility" checked>
          <label for="all">All</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="endPoints" name="labelsVisibility">
          <label for="endPoints">Endpoints</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="none" name="labelsVisibility">
          <label for="none">None</label>
        </smart-radio-button>
        <br />
      </div>
      <hr />
      <div class="option">
        <div class="caption">Tick Marks</div>
        <smart-radio-button id="major" name="ticksVisibility">
          <label for="major">Major</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="minor" name="ticksVisibility" checked>
          <label for="minor">Minor</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="noTicks" name="ticksVisibility">
          <label for="noTicks">None</label>
        </smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gauges = [].slice.call(
        document.getElementsByTagName("smart-gauge")
      );
      // labels
      document.getElementById("all").addEventListener("change", function() {
        gauges.map(function(g) {
          g.labelsVisibility = "all";
        });
      });
      document
        .getElementById("endPoints")
        .addEventListener("change", function() {
          gauges.map(function(g) {
            g.labelsVisibility = "endPoints";
          });
        });
      document.getElementById("none").addEventListener("change", function() {
        gauges.map(function(g) {
          g.labelsVisibility = "none";
        });
      });
      // ticks
      document.getElementById("major").addEventListener("change", function() {
        gauges.map(function(g) {
          g.ticksVisibility = "major";
        });
      });
      document.getElementById("minor").addEventListener("change", function() {
        gauges.map(function(g) {
          g.ticksVisibility = "minor";
        });
      });
      document.getElementById("noTicks").addEventListener("change", function() {
        gauges.map(function(g) {
          g.ticksVisibility = "none";
        });
      });
    });
  }
};
</script>

<style>
smart-gauge {
  width: 250px;
}
</style>
