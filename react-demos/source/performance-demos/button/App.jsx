import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const fragment = document.createDocumentFragment();
	    for (let i = 0; i < 100; i++) {
	        const button = document.createElement("smart-button");
	        button.innerHTML = "Click Me";
	        fragment.appendChild(button);
	    }
	    document.body.appendChild(fragment);
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
