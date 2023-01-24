import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.loading = React.createRef();
	}

	init() {

		let data;
		fetch('https://randomuser.me/api/?results=50')
			.then(response => response.json())
			.then(json => {
				this.loading.current.remove();
				data = json.results.map((dataPoint) => {
					const result = {
						name: dataPoint.name.first + ' ' + dataPoint.name.last,
						country: dataPoint.location.country,
						countryCode: dataPoint.nat,
						mobile: dataPoint.cell,
						landline: dataPoint.phone,
						address: dataPoint.location.street.number + ' ' + dataPoint.location.street.name + ', ' + dataPoint.location.postcode + ' ' + dataPoint.location.city
					},
						skills = [];
					result.proficiency = Math.floor(Math.random() * Math.floor(99)) + 1;
					if (dataPoint.dob.age % 2 === 0) {
						if (dataPoint.dob.age % 4 === 0) {
							skills.push('javascript');
						}
						skills.push('html-5');
						skills.push('css3');
					} else if (dataPoint.registered.age % 2) {
						skills.push('python');
					}
					if (dataPoint.registered.age % 3 === 0) {
						skills.push('react-native');
					}
					if (dataPoint.registered.age % 2 === 0) {
						skills.push('angularjs');
					} else {
						skills.push('android-os');
					}
					result.skills = skills.join(',');
					return result;
				});

				const dataSource = new window.Smart.DataAdapter({
					dataSource: data,
					dataFields: [
						'name: string',
						'country: string',
						'skills: string',
						'proficiency: number',
						'mobile: string',
						'landline: string',
						'address: string'
					]
				}),
					columnReorder = true,
					selection = true,
					sortMode = 'one',
					columns = [{
						label: 'Name',
						dataField: 'name',
						dataType: 'string'
					},
					{
						label: 'Country',
						dataField: 'country',
						dataType: 'string',
						formatFunction(settings) {
							settings.template =
								`<div className="country-container">
	                                <img className="flag" style="width: 40px; height: 27px;" src="https://www.htmlelements.com/demos/grid/live-update-countries/flags/${data[settings.row].countryCode}.svg" />
	                                ${settings.value}
	                            </div>`;
						}
					},
					{
						label: 'Skills',
						dataField: 'skills',
						dataType: 'string',
						allowSort: false,
						formatFunction(settings) {
							const skills = settings.value.split(',');
							let template = '<div className="skill-container">';
							skills.forEach(skill => template += `<img src="https://img.icons8.com/color/48/000000/${skill}.png" title="${skill}" />`);
							settings.template = template + '</div>';
						}
					},
					{
						label: 'Proficiency',
						dataField: 'proficiency',
						dataType: 'number',
						formatFunction(settings) {
							const value = settings.value;
							let className;
							if (settings.value >= 60) {
								className = 'high';
							} else if (value >= 20) {
								className = 'mid';
							} else {
								className = 'low';
							}
							settings.template = `<smart-progress-bar className="${className}" show-progress-value value="${value}"></smart-progress-bar>`;
						}
					},
					{
						label: 'Mobile',
						dataField: 'mobile',
						dataType: 'string'
					},
					{
						label: 'Landline',
						dataField: 'landline',
						dataType: 'string'
					},
					{
						label: 'Address',
						dataField: 'address',
						dataType: 'string',
						width: 300
					}
					];

				ReactDOM.render(<Table dataSource={dataSource} columnReorder={columnReorder} selection={selection}
					sortMode={sortMode} columns={columns}></Table>, document.getElementById('table'))
			});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases cell rendering in Table.</div>
				<h2 id="loading" ref={this.loading}>Remote data is being loaded...</h2>
				<div id="table"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
