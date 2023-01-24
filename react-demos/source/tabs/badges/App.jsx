import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {
		const primaryTemplate = document.createElement('template'),
			promotionsTemplate = document.createElement('template'),
			spamTemplate = document.createElement('template');

		primaryTemplate.id = 'primaryTemplate';
		primaryTemplate.innerHTML = 'Primary <span className="smart-badge smart-badge-success">10</span>';

		promotionsTemplate.id = 'promotionsTemplate';
		promotionsTemplate.innerHTML = 'Promotions <span className="smart-badge smart-badge-info">0</span>';

		spamTemplate.id = 'spamTemplate';
		spamTemplate.innerHTML = 'Spam <span className="smart-badge smart-badge-danger">1</span>';

		document.body.appendChild(primaryTemplate);
		document.body.appendChild(promotionsTemplate);
		document.body.appendChild(spamTemplate);
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Tabs id="tabs" selectedIndex={0} animation="none">
					<TabItem label="primaryTemplate">
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
						</ListBox>
					</TabItem>
					<TabItem label="promotionsTemplate">Your Promotions tab is empty.</TabItem>
					<TabItem label="spamTemplate">
						<ListBox className="mailList">
							<ListItem>Join our club today! <strong className="date">9/1/17</strong>
							</ListItem>
						</ListBox>
					</TabItem>
				</Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
