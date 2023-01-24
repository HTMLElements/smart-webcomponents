import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
    { Day: 'Sunday', Keith: 20, Erica: 45, George: 30 },
  ]

  caption = 'Fitness & exercise weekly scorecard'

  description = 'Time spent in vigorous exercise by 3 people';

  showLegend = true;

  colorScheme = 'scheme29';

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'Day',
  };

  valueAxis = {
    unitInterval: 5,
    minValue: 0,
  };

  seriesGroups = [
    {
      type: 'column',

      series: [
        { dataField: 'Keith', displayText: 'Keith' },
        { dataField: 'Erica', displayText: 'Erica' },
        { dataField: 'George', displayText: 'George' },
      ],
    },
  ];

  init() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <ThreeDChart
          id="chart"
          caption={this.caption}
          description={this.description}
          dataSource={this.dataSource}
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
          cameraPosition={this.cameraPosition}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
