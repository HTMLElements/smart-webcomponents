import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetCountriesCodesData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
		this.loading = React.createRef();
	}

	countriesCodesData = GetCountriesCodesData();

	animation = 'none';
	freezeHeader = true;
	keyboardNavigation = true;
	onColumnRender = (settings) => {
		if (settings.column.dataField === 'country') {
			const countryCode = this.countriesCodesData.find(data => data[0].indexOf(settings.text) === 0);
			if (countryCode) {
				settings.text = `<div className="country-container">
<img className="flag" style="width: 40px; height: 27px;" src="https://www.htmlelements.com/demos/grid/live-update-countries/flags/${countryCode[1]}.svg" alt="${countryCode[1]}" />
${settings.text}
</div>`;
			}
		}
	};
	columns = [{
		label: 'Age group',
		dataField: 'ageGroup',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Reg. at age',
		dataField: 'ageRegistered',
		dataType: 'number',
		summary: 'avg'
	},
	{
		label: 'Country',
		dataField: 'country',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Gender',
		dataField: 'gender',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Last name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	}
	];

	initPivotTable(data) {
		this.loading.current.remove();
		this.pivottable.current.nativeElement.classList.remove('smart-visibility-hidden');
		this.pivottable.current.dataSource = new window.Smart.DataAdapter({
			dataSource: data,
			dataFields: [
				'ageGroup: string',
				'ageRegistered: number',
				'country: string',
				'gender: string',
				'lastName: string'
			]
		});
	}

	init() {
		const that = this,
			controller = new AbortController(),
			signal = controller.signal;

		const fetchTimeout = setTimeout(function () {
			// request to online service has timed out
			controller.abort();
			const sampleData = [{
				"ageGroup": "50s",
				"ageRegistered": 17,
				"country": "New Zealand",
				"gender": "male",
				"lastName": "Cooper"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 18,
				"country": "Australia",
				"gender": "female",
				"lastName": "Caldwell"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 1,
				"country": "Germany",
				"gender": "female",
				"lastName": "Heinze"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 1,
				"country": "United Kingdom",
				"gender": "male",
				"lastName": "Wallace"
			}, {
				"ageGroup": "20s",
				"ageRegistered": 11,
				"country": "Canada",
				"gender": "female",
				"lastName": "Jean-Baptiste"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 5,
				"country": "Germany",
				"gender": "male",
				"lastName": "Kötter"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 16,
				"country": "France",
				"gender": "male",
				"lastName": "Dumont"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 2,
				"country": "Ireland",
				"gender": "female",
				"lastName": "Mitchelle"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 8,
				"country": "Turkey",
				"gender": "female",
				"lastName": "Karaduman"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 16,
				"country": "France",
				"gender": "male",
				"lastName": "Lacroix"
			}, {
				"ageGroup": "20s",
				"ageRegistered": 14,
				"country": "Germany",
				"gender": "female",
				"lastName": "Rein"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 11,
				"country": "France",
				"gender": "male",
				"lastName": "Lefevre"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 16,
				"country": "United Kingdom",
				"gender": "female",
				"lastName": "Richards"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 8,
				"country": "Iran",
				"gender": "male",
				"lastName": "کوتی"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 1,
				"country": "Australia",
				"gender": "male",
				"lastName": "Reid"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 12,
				"country": "Australia",
				"gender": "female",
				"lastName": "Neal"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 6,
				"country": "Finland",
				"gender": "male",
				"lastName": "Pesola"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 3,
				"country": "Switzerland",
				"gender": "female",
				"lastName": "Perez"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 12,
				"country": "Brazil",
				"gender": "female",
				"lastName": "Lima"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 2,
				"country": "Germany",
				"gender": "female",
				"lastName": "Winzer"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 7,
				"country": "Canada",
				"gender": "male",
				"lastName": "Walker"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 10,
				"country": "Ireland",
				"gender": "male",
				"lastName": "Richards"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 18,
				"country": "Finland",
				"gender": "male",
				"lastName": "Elo"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 5,
				"country": "France",
				"gender": "male",
				"lastName": "Arnaud"
			}, {
				"ageGroup": "20s",
				"ageRegistered": 5,
				"country": "Norway",
				"gender": "female",
				"lastName": "Medhus"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 8,
				"country": "France",
				"gender": "male",
				"lastName": "Michel"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 2,
				"country": "Norway",
				"gender": "male",
				"lastName": "Tømmervik"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 3,
				"country": "Switzerland",
				"gender": "female",
				"lastName": "Fournier"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 17,
				"country": "Iran",
				"gender": "female",
				"lastName": "علیزاده"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 16,
				"country": "Turkey",
				"gender": "female",
				"lastName": "Köylüoğlu"
			}, {
				"ageGroup": "20s",
				"ageRegistered": 10,
				"country": "United Kingdom",
				"gender": "female",
				"lastName": "Russell"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 4,
				"country": "Norway",
				"gender": "female",
				"lastName": "Guddal"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 2,
				"country": "Finland",
				"gender": "female",
				"lastName": "Haataja"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 7,
				"country": "Iran",
				"gender": "male",
				"lastName": "حیدری"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 9,
				"country": "Switzerland",
				"gender": "male",
				"lastName": "Marie"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 4,
				"country": "Brazil",
				"gender": "female",
				"lastName": "Gomes"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 13,
				"country": "Brazil",
				"gender": "male",
				"lastName": "Lima"
			}, {
				"ageGroup": "20s",
				"ageRegistered": 3,
				"country": "Australia",
				"gender": "female",
				"lastName": "Reyes"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 3,
				"country": "United Kingdom",
				"gender": "male",
				"lastName": "Banks"
			}, {
				"ageGroup": "50s",
				"ageRegistered": 9,
				"country": "Brazil",
				"gender": "male",
				"lastName": "Gonçalves"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 4,
				"country": "Australia",
				"gender": "female",
				"lastName": "Pearson"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 4,
				"country": "Netherlands",
				"gender": "female",
				"lastName": "Sanchez"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 16,
				"country": "Spain",
				"gender": "female",
				"lastName": "Duran"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 7,
				"country": "Australia",
				"gender": "female",
				"lastName": "Bailey"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 9,
				"country": "Iran",
				"gender": "male",
				"lastName": "گلشن"
			}, {
				"ageGroup": "30s",
				"ageRegistered": 13,
				"country": "Turkey",
				"gender": "male",
				"lastName": "Özgörkey"
			}, {
				"ageGroup": "60s",
				"ageRegistered": 12,
				"country": "Switzerland",
				"gender": "male",
				"lastName": "Pierre"
			}, {
				"ageGroup": "70s",
				"ageRegistered": 15,
				"country": "Switzerland",
				"gender": "female",
				"lastName": "Picard"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 17,
				"country": "United Kingdom",
				"gender": "female",
				"lastName": "Horton"
			}, {
				"ageGroup": "40s",
				"ageRegistered": 5,
				"country": "Switzerland",
				"gender": "female",
				"lastName": "Marie"
			}];
			that.initPivotTable(sampleData);
		}, 3000);
		fetch('https://randomuser.me/api/?results=50', {
			signal
		})
			.then(response => {
				clearTimeout(fetchTimeout);
				return response.json();
			})
			.then(json => {
				const data = json.results.map((dataPoint) => {
					return {
						ageGroup: Math.floor(dataPoint.dob.age / 10) * 10 + 's',
						ageRegistered: dataPoint.registered.age,
						country: dataPoint.location.country,
						gender: dataPoint.gender,
						lastName: dataPoint.name.last
					};
				});
				that.initPivotTable(data);
			});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to display remote data from an online service
			        retrieved through HTTP in PivotTable.</div>
				<h2 ref={this.loading} id="loading">Remote data is being loaded...</h2>
				<PivotTable ref={this.pivottable} id="pivotTable" className="smart-visibility-hidden"
					animation={this.animation}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					onColumnRender={this.onColumnRender}
					columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
