<template>
  <div class="vue-root">
    <h3>מקום עבודתי</h3>
    <smart-sortable
      id="sortable"
      mode="horizontal"
      drag-mode="item"
      handle-position="right"
      right-to-left
    >
      <div id="square1" class="square">
        <i class="material-icons">person</i>
        <div>עובדים</div>
      </div>
      <div id="square2" class="square">
        <i class="material-icons">work_outline</i>
        <div>פרויקטים</div>
      </div>
      <div id="square3" class="square">
        <i class="material-icons">attach_money</i>
        <div>כספים</div>
      </div>
      <div id="square4" class="square">
        <i class="material-icons">contact_mail</i>
        <div>שותפויות</div>
      </div>
      <div id="square5" class="square">
        <i class="material-icons">speaker_phone</i>
        <div>קישוריות</div>
      </div>
      <div id="square6" class="square">
        <i class="material-icons">location_on</i>
        <div>נסיעות</div>
      </div>
    </smart-sortable>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.sortable.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
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
  font-size: 24px;
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

.square {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: rebeccapurple;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 25px;
  font-family: var(--smart-font-family);
}

#square1 {
  background-color: #25a0da;
}

#square2 {
  background-color: #309b46;
}

#square3 {
  background-color: #8ebc00;
}

#square4 {
  background-color: #ff7515;
}

#square5 {
  background-color: #ffae00;
}

#square6 {
  background-color: #c07af1;
}
</style>
