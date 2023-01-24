<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Column Panel - DataGrid column UI</h1>
      <p>
        This example shows how to use the DataGrid column panel. Click on the
        Column button in the Grid header to open the column panel.
      </p>
    </div>
    <smart-grid id="grid"></smart-grid>
    <smart-menu id="menu" mode="dropDown">
      <smart-menu-item data-id="Notification" label="<i class='icon fa-bell'></i>Notify me"></smart-menu-item>
      <smart-menu-item data-id="Remove" label="<i class='icon fa-bell-slash'></i>Unsubscribe"></smart-menu-item>
    </smart-menu>
    <br />
    <br />
    <div id="log"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const Data = [
        {
          Name: "Task 1",
          Status: "Done",
          Column3: "Item 1.3",
          Column4: "Item 1.4",
          Column5: "Item 1.5",
          Notification: false
        },
        {
          Name: "Task 2",
          Status: "In Progress",
          Column3: "Item 2.3",
          Column4: "Item 2.4",
          Column5: "Item 2.5",
          Notification: false
        },
        {
          Name: "Task 3",
          Status: "Done",
          Column3: "Item 3.3",
          Column4: "Item 3.4",
          Column5: "Item 3.5",
          Notification: true
        },
        {
          Name: "Task 4",
          Status: "Done",
          Column3: "Item 4.3",
          Column4: "Item 4.4",
          Column5: "Item 4.5",
          Notification: false
        },
        {
          Name: "Task 5",
          Status: "Done",
          Column3: "Item 5.3",
          Column4: "Item 5.4",
          Column5: "Item 5.5",
          Notification: false
        }
      ];
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              appearance: {
                showColumnLines: false,
                showColumnHeaderLines: false
              },
              selection: {
                enabled: true
              },
              grouping: {
                enabled: true,
                groupIndent: 0,
                summaryRow: {
                  visible: false
                }
              },
              onCommand: function(args) {
                if (args.name === "commandColumnRowMenuCommand") {
                  const row = args.details;
                  const menu = document.getElementById("menu");
                  args.event.preventDefault();
                  menu.setAttribute("data-row-id", row.id);
                  menu.onItemClick = event => {
                    const detail = event.detail;
                    document.querySelector("#log").innerHTML =
                      detail.label + " is clicked";
                  };
                  menu.open(args.event.pageX - 150, args.event.pageY + 20);
                  args.handled = true;
                }
              },
              editing: {
                enabled: true,
                action: "none",
                commandColumn: {
                  visible: true,
                  dataSource: {
                    commandColumnEdit: {
                      visible: false
                    },
                    commandColumnDelete: {
                      visible: false
                    },
                    commandColumnMenu: {
                      visible: true
                    },
                    commandColumnRowMenu: {
                      visible: true
                    }
                  }
                }
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: Data,
                groupBy: [],
                dataFields: [
                  "Name: string",
                  "Status: string",
                  "Column3: string",
                  "Column4: string",
                  "Column5: string",
                  "Notification: bool"
                ]
              }),
              columns: [
                {
                  label: "Name",
                  dataField: "Name",
                  allowHide: false
                },
                {
                  label: "Status",
                  dataField: "Status"
                },
                {
                  label: "Column 3",
                  dataField: "Column3",
                  allowGroup: false
                },
                {
                  label: "Column 4",
                  dataField: "Column4",
                  allowGroup: false
                },
                {
                  label: "Column 5",
                  dataField: "Column5",
                  allowGroup: false
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
  width: 100%;
  height: auto;
}
smart-menu {
  height: auto !important;
}
body {
  height: 1000px;
}
</style>
