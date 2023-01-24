import React from "react";
import ReactDOM from "react-dom";
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tankContainer = React.createRef();
	}

	init() {
		ReactDOM.render(<Tank />, this.tankContainer.current, function () {
			const tank = this;

			tank.value = '50';
			tank.orientation = 'vertical';
			tank.focus();
		});
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div ref={this.tankContainer}></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
