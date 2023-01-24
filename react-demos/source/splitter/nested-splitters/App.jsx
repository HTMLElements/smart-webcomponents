import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	dataSource = [{
		id: 'item00',
		collapsible: true,
		content: `Left Pane`,
		size: 200
	},
	{
		id: 'item01',
		content: ''
	}];

	handleReady() {
		ReactDOM.render(<Splitter id="nestedSplitter0" orientation="horizontal">
							<SplitterItem id="item02" size="200" collapsible>Nested Splitter Top Pane</SplitterItem>
							<SplitterItem id="item03">Nested Splitter Bottom Content</SplitterItem>
						</Splitter >, new DocumentFragment(), function () {
			document.getElementById('item01').appendChild(this.nativeElement);
		});

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Splitter id="splitter0" onReady={this.handleReady.bind(this)} dataSource={this.dataSource}></Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
