import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { Browser: 'Chrome', Share: 48.13 },
    { Browser: 'Safari', Share: 32.21 },
    { Browser: 'Edge', Share: 7.79 },
    { Browser: 'Samsung Internet', Share: 4.02},
    { Browser: 'Firefox', Share: 3.74},
  ];

  caption = 'Desktop browsers share'

  description = '(source: gs.statcounter.com)';

  showLegend = true;

  legendLayout = {
    flow: 'vertical',
  };

  colorScheme = 'scheme01';


  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          initialAngle: 40,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 2,
          formatFunction: function (value) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }

            return parseFloat(value) + '%';
          },
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
