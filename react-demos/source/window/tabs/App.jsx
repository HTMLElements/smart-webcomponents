import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
		this.tabitem = React.createRef();
		this.tabitem2 = React.createRef();
		this.tabitem3 = React.createRef();
	}

	handleClick() {
		this.window.current.opened ? this.window.current.close() : this.window.current.open();
	}

	init() {
		document.getElementById('templateContainer').innerHTML = `
		<template id="primaryTemplate">Primary <span className='smart-badge smart-badge-success'>10</span>
		</template>
		<template id="promotionsTemplate">Promotions <span className='smart-badge smart-badge-info'>0</span>
		</template>
		<template id="spamTemplate">Spam <span className='smart-badge smart-badge-danger'>1</span>
		</template>
		`;

		this.tabitem.current.label = 'primaryTemplate';
		this.tabitem2.current.label = 'promotionsTemplate';
		this.tabitem3.current.label = 'spamTemplate';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="option">
						<Button  id="openButton" onClick={this.handleClick.bind(this)}>Open/Close</Button>
					</div>
				</div>
				<div id="templateContainer"></div>
				<Window ref={this.window} opened label="Mailbox">
					<Tabs id="tabs" selectedIndex={0}>
						<TabItem ref={this.tabitem}>
							<ListBox className="mailList">
								<ListItem>Re: Exam <strong className="date">9/1/17</strong>
								</ListItem>
								<ListItem>Dinner tonight? <strong className="date">8/16/17</strong>
								</ListItem>
								<ListItem>Hi <strong className="date">8/1/17</strong>
								</ListItem>
								<ListItem>About the interview <strong className="date">7/11/17</strong>
								</ListItem>
								<ListItem>Re: Query about car purchase <strong className="date">6/29/17</strong>
								</ListItem>
								<ListItem>Your weekly newsletter <strong className="date">6/17/17</strong>
								</ListItem>
								<ListItem>Important update <strong className="date">5/30/17</strong>
								</ListItem>
								<ListItem>Re: Introduction <strong className="date">5/30/17</strong>
								</ListItem>
								<ListItem>Welcome to our forums <strong className="date">5/28/17</strong>
								</ListItem>
								<ListItem>Your weekly newsletter <strong className="date">4/17/17</strong>
								</ListItem>
							</ListBox>
						</TabItem>
						<TabItem ref={this.tabitem2}>Your Promotions tab is empty.</TabItem>
						<TabItem ref={this.tabitem3}>
							<ListBox  className="mailList">
								<ListItem>Join our club today! <strong className="date">9/1/17</strong>
								</ListItem>
							</ListBox>
						</TabItem>
					</Tabs>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
