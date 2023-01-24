<template>
  <div class="vue-root">
    <div id="mainContainer">
      <div id="filterContainer">
        <div>
          <div id="label">Users</div>
          <div id="numberOfAppliedFiltersContainer">
            <div id="numberOfAppliedFilters" class="smart-visibility-hidden"></div>
          </div>
          <div>
            <smart-button id="filterIcon">
              <span class="material-icons">filter_list</span>
            </smart-button>
          </div>
        </div>
        <div id="filterRowsContainer"></div>
      </div>
      <smart-table id="table"></smart-table>
    </div>
    <smart-menu id="filterMenu" checkboxes checkable check-mode="checkbox, none" mode="dropDown">
      <smart-menu-item value="name">
        <span class="material-icons">filter_alt</span>Name
      </smart-menu-item>
      <smart-menu-item value="email">
        <span class="material-icons">filter_alt</span>Email
      </smart-menu-item>
      <smart-menu-item separator value="permission">
        <span class="material-icons">filter_alt</span>Permission
      </smart-menu-item>
      <smart-menu-item id="clearFilters" value="clearFilters" label="clearFiltersTemplate"></smart-menu-item>
    </smart-menu>
    <smart-menu id="removeMenu" mode="dropDown">
      <smart-menu-item>Remove access</smart-menu-item>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.menu.js";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const clearFiltersTemplate = document.createElement("template");
      clearFiltersTemplate.id = "clearFiltersTemplate";
      clearFiltersTemplate.innerHTML = `<smart-button class="primary">Clear filters</smart-button>`;
      document.body.appendChild(clearFiltersTemplate);

      const emails = [
        {
          name: "Walter Stewart",
          email: "walter.stewart@example.com",
          permission: "Owner"
        },
        {
          name: "Manuel Smith",
          email: "manuel.smith@example.com",
          permission: "Owner"
        },
        {
          name: "Annette Gray",
          email: "annette.gray@example.com",
          permission: "Restricted"
        },
        {
          name: "Candice Murphy",
          email: "candice.murphy@example.com",
          permission: "Owner"
        },
        {
          name: "Theresa Reynolds",
          email: "theresa.reynolds@example.com",
          permission: "Restricted"
        },
        {
          name: "Wyatt Silva",
          email: "wyatt.silva@example.com",
          permission: "Restricted"
        },
        {
          name: "April Hayes",
          email: "april.hayes@example.com",
          permission: "Owner"
        },
        {
          name: "Brayden Henry",
          email: "brayden.henry@example.com",
          permission: "Restricted"
        },
        {
          name: "Clayton Rice",
          email: "clayton.rice@example.com",
          permission: "Restricted"
        },
        {
          name: "Alberto Day",
          email: "alberto.day@example.com",
          permission: "Restricted"
        },
        {
          name: "Jeremy Marshall",
          email: "jeremy.marshall@example.com",
          permission: "Owner"
        },
        {
          name: "Ivan Kennedy",
          email: "ivan.kennedy@example.com",
          permission: "Restricted"
        },
        {
          name: "Sofia Grant",
          email: "sofia.grant@example.com",
          permission: "Restricted"
        },
        {
          name: "Felicia Moore",
          email: "felicia.moore@example.com",
          permission: "Restricted"
        },
        {
          name: "Carolyn White",
          email: "carolyn.white@example.com",
          permission: "Restricted"
        },
        {
          name: "Leo Austin",
          email: "leo.austin@example.com",
          permission: "Restricted"
        },
        {
          name: "Derrick Larson",
          email: "derrick.larson@example.com",
          permission: "Restricted"
        },
        {
          name: "Carla James",
          email: "carla.james@example.com",
          permission: "Restricted"
        },
        {
          name: "Vickie Cruz",
          email: "vickie.cruz@example.com",
          permission: "Owner"
        },
        {
          name: "Brianna Torres",
          email: "brianna.torres@example.com",
          permission: "Restricted"
        },
        {
          name: "Kristen Cruz",
          email: "kristen.cruz@example.com",
          permission: "Restricted"
        },
        {
          name: "Terrance Holt",
          email: "terrance.holt@example.com",
          permission: "Restricted"
        },
        {
          name: "Marlene Reed",
          email: "marlene.reed@example.com",
          permission: "Restricted"
        },
        {
          name: "Beatrice Nichols",
          email: "beatrice.nichols@example.com",
          permission: "Restricted"
        },
        {
          name: "Scarlett Walker",
          email: "scarlett.walker@example.com",
          permission: "Restricted"
        },
        {
          name: "Scott Oliver",
          email: "scott.oliver@example.com",
          permission: "Restricted"
        },
        {
          name: "Joe Castillo",
          email: "joe.castillo@example.com",
          permission: "Restricted"
        },
        {
          name: "Florence Sanders",
          email: "florence.sanders@example.com",
          permission: "Owner"
        }
      ];
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: emails,
                dataFields: [
                  "name: string",
                  "email: string",
                  "permission: string"
                ]
              }),
              paging: true,
              sortMode: "one",
              columns: [
                {
                  label: "Name",
                  dataField: "name",
                  dataType: "string",
                  width: 275,
                  formatFunction(settings) {
                    if (settings.value === "Candice Murphy") {
                      settings.template = `<strong>${settings.value} (you)</strong>`;
                    }
                  }
                },
                {
                  label: "Email",
                  dataField: "email",
                  dataType: "string",
                  width: 275
                },
                {
                  label: "Permission",
                  dataField: "permission",
                  dataType: "string",
                  width: 200
                },
                {
                  label: "",
                  dataField: "action",
                  dataType: "string",
                  allowSort: false,
                  formatFunction(settings) {
                    settings.template = `<smart-button row-id="${settings.row}" class="remove-button"><span class="material-icons">more_vert</span></smart-button>`;
                  }
                }
              ]
            };
          }
        }
      );
      const conditions = [
          {
            value: "CONTAINS",
            label: "Contains"
          },
          {
            value: "DOES_NOT_CONTAIN",
            label: "Does not contain"
          },
          {
            value: "STARTS_WITH",
            label: "Starts with"
          },
          {
            value: "ENDS_WITH",
            label: "Ends with"
          },
          {
            value: "EQUAL",
            label: "Equals"
          }
        ],
        filterRows = {};
      let appliedFilters = {};

      function createCustomFilterRow(columnLabel) {
        const row = document.createElement("div"),
          conditionInput = document.createElement("smart-input"),
          valueInput = document.createElement("smart-input"),
          confirmButton = document.createElement("smart-button");
        conditionInput.dataSource = conditions;
        conditionInput.dropDownButtonPosition = "right";
        conditionInput.placeholder = "Condition";
        conditionInput.classList.add("underlined");
        valueInput.placeholder = "Filter by " + columnLabel;
        valueInput.classList.add("underlined");
        confirmButton.innerHTML = "Done";
        confirmButton.classList.add("primary");
        confirmButton.classList.add("confirm");
        confirmButton.dataField = columnLabel;
        row.className = "filter-row filter-row-" + columnLabel;
        row.appendChild(conditionInput);
        row.appendChild(valueInput);
        row.appendChild(confirmButton);
        document.getElementById("filterRowsContainer").appendChild(row);
        filterRows[columnLabel] = row;
      }

      const table = document.getElementById("table"),
        numberOfAppliedFilters = document.getElementById(
          "numberOfAppliedFilters"
        ),
        filterIcon = document.getElementById("filterIcon"),
        filterRowsContainer = document.getElementById("filterRowsContainer"),
        filterMenu = document.getElementById("filterMenu"),
        removeMenu = document.getElementById("removeMenu");
      let rowToRemove;
      table.whenRendered(() => {
        table.sortBy("name", "asc");
      });
      table.addEventListener("click", function(event) {
        const removeButton = event.target.closest(".remove-button");
        if (removeButton) {
          const rect = removeButton.getBoundingClientRect();
          rowToRemove = table.rowById[removeButton.getAttribute("row-id")];
          if (rowToRemove.data.permission === "Restricted") {
            removeMenu.items[0].label = "Allow access";
            removeMenu.items[0].value = "Owner";
          } else {
            removeMenu.items[0].label = "Remove access";
            removeMenu.items[0].value = "Restricted";
          }
          removeMenu.open(rect.right - removeMenu.offsetWidth, rect.bottom);
        }
      });
      removeMenu.addEventListener("itemClick", function(event) {
        rowToRemove.data.permission = event.detail.value;
      });
      filterIcon.addEventListener("pointerup", function(event) {
        event.stopPropagation();
      });
      filterIcon.addEventListener("click", function() {
        const rect = filterIcon.getBoundingClientRect();
        if (filterMenu.opened) {
          filterMenu.close();
        } else {
          filterMenu.open(rect.right - filterMenu.offsetWidth, rect.bottom);
        }
        removeMenu.close();
      });
      document
        .getElementById("clearFilters")
        .addEventListener("click", function(event) {
          if (event.target.closest("smart-button")) {
            table.clearFilters();
            for (let index in filterMenu.items) {
              const menuItem = filterMenu.items[index];
              menuItem.checked = false;
              menuItem.classList.remove("filtered");
            }
            Array.from(document.querySelectorAll(".filter-row")).forEach(row =>
              row.remove()
            );
            numberOfAppliedFilters.classList.add("smart-visibility-hidden");
            numberOfAppliedFilters.innerHTML = "0";
            appliedFilters = {};
            filterMenu.close();
          }
        });
      filterMenu.addEventListener("itemCheckChange", function(event) {
        const filterRow = filterRows[event.detail.value];
        if (event.detail.checked) {
          if (filterRow) {
            filterRowsContainer.appendChild(filterRow);
          } else {
            createCustomFilterRow(event.detail.value);
          }
        } else {
          filterRow.remove();
        }
      });
      filterRowsContainer.addEventListener("click", function(event) {
        const confirmButton = event.target.closest(".confirm");
        if (confirmButton) {
          const filterRow = confirmButton.parentElement,
            conditionInput = filterRow.firstElementChild,
            valueInput = filterRow.children[1],
            dataField = confirmButton.dataField,
            condition = conditionInput.$.input.dataValue,
            value = valueInput.value,
            menuItem = filterMenu.querySelector(
              `smart-menu-item[value="${dataField}"]`
            );
          if (!condition || !value) {
            delete appliedFilters[dataField];
            table.removeFilter(dataField);
            menuItem.classList.remove("filtered");
          } else {
            const filterGroup = new window.Smart.Utilities.FilterGroup(),
              filterObject = filterGroup.createFilter(
                "string",
                value,
                condition
              );
            filterGroup.addFilter("or", filterObject);
            table.addFilter(dataField, filterGroup);
            appliedFilters[dataField] = filterGroup;
            menuItem.classList.add("filtered");
          }
          const numberOfFilters = Object.keys(appliedFilters).length;
          numberOfAppliedFilters.classList.toggle(
            "smart-visibility-hidden",
            numberOfFilters === 0
          );
          numberOfAppliedFilters.innerHTML = numberOfFilters.toString();
          menuItem.checked = false;
          filterRow.remove();
        }
      });
    });
  }
};
</script>

<style>
.smart-table {
  width: 100%;
  border: none;
}

.material-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#mainContainer {
  width: 800px;
  box-shadow: var(--smart-elevation-8);
}

#mainContainer * {
  box-sizing: border-box;
}

#filterContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 0 20px;
  font-family: var(--smart-font-family);
}

#filterContainer > div:first-child {
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  width: 100%;
  height: 50px;
}

#label {
  font-size: 20px;
}

#numberOfAppliedFiltersContainer {
  display: flex;
  justify-content: center;
}

#numberOfAppliedFilters {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #d6d6d6;
  font-size: 12px;
}

#numberOfAppliedFilters.smart-visibility-hidden {
  background-color: transparent;
}

#filterIcon,
.remove-button {
  --smart-border-top-left-radius: 50%;
  --smart-border-top-right-radius: 50%;
  --smart-border-bottom-left-radius: 50%;
  --smart-border-bottom-right-radius: 50%;
  --smart-border-width: 0;
  --smart-button-padding: 0;
}

#filterIcon {
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
}

#filterMenu,
#removeMenu {
  height: auto;
  transform-origin: top right;
}

.filter-row {
  display: grid;
  grid-template-columns: 150px 1fr 100px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
}

.filter-row > smart-input,
.filter-row > smart-button {
  width: 100%;
  height: 100%;
}

.filter-row > smart-button {
  --smart-button-padding: 0;
}

smart-menu-item:not(.filtered) .material-icons {
  visibility: hidden;
}

#clearFilters > .smart-menu-item-label-container {
  padding-left: 10px;
}

#clearFilters smart-button {
  width: 100%;
}
</style>
