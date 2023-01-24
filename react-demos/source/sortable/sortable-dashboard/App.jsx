import React from "react";
import ReactDOM from "react-dom";
import { Sortable } from 'smart-webcomponents-react/sortable';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>My Workplace</h3>
			    <Sortable id="sortable" mode="horizontal" dragMode="handle"
			    handlePosition="right">
			        <div id="square1" className="square"> <i className="material-icons">
			
			                person
			
			            </i>
			            <div>Employees</div>
			        </div>
			        <div id="square2" className="square"> <i className="material-icons">
			
			                work_outline
			
			            </i>
			            <div>Projects</div>
			        </div>
			        <div id="square3" className="square"> <i className="material-icons">
			
			                attach_money
			
			            </i>
			            <div>Finance</div>
			        </div>
			        <div id="square4" className="square"> <i className="material-icons">
			
			                contact_mail
			
			            </i>
			            <div>Partnerships</div>
			        </div>
			        <div id="square5" className="square"> <i className="material-icons">
			
			                speaker_phone
			
			            </i>
			            <div>Connectivity</div>
			        </div>
			        <div id="square6" className="square"> <i className="material-icons">
			
			                location_on
			
			            </i>
			            <div>Travel</div>
			        </div>
			    </Sortable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
