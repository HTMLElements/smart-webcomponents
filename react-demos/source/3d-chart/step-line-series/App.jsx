import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  generateData(){
    let sampleData = [];
    let startingDate = new Date('2022-01-01');
    for(let i = 0; i < 20; i++) {
      startingDate.setDate(startingDate.getDate() + 1);
      let fomrattedDate =  startingDate.getDate()+'/'+(startingDate.getMonth()+1);
      let obj = {
        Day: fomrattedDate,
        AMZN: Math.floor(Math.random() * 15) + 40,
        GOOG: Math.floor(Math.random() * 20) + 40,
        AAPL: Math.floor(Math.random() * 10) + 40,
      }
      sampleData.push(obj);
    }
    return sampleData;
  }

  dataSource = this.generateData();

  caption = 'Stock Changes in January 2022'

  description = 'Generated with random data';

  showLegend = true;

  colorScheme = 'scheme01';

  cameraPosition = {
    x: 25,
    y: 40,
    z: 70,
  };

  xAxis = {
    dataField: 'Day',
    gridLines: {
      visible: true,
    },
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
    slotWidthZ: 10,
    width: 120,
    height: 40
  };

  seriesGroups = [
    {
      type: 'stepline',

      series: [
        { dataField: 'GOOG', displayText: 'GOOG' },
        { dataField: 'AMZN', displayText: 'AMZN' },
        { dataField: 'AAPL', displayText: 'AAPL' },
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
          gridOptions={this.gridOptions}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
