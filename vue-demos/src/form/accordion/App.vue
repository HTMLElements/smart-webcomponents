<template>
  <div class="vue-root">
    <div class="demo-description">
      Form supports Accordion rendering. It is achieved by setting the FormGroup's
      "viewMode" property to "accordion". By doing that, the FormGroup's children
      will be rendered as Accordion.
    </div>
    <form id="profileForm"></form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.form.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.validator.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      new window.Smart.Form("#profileForm", {
        label: "Employee Details",
        controls: [
          {
            controlType: "group",
            label: "Name",
            dataField: "name",
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
              }
            ]
          },
          {
            label: "Address",
            dataField: "address",
            columns: 3,
            columnSpan: 2,
            controlType: "group",
            controls: [
              {
                dataField: "street",
                controlType: "textarea",
                columnSpan: 3,
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
          },
          {
            viewMode: "accordion",
            controlType: "group",
            dataField: "Contact",
            label: "Contact Information",
            columnSpan: 2,
            controls: [
              {
                dataField: "WorkPhone",
                label: "Work Phone",
                required: true,
                placeholder: "Work Phone",
                cssClass: "outlined"
              },
              {
                dataField: "MobilePhone",
                required: true,
                label: "Mobile Phone",
                placeholder: "Mobile Phone",
                cssClass: "outlined"
              },
              {
                dataField: "Email",
                label: "Email",
                validationRules: [
                  {
                    type: "email",
                    message: "Please enter a valid email"
                  }
                ],
                placeholder: "Email",
                cssClass: "outlined"
              }
            ]
          },
          {
            controlType: "group",
            columns: 2,
            columnSpan: 2,
            controls: [
              {
                controlType: "button",
                action: "submit",
                label: "Submit",
                cssClass: "secondary",
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
    });
  }
};
</script>

<style>
</style>
