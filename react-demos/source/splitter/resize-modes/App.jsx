import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.splitter = React.createRef();
	}

	handleChange(mode) {
		this.splitter.current.resizeMode = mode;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Splitter ref={this.splitter} id="horizontalSplitter" resizeMode="adjacent">
			        <SplitterItem size="25%">Item 1</SplitterItem>
			        <SplitterItem>Item 2</SplitterItem>
			        <SplitterItem size="25%">Item 3</SplitterItem>
			    </Splitter>
			    <div className="options">
			        <div className="caption">Resize Mode</div>
			        <div className="option">
			            <RadioButton onChange={this.handleChange.bind(this, 'none')}>none</RadioButton>
			            <br/>
			            <RadioButton checked onChange={this.handleChange.bind(this, 'adjacent')}>adjacent</RadioButton>
			            <br/>
			            <RadioButton onChange={this.handleChange.bind(this, 'end')}>end</RadioButton>
			            <br/>
			            <RadioButton onChange={this.handleChange.bind(this, 'proportional')}>proportional</RadioButton>
			            <br/>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
