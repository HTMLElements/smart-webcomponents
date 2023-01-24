import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Splitter  orientation="horizontal" id="horizontalSplitter"
			    className="animation">
			        <SplitterItem min="200" max="350">Min: 200
			            <br />Max: 350
			            <div className="current-size"></div>
			        </SplitterItem>
			        <SplitterItem min="100" max="200">Min: 100
			            <br />Max: 200
			            <div className="current-size"></div>
			        </SplitterItem>
			        <SplitterItem min="50" max="300">Min: 50
			            <br />Max: 300
			            <div className="current-size"></div>
			        </SplitterItem>
			    </Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
