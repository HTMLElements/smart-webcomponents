<template>
  <div class="vue-root">
    <div>
      <smart-chart id="chart1"></smart-chart>
    </div>
    <div>
      <smart-chart id="chart2"></smart-chart>
    </div>
    <br />
    <div class="options">
      <p>Default color schemes:</p>
      <smart-drop-down-list
        id="colorSchemes"
        selection-mode="one"
        selected-indexes="[0]"
        selection-display-mode="placeholder"
      >
        <smart-list-item value="scheme01">
          <div class="circle" style="background-color: #307DD7;"></div>
          <div class="circle" style="background-color: #AA4643;"></div>
          <div class="circle" style="background-color: #89A54E;"></div>
          <div class="circle" style="background-color: #71588F;"></div>
          <div class="circle" style="background-color: #4198AF;"></div>
        </smart-list-item>
        <smart-list-item value="scheme02">
          <div class="circle" style="background-color: #7FD13B;"></div>
          <div class="circle" style="background-color: #EA157A;"></div>
          <div class="circle" style="background-color: #FEB80A;"></div>
          <div class="circle" style="background-color: #00ADDC;"></div>
          <div class="circle" style="background-color: #738AC8;"></div>
        </smart-list-item>
        <smart-list-item value="scheme03">
          <div class="circle" style="background-color: #E8601A;"></div>
          <div class="circle" style="background-color: #FF9639;"></div>
          <div class="circle" style="background-color: #F5BD6A;"></div>
          <div class="circle" style="background-color: #599994;"></div>
          <div class="circle" style="background-color: #115D6E;"></div>
        </smart-list-item>
        <smart-list-item value="scheme04">
          <div class="circle" style="background-color: #D02841;"></div>
          <div class="circle" style="background-color: #FF7C41;"></div>
          <div class="circle" style="background-color: #FFC051;"></div>
          <div class="circle" style="background-color: #5B5F4D;"></div>
          <div class="circle" style="background-color: #364651;"></div>
        </smart-list-item>
        <smart-list-item value="scheme05">
          <div class="circle" style="background-color: #25A0DA;"></div>
          <div class="circle" style="background-color: #309B46;"></div>
          <div class="circle" style="background-color: #8EBC00;"></div>
          <div class="circle" style="background-color: #FF7515;"></div>
          <div class="circle" style="background-color: #FFAE00;"></div>
        </smart-list-item>
        <smart-list-item value="scheme06">
          <div class="circle" style="background-color: #0A3A4A;"></div>
          <div class="circle" style="background-color: #196674;"></div>
          <div class="circle" style="background-color: #33A6B2;"></div>
          <div class="circle" style="background-color: #9AC836;"></div>
          <div class="circle" style="background-color: #D0E64B;"></div>
        </smart-list-item>
        <smart-list-item value="scheme07">
          <div class="circle" style="background-color: #CC6B32;"></div>
          <div class="circle" style="background-color: #FFAB48;"></div>
          <div class="circle" style="background-color: #FFE7AD;"></div>
          <div class="circle" style="background-color: #A7C9AE;"></div>
          <div class="circle" style="background-color: #888A63;"></div>
        </smart-list-item>
        <smart-list-item value="scheme08">
          <div class="circle" style="background-color: #3F3943;"></div>
          <div class="circle" style="background-color: #01A2A6;"></div>
          <div class="circle" style="background-color: #29D9C2;"></div>
          <div class="circle" style="background-color: #BDF271;"></div>
          <div class="circle" style="background-color: #FFFFA6;"></div>
        </smart-list-item>
        <smart-list-item value="scheme09">
          <div class="circle" style="background-color: #1B2B32;"></div>
          <div class="circle" style="background-color: #37646F;"></div>
          <div class="circle" style="background-color: #A3ABAF;"></div>
          <div class="circle" style="background-color: #E1E7E8;"></div>
          <div class="circle" style="background-color: #B22E2F;"></div>
        </smart-list-item>
        <smart-list-item value="scheme10">
          <div class="circle" style="background-color: #5A4B53;"></div>
          <div class="circle" style="background-color: #9C3C58;"></div>
          <div class="circle" style="background-color: #DE2B5B;"></div>
          <div class="circle" style="background-color: #D86A41;"></div>
          <div class="circle" style="background-color: #D2A825;"></div>
        </smart-list-item>
        <smart-list-item value="scheme11">
          <div class="circle" style="background-color: #993144;"></div>
          <div class="circle" style="background-color: #FFA257;"></div>
          <div class="circle" style="background-color: #CCA56A;"></div>
          <div class="circle" style="background-color: #ADA072;"></div>
          <div class="circle" style="background-color: #949681;"></div>
        </smart-list-item>
        <smart-list-item value="scheme12">
          <div class="circle" style="background-color: #105B63;"></div>
          <div class="circle" style="background-color: #EEEAC5;"></div>
          <div class="circle" style="background-color: #FFD34E;"></div>
          <div class="circle" style="background-color: #DB9E36;"></div>
          <div class="circle" style="background-color: #BD4932;"></div>
        </smart-list-item>
        <smart-list-item value="scheme13">
          <div class="circle" style="background-color: #BBEBBC;"></div>
          <div class="circle" style="background-color: #F0EE94;"></div>
          <div class="circle" style="background-color: #F5C465;"></div>
          <div class="circle" style="background-color: #FA7642;"></div>
          <div class="circle" style="background-color: #FF1E54;"></div>
        </smart-list-item>
        <smart-list-item value="scheme14">
          <div class="circle" style="background-color: #60573E;"></div>
          <div class="circle" style="background-color: #F2EEAC;"></div>
          <div class="circle" style="background-color: #BFA575;"></div>
          <div class="circle" style="background-color: #A63841;"></div>
          <div class="circle" style="background-color: #BFB8A3;"></div>
        </smart-list-item>
        <smart-list-item value="scheme15">
          <div class="circle" style="background-color: #444546;"></div>
          <div class="circle" style="background-color: #FFBB6E;"></div>
          <div class="circle" style="background-color: #F28D00;"></div>
          <div class="circle" style="background-color: #D94F00;"></div>
          <div class="circle" style="background-color: #7F203B;"></div>
        </smart-list-item>
        <smart-list-item value="scheme16">
          <div class="circle" style="background-color: #583C39;"></div>
          <div class="circle" style="background-color: #674E49;"></div>
          <div class="circle" style="background-color: #948658;"></div>
          <div class="circle" style="background-color: #F0E99A;"></div>
          <div class="circle" style="background-color: #564E49;"></div>
        </smart-list-item>
        <smart-list-item value="scheme17">
          <div class="circle" style="background-color: #142D58;"></div>
          <div class="circle" style="background-color: #447F6E;"></div>
          <div class="circle" style="background-color: #E1B65B;"></div>
          <div class="circle" style="background-color: #C8782A;"></div>
          <div class="circle" style="background-color: #9E3E17;"></div>
        </smart-list-item>
        <smart-list-item value="scheme18">
          <div class="circle" style="background-color: #4D2B1F;"></div>
          <div class="circle" style="background-color: #635D61;"></div>
          <div class="circle" style="background-color: #7992A2;"></div>
          <div class="circle" style="background-color: #97BFD5;"></div>
          <div class="circle" style="background-color: #BFDCF5;"></div>
        </smart-list-item>
        <smart-list-item value="scheme19">
          <div class="circle" style="background-color: #844341;"></div>
          <div class="circle" style="background-color: #D5CC92;"></div>
          <div class="circle" style="background-color: #BBA146;"></div>
          <div class="circle" style="background-color: #897B26;"></div>
          <div class="circle" style="background-color: #55591C;"></div>
        </smart-list-item>
        <smart-list-item value="scheme20">
          <div class="circle" style="background-color: #56626B;"></div>
          <div class="circle" style="background-color: #6C9380;"></div>
          <div class="circle" style="background-color: #C0CA55;"></div>
          <div class="circle" style="background-color: #F07C6C;"></div>
          <div class="circle" style="background-color: #AD5472;"></div>
        </smart-list-item>
        <smart-list-item value="scheme21">
          <div class="circle" style="background-color: #96003A;"></div>
          <div class="circle" style="background-color: #FF7347;"></div>
          <div class="circle" style="background-color: #FFBC7B;"></div>
          <div class="circle" style="background-color: #FF4154;"></div>
          <div class="circle" style="background-color: #642223;"></div>
        </smart-list-item>
        <smart-list-item value="scheme22">
          <div class="circle" style="background-color: #5D7359;"></div>
          <div class="circle" style="background-color: #E0D697;"></div>
          <div class="circle" style="background-color: #D6AA5C;"></div>
          <div class="circle" style="background-color: #8C5430;"></div>
          <div class="circle" style="background-color: #661C0E;"></div>
        </smart-list-item>
        <smart-list-item value="scheme23">
          <div class="circle" style="background-color: #16193B;"></div>
          <div class="circle" style="background-color: #35478C;"></div>
          <div class="circle" style="background-color: #4E7AC7;"></div>
          <div class="circle" style="background-color: #7FB2F0;"></div>
          <div class="circle" style="background-color: #ADD5F7;"></div>
        </smart-list-item>
        <smart-list-item value="scheme24">
          <div class="circle" style="background-color: #7B1A25;"></div>
          <div class="circle" style="background-color: #BF5322;"></div>
          <div class="circle" style="background-color: #9DA860;"></div>
          <div class="circle" style="background-color: #CEA457;"></div>
          <div class="circle" style="background-color: #B67818;"></div>
        </smart-list-item>
        <smart-list-item value="scheme25">
          <div class="circle" style="background-color: #0081DA;"></div>
          <div class="circle" style="background-color: #3AAFFF;"></div>
          <div class="circle" style="background-color: #99C900;"></div>
          <div class="circle" style="background-color: #FFEB3D;"></div>
          <div class="circle" style="background-color: #309B46;"></div>
        </smart-list-item>
        <smart-list-item value="scheme26">
          <div class="circle" style="background-color: #0069A5;"></div>
          <div class="circle" style="background-color: #0098EE;"></div>
          <div class="circle" style="background-color: #7BD2F6;"></div>
          <div class="circle" style="background-color: #FFB800;"></div>
          <div class="circle" style="background-color: #FF6800;"></div>
        </smart-list-item>
        <smart-list-item value="scheme27">
          <div class="circle" style="background-color: #FF6800;"></div>
          <div class="circle" style="background-color: #A0A700;"></div>
          <div class="circle" style="background-color: #FF8D00;"></div>
          <div class="circle" style="background-color: #678900;"></div>
          <div class="circle" style="background-color: #0069A5;"></div>
        </smart-list-item>
        <smart-list-item value="scheme28">
          <div class="circle" style="background-color: #3A43BA;"></div>
          <div class="circle" style="background-color: #281E5D;"></div>
          <div class="circle" style="background-color: #48AAAD;"></div>
          <div class="circle" style="background-color: #0492C2;"></div>
          <div class="circle" style="background-color: #1E456E;"></div>
        </smart-list-item>
        <smart-list-item value="scheme29">
          <div class="circle" style="background-color: #003F5C;"></div>
          <div class="circle" style="background-color: #58508D;"></div>
          <div class="circle" style="background-color: #BC5090;"></div>
          <div class="circle" style="background-color: #FF6361;"></div>
          <div class="circle" style="background-color: #FFA600;"></div>
        </smart-list-item>
        <smart-list-item value="scheme30">
          <div class="circle" style="background-color: #16736F;"></div>
          <div class="circle" style="background-color: #A2D56A;"></div>
          <div class="circle" style="background-color: #1C515C;"></div>
          <div class="circle" style="background-color: #62B773;"></div>
          <div class="circle" style="background-color: #EEEF63;"></div>
        </smart-list-item>
        <smart-list-item value="scheme31">
          <div class="circle" style="background-color: #74CC66;"></div>
          <div class="circle" style="background-color: #191A4D;"></div>
          <div class="circle" style="background-color: #2D867A;"></div>
          <div class="circle" style="background-color: #EEE3CD;"></div>
          <div class="circle" style="background-color: #224D19;"></div>
        </smart-list-item>
        <smart-list-item value="scheme32">
          <div class="circle" style="background-color: #87C5FF;"></div>
          <div class="circle" style="background-color: #5B5B60;"></div>
          <div class="circle" style="background-color: #9BE076;"></div>
          <div class="circle" style="background-color: #F7A384;"></div>
          <div class="circle" style="background-color: #7479D3;"></div>
        </smart-list-item>
      </smart-drop-down-list>
      <p>Custom color scheme:</p>
      <div id="customScheme1"></div>
      <div id="customScheme2"></div>
      <div id="customScheme3"></div>
      <div id="customScheme4"></div>
      <div id="customScheme5"></div>
      <br />
      <smart-check-box id="useCustomScheme">Use custom color scheme</smart-check-box>
      <p>Theme:</p>
      <smart-radio-button id="btnLight" checked>
        Light theme
        <em>(default)</em>
      </smart-radio-button>
      <smart-radio-button id="btnDark">Dark theme</smart-radio-button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.chart.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const sampleData = [
        {
          Day: "Monday",
          Keith: 30,
          Erica: 15,
          George: 25,
          Monica: 20,
          Maria: 15,
          Average: 20
        },
        {
          Day: "Tuesday",
          Keith: 25,
          Erica: 25,
          George: 30,
          Monica: 25,
          Maria: 20,
          Average: 38
        },
        {
          Day: "Wednesday",
          Keith: 30,
          Erica: 20,
          George: 25,
          Monica: 10,
          Maria: 20,
          Average: 33
        },
        {
          Day: "Thursday",
          Keith: 35,
          Erica: 25,
          George: 45,
          Monica: 30,
          Maria: 30,
          Average: 31
        },
        {
          Day: "Friday",
          Keith: 20,
          Erica: 20,
          George: 25,
          Monica: 45,
          Maria: 30,
          Average: 52
        },
        {
          Day: "Saturday",
          Keith: 30,
          Erica: 20,
          George: 30,
          Monica: 60,
          Maria: 40,
          Average: 75
        },
        {
          Day: "Sunday",
          Keith: 60,
          Erica: 45,
          George: 90,
          Monica: 70,
          Maria: 50,
          Average: 73
        }
      ];
      window.Smart(
        "#chart1",
        class {
          get properties() {
            return {
              caption: "Fitness & exercise weekly scorecard",
              description: "Time spent in vigorous exercise",
              borderLineWidth: 0,
              showLegend: true,
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
                dataField: "Day",
                gridLines: {
                  visible: true
                }
              },
              valueAxis: {
                unitInterval: 10,
                minValue: 0,
                maxValue: 100,
                description: "Time in minutes",
                axisSize: "auto"
              },
              colorScheme: "scheme01",
              seriesGroups: [
                {
                  type: "column",
                  columnsGapPercent: 50,
                  seriesGapPercent: 0,
                  series: [
                    {
                      dataField: "Keith",
                      displayText: "Keith"
                    },
                    {
                      dataField: "Erica",
                      displayText: "Erica"
                    },
                    {
                      dataField: "George",
                      displayText: "George"
                    },
                    {
                      dataField: "Monica",
                      displayText: "Monica"
                    },
                    {
                      dataField: "Maria",
                      displayText: "Maria"
                    }
                  ]
                },
                {
                  type: "spline",
                  series: [
                    {
                      dataField: "Average",
                      displayText: "Class average"
                    }
                  ]
                }
              ]
            };
          }
        }
      );
      window.Smart(
        "#chart2",
        class {
          get properties() {
            return {
              caption: "Sunday fitness & exercise",
              description: "",
              borderLineWidth: 0,
              showLegend: true,
              showBorderLine: true,
              legendPosition: {
                left: 520,
                top: 140,
                width: 100,
                height: 100
              },
              padding: {
                left: 5,
                top: 5,
                right: 5,
                bottom: 5
              },
              titlePadding: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 10
              },
              dataSource: [
                {
                  Name: "Keith",
                  Exercise: 60
                },
                {
                  Name: "Erica",
                  Exercise: 45
                },
                {
                  Name: "George",
                  Exercise: 90
                },
                {
                  Name: "Monica",
                  Exercise: 70
                },
                {
                  Name: "Maria",
                  Exercise: 50
                }
              ],
              colorScheme: "scheme01",
              seriesGroups: [
                {
                  type: "pie",
                  showLabels: true,
                  series: [
                    {
                      dataField: "Exercise",
                      displayText: "Name",
                      labelRadius: 70,
                      initialAngle: 15,
                      radius: 90,
                      centerOffset: 0,
                      formatSettings: {
                        decimalPlaces: 1
                      },
                      useGradientColors: false
                    }
                  ]
                }
              ]
            };
          }
        }
      );

      const chart1 = document.getElementById("chart1"),
        chart2 = document.getElementById("chart2"),
        colorSchemes = document.getElementById("colorSchemes"),
        useCustomScheme = document.getElementById("useCustomScheme"),
        customColors = ["#1A6642", "#46C26F", "#F9B956", "#F38443", "#DE513D"];
      let defaultScheme;
      chart1.whenRendered(() => {
        chart1.addColorScheme("custom", customColors);
      });
      chart2.whenRendered(() => {
        chart2.addColorScheme("custom", customColors);
      });

      //chart2.addColorScheme("custom", customColors);
      customColors.forEach(function(color, index) {
        document.getElementById(
          "customScheme" + (index + 1)
        ).style.backgroundColor = color;
      });
      colorSchemes.addEventListener("change", function(event) {
        defaultScheme = event.detail.value;
        colorSchemes.placeholder = event.detail.label;
        if (!useCustomScheme.checked) {
          chart1.colorScheme = defaultScheme;
          chart2.colorScheme = defaultScheme;
        }
      });
      colorSchemes.placeholder =
        '<div class="circle" style="background-color: #307DD7;"></div><div class="circle" style="background-color: #AA4643;"></div><div class="circle" style="background-color: #89A54E;"></div><div class="circle" style="background-color: #71588F;"></div><div class="circle" style="background-color: #4198AF;"></div>';
      document
        .getElementById("useCustomScheme")
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            chart1.colorScheme = "custom";
            chart2.colorScheme = "custom";
          } else {
            chart1.colorScheme = defaultScheme;
            chart2.colorScheme = defaultScheme;
          }
        });
      document
        .getElementById("btnLight")
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            chart1.theme = "light";
            chart2.theme = "light";
            document.body.style.backgroundColor = "";
          }
        });
      document
        .getElementById("btnDark")
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            chart1.theme = "dark";
            chart2.theme = "dark";
            document.body.style.backgroundColor = "#2E2E2E";
          }
        });
    });
  }
};
</script>

<style>
body > div:first-child {
  display: flex;
  align-items: center;
}

smart-chart:first-child {
  margin-right: 20px;
}
smart-chart {
  width: 100%;
  max-width: 550px;
}
#chart2 {
  width: 300px;
  height: 300px;
}

smart-drop-down-list .smart-input div.circle,
.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: static;
  z-index: 1;
  float: none;
}

.circle {
  float: left;
  margin-right: 5px;
}

#colorSchemes {
  width: 210px;
}

#colorSchemes .smart-action-button {
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
}

#customScheme1,
#customScheme2,
#customScheme3,
#customScheme4,
#customScheme5 {
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
</style>
