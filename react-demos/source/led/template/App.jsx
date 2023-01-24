import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {

	init() {
		const trueTemplate = document.createElement('template'),
			falseTemplate = document.createElement('template'),
			indeterminateTemplate = document.createElement('template');

		trueTemplate.id = 'trueTemplate';
		trueTemplate.innerHTML = '<span className="smart-true-content">{{content}}</span>';

		falseTemplate.id = 'falseTemplate';
		falseTemplate.innerHTML = '<span className="smart-false-content">{{content}}</span>';

		indeterminateTemplate.id = 'indeterminateTemplate';
		indeterminateTemplate.innerHTML = '<span className="smart-indeterminate-content">{{content}}</span>';

		document.body.appendChild(trueTemplate);
		document.body.appendChild(falseTemplate);
		document.body.appendChild(indeterminateTemplate);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>Custom LED template
				<br />
				<br />
				<Led checked={null} indeterminateTemplate="indeterminateTemplate"
					trueTemplate="trueTemplate" falseTemplate="falseTemplate" indeterminateContent="||"
					trueContent="On" falseContent="Off"></Led>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
