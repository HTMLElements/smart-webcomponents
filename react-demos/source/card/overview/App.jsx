import React from "react";
import ReactDOM from "react-dom";
import { Card } from 'smart-webcomponents-react/card';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Card className="basic-card">
					<div className="card-content"> <span className="card-title">Card Title</span>
						<p>I am a very simple card. I am good at containing small bits of information.
			                I am convenient because I require little markup to use effectively.</p>
					</div>
					<div className="card-action"> <a href="#">This is a link</a>
						<a href="#">This is a link</a>
					</div>
				</Card>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
