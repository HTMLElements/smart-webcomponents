<template>
  <div class="vue-root">
    mechanicalAction: 'switchUntilReleased'
    <smart-tank
      id="smartTank1"
      orientation="vertical"
      min="0"
      max="100"
      value="10"
      mechanical-action="switchUntilReleased"
    ></smart-tank>Value:
    <span id="smartTank1Value">10.00</span>
    <br />
    <br />mechanicalAction: 'switchWhenReleased'
    <smart-tank
      id="smartTank2"
      orientation="vertical"
      min="0"
      max="100"
      value="20"
      mechanical-action="switchWhenReleased"
    ></smart-tank>Value:
    <span id="smartTank2Value">20.00</span>
    <br />
    <br />mechanicalAction: 'switchWhileDragging'
    <smart-tank
      id="smartTank3"
      orientation="vertical"
      min="0"
      max="100"
      value="30"
      mechanical-action="switchWhileDragging"
    ></smart-tank>Value:
    <span id="smartTank3Value">30.00</span>
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
      const tanks = ["smartTank1", "smartTank2", "smartTank3"];
      for (let i = 0; i < tanks.length; i++) {
        const tank = document.getElementById(tanks[i]);
        tank.addEventListener("change", function(event) {
          const value = event.detail.value,
            id = this.id;
          document.getElementById(id + "Value").innerHTML = parseFloat(
            value
          ).toFixed(2);
        });
      }
    });
  }
};
</script>

<style>
#smartTank1,
#smartTank2,
#smartTank3 {
  width: 180px;
  height: 180px;
  margin-left: 50px;
}
</style>
