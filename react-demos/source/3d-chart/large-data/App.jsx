import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  getData(records){
    let sampleData = [];
    //generate sample data
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let years = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
    let startDate = new Date(2021, 0, 1);
    for (let i = 0; i < records; i++) {
      let nextDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
      startDate = nextDate;
      sampleData.push({ Date: nextDate, Computers: Math.floor(Math.random() * (20))+150, Laptops: Math.floor(Math.random() * (80)+80) });
    }
    return sampleData;
  }

  dataSource = this.getData(4000);

  caption = 'Projected Electronic Sales for the next 10 years'

  description = 'Dataset of 4000 points';

  showLegend = true;

  colorScheme = 'scheme29';

  cameraPosition = {
    x: 30,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'Date',
    labels: {
      step: 2
    },
    formatFunction: function (value) {
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[value.getMonth()] + ' ' + value.getFullYear();
    }
  };

  gridOptions = {
    slotWidthZ: 15,
    dynamicWidth: false,
  };

  valueAxis = {
    unitInterval: 20,
    minValue: 0,
  };

  seriesGroups =  [
    {
      type: 'area',

      series: [
        { dataField: 'Computers', displayText: 'Computers' },
        { dataField: 'Laptops', displayText: 'Laptops' },
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
