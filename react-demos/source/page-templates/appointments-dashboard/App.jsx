import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from "smart-webcomponents-react/splitter";
import { TextBox } from "smart-webcomponents-react/textbox";
import { Chart } from "smart-webcomponents-react/chart";
import { Button } from "smart-webcomponents-react/button";
import { RadioButton } from "smart-webcomponents-react/radiobutton";
import { Calendar } from "smart-webcomponents-react/calendar";
import { ListBox } from "smart-webcomponents-react/listbox";
import { DateTimePicker } from "smart-webcomponents-react/datetimepicker";
import { Grid, Smart } from "smart-webcomponents-react/grid";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.selectedPersonId = 0;

		this.calendar = React.createRef();
		this.grid = React.createRef();
		this.listbox = React.createRef();
		this.splitter = React.createRef();
		this.textbox = React.createRef();
		this.textbox2 = React.createRef();
		this.datetimepicker = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.img = React.createRef();
		this.headername = React.createRef();
		this.headerlogo = React.createRef();
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
	}];

	calendarMin = new Date(new Date().setDate(new Date().getDate() - 1));
	calendarMax = new Date();

	handleCalendarReady() {
		ReactDOM.render(<Button className="flat primary" onClick={this.handleClear.bind(this)}>Clear</Button>, document.getElementById('footerTemplateContainer'));
	}

	caption = 'Total visits';
	description = '';
	showLegend = true;
	showBorderLine = false;
	padding = {
		left: 5,
		top: 5,
		right: 5,
		bottom: 5
	};
	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = [{
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
	}];
	xAxis = {
		dataField: 'type',
		visible: false
	};
	colorScheme = 'scheme29';
	seriesGroups = [{
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
	}];

	appearance = {
		showRowHeaderNumber: true
	};

	selection = {
		enabled: true,
		mode: 'one'
	};

	dataSourceGrid = new Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'date: date',
			'name: string',
			'email: string',
			'diagnosis: string',
			'symptoms: string',
			'inpatient: bool'
		]
	});

	columns = [{
		label: '',
		dataField: 'inpatient',
		template: 'checkBox',
		width: '3%'
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
	}];

	dataSourceListBox = this.data.map((x) => {
		return {
			id: x.id,
			name: x.name,
			image: x.image
		};
	});

	initCalendar() {
		const calendar = document.getElementById('calendar'),
			template = document.createElement('template');

		template.id = 'calendarFooter';
		template.innerHTML = '<span id="footerTemplateContainer"></span>';

		document.body.appendChild(template);

		this.calendar.current.clearSelection();
		this.calendar.current.footerTemplate = template.id;
	}

	initGrid() {
		this.grid.current.select(0);
	}

	handleReadyListBox() {
		const items = this.listbox.current.items;

		for (let i = 0; i < items.length; i++) {
			items[i].querySelector('img').src = `./../../../src/images/people/${this.listbox.current.dataSource[i].image}.png`;
		}
	}

	initListBox() {
		const template = document.createElement('template');

		template.id = 'template';
		template.innerHTML = '<span className="list-item"><img height="53px" className="icon" src="./../../../src/images/people/nancy.png" />{{label}}</span>';

		document.body.appendChild(template);

		this.listbox.current.itemTemplate = template.id;
	}

	handleChangeListBox(e) {
		this.changeSelectedPerson(e.detail.value, true);
	}

	handleChangeGrid(e) {
		this.grid.current.getSelection().then(selection => this.changeSelectedPerson(selection.rows[0].id));
	}

	handleChangeCalendar(e) {
		if (e.detail.value.length) {
			this.grid.current.addFilter('date', '= ' + e.detail.value[0].toLocaleDateString());
		}
		else {
			this.grid.current.clearFilter();
		}
	}

	handleSave() {
		this.updatePersonData();
	}

	handleReset() {
		this.resetForm();
	}

	handleClear() {
		this.calendar.current.clearSelection();
	}

	attachEvents() {
		const that = this;

		window.addEventListener('resize', e => {
			const splitter = that.splitter.current;

			if (window.innerWidth <= 500) {
				if (splitter.orientation !== 'horizontal') {
					splitter.orientation = 'horizontal';
				}
			} else {
				if (splitter.orientation !== 'vertical') {
					splitter.orientation = 'vertical';
				}
			}
		});
	}

	changeSelectedPerson(id, updateGrid) {
		if (this.selectedPersonId === id)
			return;

		this.selectedPersonId = id;

		const personData = this.data[id];

		this.headername.current.innerHTML = personData.name;

		const imgSrc = `./../../../src/images/people/${personData.image}.png`;

		this.headerlogo.current.src = imgSrc;

		this.textbox.current.value = personData.name;
		this.datetimepicker.current.value = personData.date;
		this.textbox2.current.value = personData.email;
		this.img.current.src = imgSrc;

		if (personData.inpatient) {
			this.radiobutton.current.checked = true;
		}
		else {
			this.radiobutton2.current.checked = true;
		}

		if (updateGrid) {
			this.grid.current.select(personData.id);
		}
		else {
			this.listbox.current.selectedIndexes = [personData.id];
		}
	}

	updatePersonData() {
		const selectedPerson = this.data[this.selectedPersonId];

		selectedPerson.name = this.textbox.current.value;
		selectedPerson.date = this.datetimepicker.current.value;
		selectedPerson.email = this.textbox2.current.value;
		selectedPerson.inpatient = this.radiobutton.current.checked ? true : false;
		// update grid data
		const grid = this.grid.current;
		const gridData = grid.rows[this.selectedPersonId].data;

		gridData.name = selectedPerson.name;
		gridData.date = selectedPerson.date;
		gridData.email = selectedPerson.email;
		gridData.inpatient = selectedPerson.inpatient;

		grid.refreshView();

		// update listbox data
		const listbox = this.listbox.current;

		listbox.update(this.selectedPersonId, selectedPerson.name);

		const items = listbox.items;

		items[this.selectedPersonId].querySelector('img').src = `./../../../src/images/people/${this.data[this.selectedPersonId].image}.png`;
	}

	resetForm() {
		const selectedPerson = this.data[this.selectedPersonId];

		this.textbox.current.value = selectedPerson.name;
		this.datetimepicker.current.value = selectedPerson.date;
		this.textbox2.current.value = selectedPerson.email;
		this.img.current.src = `./../../../src/images/people/${selectedPerson.image}.png`;

		if (selectedPerson.inpatient) {
			this.radiobutton.current.checked = true;
		}
		else {
			this.radiobutton2.current.checked = true;
		}
	}

	init() {
		this.initCalendar();
		this.initGrid();
		this.initListBox();
		this.resetForm();
		this.attachEvents();
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="dashboard-header">
					<span ref={this.headername} className="header-name">
						Nancy Davolio
					</span>
					<div>
						<span className="icon-holder">
							<img ref={this.headerlogo} className="header-logo" src="./images/people/nancy.png" />
						</span>
					</div>
				</div>
				<Splitter ref={this.splitter} id="dashboard" expanded>
					<SplitterItem collapsible id="leftPanel">
						<div className="upper">
							<Chart id="chart" caption={this.caption} description={this.description} showLegend={this.showLegend}
								showBorderLine={this.showBorderLine} padding={this.padding} titlePadding={this.titlePadding} xAxis={this.xAxis}
								colorScheme={this.colorScheme} seriesGroups={this.seriesGroups} dataSource={this.dataSource}></Chart>
							<div id="personInfo">
								<img ref={this.img} width="30%" />
								<div id="form">
									<label>Name</label>
									<TextBox ref={this.textbox} id="name"></TextBox>
									<label>Date</label>
									<DateTimePicker ref={this.datetimepicker} calendarButton formatString="MM/dd/yyyy" dropDownAppendTo="body"></DateTimePicker>
									<label>Email</label>
									<TextBox ref={this.textbox2} id="email"></TextBox>
									<RadioButton ref={this.radiobutton} id="inpatient">Inpatient</RadioButton>
									<RadioButton ref={this.radiobutton2} id="outpatient">Outpatient</RadioButton>
									<div className="buttons">
										<Button onClick={this.handleSave.bind(this)} id="save">Save</Button>
										<Button onClick={this.handleReset.bind(this)} id="reset">Reset</Button>
									</div>
								</div>
							</div>
						</div>
						<div>
							<Grid ref={this.grid} id="grid" onChange={this.handleChangeGrid.bind(this)} appearance={this.appearance} selection={this.selection} dataSource={this.dataSourceGrid} columns={this.columns}></Grid>
						</div>
					</SplitterItem>
					<SplitterBar className="jqx-hidden"></SplitterBar>
					<SplitterItem collapsible id="rightPanel" size="17%" min="250">
						<ListBox ref={this.listbox} onReady={this.handleReadyListBox.bind(this)} dataSource={this.dataSourceListBox} id="listbox" filterable
							itemHeight={53} displayMember="name" onChange={this.handleChangeListBox.bind(this)}
							selectionMode="zeroOrOne" selectedIndexes={[0]}>
						</ListBox>
						<Calendar ref={this.calendar} onReady={this.handleCalendarReady.bind(this)} onChange={this.handleChangeCalendar.bind(this)} id="calendar" min={this.calendarMin} max={this.calendarMax} viewSections={['footer']}></Calendar>
					</SplitterItem>
				</Splitter>
			</div>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
