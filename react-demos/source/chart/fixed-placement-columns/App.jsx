import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Film: 1,
		StarWars: 621.7,
		Jurassic: 983.8
	},
	{
		Film: 2,
		StarWars: 457.3,
		Jurassic: 618.6
	},
	{
		Film: 3,
		StarWars: 418.4,
		Jurassic: 368.8
	},
	{
		Film: 4,
		StarWars: 983.6,
		Jurassic: 1671.7
	},
	{
		Film: 5,
		StarWars: 640.9,
		Jurassic: 1309.5
	},
	{
		Film: 6,
		StarWars: 848.8
	},
	{
		Film: 7,
		StarWars: 2068
	},
	{
		Film: 8,
		StarWars: 1332.5
	}
	];
	filmNames = {
		StarWars: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'The Force Awakens', 'The Last Jedi'],
		Jurassic: ['Jurassic Park', 'The Lost World: Jurassic Park', 'Jurassic Park III', 'Jurassic World', 'Jurassic World: Fallen Kingdom']
	};

	caption = 'Film Series Revenue Comparison';
	description = 'Star Wars vs Jurassic Park';
	showLegend = true;
	padding = {
		left: 5,
		top: 5,
		right: 5,
		bottom: 5
	};
	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	columnSeriesOverlap = true;
	xAxis = {
		dataField: 'Film',
		title: {
			text: 'Film'
		},
		tickMarks: {
			visible: true,
			unitInterval: 1,
			color: '#BCBCBC'
		},
		gridLines: {
			visible: true,
			unitInterval: 1,
			color: '#BCBCBC'
		},
		flip: false,
		valuesOnTicks: false
	};
	valueAxis = {
		unitInterval: 100,
		title: {
			text: 'Revenue (millions USD)'
		}
	};
	toolTipFormatFunction = (value, index, series) => {
		return `<div>Film: <em>${this.filmNames[series.dataField][index]}</em></div>
<div>Revenue: ${value} million USD</div>`;
	};
	colorScheme = 'scheme32';
	seriesGroups = [{
		type: 'column',
		columnsMaxWidth: 40,
		series: [{
			dataField: 'Jurassic',
			displayText: 'Jurassic Park'
		}]
	},
	{
		type: 'column',
		columnsMaxWidth: 20,
		series: [{
			dataField: 'StarWars',
			displayText: 'Star Wars'
		}]
	}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart id="chart"
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					columnSeriesOverlap={this.columnSeriesOverlap}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					toolTipFormatFunction={this.toolTipFormatFunction}
					colorScheme={this.colorScheme}
					seriesGroups={this.seriesGroups}></Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
