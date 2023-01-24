<template>
<div class="vue-root">
<smart-window id="popupWindow" label="Window Editor">
<smart-editor id="editor">
<h3>
Data about the planets of our solar system (Planetary facts taken from Nasa's

Planetary Fact Sheet - Metric
</h3>
<p>
<table>
<thead>
<tr>
<td colspan="2"></td>
<th scope="col">Name</th>
<th scope="col">Mass (10<sup>24</sup>kg)</th>
<th scope="col">Diameter (km)</th>
<th scope="col">Density (kg/m<sup>3</sup>)</th>
<th scope="col">Gravity (m/s<sup>2</sup>)</th>
<th scope="col">Length of day (hours)</th>
<th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
<th scope="col">Mean temperature (°C)</th>
<th scope="col">Number of moons</th>
<th scope="col">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<th colspan="2" rowspan="4" scope="rowgroup">Terrestial planets</th>
<th scope="row">Mercury</th>
<td>0.330</td>
<td>4,879</td>
<td>5427</td>
<td>3.7</td>
<td>4222.6</td>
<td>57.9</td>
<td>167</td>
<td>0</td>
<td>Closest to the Sun</td>
</tr>
<tr>
<th scope="row">Venus</th>
<td>4.87</td>
<td>12,104</td>
<td>5243</td>
<td>8.9</td>
<td>2802.0</td>
<td>108.2</td>
<td>464</td>
<td>0</td>
<td></td>
</tr>
<tr>
<th scope="row">Earth</th>
<td>5.97</td>
<td>12,756</td>
<td>5514</td>
<td>9.8</td>
<td>24.0</td>
<td>149.6</td>
<td>15</td>
<td>1</td>
<td>Our world</td>
</tr>
<tr>
<th scope="row">Mars</th>
<td>0.642</td>
<td>6,792</td>
<td>3933</td>
<td>3.7</td>
<td>24.7</td>
<td>227.9</td>
<td>-65</td>
<td>2</td>
<td>The red planet</td>
</tr>
<tr>
<th rowspan="4" scope="rowgroup">Jovian planets</th>
<th rowspan="2" scope="rowgroup">Gas giants</th>
<th scope="row">Jupiter</th>
<td>1898</td>
<td>142,984</td>
<td>1326</td>
<td>23.1</td>
<td>9.9</td>
<td>778.6</td>
<td>-110</td>
<td>67</td>
<td>The largest planet</td>
</tr>
<tr>
<th scope="row">Saturn</th>
<td>568</td>
<td>120,536</td>
<td>687</td>
<td>9.0</td>
<td>10.7</td>
<td>1433.5</td>
<td>-140</td>
<td>62</td>
<td></td>
</tr>
<tr>
<th rowspan="2" scope="rowgroup">Ice giants</th>
<th scope="row">Uranus</th>
<td>86.8</td>
<td>51,118</td>
<td>1271</td>
<td>8.7</td>
<td>17.2</td>
<td>2872.5</td>
<td>-195</td>
<td>27</td>
<td></td>
</tr>
<tr>
<th scope="row">Neptune</th>
<td>102</td>
<td>49,528</td>
<td>1638</td>
<td>11.0</td>
<td>16.1</td>
<td>4495.1</td>
<td>-200</td>
<td>14</td>
<td></td>
</tr>
<tr>
<th colspan="2" scope="rowgroup">Dwarf planets</th>
<th scope="row">Pluto</th>
<td>0.0146</td>
<td>2,370</td>
<td>2095</td>
<td>0.7</td>
<td>153.3</td>
<td>5906.4</td>
<td>-225</td>
<td>5</td>
<td>Declassified as a planet in 2006, but this remains controversial</td>
</tr>
</tbody>
</table>
</p>
</smart-editor>
</smart-window>
<div class="options">
<div class="description">
<h4>Description</h4>
The following demo showcases most of the Smart Editor Methods. Clicking
on a button below will call the according method.</div>
<div class="option">
<smart-button id="openWindow">Toggle Window</smart-button>
</div>
</div>
</div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.window.js";
import "smart-webcomponents/source/modules/smart.editor.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const popupWindow = document.getElementById("popupWindow");

      popupWindow.whenRendered(() => popupWindow.open());

      document
        .getElementById("openWindow")
        .addEventListener("click", function () {
          popupWindow.opened ? popupWindow.close() : popupWindow.open();
        });
    });
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.smart-editor {
  width: 100%;
  height: 100%;
}

#popupWindow {
  --smart-window-default-width: 60%;
  --smart-window-default-height: 60%;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}

@media (max-width: 750px) {
  .options {
    position: relative;
    top: 30px;
    width: 240px;
    margin: 0 auto;
  }
}

#app,
.vue-root {
  width: 100%;
  height: 100%;
}
</style>
