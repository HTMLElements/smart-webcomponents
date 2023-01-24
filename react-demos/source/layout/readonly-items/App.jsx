import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const layout = document.querySelector('smart-layout');
	    layout.dataSource = [{
	            content: 'Item 0',
	            size: '35%',
	            locked: true,
	            buttonPosition: ['top', 'bottom']
	        },
	        {
	            content: [{
	                    content: 'Item 1.0',
	                    size: '25%'
	                },
	                {
	                    content: 'Item 1.1 - Readonly',
	                    readonly: true,
	                    size: '50%'
	                },
	                {
	                    content: [{
	                            content: 'Item 1.2.0 - Locked',
	                            locked: true,
	                            size: '25%'
	                        },
	                        {
	                            content: 'Item 1.2.1 - Readonly',
	                            readonly: true
	                        }
	                    ]
	                }
	            ],
	            orientation: 'horizontal'
	        }
	    ];
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <smart-layout></smart-layout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
