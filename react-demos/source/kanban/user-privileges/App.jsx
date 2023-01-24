import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';
import { Window } from 'smart-webcomponents-react/window';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
		this.input = React.createRef();
		this.passwordtextbox = React.createRef();
		this.window = React.createRef();
		this.loginInfo = React.createRef();
		this.pic = React.createRef();
	}

	handleConfirmClick() {
		const userName = this.input.current,
			password = this.passwordtextbox.current,
			prompt = this.window.current,
			loginInfo = this.loginInfo.current,
			pic = this.pic.current;

		if (userName.value === 'Anne' && password.value === '123') {
			this.kanban.current.currentUser = 1;
			prompt.close();
			loginInfo.innerHTML = 'Logged in as Anne';
			pic.style.backgroundImage = 'url("https://www.htmlelements.com/demos/images/people/anne.png")';
		}
		else if (userName.value === 'Robert' && password.value === '123') {
			this.kanban.current.currentUser = 5;
			prompt.close();
			loginInfo.innerHTML = 'Logged in as Robert';
			pic.style.backgroundImage = 'url("https://www.htmlelements.com/demos/images/people/robert.png")';
		}
		else {
			const promptFooter = prompt.nativeElement.querySelector('.smart-footer');

			userName.value = '';
			password.value = '';
			promptFooter.classList.add('blink');
			setTimeout(() => promptFooter.classList.remove('blink'), 2000);
		}
	}

	handleLoginAgainClick() {
		this.window.current.open();
		this.input.current.value = '';
		this.passwordtextbox.current.value = '';
	}

	dataSource = GetKanbanData();

	users = [{
		id: 0,
		name: 'Andrew',
		image: 'https://www.htmlelements.com/demos/images/people/andrew.png'
	},
	{
		id: 1,
		name: 'Anne',
		image: 'https://www.htmlelements.com/demos/images/people/anne.png',
		allowAdd: true,
		allowComment: true,
		allowDrag: true,
		allowEdit: true,
		allowRemove: true
	},
	{
		id: 2,
		name: 'Janet',
		image: 'https://www.htmlelements.com/demos/images/people/janet.png'
	},
	{
		id: 3,
		name: 'John',
		image: 'https://www.htmlelements.com/demos/images/people/john.png'
	},
	{
		id: 4,
		name: 'Laura',
		image: 'https://www.htmlelements.com/demos/images/people/laura.png'
	},
	{
		id: 5,
		name: 'Robert',
		image: 'https://www.htmlelements.com/demos/images/people/robert.png',
		allowAdd: true,
		allowComment: false,
		allowDrag: true,
		allowEdit: false,
		allowRemove: false
	},
	{
		id: 6,
		name: 'Guest',
		allowAdd: false,
		allowComment: false,
		allowDrag: false,
		allowEdit: false,
		allowRemove: false
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
		dataField: 'done'
	}
	];

	init() {
		const footerTemplate = document.createElement('template');

		footerTemplate.id = 'footerTemplate';
		footerTemplate.innerHTML = 'You can log in as two different users - Anne (with full privileges) and Robert (with only privilege for adding and dragging tasks). The password for both users is 123.';

		document.body.appendChild(footerTemplate);
		this.window.current.footerTemplate = footerTemplate;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div id="header">
					<div ref={this.loginInfo} id="loginInfo">Logged in as Guest</div>
					<div id="loginAgain" onClick={this.handleLoginAgainClick.bind(this)}>Log in as another user</div>
					<div ref={this.pic} id="pic"></div>
				</div>
				<Kanban ref={this.kanban} id="kanban"
					addNewButton
					collapsible
					currentUser={6}
					dataSource={this.dataSource}
					editable
					taskActions
					taskComments
					userList
					users={this.users}
					columns={this.columns}
				></Kanban>
				<Window ref={this.window} id="prompt" modal opened label="Log in">
					<form>
						<div>User name</div>
						<Input ref={this.input} id="userName"></Input>
						<br />
						<br />
						<div>Password</div>
						<PasswordTextBox ref={this.passwordtextbox} id="password"></PasswordTextBox>
						<br />
						<Button id="confirm" className="primary" onClick={this.handleConfirmClick.bind(this)}>Log in</Button>
					</form>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
