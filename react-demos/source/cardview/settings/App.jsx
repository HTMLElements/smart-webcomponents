import React from "react";
import ReactDOM from "react-dom";
import { CardView } from 'smart-webcomponents-react/cardview';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.cardview = React.createRef();
		this.dropdownlist = React.createRef();
	}

	generateData() {
		const sampleData = [],
			firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'],
			lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'],
			petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'],
			productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'],
			contactImages = ['andrew.png', 'anne.png', 'avril.jpeg', 'janet.png', 'johanna.jpeg', 'johnny.jpeg', 'laura.png', 'margaret.png', 'Maria.jpeg', 'mark.jpeg', 'maya.jpeg', 'michael.png', 'monica.jpeg', 'nancy.png', 'robert.png', 'steven.jpeg', 'steven.png', 'toni.jpeg'];
		for (let i = 0; i < 20; i++) {
			const row = {};
			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
			row.petName = petNames[Math.floor(Math.random() * petNames.length)];
			row.productName = productNames[Math.floor(Math.random() * productNames.length)];
			row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
			row.quantity = Math.round(Math.random() * (50 - 1) + 1);
			row.timeOfPurchase = new Date(2018, 8, 19, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
			row.travelPhotos = [];
			row.contactPhotos = [];
			const maxPhotos = Math.floor(Math.random() * Math.floor(3)) + 1;
			for (let i = 0; i < maxPhotos; i++) {
				row.travelPhotos.push(`https://www.htmlelements.com/demos//images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
				row.contactPhotos.push(`https://www.htmlelements.com/demos//images/phonebook/${contactImages[Math.floor(Math.random() * contactImages.length)]}`);
			}
			row.travelPhotos = row.travelPhotos.join(',');
			row.contactPhotos = row.contactPhotos.join(',');
			sampleData[i] = row;
		}

		return sampleData;
	}

	photoFormatFunction(settings) {
		const photoList = settings.value.split(',');
		let htmlResult = '';
		photoList.forEach((photoUrl) => {
			htmlResult += `<img className="thumb" src="${photoUrl}" />`;
		});
		settings.template = htmlResult;
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.generateData(),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'birthday: date',
			'petName: string',
			'productName: string',
			'price: number',
			'quantity: number',
			'timeOfPurchase: date',
			'travelPhotos: string',
			'contactPhotos: string'
		]
	});
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
		label: 'Travel photos',
		dataField: 'travelPhotos',
		icon: 'photo',
		formatFunction: this.photoFormatFunction,
		image: true
	},
	{
		label: 'Contact photos',
		dataField: 'contactPhotos',
		icon: 'photo',
		formatFunction: this.photoFormatFunction,
		image: true
	}
	];
	cellOrientation = 'horizontal';
	collapsible = true;
	coverField = 'travelPhotos';
	titleField = 'firstName';

	handleCollapsibleChange(event) {
		this.cardview.current.collapsible = event.detail.value;
	}

	handleIconsChange() {
		this.cardview.current.nativeElement.classList.toggle('disabled-icons');
	}

	handleHorizontalChange() {
		this.cardview.current.cellOrientation = 'horizontal';
	}

	handleVerticalChange() {
		this.cardview.current.cellOrientation = 'vertical';
	}

	handleCropChange() {
		this.cardview.current.coverMode = 'crop';
	}

	handleFitChange() {
		this.cardview.current.coverMode = 'fit';
	}

	handleTitleFieldChange() {
		switch (this.dropdownlist.current.selectedIndexes[0]) {
			case 0:
				this.cardview.current.titleField = 'firstName';
				break;
			case 1:
				this.cardview.current.titleField = 'lastName';
				break;
			case 2:
				this.cardview.current.titleField = 'petName';
				break;
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="options" style={{ position: 'absolute', right: '10px' }}>
					<CheckBox id="collapsible" checked onChange={this.handleCollapsibleChange.bind(this)}>Collapsible cards</CheckBox>
					<CheckBox id="icons" checked onChange={this.handleIconsChange.bind(this)}>Icons</CheckBox>
					<div>
						<p>Cell orientation:</p>
						<RadioButton id="horizontal" checked onChange={this.handleHorizontalChange.bind(this)}>horizontal</RadioButton>
						<RadioButton id="vertical" onChange={this.handleVerticalChange.bind(this)}>vertical</RadioButton>
					</div>
					<div>
						<p>Cover mode:</p>
						<RadioButton id="crop" checked onChange={this.handleCropChange.bind(this)}>crop</RadioButton>
						<RadioButton id="fit" onChange={this.handleFitChange.bind(this)}>fit</RadioButton>
					</div>
					<p>Title:</p>
					<DropDownList ref={this.dropdownlist} id="titleField" dataSource={["First name", "Last name", "Pet name"]}
						selectedIndexes={[0]} onChange={this.handleTitleFieldChange.bind(this)}></DropDownList>
				</div>
				<CardView ref={this.cardview} id="cardView"
					dataSource={this.dataSource}
					columns={this.columns}
					cellOrientation={this.cellOrientation}
					collapsible={this.collapsible}
					coverField={this.coverField}
					titleField={this.titleField}></CardView>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
