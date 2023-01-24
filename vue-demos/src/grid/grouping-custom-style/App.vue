<template>
  <div class="vue-root">
    <div class="header">
      <div class="bar">
        <div class="item">
          <div class="icon fa-bars"></div>
          <div class="label">Business Tasks</div>
        </div>
        <div class="item">
          <div class="icon fa-info-circle"></div>
          <div class="icon fa-bell"></div>
          <div class="icon fa-user"></div>
        </div>
      </div>
      <div class="items"></div>
    </div>
    <div class="filter-bar">
      <smart-input
        class="item"
        drop-down-button-position="right"
        value="All tasks"
        id="filterInput"
      ></smart-input>
      <div id="applyFilter" class="item icon fa-filter"></div>
      <smart-button class="item primary">ADD TASK</smart-button>
    </div>
    <smart-menu id="menu" mode="dropDown">
      <smart-menu-item data-id="Notification" label="<i class='icon fa-bell'></i>Notify me"></smart-menu-item>
      <smart-menu-item data-id="Remove" label="<i class='icon fa-bell-slash'></i>Unsubscribe"></smart-menu-item>
    </smart-menu>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const itemTemplate = document.createElement("template");
      itemTemplate.id = "itemTemplate";
      itemTemplate.innerHTML = `<div class="item">
        <div class="count">{{count}}</div>
        <div class="label">{{label}}</div>
      </div>`;
      document.body.appendChild(itemTemplate);

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
                showColumnHeaderLines: false,
                showRowLines: false
              },
              behavior: {
                allowColumnReorder: true
              },
              grouping: {
                enabled: true,
                renderMode: "basic",
                groupBar: {
                  visible: true
                },
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
                  const cell = row.getCell("Notification");
                  if (cell.value) {
                    menu.items[0].disabled = true;
                    menu.items[1].disabled = false;
                  } else {
                    menu.items[0].disabled = false;
                    menu.items[1].disabled = true;
                  }
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
                groupBy: ["Name"],
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
                  dataField: "Status",
                  allowHide: false,
                  // Custom Cells Value Formatting.
                  formatFunction(settings) {
                    if (settings.value === "Done") {
                      settings.template =
                        '<div class="status"><span class="icon fa-circle-o far"></span><span>Done</span></div>';
                    } else {
                      settings.template =
                        '<div class="status"><span class="icon fa-circle-o-notch far"></span><span>In Progress</span></div>';
                    }
                  }
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
                },
                {
                  label: "",
                  dataField: "Notification",
                  allowHide: false,
                  allowGroup: false,
                  width: 40,
                  // Custom Cells Value Formatting.
                  formatFunction(settings) {
                    if (settings.value) {
                      settings.template = '<span class="icon fa-bell"></span>';
                    } else {
                      settings.template = "";
                    }
                  }
                }
              ]
            };
          }
        }
      );

      const grid = document.querySelector("smart-grid");
      const items = document.querySelector(".header .items");
      const filterInput = document.querySelector("#filterInput");
      const menu = document.querySelector("#menu");
      // renders the header.
      const renderHeader = () => {
        items.innerHTML = "";
        const data = grid.dataSource.toArray();
        const itemsData = [
          {
            label: "Total",
            value: data.length
          },
          {
            label: "Done",
            value: data.filter(item => item.Status === "Done").length
          },
          {
            label: "In Progress",
            value: data.filter(item => item.Status === "In Progress").length
          },
          {
            label: "Notifications",
            value: data.filter(item => item.Notification === true).length
          }
        ];
        filterInput.dataSource = ["All tasks"].concat(
          data.map(item => {
            return item.Name;
          })
        );
        for (let i = 0; i < itemsData.length; i++) {
          const item = itemsData[i];
          const element = document.importNode(itemTemplate.content, true);
          const content = element.firstElementChild;
          content.innerHTML = content.innerHTML
            .replace(/{{count}}/, item.value.toString())
            .replace(/{{label}}/, item.label);
          items.appendChild(element);
        }
      };
      filterInput.addEventListener("change", function() {
        const value = filterInput.value;
        if (value === "All tasks" || value === "") {
          grid.filtering.filter = [];
        } else {
          grid.filtering.filter = [["Name", 'contains "' + value + '"']];
        }
      });

      menu.addEventListener("itemClick", function(event) {
        const rowId = menu.getAttribute("data-row-id");
        let row = null;
        for (let i = 0; i < grid.rows.length; i++) {
          if (grid.rows[i].id == rowId) {
            row = grid.rows[i];
          }
        }
        if (row) {
          const cell = row.getCell("Notification");
          // Sets or unsets the 'Notification'.
          if (event.detail.item.getAttribute("data-id") === "Notification") {
            cell.value = true;
          } else {
            cell.value = false;
          }
          renderHeader();
        }
      });
      grid.whenRendered(() => {
        renderHeader();
        const rows = grid.getVisibleRows();
        rows[0].expand();
      });
    });
  }
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");
smart-grid {
  width: 100%;
  --smart-surface: #fff;
  --smart-border: #eeeeee;
  --smart-grid-column-font-size: 12px;
  --smart-grid-cell-horizontal-border: transparent;
  --smart-grid-column-font-weight: 500;
}

smart-breadcrumb {
  --smart-background: #eeeeee;
  --smart-border-radius: 10px;
}
smart-breadcrumb .smart-breadcrumb-item {
  height: 25px;
  padding: 3px 9px;
}
smart-grid smart-grid-column {
  color: #939394;
  --smart-border: transparent;
}
smart-grid smart-grid-cell[header] {
  font-size: 12px;
  color: #939394;
}

smart-grid smart-grid-cell[header] span[summary] {
  display: none;
}
smart-grid-cell .status {
  display: flex;
}
smart-grid-cell .status .fa-circle-o {
  color: #2ed58b;
  font-size: 16px;
}
smart-grid-cell .status .fa-circle-o-notch {
  color: #ff3b6a;
  font-size: 14px;
}
smart-grid-cell[freeze],
smart-grid-column[freeze] {
  background: transparent;
}
.header {
  height: 220px;
  background: #242528;
  color: #9fa0a1;
}
.icon {
  font-family: "FontAwesome";
  width: 32px;
  height: 100%;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
}
.header .bar .label {
  font-size: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.header .bar {
  background: #1c1d1f;
  height: 40px;
  border-bottom: 1px solid #2d2d2f;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.header .bar .item {
  display: flex;
}
.header .items {
  display: flex;
  font-size: 32px;
  align-items: center;
  height: calc(100% - 40px);
  justify-content: space-around;
}
.header .items .item {
}
.header .items .item .count {
  display: flex;
  justify-content: center;
}
.header .items .item .label {
  font-size: 16px;
  text-transform: lower;
}

.filter-bar {
  height: 40px;
  display: flex;
  justify-content: flex-end;
}
.filter-bar .item {
  height: 100%;
  margin-left: 10px;
  width: auto;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.filter-bar .item#applyFilter {
  cursor: pointer;
}

.filter-bar .item#filterInput {
  border: none;
}
.filter-bar .item#filterInput .smart-drop-down-button {
  background: transparent;
  border-left: none;
  color: inherit;
}

#menu {
  height: auto;
  width: 150px;
}
</style>
