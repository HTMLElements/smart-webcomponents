<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Column Template in smartGrid</h1>
      <p>
        This example shows how to customize cells rendering in three different
        ways. The 'Photo' column uses the 'formatFunction' approach returning HTML.
        The 'Notes' column uses HTML Template Element. The 'Phone' column is with
        Template string rendered directly into the Grid cell.
      </p>
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
      const notesTemplate = document.createElement("template");
      notesTemplate.id = "notesTemplate";
      notesTemplate.innerHTML = `<button
        data-id="{{id}}"
        onclick="alert('{{value}}');"
        class="template-button"
        style="width: 100%; height: 100%; overflow:hidden; text-overflow: ellipsis;"
      >Details</button>`;
      document.body.appendChild(notesTemplate);

      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              layout: {
                rowHeight: 50
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.getEmployees(),
                dataFields: [
                  "id: number",
                  "firstName: string",
                  "lastName: string",
                  "title: string",
                  "notes: string",
                  "city: string",
                  "country: string",
                  "homePhone: string"
                ]
              }),
              columns: [
                {
                  label: "Photo",
                  dataField: "Photo",
                  width: 50,
                  cellsVerticalAlign: "middle",
                  verticalAlign: "middle",
                  align: "center",
                  cellsAlign: "center",
                  formatFunction(settings) {
                    settings.template =
                      '<img width="32" src="' +
                      "../../../images/phonebook/" +
                      settings.row.data.firstName.toLowerCase() +
                      '.png"/>';
                  }
                },
                {
                  label: "First Name",
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  dataField: "lastName"
                },
                {
                  label: "Title",
                  dataField: "title",
                  width: 150
                },
                {
                  label: "Notes",
                  dataField: "notes",
                  align: "center",
                  cellsAlign: "center",
                  width: 70,
                  template: "#notesTemplate"
                },
                {
                  label: "City",
                  dataField: "city"
                },
                {
                  label: "Country",
                  width: 70,
                  cellsAlign: "center",
                  align: "center",
                  dataField: "country"
                },
                {
                  label: "Phone",
                  dataField: "homePhone",
                  template: '<a href="#{{value}}">{{value}}</a>'
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
smart-grid {
  height: auto;
}
.template-button {
  background: transparent;
  border: none;
  color: var(--smart-secondary);
  outline: none;
  cursor: pointer;
  display: flex;
}
.template-button:hover {
  color: var(--smart-success);
}
.template-button:active {
  color: var(--smart-primary);
}
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
