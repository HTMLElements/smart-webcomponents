import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	
	    'use strict';
	    let button = document.querySelector('.button');
	    let removeSuccess = () => {
	        button.classList.remove('success');
	    };
	    button.addEventListener('click', function() {
	        button.classList.add('success');
	        setTimeout(function() {
	            removeSuccess();
	        }, 3000);
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo button-concept-demo">
			        <label>Button Concept</label>
			        <br />
			        <div className="demo-buttons-group">
			            <Button ref="button" className="button-concept"> <a className="button" role="button">
			
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
