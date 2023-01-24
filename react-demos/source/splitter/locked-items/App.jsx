import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Splitter  id="horizontalSplitter">
			        <SplitterItem size="25%">Item 1</SplitterItem>
			        <SplitterItem locked>Item 2 - locked</SplitterItem>
			        <SplitterItem locked>Item 3 - locked</SplitterItem>
			        <SplitterItem size="25%">Item 4</SplitterItem>
			    </Splitter>
			    <div className="description">Item 2 and Item 3 are Locked. The Size of Item 2 and 3 is maintained on
			        resize.</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
