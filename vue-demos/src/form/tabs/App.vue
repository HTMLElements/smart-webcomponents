<template>
  <div class="vue-root">
    <div class="demo-description">
      Form supports Tabs rendering. It is achieved by setting the FormGroup's
      "viewMode" property to "tabs". By doing that, the FormGroup's children
      will be rendered as Tabs.
    </div>
    <form id="profileForm"></form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.form.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const form = new window.Smart.Form("#profileForm", {
        viewMode: "tabs",
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
              }
            ]
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
          company: "N/A"
        },
        address: {
          street: "1st Ave SW",
          city: "San Antonio",
          state: "Texas",
          zip: "78209"
        }
      };
    });
  }
};
</script>

<style>
</style>
