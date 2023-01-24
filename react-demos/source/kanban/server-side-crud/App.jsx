import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';

class App extends React.Component {

	addNewButton = true;
	currentUser = '1';
	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
			if (details.action === 'dataBind') {
				// inits the demo server.
				window.demoServer = DemoServer();
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
			} else {
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
			}
		},
		dataFields: [
			'id: number',
			'status: string',
			'text: string',
			'tags: string',
			'priority: string',
			'progress: number',
			'startDate: date',
			'dueDate: date',
			'userId: string',
			'comments: any'
		],
		id: 'id'
	});
	editable = true;
	headerPosition = 'top';
	taskActions = true;
	taskComments = true;
	taskDue = true;
	taskProgress = true;
	textTemplate = function (settings) {
		settings.template = `<span className="smart-badge smart-badge-dark">${settings.data.id}</span>${settings.text}`;
	};
	userList = true;
	users = [{
		id: '0',
		name: 'Andrew',
		image: 'https://www.htmlelements.com/demos/images/people/andrew.png'
	},
	{
		id: '1',
		name: 'Anne',
		image: 'https://www.htmlelements.com/demos/images/people/anne.png',
		allowComment: true
	},
	{
		id: '2',
		name: 'Janet',
		image: 'https://www.htmlelements.com/demos/images/people/janet.png'
	},
	{
		id: '3',
		name: 'John',
		image: 'https://www.htmlelements.com/demos/images/people/john.png'
	},
	{
		id: '4',
		name: 'Laura',
		image: 'https://www.htmlelements.com/demos/images/people/laura.png'
	}
	];
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
		dataField: 'done',
		addNewButton: false
	}
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Server-Side CRUD operations</h1>
When a new task is added, removed or updated a request with CRUD data
			        object is made via 'virtualDataSource' on the Server-Side Datasource. The
			        server uses the SQL query sent by the Server-Side Datasource to get the
			        tasks. The type of query is stored in the request's action property.
			        <br
					/>
					<br />This example uses a demo server with AlaSQL that generates SQL to show
			        how a real server might use the requests sent by the Kanban. The Server-Side
			        Kanban usage does not have any restrictions on the server-side technologies
			        used.</div>
				<Kanban id="kanban"
					addNewButton={this.addNewButton}
					currentUser={this.currentUser}
					dataSource={this.dataSource}
					editable={this.editable}
					headerPosition={this.headerPosition}
					taskActions={this.taskActions}
					taskComments={this.taskComments}
					taskDue={this.taskDue}
					taskProgress={this.taskProgress}
					textTemplate={this.textTemplate}
					userList={this.userList}
					users={this.users}
					columns={this.columns}></Kanban>
				<br />
				<br />
				<h3>SQL Query</h3>
				<div id="query"></div>
				<br />
				<br />
				<h3>Data</h3>
				<div id="dataLog"></div>
				<br />
				<h3>Comments</h3>
				<div id="commentsLog"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

function LogData(data, logElementId = 'dataLog') {
	const log = document.getElementById(logElementId);
	let content = '<table>';
	for (let i = 0; i < data.length; i++) {
		let row = '<tr>';
		if (i === 0) {
			for (let column in data[i]) {
				if (column === 'comments') {
					continue;
				}
				row += '<td>' + column + '</td>';
			}
			row += '</tr>';
		}
		content += row;
		row = '<tr>';
		for (let column in data[i]) {
			if (column === 'comments') {
				continue;
			}
			row += '<td>' + data[i][column] + '</td>';
		}
		row += '</tr>';
		content += row;
	}
	content += '</table>';
	log.innerHTML = content;
}
// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
function DemoServer() {
	window.alasql.options.cache = false;
	createTable();
	return {
		getData: function (request) {
			const queryResult = executeSql(request);
			return {
				data: queryResult.data,
				lastId: queryResult.lastId,
				length: queryResult.length
			};
		},
	};

	function createTable() {
		/* Tasks table */
		executeQuery('CREATE TABLE Tasks (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, status NVARCHAR(255), text NVARCHAR(255), tags NVARCHAR(255), priority ENUM("low", "normal", "high"), progress TINYINT, startDate DATE, dueDate DATE, userId INTEGER)');
		executeQuery('INSERT INTO Tasks (status, text, tags, priority, progress, startDate, dueDate, userId) VALUES ("done", "Research", "initial", "normal", 100, "2020-10-17", "2020-11-17", 2)');
		executeQuery('INSERT INTO Tasks (status, text, tags, priority, progress, startDate, dueDate, userId) VALUES ("done", "Displaying data from data source", "data", "high", 100, "2020-10-27", "2020-11-28", 3)');
		executeQuery('INSERT INTO Tasks (status, text, tags, priority, progress, startDate, dueDate, userId) VALUES ("inProgress", "Infinite scrolling", "scrolling, data", "normal", 25, "2020-11-11", "2020-12-12", 0)');
		executeQuery('INSERT INTO Tasks (status, text, tags, priority, progress, dueDate) VALUES ("toDo", "Editing", "method", "high", 0, "2020-11-16")');
		executeQuery('INSERT INTO Tasks (status, text, tags, priority, progress, dueDate) VALUES ("toDo", "Dragging with feedback", "visual, method, data", "low", 0, "2021-01-08")');
		executeQuery('INSERT INTO Tasks (status, text, tags, priority, progress, startDate, dueDate, userId) VALUES ("testing", "Virtual scrolling", "scrolling, data", "normal", 10, "2020-10-30", "2020-12-01", 3)');
		/* Comments table */
		executeQuery('CREATE TABLE Comments (taskid INTEGER, text NVARCHAR(255), userId INTEGER, time DATETIME)');
		executeQuery('INSERT INTO Comments VALUES (1, "Well done!", "3", "2020-11-23 13:08:11")');
	}

	function executeQuery(query) {
		return window.alasql(query);
	}

	function executeSql(request) {
		let lastId;
		window.query.innerHTML = '';
		// Deletes a task and its comments.
		if (request.action === 'remove') {
			const removeQuery = request.query['remove'],
				sqlDeleteQuery = 'DELETE FROM Tasks' + removeQuery,
				taskid = /WHERE id=(.+)/.exec(removeQuery)[1];
			window.alasql(sqlDeleteQuery);
			window.query.innerHTML = sqlDeleteQuery;
			executeQuery('DELETE FROM Comments WHERE taskid=' + taskid);
		}
		// Adds a task.
		else if (request.action === 'add') {
			const sqlAddQuery = 'INSERT Tasks' + request.query['add'];
			window.alasql(sqlAddQuery);
			lastId = window.alasql.tables['Tasks'].identities.id.value;
			window.query.innerHTML = sqlAddQuery;
		}
		// Updates a task and its comments.
		else if (request.action === 'update') {
			const updateQuery = request.query['update'],
				taskid = /WHERE id=(.+)/.exec(updateQuery)[1],
				commentsRegex = /,\s?comments='\[.*\]'/;
			let comments = commentsRegex.exec(updateQuery)[0];
			comments = /\[.*\]/.exec(comments)[0];
			comments = JSON.parse(comments);
			executeQuery('DELETE FROM Comments WHERE taskid=' + taskid);
			for (const comment of comments) {
				executeQuery(`INSERT INTO Comments VALUES (${taskid}, "${comment.text}", "${comment.userId}", "${comment.time}")`);
			}
			const sqlUpdateQuery = 'UPDATE Tasks' + updateQuery.replace(commentsRegex, '');
			window.alasql(sqlUpdateQuery);
			window.query.innerHTML = sqlUpdateQuery;
		}
		// SQL Select query.
		const sql = 'SELECT * FROM Tasks' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
		// SQL Records Count query.
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Tasks ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Tasks ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		if (window.query.innerHTML === '') {
			window.query.innerHTML = sql;
		}
		const commentsData = executeQuery('SELECT * FROM Comments');
		LogData(commentsData, 'commentsLog');
		result.forEach((task) => {
			task.comments = commentsData.filter((comment) => comment.taskid === task.id);
		});
		return {
			data: result,
			lastId: lastId,
			length: length
		};
	}
}

export default App;
