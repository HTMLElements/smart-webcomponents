import React from "react";
import ReactDOM from "react-dom";
import { ToggleButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-horizontal-layout">
					<div>
						<div className="demo-buttons-group">
							<ToggleButton className="primary">Toggle Button</ToggleButton>
							<ToggleButton className="primary raised">Raised Toggle Button</ToggleButton>
							<ToggleButton className="primary outlined">Outlined Toggle Button</ToggleButton>
							<ToggleButton className="primary flat">Flat Toggle Button</ToggleButton>
							<ToggleButton className="primary floating"><span className="glyphicon glyphicon-cloud"></span>
							</ToggleButton>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
