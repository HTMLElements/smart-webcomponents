import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.tooltip = React.createRef();
	}

	handleChange(position) {
		this.tooltip.current.position = position;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Button id="button">כפתור</Button>
			    <Tooltip ref={this.tooltip} id="tooltip" selector="button" arrow
			    rightToLeft>הסבר כלים מימין לשמאל ...</Tooltip>
			    <div className="options">
			         <h3>Tooltip Position:</h3>
			        <RadioButton checked onChange={this.handleChange.bind(this, 'top')}>Top</RadioButton>
			        <br/>
			        <RadioButton onChange={this.handleChange.bind(this, 'bottom')}>Bottom</RadioButton>
			        <br/>
			        <RadioButton onChange={this.handleChange.bind(this, 'left')}>Left</RadioButton>
			        <br/>
			        <RadioButton onChange={this.handleChange.bind(this, 'right')}>Right</RadioButton>
			        <br/>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
