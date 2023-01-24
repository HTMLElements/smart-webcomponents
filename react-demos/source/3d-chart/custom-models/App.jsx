import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";

class App extends React.Component {
  dataSource = [
    { Building: 'Eiffel Tower', Height: 324 },
    { Building: 'CN Tower', Height: 553 },
    { Building: 'Shanghai Tower', Height: 632 },
    { Building: 'Burj Khalifa', Height: 828 },
    { Building: 'One World Trade Center', Height: 541 },
    { Building: 'Empire State Building', Height: 443 },
  ];

  caption = 'Famous Landmarks Around the World'

  description = 'Visual Comparison of the height of famous buildings around the world';

  showLegend = false;

  colorScheme = 'scheme01';

  cameraPosition = {
    y: 10,
    z: 60,
  };

  xAxis = {
    dataField: 'Building',
  };

  valueAxis = {
    unitInterval: 100,
    minValue: 0,
    formatSettings: { sufix: 'm' },
  };

  gridcOptions = {
    height: 60
  };

  toolTipFormatSettings = { sufix: 'm' };

  customModels = [
    {groupIndex: 0, serieIndex: 0, itemIndex: 0, model: '../../images/free__la_tour_eiffel.glb'},
    {groupIndex: 0, serieIndex: 0, itemIndex: 1, model: '../../images/gulas_cn_tower.glb'},
    {groupIndex: 0, serieIndex: 0, itemIndex: 2, model: '../../images/shanghai_tower.glb'},
    {groupIndex: 0, serieIndex: 0, itemIndex: 3, model: '../../images/burj_khalifa.glb'},
    {groupIndex: 0, serieIndex: 0, itemIndex: 4, model: '../../images/one_world_trade_center.glb'},
    {groupIndex: 0, serieIndex: 0, itemIndex: 5, model: '../../images/empire_state_building.glb'},
  ];

  seriesGroups = [
    {
      type: 'column',

      series: [
        { dataField: 'Height', displayText: '' },
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
          gridOptions={this.gridOptions}
          customModels={this.customModels}
          cameraPosition={this.cameraPosition}
        ></ThreeDChart>
      </div>
    );
  }
}

export default App;
