import React from "react";
import ReactDOM from "react-dom";
import { CardView } from 'smart-webcomponents-react/cardview';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction) {
			fetch('https://randomuser.me/api/?results=20', {
				method: 'GET'
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					const results = data.results.map(result => {
						return {
							picture: result.picture.large,
							name: result.name.first + ' ' + result.name.last,
							nationality: result.nat,
							phone: result.phone,
							registered: new Date(result.registered.date)
						};
					});
					resultCallbackFunction({
						dataSource: results
					});
				});
		},
		dataFields: ['picture: string', 'name: string', 'nationality: string', 'phone: string', 'registered: date']
	});
	cellOrientation = 'horizontal';
	coverField = 'picture';
	coverMode = 'fit';
	columns = [{
		label: 'Name',
		dataField: 'name'
	},
	{
		label: 'Nationality',
		dataField: 'nationality',
		icon: 'nationality',
		formatFunction: function (settings) {
			settings.template = `<span className="flag-icon flag-icon-${settings.value.toLowerCase()}"></span>`;
		}
	},
	{
		label: 'Phone',
		dataField: 'phone',
		icon: 'phone'
	},
	{
		label: 'Registered',
		dataField: 'registered',
		icon: 'registered',
		formatSettings: {
			formatString: 'd'
		}
	},
	{
		label: 'Picture',
		dataField: 'picture',
		image: true
	},
	];
	scrolling = 'infinite';
	titleField = 'name';

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">The Infinite scroll feature of the CardView allows you to load additional
			        data records on demand, when you scroll to the bottom.</div>
				<CardView id="cardView"
					dataSource={this.dataSource}
					cellOrientation={this.cellOrientation}
					coverField={this.coverField}
					coverMode={this.coverMode}
					columns={this.columns}
					scrolling={this.scrolling}
					titleField={this.titleField}></CardView>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
