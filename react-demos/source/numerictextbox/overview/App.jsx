import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {

	init() {

		// Your code here
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<section>
						<div>
							<h2>Numeric Text fields allow users to enter and edit any type of numbers.</h2>
							<div className="module">
								<p>Numeric Text fields typically reside in forms but can appear in other
			                        places, like dialog boxes and search.</p>
							</div>
						</div>
					</section>
					<div>
						<NumericTextBox placeholder="Enter a number..." inputType="integer"
							hint="Idle & empty" nullable value="null"></NumericTextBox>
						<br />
						<br />
						<br />
						<NumericTextBox placeholder="Enter" showUnit nullable
							value="null"></NumericTextBox>
						<br />
						<br />
						<br />
						<NumericTextBox radixDisplay value="123" nullable></NumericTextBox>
						<br />
						<br />
						<br />
						<NumericTextBox disabled nullable></NumericTextBox>
						<p>disabled</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
