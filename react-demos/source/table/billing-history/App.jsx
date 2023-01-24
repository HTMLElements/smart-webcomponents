import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { Toast } from 'smart-webcomponents-react/toast';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
		this.toast = React.createRef();
		this.tooltip = React.createRef();
		this.tooltip2 = React.createRef();
	}

	billingData = (() => {
		let data = [];

		for (let i = 0; i < 15; i++) {
			data.push({
				date: new Date(2019, 15 - i, 19),
				amount: i > 5 ? 11.99 : 13.99,
				description: 'Netflix subscription',
				status: i === 0 ? 'Failed' : 'Successful',
				actions: ''
			});
		}

		return data
	})();

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.billingData,
		dataFields: [
			'date: date',
			'amount: number',
			'description: string',
			'status: string'
		]
	});

	freezeHeader = true;

	selection = true;

	columns = [{
		label: 'Date',
		dataField: 'date',
		dataType: 'date',
		formatFunction: (settings) => {
			const formattedValue = new window.Smart.Utilities.DateTime(settings.value).toString('MMM dd, yyyy');
			if (this.billingData[settings.row].status === 'Failed') {
				settings.template = `<div className="icons-container"><span className="material-icons status" style="color: #a80a0a;">cancel</span><span>${formattedValue}</span><span id="errorInfo" className="material-icons info">info</span></div>`;
			} else {
				settings.template = `<div className="icons-container"><span className="material-icons status" style="color: #61a617;">check_circle</span><span>${formattedValue}</span></div>`;
			}
		}
	},
	{
		label: '<div className="icons-container">Amount<span id="amountInfo" className="material-icons info">info</span></div>',
		dataField: 'amount',
		dataType: 'number',
		formatFunction: (settings) => {
			settings.template = '$' + settings.value;
		}
	},
	{
		label: 'Description',
		dataField: 'description',
		dataType: 'string'
	},
	{
		label: 'Status',
		dataField: 'status',
		dataType: 'number',
		formatFunction: (settings) => {
			if (settings.value === 'Failed') {
				settings.template = `<div className="icons-container"><span className="material-icons status">credit_card</span><strong style="color: #a80a0a;">${settings.value}</strong></div>`;
			} else {
				settings.template = `<div className="icons-container"><span className="material-icons status">credit_card</span><strong style="color: #61a617;">${settings.value}</strong></div>`;
			}
		}
	},
	{
		label: 'Actions',
		dataField: 'actions',
		dataType: 'string',
		formatFunction: (settings) => {
			if (this.billingData[settings.row].status === 'Failed') {
				settings.template = '';
			} else {
				settings.template = '<span className="material-icons">print</span><span className="material-icons">remove_red_eye</span><span className="material-icons">email</span>';
			}
		}
	}
	];

	handleReady() {
		const table = this.table.current,
			toast = this.toast.current,
			amountTooltip = this.tooltip.current,
			errorTooltip = this.tooltip2.current,
			actionIcons = Array.from(document.querySelectorAll('td[data-field="actions"] .material-icons'));

		

		console.log(this.billingData);

		// table.nativeElement.rows[0].allowSelect = false;
		amountTooltip.selector = 'amountInfo';
		errorTooltip.selector = 'errorInfo';
		actionIcons.forEach(icon => {
			icon.addEventListener('click', function (event) {
				const innerHTML = icon.innerHTML;
				let value;
				if (innerHTML === 'print') {
					value = 'Print';
				} else if (innerHTML === 'remove_red_eye') {
					value = 'View Document';
				} else {
					value = 'Email Document';
				}
				toast.closeAll();
				toast.value = value;
				toast.open();
				event.stopPropagation();
			});
		});
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div id="mainContainer">
					<div id="header">
						<div id="title">Billing History</div>
						<div id="info">
							<div>Your next payment will be on</div>
							<div><strong>May 19, 2020</strong> for <strong>$13.99</strong>
							</div>
						</div>
					</div>
					<Table ref={this.table} id="table" onReady={this.handleReady.bind(this)} dataSource={this.dataSource} freezeHeader={this.freezeHeader} selection={this.selection} columns={this.columns}></Table>
					<div id="footer"><span className="material-icons">settings</span><span>Receipt settings</span>
					</div>
				</div>
				<Tooltip ref={this.tooltip} id="amountTooltip" arrow>Taxes are included</Tooltip>
				<Tooltip ref={this.tooltip2} id="errorTooltip"
					arrow position="bottom">Insufficient funds in account</Tooltip>
				<Toast ref={this.toast} id="actionToast"
					position="top-right" autoClose showCloseButton type="success"></Toast>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
