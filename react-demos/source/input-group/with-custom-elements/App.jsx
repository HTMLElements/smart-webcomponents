import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h3>With Input</h3>
				<div className="input-group">
					<div className="input-group-prepend"> <span className="input-group-text" id="basic-addon1">@</span>
					</div>
					<Input className="form-control" placeholder="Username"></Input>
				</div>
				<div className="input-group">
					<Input className="form-control" dataSource={['oliver', 'george', 'harry', 'jack', 'jacob', 'noah', 'charlie']}
						placeholder="Recipient's username"></Input>
					<div className="input-group-append"> <span className="input-group-text" id="basic-addon2">@example.com</span>
					</div>
				</div>
				<label for="basic-url">Your vanity URL</label>
				<div className="input-group">
					<div className="input-group-prepend"> <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
					</div>
					<Input className="form-control" dataSource={['oliver', 'george', 'harry', 'jack', 'jacob', 'noah', 'charlie']}
						placeholder="Recipient's username"></Input>
				</div>
				<h3>With Button</h3>
				<div className="input-group">
					<div className="input-group-prepend">
						<Button type="button">Button</Button>
					</div>
					<Input className="form-control"></Input>
				</div>
				<div className="input-group">
					<Input className="form-control" placeholder="Recipient's username"></Input>
					<div className="input-group-append">
						<Button type="button">Button</Button>
					</div>
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<Button type="button">Button</Button>
						<Button type="button">Button</Button>
					</div>
					<Input className="form-control"></Input>
				</div>
				<div className="input-group">
					<Input className="form-control" placeholder="Recipient's username"></Input>
					<div className="input-group-append">
						<Button type="button">Button</Button>
						<Button type="button">Button</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
