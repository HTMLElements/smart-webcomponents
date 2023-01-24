import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import {RadioButton} from "smart-webcomponents-react/radiobutton";

class App extends React.Component {

  constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

  generateData(){
    let habitable = [];
    let nonHabitable = [];
    for(let i = 0; i < 25; i++) {
      habitable.push({
        valueY: (Math.random() * 19 - 10),
        valueX: (Math.random() * 19 - 10),
        valueZ: (Math.random() * 19 - 10)
      });

      nonHabitable.push({
        valueY: (Math.random() * 19 - 10),
        valueX: (Math.random() * 19 - 10),
        valueZ: (Math.random() * 19 - 10)
      });

      nonHabitable.push({
        valueY: (Math.random() * 19 - 10),
        valueX: (Math.random() * 19 - 10),
        valueZ: (Math.random() * 19 - 10)
      });
    }

    return {habitable, nonHabitable};
  }

  habitable = this.generateData().habitable;

  nonHabitable = this.generateData().nonHabitable;

  sunData = [{valueY: 0, valueX: 0, valueZ: 0}];

  caption = 'Stars Map - Planetary systems near the Sun'

  description = 'Distance in light years';

  showLegend = true;

  colorScheme = 'scheme32';

  cameraPosition = {
    x: 10,
    y: 10,
    z: 57,
  };

  backgroundTexture = [
    '../../images/stars.jpg',
    '../../images/stars.jpg',
    '../../images/stars.jpg',
    '../../images/stars.jpg',
    '../../images/stars.jpg',
    '../../images/stars.jpg',
  ]

  xAxis = {
    dataField: 'valueX',
    displayText: 'X',
    minValue: -10,
    maxValue: 10,
  };
  
  zAxis = {
    dataField: 'valueZ',
    displayText: 'Z',
    minValue: -10,
    maxValue: 10,
  };

  valueAxis = {
    unitInterval: 2,
    minValue: -10,
    maxValue: 10,
    formatSettings: {
      sufix: 'ly'
    },
    displayText: 'Y',
  };

  toolTipFormatSettings = {
    decimalPlaces: 2,
  };

  gridOptions = {
    width: 50,
  };

  seriesGroups = [{
    type: 'scatter',
    dataSource: this.habitable,
      series: [
        {
          dataField: 'valueY',
          displayText: 'Habitable',
          symbolSize: 1,
          symbolType: 'circle',
          opacity: 1,
        }
      ]
  },
  {
    type: 'scatter',
    dataSource: this.nonHabitable,
      series: [
        {
          dataField: 'valueY',
          displayText: 'Non-Habitable',
          symbolSize: 1,
          symbolType: 'circle',
          opacity: 1,
        }
      ]
  },
  {
    type: 'scatter',
    dataSource: this.sunData,
      series: [
        {
          dataField: 'valueY',
          displayText: 'The Solar System',
          symbolSize: 1.5,
          symbolType: 'circle',
          opacity: 1,
        }
      ]
  },
  ];

  clearBackground(chart){
    chart.backgroundColor = '';
    chart.backgroundImage = '';
    chart.backgroundGradient = [];
    chart.backgroundTexture = [];
  }

  checkValue(event) {
    this.clearBackground(this.chart);
    if(event.target.id === 'backgroundColor'){
      this.chart.backgroundColor = 'white';
    }
    else if(event.target.id === 'backgroundGradient'){
      this.chart.backgroundGradient = ['0, #ffffff', '0.5, #e6e6e6', '1, #ffffff'];
    }
    else if(event.target.id === 'backgroundImage'){
      this.chart.backgroundImage = '../../images/stars.jpg';
    }
    else if(event.target.id === 'backgroundTexture'){
      this.chart.backgroundTexture = [
        '../../images/stars.jpg',
        '../../images/stars.jpg',
        '../../images/stars.jpg',
        '../../images/stars.jpg',
        '../../images/stars.jpg',
        '../../images/stars.jpg',
      ];
    }
  }

  init() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <ThreeDChart
          id="chart"
          ref={this.chart}
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
        <div class="options">
          <h3>Background Type</h3>
          <div>
              <RadioButton class="radio-button" onCheckValue={this.checkValue.bind(this)}>Background Color</RadioButton>
              <RadioButton class="radio-button" onCheckValue={this.checkValue.bind(this)}>Background Gradient</RadioButton>
              <RadioButton class="radio-button" onCheckValue={this.checkValue.bind(this)}>Background Image</RadioButton>
              <RadioButton checked class="radio-button" onCheckValue={this.checkValue.bind(this)}>Background Texture</RadioButton>
          </div>
          
      </div>
      </div>
    );
  }
}

export default App;
