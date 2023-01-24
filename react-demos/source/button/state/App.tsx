import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';

const MyComponent: React.FC = () => {
	const [name, setName] = useState('');

	const onShowNameClicked = () => {
		alert('Name is: ' + name);
	};

	const onNameChanged = (e: any) => {
		setName(e.target.value);
	};

	return (
		<div>
			<Input placeholder="Enter a name" value={name} onKeyUp={onNameChanged} onChange={onNameChanged} />
			<br />
			<div>
				Name is {name}
			</div>
			<Button onClick={onShowNameClicked}>
				<span>Show Name</span>
			</Button>
		</div >
	)
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
