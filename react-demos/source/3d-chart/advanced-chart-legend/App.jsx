import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    {
      Day: 'Jan',
      Website1: {
        Referral: 800,
        Paid: 500,
        Organic: 1400,
      },
      Website2: {
        Referral: 1000,
        Paid: 600,
        Organic: 1600,
      }
    },
    {
      Day: 'Feb',
      Website1: {
        Referral: 1000,
        Paid: 600,
        Organic: 1200,
      },
      Website2: {
        Referral: 800,
        Paid: 650,
        Organic: 1700,
      }
    },
    {
      Day: 'Mar',
      Website1: {
        Referral: 1200,
        Paid: 700,
        Organic: 1000,
      },
      Website2: {
        Referral: 1600,
        Paid: 1600,
        Organic: 1200,
      }
    },
    {
      Day: 'Apr',
      Website1: {
        Referral: 1400,
        Paid: 800,
        Organic: 800,
      },
      Website2: {
        Referral: 1000,
        Paid: 600,
        Organic: 1600,
      }
    },
  
  
  ];

  caption = 'Interent Traffic Sources'

  description = 'Visitors by source for two websites';

  showLegend = false;

  colorScheme = 'scheme05';

  xAxis = {
      dataField: 'Day',
  };

  valueAxis = {
      formatSettings: {
          prefix: '$',
      }
  };

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  seriesGroups = [
        {
          type: 'stackedline100',
          dataField: 'Website1',
          displayText: 'Website #1',
          series: [
            {
              dataField: 'Referral',
              displayText: 'Referral Traffic',
            },
            {
              dataField: 'Paid',
              displayText: 'Paid Search Traffic',
            },
            {
              dataField: 'Organic',
              displayText: 'Organic Search Traffic',
            },
          ],
        },
        {
          type: 'stackedline100',
          dataField: 'Website2',
          displayText: 'Website #2',
          series: [
            {
              dataField: 'Referral',
              displayText: 'Referral Traffic',
            },
            {
              dataField: 'Paid',
              displayText: 'Paid Search Traffic',
            },
            {
              dataField: 'Organic',
              displayText: 'Organic Search Traffic',
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
          dataSource={this.dataSource}
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          cameraPosition={this.cameraPosition}
          seriesGroups={this.seriesGroups}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
