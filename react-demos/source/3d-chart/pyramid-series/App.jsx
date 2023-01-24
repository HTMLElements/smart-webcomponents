import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { Browser: 'Chrome', Share: 48.13 },
    { Browser: 'Safari', Share: 32.21 },
    { Browser: 'Edge', Share: 7.79 },
    { Browser: 'Samsung Internet', Share: 14.02},
  ];

  caption = 'Desktop browsers share'

  description = '';

  showLegend = true;

  legendLayout = {
    left: 10,
    flow: 'vertical',
  };

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 10,
    y: 15,
    z: 35,
  };

  seriesGroups = [
    {
      type: 'pyramid',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          width: 40,
          height: 30,
        },
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
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
          legendLayout={this.legendLayout}
          cameraPosition={this.cameraPosition}
          dataSource={this.dataSource}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
