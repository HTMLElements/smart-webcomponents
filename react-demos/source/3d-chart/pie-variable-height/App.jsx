import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { Browser: 'Chrome', Share: 48.13, Growth: 2  },
    { Browser: 'Safari', Share: 32.21, Growth: 2.6  },
    { Browser: 'Edge', Share: 7.79, Growth: 2.4  },
    { Browser: 'Samsung Internet', Share: 4.02, Growth: 1.7  },
    { Browser: 'Firefox', Share: 3.74, Growth: 1  },
    { Browser: 'Other', Share: 3.71, Growth: 1.4 },
  ];

  caption = 'Desktop browsers share'

  description = 'Growth is represtented vertically';

  showLegend = true;

  legendLayout = {
    flow: 'vertical',
  };

  colorScheme = 'scheme31';

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
          variableHeight: true,
          variableHeightField: 'Growth',
          initialAngle: -60,
          radius: 14,
          labelRadius: 16,
          centerOffset: 0,
          height: 1
        },
      ],
      formatFunction: function (value) {
        if (isNaN(value)) {
          // Legend labels formatting
          return value;
        }

        return parseFloat(value) + '%';
      },
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
