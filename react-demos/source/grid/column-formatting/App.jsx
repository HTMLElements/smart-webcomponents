import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: [{
			"Num1": 38,
			"Num2": 272,
			"Num3": 411403131,
			"Num4": 585940046,
			"Date1": "9/17/2020",
			"Date2": "2019-04-14T09:44:10Z"
		},
		{
			"Num1": 58,
			"Num2": 5940,
			"Num3": 9369865,
			"Num4": 966976265,
			"Date1": "4/29/2020",
			"Date2": "2019-07-22T23:33:34Z"
		},
		{
			"Num1": 92,
			"Num2": 4053,
			"Num3": 113479426,
			"Num4": 744238454,
			"Date1": "3/5/2020",
			"Date2": "2019-08-29T21:54:22Z"
		},
		{
			"Num1": 92,
			"Num2": 150,
			"Num3": 717604578,
			"Num4": 944555499,
			"Date1": "9/24/2019",
			"Date2": "2019-03-23T14:57:24Z"
		},
		{
			"Num1": 24,
			"Num2": 391936,
			"Num3": 395038813,
			"Num4": 518887174,
			"Date1": "6/20/2019",
			"Date2": "2019-06-27T06:12:20Z"
		},
		{
			"Num1": 86,
			"Num2": 135953,
			"Num3": 476908358,
			"Num4": 826766089,
			"Date1": "8/31/2019",
			"Date2": "2018-12-30T07:21:10Z"
		},
		{
			"Num1": 58,
			"Num2": 8730,
			"Num3": 222117703,
			"Num4": 721247727,
			"Date1": "1/1/2020",
			"Date2": "2019-03-06T05:14:50Z"
		},
		{
			"Num1": 46,
			"Num2": 10050,
			"Num3": 284701166,
			"Num4": 660343587,
			"Date1": "10/9/2019",
			"Date2": "2020-07-13T04:19:05Z"
		},
		{
			"Num1": 59,
			"Num2": 27703,
			"Num3": 538213022,
			"Num4": 650603387,
			"Date1": "6/17/2019",
			"Date2": "2018-11-24T05:17:22Z"
		},
		{
			"Num1": 46,
			"Num2": 391918,
			"Num3": 293403248,
			"Num4": 610631253,
			"Date1": "12/23/2018",
			"Date2": "2020-12-13T14:20:40Z"
		},
		{
			"Num1": 11,
			"Num2": 93250,
			"Num3": 491044584,
			"Num4": 684146805,
			"Date1": "7/15/2019",
			"Date2": "2018-12-14T00:55:13Z"
		},
		{
			"Num1": 58,
			"Num2": 619971,
			"Num3": 995046553,
			"Num4": 421110435,
			"Date1": "10/18/2020",
			"Date2": "2020-08-29T07:11:52Z"
		},
		{
			"Num1": 23,
			"Num2": 6561,
			"Num3": 906705621,
			"Num4": 129530148,
			"Date1": "10/12/2019",
			"Date2": "2019-03-01T18:18:51Z"
		},
		{
			"Num1": 45,
			"Num2": 2524,
			"Num3": 771967246,
			"Num4": 408329501,
			"Date1": "12/25/2019",
			"Date2": "2019-05-06T09:26:53Z"
		},
		{
			"Num1": 17,
			"Num2": 2298,
			"Num3": 873734900,
			"Num4": 292375787,
			"Date1": "3/21/2019",
			"Date2": "2020-06-27T06:15:44Z"
		},
		{
			"Num1": 90,
			"Num2": 68,
			"Num3": 554891500,
			"Num4": 165026397,
			"Date1": "7/2/2020",
			"Date2": "2019-05-01T02:48:40Z"
		},
		{
			"Num1": 28,
			"Num2": 91868,
			"Num3": 377219803,
			"Num4": 604542434,
			"Date1": "12/28/2019",
			"Date2": "2020-11-14T11:42:29Z"
		},
		{
			"Num1": 61,
			"Num2": 3989,
			"Num3": 681181966,
			"Num4": 719752037,
			"Date1": "6/5/2019",
			"Date2": "2018-11-29T11:42:21Z"
		}
		],
		dataFields: [
			'Num1: number',
			'Num2: number',
			'Num3: number',
			'Num4: number',
			'Date1: date',
			'Date2: date'
		]
	});
	columns = [{
		label: 'Percent',
		dataField: 'Num1',
		cellsFormat: 'p0'
	},
	{
		label: 'Currency',
		dataField: 'Num2',
		cellsFormat: 'c2'
	},
	{
		label: 'Exponential',
		dataField: 'Num3',
		cellsFormat: 'e'
	},
	{
		label: 'Scientific',
		dataField: 'Num4',
		cellsFormat: 's'
	},
	{
		label: 'Date',
		dataField: 'Date1',
		cellsFormat: 'dd/MM/yyyy'
	},
	{
		label: 'Date/Time',
		dataField: 'Date2',
		cellsFormat: 'F'
	}
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo demonstrates the Grid column formatting options. The numbers
				in the first column are with "Percent" formatting. The numbers in the second
				column are with "Currency" formatting. The numbers in the third column
				are with "Exponential" formatting, The numbers in the fourth column are
				with "Scientific" formatting. The Dates in the fifth column are with "dd/MM/yyyy"
				formatting. The Dates in the last column are with "F" formatting, which
			        includes Date/Time information.</div>
				<br />
				<Grid id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
