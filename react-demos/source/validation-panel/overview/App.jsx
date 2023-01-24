import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    'use strict';
	    //ValidationPanel
	    const validationPanel = new Smart.Utilities.ValidationPanel('.data-validation-panel');
	    // On Submit
	    document.querySelector('.smart-save-footer-button').addEventListener('click', () => appendDataValidationFormat(validationPanel));
	};
	let appendDataValidationFormat = (validationPanel) => {
	    'use strict';
	    let format = validationPanel.getDataValidationFormat();
	    if (format) {
	        document.querySelector('.custom-format-holder').innerHTML = format;
	    }
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="data-validation-panel"></div>
			    <div className="custom-format-holder"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
