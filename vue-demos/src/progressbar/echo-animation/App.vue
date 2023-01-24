<template>
  <div class="vue-root">
    <svg>
      <defs>
        <filter id="mainGlow" x="0" y="0" width="200%" height="200%">
          <feGaussianBlur class="mainGlowBlur" stdDeviation="14" result="coloredBlur" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood flood-color="#50FFFF" flood-opacity="1" />
          <feComposite in2="offsetblur" operator="atop" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="blueGlow" x="0" y="0" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood flood-color="#2144FB" flood-opacity="1" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="outlineGrad" cx="10" cy="10" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFF" />
          <stop offset="0.3" stop-color="#50FFFF" stop-opacity="1" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="blueGrad" cx="10" cy="10" r="350" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#2144FB" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <smart-circular-progress-bar class="echo-animation"></smart-circular-progress-bar>
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
      document.querySelector("smart-circular-progress-bar").whenRendered(() => {
        document
          .getElementsByClassName("smart-value-path")[0]
          .setAttribute("filter", "url(#blueGlow)");
        document
          .getElementsByClassName("smart-value")[0]
          .setAttribute("filter", "url(#mainGlow)");
        /* Needed for IE11 ! CSS Stroke has no support for IE11 */
        document
          .getElementsByClassName("smart-value-path")[0]
          .setAttribute("stroke", "url(#blueGrad)");
        document
          .getElementsByClassName("smart-value")[0]
          .setAttribute("stroke", "url(#outlineGrad)");
      });
    });
  }
};
</script>

<style>
#progressbar1 {
  margin-bottom: 20px;
}

#progressbar3 {
  margin-top: 20px;
}

smart-circular-progress-bar.echo-animation {
  /* Use vars if browser supports! CSS vars on stroke-width DO NOT work in EDGE ! */
  --smart-circular-progress-bar-fill-size: 8;
}

smart-circular-progress-bar.echo-animation > .smart-container,
smart-circular-progress-bar.echo-animation .smart-label-container {
  border: none;
}

smart-circular-progress-bar.echo-animation .smart-value {
  stroke: url(#outlineGrad);
  animation: circle-around 3s infinite linear;
  stroke-width: calc(var(--smart-circular-progress-bar-fill-size) + 2);
  stroke-width: 10;
  transform-origin: center center;
}

smart-circular-progress-bar.echo-animation .smart-value-path {
  stroke: url(#blueGrad);
  stroke-width: var(--smart-circular-progress-bar-fill-size);
  stroke-width: 8;
}

/* MS EDGE only solution for the SVG animation */
@supports (-ms-ime-align: auto) {
  smart-circular-progress-bar.echo-animation svg:first-of-type {
    animation: circle-around 2.5s infinite linear;
  }
}

/* IE10+ solution for the SVG animation for the SVG animation*/
@media screen and (-ms-high-contrast: active),
  screen and (-ms-high-contrast: none) {
  smart-circular-progress-bar.echo-animation svg:first-of-type {
    animation: circle-around 2.5s infinite linear;
  }
}

@keyframes circle-around {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
