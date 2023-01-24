import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const layout = document.querySelector('smart-layout');
	    layout.contextMenuDataSource = [{
	            label: 'Update',
	            value: 'update'
	        },
	        {
	            label: 'Delete',
	            value: 'delete'
	        },
	        {
	            label: 'Lock/Unlock',
	            value: 'locked'
	        }
	    ];
	    layout.dataSource = [{
	            content: [{
	                    content: 'Item 1.0',
	                    size: '75%'
	                },
	                {
	                    content: 'Item 1.1'
	                }
	            ],
	            orientation: 'horizontal',
	            size: '35%'
	        },
	        {
	            content: 'Item 0'
	        }
	    ];
	    layout.addEventListener('menuItemClick', function(event) {
	        const details = event.detail;
	        if (details.value === 'update') {
	            layout.updateItem(details.target, {
	                content: 'Content is updated.'
	            });
	        } else {
	            layout.updateItem(details.target, {
	                locked: !details.target.locked
	            });
	        }
	    });
	
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
