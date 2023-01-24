import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const layout = document.querySelector('smart-layout');
	    layout.dataSource = [{
	            content: 'Item 0',
	            locked: true,
	            buttonPosition: ['top', 'bottom']
	        },
	        {
	            content: [{
	                    content: 'Item 1.0',
	                    buttonPosition: ['left', 'right'],
	                    size: '25%',
	                },
	                {
	                    content: 'Item 1.1',
	                    buttonPosition: ['left', 'right']
	                }
	            ],
	            orientation: 'vertical',
	            size: '35%'
	        }
	    ];
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <smart-layout orientation="horizontal"></smart-layout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
