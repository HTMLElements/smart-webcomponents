<template>
  <div class="vue-root">
    <smart-chip avatar="../../../images/phonebook/mark.jpeg" value="Steven Buchanan" close-button></smart-chip>
    <smart-chip avatar="../../../images/phonebook/michael.png" value="Andrew Fuller" close-button></smart-chip>
    <smart-chip avatar="../../../images/phonebook/margaret.png" value="Nancy Davolio" close-button></smart-chip>
    <div id="eventLog">
      <h1>Events</h1>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const chips = document.getElementsByTagName("smart-chip"),
        evetLog = document.getElementById("eventLog");
      for (let i = 0; i < chips.length; i++) {
        const chip = chips[i];
        chip.addEventListener("click", function() {
          const chip = this;
          evetLog.innerHTML =
            evetLog.innerHTML +
            "clicked <b>" +
            chip.value +
            "</b>'s chip<br />";
        });
        chip.addEventListener("close", function() {
          evetLog.innerHTML =
            evetLog.innerHTML +
            "removed <b>" +
            chip.value +
            "</b>'s chip<br />";
        });
      }
    });
  }
};
</script>

<style>
#eventLog {
  position: absolute;
  left: 20px;
  top: 50px;
}
</style>
