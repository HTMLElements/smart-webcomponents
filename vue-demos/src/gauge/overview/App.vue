<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <div id="materialGaugeContainer">
        <section id="overview">
          <div>
            <h2>A gauge is a circular (or semi-circular) numeric control used to display or select a value from a range.</h2>
          </div>
        </section>
        <nav>
          <h2>Contents</h2>
          <ul>
            <li>
              <a href="#gauge-continuous">Continuous gauge</a>
            </li>
            <li>
              <a href="#gauge-discrete">Discrete gauge</a>
            </li>
            <li>
              <a href="#gauge-scales">Gauge scales</a>
            </li>
            <li>
              <a href="#gauge-angles">Gauge angles</a>
            </li>
            <li>
              <a href="#gauge-demo">Demo</a>
            </li>
          </ul>
        </nav>
        <section id="gauge-continuous">
          <h2>Continuous gauge</h2>
          <div class="module">
            <p>
              Use continuous gauges for subjective settings that do not require a specific
              value for the user to make meaningful adjustments.
            </p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="none"
                ticks-visibility="none"
                digital-display
                start-angle="-30"
                end-angle="210"
                min="0"
                max="100"
                value="50"
                precision-digits="2"
              ></smart-gauge>
            </div>
            <br />
          </div>
          <div class="module"></div>
        </section>
        <section id="gauge-discrete">
          <h2>Discrete gauge</h2>
          <div class="module">
            <p>
              The discrete gauge's value indicator snaps to evenly spaced tick marks
              along the gauge. Use for objective settings that require specific values
              for the user to make meaningful adjustments. Each tick mark should change
              the setting to a level that’s discernible to the user. The values are predetermined
              and aren’t user-editable.
            </p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="none"
                ticks-visibility="major"
                ticks-position="track"
                digital-display
                start-angle="-30"
                end-angle="210"
                min="0"
                max="100"
                value="10"
                precision-digits="0"
                coerce
                interval="10"
              ></smart-gauge>
            </div>
          </div>
          <div class="module"></div>
        </section>
        <section id="gauge-scales">
          <h2>Gauge scales</h2>
          <div class="module">
            <p>
              Gauges can have scales with ticks and labels on either side of the track
              or on it.
            </p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="all"
                ticks-visibility="minor"
                ticks-position="scale"
                scale-position="inside"
                digital-display
                start-angle="-30"
                end-angle="210"
                min="0"
                max="100"
                value="10"
                precision-digits="0"
              ></smart-gauge>
            </div>
            <p>Continuous gauge with scale positioned inside</p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="all"
                ticks-visibility="minor"
                ticks-position="scale"
                scale-position="outside"
                digital-display
                start-angle="-30"
                end-angle="210"
                min="0"
                max="100"
                value="20"
                precision-digits="0"
              ></smart-gauge>
            </div>
            <p>Continuous gauge with scale positioned outside</p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="all"
                ticks-visibility="minor"
                ticks-position="track"
                scale-position="outside"
                digital-display
                start-angle="-30"
                end-angle="210"
                min="0"
                max="100"
                value="30"
                precision-digits="0"
              ></smart-gauge>
            </div>
            <p>Continuous gauge with label positioned outside and ticks on track</p>
          </div>
        </section>
        <section id="gauge-angles">
          <h2>Gauge angles</h2>
          <div class="module">
            <p>The start and end angles of the gauge's track can be changed as necessary.</p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="none"
                ticks-visibility="none"
                digital-display
                digital-display-position="center"
                start-angle="0"
                end-angle="180"
                min="0"
                max="100"
                value="45"
                precision-digits="2"
              ></smart-gauge>
            </div>
            <p>Semi-circular gauge</p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="none"
                ticks-visibility="none"
                digital-display
                digital-display-position="center"
                start-angle="0"
                end-angle="360"
                min="0"
                max="100"
                value="45"
                precision-digits="2"
              ></smart-gauge>
            </div>
            <p>Circular gauge</p>
          </div>
          <div class="module">
            <div class="light-background">
              <smart-gauge
                analog-display-type="fill"
                labels-visibility="none"
                ticks-visibility="none"
                digital-display
                digital-display-position="center"
                start-angle="80"
                end-angle="280"
                min="0"
                max="100"
                value="45"
                precision-digits="2"
              ></smart-gauge>
            </div>
            <p>Gauge with custom angles</p>
          </div>
        </section>
        <section id="gauge-demo">
          <h2>Demo</h2>
          <div class="module">
            <div id="mobileDemo">
              <smart-gauge
                id="mobileGauge"
                analog-display-type="fill"
                labels-visibility="none"
                ticks-visibility="none"
                digital-display
                start-angle="-30"
                end-angle="210"
                min="0"
                max="100"
                value="50"
                precision-digits="0"
              ></smart-gauge>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const silentLabel = document.getElementById("silentLabel"),
        normalLabel = document.getElementById("normalLabel"),
        maxLabel = document.getElementById("maxLabel");
      document
        .getElementById("mobileGauge")
        .addEventListener("change", function(event) {
          const value = event.detail.value;
          silentLabel.classList.remove("highlighted");
          normalLabel.classList.remove("highlighted");
          maxLabel.classList.remove("highlighted");
          if (value >= 75) {
            maxLabel.classList.add("highlighted");
          } else if (value >= 25) {
            normalLabel.classList.add("highlighted");
          } else {
            silentLabel.classList.add("highlighted");
          }
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
