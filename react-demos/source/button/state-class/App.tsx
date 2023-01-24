import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';

class MyComponent extends React.Component<{}, { name: string }> {
	constructor(props: any) {
		super(props);
		this.state = {
			name: ''
		};
	}

	onShowNameClicked = () => {
		alert('Name is: ' + this.state.name);
	};

	onNameChanged = (e: any) => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<div>
				<Input placeholder="Enter a name" onKeyUp={this.onNameChanged} onChange={this.onNameChanged} />
				<br />
				<div>
					Name is {this.state.name}
				</div>
				<Button onClick={this.onShowNameClicked}>
					<span>Show Name</span>
				</Button>
			</div >
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<MyComponent />
		)
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
