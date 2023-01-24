<template>
  <div class="vue-root">
    <div class="demo-description">
      This page shows how to add custom HTML content before and after the form
      controls.
    </div>
    <br />
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

export default {
  name: "app",
  setup() {
    onMounted(() => {
      new window.Smart.Form("#profileForm", {
        showSummary: false,
        showColonAfterLabel: true,
        controls: [
          {
            controlType: "group",
            label: "Customer Profile",
            dataField: "profile",
            labelPosition: "left",
            controls: [
              {
                label: "Photo",
                template:
                  '<div style=" overflow: hidden;"><img src="../../../images/phonebook/maya.png"/></div>',
                controlType: "template"
              },
              {
                dataField: "userName",
                controlType: "input",
                label: "Username",
                placeholder: "Username",
                cssClass: "underlined",
                prepend: "@",
                append: '<img width=30 src="../../../images/avatar.png"/>'
              },
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
                dataField: "email",
                controlType: "input",
                label: "Email",
                placeholder: "Enter e-mail",
                cssClass: "underlined",
                append: "@example.com"
              },
              {
                dataField: "url",
                controlType: "input",
                label: "Your vanity URL",
                placeholder: "url",
                cssClass: "underlined",
                prepend: "https://example.com/users/",
                append: '<img width=30 src="../../../images/earth.png"/>'
              },
              {
                dataField: "tax",
                controlType: "input",
                label: "Tax",
                placeholder: "",
                cssClass: "underlined",
                prepend: "$",
                append: ".00"
              },
              {
                dataField: "creaditCard",
                controlType: "mask",
                label: "Credit card number",
                placeholder: "Credit card",
                cssClass: "underlined",
                controlOptions: {
                  mask: "#### - #### - #### - ####"
                }
              },
              {
                label: "Address",
                columns: 2,
                dataField: "address",
                controlType: "group",
                controls: [
                  {
                    dataField: "company",
                    controlType: "input",
                    label: "Company",
                    placeholder: "Company name",
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
                  },
                  {
                    dataField: "zip",
                    controlType: "input",
                    placeholder: "Zip",
                    cssClass: "underlined",
                    label: "Zip code"
                  },
                  {
                    dataField: "phone",
                    controlType: "mask",
                    placeholder: "Phone",
                    cssClass: "underlined",
                    label: "Phone",
                    controlOptions: {
                      mask: "+1 (###) ### - ####"
                    }
                  }
                ]
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
    });
  }
};
</script>

<style>
</style>
