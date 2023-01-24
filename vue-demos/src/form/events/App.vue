<template>
  <div class="vue-root">
    <div class="demo-description">
      This example shows how to handle onValueChanges and onStatusChanges events
      of the Reactive Form component.
    </div>
    <form id="profileForm"></form>
    <div id="log"></div>
    <div id="statusLog"></div>
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
            dataField: "textBoxValue",
            controlType: "text",
            label: "Text input",
            required: true
          },
          {
            dataField: "passwordBoxValue",
            controlType: "password",
            label: "Password input",
            required: true
          },
          {
            dataField: "nubmberBoxValue",
            controlType: "number",
            label: "Number input",
            required: true
          },
          {
            dataField: "dropdownValue",
            label: "Drop down list",
            required: true,
            controlType: "dropdownlist",
            controlOptions: {
              dataSource: [
                {
                  label: "Option 1",
                  value: "value1"
                },
                {
                  label: "Option 2",
                  value: "value2"
                },
                {
                  label: "Option 3",
                  value: "value3"
                }
              ]
            }
          },
          {
            controlType: "label",
            label: "Radio buttons:",
            rowHeight: "40px"
          },
          {
            dataField: "radiobuttonValue",
            controlType: "option",
            optionsLayout: "horizontal",
            options: [
              {
                label: "Option 1",
                value: "value1"
              },
              {
                label: "Option 2",
                value: "value2"
              },
              {
                label: "Option 3",
                value: "value3"
              }
            ]
          },
          {
            controlType: "label",
            label: "Boolean options / checkboxes:"
          },
          {
            dataField: "checkboxValue1",
            controlType: "boolean",
            label: "Checkbox 1"
          },
          {
            dataField: "checkboxValue2",
            controlType: "boolean",
            label: "Checkbox 2"
          },
          {
            dataField: "checkboxValue3",
            controlType: "boolean",
            label: "Checkbox 3"
          }
        ]
      });
      const sampleValue = {
        textBoxValue: "text box value",
        passwordBoxValue: "password box",
        nubmberBoxValue: 67.44,
        dropdownValue: "value3",
        radiobuttonValue: "value2",
        checkboxValue1: false,
        checkboxValue2: false,
        checkboxValue3: true
      };
      const log = document.getElementById("log"),
        statusLog = document.getElementById("statusLog");
      form.value = sampleValue;
      form.onValueChanges = function(value) {
        log.innerHTML = `<br/><br/>
<table>
<tr><td>textBoxValue</td><td>${value["textBoxValue"]}</td></tr>
<tr><td>passwordBoxValue</td><td>${value["passwordBoxValue"]}</td></tr>
<tr><td>nubmberBoxValue</td><td>${value["nubmberBoxValue"]}</td></tr>
<tr><td>dropdownValue</td><td>${value["dropdownValue"]}</td></tr>
<tr><td>radiobuttonValue</td><td>${value["radiobuttonValue"]}</td></tr>
<tr><td>checkboxValue1</td><td>${value["checkboxValue1"]}</td></tr>
<tr><td>checkboxValue2</td><td>${value["checkboxValue2"]}</td></tr>
<tr><td>checkboxValue3</td><td>${value["checkboxValue3"]}</td></tr>
</table>`;
      };
      form.onStatusChanges = function(value) {
        statusLog.innerHTML = `<br/><br/>
<table>
<tr><td>Form Control</td><td>State</td><td>Dirty</td><td>Untouched</td><td>Disabled</td></tr>
<tr><td>textBoxValue</td><td>${value["textBoxValue"]}</td><td>${value.state["textBoxValue"].dirty}</td><td>${value.state["textBoxValue"].untouched}</td><td>${value.state["textBoxValue"].disabled}</td></tr>
<tr><td>passwordBoxValue</td><td>${value["passwordBoxValue"]}</td><td>${value.state["passwordBoxValue"].dirty}</td><td>${value.state["passwordBoxValue"].untouched}</td><td>${value.state["passwordBoxValue"].disabled}</td></tr>
<tr><td>nubmberBoxValue</td><td>${value["nubmberBoxValue"]}</td><td>${value.state["nubmberBoxValue"].dirty}</td><td>${value.state["nubmberBoxValue"].untouched}</td><td>${value.state["nubmberBoxValue"].disabled}</td></tr>
<tr><td>dropdownValue</td><td>${value["dropdownValue"]}</td><td>${value.state["dropdownValue"].dirty}</td><td>${value.state["dropdownValue"].untouched}</td><td>${value.state["dropdownValue"].disabled}</td></tr>
<tr><td>radiobuttonValue</td><td>${value["radiobuttonValue"]}</td><td>${value.state["radiobuttonValue"].dirty}</td><td>${value.state["radiobuttonValue"].untouched}</td><td>${value.state["radiobuttonValue"].disabled}</td></tr>
<tr><td>checkboxValue1</td><td>${value["checkboxValue1"]}</td><td>${value.state["checkboxValue1"].dirty}</td><td>${value.state["checkboxValue1"].untouched}</td><td>${value.state["checkboxValue1"].disabled}</td></tr>
<tr><td>checkboxValue2</td><td>${value["checkboxValue2"]}</td><td>${value.state["checkboxValue2"].dirty}</td><td>${value.state["checkboxValue2"].untouched}</td><td>${value.state["checkboxValue2"].disabled}</td></tr>
<tr><td>checkboxValue3</td><td>${value["checkboxValue3"]}</td><td>${value.state["checkboxValue3"].dirty}</td><td>${value.state["checkboxValue3"].untouched}</td><td>${value.state["checkboxValue3"].disabled}</td></tr>
</table>`;
      };
    });
  }
};
</script>

<style>
#profileForm {
  width: 400px;
}
</style>
