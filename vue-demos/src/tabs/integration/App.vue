<template>
  <div class="vue-root">
    <smart-tabs selected-index="1">
      <smart-tab-item label="Gauge">
        <smart-gauge
          analog-display-type="fill"
          digital-display
          start-angle="-30"
          end-angle="210"
          min="0"
          max="100"
          value="30"
        ></smart-gauge>
      </smart-tab-item>
      <smart-tab-item label="ListBox">
        <smart-list-box>
          <smart-list-items-group label="Swedish Cars">
            <smart-list-item selected value="volvo">Volvo</smart-list-item>
            <smart-list-item value="saab">Saab</smart-list-item>
            <smart-list-item value="scania">Scania</smart-list-item>
          </smart-list-items-group>
          <smart-list-items-group label="German Cars">
            <smart-list-item value="mercedes">Mercedes</smart-list-item>
            <smart-list-item value="vw">VW</smart-list-item>
            <smart-list-item value="audi">Audi</smart-list-item>
            <smart-list-item value="porsche">Porsche</smart-list-item>
          </smart-list-items-group>
          <smart-list-items-group label="Japanese Cars">
            <smart-list-item value="mazda">Mazda</smart-list-item>
            <smart-list-item value="honda">Honda</smart-list-item>
            <smart-list-item value="infinity">Infinity</smart-list-item>
            <smart-list-item value="mitsubishi">Mitsubishi</smart-list-item>
            <smart-list-item value="toyota">Toyota</smart-list-item>
          </smart-list-items-group>
        </smart-list-box>
      </smart-tab-item>
      <smart-tab-item label="Tank">
        <smart-tank id="tank" orientation="vertical" value="90"></smart-tank>
      </smart-tab-item>
      <smart-tab-item label="SwitchButton">
        <smart-switch-button checked></smart-switch-button>
        <br />
        <smart-switch-button></smart-switch-button>
      </smart-tab-item>
    </smart-tabs>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.switchbutton.js";
import "smart-webcomponents/source/modules/smart.tabs.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-tabs {
  width: 100%;
  height: 400px;
}

smart-gauge,
smart-list-box,
smart-tank {
  width: 100%;
  height: 100%;
}
</style>
