import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<label>Flush button</label>

				<div className="button-demo flush-button">
					<div className="demo-buttons-group">
						<Button className="flush-btn">
							<div className="left"></div>Hover me!
			                <div className="right"></div>
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
