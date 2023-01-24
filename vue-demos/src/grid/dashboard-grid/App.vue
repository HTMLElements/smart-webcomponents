<template>
  <div class="vue-root">
    <smart-splitter id="dashboard" expanded>
      <smart-splitter-item collapsible id="leftPanel" size="240">
        <div class="dashboard-header">
          <div class="company-logo-holder">
            <img
              style="height: 34px"
              src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg"
            />
          </div>
          <smart-button id="collapseBtn" class="floating">
            <i class="material-icons">chevron_left</i>
          </smart-button>
          <smart-button id="expandBtn" class="floating">
            <i class="material-icons">menu</i>
          </smart-button>
        </div>
        <div class="dashboard-menu-container">
          <smart-button class="flat menu-btn bold">
            <i class="material-icons">dashboard</i>
            <span class="menu-title">Software Company</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">apps</i>
            <span class="menu-title">Overview</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">apps</i>
            <span class="menu-title">Boards</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">merge_type</i>
            <span class="menu-title">Repos</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">timeline</i>
            <span class="menu-title">Pipelines</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons rotate90deg">input</i>
            <span class="menu-title">Builds</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">publish</i>
            <span class="menu-title">Releases</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">library_books</i>
            <span class="menu-title">Library</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">group_work</i>
            <span class="menu-title">Deployment groups</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">developer_mode</i>
            <span class="menu-title">Test Plans</span>
          </smart-button>
          <smart-button class="flat menu-btn">
            <i class="material-icons">filter_none</i>
            <span class="menu-title">Artifacts</span>
          </smart-button>
        </div>
      </smart-splitter-item>
      <smart-splitter-item id="rightPanel">
        <div class="dashboard-header">
          <span class="breadcrumb-header">Project / Software Company / Pipelines / Builds</span>
          <span class="icon-holder">
            <smart-button id="notifficationSearchBtn">
              <i class="material-icons">search</i>
            </smart-button>

            <smart-button id="notifficationSearchBtn">
              <i class="material-icons">menu</i>
            </smart-button>

            <smart-button id="notifficationBtn">
              <i class="material-icons">shopping_basket</i>
            </smart-button>

            <img
              style="width: 32px; height: 32px;"
              class="header-logo"
              src="../../../images/phonebook/nancy.png"
            />
          </span>
        </div>
        <h1 class="main-company-name">Software Company</h1>
        <div class="header-right-buttons">
          <smart-button>
            <i class="material-icons">edit</i>
            <span class="button-text">Edit</span>
          </smart-button>
          <smart-button class="run">
            <i class="material-icons">play_arrow</i>
            <span class="button-text">Run</span>
          </smart-button>
          <smart-button class="transparent-bck">
            <i class="material-icons vertical-align-middle more-horiz">more_horiz</i>
          </smart-button>
        </div>
        <div class="history-holder">
          <h4 class="subtitles active">
            <smart-button>History</smart-button>
          </h4>
          <h4 class="subtitles">
            <smart-button>Analytics</smart-button>
          </h4>
          <div class="filter-right-button">
            <smart-button class="transparent-bck">
              <i class="material-icons vertical-align-middle filter">filter_list</i>
            </smart-button>
          </div>
        </div>
        <smart-grid id="grid"></smart-grid>
      </smart-splitter-item>
    </smart-splitter>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dashboard = document.getElementById("dashboard"),
        expandBtn = document.getElementById("expandBtn"),
        collapseBtn = document.getElementById("collapseBtn");

      dashboard.whenRendered(() => {
        dashboard.hideBar(0);
      });

      expandBtn.addEventListener("click", () => {
        dashboard.update(0, {
          size: 240
        });
        dashboard.setAttribute("expanded", "");
        document.querySelector(".company-logo-holder img").style.display =
          "block";
        let menuTitles = document.querySelectorAll(".menu-title");
        for (let i = 0; i < menuTitles.length; i++) {
          menuTitles[i].style.display = "block";
        }
      });
      collapseBtn.addEventListener("click", () => {
        dashboard.update(0, {
          size: 70
        });
        dashboard.removeAttribute("expanded");
        document.querySelector(".company-logo-holder img").style.display =
          "none";
        let menuTitles = document.querySelectorAll(".menu-title");
        for (let i = 0; i < menuTitles.length; i++) {
          menuTitles[i].style.display = "none";
        }
      });
      const buttons = document.querySelectorAll(".history-holder smart-button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
          buttons[0].parentNode.classList.remove("active");
          buttons[1].parentNode.classList.remove("active");
          this.parentNode.classList.add("active");
        };
      }

      const currentDate = new Date();
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              layout: {
                rowHeight: 60
              },
              dataSource: new window.Smart.DataAdapter({
                dataSource: [
                  {
                    title: "Fix mdm encryption cert",
                    author: "Nancy",
                    buildNum: 10397,
                    status: "in-progress",
                    branch: "master",
                    date: currentDate
                  },
                  {
                    title:
                      "Add mc cert - use rotatable secret for every iteration",
                    author: "Andrew",
                    buildNum: 10396,
                    status: "testing",
                    branch: "develop",
                    date: new Date(currentDate - 86400000)
                  },
                  {
                    title:
                      "Cleanup auth handlers. Use handlers from the service",
                    author: "Laura",
                    buildNum: 10395,
                    status: "done",
                    branch: "master",
                    date: new Date(
                      currentDate - 2 * 86400000 + 3600000 + 600000 + 10000
                    )
                  },
                  {
                    title: "Make kusto and admin app optional",
                    author: "Anne",
                    buildNum: 10394,
                    status: "warning",
                    branch: "feature/2-factor-auth",
                    date: new Date(
                      currentDate - 4 * 86400000 + 3600000 + 700000 + 20000
                    )
                  },
                  {
                    title: "[Streaming][Bug] Closing stream before injecting",
                    author: "Nancy",
                    buildNum: 10392,
                    status: "done",
                    branch: "master",
                    date: new Date(
                      currentDate - 5 * 86400000 + 3600000 + 900000 + 40000
                    )
                  },
                  {
                    title: "Fix deployment arm param",
                    author: "Andrew",
                    buildNum: 10391,
                    status: "done",
                    branch: "master",
                    date: new Date(
                      currentDate - 6 * 86400000 + 3600000 + 200000 + 20000
                    )
                  },
                  {
                    title: "[Streaming] Handling oversized payload by finder",
                    author: "Andrew",
                    buildNum: 10390,
                    status: "done",
                    branch: "feature/some-feature",
                    date: new Date(
                      currentDate - 7 * 86400000 + 3600000 + 300000 + 40000
                    )
                  },
                  {
                    title: "Fixing RDP bug",
                    author: "Andrew",
                    buildNum: 10389,
                    status: "error",
                    branch: "master",
                    date: new Date(
                      currentDate - 9 * 86400000 + 3600000 + 100000 + 10000
                    )
                  },
                  {
                    title: "Fix KV URL resolution",
                    author: "Laura",
                    buildNum: 10388,
                    status: "done",
                    branch: "hotfix/view-perf",
                    date: new Date(
                      currentDate - 10 * 86400000 + 3600000 + 200000 + 20000
                    )
                  },
                  {
                    title: "Fix debug console output when running unit tests",
                    author: "Anne",
                    buildNum: 10387,
                    status: "done",
                    branch: "master",
                    date: new Date(currentDate - 19 * 86400000)
                  },
                  {
                    title: "Fix mdn encryption cert",
                    author: "Nancy",
                    buildNum: 10386,
                    status: "in-progress",
                    branch: "master",
                    date: new Date(currentDate - 25 * 86400000)
                  },
                  {
                    title: "KV URL resolution implementation",
                    author: "Andrew",
                    buildNum: 10385,
                    status: "error",
                    branch: "master",
                    date: new Date(currentDate - 30 * 86400000)
                  },
                  {
                    title: "RDP implementation",
                    author: "Laura",
                    buildNum: 10384,
                    status: "warning",
                    branch: "master",
                    date: new Date(currentDate - 37 * 86400000)
                  },
                  {
                    title: "RDP implementation",
                    author: "Laura",
                    buildNum: 10383,
                    status: "testing",
                    branch: "master",
                    date: new Date(currentDate - 40 * 86400000)
                  },
                  {
                    title: "[Streaming][Bug] Stream bugfixes",
                    author: "Nancy",
                    buildNum: 10382,
                    status: "done",
                    branch: "master",
                    date: new Date(currentDate - 50 * 86400000)
                  }
                ],
                dataFields: [
                  "author: string",
                  "title: string",
                  "buildNum: string",
                  "status: string",
                  "branch: string",
                  "date: string"
                ]
              }),
              columns: [
                {
                  label: "Commit",
                  dataField: "Photo",
                  width: "5%",
                  cellsVerticalAlign: "middle",
                  verticalAlign: "middle",
                  align: "center",
                  cellsAlign: "center",
                  allowHide: false,
                  formatFunction(settings) {
                    if (
                      settings.row.grid.isInitialized &&
                      settings.row.data &&
                      settings.row.data.author
                    ) {
                      settings.template =
                        '<img style="width: 32px" class="logo" src="../../../images/phonebook/' +
                        settings.row.data.author +
                        '.png"/>';
                    }
                  }
                },
                {
                  label: "",
                  dataField: "author",
                  width: "45%",
                  formatFunction(settings) {
                    settings.template =
                      '<span class="commit-title">' +
                      settings.row.data.title +
                      '</span><span class="author-name">' +
                      settings.row.data.author +
                      "</span>";
                  }
                },
                {
                  label: "",
                  icon: "fa-thumb-tack",
                  width: "5%",
                  showIcon: true,
                  cellsAlign: "right",
                  align: "right",
                  formatFunction(settings) {
                    settings.template =
                      '<span class="custom-icon fa-thumb-tack rotate45deg"></span>';
                  }
                },
                {
                  label: "Build #",
                  dataField: "buildNum",
                  width: "10%",
                  formatFunction(settings) {
                    if (settings.row.data.status === "in-progress") {
                      settings.template =
                        '<div class="normal-circle"></div>' +
                        settings.row.data.buildNum;
                    } else if (settings.row.data.status === "done") {
                      settings.template =
                        '<div class="custom-icon fa-check-circle"></div>' +
                        settings.row.data.buildNum;
                    } else if (settings.row.data.status === "warning") {
                      settings.template =
                        '<div class="custom-icon fa-exclamation-circle"></div>' +
                        settings.row.data.buildNum;
                    } else if (settings.row.data.status === "error") {
                      settings.template =
                        '<div class="custom-icon fa-times-circle"></div>' +
                        settings.row.data.buildNum;
                    } else if (settings.row.data.status === "testing") {
                      settings.template =
                        '<div class="dashed-circle"></div>' +
                        settings.row.data.buildNum;
                    } else {
                      settings.template = settings.row.data.buildNum;
                    }
                  }
                },
                {
                  label: "Branch",
                  width: "20%",
                  cellsAlign: "center",
                  align: "center",
                  dataField: "branch"
                },
                {
                  label: "Date/Time",
                  dataField: "date",
                  width: "15%",
                  align: "right",
                  cellsAlign: "right",
                  formatFunction(settings) {
                    const isToday = someDate => {
                      const today = new Date();
                      return (
                        someDate.getDate() === today.getDate() &&
                        someDate.getMonth() === today.getMonth() &&
                        someDate.getFullYear() === today.getFullYear()
                      );
                    };
                    const calculateDaysDifference = someDate => {
                      const date = new Date();
                      return (date - someDate) / (1000 * 60 * 60 * 24);
                    };
                    let commitDate = new Date(settings.row.data.date);
                    if (isToday(commitDate)) {
                      settings.template =
                        commitDate.getHours() + ":" + commitDate.getMinutes();
                    } else if (calculateDaysDifference(commitDate) <= 6) {
                      var days = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ];
                      settings.template =
                        days[commitDate.getDay()] +
                        ", " +
                        commitDate.getHours() +
                        ":" +
                        commitDate.getMinutes();
                    } else {
                      let months = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                      ];
                      settings.template =
                        commitDate.getDate() +
                        " " +
                        months[commitDate.getMonth()] +
                        ", " +
                        commitDate.getHours() +
                        ":" +
                        commitDate.getMinutes();
                    }
                  }
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
body {
  margin: 0px;
  padding: 0px;
  height: 1250px;
}

smart-splitter {
  width: 100%;
  height: 100%;
}

.dashboard-header {
  box-shadow: -3px 1px 9px #6e6464;
  background-color: #24a2fc;
  padding: 5px;
  color: white;
  font-size: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--smart-primary);
}

.company-logo-holder {
  display: flex;
  align-items: center;
}

smart-button#collapseBtn,
smart-button#expandBtn {
  min-width: 46px;
}

smart-button#expandBtn {
  margin-right: 10px;
}

.company-logo-holder span.brand {
  font-size: 14px;
  font-weight: bold;
}

#rightPanel {
}

#rightPanel .dashboard-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}

.dashboard-header smart-button {
  width: 46px;
  height: 46px;
}

#dashboard #leftPanel .dashboard-header {
  box-shadow: 3px 1px 9px #6e6464;
}
smart-button.smart-dark,
smart-button.smart-dark[focus],
smart-button.smart-dark[hover],
smart-button.smart-dark[active] {
  color: #fff;
}

.dashboard-menu-container {
  width: 100%;
  overflow: hidden;
  border-top: 1px solid inherit;
  padding-top: 5px;
}

.dashboard-menu-container > smart-button.flat.menu-btn:nth-child(1) {
  border-bottom: 1px solid inherit;
}

.dashboard-menu-container smart-button {
  text-transform: none;
}

#leftPanel .menu-btn {
  width: 240px;
  height: 46px;
}

#leftPanel .menu-btn .material-icons {
  margin-right: 10px;
  margin-left: 2px;
}

.menu-btn .smart-container {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
}

.menu-btn .smart-container {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
}

.menu-btn {
  width: 240px;
}

h1 {
  margin-top: 40px;
  margin-left: calc(1% + 10px);
}

h6 {
  padding-top: 20px;
  border-top: 1px solid inherit;
  font-size: 14px;
  color: gray;
  text-align: center;
  width: 240px;
  font-weight: 200;
  margin-top: 10px;
  margin-bottom: 20px;
}

#expandBtn,
#collapseBtn,
#notifficationBtn,
#notifficationSearchBtn {
  opacity: 1;
  background-color: transparent;
  color: #888;
  border-width: 0px;
  position: relative;
  font-size: 22px;
  box-shadow: none;
}

#expandBtn[hover],
#collapseBtn[hover],
#notifficationBtn[hover],
#notifficationSearchBtn[hover] {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

#notifficationBtn::after,
#notifficationSearchBtn::after {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 17px;
  height: 17px;
  font-size: 11px;
  background-color: #e10050;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  pointer-events: none;
}

#notifficationBtn::after {
  content: "4";
}

#expandBtn .smart-button,
#collapseBtn .smart-button,
#notifficationBtn .smart-button,
#notifficationSearchBtn .smart-button {
  display: flex;
  align-content: center;
  justify-content: center;
}

#expandBtn,
#collapseBtn,
#notifficationBtn,
#notifficationSearchBtn {
  float: right;
}

#expandBtn .material-icons,
#collapseBtn .material-icons,
#notifficationBtn .material-icons,
#notifficationSearchBtn .material-icons {
  font-size: 22px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

#collapseBtn {
  color: gray;
  display: none;
}

#dashboard[expanded] #collapseBtn {
  display: block;
}

#dashboard[expanded] #expandBtn {
  display: none;
}

table {
  width: 98%;
  text-align: right;
  padding: 0px;
  box-shadow: 1px 3px 7px 0px #afafaf;
  margin-left: auto;
  margin-right: auto;
}

table tr {
  margin: 0px;
  padding: 0px;
  height: 60px;
}

table th,
table td {
  margin: 0px;
  padding: 15px;
  font-size: 12px;
  border-bottom: 1px solid lightgray;
}

table th:first-child,
table td:first-child {
  text-align: left;
}

smart-grid-cell .fa-thumb-tack,
.header-logo,
i.more-horiz,
i.filter {
  cursor: pointer;
}

.dashboard-header i {
  color: white;
}
.dashboard-header span.icon-holder i {
  color: white;
}

.dashboard-header span.icon-holder {
  display: flex;
}

.dashboard-header span.icon-holder smart-button {
  border-radius: 50%;
}

.dashboard-header .breadcrumb-header {
  min-width: 130px;
  color: white;
}

.main-company-name {
  float: left;
}

.history-holder {
  clear: both;
}

.history-holder smart-button {
  background: transparent;
  border: none;
  width: 110px;
  letter-spacing: normal;
  text-transform: none;
}

smart-button.transparent-bck {
  background: transparent;
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
}

smart-button.transparent-bck button {
  padding: 0;
}

.bold {
  font-weight: bold;
}

/* Grid css styles */
:root {
  --smart-grid-border: none;
  --smart-grid-column-border-width: none;
  --smart-grid-row-border: none;
}

smart-grid {
  height: auto;
  --smart-grid-column-header-background-hover: transparent;
  --smart-grid-column-header-background: transparent;
  width: 98%;
  margin: 0 auto;
}

smart-grid
  div.smart-grid-column-header-cell-container[smart-id="columnContainer"] {
  border-bottom: 1px solid #dcdcdc;
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

img.logo {
  border-radius: 50%;
}

img.header-logo {
  float: right;
  margin-top: 4px;
  border-radius: 50%;
  margin-left: 10px;
}

.commit-title {
  position: absolute;
  bottom: 8px;
  font-weight: bold;
}

.author-name {
  display: block;
  margin-top: 10px;
  font-size: 13px;
}

smart-grid-cell .custom-icon {
  font-size: 17px;
  margin-right: 5px;
}

smart-grid-cell .fa-circle {
  color: #ccc;
}

smart-grid-cell .fa-check-circle {
  color: green;
}

smart-grid-cell .fa-exclamation-circle {
  color: #ff9a00;
}

smart-grid-cell .fa-times-circle {
  color: #d40000;
}

smart-grid-cell .fa-spinner {
  color: #4070ff;
}

smart-grid-cell .fa-thumb-tack.rotate45deg:before {
  display: inline-block;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari 3-8 */
  transform: rotate(45deg);
}

/* Date time padding */
smart-grid-cell[data-field="date"] div.smart-label {
  padding-right: 5px;
}

smart-grid-column {
  font-size: 12px;
}

/* Column icon */
smart-grid-column .smart-icon {
  font-family: "FontAwesome";
  font-size: 16px;
}

/* Font awesome Icons */
smart-grid-cell .custom-icon {
  margin-left: 4px;
  margin-right: 4px;
  font-family: "FontAwesome";
}

/* Pin column icon positioning */
smart-grid-column:nth-child(3) {
  display: flex;
  flex-direction: row;
}

smart-grid-column:nth-child(3) div:nth-child(1) {
  order: 2;
  margin-right: 10px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari 3-8 */
  transform: rotate(45deg);
}

smart-grid-column:nth-child(3) div:nth-child(2) {
  order: 1;
}

smart-grid-column:nth-child(3) div:nth-child(3) {
  order: 3;
  visibility: hidden;
}

div.smart-grid-cell-container.center {
  color: black;
}

smart-grid-cell[data-field="buildNum"] div.smart-label {
  display: flex;
  align-items: center;
}

smart-grid-cell[data-field="buildNum"] div.smart-label div.normal-circle {
  border-radius: 50%;
  min-width: 15px;
  width: 15px;
  border: 2px solid #ccc;
  height: 15px;
  margin-right: 5px;
  margin-left: 3px;
  display: inline-block;
}

smart-grid-cell[data-field="buildNum"] div.smart-label div.dashed-circle {
  border-radius: 50%;
  min-width: 15px;
  width: 15px;
  border: 1px solid #4f32ff;
  height: 15px;
  margin-right: 5px;
  margin-left: 3px;
  border-style: dashed;
  display: inline-block;
}

.rotate90deg {
  transform: rotate(90deg);
}

h4.subtitles {
  cursor: pointer;
  margin-left: 25px;
  display: inline-block;
  font-weight: normal;
}

h4.subtitles.active {
  font-weight: bold;
  border-bottom: 2px solid #24a2fc;
}

.header-right-buttons {
  float: right;
  margin-top: 40px;
}

.header-right-buttons smart-button.run {
  color: white;
}

.filter-right-button {
  float: right;
  margin-right: 15px;
}

.filter-right-button smart-button {
  margin-top: 10px;
}

.header-right-buttons smart-button button {
  padding: 4px;
}

.header-right-buttons smart-button {
  margin-left: 2px;
  margin-right: 2px;
}

.header-right-buttons {
  margin-right: 15px;
}

.header-right-buttons .filter {
  margin-left: 5px;
  margin-right: 10px;
  float: right;
}

.header-right-buttons .button-text {
  vertical-align: super;
}

.vertical-align-middle {
  vertical-align: middle;
}

smart-button.run {
  background: #24a2fc;
}
</style>
