import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	header = {
		visible: true
	};
	columnMenu = {
		dataSource: {
			columnMenuItemRename: {
				visible: true
			},
			columnMenuItemEditDescription: {
				visible: true
			},
			columnMenuItemHide: {
				visible: true
			},
			columnMenuItemDelete: {
				visible: true
			}
		}
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: [{
			name: 'Brand wrapper',
			projectValue: 1000,
			category: 'Brand indentity',
			completed: true,
			projectImages: 'branding',
			client: 'Sofia\'s Coffee',
			projectLead: 'Nancy Winkler',
			website: 'htmlelements.com',
			projectTeam: 'Steven Vileid, Robert Ohno, Laura Rossi',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Brand packer',
			projectValue: 900,
			category: 'Brand indentity',
			completed: false,
			projectImages: 'brand',
			client: 'Center of History',
			projectLead: 'Anne Devling',
			website: 'jqwidgets.com',
			projectTeam: 'Andrew Fuller, Steven Vileid',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Engineer brand indentity',
			projectValue: 400,
			category: 'Brand indentity',
			completed: true,
			projectImages: 'museum',
			client: 'Engineer',
			projectLead: 'Michael Rossi',
			website: 'htmlelements.com',
			projectTeam: 'Michael Rossi, Anne Wilson',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Content building',
			projectValue: 600,
			category: 'Industrial design',
			completed: false,
			projectImages: 'cards',
			client: 'Tech Park',
			projectLead: 'Robert Peterson',
			website: 'htmlelements.com',
			projectTeam: 'Janet Nagase, Laura Rossi',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Design peer',
			projectValue: 700,
			category: 'Technology design',
			completed: true,
			projectImages: 'business-cards',
			client: 'System Corporation',
			projectLead: 'Andrew Vileid',
			website: 'https://htmlelements.com',
			projectTeam: 'Margaret Saylor, Nancy Burke',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Building block',
			projectValue: 300,
			category: 'Technology design',
			completed: false,
			projectImages: 'store',
			client: 'System Corporation',
			projectLead: 'Laura Bjorn',
			website: 'https://jqwidgets.com',
			projectTeam: 'Laura Bjorn',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Template building',
			projectValue: 500,
			category: 'Industrial design',
			completed: false,
			projectImages: 'cards',
			client: 'Jin-Sun Corporation',
			projectLead: 'Joe Black',
			website: 'https://jqwidgets.com',
			projectTeam: 'Joe Black, Brian O`Conner',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		],
		dataFields: [
			'name: string',
			'category: string',
			'completed: bool',
			'projectImages: string',
			'client: string',
			'projectLead: string',
			'website: string',
			'projectTeam: string',
			'kickoffDate: date',
			'projectValue: number',
			'dueDate: date'
		]
	});
	selection = {
		enabled: true,
		allowCellSelection: true,
		mode: 'extended'
	};
	grouping = {
		enabled: true
	};
	filtering = {
		enabled: true
	};
	sorting = {
		enabled: true,
		mode: 'many'
	};
	editing = {
		enabled: true
	};
	behavior = {
		columnResizeMode: 'growAndShrink'
	};
	layout = {
		rowHeight: 50
	};
	rowDetail = {
		enabled: true,
		visible: true,
		dialog: {
			enabled: true,
			header: '',
			width: 500,
			height: 'auto',
			top: 100
		}
	};
	columns = [{
		label: 'Name',
		showDescriptionButton: true,
		description: 'Project Name',
		dataField: 'name',
		freeze: false,
		allowResize: true
	},
	{
		label: 'Project lead',
		description: 'Project Lead Name',
		showDescriptionButton: true,
		width: 150,
		dataField: 'projectLead',
		allowResize: true
	},
	{
		label: 'Project images',
		description: 'Project images',
		showDescriptionButton: true,
		width: 200,
		dataField: 'projectImages',
		allowResize: true,
		template: function (formatObject) {
			formatObject.template = `<img style="width: 75px;" src="https://www.htmlelements.com/demos/images/${formatObject.value}.jpg">`;
		}
	},
	{
		label: 'Category',
		description: 'Project Category',
		showDescriptionButton: true,
		width: 200,
		dataField: 'category',
		allowResize: true,
		template: function (formatObject) {
			let color;
			if (formatObject.value === 'Brand indentity') {
				color = '#007ACC';
			} else if (formatObject.value === 'Industrial design') {
				color = '#CBC43F';
			} else {
				color = '#9641A4';
			}
			formatObject.template = `<span style="margin-left: 7px; padding: 4px 18px; border-radius: 5px; color: #fff; background: ${color}";>${formatObject.value}</span>`;
		}
	},
	{
		label: 'Done',
		showDescriptionButton: false,
		width: 80,
		dataField: 'completed',
		template: 'checkBox',
		align: 'center',
		allowResize: true
	},
	{
		label: 'Client',
		description: 'Clients',
		showDescriptionButton: true,
		width: 200,
		dataField: 'client',
		allowResize: true,
		template: function (formatObject) {
			formatObject.template = `<span style="margin-right: 7px; margin-left: 10px; padding: 4px 18px; border-radius: 5px; background: #E9EEF9";>${formatObject.value}</span>`;
		}
	},
	{
		label: 'Project team',
		description: 'Project Team members',
		showDescriptionButton: true,
		width: 300,
		dataField: 'projectTeam',
		allowResize: true
	},
	{
		label: 'Project value',
		description: 'Project value for the company',
		showDescriptionButton: true,
		width: 100,
		dataField: 'projectValue',
		allowResize: true
	},
	{
		label: 'Kickoff date',
		description: 'Kickoff date',
		showDescriptionButton: true,
		width: 200,
		dataField: 'kickoffDate',
		cellsFormat: 'd',
		allowResize: true
	},
	{
		label: 'Due date',
		description: 'Due date',
		showDescriptionButton: true,
		width: 200,
		dataField: 'dueDate',
		cellsFormat: 'd',
		allowResize: true
	}
	];

	onRowDetailInit(index, row, detail) {
		const main = document.createElement('div');
		main.className = 'details-dialog';
		Object.keys(row.data).forEach(key => {
			const element = document.createElement('div');
			element.className = 'column-info';
			switch (key) {
				case 'name': {
					const name = document.createElement('h3');
					name.innerHTML = row.data[key];
					element.appendChild(name);
				}
					break;
				case 'projectImages':
				case 'logo': {
					const label = document.createElement('label');
					label.innerHTML = 'Project images';
					const value = document.createElement('img');
					value.style.width = '100px';
					value.src = `https://www.htmlelements.com/demos/images/${row.data[key]}.jpg`;
					element.appendChild(label);
					element.appendChild(value);
				}
					break;
				case 'category': {
					const label = document.createElement('label');
					label.innerHTML = 'Category';
					const value = document.createElement('span');
					let color = row.data[key] === 'Brand indentity' ? '#007ACC' : row.data[key] === 'Industrial design' ? '#CBC43F' : '#9641A4';
					value.style.cssText = `margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background:${color}`;
					value.innerHTML = row.data[key];
					element.appendChild(label);
					element.appendChild(value);
				}
					break;
				case 'completed': {
					const label = document.createElement('label');
					label.innerHTML = 'Completed';
					const value = document.createElement('smart-check-box');
					value.readonly = true;
					value.checked = row.data[key];
					element.appendChild(label);
					element.appendChild(value);
				}
					break;
				case 'project':
				case 'client': {
					const label = document.createElement('label');
					label.innerHTML = 'Client';
					const value = document.createElement('span');
					value.style.cssText = 'margin-right: 7px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9';
					value.innerHTML = row.data[key];
					element.appendChild(label);
					element.appendChild(value);
				}
					break;
				case 'projectLead':
				case 'assignee': {
					const label = document.createElement('label');
					label.innerHTML = 'Project lead';
					const span = document.createElement('span');
					span.className = 'person-template';
					const image = document.createElement('img');
					const name = row.data[key].split(' ')[0].toLowerCase();
					image.src = `https://www.htmlelements.com/demos/images/phonebook/${name}.png`;
					const value = document.createElement('div');
					value.innerHTML = row.data[key];
					span.appendChild(image);
					span.appendChild(value);
					element.appendChild(label);
					element.appendChild(span);
				}
					break;
				case 'projectTeam': {
					const label = document.createElement('label');
					label.innerHTML = 'Project Team';
					const people = row.data[key].split(', ');
					const container = document.createElement('div');
					container.style.display = 'flex';
					for (let i = 0; i < people.length; i++) {
						const span = document.createElement('span');
						span.className = 'person-template';
						const image = document.createElement('img');
						const name = people[i].split(' ')[0].toLowerCase();
						image.src = `https://www.htmlelements.com/demos/images/phonebook/${name}.png`;
						const value = document.createElement('div');
						value.innerHTML = people[i];
						value.style.display = 'contents';
						span.appendChild(image);
						span.appendChild(value);
						container.appendChild(span);
					}
					element.appendChild(label);
					element.appendChild(container);
				}
					break;
				default: {
					if (key === '$' || key === 'leaf' || key === 'level' || key === 'parent' || !row.data[key])
						return;
					const label = document.createElement('label');
					let labelText = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
					labelText = labelText.charAt(0).toUpperCase() + labelText.slice(1);
					label.innerHTML = labelText;
					const value = document.createElement('div');
					if (key.includes('Date')) {
						value.innerHTML = row.data[key].toLocaleDateString();
					} else {
						value.innerHTML = row.data[key];
					}
					element.appendChild(label);
					element.appendChild(value);
				}
			}
			main.appendChild(element);
		});
		detail.appendChild(main);
		row.grid.rowDetail.dialog.header = row.data.name;
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description"></div>
				<Grid id="grid"
					header={this.header}
					columnMenu={this.columnMenu}
					dataSource={this.dataSource}
					selection={this.selection}
					grouping={this.grouping}
					filtering={this.filtering}
					sorting={this.sorting}
					editing={this.editing}
					behavior={this.behavior}
					layout={this.layout}
					rowDetail={this.rowDetail}
					columns={this.columns}
					onRowDetailInit={this.onRowDetailInit}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
