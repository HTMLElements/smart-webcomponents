import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	columnLabels = {
		'en': {
			'firstName': 'First Name',
			'lastName': 'Last Name',
			'date': 'Date',
			'price': 'Price',
			'quantity': 'Quantity',
			'total': 'Total',
		},
		'de': {
			'firstName': 'Vorname',
			'lastName': 'Familienname',
			'price': 'Preis',
			'quantity': 'Quantität',
			'date': 'Datum',
			'total': 'Gesamt',
		}
	};

	sorting = {
		enabled: true
	};
	locale = 'de';
	messages = {
		'en': {
			'columnMenuItemSortAsc': 'Sort {{mode}}',
			'columnMenuItemSortDesc': 'Sort {{mode}}',
			'columnMenuItemRemoveSort': 'Remove Sort'
		},
		'de': {
			'columnMenuItemSortAsc': 'Sortieren {{mode}}',
			'columnMenuItemSortDesc': 'Sortieren {{mode}}',
			'columnMenuItemRemoveSort': 'Sortierung entfernen',
		}
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'quantity: number',
			'price: number',
			'date: date',
			'total: number'
		]
	});
	columns = [{
		label: this.columnLabels['de'].firstName,
		dataField: 'firstName'
	},
	{
		label: this.columnLabels['de'].lastName,
		dataField: 'lastName'
	},
	{
		label: this.columnLabels['de'].date,
		dataField: 'date',
		cellsFormat: 'D',
		formatSettings: {
			Intl: {
				DateTimeFormat: {
					dateStyle: 'full'
				}
			}
		}
	},
	{
		label: this.columnLabels['de'].quantity,
		dataField: 'quantity'
	},
	{
		label: this.columnLabels['de'].price,
		dataField: 'price',
		cellsFormat: 'c2',
		formatSettings: {
			Intl: {
				NumberFormat: {
					style: 'currency',
					currency: 'EUR'
				}
			}
		}
	},
	{
		label: this.columnLabels['de'].total,
		dataField: 'total',
		cellsFormat: 'c2',
		formatSettings: {
			Intl: {
				NumberFormat: {
					style: 'currency',
					currency: 'EUR'
				}
			}
		}
	}
	];

	setFormat(column, locale) {
		if (column.dataField === 'total' || column.dataField === 'price') {
			column.formatSettings = {
				Intl: {
					NumberFormat: {
						style: 'currency',
						currency: locale === 'de' ? 'EUR' : (locale === 'enUK' ? 'GBP' : 'USD')
					}
				}
			};
		}
		if (column.dataField === 'date') {
			column.formatSettings = {
				Intl: {
					DateTimeFormat: {
						dateStyle: 'full'
					}
				}
			};
		}
	}

	update(id) {
		const grid = this.grid.current;

		// begin updating the grid.
		grid.beginUpdate();
		const locale = id !== 'de' ? 'en' : 'de';
		const columns = grid.columns;
		grid.locale = locale;
		for (let i = 0; i < columns.length; i++) {
			const column = columns[i];
			column.label = this.columnLabels[locale][column.dataField];
			this.setFormat(column, id);
		};
		// end update and refresh.
		grid.endUpdate(false);
	}

	handleEnUKChange() {
		this.update('enUK');
	}

	handleEnUSChange() {
		this.update('enUS');
	}

	handleDeChange() {
		this.update('de');
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Grid ref={this.grid} id="grid"
					sorting={this.sorting}
					locale={this.locale}
					messages={this.messages}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Language:</div>
					<div className="option">
						<br />
						<RadioButton className="language" id="enUK" onChange={this.handleEnUKChange.bind(this)}>English (UK)</RadioButton>
						<br />
						<RadioButton className="language" id="enUS" onChange={this.handleEnUSChange.bind(this)}>English (USA)</RadioButton>
						<br />
						<RadioButton className="language" id="de" checked onChange={this.handleDeChange.bind(this)}>Deutsch</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
