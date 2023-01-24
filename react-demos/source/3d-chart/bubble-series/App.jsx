import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { DropDownList } from "smart-webcomponents-react/dropdownlist";

class App extends React.Component {

  constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

  dataSource = [
    {
      City: "New York",
      SalesQ1: 310500,
      SalesQ2: 210500,
      YoYGrowthQ1: 1.05,
      YoYGrowthQ2: 1.25,
    },
    {
      City: "London",
      SalesQ1: 120000,
      SalesQ2: 169000,
      YoYGrowthQ1: 1.15,
      YoYGrowthQ2: 0.95,
    },
    {
      City: "Paris",
      SalesQ1: 205000,
      SalesQ2: 275500,
      YoYGrowthQ1: 1.45,
      YoYGrowthQ2: 1.15,
    },
    {
      City: "Tokyo",
      SalesQ1: 187000,
      SalesQ2: 130100,
      YoYGrowthQ1: 0.45,
      YoYGrowthQ2: 0.55,
    },
    {
      City: "Berlin",
      SalesQ1: 187000,
      SalesQ2: 113000,
      YoYGrowthQ1: 1.65,
      YoYGrowthQ2: 1.05,
    },
    {
      City: "San Francisco",
      SalesQ1: 142000,
      SalesQ2: 102000,
      YoYGrowthQ1: 0.75,
      YoYGrowthQ2: 0.15,
    },
    {
      City: "Chicago",
      SalesQ1: 171000,
      SalesQ2: 124000,
      YoYGrowthQ1: 0.75,
      YoYGrowthQ2: 0.65,
    },
  ];

  caption = "Sales by City in Q1 and Q2, and YoY sales growth";

  description = "(the size of the circles represents relative YoY growth)";

  showLegend = true;

  colorScheme = "scheme32";

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: "City",
  };

  valueAxis = {
    unitInterval: 50000,
    minValue: 0,
    maxValue: 400000,
    formatFunction: (value) => {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });

      return formatter.format(value);
    },
    formatSettings: {
      prefix: "$",
    },
  };

  seriesGroups = [
    {
      type: "bubble",
      series: [
        {
          dataField: "SalesQ1",
          radiusDataField: "YoYGrowthQ1",
          minRadius: 2,
          maxRadius: 7,
          displayText: "Sales in Q1",
          symbolType: "diamond",
        },
        {
          dataField: "SalesQ2",
          radiusDataField: "YoYGrowthQ2",
          minRadius: 2,
          maxRadius: 7,
          displayText: "Sales in Q2",
          symbolType: "triangle_down",
        },
      ],
    },
  ];

  serieOneChange(event) {
    this.seriesGroups[0].series[0].symbolType = event.detail.value;
    this.chart.refresh();
  }

  serieTwoChange(event) {
    this.seriesGroups[0].series[1].symbolType = event.detail.value;
    this.chart.refresh();
  }

  init() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <ThreeDChart
            id="chart"
            ref={this.chart}
            caption={this.caption}
            description={this.description}
            dataSource={this.dataSource}
            xAxis={this.xAxis}
            valueAxis={this.valueAxis}
            showLegend={this.showLegend}
            colorScheme={this.colorScheme}
            cameraPosition={this.cameraPosition}
            seriesGroups={this.seriesGroups}
          ></ThreeDChart>
        </div>

        <div class="options">
          <table>
            <tr>
              <td>
                <p>Select Serie 1 Symbol:</p>
                <DropDownList id='dropDownSerie1Symbol'
									dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
									selectionMode="one" selected-indexes={[0]}
									onChange={this.serieOneChange.bind(this)}></DropDownList>
              </td>
            </tr>
            <tr>
              <td>
                <p>Select Serie 2 Symbol:</p>
                <DropDownList id='dropDownSerie1Symbol'
									dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
									selectionMode="one" selected-indexes={[4]}
									onChange={this.serieTwoChange.bind(this)}></DropDownList>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
