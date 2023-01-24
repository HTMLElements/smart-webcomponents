import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.button = React.createRef();
	}

	handleClick() {
		const button = this.button.current.nativeElement;

		button.classList.add('success');

		setTimeout(function () {
			button.classList.remove('success');
		}, 3000);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="button-demo button-concept-demo">
					<br />
					<div className="demo-buttons-group">
						<Button ref={this.button} onClick={this.handleClick.bind(this)} className="button-concept">
							<a className="button" role="button">
								<span>remove</span>
								<div className="icon">
									<i className="fa fa-remove"></i>
									<i className="fa fa-check"></i>
								</div>
							</a>
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
