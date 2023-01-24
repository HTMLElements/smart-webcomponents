import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesCurrencyData, GetCountriesCodesData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	layout = {
		rowHeight: 40
	};
	dataSource = new window.Smart.DataAdapter({
		dataSourceType: 'json',
		dataFields: [
			'currency: string',
			'value: number'
		],
		dataSource: {
			"ALL": 124.678,
			"AMD": 554.211,
			"ANG": 2.046,
			"AOA": 356.192,
			"ARS": 44.171,
			"AUD": 1.581,
			"AWG": 2.041317,
			"AZN": 1.933087,
			"BAM": 1.951296,
			"BBD": 2.258204,
			"BDT": 95.400537,
			"BGN": 1.954755,
			"BHD": 0.427422,
			"BIF": 2069.094139,
			"BMD": 1.13375,
			"BND": 1.531244,
			"BOB": 7.835064,
			"BRL": 4.233539,
			"BTN": 80.316392,
			"BWP": 11.923596,
			"BYN": 2.421119,
			"BZD": 2.285526,
			"CAD": 1.495887,
			"CDF": 1849.145964,
			"CHF": 1.135042,
			"CLF": 0.028398,
			"CLP": 736.823969,
			"CNY": 7.584107,
			"COP": 3513.832036,
			"CRC": 689.48953,
			"CUC": 1.13375,
			"CUP": 30.044381,
			"CVE": 110.535542,
			"CZK": 25.640665,
			"DJF": 201.49075,
			"DKK": 7.460864,
			"DOP": 57.407458,
			"DZD": 134.485261,
			"EGP": 19.893917,
			"ERN": 17.005966,
			"ETB": 32.447734,
			"EUR": 1,
			"FJD": 2.411826,
			"FKP": 0.861639,
			"GBP": 0.86868,
			"GEL": 3.032784,
			"GHS": 6.06658,
			"GIP": 0.861639,
			"GMD": 56.182966,
			"GNF": 10464.51457,
			"GTQ": 8.747903,
			"GYD": 237.157986,
			"HKD": 8.89842,
			"HNL": 27.816591,
			"HRK": 7.429808,
			"HTG": 92.849617,
			"HUF": 317.886543,
			"IDR": 15850.394857,
			"ILS": 4.089607,
			"INR": 80.331833,
			"IQD": 1350.296504,
			"IRR": 47736.552753,
			"ISK": 136.02732,
			"JMD": 148.419352,
			"JOD": 0.80406,
			"JPY": 125.963013,
			"KES": 113.589954,
			"KGS": 78.965538,
			"KHR": 4529.332142,
			"KMF": 491.704489,
			"KPW": 1020.424717,
			"KRW": 1265.627953,
			"KWD": 0.344205,
			"KYD": 0.944936,
			"KZT": 426.652611,
			"LAK": 9733.813543,
			"LBP": 1710.545227,
			"LKR": 203.779877,
			"LRD": 182.675544,
			"LSL": 15.725492,
			"LYD": 1.570208,
			"MAD": 10.837289,
			"MDL": 19.423471,
			"MGA": 4031.615903,
			"MKD": 61.43116,
			"MMK": 1729.705727,
			"MNT": 2986.538471,
			"MOP": 9.166594,
			"MUR": 38.615273,
			"MVR": 17.516396,
			"MWK": 825.954017,
			"MXN": 21.649865,
			"MYR": 4.612319,
			"MZN": 70.921734,
			"NAD": 15.782157,
			"NGN": 410.417537,
			"NIO": 37.078618,
			"NOK": 9.766108,
			"NPR": 128.448243,
			"NZD": 1.647271,
			"OMR": 0.4365,
			"PAB": 1.133807,
			"PEN": 3.747606,
			"PGK": 3.819774,
			"PHP": 58.821793,
			"PKR": 158.464073,
			"PLN": 4.336652,
			"PYG": 6911.795951,
			"QAR": 4.128268,
			"RON": 4.763788,
			"RSD": 118.181746,
			"RUB": 74.335013,
			"RWF": 1003.368939,
			"SAR": 4.252014,
			"SBD": 9.242728,
			"SCR": 15.486461,
			"SDG": 53.994863,
			"SEK": 10.580947,
			"SGD": 1.530674,
			"SHP": 1.49757,
			"SLL": 53943.834921,
			"SOS": 657.574824,
			"SRD": 8.455556,
			"SVC": 9.921339,
			"SYP": 583.881104,
			"SZL": 15.725163,
			"THB": 35.46594,
			"TJS": 10.692378,
			"TMT": 3.968126,
			"TND": 3.460321,
			"TOP": 2.560744,
			"TRY": 6.012391,
			"TTD": 7.693459,
			"TWD": 34.887776,
			"TZS": 2658.758853,
			"UAH": 30.532255,
			"UGX": 4161.423158,
			"USD": 1.13375,
			"WST": 2.957815,
			"XAF": 654.457601,
			"XCD": 3.064017,
			"XDR": 0.813828,
			"XOF": 662.110657,
			"XPF": 119.609776,
			"ZAR": 15.681917
		}
	});
	columns = [{
		label: 'Currency',
		dataField: 'currency',
		template: (formatObject) => {
			const value = formatObject.value;
			const countryCode = this.countryByCurrencyMap[value];
			const flag = '<img className="flag" style="width:36px; height:24px;" src="https://www.htmlelements.com/demos/grid/live-update-countries/flags/' + countryCode + '.svg">';
			if (!formatObject.template) {
				// render the template.
				formatObject.template = '<div className="template">' + flag + '<span>' + value + '</span></div>';
			} else {
				// update the template.
				formatObject.template.firstChild.src = 'https://www.htmlelements.com/demos/grid/live-update-countries/flags/' + countryCode + '.svg';
				formatObject.template.lastChild.innerHTML = value;
			}
		}
	},
	{
		label: 'Rate',
		dataField: 'value',
		template: function (formatObject) {
			const value = new Number(formatObject.value.toString()).toFixed(2);
			if (!formatObject.template) {
				// render the template.
				const element = document.createElement('div');
				element.innerHTML = value;
				formatObject.template = element;
			} else {
				// update the template.
				formatObject.template.innerHTML = value;
			}
			// apply CSS class depending on the cell's value.
			formatObject.template.className = '';
			if (formatObject.oldValue < value) {
				formatObject.template.classList.add('updated-cell-up');
			} else {
				formatObject.template.classList.add('updated-cell-down');
			}
		}
	}
	];

	countryByCurrencyMap = [];

	updateValues() {
		const grid = this.grid.current,
			rows = grid.rows,
			random = this.random;

		grid.beginUpdate();
		for (let i = 0; i < rows.length; i++) {
			const cell = rows[i].cells[1];
			let value;
			const randomNum = Math.random();
			const index = randomNum * 10;
			if (index % 2 == 0) {
				value = cell.value + random(0.01, 0.3, 3);
			} else {
				value = cell.value - random(0.01, 0.3, 3);
				if (value <= 0) {
					value = cell.value + random(0.01, 0.3, 3);
				};
			}
			cell.value = value;
		}
		grid.endUpdate();
	}

	random(minValue, maxValue, precision) {
		if (typeof (precision) == 'undefined') {
			precision = 4;
		}
		return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
	}

	init() {
		const that = this;
		const currenciesData = GetCountriesCurrencyData();
		const codesData = GetCountriesCodesData();
		for (let i = 0; i < currenciesData.length; i++) {
			const data = currenciesData[i];
			if (!codesData[i]) {
				continue;
			}
			this.countryByCurrencyMap[data[2]] = codesData[i][1].toLowerCase();
		}

		// update every 5 seconds.	
		setInterval(function () {
			that.updateValues();
		}, 5000);

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Data is updated every 5 seconds. Custom Cells Template is applied to both
			        Grid columns.</div>
				<Grid ref={this.grid} id="grid"
					layout={this.layout}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
