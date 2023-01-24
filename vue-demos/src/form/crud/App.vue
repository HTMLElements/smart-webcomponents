<template>
  <div class="vue-root">
    <form id="profileForm"></form>
    <div class="options">
      <div class="option">
        <smart-button id="addBtn">Add Form Control</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertBtn">Insert After 'First Name'</smart-button>
      </div>
      <div class="option">
        <smart-button disabled id="removeBtn">Remove Form Control</smart-button>
      </div>
      <div class="option">
        <smart-button id="hideBtn">Hide 'City'</smart-button>
      </div>
      <div class="option">
        <smart-button disabled id="showBtn">Show 'City'</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.form.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const form = new window.Smart.Form("#profileForm", {
        showSummary: false,
        showColonAfterLabel: true,
        controls: [
          {
            controlType: "group",
            label: "Customer Profile",
            dataField: "profile",
            controls: [
              {
                dataField: "firstName",
                controlType: "input",
                label: "First name",
                placeholder: "First name",
                cssClass: "underlined"
              },
              {
                dataField: "lastName",
                controlType: "input",
                label: "Last name",
                placeholder: "Last name",
                cssClass: "underlined"
              },
              {
                dataField: "address",
                controlType: "input",
                label: "Address",
                placeholder: "Address",
                cssClass: "underlined"
              },
              {
                dataField: "city",
                controlType: "input",
                label: "City",
                placeholder: "City",
                cssClass: "underlined"
              },
              {
                dataField: "state",
                controlType: "dropdownlist",
                label: "State",
                cssClass: "underlined",
                controlOptions: {
                  placeholder: "State",
                  dataSource: [
                    "California",
                    "New York",
                    "Oregon",
                    "Illinois",
                    "Texas"
                  ]
                }
              }
            ]
          },
          {
            controlType: "boolean",
            dataField: "acceptTerms",
            label: "Agree to terms and conditions"
          },
          {
            controlType: "group",
            columns: 2,
            controls: [
              {
                controlType: "button",
                action: "submit",
                label: "Submit",
                cssClass: "primary",
                align: "right"
              },
              {
                controlType: "button",
                action: "reset",
                label: "Cancel",
                align: "left"
              }
            ]
          }
        ]
      });
      const addBtn = document.getElementById("addBtn");
      const removeBtn = document.getElementById("removeBtn");
      const hideBtn = document.getElementById("hideBtn");
      const showBtn = document.getElementById("showBtn");
      const insertBtn = document.getElementById("insertBtn");
      addBtn.onclick = () => {
        form.profile.addControl({
          dataField: "zip",
          controlType: "input",
          placeholder: "Zip",
          cssClass: "underlined",
          label: "Zip code"
        });
        addBtn.disabled = true;
        removeBtn.disabled = false;
      };
      insertBtn.onclick = () => {
        form.profile.insertControl(1, {
          dataField: "middleName",
          controlType: "input",
          label: "Middle name",
          placeholder: "Middle name",
          cssClass: "underlined"
        });
        insertBtn.disabled = true;
      };
      removeBtn.onclick = () => {
        form.profile.removeControl("zip");
        removeBtn.disabled = true;
        addBtn.disabled = false;
      };
      hideBtn.onclick = () => {
        form.profile.city.hide();
        showBtn.disabled = false;
        hideBtn.disabled = true;
      };
      showBtn.onclick = () => {
        form.profile.city.show();
        showBtn.disabled = true;
        hideBtn.disabled = false;
      };
    });
  }
};
</script>

<style>
</style>
