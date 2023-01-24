import React from "react";
import ReactDOM from "react-dom";
import { Smart, CardView } from 'smart-webcomponents-react/cardview';

class App extends React.Component {
	generateData = (length) => {
		const sampleData = [],
			firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'],
			lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'],
			petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'],
			countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'],
			productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
		for (let i = 0; i < length; i++) {
			const row = {};
			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
			row.petName = petNames[Math.floor(Math.random() * petNames.length)];
			row.country = countries[Math.floor(Math.random() * countries.length)];
			row.productName = productNames[Math.floor(Math.random() * productNames.length)];
			row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
			row.quantity = Math.round(Math.random() * (50 - 1) + 1);
			row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
			row.expired = Math.random() >= 0.5;
			row.attachments = [];
			const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
			for (let i = 0; i < maxAttachments; i++) {
				row.attachments.push(`https://www.htmlelements.com/demos//images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
			}
			row.attachments = row.attachments.join(',');
			sampleData[i] = row;
		}

		return sampleData;
	}

	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		icon: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		icon: 'lastName'
	},
	{
		label: 'Birthday',
		dataField: 'birthday',
		icon: 'birthday',
		formatSettings: {
			formatString: 'd'
		}
	},
	{
		label: 'Pet Name',
		dataField: 'petName',
		icon: 'petName'
	},
	{
		label: 'Country',
		dataField: 'country',
		icon: 'country'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		icon: 'productName'
	},
	{
		label: 'Price',
		dataField: 'price',
		icon: 'price',
		formatSettings: {
			formatString: 'c2'
		}
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		icon: 'quantity',
		formatFunction: function (settings) {
			const value = settings.value;
			let className;
			if (value < 20) {
				className = 'red';
			} else if (value < 35) {
				className = 'yellow';
			} else {
				className = 'green';
			}
			settings.template = `<div className="${className}">${value}</div>`;
		}
	},
	{
		label: 'Time of Purchase',
		dataField: 'timeOfPurchase',
		icon: 'timeOfPurchase',
		formatSettings: {
			formatString: 'hh:mm tt'
		}
	},
	{
		label: 'Expired',
		dataField: 'expired',
		icon: 'expired',
		formatFunction: function (settings) {
			settings.template = settings.value ? '☑' : '☐';
		}
	},
	{
		label: 'Attachments',
		dataField: 'attachments',
		image: true
	}
	];

	dataSource = new Smart.DataAdapter({
		dataSource: this.generateData(50),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'birthday: date',
			'petName: string',
			'country: string',
			'productName: string',
			'price: number',
			'quantity: number',
			'timeOfPurchase: date',
			'expired: boolean',
			'attachments: string'
		]
	});

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">In Card View, data source records are represented as cards. Each Card
				contain content and actions about a single subject. smartCardView supports
			        data sort, data filtering, data editing, data grouping and data searching.</div>
				<CardView coverField="attachments" titleField="firstName"
					id="cardView" dataSource={this.dataSource} columns={this.columns}>
				</CardView>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
