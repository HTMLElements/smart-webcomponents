import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	handleReady() {
		ReactDOM.render(<Splitter>
			<SplitterItem collapsible id="item1">Item 1</SplitterItem>
			<SplitterItem id="item2">Item 2</SplitterItem>
			<SplitterItem collapsible id="item3">Item 3</SplitterItem>
		</Splitter>, document.createDocumentFragment(), function () {
			document.getElementById('item0').appendChild(this.nativeElement);
		});
	}

	dataSource = [{
		id: 'item0',
		content: ''
	},
	{
		id: 'item4',
		content: 'Item 4',
	},
	{
		id: 'item5',
		content: 'Item 5'
	}];


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Splitter id="horizontalSplitter" orientation="horizontal" onReady={this.handleReady.bind(this)}
					autoFitMode="overflow" dataSource={this.dataSource}></Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
