import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {

	getKanbanDataItems(locale = 'en') {
        var firstNames = ["Nancy", "Andrew", "Johnny", "Maya", "Steven", "Mark", "Monica", "Laura", "Anne"];
        var lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
    
        const text = {
            en: [
                'Research', 'Displaying data from data source', 'Showing cover and title', 'Property validation',
                'formatFunction and formatSettings', 'Expand/collapse arrow', 'Virtual scrolling', 'Deferred scrolling',
                'Infinite scrolling', 'Visible/hidden columns', 'Public methods', 'Editing',
                'Header', 'Dragging with feedback', 'Vertical virtualization', 'Observable columns array',
                'Reusing existing HTML elements', 'Virtualize collapsed cards'
            ]
        },
            tags = {
                en: ['initial', 'data', 'visual', 'property', 'scrolling', 'method']
            },
            data = [
                {
                    id: 0,
                    status: 'done',
                    text: text[locale][0],
                    tags: tags[locale][0],
                    progress: 100,
                    name: firstNames[0] + ' ' + lastNames[0],
                    userId: 2,
                    startDate: null,
                    dueDate: null
    
                }, {
                    id: 1,
                    status: 'done',
                    text: text[locale][1],
                    tags: tags[locale][1],
                    priority: 'high',
                    progress: 100,
                    name: firstNames[1] + ' ' + lastNames[1],
                    userId: 3,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 2,
                    status: 'done',
                    text: text[locale][2],
                    tags: tags[locale][2] + ', ' + tags[locale][3],
                    name: firstNames[2] + ' ' + lastNames[2],
                    priority: 'high',
                    progress: 100,
                    userId: 2,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 3,
                    status: 'done',
                    text: text[locale][3],
                    tags: tags[locale][3],
                    name: firstNames[3] + ' ' + lastNames[3],
                    checklist: [
                        { text: 'addNewButton', completed: true },
                        { text: 'allowDrag', completed: true },
                        { text: 'cardHeight', completed: true },
                        { text: 'cellOrientation', completed: true },
                        { text: 'collapsible', completed: true },
                        { text: 'columns', completed: true }
                    ],
                    userId: 1,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 4,
                    status: 'done',
                    text: text[locale][4],
                    name: firstNames[4] + ' ' + lastNames[4],
                    tags: tags[locale][1] + ', ' + tags[locale][3],
                    progress: 100,
                    userId: 0,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 5,
                    status: 'testing',
                    text: text[locale][5],
                    name: firstNames[5] + ' ' + lastNames[5],
                    tags: tags[locale][2],
                    progress: 90,
                    userId: 3,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 7,
                    status: 'testing',
                    text: text[locale][6],
                    name: firstNames[6] + ' ' + lastNames[6],
                    tags: tags[locale][4] + ', ' + tags[locale][1],
                    progress: 10,
                    userId: 3,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 6,
                    status: 'testing',
                    text: text[locale][7],
                    name: firstNames[7] + ' ' + lastNames[7],
                    tags: tags[locale][4],
                    color: '#9966CC',
                    userId: 3,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 8,
                    status: 'inProgress',
                    text: text[locale][8],
                    name: firstNames[8] + ' ' + lastNames[8],
                    tags: tags[locale][4] + ', ' + tags[locale][1],
                    progress: 25,
                    userId: 0,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 9,
                    status: 'inProgress',
                    text: text[locale][9],
                    name: firstNames[0] + ' ' + lastNames[1],
                    tags: tags[locale][2],
                    priority: 'high',
                    progress: 85,
                    color: 'red',
                    userId: 1,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 10,
                    status: 'inProgress',
                    text: text[locale][10],
                    name: firstNames[1] + ' ' + lastNames[2],
                    tags: tags[locale][5],
                    checklist: [
                        { text: 'closePanel', completed: true },
                        { text: 'openCustomizePanel', completed: true },
                        { text: 'openFilterPanel', completed: true },
                        { text: 'openSortPanel', completed: false },
                        { text: 'showColumn', completed: false },
                        { text: 'hideColumn', completed: false },
                        { text: 'addFilter', completed: false },
                        { text: 'removeFilter', completed: false }
                    ],
                    userId: 2,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 11,
                    name: firstNames[3] + ' ' + lastNames[4],
                    status: 'toDo',
                    text: text[locale][11],
                    tags: tags[locale][5],
                    priority: 'high',
                    progress: 0,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 12,
                    status: 'toDo',
                    name: firstNames[5] + ' ' + lastNames[6],
                    text: text[locale][12],
                    tags: tags[locale][2],
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 13,
                    name: firstNames[3] + ' ' + lastNames[4],
                    status: 'toDo',
                    text: text[locale][13],
                    tags: tags[locale][2] + ', ' + tags[locale][5] + ', ' + tags[locale][1],
                    priority: 'low',
                    userId: 4,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    id: 14,
                    name: firstNames[7] + ' ' + lastNames[8],
                    status: 'toDo',
                    text: text[locale][14],
                    checklist: [
                        { text: text[locale][16], completed: false },
                        { text: text[locale][17], completed: false }
                    ],
                    userId: 1,
                    startDate: null,
                    dueDate: null,
                    comments: []
                }, {
                    name: firstNames[0] + ' ' + lastNames[2],
                    id: 15,
                    status: 'toDo',
                    text: text[locale][15],
                    tags: tags[locale][1],
                    startDate: null,
                    dueDate: null,
                    comments: []
                }
            ],
            time = new Date().getTime(),
            msInMonth = 2592000000,
            msInDay = 86400000,
            comments = [
                'Ut ultrices dolor vitae magna lacinia vehicula.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Donec vitae dapibus mauris, quis cursus nibh.',
                'Aenean ultrices maximus ex id scelerisque. Suspendisse cursus maximus nulla, sed ornare lectus aliquet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                'Curabitur at accumsan metus, rhoncus porttitor ligula.',
                'Nulla sodales faucibus accumsan.'
            ];
    
        for (let i = 0; i < data.length; i++) {
            const task = data[i];
    
            if (task.status === 'inProgress') {
                task.startDate = new Date(time - Math.floor(Math.random() * 9 + 1) * msInDay);
            }
            else if (task.status === 'testing') {
                task.startDate = new Date(time - Math.floor(Math.random() * 20 + 10) * msInDay);
            }
            else if (task.status === 'done') {
                task.startDate = new Date(time - Math.floor(Math.random() * 20 + 20) * msInDay);
            }
    
            if (task.priority === 'high' && task.status !== 'done') {
                task.dueDate = new Date(time - Math.floor(Math.random() * 3 + 1) * msInDay);
            }
            else if (task.priority === 'low') {
                task.dueDate = new Date(time + msInMonth + Math.floor(Math.random() * 30 + 10) * msInDay);
            }
            else if (task.startDate) {
                task.dueDate = new Date(task.startDate.getTime() + msInMonth + Math.floor(Math.random() * 2 + 1) * msInDay);
            }
            else {
                task.dueDate = new Date(time + msInMonth + Math.floor(Math.random() * 2 + 1) * msInDay);
            }
    
            let numberOfComments = Math.round(Math.random() * 3);
    
            if (Math.round(Math.random() + 1) === 2) {
                let prevTime = time - Math.floor(Math.random() * 10 + 3) * msInDay;
    
                for (let j = 0; j < numberOfComments; j++) {
                    prevTime = prevTime + Math.floor(Math.random() * 2 + 1) * msInDay + msInDay / Math.floor(Math.random() * 5 + 1);
    
                    task.comments.push({
                        text: comments[Math.round(Math.random() * 5)],
                        userId: Math.round(Math.random() * 4),
                        time: new Date(prevTime)
                    });
                }
            }
        }
    
        return data;
    }
    
    getKanbanData() {
        let data = [];
        for (let i = 0; i < 630; i++) {
            data = data.concat(this.getKanbanDataItems());
        }
    
        for (let i = 0; i < data.length; i++) {
            data[i].id = i;
            data[i].text = data[i].text + i;
        }
    
        return data;
    }

    collapsible = true;
    editable = true;
    dataSource = this.getKanbanData();
    taskActions = true;
    taskDue = true;
    taskSubtasks = true;
    taskComments = true;
    currentUser = 0;
    taskProgress = true;
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        {
            label: 'Done', dataField: 'done'
        }
    ];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div class="demo-description">10 000 tasks are loaded in the Kanban</div>
				<Kanban
					collapsible={this.collapsible} editable={this.editable} dataSource={this.dataSource}
					taskActions={this.taskActions} taskDue={this.taskDue} taskSubTasks={this.taskSubtasks}
					taskComments={this.taskComments} currentUser={this.currentUser} taskProgress={this.taskProgress}
					columns={this.columns}
				>
				</Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
