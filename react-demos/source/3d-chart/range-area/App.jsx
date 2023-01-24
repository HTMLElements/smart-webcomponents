import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  generateData(){
    let sampleData = [];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for(let i = 0; i < 12; i++) {
      let obj = {
        Month: months[i],
        AMZNTo: Math.floor(Math.random() * 15) + 30,
        AMZNFrom: Math.floor(Math.random() * 15) +25,
        GOOGTo: Math.floor(Math.random() * 20) + 80,
        GOOGFrom: Math.floor(Math.random() * 20) + 50,
        AAPLTo: Math.floor(Math.random() * 10) + 50,
        AAPLFrom: Math.floor(Math.random() * 15) + 30
      }
      sampleData.push(obj);
    }
    return sampleData;
  }

  dataSource = this.generateData();

  caption = 'Stock Changes in January 2022'

  description = 'Generated with random data';

  showLegend = false;

  colorScheme = 'scheme05';

  cameraPosition = {
    x: 50,
    y: 40,
    z: 70,
  };

  xAxis = {
    dataField: 'Month',
  };

  valueAxis = {
    unitInterval: 15,
    minValue: 0,
    maxValue: 100,
    formatFunction: (value) => {
      return parseFloat(value).toFixed(2) + '$';
    }
  };

  gridOptions = {
    slotWidthZ: 17,
    width: 120,
    height: 60
  };

  seriesGroups = [
    {
      type: 'rangearea',

      series: [
        { dataFieldFrom: 'GOOGFrom', displayTextFrom: 'From', dataFieldTo: 'GOOGTo', displayTextTo: 'To', displayText: 'Google' },
        { dataFieldFrom: 'AAPLFrom', displayTextFrom: 'From', dataFieldTo: 'AAPLTo', displayTextTo: 'To', displayText: 'Apple' },
        { dataFieldFrom: 'AMZNFrom', displayTextFrom: 'From', dataFieldTo: 'AMZNTo', displayTextTo: 'To', displayText: 'Amazon' },
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
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
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
