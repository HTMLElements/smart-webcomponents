<template>
  <div class="vue-root">
    <smart-date-time-picker
      class="demoDateTimePickerWide"
      calendar-button
      enable-mouse-wheel-action
      drop-down-position="center-bottom"
      spin-buttons
      spin-buttons-position="left"
      locale="en"
    ></smart-date-time-picker>
    <div class="options">
      <div class="option">Locales</div>
      <div class="option">
        <smart-drop-down-list id="chooseLocale">
          <smart-list-item value="bg">Bulgarian</smart-list-item>
          <smart-list-item selected value="en">English</smart-list-item>
          <smart-list-item value="fr">French</smart-list-item>
          <smart-list-item value="de">German</smart-list-item>
          <smart-list-item value="it">Italian</smart-list-item>
          <smart-list-item value="ja">Japanese</smart-list-item>
          <smart-list-item value="es">Spanish</smart-list-item>
        </smart-drop-down-list>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dateTimePicker = document.getElementsByTagName(
        "smart-date-time-picker"
      )[0];
      dateTimePicker.messages.bg = {
        now: "Сега",
        dateTabLabel: "ДАТА",
        timeTabLabel: "ВРЕМЕ"
      };
      dateTimePicker.messages.fr = {
        now: "À présent",
        dateTabLabel: "DATE",
        timeTabLabel: "TEMPS"
      };
      dateTimePicker.messages.de = {
        now: "Jetzt",
        dateTabLabel: "DATUM",
        timeTabLabel: "ZEIT"
      };
      dateTimePicker.messages.it = {
        now: "Adesso",
        dateTabLabel: "DATA",
        timeTabLabel: "TEMPO"
      };
      dateTimePicker.messages.ja = {
        now: "今",
        dateTabLabel: "日付",
        timeTabLabel: "時間"
      };
      dateTimePicker.messages.es = {
        now: "Ahora",
        dateTabLabel: "FECHA",
        timeTabLabel: "HORA"
      };
      document
        .getElementById("chooseLocale")
        .addEventListener("change", function(event) {
          dateTimePicker.locale = event.detail.value;
        });
    });
  }
};
</script>

<style>
#chooseLocaleContainer {
  margin-top: 250px;
}
@media only screen and (max-width: 500px) {
  .smart-drop-down.smart-date-time-drop-down {
    left: 70%;
  }
}
</style>
