<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <div id="materialTankContainer">
        <section>
          <div>
            <h2>Tanks similar to the sliders, let users select a value within a range.</h2>
            <div class="module">
              <p>
                Tanks are ideal components for adjusting settings that reflect intensity
                levels, such as volume, brightness, or color saturation.
              </p>
              <p>
                Tanks have controllable fill area that can be adjusted to the desired
                level.
              </p>
            </div>
            <div class="module"></div>
          </div>
        </section>
        <nav>
          <h2>Contents</h2>
          <ul>
            <li>
              <a href="#continuousTanks">Continuous tank</a>
            </li>
            <li>
              <a href="#discreteTanks">Discrete tank</a>
            </li>
            <li>
              <a href="#scaleTanks">Scales</a>
            </li>
            <li>
              <a href="#verticalTanks">Orientation</a>
            </li>
            <li>
              <a href="#demoTank">Demo</a>
            </li>
          </ul>
        </nav>
        <section id="continuousTanks">
          <h2>Continuous tank</h2>
          <div class="module">
            <p>
              Use continuous tanks for subjective settings that do not require a specific
              value for the user to make meaningful adjustments.
            </p>
          </div>
          <smart-tank class="animation" scale-position="none"></smart-tank>
          <br />
          <br />
          <smart-tank class="animation" value="50" scale-position="none"></smart-tank>
          <br />
          <br />
          <smart-tank class="animation" value="100" scale-position="none"></smart-tank>
          <br />
          <br />
        </section>
        <section id="discreteTanks">
          <h2>Discrete tank</h2>
          <div class="module">
            <p>
              Use for objective settings that require specific values for the user to
              make meaningful adjustments. Each tick mark should change the setting to
              a level that’s discernible to the user. The values are predetermined and
              aren’t user-editable.
            </p>
            <p>
              The thumb label can re positioned on the near or the far side of the tank
              using the thumbLabelPosition property.
            </p>
          </div>
          <smart-tank scale-type="integer" show-thumb-label value="50" coerce interval="10"></smart-tank>
        </section>
        <section id="scaleTanks">
          <h2>Scales</h2>
          <div class="module">
            <p>smartTank with a scale.</p>
          </div>
          <div class="module scaleTank">
            <div>
              <smart-tank
                scale-type="integer"
                scale-position="near"
                ticks-position="scale"
                ticks-visibility="major"
                value="25"
              ></smart-tank>
              <br />
              <br />
              <smart-tank
                scale-type="integer"
                ticks-position="track"
                ticks-visibility="major"
                value="50"
              ></smart-tank>
              <br />
              <br />
              <smart-tank
                scale-type="integer"
                scale-position="far"
                ticks-position="scale"
                ticks-visibility="major"
                value="75"
              ></smart-tank>
              <br />
              <br />
            </div>
            <p>Continuous tanks with scale positions: near, track and far</p>
          </div>
        </section>
        <section id="verticalTanks">
          <h2>Orientation</h2>
          <div class="module">
            <p>smartTank can be horizontal or vertical depending on the orientation property.</p>
            <p>
              By the default the tank is vertically oriented. The property "orientation"
              determines the orientation.
            </p>
          </div>
          <div class="module">
            <div>
              <smart-tank
                orientation="horizontal"
                show-thumb-label
                scale-type="integer"
                scale-position="none"
                value="50"
              ></smart-tank>
              <smart-tank
                orientation="horizontal"
                show-thumb-label
                thumb-label-position="far"
                scale-type="integer"
                scale-position="none"
                value="50"
                inverted
              ></smart-tank>
            </div>
            <p>
              Horizontal tank, thumbLabelPosition near / Horizontal inverted tank, thumbLabelPosition
              far
            </p>
          </div>
          <div class="module">
            <div>
              <smart-tank
                orientation="horizontal"
                show-thumb-label
                scale-type="integer"
                scale-position="near"
                value="50"
              ></smart-tank>
              <smart-tank
                orientation="horizontal"
                show-thumb-label
                thumb-label-position="far"
                scale-type="integer"
                scale-position="far"
                value="50"
                inverted
              ></smart-tank>
            </div>
            <p>
              Horizontal tank with a near positioned scale, thumbLabelPosition near
              / Horizontal inverted tank with a far position scale, thumbLabelPosition
              far
            </p>
          </div>
        </section>
        <section id="demoTank">
          <h2>Demo</h2>
          <div class="module">
            <p>Tanks are controls that are used for adjusting values precisely.</p>
            <p>
              Can be used as readonly displays that indicate the current processor usage
              or as battery controls.
            </p>
          </div>
          <div class="module media-controls">
            <div>
              <h2>Statistics</h2>
              <div>
                <h3>
                  CPU Usage
                  <b id="cpu">0</b>%
                </h3>
                <div class="controls">
                  <i class="material-icons">&#xE322;</i>
                  <smart-tank
                    id="cpuTank"
                    class="animation"
                    scale-position="near"
                    value="0"
                    scale-type="integer"
                    ticks-visibility="major"
                    readonly
                  ></smart-tank>
                </div>
              </div>
            </div>
          </div>
          <div class="module power-controls">
            <div>
              <h2>Battery Saver Mode</h2>
              <div>
                <h3>
                  Power saver mode active on
                  <b id="powerSaver">80</b>%
                </h3>
                <div id="alarmControl" class="controls">
                  <i class="material-icons">&#xE19C;</i>
                  <smart-tank
                    id="powerSaverTank"
                    class="animation"
                    scale-position="none"
                    value="80"
                    scale-type="integer"
                    show-thumb-label
                  ></smart-tank>
                </div>
              </div>
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
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let cpuTank = document.getElementById("cpuTank"),
        batteryTank = document.getElementById("powerSaverTank");

      function setTemperature(event) {
        const tank = event.target;
        let color = "#0C9F59";
        if (tank.value === "0") {
          color = "";
        } else if (tank.value < tank.max * 0.25) {
          color = "#DB4534";
        } else if (tank.value > tank.max * 0.2 && tank.value < tank.max * 0.7) {
          color = "#FFEB3B";
        }
        tank.style.setProperty("--smart-primary", color);
        document.getElementById("powerSaver").innerHTML = tank.value;
      }
      cpuTank.labelFormatFunction = label => {
        return label + "%";
      };
      batteryTank.addEventListener("change", setTemperature);
      let cpu = document.getElementById("cpu");
      setInterval(function() {
        cpuTank.value = Math.random() * 100;
        cpu.textContent = cpuTank.value;
      }, 1500);
    });
  }
};
</script>

<style>
smart-tank[orientation="horizontal"] {
  height: 200px;
}
</style>
