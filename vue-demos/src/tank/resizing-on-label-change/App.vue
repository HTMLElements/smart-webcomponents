<template>
  <div class="vue-root">
    <smart-tank id="tank" orientation="vertical" min="-20" max="20"></smart-tank>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <p>Set Max:</p>
        <smart-radio-button group-name="max" id="maxTwoMln">2 000 000</smart-radio-button>
        <smart-radio-button group-name="max" id="maxTwoThousand">2 000</smart-radio-button>
        <smart-radio-button group-name="max" id="maxTwenty" checked>20</smart-radio-button>
      </div>
      <div class="option">
        <p>Set Min:</p>
        <smart-radio-button group-name="min" id="minTwoMln">-2 000 000</smart-radio-button>
        <smart-radio-button group-name="min" id="minTwoThousand">-2 000</smart-radio-button>
        <smart-radio-button group-name="min" id="minTwenty" checked>-20</smart-radio-button>
      </div>
      <div class="option">
        <p>Set Scale Position:</p>
        <smart-radio-button group-name="scalePosition" id="scaleNear" checked>Near</smart-radio-button>
        <smart-radio-button group-name="scalePosition" id="scaleFar">Far</smart-radio-button>
        <smart-radio-button group-name="scalePosition" id="scaleBoth">Both</smart-radio-button>
        <smart-radio-button group-name="scalePosition" id="scaleNone">None</smart-radio-button>
      </div>
      <div class="option">
        <p>Change orientation:</p>
        <smart-radio-button group-name="orientation" id="horizontalOrientation">Horizontal</smart-radio-button>
        <smart-radio-button group-name="orientation" id="verticalOrientation" checked>Vertical</smart-radio-button>
      </div>
      <div class="option">
        <p>Show labels:</p>
        <smart-radio-button group-name="labelVisibility" id="turnLabelsOn" checked>On</smart-radio-button>
        <smart-radio-button group-name="labelVisibility" id="turnLabelsOff">Off</smart-radio-button>
      </div>
      <div class="option">
        <div id="log">
          Scale width:
          <span id="scaleWidth"></span>
          <br />Scale height:
          <span id="scaleHeight"></span>
          <br />Track width:
          <span id="trackWidth"></span>
          <br />Track height:
          <span id="trackHeight"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const maxTwoMln = document.getElementById("maxTwoMln"),
        maxTwoThousand = document.getElementById("maxTwoThousand"),
        maxTwenty = document.getElementById("maxTwenty"),
        minTwoMln = document.getElementById("minTwoMln"),
        minTwoThousand = document.getElementById("minTwoThousand"),
        minTwenty = document.getElementById("minTwenty"),
        horizontalOrientation = document.getElementById(
          "horizontalOrientation"
        ),
        verticalOrientation = document.getElementById("verticalOrientation"),
        scaleNear = document.getElementById("scaleNear"),
        scaleFar = document.getElementById("scaleFar"),
        scaleBoth = document.getElementById("scaleBoth"),
        scaleNone = document.getElementById("scaleNone");
      const setLog = function(tank) {
        const doc = document,
          //trackLog = doc.getElementById("trackSize"),
          scaleWidth = doc.getElementById("scaleWidth"),
          scaleHeight = doc.getElementById("scaleHeight"),
          trackWidth = doc.getElementById("trackWidth"),
          trackHeight = doc.getElementById("trackHeight");
        if (tank.scalePosition === "far") {
          scaleWidth.innerHTML = window
            .getComputedStyle(tank.getElementsByClassName("smart-scale")[1])
            .getPropertyValue("width");
          scaleHeight.innerHTML = window
            .getComputedStyle(tank.getElementsByClassName("smart-scale")[1])
            .getPropertyValue("height");
        } else {
          scaleWidth.innerHTML = window
            .getComputedStyle(tank.getElementsByClassName("smart-scale")[0])
            .getPropertyValue("width");
          scaleHeight.innerHTML = window
            .getComputedStyle(tank.getElementsByClassName("smart-scale")[0])
            .getPropertyValue("height");
        }
        trackWidth.innerHTML = window
          .getComputedStyle(tank.getElementsByClassName("smart-track")[0])
          .getPropertyValue("width");
        trackHeight.innerHTML = window
          .getComputedStyle(tank.getElementsByClassName("smart-track")[0])
          .getPropertyValue("height");
      };
      maxTwoMln.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.max = 2000000;
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      maxTwoThousand.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.max = 2000;
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      maxTwenty.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.max = 20;
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      minTwoMln.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.min = -2000000;
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      minTwoThousand.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.min = -2000;
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      minTwenty.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.min = -20;
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      horizontalOrientation.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.orientation = "horizontal";
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      verticalOrientation.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.orientation = "vertical";
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      scaleNear.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.scalePosition = "near";
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      scaleFar.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.scalePosition = "far";
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      scaleBoth.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.scalePosition = "both";
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      scaleNone.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.scalePosition = "none";
          setLog(tank);
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      const turnLabelsOn = document.getElementById("turnLabelsOn");
      const turnLabelsOff = document.getElementById("turnLabelsOff");
      turnLabelsOn.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.labelsVisibility = "all";
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
      turnLabelsOff.addEventListener("change", function(event) {
        const tank = document.getElementById("tank");
        if (event.detail.value) {
          tank.labelsVisibility = "none";
          const size = tank.getOptimalSize();
          tank.style.width = size.width + "px";
          tank.style.height = size.height + "px";
        }
      });
    });
  }
};
</script>

<style>
smart-tank {
  width: 250px;
  height: 400px;
}

html,
body {
  height: 800px;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
