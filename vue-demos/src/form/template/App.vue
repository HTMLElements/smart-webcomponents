<template>
  <div class="vue-root">
    <div class="demo-description">Reactive Form with Validation created from JSON object</div>
    <form id="profileForm"></form>
    <h3>Form Value:</h3>
    <div id="log"></div>
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
        controls: [
          {
            controlType: "group",
            columns: 2,
            label: "Employee",
            dataField: "employee",
            labelPosition: "left",
            controls: [
              {
                label: "Photo",
                template:
                  '<div style=" overflow: hidden;"><img width="125" src="../../../images/people/andrew.png"/></div>',
                controlType: "template"
              },
              {
                label: "Name",
                dataField: "name",
                controlType: "group",
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
                  }
                ]
              },
              {
                label: "Details",
                dataField: "details",
                controlType: "group",
                columnSpan: 2,
                controls: [
                  {
                    dataField: "company",
                    controlType: "input",
                    label: "Company",
                    placeholder: "Company name",
                    cssClass: "outlined",
                    required: false
                  },
                  {
                    dataField: "address",
                    controlType: "input",
                    label: "Address",
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
        employee: {
          name: {
            firstName: "John",
            lastName: "Scott"
          },
          details: {
            address: "1st Ave SW",
            company: "N/A",
            city: "San Antonio",
            state: "Texas",
            zip: "78209"
          }
        }
      };
      const log = document.getElementById("log");
      log.innerHTML = JSON.stringify(form.value);
      form.onValueChanges = function(value) {
        log.innerHTML = JSON.stringify(value);
      };
    });
  }
};
</script>

<style>
</style>
