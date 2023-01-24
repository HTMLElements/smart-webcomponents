<template>
  <div class="vue-root">
    <div>
      <h2>Hotel Booking</h2>
    </div>
    <div id="mainContainer">
      <div>
        <h4>Name of the destination:</h4>
        <smart-text-box id="nameInput" placeholder="London"></smart-text-box>
      </div>
      <div id="travelChooser">
        <h4>Work travel ?</h4>
        <smart-radio-button>Yes</smart-radio-button>
        <smart-radio-button>No</smart-radio-button>
      </div>
      <div>
        <h4>Reservation dates:</h4>
        <smart-calendar
          id="datePicker"
          min="new Date()"
          months="2"
          selection-mode="many"
          view-sections="['header', 'footer']"
        ></smart-calendar>
      </div>
      <br />
      <div id="summary" class="smart-visibility-hidden"></div>
      <br />
      <div id="personPicker">
        <div>
          <h4>Rooms:</h4>
          <smart-combo-box id="roomPicker" class="hotelRoomPicker" selection-mode="one"></smart-combo-box>
        </div>
        <div>
          <h4>Adults:</h4>
          <smart-combo-box id="adultPicker" class="hotelRoomPicker" selection-mode="one"></smart-combo-box>
        </div>
        <div>
          <h4>Children:</h4>
          <smart-combo-box id="childrenPicker" class="hotelRoomPicker" selection-mode="one"></smart-combo-box>
        </div>
      </div>
      <br />
      <smart-button id="submitButton">Search</smart-button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.combobox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.getElementById("datePicker"),
        roomPicker = document.getElementById("roomPicker"),
        adultPicker = document.getElementById("adultPicker"),
        childrenPicker = document.getElementById("childrenPicker");
      roomPicker.dataSource = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30
      ];
      adultPicker.dataSource = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30
      ];
      childrenPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      calendar.addEventListener("change", function() {
        const summary = document.getElementById("summary");
        if (calendar.selectedDates) {
          summary.innerHTML =
            "Duration: " + calendar.selectedDates.length + " days";
        }
        summary.classList.remove("smart-visibility-hidden");
      });
    });
  }
};
</script>

<style>
h2 {
  font-size: 14px;
}
h4 {
  font-size: 13px;
}
h3 {
  text-align: center;
  -webkit-margin-before: 0.25em;
  -webkit-margin-after: 0.25em;
}

i {
  margin-bottom: 10px;
}
@media only screen and (max-width: 500px) {
  smart-calendar[months] .smart-calendar-month {
    width: 100%;
  }
  smart-calendar {
    width: 320px !important;
    height: 600px !important;
  }
}
</style>
