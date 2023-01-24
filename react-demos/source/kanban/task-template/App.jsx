import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
	}

	createImageThumbs(settings) {
		if (!settings.data.checklist) {
			return settings.text;
		}
		let toInclude = '';
		settings.data.checklist.forEach((subtask) => {
			if (subtask.completed) {
				toInclude += `<div className="thumb" style="background-image: url('${subtask.text}');"></div>`;
			}
		});
		if (toInclude) {
			toInclude = `<div className="gallery">${toInclude}</div>`;
		}
		settings.text = `<span>${settings.text}</span>${toInclude}`;
	}

	dataSource = GetKanbanData();

	columns = [{
		label: 'To do',
		dataField: 'toDo'
	},
	{
		label: 'In progress',
		dataField: 'inProgress'
	},
	{
		label: 'Testing',
		dataField: 'testing'
	},
	{
		label: 'Done',
		dataField: 'done'
	}
	];

	textTemplate(settings) {
		const data = settings.data,
			task = settings.task,
			text = settings.text;
		if (data.id === 16) {
			this.createImageThumbs(settings);
			return;
		}
		if (data.priority === 'high' && data.status !== 'done') {
			data.color = 'orangered';
			settings.template = '#kanbanTemplateHighPriority'; // references a template element in the DOM
			return;
		} else if (data.color === 'orangered') {
			data.color = null; // restores default color
		}
		if (data.checklist) {
			let toComplete = '';
			data.checklist.forEach((subtask) => {
				if (!subtask.completed) {
					toComplete += `<li>${subtask.text}</li>`;
				}
			});
			if (toComplete) {
				toComplete = `<br /><br /><span>Remaining tasks:</span><ul>${toComplete}</ul>`;
			}
			settings.text = `<span>${text}</span>${toComplete}`;
		}
	}

	init() {
		this.dataSource.push({
			id: 16,
			text: 'Improve performance',
			status: 'inProgress',
			checklist: [{
				text: 'https://www.htmlelements.com/demos/images/card-demo-chart-1.png',
				completed: true
			},
			{
				text: 'https://www.htmlelements.com/demos/images/card-demo-chart-2.png',
				completed: false
			},
			{
				text: 'https://www.htmlelements.com/demos/images/card-demo-chart-3.png',
				completed: true
			},
			{
				text: 'https://www.htmlelements.com/demos/images/card-demo-chart-4.png',
				completed: true
			}
			]
		});

		this.kanban.current.dataSource = this.dataSource;

		const kanbanTemplateHighPriority = document.createElement('template');

		kanbanTemplateHighPriority.id = 'kanbanTemplateHighPriority';
		kanbanTemplateHighPriority.innerHTML = '<span className="attention">Task with HIGH priority. Please begin work as soon as possible.</span><br /><br />{{text}}';

		document.body.appendChild(kanbanTemplateHighPriority);
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Kanban ref={this.kanban} id="kanban"
					collapsible
					editable
					columns={this.columns}
					textTemplate={this.textTemplate.bind(this)}
				></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
