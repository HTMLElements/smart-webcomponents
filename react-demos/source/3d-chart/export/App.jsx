import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeDChart } from "smart-webcomponents-react/threedchart";
import { Button } from "smart-webcomponents-react/button";
import { CheckBox } from "smart-webcomponents-react/checkbox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.pdfButton = React.createRef();
    this.pngButton = React.createRef();
    this.jpegButton = React.createRef();
    this.includeLegendCheckBox = React.createRef();
    this.includeCaptionCheckBox = React.createRef();
  }

  dataSource = [
    { Browser: "Chrome", Share: 48.13 },
    { Browser: "Safari", Share: 32.21 },
    { Browser: "Edge", Share: 7.79 },
    { Browser: "Samsung Internet", Share: 4.02 },
    { Browser: "Firefox", Share: 3.74 },
  ];

  caption = "Desktop browsers share";

  description = "(source: gs.statcounter.com)";

  showLegend = true;

  legendLayout = {
    flow: "vertical",
  };

  colorScheme = "scheme01";

  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: "pie",
      showLabels: true,
      series: [
        {
          dataField: "Share",
          displayText: "Browser",
          initialAngle: 0,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 1.5,
          formatFunction: function (value) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }

            return parseFloat(value).toFixed(2) + "%";
          },
        },
      ],
    },
  ];

  init() {}

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <ThreeDChart
          id="chart"
          ref={this.chart}
          caption={this.caption}
          description={this.description}
          xAxis={this.xAxis}
          valueAxis={this.valueAxis}
          showLegend={this.showLegend}
          colorScheme={this.colorScheme}
          seriesGroups={this.seriesGroups}
          selectMode={this.selectMode}
          legendLayout={this.legendLayout}
          cameraPosition={this.cameraPosition}
        ></ThreeDChart>
        <div class="options">
          <div class="caption">Chart Export</div>
          <div class="option">
            <CheckBox id="legend" checked ref={this.includeLegendCheckBox}>
              Include Legend
            </CheckBox>
            <br />
            <br />
            <CheckBox id="caption" checked ref={this.includeCaptionCheckBox}>
              Include Caption
            </CheckBox>
            <br />
            <br />
          </div>
          <div class="option">
            <Button id="btn1" onclick={this.chart.saveAsPDF("myChart", this.legendCheck.checked, this.captionCheck.checked)}>Export as PDF</Button>
            <br />
            <br />
            <Button id="btn2" onclick={this.chart.saveAsPNG("myChart", this.legendCheck.checked, this.captionCheck.checked)}>Export as PNG</Button>
            <br />
            <br />
            <Button id="btn3" onclick={this.chart.saveAsJPEG("myChart", this.legendCheck.checked, this.captionCheck.checked)}>Export as JPEG</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
