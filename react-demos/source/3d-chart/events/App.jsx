import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { Button } from "smart-webcomponents-react/button";
import { NumberInput } from "smart-webcomponents-react/numberinput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.itemIndex = React.createRef();
    this.showItem = React.createRef();
    this.hideItem = React.createRef();
    this.selectItem = React.createRef();
    this.unselectItem = React.createRef();
  }

  dataSource = [
    { Type: "Completed", Count: 22 },
    { Type: "In Progress", Count: 19 },
    { Type: "Cancelled", Count: 13 },
    { Type: "Remaining", Count: 34 },
  ];

  caption = "Website Project";

  description = "Progress of the tasks";

  showLegend = true;

  legendLayout = {
    flow: "vertical",
  };

  colorScheme = "scheme01";

  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: "pie",
      showLabels: true,
      dataSource: this.dataSource,
      series: [
        {
          dataField: "Count",
          displayText: "Type",
          initialAngle: 0,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 1.5,
        },
      ],
    },
  ];

  init() {}

  componentDidMount() {
    this.showItem.addEventListener("click", () => {
      this.chart.showItem(0, 0, parseInt(this.itemIndex.value));
    });

    this.hideItem.addEventListener("click", () => {
      this.chart.hideItem(0, 0, parseInt(this.itemIndex.value));
    });

    this.selectItem.addEventListener("click", () => {
      this.chart.selectItem(0, 0, parseInt(this.itemIndex.value));
    });

    this.unselectItem.addEventListener("click", () => {
      this.chart.unselectItem(0, 0, parseInt(this.itemIndex.value));
    });

    let events = ["itemClick", "hide", "show", "unselect", "select"];
    events.forEach((ev) =>
      this.chart.addEventListener(ev, function (e) {
        document.getElementById(
          "box"
        ).innerHTML += `${ev}, itemIndex:${e.detail.itemIndex}<br/>`;
      })
    );
  }

  render() {
    return (
      <div>
        <ThreeDChart
          id="chart"
          ref={this.chart}
          caption={this.caption}
          description={this.description}
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
          selectMode={this.selectMode}
          legendLayout={this.legendLayout}
          cameraPosition={this.cameraPosition}
        ></ThreeDChart>
        <div>
          <h4>Chart Events:</h4>
          <div id="box"></div>
          <div class="options">
            <div class="caption">Chart Events</div>
            <div class="option">
              <h4>Item Index:</h4>
              <NumberInput
                ref={this.itemIndex}
                value={0}
                min={0}
                max={3}
                id="item"
              ></NumberInput>
              <br />
              <br />
              <Button id="show-item" ref={this.showItem}>
                Show Item
              </Button>
              <br />
              <br />
              <Button id="hide-item" ref={this.hideItem}>
                Hide Item
              </Button>
              <br />
              <br />
              <Button id="select-item" ref={this.selectItem}>
                Select Item
              </Button>
              <br />
              <br />
              <Button id="unselect-item" ref={this.unselectItem}>
                Unselect Item
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
