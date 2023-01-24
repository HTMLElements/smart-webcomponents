import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { Chart } from 'smart-webcomponents-react/chart';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { Layout, LayoutItem, LayoutGroup, TabLayoutGroup, TabLayoutItem } from 'smart-webcomponents-react/layout';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.listbox = React.createRef();
		this.textbox = React.createRef();
		this.textbox2 = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.datetimepicker = React.createRef();
		this.grid = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.headerName = React.createRef();
		this.headerLogo = React.createRef();
		this.personInfo = React.createRef();
	}

	data = [{
		id: 0,
		date: new Date(new Date().setDate(new Date().getDate() - 1)),
		name: 'Nancy Davolio',
		image: 'nancy',
		email: 'ndavolio@msn.com',
		diagnosis: 'Aerophobia',
		symptoms: 'Fear of flying',
		inpatient: false
	},
	{
		id: 1,
		date: new Date(new Date().setDate(new Date().getDate() - 1)),
		name: 'Andrew Fuller',
		image: 'andrew',
		email: 'afuller@msn.com',
		diagnosis: 'Pyrophobia',
		symptoms: 'Fear of fire',
		inpatient: true
	},
	{
		id: 2,
		date: new Date(new Date().setDate(new Date().getDate() - 1)),
		name: 'John Levering',
		image: 'john',
		email: 'jlevering@msn.com',
		diagnosis: 'Scolionophobia',
		symptoms: 'Fear of school',
		inpatient: true
	},
	{
		id: 3,
		date: new Date(new Date().setDate(new Date().getDate() - 1)),
		name: 'Maria Peacock',
		image: 'maria',
		email: 'mpeacock@msn.com',
		diagnosis: 'Necrophobia',
		symptoms: 'Fear of death or dead things',
		inpatient: false
	},
	{
		id: 4,
		date: new Date(new Date().setDate(new Date().getDate() - 1)),
		name: 'Steven Buchanan',
		image: 'steven',
		email: 'sbuchanan@msn.com',
		diagnosis: 'Megalophobia',
		symptoms: 'Fear of large things',
		inpatient: false
	},
	{
		id: 5,
		date: new Date(),
		name: 'Mark Suyama',
		image: 'mark',
		email: 'msuyama@msn.com',
		diagnosis: 'Microphobia',
		symptoms: 'Fear of small things',
		inpatient: true
	},
	{
		id: 6,
		date: new Date(),
		name: 'Laura Callahan',
		image: 'laura',
		email: 'lcallahan@msn.com',
		diagnosis: 'Obesophobia',
		symptoms: 'Fear of gaining weight',
		inpatient: false
	},
	{
		id: 7,
		date: new Date(),
		name: 'Robert King',
		image: 'robert',
		email: 'rking@msn.com',
		diagnosis: 'Pathophobia',
		symptoms: 'Fear of disease',
		inpatient: false
	},
	{
		id: 8,
		date: new Date(),
		name: 'Anne Barone',
		image: 'anne',
		email: 'abarone@msn.com',
		diagnosis: 'Tachophobia',
		symptoms: 'Fear of speed',
		inpatient: true
	},
	{
		id: 9,
		date: new Date(),
		name: 'Janet Peterson',
		image: 'janet',
		email: 'jpeterson@msn.com',
		diagnosis: 'Zoophobia',
		symptoms: 'Fear of animals',
		inpatient: false
	}
	];

	sampleData = [{
		type: 'Circulatory',
		inpatients: 55,
		outpatients: 80
	},
	{
		type: 'Digestive',
		inpatients: 35,
		outpatients: 55
	},
	{
		type: 'Endocrine',
		inpatients: 85,
		outpatients: 50
	},
	{
		type: 'Nervous',
		inpatients: 62,
		outpatients: 58
	},
	{
		type: 'Renal',
		inpatients: 45,
		outpatients: 65
	},
	{
		type: 'Respiratory',
		inpatients: 75,
		outpatients: 55
	}
	];

	selectedPersonId = 0;

	chartProps = {
		caption: 'Total visits',
		description: '',
		showLegend: true,
		showBorderLine: false,
		padding: {
			left: 5,
			top: 5,
			right: 5,
			bottom: 5
		},
		titlePadding: {
			left: 90,
			top: 0,
			right: 0,
			bottom: 10
		},
		dataSource: this.sampleData,
		xAxis: {
			dataField: 'type',
			visible: false
		},
		colorScheme: 'scheme05',
		seriesGroups: [{
			type: 'column',
			columnsGapPercent: 50,
			seriesGapPercent: 0,
			valueAxis: {
				unitInterval: 15,
				minValue: 0,
				maxValue: 90,
				displayValueAxis: true,
				axisSize: 'auto',
				tickMarksColor: '#888888'
			},
			series: [{
				dataField: 'inpatients',
				displayText: 'Inpatients'
			},
			{
				dataField: 'outpatients',
				displayText: 'Outpatients'
			}
			]
		}]
	}

	gridProps = {
		appearance: {
			showRowHeaderNumber: true
		},
		selection: {
			enabled: true,
			mode: 'one'
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.data,
			dataFields: [
				'date: date',
				'name: string',
				'email: string',
				'diagnosis: string',
				'symptoms: string',
				'inpatient: bool'
			]
		}),
		columns: [{
			label: '',
			dataField: 'inpatient',
			template: 'checkBox',
			width: 30
		},
		{
			label: 'Date',
			dataField: 'date',
			cellsFormat: 'dd MMMM'
		},
		{
			label: 'Name',
			dataField: 'name'
		},
		{
			label: 'Email',
			dataField: 'email'
		},
		{
			label: 'Diagnosis',
			dataField: 'diagnosis'
		},
		{
			label: 'Symptoms',
			dataField: 'symptoms'
		}
		]
	}

	initCalendar() {
		const calendar = this.calendar.current;

		calendar.min = new Date(new Date().setDate(new Date().getDate() - 1));
		calendar.max = new Date();
		calendar.clearSelection();
	}

	initGrid() {
		this.grid.current.select(0);
	}

	initListBox() {
		const listbox = this.listbox.current;

		listbox.dataSource = this.data.map(x => {
			return {
				id: x.id,
				name: x.name,
				image: x.image
			}
		});

		const items = listbox.items;

		for (let i = 0; i < listbox.dataSource.length; i++) {
			items[i].querySelector('img').src = `../../images/people/${listbox.dataSource[i].image}.jpg`
		}
	}

	//Calendar onReady
	handleCalendar() {
		const that = this;

		document.querySelector('.smart-calendar-footer smart-button').addEventListener('click', () => {
			that.calendar.current.clearSelection();
		});
	}

	handleCalendarChange(e) {
		const that = this;

		if (e.detail.value.length) {
			that.grid.current.addFilter('date', '= ' + e.detail.value[0].toLocaleDateString());
		}
		else {
			that.grid.current.clearFilter();
		}
	}

	handleListBoxChange(e) {
		this.changeSelectedPerson(e.detail.value, true);
	}

	handleGridChange(e) {
		const that = this;

		if (!e.target || (e.target && !e.target.getSelection)) {
			return;
		}

		const selection = e.target.getSelection();

		if (selection && selection.rows && selection.rows.length > 0) {
			const id = selection.rows[0].id;

			that.changeSelectedPerson(id);
		}
	}

	changeSelectedPerson(id, updateGrid) {
		const that = this;

		if (that.selectedPersonId === id) return;

		that.selectedPersonId = id;

		const personData = that.data[id];

		this.headerName.current.innerHTML = personData.name;

		const imgSrc = `../../images/people/${personData.image}.jpg`;

		this.headerLogo.current.src = imgSrc;

		const personInfo = that.personInfo.current;

		that.textbox.current.value = personData.name;
		that.datetimepicker.current.value = personData.date;
		that.textbox2.current.value = personData.email;

		personInfo.querySelector('img').src = imgSrc;

		if (personData.inpatient) {
			that.radiobutton.current.checked = true;
		}
		else {
			that.radiobutton2.current.checked = true;
		}

		if (updateGrid) {
			that.grid.current.select(personData.id);
		}
		else {
			that.listbox.current.selectedIndexes = [personData.id];
		}
	}

	updatePersonData() {
		const that = this;
		const selectedPerson = that.data[that.selectedPersonId];

		selectedPerson.name = that.textbox.current.value;
		selectedPerson.date = that.datetimepicker.current.value;
		selectedPerson.email = that.textbox2.current.value;
		selectedPerson.inpatient = that.radiobutton.current.checked ? true : false;

		// update grid data
		const grid = that.grid.current;
		const gridData = grid.rows[that.selectedPersonId].data;

		gridData.name = selectedPerson.name;
		gridData.date = selectedPerson.date;
		gridData.email = selectedPerson.email;
		gridData.inpatient = selectedPerson.inpatient;
		grid.refreshView();

		// update listbox data
		const listbox = that.listbox.current;

		listbox.update(that.selectedPersonId, selectedPerson.name);

		const items = listbox.items;

		items[that.selectedPersonId].querySelector('img').src = `../../images/people/${that.data[that.selectedPersonId].image}.jpg`;
	}

	resetForm() {
		const that = this;
		const selectedPerson = that.data[that.selectedPersonId];

		that.textbox.current.value = selectedPerson.name;
		that.datetimepicker.current.value = selectedPerson.date;
		that.textbox2.current.value = selectedPerson.email;

		document.querySelector('#personInfo img').src = `../../images/people/${selectedPerson.image}.jpg`;

		if (selectedPerson.inpatient) {
			that.radiobutton.current.checked = true;
		}
		else {
			that.radiobutton2.current.checked = true;
		}
	}

	init() {
		const that = this;

		that.initCalendar();
		that.initGrid();
		that.initListBox();
		that.resetForm();

		const calendarTemplate = document.createElement('template'),
			itemTemplate = document.createElement('template');

		calendarTemplate.id = 'calendarFooter';
		itemTemplate.id = 'template';

		calendarTemplate.innerHTML = '<smart-button className="flat primary">Clear</smart-button>';
		itemTemplate.innerHTML = '<span className="list-item"><img height="53px" className="icon" src="../../images/people/nancy.jpg" />{{label}}</span>';

		document.body.appendChild(calendarTemplate);
		document.body.appendChild(itemTemplate);

		that.calendar.current.footerTemplate = calendarTemplate.id;
		that.listbox.current.itemTemplate = itemTemplate.id;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Layout>
					<TabLayoutGroup position="bottom">
						<TabLayoutItem modifiers="drag, resize" label="Patients">
							<div className="dashboard-header"> <span ref={this.headerName} className="header-name" >Nancy Davolio</span>
								<div>
									<span className="icon-holder">
										<img ref={this.headerLogo} className="header-logo" src="../../images/people/nancy.jpg" />
									</span>
								</div>
							</div>
							<ListBox ref={this.listbox} id="listbox" filterable onChange={this.handleListBoxChange.bind(this)}
								itemHeight={53} displayMember="name" selectionMode="zeroOrOne" selectedIndexes={[0]}></ListBox>
						</TabLayoutItem>
						<TabLayoutItem modifiers="drag, resize" label="Calendar">
							<Calendar ref={this.calendar} id="calendar" viewSections={['footer']} onReady={this.handleCalendar.bind(this)} onChange={this.handleCalendarChange.bind(this)}></Calendar>
						</TabLayoutItem>
					</TabLayoutGroup>
					<TabLayoutGroup size="80%">
						<TabLayoutItem modifiers="drag, resize" label="Total Visits">
							<LayoutGroup orientation="horizontal">
								<LayoutGroup orientation="vertical">
									<LayoutItem>
										<Chart ref="chart" {...this.chartProps} id="chart"></Chart>
									</LayoutItem>
									<LayoutItem>
										<div ref={this.personInfo} id="personInfo">
											<img width="30%" />
											<div id="form">
												<label>Name</label>
												<TextBox ref={this.textbox} id="name"></TextBox>
												<label>Date</label>
												<DateTimePicker ref={this.datetimepicker} calendarButton
													formatString="MM/dd/yyyy" dropDownAppendTo="body"></DateTimePicker>
												<label>Email</label>
												<TextBox ref={this.textbox2} id="email"></TextBox>
												<RadioButton ref={this.radiobutton} id="inpatient">Inpatient</RadioButton>
												<RadioButton ref={this.radiobutton2} id="outpatient">Outpatient</RadioButton>
												<div className="buttons">
													<Button ref={this.button} className="primary" id="save" onClick={this.updatePersonData.bind(this)}>Save</Button>
													<Button ref={this.button2} id="reset" onClick={this.resetForm.bind(this)}>Reset</Button>
												</div>
											</div>
										</div>
									</LayoutItem>
								</LayoutGroup>
								<TabLayoutGroup position="bottom">
									<TabLayoutItem modifiers="drag, resize" label="In/Out Patients">
										<Grid ref={this.grid} {...this.gridProps} id="grid" onChange={this.handleGridChange.bind(this)}></Grid>
									</TabLayoutItem>
								</TabLayoutGroup>
							</LayoutGroup>
						</TabLayoutItem>
					</TabLayoutGroup>
				</Layout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
