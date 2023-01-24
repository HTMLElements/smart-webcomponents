import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	componentDidMount() {

	}

	handleReady() {
		ReactDOM.render(
			<Splitter>
				<SplitterItem size="33%" collapsible id="item1">Item 1</SplitterItem>
				<SplitterItem size="33%" id="item2">Item 2</SplitterItem>
				<SplitterItem collapsible id="item3">Item 3</SplitterItem>
			</Splitter>,
			document.getElementById('splitterContainer'));
	}

	render() {
		return (
			<div>
				<Splitter onReady={this.handleReady} orientation="horizontal" id="horizontalSplitter" dataSource={
					[{
						id: 'item0',
						size: '50%',
						content: '<div style="height: 100%;" id="splitterContainer"></div>'
					},
					{
						size: '25%',
						id: 'item4',
						content: 'Item 4',
					},
					{
						id: 'item5',
						content: 'Item 5'
					}
					]
				}></Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
