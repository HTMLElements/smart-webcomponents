import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const fragment = document.createDocumentFragment();
	    for (let i = 0; i < 100; i++) {
	        const container = document.createElement("div"),
	            toast = document.createElement("smart-toast");
	        container.classList.add("container");
	        toast.value = 'Alert !';
	        toast.type = 'warning';
	        toast.blink = true;
	        toast.autoOpen = true;
	        toast.appendTo = container;
	        fragment.appendChild(container);
	        fragment.appendChild(toast);
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
