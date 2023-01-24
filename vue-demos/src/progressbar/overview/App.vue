<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Progress and activity indicators are visual indications of an app loading content.</h2>
          <div class="module">
            <p>
              A single visual indicator should be used to represent each type of operation.
              For example, a refresh operation should display either a refresh bar or
              an activity circle, but not both.
            </p>
            <p>Additional button types include:</p>
            <p>
              <strong>Determinate indicators</strong> display how long an operation will
              take.
            </p>
            <p>
              <strong>Indeterminate indicators</strong> visualize an unspecified wait
              time.
            </p>
          </div>
          <div class="module">
            <h3>Types</h3>
            <p>
              Linear
              <br />Circular
            </p>
            <h3>Behavior</h3>
            <p>
              Loading content in phases
              <br />Loading additional content
            </p>
          </div>
        </div>
      </section>
      <section id="indicatorTypes">
        <h2>Types of indicators</h2>
        <div class="module">
          <p>
            When indicators are
            <strong>determinate</strong> they indicate how long
            an operation will take when the percentage complete is detectable.
          </p>
          <p>
            When indicators are
            <strong>indeterminate</strong> they request that the
            user wait while something finishes when it’s not necessary to indicate
            how long it will take.
          </p>
          <p>
            Both linear and circular progress indicators may be either determinate
            or indeterminate.
          </p>
        </div>
        <div class="module progress-bar-linear">
          <h2>Linear</h2>
          <p>
            A linear progress indicator should always fill from 0% to 100% and never
            decrease in value. It should be represented by bars on the edge of a header
            or sheet that appear and disappear.
          </p>
          <p>
            For
            <strong>multiple operations</strong> happening in sequence, use the
            indicator to represent the progress as a whole, and not each individual
            operation.
          </p>
        </div>
        <div class="module progress-bar-animations">
          <div>
            <h3>Determinate</h3>
            <smart-progress-bar class="determinate"></smart-progress-bar>
            <h3>Indeterminate</h3>
            <smart-progress-bar indeterminate class></smart-progress-bar>
          </div>
          <p>Linear progress indicators Light Theme</p>
        </div>
        <div class="module"></div>
        <div class="module progress-bar-behavior">
          <h2>Demo usage</h2>
        </div>
        <div class="module files-loading-progress">
          <div>
            <p>Getting your files</p>
            <smart-progress-bar class="determinate" indeterminate inverted></smart-progress-bar>
          </div>
          <p>Loading content for the first time</p>
        </div>
        <div class="module page-loading-progress">
          <div>
            <smart-progress-bar indeterminate></smart-progress-bar>
          </div>
          <p>Query indicator on a webpage</p>
        </div>
      </section>
      <section id="circularProgressBar">
        <div class="module">
          <h2>Circular</h2>
        </div>
        <div class="module progress-bar-animations">
          <div>
            <h3>Determinate</h3>
            <smart-circular-progress-bar class="determinate"></smart-circular-progress-bar>
            <h3>Indeterminate</h3>
            <smart-circular-progress-bar indeterminate></smart-circular-progress-bar>
          </div>
          <p>Circular progress indicators Light Theme</p>
        </div>
        <div class="module">
          <div>
            <h3>Determinate</h3>
            <smart-circular-progress-bar class="determinate"></smart-circular-progress-bar>
            <h3>Indeterminate</h3>
            <smart-circular-progress-bar indeterminate></smart-circular-progress-bar>
          </div>
          <p>Circular progress indicators Dark Theme</p>
        </div>
        <div class="module progress-bar-behavior">
          <h2>Demo usage</h2>
        </div>
        <div class="module circular-loading-progress">
          <div>
            <smart-circular-progress-bar class="uploading">
              <smart-toggle-button id="toggleUploadButton">
                <i class="material-icons">cloud_upload</i>
              </smart-toggle-button>
            </smart-circular-progress-bar>
          </div>
          <p>A circular loader may be integrated with a button.</p>
        </div>
        <div class="module page-refresh-progress">
          <div>
            <smart-circular-progress-bar
              id="refreshing"
              class="smart-visibility-hidden"
              indeterminate
            ></smart-circular-progress-bar>
          </div>
          <p>A circular loader may be used to load something on hover.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.progressbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const progressBars = document.getElementsByClassName("determinate");
      let linearProgressBar1 = progressBars[0],
        linearProgressBar2 = progressBars[1],
        circularProgressBar1 = progressBars[3],
        circularProgressBar2 = progressBars[2],
        mouseHoverArea = document.getElementsByClassName(
          "page-refresh-progress"
        )[0],
        uploadButton = document.getElementById("toggleUploadButton"),
        value,
        isPaused;

      linearProgressBar1.value = 50;
      circularProgressBar1.value = 50;

      mouseHoverArea.addEventListener("mouseenter", function() {
        document
          .getElementById("refreshing")
          .classList.remove("smart-visibility-hidden");
      });
      mouseHoverArea.addEventListener("mouseleave", function() {
        document
          .getElementById("refreshing")
          .classList.add("smart-visibility-hidden");
      });
      uploadButton.addEventListener("change", function(event) {
        let circularProgressBar1 = document.getElementsByClassName(
          "uploading"
        )[0];
        if (
          uploadButton.disabled ||
          (circularProgressBar1.value > 0 &&
            circularProgressBar1.value < circularProgressBar1.max)
        ) {
          return;
        }
        if (event.detail.value) {
          circularProgressBar1.readonly = true;
          circularProgressBar1.$.addClass("start");
          let uploading = setInterval(function() {
            circularProgressBar1.value += 25;
            circularProgressBar2.value += 25;
            if (circularProgressBar1.value > circularProgressBar1.max) {
              clearInterval(uploading);
              circularProgressBar1.$.addClass("finish");
              circularProgressBar1.$.removeClass("start");
              setTimeout(function() {
                uploadButton.$.button.style.backgroundColor = "#F47B12";
                uploadButton.$.button.innerHTML =
                  '<i class="material-icons">done</i>';
                circularProgressBar1.readonly = false;
                circularProgressBar1.$.removeClass("finish");
              }, 250);
            }
          }, 750);
        } else {
          circularProgressBar1.value = circularProgressBar1.min;
          uploadButton.$.button.style.backgroundColor = "";
          uploadButton.$.button.innerHTML =
            '<i class="material-icons">cloud_upload</i>';
        }
      });
      setInterval(function() {
        if (isPaused) {
          return;
        }
        value = Math.random() * 15;
        linearProgressBar1.value += value;
        linearProgressBar2.value += value;
        circularProgressBar1.value += value;
        circularProgressBar2.value += value;
        if (linearProgressBar1.value >= linearProgressBar1.max) {
          isPaused = true;
          linearProgressBar1.classList.add("finished");
          linearProgressBar2.classList.add("finished");
          circularProgressBar1.classList.add("finished");
          setTimeout(function() {
            linearProgressBar1.value = linearProgressBar1.min;
            linearProgressBar2.value = linearProgressBar2.min;
            circularProgressBar1.value = circularProgressBar1.min;
            linearProgressBar1.classList.remove("finished");
            linearProgressBar2.classList.remove("finished");
            circularProgressBar1.classList.remove("finished");
            isPaused = false;
          }, 1500);
        }
      }, 500);
    });
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */

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
  line-height: 24px;
  font-size: 13px;
  margin-left: 0;
  margin: 5% 10%;
  padding-top: 50px;
}

.smart-demo-container section h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}

.smart-demo-container section:first-of-type h2 {
  font-size: 34px;
  border-top: initial;
}

.smart-demo-container section:first-of-type div h2 {
  font-size: 20px;
}

.smart-demo-container section {
  margin-top: 80px;
}

.smart-demo-container section:first-of-type {
  margin-top: 0;
}

.smart-demo-container section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 940px;
}

.smart-demo-container nav {
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

.smart-demo-container nav ul {
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

.smart-demo-container nav li {
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

.smart-demo-container nav li a {
  text-decoration: none;
}

.smart-demo-container nav h2 {
  font-size: 15px;
  line-height: 16px;
  padding-bottom: 12px;
  font-weight: 700;
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

.smart-demo-container .progress-bar-container,
.smart-demo-container .progress-bar-container-dark-theme {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #eeeeee;
  padding: 10px;
}

.smart-demo-container .progress-bar-container-dark-theme {
  background-color: #000;
}

.smart-demo-container #progressBarCircularControl .smart-label-container,
.smart-demo-container #progressBarCircularControl2 .smart-label-container,
.smart-demo-container #progressBarAnimated .smart-label-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.smart-demo-container
  #progressBarCircularControl
  .smart-label-container
  smart-repeat-button {
  width: 100%;
  height: 50%;
}

.smart-demo-container
  #progressBarAnimated
  .smart-label-container
  smart-power-button {
  width: 100%;
  height: 100%;
}

.smart-demo-container
  #progressBarAnimated
  .smart-label-container
  smart-power-button
  .smart-input::after {
  font-size: 30px;
}

.smart-demo-container #progressBarCircularControl2 .smart-label-container {
  flex-direction: row;
}

.smart-demo-container
  #progressBarCircularControl2
  .smart-label-container
  smart-repeat-button {
  width: 50%;
  height: 100%;
}

.smart-demo-container .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #eeeeee;
}

.module h3 {
  margin-top: 30px;
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

.smart-demo-container #indicatorTypes .module.progress-bar-animations {
  width: calc(100% / 2 + 45px);
  margin-bottom: 80px;
}

.smart-demo-container #indicatorTypes .module:first-of-type {
  width: 100%;
}

.smart-demo-container #indicatorTypes .progress-bar-animations,
.smart-demo-container #indicatorTypes .progress-bar-animations-dark {
  width: calc(100% / 2 + 45px);
  height: 400px;
  background-color: #eeeeee;
  margin-top: 50px;
}

.smart-demo-container #circularProgressBar .progress-bar-animations,
.smart-demo-container #circularProgressBar .progress-bar-animations-dark {
  height: 500px;
  background-color: #eeeeee;
}

.smart-demo-container #indicatorTypes .progress-bar-animations-dark,
.smart-demo-container #circularProgressBar .progress-bar-animations-dark {
  background-color: #000;
}

.smart-demo-container #indicatorTypes .progress-bar-animations-dark > div,
.smart-demo-container #circularProgressBar .progress-bar-animations-dark > div {
  color: white;
}

.smart-demo-container #circularProgressBar {
  margin-top: 120px;
}

.smart-demo-container #circularProgressBar h2 {
  -webkit-margin-before: initial;
  font-weight: 400;
}
.smart-demo-container section > h2:first-of-type {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
  padding-top: 80px;
  width: calc(100% - 280px);
}
.smart-demo-container #indicatorTypes .progress-bar-animations h3,
.smart-demo-container #indicatorTypes .progress-bar-animations-dark h3 {
  width: 100%;
  padding-left: 20%;
  margin-bottom: initial;
}

.smart-demo-container #indicatorTypes .progress-bar-animations-dark p {
  color: #000;
}

.smart-demo-container .progress-bar-animations h3,
.smart-demo-container .progress-bar-animations-dark h3 {
  margin-top: 0;
}

.smart-demo-container #indicatorTypes .progress-bar-linear {
  margin-top: 50px;
}

.smart-demo-container #indicatorTypes .progress-bar-linear h2 {
  -webkit-margin-before: initial;
}

.smart-demo-container
  #indicatorTypes
  .progress-bar-animations
  div:first-of-type,
.smart-demo-container
  #indicatorTypes
  .progress-bar-animations-dark
  div:first-of-type,
.smart-demo-container
  #circularProgressBar
  .progress-bar-animations
  div:first-of-type,
.smart-demo-container
  #circularProgressBar
  .progress-bar-animations-dark
  div:first-of-type {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative; /* FireFox needs it */
}

.smart-demo-container #circularProgressBar .circular-loading-progress > div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
}

.smart-demo-container #circularProgressBar .circular-loading-progress {
  height: 350px;
}

.smart-demo-container
  #indicatorTypes
  .progress-bar-animations
  smart-progress-bar,
.smart-demo-container
  #indicatorTypes
  .progress-bar-animations-dark
  smart-progress-bar {
  width: 80%;
  height: 10px;
}

.smart-demo-container #indicatorTypes .page-loading-progress,
.smart-demo-container #indicatorTypes .files-loading-progress,
.smart-demo-container #circularProgressBar .page-refresh-progress {
  position: relative;
  height: 700px;
  background-color: #eeeeee;
  text-align: center;
  background-image: url(https://htmlelements.com/demos/images/progress-bar-indeterminate.jpg);
  background-size: cover;
  background-position: center;
}

.smart-demo-container #circularProgressBar .page-refresh-progress {
  text-align: initial;
}

.smart-demo-container #circularProgressBar .page-refresh-progress > div {
  display: flex;
  justify-content: center;
  height: 100%;
}

.smart-demo-container
  #circularProgressBar
  .page-refresh-progress
  smart-circular-progress-bar {
  animation: re-appear 0.5s ease-in-out;
  margin-top: 30%;
}

.smart-demo-container
  #circularProgressBar
  .page-refresh-progress
  smart-circular-progress-bar.smart-visibility-hidden {
  opacity: 0;
  animation: hide 0.5s ease-in-out;
  transition: animation, visibility 0.5s ease-in;
}

.smart-demo-container #indicatorTypes .files-loading-progress {
  background-image: url(https://htmlelements.com/demos/images/progres-bar-loading-files.jpeg);
}

.smart-demo-container #indicatorTypes .progress-bar-behavior,
.smart-demo-container #indicatorTypes .progress-bar-determinate,
.smart-demo-container #indicatorTypes .page-loading-progress,
.smart-demo-container #indicatorTypes .files-loading-progress,
.smart-demo-container #circularProgressBar .progress-bar-behavior,
.smart-demo-container #circularProgressBar .circular-loading-progress,
.smart-demo-container #circularProgressBar .page-loading-progress,
.smart-demo-container #circularProgressBar .page-refresh-progress {
  margin-top: 130px;
}

.smart-demo-container
  .circular-loading-progress
  smart-circular-progress-bar
  smart-toggle-button,
.smart-demo-container
  .circular-loading-progress
  smart-circular-progress-bar
  smart-toggle-button[checked] {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 50px;
}

.smart-demo-container
  .circular-loading-progress
  smart-circular-progress-bar
  smart-toggle-button
  button {
  border-radius: 50%;
  border: initial;
  color: white;
  display: flex;
  justify-content: center;
}

.smart-demo-container
  .circular-loading-progress
  smart-circular-progress-bar
  smart-toggle-button
  button,
.smart-demo-container
  .circular-loading-progress
  smart-circular-progress-bar
  smart-toggle-button[checked]
  button {
  background-color: #5869b1;
}

.smart-demo-container #indicatorTypes .page-loading-progress smart-progress-bar,
.smart-demo-container
  #indicatorTypes
  .files-loading-progress
  smart-progress-bar {
  width: 100%;
  height: 5px;
  margin-top: 88px;
}

.smart-demo-container
  #indicatorTypes
  .files-loading-progress
  smart-progress-bar {
  width: 30%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.smart-demo-container #indicatorTypes .files-loading-progress > div,
.smart-demo-container #indicatorTypes .page-loading-progress > div {
  height: 100%;
  display: flex;
}

.smart-demo-container #indicatorTypes .files-loading-progress > div p {
  width: 100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  text-align: center;
}

.smart-demo-container #indicatorTypes .page-loading-progress p,
.smart-demo-container #indicatorTypes .files-loading-progress p {
  text-align: left;
}

.smart-demo-container smart-circular-progress-bar.finish .smart-value,
.smart-demo-container smart-circular-progress-bar.finish .smart-value-path {
  animation: finish-uploading 0.25s ease-in;
  stroke-width: 0%;
  opacity: 0;
}

.smart-demo-container smart-circular-progress-bar.animation .smart-value {
  transition-duration: 0.8s;
}

.smart-demo-container smart-circular-progress-bar.uploading {
  --smart-circular-progress-bar-fill-size: 10%;
}

.smart-demo-container smart-circular-progress-bar.uploading .smart-value,
.smart-demo-container smart-circular-progress-bar.uploading .smart-value-path {
  stroke-width: 0%;
  opacity: 0;
}

.smart-demo-container smart-circular-progress-bar.uploading .smart-value {
  stroke: #f47b12;
}

.smart-demo-container smart-circular-progress-bar.uploading .smart-value-path {
  stroke: #fdb65e;
}

.smart-demo-container smart-circular-progress-bar.start .smart-value,
.smart-demo-container smart-circular-progress-bar.start .smart-value-path {
  animation: start-uploading 0.5s ease-in;
  stroke-width: 10%;
  opacity: 1;
}

.smart-demo-container smart-circular-progress-bar.start svg:first-of-type {
  animation: rotateValue 3s ease-in-out;
}

.smart-demo-container smart-progress-bar.finished,
.smart-demo-container smart-circular-progress-bar.finished {
  animation: finish-animation 0.5s ease-in;
  transform: scaleY(0);
}

.smart-demo-container smart-circular-progress-bar.finished {
  animation: finish-animation-circular 0.5s ease-in;
  transform: scale(0);
}

.smart-demo-container #circularProgressBar .page-refresh-progress {
  background-image: url(https://htmlelements.com/demos/images/progress-bar-refresh.jpeg);
}

.smart-demo-container
  #circularProgressBar
  .page-refresh-progress
  smart-circular-progress-bar {
  width: 50px;
  height: 50px;
  margin-top: 160px;
}

@keyframes re-appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes rotateValue {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes finish-animation {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
}

@keyframes finish-animation-circular {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes start-uploading {
  0% {
    stroke-width: 0%;
    opacity: 0;
  }

  100% {
    stroke-width: 10%;
    opacity: 1;
  }
}

@keyframes finish-uploading {
  0% {
    stroke-width: 10%;
    opacity: 1;
  }

  100% {
    stroke-width: 0%;
    opacity: 0;
  }
}
</style>
