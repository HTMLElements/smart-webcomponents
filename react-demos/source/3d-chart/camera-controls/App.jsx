import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { Button } from "smart-webcomponents-react/button";

class App extends React.Component {

  constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

  dataSource = [
    { Year: '2017', Germany: 44.652, France: 38.781, UK: 40.857 },
    { Year: '2018', Germany: 47.973, France: 41.592, UK: 43.647 },
    { Year: '2019', Germany: 46.794, France: 40.578, UK: 43.070 },
    { Year: '2020', Germany: 46.252, France: 39.037, UK: 41.098 },
    { Year: '2021', Germany: 50.801, France: 43.518, UK: 47.334 },
  ];

  autoRotate = true;

  autoRotateSpeed = 5;

  caption = 'GDP Per Capita Comparison'

  description = 'Comparison of Germany, France and United Kingdom in thousands';

  showLegend = false;

  colorScheme = 'scheme32';

  cameraPosition = {
    x: 10,
    y: 35,
    z: 70,
  };

  xAxis = {
    dataField: 'Year',
  };

  valueAxis = {
    unitInterval: 8,
    minValue: 0,
    formatSettings: {
      prefix: '$',
      sufix: 'K',
      decimalPlaces: 0,
    }
  };

  seriesGroups = [
    {
      type: 'column',

      series: [
        
        { dataField: 'Germany', displayText: 'Germany' },
        { dataField: 'UK', displayText: 'United Kingdom'},
        { dataField: 'France', displayText: 'France' },
      ],
    },
  ];

  stopRotate(){
    this.autoRotate = false;
  }

  setCameraPos(){
    this.chart.setCameraPosition(40, 30, 70);
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
    <div class="caption">Camera Controls</div>
    <div>
        <ul>
            <li>Hold mouse to rotate camera</li>
            <li>Scroll mouse wheel to zoom in/zoom out</li>
            <li>Right click with mouse to pan camera</li>
        </ul>
    </div>
    <div class="option">
        <Button onClick={this.stopRotate.bind(this)}>Stop Auto-Rotate</Button><br/><br/>
        <Button onClick={this.setCameraPos.bind(this)}>Set new camera position</Button>
    </div>
</div>
      </div>
      
    );
  }
}

export default App;
