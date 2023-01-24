<template>
  <div class="vue-root">
    <div class="demo-description">
      In this example is demonstrated how to dynamically change Form options
      like changing the FormGroup columns count, making the Form readonly, changing
      the labels location, displaying a ':' after the form labels.
    </div>
    <br />
    <form id="profileForm"></form>
    <div class="options">
      <div class="option">
        <label>Labels Location:</label>
        <br />
        <smart-radio-button checked id="topLabelLocation">Top</smart-radio-button>
        <br />
        <smart-radio-button id="leftLabelLocation">Left</smart-radio-button>
      </div>
      <div class="option">
        <br />
        <label>Columns Count:</label>
        <br />
        <smart-drop-down-list id="columns" selected-indexes="[0]" data-source="[1, 2]"></smart-drop-down-list>
      </div>
      <div class="option">
        <br />
        <smart-check-box id="readonly">Readonly</smart-check-box>
        <br />
        <smart-check-box id="showColonAfterLabel">Show ':' after label</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.form.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const form = new window.Smart.Form("#profileForm", {
        controls: [
          {
            controlType: "group",
            label: "Photo",
            controls: [
              {
                template:
                  '<div style=" overflow: hidden;"><img width="90" src="../../../images/people/john.png"/></div>',
                controlType: "template"
              }
            ]
          },
          {
            controlType: "group",
            label: "Profile",
            dataField: "profile",
            labelPosition: "top",
            controls: [
              {
                dataField: "firstName",
                controlType: "input",
                label: "First name",
                required: true,
                info: "Enter first name",
                placeholder: "First name",
                cssClass: "outlined",
                infoPosition: "right"
              },
              {
                dataField: "lastName",
                controlType: "input",
                label: "Last name",
                placeholder: "Last name",
                required: true,
                cssClass: "outlined",
                info: "Enter last name"
              },
              {
                dataField: "birthDate",
                controlType: "date",
                label: "Birth Date",
                placeholder: "Birth date",
                cssClass: "outlined"
              },
              {
                dataField: "company",
                controlType: "input",
                label: "Company",
                placeholder: "Company name",
                cssClass: "outlined",
                required: false
              },
              {
                label: "Address",
                dataField: "address",
                controlType: "group",
                controls: [
                  {
                    dataField: "street",
                    controlType: "input",
                    label: "Street",
                    placeholder: "Address",
                    required: true,
                    cssClass: "outlined"
                  },
                  {
                    dataField: "city",
                    controlType: "input",
                    label: "City",
                    placeholder: "City",
                    cssClass: "outlined",
                    required: true
                  },
                  {
                    dataField: "state",
                    controlType: "dropdownlist",
                    label: "State",
                    required: true,
                    cssClass: "outlined",
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
                  },
                  {
                    dataField: "zip",
                    controlType: "input",
                    placeholder: "Zip",
                    cssClass: "outlined",
                    label: "Zip code",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            controlType: "group",
            columns: 2,
            controls: [
              {
                controlType: "button",
                action: "submit",
                label: "Sign up",
                cssClass: "success",
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
      form.value = {
        profile: {
          firstName: "John",
          lastName: "Scott",
          birthDate: "1985-05-15",
          company: "N/A",
          address: {
            street: "1st Ave SW",
            city: "San Antonio",
            state: "Texas",
            zip: "78209"
          }
        }
      };
      const leftLabelLocation = document.getElementById("leftLabelLocation"),
        topLabelLocation = document.getElementById("topLabelLocation"),
        columnsDropDownList = document.getElementById("columns");
      const applyLabelPosition = () => {
        setTimeout(() => {
          if (leftLabelLocation.checked) {
            form.labelPosition = "left";
          } else {
            form.labelPosition = "top";
          }
        });
      };
      topLabelLocation.onchange = applyLabelPosition;
      leftLabelLocation.onchange = applyLabelPosition;
      columnsDropDownList.onchange = () => {
        const columns = columnsDropDownList.selectedIndexes[0] + 1;
        form.profile.columns = columns;
        form.profile.address.columns = columns;
        form.profile.address.columnSpan = columns;
      };
    });
  }
};
</script>

<style>
</style>
