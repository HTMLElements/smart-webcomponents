<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <div id="materialSliderContainer">
        <section>
          <div>
            <h2>Sliders let users select from a range of values by moving the slider thumb.</h2>
            <div class="module">
              <p>
                Sliders are ideal components for adjusting settings that reflect intensity
                levels, such as volume, brightness, or color saturation.
              </p>
              <p>
                Sliders may have icons on both ends of the bar that reflect the value
                intensity. Place the smallest value for the slider range on the left and
                the largest value on the right.
              </p>
            </div>
            <div class="module">
              <h3>Continuous sliders</h3>
              <p>
                Continuous sliders allow users to select a value along a subjective range.
                They do not require a specific value to make adjustments, although they
                may, in some instances, offer an editable numeric value.
              </p>
              <h3>Discrete sliders</h3>
              <p>Discrete sliders allow users to select a specific value from a range.</p>
            </div>
          </div>
        </section>
        <nav>
          <h2>Contents</h2>
          <ul>
            <li>
              <a href="#continuousSliders">Continuous slider</a>
            </li>
            <li>
              <a href="#discreteSliders">Discrete slider</a>
            </li>
            <li>
              <a href="#scaleSliders">Scales</a>
            </li>
            <li>
              <a href="#verticalSliders">Orientation</a>
            </li>
            <li>
              <a href="#demoSliders">Demo</a>
            </li>
          </ul>
        </nav>
        <section id="continuousSliders">
          <h2>Continuous slider</h2>
          <div class="module">
            <p>
              Use continuous sliders for subjective settings that do not require a specific
              value for the user to make meaningful adjustments.
            </p>
          </div>
          <div class="module continuousSliderLight">
            <table>
              <tr>
                <td>
                  <smart-slider scale-position="none"></smart-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <smart-slider scale-position="none" value="50"></smart-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <smart-slider scale-position="none" value="100"></smart-slider>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section id="discreteSliders">
          <h2>Discrete slider</h2>
          <div class="module">
            <p>
              The discrete slider thumb snaps to evenly spaced tick marks along the
              slider rail. Use for objective settings that require specific values for
              the user to make meaningful adjustments. Each tick mark should change the
              setting to a level that’s discernible to the user. The values are predetermined
              and aren’t user-editable.
            </p>
            <p>
              The thumb label can be positioned on the near of the far side of the track
              by setting the thumbLabelPosition property to "near" or "far". Default
              value is "near".
            </p>
          </div>
          <div class="module">
            <h2>With a numeric value label</h2>
            <p>Use for settings for which users need to know the exact value of the setting.</p>
          </div>
          <div class="module discreteSliderLight">
            <table>
              <tr>
                <td>
                  <smart-slider
                    labels-visibility="end-points"
                    interval="10"
                    coerce
                    ticks-visibility="major"
                    show-thumb-label
                    scale-type="integer"
                    scale-position="far"
                  ></smart-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <smart-slider
                    labels-visibility="end-points"
                    interval="10"
                    coerce
                    ticks-visibility="major"
                    show-thumb-label
                    scale-type="integer"
                    scale-position="far"
                    value="50"
                  ></smart-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <smart-slider
                    labels-visibility="end-points"
                    interval="10"
                    coerce
                    ticks-visibility="major"
                    show-thumb-label
                    scale-type="integer"
                    scale-position="far"
                    value="100"
                  ></smart-slider>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section id="scaleSliders">
          <h2>Scales</h2>
          <div class="module">
            <p>Continuous smartSlider with a scale.</p>
          </div>
          <div class="module continuousScaleSlider">
            <table>
              <tr>
                <td>
                  <smart-slider
                    scale-type="integer"
                    scale-position="near"
                    ticks-position="scale"
                    ticks-visibility="major"
                  ></smart-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <smart-slider
                    scale-position="both"
                    scale-type="integer"
                    ticks-position="track"
                    ticks-visibility="major"
                  ></smart-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <smart-slider
                    scale-type="integer"
                    scale-position="far"
                    ticks-position="scale"
                    ticks-visibility="major"
                  ></smart-slider>
                </td>
              </tr>
            </table>
            <p>Continuous slider with scale positions: near, both and far</p>
          </div>
          <div class="module">
            <p>Discrete smartSlider can have a scale on the track</p>
          </div>
          <div class="module discreteScaleSlider">
            <div>
              <smart-slider
                coerce
                interval="20"
                show-thumb-label
                scale-type="integer"
                scale-position="both"
                ticks-visibility="major"
              ></smart-slider>
            </div>
            <p>Discrete slider</p>
          </div>
          <div class="module">
            <p>smartSlider can have multiple thumbs</p>
          </div>
          <div class="module discreteScaleSlider">
            <div>
              <smart-slider
                range-slider
                scale-type="integer"
                scale-position="both"
                ticks-visibility="major"
              ></smart-slider>
            </div>
            <p>Range slider</p>
          </div>
        </section>
        <section id="verticalSliders">
          <h2>Orientation</h2>
          <div class="module">
            <p>
              Smart Slider can be horizontal or vertical depending on the orientation
              property.
            </p>
          </div>
          <div class="module">
            <div>
              <smart-slider orientation="vertical" scale-position="none" value="50"></smart-slider>
              <smart-slider orientation="vertical" scale-position="none" value="75" inverted></smart-slider>
            </div>
            <p>Vertical continuous slider / Vertical continuous slider inverted</p>
          </div>
          <div class="module">
            <div>
              <smart-slider
                coerce
                interval="20"
                orientation="vertical"
                show-thumb-label
                scale-type="integer"
                scale-position="both"
                value="50"
              ></smart-slider>
              <smart-slider
                coerce
                interval="20"
                orientation="vertical"
                show-thumb-label
                scale-type="integer"
                scale-position="both"
                value="25"
                inverted
              ></smart-slider>
            </div>
            <p>Vertical discrete slider / Vertical discrete slider inverted</p>
          </div>
        </section>
        <section id="demoSliders">
          <h2>Demo</h2>
          <div class="module">
            <p>Sliders are controls that are used for adjusting values precisely.</p>
          </div>
          <div class="module media-controls">
            <div>
              <h2>Volumes</h2>
              <div>
                <h3>Media volume</h3>
                <div id="mediaControl" class="controls">
                  <i class="material-icons">&#xE04D;</i>
                  <smart-slider id="mediaSlider" scale-position="none" value="25"></smart-slider>
                </div>
              </div>
              <div>
                <h3>Alarm volume</h3>
                <div id="alarmControl" class="controls">
                  <i class="material-icons">&#xE855;</i>
                  <smart-slider id="alarmSlider" scale-position="none" value="50"></smart-slider>
                </div>
              </div>
              <div>
                <h3>Ring volume</h3>
                <div id="ringControl" class="controls">
                  <i class="material-icons">&#xE7F4;</i>
                  <smart-slider id="volumeSlider" scale-position="none" value="75"></smart-slider>
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
                  <smart-slider
                    id="lowBatterySlider"
                    scale-position="none"
                    value="15"
                    scale-type="integer"
                    show-thumb-label
                  ></smart-slider>
                </div>
              </div>
              <div>
                <h3>
                  Power saver mode active on
                  <b id="powerSaver">50</b>%
                </h3>
                <div id="alarmControl" class="controls">
                  <i class="material-icons">&#xE19C;</i>
                  <smart-slider
                    id="powerSaverSlider"
                    scale-position="none"
                    value="50"
                    scale-type="integer"
                    show-thumb-label
                  ></smart-slider>
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
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
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
          document.getElementById("lowBatteryAlert").textContent = slider.value;
        } else {
          document.getElementById("powerSaver").textContent = slider.value;
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

/* ------------ */
.smart-demo-container {
  margin: 0 !important;
}
#materialSliderContainer {
  line-height: 24px;
  font-size: 13px;

  margin-left: 0;
  margin: 5% 10%;
  padding-top: 50px;
}

#materialSliderContainer section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
}

#materialSliderContainer section:first-of-type h2 {
  font-size: 34px;
}

#materialSliderContainer section:first-of-type div h2 {
  font-size: 20px;
}

#materialSliderContainer section {
  margin-top: 80px;
}

#materialSliderContainer section:first-of-type {
  margin-top: 0;
}

#materialSliderContainer section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 30px;
  max-width: 940px;
}

#materialSliderContainer nav {
  display: block;
  border-left: 5px #3949ab solid;
  padding-left: 20px;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  margin-top: 60px;
}

#materialSliderContainer nav ul {
  list-style: none;
  margin-top: 0;
  padding-left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: block;
  list-style-type: disc;
}

#materialSliderContainer nav li {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-size: 20px;
  line-height: 40px;
}

#materialSliderContainer nav li a {
  text-decoration: none;
}

#materialSliderContainer nav h2 {
  font-size: 15px;
  line-height: 16px;
  padding-bottom: 12px;
  font-weight: 400;
  color: #757575;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

.module {
  width: calc(100% / 4);
  display: inline-block;
  font: inherit;
  margin-right: 40px;
  min-width: 355px;
  vertical-align: top;
}

.module h3 {
  font-size: 13px;
}

.module p {
  margin-bottom: 20px;
}

.module img {
  width: 100%;
}

.module h2 {
  font-weight: 400;
}

#materialSliderContainer #continuousSliders .module:nth-child(2),
#materialSliderContainer #discreteSliders .module:nth-child(2) {
  display: block;
}

#materialSliderContainer #continuousSliders .module h3,
#materialSliderContainer #discreteSliders .module h3 {
  font-weight: 400;
  font-size: 16px;
}

#materialSliderContainer #continuousSliders .continuousSliderLight,
#materialSliderContainer #discreteSliders .discreteSliderLight,
#materialSliderContainer #scaleSliders .continuousScaleSlider,
#materialSliderContainer #scaleSliders .discreteScaleSlider {
  width: calc(100% / 2 + 45px);
  height: 400px;
  margin-top: 50px;
  margin-bottom: 80px;
}
.discreteSliderLight smart-slider {
  height: 85px;
}
#materialSliderContainer .continuousSliderLight table,
#materialSliderContainer .continuousSliderDark table,
#materialSliderContainer .discreteSliderLight table,
#materialSliderContainer .discreteSliderDark table {
  width: 100%;
  height: 100%;
  padding: 50px;
}

#materialSliderContainer .continuousSliderLight table,
#materialSliderContainer .discreteSliderLight table {
  background-color: #eeeeee;
}

#materialSliderContainer .continuousSliderDark table,
#materialSliderContainer .discreteSliderDark table {
  color: white;
  background-color: #000;
}

#materialSliderContainer #continuousSliders .continuousSliderDark,
#materialSliderContainer #discreteSliders .discreteSliderDark {
  width: calc(100% / 2 + 45px);
  height: 400px;
  background-color: #000;
  margin-top: 50px;
  margin-bottom: 80px;
}

#materialSliderContainer #continuousSliders .module:nth-child(3),
#materialSliderContainer #continuousSliders .module:nth-child(5),
#materialSliderContainer #discreteSliders .module:nth-child(3) {
  margin-top: 50px;
}

#materialSliderContainer #continuousSliders .module:first-of-type,
#materialSliderContainer #discreteSliders .module:first-of-type {
  width: calc(100% - 280px);
}

#materialSliderContainer #discreteSliders h2:first-of-type,
#materialSliderContainer #scaleSliders h2:first-of-type,
#materialSliderContainer #verticalSliders h2:first-of-type,
#materialSliderContainer #demoSliders h2:first-of-type {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
  padding-top: 80px;
  width: calc(100% - 280px);
}

#materialSliderContainer #scaleSliders smart-slider {
  --smart-slider-default-height: 85px;
}

#materialSliderContainer #scaleSliders .continuousScaleSlider,
#materialSliderContainer #scaleSliders .discreteScaleSlider {
  height: 300px;
  margin-top: initial;
}

#scaleSliders .continuousScaleSlider > div,
#scaleSliders .discreteScaleSlider > div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

#scaleSliders .continuousScaleSlider smart-slider:nth-of-type(3) {
  margin-top: 40px;
}

#materialSliderContainer #verticalSliders smart-slider {
  --smart-slider-default-height: 200px;
}

#materialSliderContainer #verticalSliders .module:nth-of-type(2) > div,
#materialSliderContainer #verticalSliders .module:nth-of-type(3) > div {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: #eeeeee;
  padding: 20px;
}

#materialSliderContainer #demoSliders .media-controls,
#materialSliderContainer #demoSliders .power-controls {
  position: relative;
  color: #757575;
  background-image: url(https://htmlelements.com/demos/images/slider-controls.png);
  height: 650px;
  background-color: #eeeeee;
  text-align: center;
  background-size: cover;
  background-position: center;
}

#materialSliderContainer #demoSliders .media-controls h2,
#materialSliderContainer #demoSliders .power-controls h2 {
  color: black;
  margin-bottom: 20%;
  -webkit-margin-before: 0;
}

#materialSliderContainer #demoSliders .media-controls > div,
#materialSliderContainer #demoSliders .power-controls > div {
  height: 71%;
  width: 85%;
  margin-top: 24%;
  margin-left: 9%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 25px;
  padding-right: 0px;
  background-color: white;
}

#materialSliderContainer #demoSliders .media-controls > div > div,
#materialSliderContainer #demoSliders .power-controls > div > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 3%;
  width: 100%;
}

#materialSliderContainer #demoSliders .power-controls > div > div {
  margin-bottom: 10%;
}

#materialSliderContainer #demoSliders .power-controls .controls {
  margin-top: 5%;
}
.smart-demo-container section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}
#materialSliderContainer #demoSliders .controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#materialSliderContainer #demoSliders .controls {
  --smart-tank-default-width: 85%;
}

#materialSliderContainer #demoSliders .media-controls .material-icons,
#materialSliderContainer #demoSliders .power-controls .material-icons {
  font-size: 23px;
}
</style>
