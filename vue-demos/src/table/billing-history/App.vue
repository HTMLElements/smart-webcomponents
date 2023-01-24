<template>
  <div class="vue-root">
    <div id="mainContainer">
      <div id="header">
        <div id="title">Billing History</div>
        <div id="info">
          <div>Your next payment will be on</div>
          <div>
            <strong>May 19, 2020</strong> for
            <strong>$13.99</strong>
          </div>
        </div>
      </div>
      <smart-table id="table"></smart-table>
      <div id="footer">
        <span class="material-icons">settings</span>
        <span>Receipt settings</span>
      </div>
    </div>
    <smart-tooltip id="amountTooltip" arrow>Taxes are included</smart-tooltip>
    <smart-tooltip id="errorTooltip" arrow position="bottom">Insufficient funds in account</smart-tooltip>
    <smart-toast id="actionToast" position="top-right" auto-close show-close-button type="success"></smart-toast>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";
import "smart-webcomponents/source/modules/smart.toast.js";
import "smart-webcomponents/source/modules/smart.tooltip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const billingData = [];
      for (let i = 0; i < 15; i++) {
        billingData.push({
          date: new Date(2019, 15 - i, 19),
          amount: i > 5 ? 11.99 : 13.99,
          description: "Netflix subscription",
          status: i === 0 ? "Failed" : "Successful",
          actions: ""
        });
      }
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: billingData,
                dataFields: [
                  "date: date",
                  "amount: number",
                  "description: string",
                  "status: string"
                ]
              }),
              freezeHeader: true,
              selection: true,
              columns: [
                {
                  label: "Date",
                  dataField: "date",
                  dataType: "date",
                  formatFunction(settings) {
                    const formattedValue = new window.Smart.Utilities.DateTime(
                      settings.value
                    ).toString("MMM dd, yyyy");
                    if (billingData[settings.row].status === "Failed") {
                      settings.template = `<div class="icons-container"><span class="material-icons status" style="color: #a80a0a;">cancel</span><span>${formattedValue}</span><span id="errorInfo" class="material-icons info">info</span></div>`;
                    } else {
                      settings.template = `<div class="icons-container"><span class="material-icons status" style="color: #61a617;">check_circle</span><span>${formattedValue}</span></div>`;
                    }
                  }
                },
                {
                  label:
                    '<div class="icons-container">Amount<span id="amountInfo" class="material-icons info">info</span></div>',
                  dataField: "amount",
                  dataType: "number",
                  formatFunction(settings) {
                    settings.template = "$" + settings.value;
                  }
                },
                {
                  label: "Description",
                  dataField: "description",
                  dataType: "string"
                },
                {
                  label: "Status",
                  dataField: "status",
                  dataType: "number",
                  formatFunction(settings) {
                    if (settings.value === "Failed") {
                      settings.template = `<div class="icons-container"><span class="material-icons status">credit_card</span><strong style="color: #a80a0a;">${settings.value}</strong></div>`;
                    } else {
                      settings.template = `<div class="icons-container"><span class="material-icons status">credit_card</span><strong style="color: #61a617;">${settings.value}</strong></div>`;
                    }
                  }
                },
                {
                  label: "Actions",
                  dataField: "actions",
                  dataType: "string",
                  formatFunction(settings) {
                    if (billingData[settings.row].status === "Failed") {
                      settings.template = "";
                    } else {
                      settings.template =
                        '<span class="material-icons">print</span><span class="material-icons">remove_red_eye</span><span class="material-icons">email</span>';
                    }
                  }
                }
              ]
            };
          }
        }
      );

      const table = document.getElementById("table");
      table.whenRendered(() => {
        const toast = document.getElementById("actionToast"),
          amountTooltip = document.getElementById("amountTooltip"),
          errorTooltip = document.getElementById("errorTooltip"),
          actionIcons = Array.from(
            document.querySelectorAll(
              'td[data-field="actions"] .material-icons'
            )
          );

        table.rows[0].allowSelect = false;

        amountTooltip.selector = "amountInfo";
        errorTooltip.selector = "errorInfo";
        actionIcons.forEach(icon => {
          icon.addEventListener("click", function(event) {
            const innerHTML = icon.innerHTML;
            let value;
            if (innerHTML === "print") {
              value = "Print";
            } else if (innerHTML === "remove_red_eye") {
              value = "View Document";
            } else {
              value = "Email Document";
            }
            toast.closeAll();
            toast.value = value;
            toast.open();
            event.stopPropagation();
          });
        });
      });
    });
  }
};
</script>

<style>
#mainContainer {
  width: 1000px;
  height: 800px;
  box-shadow: var(--smart-elevation-4);
  font-family: var(--smart-font-family);
}

#header,
#footer {
  background-color: #f2f2f4;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  color: var(--smart-background-color);
}

#title {
  margin-left: 10px;
  font-size: 40px;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

#footer {
  display: flex;
  align-items: center;
  height: 50px;
  color: #428bca;
}

#footer > .material-icons {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
}

#footer > * {
  cursor: pointer;
}

.smart-table {
  margin-bottom: 0;
  border-left: none;
  border-right: none;
  border-radius: 0;
  width: 100%;
  height: calc(100% - 150px);
}

.smart-table td[data-field="actions"] > .material-icons {
  color: #428bca;
  cursor: pointer;
}

.smart-table .icons-container {
  display: flex;
  align-items: center;
}

.smart-table .material-icons.info {
  margin-left: 3px;
  font-size: 16px;
  cursor: pointer;
}

.smart-table .material-icons.status {
  margin-right: 3px;
}
</style>
