import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';
import { CheckBox } from 'smart-webcomponents-react/checkbox';


class App extends React.Component {
	constructor(p) {
		super(p);

		this.tabs = React.createRef();
		this.grid = React.createRef();
		this.grid2 = React.createRef();
		this.grid3 = React.createRef();
	}

	handleTabsReady() {
		const tabStrip = this.tabs.current.nativeElement.querySelector('.smart-tab-strip');
		const recordsSpan = document.createElement('span');

		recordsSpan.classList.add('records');
		recordsSpan.innerHTML = this.grid.current.dataSource.length + ' Projects';

		this.recordsSpan = recordsSpan;

		tabStrip.appendChild(recordsSpan);
	}

	handleTabsChange(event) {
		const index = event.detail.index;

		if (index === 0) {
			this.recordsSpan.innerHTML = this.grid.current.dataSource.length + ' Projects';
		}
		else if (index === 1) {
			this.recordsSpan.innerHTML = this.grid2.current.dataSource.length + ' Tasks';
		}
		else if (index === 2) {
			this.recordsSpan.innerHTML = this.grid3.current.dataSource.length + ' Clients';
		}
	}

	dataSource1 = [{
		name: 'Brand wrapper',
		category: 'Brand indentity',
		completed: true,
		projectImages: 'branding',
		client: 'Sofia\'s Coffee',
		projectLead: 'Nancy Winkler',
		projectTeam: 'Steven Vileid, Robert Ohno, Laura Rossi',
		kickoffDate: new Date(),
		dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
	},
	{
		name: 'Brand packer',
		category: 'Brand indentity',
		completed: false,
		projectImages: 'brand',
		client: 'Center of History',
		projectLead: 'Anne Devling',
		projectTeam: 'Andrew Fuller, Steven Vileid',
		kickoffDate: new Date(),
		dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
	},
	{
		name: 'Engineer brand indentity',
		category: 'Brand indentity',
		completed: true,
		projectImages: 'museum',
		client: 'Engineer',
		projectLead: 'Michael Rossi',
		projectTeam: 'Michael Rossi, Anne Wilson',
		kickoffDate: new Date(),
		dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
	},
	{
		name: 'Content building',
		category: 'Industrial design',
		completed: false,
		projectImages: 'cards',
		client: 'Tech Park',
		projectLead: 'Robert Peterson',
		projectTeam: 'Janet Nagase, Laura Rossi',
		kickoffDate: new Date(),
		dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
	},
	{
		name: 'Design peer',
		category: 'Technology design',
		completed: true,
		projectImages: 'business-cards',
		client: 'System Corporation',
		projectLead: 'Andrew Vileid',
		projectTeam: 'Margaret Saylor, Nancy Burke',
		kickoffDate: new Date(),
		dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
	},
	{
		name: 'Building block',
		category: 'Technology design',
		completed: false,
		projectImages: 'store',
		client: 'System Corporation',
		projectLead: 'Laura Bjorn',
		projectTeam: 'Laura Bjorn',
		kickoffDate: new Date(),
		dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
	},
	];
	dataSource2 = [{
		name: 'Brand wrapper',
		completed: true,
		assignee: 'Steven Vileid',
		project: 'Brand packer',
		timeEstimate: 12.5,
		notes: ''
	},
	{
		name: 'Brand packer',
		completed: true,
		assignee: 'Michael Rossi',
		project: 'Brand packer',
		timeEstimate: 8.0,
		notes: 'Some notes'
	},
	{
		name: 'Engineer brand indentity',
		completed: false,
		assignee: 'Laura Bjorn',
		project: 'Engineer brand indentity',
		timeEstimate: 5.5,
		notes: ''
	}
	];

	dataSource3 = [{
		name: 'Brand wrapper',
		logo: 'branding',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		project: 'Brand wrapper'
	},
	{
		name: 'Brand packer',
		logo: 'brand',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		project: 'Brand packer'
	},
	{
		name: 'Engineer brand indentity',
		logo: 'museum',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		project: 'Engineer brand indentity'
	},
	{
		name: 'Content building',
		logo: 'cards',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		project: 'Content building'
	},
	{
		name: 'Design peer',
		logo: 'business-cards',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		project: 'Design peer'
	},
	{
		name: 'Building block',
		logo: 'store',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		project: 'Building block'
	}
	];

	gridProps = {
		appearance: {
			showRowHeaderNumber: true,
			showRowHeaderSelectIcon: true
		},
		behavior: {
			columnResizeMode: 'split'
		},
		layout: {
			rowHeight: 50
		},
		selection: {
			enabled: true,
			allowRowHeaderSelection: true
		},
		sorting: {
			enabled: true
		},
		onRowDetailInit: this.onRowDetailInit,
		rowDetail: {
			enabled: true,
			visible: true,
			dialog: {
				enabled: true,
				header: '',
				width: 500
			}
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.dataSource1,
			dataFields: [
				'name: string',
				'category: string',
				'completed: bool',
				'projectImages: string',
				'client: string',
				'projectLead: string',
				'projectTeam: string',
				'kickoffDate: date',
				'dueDate: date'
			]
		}),
		columns: [{
			label: 'Name',
			width: '25%',
			dataField: 'name',
			freeze: true,
			allowResize: true
		},
		{
			label: 'Category',
			width: '25%',
			dataField: 'category',
			allowResize: true,
			template: function (formatObject) {
				let color;
				if (formatObject.value === 'Brand indentity') {
					color = '#18BFFF';
				} else {
					color = '#0BB723';
				}
				formatObject.template = `<span style="margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background: ${color}";>${formatObject.value}</span>`;
			}
		},
		{
			label: 'Completed',
			width: 150,
			dataField: 'completed',
			template: 'checkBox',
			align: 'center',
			allowResize: true
		},
		{
			label: 'Project images',
			width: '15%',
			dataField: 'projectImages',
			allowResize: true,
			template: function (formatObject) {
				formatObject.template = `<img style="width: 75px;" src="./../../../src/images/${formatObject.value}.jpg">`;
			}
		},
		{
			label: 'Client',
			width: '25%',
			dataField: 'client',
			allowResize: true,
			template: function (formatObject) {
				formatObject.template = `<span style="margin-right: 7px; margin-left: 10px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>${formatObject.value}</span>`;
			}
		},
		{
			label: 'Project lead',
			width: 150,
			dataField: 'projectLead',
			allowResize: true
		},
		{
			label: 'Project team',
			width: 300,
			dataField: 'projectTeam',
			allowResize: true
		},
		{
			label: 'Kickoff date',
			width: 200,
			dataField: 'kickoffDate',
			cellsFormat: 'd',
			allowResize: true
		},
		{
			label: 'Due date',
			width: 200,
			dataField: 'dueDate',
			cellsFormat: 'd',
			allowResize: true
		}
		]
	};

	gridProps2 = {
		appearance: {
			showRowHeaderNumber: true,
			showRowHeaderSelectIcon: true
		},
		behavior: {
			columnResizeMode: 'split'
		},
		layout: {
			rowHeight: 50
		},
		selection: {
			enabled: true,
			allowRowHeaderSelection: true
		},
		sorting: {
			enabled: true
		},
		onRowDetailInit: this.onRowDetailInit,
		rowDetail: {
			enabled: true,
			visible: true,
			dialog: {
				enabled: true,
				header: ''
			}
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.dataSource2,
			dataFields: [
				'name: string',
				'completed: bool',
				'assignee: string',
				'project: string',
				'timeEstimate: string',
				'notes: string'
			]
		}),
		columns: [{
			label: 'Name',
			width: '25%',
			dataField: 'name',
			freeze: false,
			allowResize: true
		},
		{
			label: 'Completed',
			width: '25%',
			dataField: 'completed',
			template: 'checkBox',
			allowResize: true
		},
		{
			label: 'Assignee',
			width: '25%',
			dataField: 'assignee',
			allowResize: true,
			template: function (formatObject) {
				const image = formatObject.value.split(' ')[0].toLowerCase();
				formatObject.template = '<span className="person-template"><img src="./../../../src/images/phonebook/' + image + '.png"><div>' + formatObject.value + '</div></span>';
			}
		},
		{
			label: 'Design project',
			width: '25%',
			dataField: 'project',
			allowResize: true,
			template: function (formatObject) {
				formatObject.template = '<span style="margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>' + formatObject.value + '</span>';
			}
		},
		{
			label: 'Time estimate (days)',
			width: '25%',
			dataField: 'timeEstimate',
			allowResize: true,
			cellsAlign: 'right'
		},
		{
			label: 'Notes',
			width: '25%',
			dataField: 'notes',
			allowResize: true
		}
		]
	};

	gridProsp3 = {
		appearance: {
			showRowHeaderNumber: true,
			showRowHeaderSelectIcon: true
		},
		behavior: {
			columnResizeMode: 'split'
		},
		layout: {
			rowHeight: 50
		},
		selection: {
			enabled: true,
			allowRowHeaderSelection: true
		},
		sorting: {
			enabled: true
		},
		onRowDetailInit: this.onRowDetailInit,
		rowDetail: {
			enabled: true,
			visible: true,
			dialog: {
				enabled: true,
				header: ''
			}
		},
		dataSource: new Smart.DataAdapter({
			dataSource: this.dataSource3,
			dataFields: [
				'name: string',
				'logo: string',
				'about: bool',
				'project: string'
			]
		}),
		columns: [{
			label: 'Name',
			width: '45%',
			dataField: 'name',
			freeze: false,
			allowResize: true
		},
		{
			label: 'Logo',
			width: '10%',
			dataField: 'logo',
			allowResize: true,
			template: function (formatObject) {
				formatObject.template = `<img style="width: 40px;" src="./../../../src/images/${formatObject.value}.jpg">`;
			}
		},
		{
			label: 'About',
			width: '60%',
			dataField: 'about',
			allowResize: true
		},
		{
			label: 'Project',
			width: '25%',
			dataField: 'project',
			allowResize: true,
			template: function (formatObject) {
				formatObject.template = '<span style="margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>' + formatObject.value + '</span>';
			}
		}
		]
	};

	onRowDetailInit(index, row, detail) {
		const main = document.createElement('div');

		main.className = 'details-dialog';

		Object.keys(row.data).forEach(key => {
			const element = document.createElement('div');

			element.className = 'column-info';

			switch (key) {
				case 'name': {
					ReactDOM.render(<h3>{row.data[key]}</h3>, element)
				}
					break;
				case 'category': {
					ReactDOM.render(<div>
						<label>Category</label>
						<span style={{ marginLeft: '7px', padding: '4px 18px', borderRadius: '10px 5px', color: '#fff', background: row.data[key] === 'Brand indentity' ? '#18BFFF' : '#F82B60' }}>{row.data[key]}</span>
					</div>, element)
					break;
				}
				case 'completed': {
					const that = this;

					ReactDOM.render(<div>
						<label>Completed</label>
						<CheckBox readonly></CheckBox>
					</div>, element, function () {
						this.querySelector('smart-check-box').checked = row.data[key];
					})

					break;
				}
				case 'projectImages':
				case 'logo': {
					const imgSrc = `./../../../src/images/${row.data[key]}.jpg`;

					ReactDOM.render(<div>
						<label>Project images</label>
						<img src={imgSrc} width="100px"></img>
					</div>, element);
					break;
				}
				case 'project':
				case 'client': {
					ReactDOM.render(<div>
						<label>Client</label>
						<span style={{ marginRight: '7px', padding: '4px 18px', borderRadius: '10px 5px', background: '#E9EEF9' }}>{row.data[key]}</span>
					</div>, element);
				}
					break;
				case 'projectLead':
				case 'assignee': {
					const imgUrl = `./../../../src/images/phonebook/${row.data[key].split(' ')[0].toLowerCase()}.png`;

					ReactDOM.render(<div>
						<label>Project lead</label>
						<span className="person-template">
							<img src={imgUrl}></img>
							<span>{row.data[key]}</span>
						</span>
					</div>, element);
					break;
				}
				case 'projectTeam': {
					ReactDOM.render(<div>
						<label>Project Team</label>
						<div className="container" style={{ display: 'flex' }}></div>
					</div>, element, function () {
						const container = this.querySelector('.container');
						const people = row.data[key].split(', ');

						for (let i = 0; i < people.length; i++) {
							const imgSrc = `./../../../src/images/phonebook/${people[i].split(' ')[0].toLowerCase()}.png`;

							ReactDOM.render(
								<span className="person-template">
									<img src={imgSrc}></img>
									<div style={{ display: 'contents' }}>{people[i]}</div>
								</span>, container);
						}
					});
					break;
				}
				default: {
					if (key === '$' || key === 'leaf' || key === 'level' || key === 'parent' || !row.data[key])
						return;

					let labelText = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
					let value;

					labelText = labelText.charAt(0).toUpperCase() + labelText.slice(1);

					if (key.includes('Date')) {
						value = row.data[key].toLocaleDateString();
					} else {
						value = row.data[key];
					}

					ReactDOM.render(<div>
						<label>{labelText}</label>
						<div>{value}</div>
					</div>, element);
				}
			}

			main.appendChild(element);
		});

		detail.appendChild(main);
		row.grid.rowDetail.dialog.header = row.data.name;
	}

	init() {

	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div id="main">
				<h1 id="title">Project Tracker</h1>
				<p>
					Managing a lot of projects at the same time is a difficult task. You should track all requirements, progress, deadlines,
					communication with stakeholders. Here is an example of a template of a project tracker. It is useful for project
					managers, freelancers, small companies and others for managing their projects easily.
			</p>

				<p>
					This template could be used for all types of project, no matter of their size. You could track either small projects
					with few requirements or big ones with a lot of team members, tasks and deadlines.
			</p>

				<p>
					This project tracker template can collect all your work in one place and gives the ability to create different views
					of your project management workflow. So all team members, as well as the managers could stay up to date with
					their individual tasks and also the overal project's status.
			</p>

				<Tabs ref={this.tabs} onChange={this.handleTabsChange.bind(this)} onReady={this.handleTabsReady.bind(this)} id="tabs" scrollButtonsPosition="far">
					<TabItem label="Design projects">
						<Grid ref={this.grid} {...this.gridProps} id="tab1Grid"></Grid>
					</TabItem>
					<TabItem label="Tasks">
						<Grid ref={this.grid2} {...this.gridProps2} id="tab2Grid"></Grid>
					</TabItem>
					<TabItem label="Clients">
						<Grid ref={this.grid3} {...this.gridProsp3} id="tab3Grid"></Grid>
					</TabItem>
				</Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
