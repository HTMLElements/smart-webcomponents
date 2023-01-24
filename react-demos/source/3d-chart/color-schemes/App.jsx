import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { DropDownList, ListItem } from "smart-webcomponents-react/dropdownlist";
import { Button } from "smart-webcomponents-react/button";
import { CheckBox } from "smart-webcomponents-react/checkbox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.dropdownlist = React.createRef();
    this.darkModeButton = React.createRef();
    this.useCustomScheme = React.createRef();

  }
  dataSource = [
    {
      Day: "Monday",
      Keith: {
        Running: 10,
        Swimming: 20,
        Cycling: 30,
      },
      Erica: {
        Running: 13,
        Swimming: 30,
        Cycling: 23,
      },
      George: {
        Running: 15,
        Swimming: 70,
        Cycling: 10,
      },
    },
    {
      Day: "Tuesday",
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 10,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 35,
        Swimming: 15,
        Cycling: 40,
      },
    },
    {
      Day: "Wednesday",
      Keith: {
        Running: 55,
        Swimming: 15,
        Cycling: 10,
      },
      Erica: {
        Running: 15,
        Swimming: 60,
        Cycling: 5,
      },
      George: {
        Running: 50,
        Swimming: 5,
        Cycling: 10,
      },
    },
    {
      Day: "Thursday",
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 15,
        Swimming: 15,
        Cycling: 5,
      },
    },
    {
      Day: "Friday",
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 5,
        Swimming: 5,
        Cycling: 40,
      },
    },
  ];

  caption = "Fitness & exercise weekly scorecard";

  description = "Time spent in vigorous exercise by 3 people";

  showLegend = true;

  showLegendTable = true;

  colorScheme = "scheme32";

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: "Year",
  };

  seriesGroups = [
    {
      type: "stackedcolumn",
      dataField: "Keith",
      displayText: "Keith",
      series: [
        {
          dataField: "Running",
          displayText: "Running",
        },
        {
          dataField: "Cycling",
          displayText: "Cycling",
        },
        {
          dataField: "Swimming",
          displayText: "Swimming",
        },
      ],
    },
    {
      type: "stackedcolumn",
      dataField: "Erica",
      displayText: "Erica",
      series: [
        {
          dataField: "Running",
          displayText: "Running",
        },
        {
          dataField: "Cycling",
          displayText: "Cycling",
        },
        {
          dataField: "Swimming",
          displayText: "Swimming",
        },
      ],
    },
    {
      type: "stackedcolumn",
      dataField: "George",
      displayText: "George",
      series: [
        {
          dataField: "Running",
          displayText: "Running",
        },
        {
          dataField: "Cycling",
          displayText: "Cycling",
        },
        {
          dataField: "Swimming",
          displayText: "Swimming",
        },
      ],
    },
  ];

  init() {}

  componentDidMount() {
    const that = this;

    const customColors = ['#1A6642', '#46C26F', '#F9B956', '#F38443', '#DE513D'];
    let defaultScheme;

    that.chart.addColorScheme('custom', customColors);
    customColors.forEach(function (color, index) {
        document.getElementById('customScheme' + (index + 1)).style.backgroundColor = color;
    });
    that.dropdownlist.addEventListener('change', function (event) {
        defaultScheme = event.detail.value;
        that.dropdownlist.placeholder = event.detail.label;
        if (!that.useCustomScheme.checked) {
            that.colorScheme = defaultScheme;
        }
    });
    that.dropdownlist.placeholder = '<div class="circle" style="background-color: #307DD7;"></div><div class="circle" style="background-color: #AA4643;"></div><div class="circle" style="background-color: #89A54E;"></div><div class="circle" style="background-color: #71588F;"></div><div class="circle" style="background-color: #4198AF;"></div>';
    that.useCustomScheme.addEventListener('change', function (event) {
        if (event.detail.value) {
            that.colorScheme = 'custom';
        }
        else {
            that.colorScheme = defaultScheme;
        }
    });
    that.radiobutton.addEventListener('change', function (event) {
        if (event.detail.value) {
            that.chart.theme = 'light';
            document.body.style.backgroundColor = "";
        }
    });
    that.radiobutton2.addEventListener('change', function (event) {
        if (event.detail.value) {
            that.chart.theme = 'dark';
            document.body.style.backgroundColor = '#2E2E2E';
        }
    });
  }

  render() {
    return (
      <div>
        <div><ThreeDChart
          id="chart"
          ref={this.chart}
          caption={this.caption}
          description={this.description}
          dataSource={this.dataSource}
          xAxis={this.xAxis}
          showLegend={this.showLegend}
          showLegendTable={this.showLegendTable}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
        ></ThreeDChart></div>
        <div class="options">
        <p>Default color schemes:</p>
        <DropDownList ref={this.dropdownlist} id="colorSchemes" selection-mode="one" selected-indexes="[0]" selection-display-mode="placeholder">
            <ListItem value="scheme01"><div class="circle" style="background-color: #307DD7;"></div><div class="circle" style="background-color: #AA4643;"></div><div class="circle" style="background-color: #89A54E;"></div><div class="circle" style="background-color: #71588F;"></div><div class="circle" style="background-color: #4198AF;"></div></ListItem><ListItem value="scheme02"><div class="circle" style="background-color: #7FD13B;"></div><div class="circle" style="background-color: #EA157A;"></div><div class="circle" style="background-color: #FEB80A;"></div><div class="circle" style="background-color: #00ADDC;"></div><div class="circle" style="background-color: #738AC8;"></div></ListItem><ListItem value="scheme03"><div class="circle" style="background-color: #E8601A;"></div><div class="circle" style="background-color: #FF9639;"></div><div class="circle" style="background-color: #F5BD6A;"></div><div class="circle" style="background-color: #599994;"></div><div class="circle" style="background-color: #115D6E;"></div></ListItem><ListItem value="scheme04"><div class="circle" style="background-color: #D02841;"></div><div class="circle" style="background-color: #FF7C41;"></div><div class="circle" style="background-color: #FFC051;"></div><div class="circle" style="background-color: #5B5F4D;"></div><div class="circle" style="background-color: #364651;"></div></ListItem><ListItem value="scheme05"><div class="circle" style="background-color: #25A0DA;"></div><div class="circle" style="background-color: #309B46;"></div><div class="circle" style="background-color: #8EBC00;"></div><div class="circle" style="background-color: #FF7515;"></div><div class="circle" style="background-color: #FFAE00;"></div></ListItem><ListItem value="scheme06"><div class="circle" style="background-color: #0A3A4A;"></div><div class="circle" style="background-color: #196674;"></div><div class="circle" style="background-color: #33A6B2;"></div><div class="circle" style="background-color: #9AC836;"></div><div class="circle" style="background-color: #D0E64B;"></div></ListItem><ListItem value="scheme07"><div class="circle" style="background-color: #CC6B32;"></div><div class="circle" style="background-color: #FFAB48;"></div><div class="circle" style="background-color: #FFE7AD;"></div><div class="circle" style="background-color: #A7C9AE;"></div><div class="circle" style="background-color: #888A63;"></div></ListItem><ListItem value="scheme08"><div class="circle" style="background-color: #3F3943;"></div><div class="circle" style="background-color: #01A2A6;"></div><div class="circle" style="background-color: #29D9C2;"></div><div class="circle" style="background-color: #BDF271;"></div><div class="circle" style="background-color: #FFFFA6;"></div></ListItem><ListItem value="scheme09"><div class="circle" style="background-color: #1B2B32;"></div><div class="circle" style="background-color: #37646F;"></div><div class="circle" style="background-color: #A3ABAF;"></div><div class="circle" style="background-color: #E1E7E8;"></div><div class="circle" style="background-color: #B22E2F;"></div></ListItem><ListItem value="scheme10"><div class="circle" style="background-color: #5A4B53;"></div><div class="circle" style="background-color: #9C3C58;"></div><div class="circle" style="background-color: #DE2B5B;"></div><div class="circle" style="background-color: #D86A41;"></div><div class="circle" style="background-color: #D2A825;"></div></ListItem><ListItem value="scheme11"><div class="circle" style="background-color: #993144;"></div><div class="circle" style="background-color: #FFA257;"></div><div class="circle" style="background-color: #CCA56A;"></div><div class="circle" style="background-color: #ADA072;"></div><div class="circle" style="background-color: #949681;"></div></ListItem><ListItem value="scheme12"><div class="circle" style="background-color: #105B63;"></div><div class="circle" style="background-color: #EEEAC5;"></div><div class="circle" style="background-color: #FFD34E;"></div><div class="circle" style="background-color: #DB9E36;"></div><div class="circle" style="background-color: #BD4932;"></div></ListItem><ListItem value="scheme13"><div class="circle" style="background-color: #BBEBBC;"></div><div class="circle" style="background-color: #F0EE94;"></div><div class="circle" style="background-color: #F5C465;"></div><div class="circle" style="background-color: #FA7642;"></div><div class="circle" style="background-color: #FF1E54;"></div></ListItem><ListItem value="scheme14"><div class="circle" style="background-color: #60573E;"></div><div class="circle" style="background-color: #F2EEAC;"></div><div class="circle" style="background-color: #BFA575;"></div><div class="circle" style="background-color: #A63841;"></div><div class="circle" style="background-color: #BFB8A3;"></div></ListItem><ListItem value="scheme15"><div class="circle" style="background-color: #444546;"></div><div class="circle" style="background-color: #FFBB6E;"></div><div class="circle" style="background-color: #F28D00;"></div><div class="circle" style="background-color: #D94F00;"></div><div class="circle" style="background-color: #7F203B;"></div></ListItem><ListItem value="scheme16"><div class="circle" style="background-color: #583C39;"></div><div class="circle" style="background-color: #674E49;"></div><div class="circle" style="background-color: #948658;"></div><div class="circle" style="background-color: #F0E99A;"></div><div class="circle" style="background-color: #564E49;"></div></ListItem><ListItem value="scheme17"><div class="circle" style="background-color: #142D58;"></div><div class="circle" style="background-color: #447F6E;"></div><div class="circle" style="background-color: #E1B65B;"></div><div class="circle" style="background-color: #C8782A;"></div><div class="circle" style="background-color: #9E3E17;"></div></ListItem><ListItem value="scheme18"><div class="circle" style="background-color: #4D2B1F;"></div><div class="circle" style="background-color: #635D61;"></div><div class="circle" style="background-color: #7992A2;"></div><div class="circle" style="background-color: #97BFD5;"></div><div class="circle" style="background-color: #BFDCF5;"></div></ListItem><ListItem value="scheme19"><div class="circle" style="background-color: #844341;"></div><div class="circle" style="background-color: #D5CC92;"></div><div class="circle" style="background-color: #BBA146;"></div><div class="circle" style="background-color: #897B26;"></div><div class="circle" style="background-color: #55591C;"></div></ListItem><ListItem value="scheme20"><div class="circle" style="background-color: #56626B;"></div><div class="circle" style="background-color: #6C9380;"></div><div class="circle" style="background-color: #C0CA55;"></div><div class="circle" style="background-color: #F07C6C;"></div><div class="circle" style="background-color: #AD5472;"></div></ListItem><ListItem value="scheme21"><div class="circle" style="background-color: #96003A;"></div><div class="circle" style="background-color: #FF7347;"></div><div class="circle" style="background-color: #FFBC7B;"></div><div class="circle" style="background-color: #FF4154;"></div><div class="circle" style="background-color: #642223;"></div></ListItem><ListItem value="scheme22"><div class="circle" style="background-color: #5D7359;"></div><div class="circle" style="background-color: #E0D697;"></div><div class="circle" style="background-color: #D6AA5C;"></div><div class="circle" style="background-color: #8C5430;"></div><div class="circle" style="background-color: #661C0E;"></div></ListItem><ListItem value="scheme23"><div class="circle" style="background-color: #16193B;"></div><div class="circle" style="background-color: #35478C;"></div><div class="circle" style="background-color: #4E7AC7;"></div><div class="circle" style="background-color: #7FB2F0;"></div><div class="circle" style="background-color: #ADD5F7;"></div></ListItem><ListItem value="scheme24"><div class="circle" style="background-color: #7B1A25;"></div><div class="circle" style="background-color: #BF5322;"></div><div class="circle" style="background-color: #9DA860;"></div><div class="circle" style="background-color: #CEA457;"></div><div class="circle" style="background-color: #B67818;"></div></ListItem><ListItem value="scheme25"><div class="circle" style="background-color: #0081DA;"></div><div class="circle" style="background-color: #3AAFFF;"></div><div class="circle" style="background-color: #99C900;"></div><div class="circle" style="background-color: #FFEB3D;"></div><div class="circle" style="background-color: #309B46;"></div></ListItem><ListItem value="scheme26"><div class="circle" style="background-color: #0069A5;"></div><div class="circle" style="background-color: #0098EE;"></div><div class="circle" style="background-color: #7BD2F6;"></div><div class="circle" style="background-color: #FFB800;"></div><div class="circle" style="background-color: #FF6800;"></div></ListItem><ListItem value="scheme27"><div class="circle" style="background-color: #FF6800;"></div><div class="circle" style="background-color: #A0A700;"></div><div class="circle" style="background-color: #FF8D00;"></div><div class="circle" style="background-color: #678900;"></div><div class="circle" style="background-color: #0069A5;"></div></ListItem><ListItem value="scheme28"><div class="circle" style="background-color: #3A43BA;"></div><div class="circle" style="background-color: #281E5D;"></div><div class="circle" style="background-color: #48AAAD;"></div><div class="circle" style="background-color: #0492C2;"></div><div class="circle" style="background-color: #1E456E;"></div></ListItem><ListItem value="scheme29"><div class="circle" style="background-color: #003F5C;"></div><div class="circle" style="background-color: #58508D;"></div><div class="circle" style="background-color: #BC5090;"></div><div class="circle" style="background-color: #FF6361;"></div><div class="circle" style="background-color: #FFA600;"></div></ListItem><ListItem value="scheme30"><div class="circle" style="background-color: #16736F;"></div><div class="circle" style="background-color: #A2D56A;"></div><div class="circle" style="background-color: #1C515C;"></div><div class="circle" style="background-color: #62B773;"></div><div class="circle" style="background-color: #EEEF63;"></div></ListItem><ListItem value="scheme31"><div class="circle" style="background-color: #74CC66;"></div><div class="circle" style="background-color: #191A4D;"></div><div class="circle" style="background-color: #2D867A;"></div><div class="circle" style="background-color: #EEE3CD;"></div><div class="circle" style="background-color: #224D19;"></div></ListItem><ListItem value="scheme32"><div class="circle" style="background-color: #87C5FF;"></div><div class="circle" style="background-color: #5B5B60;"></div><div class="circle" style="background-color: #9BE076;"></div><div class="circle" style="background-color: #F7A384;"></div><div class="circle" style="background-color: #7479D3;"></div></ListItem>
        </DropDownList>
        <p>Custom color scheme:</p>
        <div id="customScheme1"></div>
        <div id="customScheme2"></div>
        <div id="customScheme3"></div>
        <div id="customScheme4"></div>
        <div id="customScheme5"></div>
        <br />
        <CheckBox ref={this.useCustomScheme} id="useCustomScheme">Use custom color scheme</CheckBox>
        <Button ref={this.darkModeButton} id="dark-mode-button">Toggle Dark Mode</Button>
        </div>
        
      </div>
    );
  }
}

export default App;
