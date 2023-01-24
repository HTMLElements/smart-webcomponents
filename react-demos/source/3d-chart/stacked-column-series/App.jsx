import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    {
      Day: 'Monday',
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
      Day: 'Tuesday',
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
      Day: 'Wednesday',
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
      Day: 'Thursday',
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
      Day: 'Friday',
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
    minValue: 0,
    maxValue: 100,
  };

  seriesGroups = [
    {
      type: 'stackedcolumn',
      dataField: 'Keith',
      displayText: 'Keith',
      series: [
        {
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          dataField: 'Cycling',
          displayText: 'Cycling',
        },
        {
          dataField: 'Swimming',
          displayText: 'Swimming',
        },
      ],
    },
    {
      type: 'stackedcolumn',
      dataField: 'Erica',
      displayText: 'Erica',
      series: [
        {
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          dataField: 'Cycling',
          displayText: 'Cycling',
        },
        {
          dataField: 'Swimming',
          displayText: 'Swimming',
        },
      ],
    },
    {
      type: 'stackedcolumn',
      dataField: 'George',
      displayText: 'George',
      series: [
        {
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          dataField: 'Cycling',
          displayText: 'Cycling',
        },
        {
          dataField: 'Swimming',
          displayText: 'Swimming',
        },
      ],
    }
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
