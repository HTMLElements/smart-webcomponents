<template>
  <div class="vue-root">
    <smart-layout>
      <smart-tab-layout-group position="bottom" size="20%">
        <smart-tab-layout-item modifiers="drag, resize" label="Patients">
          <div class="dashboard-header">
            <span class="header-name">Nancy Davolio</span>
            <div>
              <span class="icon-holder">
                <img class="header-logo" src="../../../images/people/nancy.jpg" />
              </span>
            </div>
          </div>
          <smart-list-box
            id="listbox"
            filterable
            item-height="53"
            display-member="name"
            selection-mode="zeroOrOne"
            selected-indexes="[0]"
          ></smart-list-box>
        </smart-tab-layout-item>
        <smart-tab-layout-item modifiers="drag, resize" label="Calendar">
          <smart-calendar id="calendar" footer-template="calendarFooter"></smart-calendar>
          <template id="calendarFooter">
            <smart-button class="flat primary">Clear</smart-button>
          </template>
        </smart-tab-layout-item>
      </smart-tab-layout-group>
      <smart-tab-layout-group size="80%">
        <smart-tab-layout-item modifiers="drag, resize" label="Total Visits">
          <smart-layout-group orientation="horizontal">
            <smart-layout-group orientation="vertical">
              <smart-layout-item>
                <smart-chart id="chart"></smart-chart>
              </smart-layout-item>
              <smart-layout-item>
                <div id="personInfo">
                  <img width="30%" />
                  <div id="form">
                    <label>Name</label>
                    <smart-text-box id="name"></smart-text-box>
                    <label>Date</label>
                    <smart-date-time-picker
                      calendar-button="true"
                      format-string="MM/dd/yyyy"
                      drop-down-append-to="body"
                    ></smart-date-time-picker>
                    <label>Email</label>
                    <smart-text-box id="email"></smart-text-box>
                    <smart-radio-button id="inpatient" enable-container-click>Inpatient</smart-radio-button>
                    <smart-radio-button id="outpatient" enable-container-click>Outpatient</smart-radio-button>
                    <div class="buttons">
                      <smart-button class="primary" id="save">Save</smart-button>
                      <smart-button id="reset">Reset</smart-button>
                    </div>
                  </div>
                </div>
              </smart-layout-item>
            </smart-layout-group>
            <smart-tab-layout-group position="bottom">
              <smart-tab-layout-item modifiers="drag, resize" label="In/Out Patients">
                <smart-grid id="grid"></smart-grid>
              </smart-tab-layout-item>
            </smart-tab-layout-group>
          </smart-layout-group>
        </smart-tab-layout-item>
      </smart-tab-layout-group>
    </smart-layout>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.layout.js";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const data = [
        {
          id: 0,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          name: "Nancy Davolio",
          image: "nancy",
          email: "ndavolio@msn.com",
          diagnosis: "Aerophobia",
          symptoms: "Fear of flying",
          inpatient: false
        },
        {
          id: 1,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          name: "Andrew Fuller",
          image: "andrew",
          email: "afuller@msn.com",
          diagnosis: "Pyrophobia",
          symptoms: "Fear of fire",
          inpatient: true
        },
        {
          id: 2,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          name: "John Levering",
          image: "john",
          email: "jlevering@msn.com",
          diagnosis: "Scolionophobia",
          symptoms: "Fear of school",
          inpatient: true
        },
        {
          id: 3,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          name: "Maria Peacock",
          image: "maria",
          email: "mpeacock@msn.com",
          diagnosis: "Necrophobia",
          symptoms: "Fear of death or dead things",
          inpatient: false
        },
        {
          id: 4,
          date: new Date(new Date().setDate(new Date().getDate() - 1)),
          name: "Steven Buchanan",
          image: "steven",
          email: "sbuchanan@msn.com",
          diagnosis: "Megalophobia",
          symptoms: "Fear of large things",
          inpatient: false
        },
        {
          id: 5,
          date: new Date(),
          name: "Mark Suyama",
          image: "mark",
          email: "msuyama@msn.com",
          diagnosis: "Microphobia",
          symptoms: "Fear of small things",
          inpatient: true
        },
        {
          id: 6,
          date: new Date(),
          name: "Laura Callahan",
          image: "laura",
          email: "lcallahan@msn.com",
          diagnosis: "Obesophobia",
          symptoms: "Fear of gaining weight",
          inpatient: false
        },
        {
          id: 7,
          date: new Date(),
          name: "Robert King",
          image: "robert",
          email: "rking@msn.com",
          diagnosis: "Pathophobia",
          symptoms: "Fear of disease",
          inpatient: false
        },
        {
          id: 8,
          date: new Date(),
          name: "Anne Barone",
          image: "anne",
          email: "abarone@msn.com",
          diagnosis: "Tachophobia",
          symptoms: "Fear of speed",
          inpatient: true
        },
        {
          id: 9,
          date: new Date(),
          name: "Janet Peterson",
          image: "janet",
          email: "jpeterson@msn.com",
          diagnosis: "Zoophobia",
          symptoms: "Fear of animals",
          inpatient: false
        }
      ];

      let selectedPersonId = 0;

      const template = document.createElement("template");
      template.id = "template";
      template.innerHTML = `<span class="list-item">
              <img height="53px" class="icon" src="../../../images/people/nancy.jpg" />
              {{label}}
            </span>`;
      document.body.appendChild(template);

      const calendarFooter = document.createElement("template");
      calendarFooter.id = calendarFooter;
      calendarFooter.innerHTML =
        '<smart-button class="flat primary">Clear</smart-button>';
      document.body.appendChild(calendarFooter);

      const layout = document.querySelector("smart-layout");
      layout.whenRendered(() => {
        initCalendar();
        initChart();
        initGrid();
        initListBox();
        resetForm();
        attachEvents();
      });

      function initCalendar() {
        const calendar = document.getElementById("calendar");
        calendar.footerTemplate = "calendarFooter";
        calendar.viewSections = ["footer"];

        calendar.min = new Date(new Date().setDate(new Date().getDate() - 1));
        calendar.max = new Date();
        calendar.clearSelection();
      }

      function initChart() {
        const sampleData = [
          {
            type: "Circulatory",
            inpatients: 55,
            outpatients: 80
          },
          {
            type: "Digestive",
            inpatients: 35,
            outpatients: 55
          },
          {
            type: "Endocrine",
            inpatients: 85,
            outpatients: 50
          },
          {
            type: "Nervous",
            inpatients: 62,
            outpatients: 58
          },
          {
            type: "Renal",
            inpatients: 45,
            outpatients: 65
          },
          {
            type: "Respiratory",
            inpatients: 75,
            outpatients: 55
          }
        ];

        window.Smart(
          "#chart",
          class {
            get properties() {
              return {
                caption: "Total visits",
                description: "",
                showLegend: true,
                showBorderLine: false,
                padding: {
                  left: 5,
                  top: 5,
                  right: 5,
                  bottom: 5
                },
                titlePadding: {
                  left: 90,
                  top: 0,
                  right: 0,
                  bottom: 10
                },
                dataSource: sampleData,
                xAxis: {
                  dataField: "type",
                  visible: false
                },
                colorScheme: "scheme05",
                seriesGroups: [
                  {
                    type: "column",
                    columnsGapPercent: 50,
                    seriesGapPercent: 0,
                    valueAxis: {
                      unitInterval: 15,
                      minValue: 0,
                      maxValue: 90,
                      displayValueAxis: true,
                      axisSize: "auto",
                      tickMarksColor: "#888888"
                    },
                    series: [
                      {
                        dataField: "inpatients",
                        displayText: "Inpatients"
                      },
                      {
                        dataField: "outpatients",
                        displayText: "Outpatients"
                      }
                    ]
                  }
                ]
              };
            }
          }
        );
      }

      function initGrid() {
        window.Smart(
          "#grid",
          class {
            get properties() {
              return {
                appearance: {
                  showRowHeaderNumber: true
                },
                selection: {
                  enabled: true,
                  mode: "one"
                },
                dataSource: new window.Smart.DataAdapter({
                  dataSource: data,
                  dataFields: [
                    "date: date",
                    "name: string",
                    "email: string",
                    "diagnosis: string",
                    "symptoms: string",
                    "inpatient: bool"
                  ]
                }),
                columns: [
                  {
                    label: "",
                    dataField: "inpatient",
                    template: "checkBox",
                    width: 30
                  },
                  {
                    label: "Date",
                    dataField: "date",
                    cellsFormat: "dd MMMM"
                  },
                  {
                    label: "Name",
                    dataField: "name"
                  },
                  {
                    label: "Email",
                    dataField: "email"
                  },
                  {
                    label: "Diagnosis",
                    dataField: "diagnosis"
                  },
                  {
                    label: "Symptoms",
                    dataField: "symptoms"
                  }
                ]
              };
            }
          }
        );

        document.getElementById("grid").select(0);
      }

      function initListBox() {
        const listbox = document.getElementById("listbox");
        listbox.itemTemplate = "template";

        listbox.dataSource = data.map(x => {
          return {
            id: x.id,
            name: x.name,
            image: x.image
          };
        });

        let items;
        listbox.whenRendered(() => {
          items = listbox.items;

          for (let i = 0; i < listbox.dataSource.length; i++) {
            items[i].querySelector(
              "img"
            ).src = `../../../images/people/${listbox.dataSource[i].image}.jpg`;
          }
        });
      }

      function attachEvents() {
        document.getElementById("listbox").addEventListener("change", e => {
          changeSelectedPerson(e.detail.value, true);
        });

        document.getElementById("grid").addEventListener("change", e => {
          if (!e.target || (e.target && !e.target.getSelection)) {
            return;
          }

          const selection = e.target.getSelection();

          if (selection && selection.rows && selection.rows.length > 0) {
            const id = selection.rows[0].id;

            changeSelectedPerson(id);
          }
        });

        document.getElementById("save").addEventListener("click", () => {
          updatePersonData();
        });

        document.getElementById("reset").addEventListener("click", () => {
          resetForm();
        });

        document.getElementById("calendar").addEventListener("change", e => {
          if (e.detail.value.length) {
            document
              .getElementById("grid")
              .addFilter("date", "= " + e.detail.value[0].toLocaleDateString());
          } else {
            document.getElementById("grid").clearFilter();
          }
        });

        document.getElementById("calendar").whenRendered(() => {
          document
            .querySelector("#calendarFooter smart-button")
            .addEventListener("click", () => {
              document.getElementById("calendar").clearSelection();
            });
        });
      }

      function changeSelectedPerson(id, updateGrid) {
        if (selectedPersonId === id) return;

        selectedPersonId = id;
        const personData = data[id];

        document.querySelector(".dashboard-header .header-name").innerHTML =
          personData.name;
        const imgSrc = `../../../images/people/${personData.image}.jpg`;
        document.querySelector(".icon-holder .header-logo").src = imgSrc;

        const personInfo = document.getElementById("personInfo");
        personInfo.querySelector("#name").value = personData.name;
        personInfo.querySelector("Smart-date-time-picker").value =
          personData.date;
        personInfo.querySelector("#email").value = personData.email;
        personInfo.querySelector("img").src = imgSrc;

        if (personData.inpatient) {
          personInfo.querySelector("#inpatient").checked = true;
        } else {
          personInfo.querySelector("#outpatient").checked = true;
        }

        if (updateGrid) {
          document.getElementById("grid").select(personData.id);
        } else {
          document.getElementById("listbox").selectedIndexes = [personData.id];
        }
      }

      function updatePersonData() {
        const selectedPerson = data[selectedPersonId];
        selectedPerson.name = document.getElementById("name").value;
        selectedPerson.date = document.querySelector(
          "Smart-date-time-picker"
        ).value;
        selectedPerson.email = document.getElementById("email").value;
        selectedPerson.inpatient = document.getElementById("inpatient").checked
          ? true
          : false;

        // update grid data
        const grid = document.getElementById("grid");
        const gridData = grid.rows[selectedPersonId].data;
        gridData.name = selectedPerson.name;
        gridData.date = selectedPerson.date;
        gridData.email = selectedPerson.email;
        gridData.inpatient = selectedPerson.inpatient;
        grid.refreshView();

        // update listbox data
        const listbox = document.getElementById("listbox");
        listbox.update(selectedPersonId, selectedPerson.name);
        const items = listbox.items;
        items[selectedPersonId].querySelector(
          "img"
        ).src = `../../../images/people/${data[selectedPersonId].image}.jpg`;
      }

      function resetForm() {
        const selectedPerson = data[selectedPersonId];

        document.getElementById("name").value = selectedPerson.name;
        document.querySelector("Smart-date-time-picker").value =
          selectedPerson.date;
        document.getElementById("email").value = selectedPerson.email;
        document.querySelector(
          "#personInfo img"
        ).src = `../../../images/people/${selectedPerson.image}.jpg`;

        if (selectedPerson.inpatient) {
          document.getElementById("inpatient").checked = true;
        } else {
          document.getElementById("outpatient").checked = true;
        }
      }
    });
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: Roboto;
}

smart-layout {
  width: 100%;
  height: 100%;
}

.dashboard-header {
  background-color: var(--smart-surface);
  color: var(--smart-surface-color);
  padding: 5px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-header .header-name {
  margin-left: 20px;
  font-size: 25px;
  font-weight: 600;
}

img.header-logo {
  float: right;
  width: 40px;
  height: 50px;
  margin-top: 4px;
  margin-right: 10px;
  border-radius: 50%;
  margin-left: 10px;
}

#personInfo {
  display: flex;
}
#personInfo #form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

#personInfo #form label {
  display: inline-block;
  font-weight: 600;
}

#personInfo smart-text-box,
#personInfo smart-date-time-picker {
  display: block;
  margin-bottom: 30px;
  width: 100%;
}

#personInfo .buttons {
  margin-top: 15px;
}

#personInfo .buttons smart-button {
  width: 45%;
}

#chart,
#personInfo,
#grid {
  margin: 0;
  padding: 0;
}

#chart,
#grid {
  width: 100%;
  height: 100%;
}

#listbox,
#calendar {
  width: 100%;
}

#listbox {
  height: calc(100% - 70px);
  border: none;
}

smart-calendar[view-sections*="footer"] {
  --smart-calendar-default-height: calc(
    50px + var(--smart-calendar-cell-spacing) + 7 *
      (var(--smart-calendar-cell-spacing) + var(--smart-calendar-cell-size))
  );
}

.themes {
  display: inline-block;
  margin-top: 10px;
  margin-right: 15px;
}

.themes div {
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid black;
}

.list-item {
  display: flex;
  align-items: center;
}

.icon {
  width: 40px;
  height: 50px;
  display: flex;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 8px;
  position: relative;
}
</style>
