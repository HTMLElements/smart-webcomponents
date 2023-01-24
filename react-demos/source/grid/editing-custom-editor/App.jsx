import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'date: date',
			'price: number',
			'total: number'
		]
	});
	editing = {
		enabled: true,
		mode: 'cell'
	};
	columns = [{
		label: 'Mood',
		dataField: '',
		editor: {
			template: '#moodEditorTemplate',
			onInit(index, dataField, editor) {
				editor.addEventListener('click', function (event) {
					editor.firstElementChild.value = event.target.innerHTML;
				});
			}
		},
		width: 70,
		align: 'left',
		template: '#moodTemplate',
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		editor: '<input/>'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: '<input/>'
	},
	{
		label: 'Product',
		width: 200,
		dataField: 'productName',
		editor: '#template'
	},
	{
		label: 'Order Date',
		width: 200,
		dataField: 'date',
		editor: '<input type="date"/>'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: '<input type="range"/>'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: '<input type="number"/>',
		cellsFormat: 'c2'
	}
	];

	init() {
		const moodTemplate = document.createElement('template'),
			moodEditorTemplate = document.createElement('template'),
			template = document.createElement('template');

		moodTemplate.id = 'moodTemplate';
		moodTemplate.innerHTML = '<div>Mood: {{value=&#128522;}}</div>';
		moodEditorTemplate.id = 'moodEditorTemplate';
		moodEditorTemplate.innerHTML = `<div tabindex="0" style="padding: 0px; display:flex; justify-content: center;">
											<span tabindex="1">&#128522;</span>
											<span tabindex="2">&#128528;</span>
											<span tabindex="3">&#128514;</span>
										</div >`;
		template.id = 'template';
		template.innerHTML = `<select>
								<option>Black Tea</option>
								<option>Green Tea</option>
								<option>Caffe Espresso</option>
								<option>Doubleshot Espresso</option>
								<option>Caffe Latte</option>
								<option>White Chocolate Mocha</option>
								<option>Caramel Latte</option>
								<option>Caffe Americano</option>
								<option>Cappuccino</option>
								<option>Espresso Truffle</option>
								<option>Espresso con Panna</option>
								<option>Peppermint Mocha Twist</option>
							</select>`;

		document.body.appendChild(moodTemplate);
		document.body.appendChild(moodEditorTemplate);
		document.body.appendChild(template);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Custom Template Editor with HTMLTemplateElement in smartGrid</h1>
					<p>Click on any cell to open an editor which is set with 'HTMLTemplateElement'.
					The First column represents a Template column with Emoji icons. When the
					column is in edit mode, it displays the #moodEditorTemplate HTMLTemplateElement.
					To select a mood, click on the emoji icon and press the 'Enter' key or
					click outside the Grid. The 'First Name' and 'Last Name' columns are with
					"INPUT" tags. The 'Product' Grid column is with 'SELECT' tag, the 'Order
					Date' column is with 'INPUT TYPE="DATE"' editor. The 'Quantity' column
					is with 'INPUT TYPE="RANGE"' editor and the 'Unit Price' Grid column is
			            with 'INPUT TYPE="NUMBER"' editor.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
