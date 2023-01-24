import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  generateData(){
    let sampleData1 = [];
    let sampleData2 = [];
    for(let i = 0; i < 1000; i++) {
      sampleData1.push({
        valueY: Math.random() * 8 + 1,
        valueX: Math.random() * 8 + 1,
        valueZ: Math.random() * 8 + 1,
      });
      sampleData2.push({
        valueY: Math.random() * 8 + 1,
        valueX: Math.random() * 8 + 1,
        valueZ: Math.random() * 8 + 1,
      });
    }

    return {sampleData1, sampleData2};
  }

  sampleData1 = this.generateData().sampleData1;

  sampleData2 = this.generateData().sampleData2;

  caption = 'Research Sample'

  description = '';

  showLegend = true;

  colorScheme = 'scheme32';

  cameraPosition = {
    x: 15,
    y: 10,
    z: 50,
  };

  xAxis = {
    dataField: 'valueX',
    displayText: 'X',
    unitInterval: 1,
    minValue: 0,
    maxValue: 10,
  };
  
  zAxis = {
    dataField: 'valueZ',
    displayText: 'Z',
    unitInterval: 1,
    minValue: 0,
    maxValue: 10,
  };

  valueAxis = {
    displayText: 'Y',
    unitInterval: 1,
    minValue: 0,
    maxValue: 10,
  }

  toolTipFormatSettings = {
    decimalPlaces: 2,
  };

  gridOptions = {
    width: 50,
  };

  seriesGroups = [{
    type: 'scatter',
    dataSource: this.sampleData1,
      series: [
        {
          dataField: 'valueY',
          displayText: 'Type A',
          symbolSize: 1.5,
          symbolType: 'triangle_down',
          opacity: 1,
        }
      ]
  },
  {
    type: 'scatter',
    dataSource: this.sampleData2,
      series: [
        {
          dataField: 'valueY',
          displayText: 'Type B',
          symbolSize: 2,
          symbolType: 'triangle_up',
          opacity: 1,
        }
      ]
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
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
          legendLayout={this.legendLayout}
          cameraPosition={this.cameraPosition}
          dataSource={this.dataSource}
          toolTipFormatSettings={this.toolTipFormatSettings}
          gridOptions={this.gridOptions}
          zAxis={this.zAxis}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
