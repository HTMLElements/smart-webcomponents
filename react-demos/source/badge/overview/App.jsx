import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div id="container" className="module">
			        <br />
			        <p>Badges may be used to put label or count next to a component.</p>
			        	<h1>Example heading <span className="smart-badge smart-badge-dark">New</span></h1>
			        	<h2>Example heading <span className="smart-badge smart-badge-dark">New</span></h2>
			        	<h3>Example heading <span className="smart-badge smart-badge-dark">New</span></h3>
			        	<h4>Example heading <span className="smart-badge smart-badge-dark">New</span></h4>
			        	<h5>Example heading <span className="smart-badge smart-badge-dark">New</span></h5>
			        	<h6>Example heading <span className="smart-badge smart-badge-dark">New</span></h6>
			        	<h1>Contextual</h1>	<span className="smart-badge smart-badge-light">Default</span>	<span className="smart-badge smart-badge-dark">Primary</span>
			        <span
			        className="smart-badge smart-badge-info">Success</span>	<span className="smart-badge smart-badge-success">Info</span>
			            <span
			            className="smart-badge smart-badge-warning">Warning</span>	<span className="smart-badge smart-badge-danger">Danger</span>
			                	<h1>Pills</h1>	<span className="smart-badge smart-badge-light smart-badge-pill">Light</span>
			                <span
			                className="smart-badge smart-badge-dark smart-badge-pill">Dark</span>	<span className="smart-badge smart-badge-info smart-badge-pill">Info</span>
			                    <span
			                    className="smart-badge smart-badge-success smart-badge-pill">Success</span>	<span className="smart-badge smart-badge-warning smart-badge-pill">Warning</span>
			                        <span
			                        className="smart-badge smart-badge-danger smart-badge-pill">Danger</span>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
