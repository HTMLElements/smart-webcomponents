<template>
  <div class="vue-root">
    <section>
      <div>
        <h2>Scrollbars let users to select values by moving the scrollbar thumb.</h2>
        <div class="module">
          <p>
            Scrollbars are ideal components for adjusting settings that reflect intensity
            levels, such as volume, brightness, or color saturation.
          </p>
        </div>
      </div>
    </section>
    <section id="continuousSliders">
      <h2>Continuous scrollbar</h2>
      <div class="module">
        <p>
          Use continuous scrollbars for subjective settings that do not require
          a specific value for the user to make meaningful adjustments.
        </p>
      </div>
      <div class="module continuousSliderLight">
        <table>
          <tr>
            <td>
              <p>Normal</p>
            </td>
          </tr>
          <tr />
          <tr>
            <td>
              <smart-scroll-bar right-to-left></smart-scroll-bar>
            </td>
          </tr>
          <tr />
          <tr>
            <td>
              <smart-scroll-bar right-to-left></smart-scroll-bar>
            </td>
          </tr>
          <tr />
          <tr>
            <td>
              <smart-scroll-bar right-to-left></smart-scroll-bar>
            </td>
          </tr>
          <tr>
            <td>
              <p>Disabled</p>
            </td>
          </tr>
          <tr />
          <tr>
            <td>
              <smart-scroll-bar right-to-left disabled></smart-scroll-bar>
            </td>
          </tr>
          <tr />
          <tr>
            <td>
              <smart-scroll-bar right-to-left disabled></smart-scroll-bar>
            </td>
          </tr>
          <tr />
          <tr>
            <td>
              <smart-scroll-bar right-to-left disabled></smart-scroll-bar>
            </td>
          </tr>
        </table>
      </div>
    </section>
    <section id="verticalSliders">
      <h2>Orientation</h2>
      <div class="module">
        <p>
          smartScrollBar can be horizontal or vertical depending on the orientation
          property.
        </p>
      </div>
      <div class="module">
        <div>
          <smart-scroll-bar right-to-left></smart-scroll-bar>
          <br />
          <br />
          <smart-scroll-bar right-to-left orientation="vertical"></smart-scroll-bar>
        </div>
        <br />
        <p>Vertical scrollbars</p>
      </div>
    </section>
    <section id="demoSliders">
      <h2>Demo</h2>
      <div class="module">
        <p>ScrollBars are controls that are used for adjusting values precisely.</p>
      </div>
      <div class="module media-controls">
        <div>
          <h2>Volumes</h2>
          <div>
            <h3>Media volume</h3>
            <div id="mediaControl" class="controls">
              <i class="material-icons">&#xE04D;</i>
              <smart-scroll-bar right-to-left id="mediaSlider"></smart-scroll-bar>
            </div>
          </div>
          <div>
            <h3>Alarm volume</h3>
            <div id="alarmControl" class="controls">
              <i class="material-icons">&#xE855;</i>
              <smart-scroll-bar right-to-left id="alarmSlider"></smart-scroll-bar>
            </div>
          </div>
          <div>
            <h3>Ring volume</h3>
            <div id="ringControl" class="controls">
              <i class="material-icons">&#xE7F4;</i>
              <smart-scroll-bar right-to-left id="volumeSlider"></smart-scroll-bar>
            </div>
          </div>
        </div>
      </div>
      <div class="module power-controls">
        <div>
          <h2>Battery Saver Mode</h2>
          <div>
            <h3>
              Low battery alert on
              <b id="lowBatteryAlert">15</b> %
            </h3>
            <div id="mediaControl" class="controls">
              <i class="material-icons">&#xE8B2;</i>
              <smart-scroll-bar right-to-left id="lowBatterySlider" scale-type="integer"></smart-scroll-bar>
            </div>
          </div>
          <div>
            <h3>
              Power saver mode active on
              <b id="powerSaver">50</b>%
            </h3>
            <div id="alarmControl" class="controls">
              <i class="material-icons">&#xE19C;</i>
              <smart-scroll-bar right-to-left id="powerSaverSlider" scale-type="integer"></smart-scroll-bar>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.scrollbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sliders = document.querySelectorAll("smart-scroll-bar");
      sliders[1].max = 100;
      sliders[1].value = 50;
      sliders[2].max = 100;
      sliders[2].value = 100;
      sliders[3].max = 100;
      sliders[4].max = 100;
      sliders[4].value = 50;
      sliders[5].max = 100;
      sliders[5].value = 100;
      sliders[6].max = 100;
      sliders[6].value = 20;
      sliders[7].max = 100;
      sliders[7].value = 75;
      sliders[8].max = 100;
      sliders[8].value = 25;
      sliders[9].max = 100;
      sliders[9].value = 50;
      sliders[10].max = 100;
      sliders[10].value = 75;
      sliders[11].max = 100;
      sliders[11].value = 15;
      sliders[12].max = 100;
      sliders[12].value = 50;

      const mediaSlider = document.getElementById("mediaSlider"),
        alarmSlider = document.getElementById("alarmSlider"),
        volumeSlider = document.getElementById("volumeSlider"),
        lowBatterySlider = document.getElementById("lowBatterySlider"),
        powerSaverSlider = document.getElementById("powerSaverSlider");

      function setIcon(event) {
        let below = "",
          above = "",
          off = "";
        const slider = event.target;
        switch (slider) {
          case mediaSlider:
            below = '<i class="material-icons">&#xE04D;</i>';
            above = '<i class="material-icons">&#xE050;</i>';
            off = '<i class="material-icons">&#xE04F;</i>';
            break;
          case alarmSlider:
            below = above = '<i class="material-icons">&#xE855;</i>';
            off = '<i class="material-icons">&#xE857;</i>';
            break;
          case volumeSlider:
            below = '<i class="material-icons">&#xE7F5;</i>';
            above = '<i class="material-icons">&#xE7F4;</i>';
            off = '<i class="material-icons">&#xE7F6;</i>';
            break;
        }
        if (slider.value === slider.min) {
          slider.previousElementSibling.innerHTML = off;
        } else if (slider.value < slider.max / 2) {
          slider.previousElementSibling.innerHTML = below;
        } else {
          slider.previousElementSibling.innerHTML = above;
        }
      }

      function setBatteryLevel(event) {
        const slider = event.target;
        if (slider === lowBatterySlider) {
          document.getElementById(
            "lowBatteryAlert"
          ).textContent = slider.value.toString();
        } else {
          document.getElementById(
            "powerSaver"
          ).textContent = slider.value.toString();
        }
      }
      mediaSlider.addEventListener("change", setIcon);
      alarmSlider.addEventListener("change", setIcon);
      volumeSlider.addEventListener("change", setIcon);
      lowBatterySlider.addEventListener("change", setBatteryLevel);
      powerSaverSlider.addEventListener("change", setBatteryLevel);
    });
  }
};
</script>

<style>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

smart-scroll-bar {
  width: 250px;
  height: 17px;
}
smart-scroll-bar[orientation="vertical"] {
  width: 17px;
  height: 250px;
}
</style>
