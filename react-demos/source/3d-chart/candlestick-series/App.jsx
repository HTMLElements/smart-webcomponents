import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  generateData() {
    let sampleData = [];
    let startingDate = new Date('2020-05-21');
    for(let i=0; i<50; i++){
      startingDate.setDate(startingDate.getDate() + 1);
      let fomrattedDate =  startingDate.getDate()+'/'+(startingDate.getMonth()+1);
      let high = Math.floor(Math.random() * 100) + 500;
      do{
        var low = Math.floor(Math.random() * 100) + 400
      }while(low >= high);
      do{
        var openPrice = Math.floor(Math.random() * 100) + 400;
      }while(openPrice > high || openPrice < low);
      do{
        var closePrice = Math.floor(Math.random() * 100) + 400;
      }while(closePrice > high || closePrice < low);

      sampleData.push({
        Date: fomrattedDate,
        SPClose: closePrice,
        SPOpen: openPrice,
        SPHigh: high,
        SPLow: low,
      })
    }
    return sampleData;
  }

  dataSource = this.generateData();

  caption = 'Stock Prices Changes';

  description = '';

  showLegend = false;

  colorScheme = 'scheme29';

  cameraPosition = {
    y: 10,
    z: 45,
  };

  xAxis = {
    dataField: 'Date',
  };

  valueAxis = {
    unitInterval: 100,
    minValue: 0,
    maxValue: 700,
    formatSettings: {
      prefix: '$',
    },
  };

  gridOptions = {
    width: 80,
  };

  seriesGroups = [
    {
      type: 'candlestick',

      series: [
        {
          dataFieldClose: 'SPClose',
          displayTextClose: 'Close price',
          dataFieldOpen: 'SPOpen',
          displayTextOpen: 'Open price',
          dataFieldHigh: 'SPHigh',
          displayTextHigh: 'High price',
          dataFieldLow: 'SPLow',
          displayTextLow: 'Low price',
          displayText: 'S&P 500',
      }
      ],
      colorFunction: function (value) {
        return (value.close > value.open) ? '#E25848' : '#61D14F';
      }
      
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
          gridOptions={this.gridOptions}
          cameraPosition={this.cameraPosition}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
