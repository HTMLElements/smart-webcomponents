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
			     <h3>מקום עבודתי</h3>
			    <Sortable id="sortable" mode="horizontal" dragMode="item" rightToLeft>
			        <div id="square1" className="square"> <i className="material-icons">
			
			                person
			
			            </i>
			            <div>עובדים</div>
			        </div>
			        <div id="square2" className="square"> <i className="material-icons">
			
			                work_outline
			
			            </i>
			            <div>פרויקטים</div>
			        </div>
			        <div id="square3" className="square"> <i className="material-icons">
			
			                attach_money
			
			            </i>
			            <div>כספים</div>
			        </div>
			        <div id="square4" className="square"> <i className="material-icons">
			
			                contact_mail
			
			            </i>
			            <div>שותפויות</div>
			        </div>
			        <div id="square5" className="square"> <i className="material-icons">
			
			                speaker_phone
			
			            </i>
			            <div>קישוריות</div>
			        </div>
			        <div id="square6" className="square"> <i className="material-icons">
			
			                location_on
			
			            </i>
			            <div>נסיעות</div>
			        </div>
			    </Sortable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
