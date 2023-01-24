<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Grid Cells Editing Validation</h1>The 'validationRules' property determines the validation rules of the
      column values. The available set of rules are: 'min', 'max', 'minLength',
      'maxLength', 'minDate', 'maxDate', 'null', 'email', 'required', 'requiredTrue'
      and 'pattern'. A cell editor is active until a valid value is entered by
      the user. In this demo, 'First Name', 'Last Name' and 'Product Name' are
      with 'required' and 'minLength' validation rules. The 'Quantity' and 'Unit
      Price' columns are with 'min' and 'max' set to '1' and '20'. validation
      rules.
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(100),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "productName: string",
                  "available: bool",
                  "quantity: number",
                  "price: number",
                  "total: number"
                ]
              }),
              editing: {
                enabled: true,
                mode: "cell"
              },
              selection: {
                enabled: true,
                allowCellSelection: true,
                allowRowHeaderSelection: true,
                allowColumnHeaderSelection: true,
                mode: "extended"
              },
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  validationRules: [
                    {
                      type: "required"
                    },
                    {
                      type: "minLength",
                      value: 5
                    }
                  ]
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  validationRules: [
                    {
                      type: "required"
                    },
                    {
                      type: "minLength",
                      value: 5
                    }
                  ]
                },
                {
                  label: "Product",
                  dataField: "productName",
                  validationRules: [
                    {
                      type: "required"
                    },
                    {
                      type: "minLength",
                      value: 5
                    }
                  ]
                },
                {
                  label: "Available",
                  dataField: "available",
                  template: "checkBox",
                  editor: "checkBox",
                  validationRules: [
                    {
                      type: "requiredTrue"
                    }
                  ]
                },
                {
                  label: "Quantity",
                  dataField: "quantity",
                  editor: "numberInput",
                  validationRules: [
                    {
                      type: "max",
                      value: 20
                    },
                    {
                      type: "min",
                      value: 1
                    }
                  ]
                },
                {
                  label: "Unit Price",
                  dataField: "price",
                  editor: "numberInput",
                  cellsFormat: "c2",
                  validationRules: [
                    {
                      type: "max",
                      value: 20
                    },
                    {
                      type: "min",
                      value: 1
                    }
                  ]
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
</style>
