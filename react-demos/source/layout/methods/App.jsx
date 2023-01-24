import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	
	    const layout = document.querySelector('smart-layout');
	    layout.dataSource = [{
	            content: 'Item 0',
	            size: '33.3%'
	        },
	        {
	            content: 'Item 1',
	            size: '33.3%'
	        },
	        {
	            content: 'Item 2'
	        }
	    ];
	    document.querySelector('.options').addEventListener('click', function(event) {
	        const target = event.target.closest('smart-button');
	        if (!target) {
	            return;
	        }
	        switch (target.id) {
	            case 'select':
	                layout.select('0');
	                break;
	            case 'unselect':
	                layout.unselect();
	                break;
	            case 'appendChild': {
	                if (layout.items.length >= 5) {
	                    return;
	                }
	                const newItem = document.createElement('smart-splitter-item');
	                newItem.innerHTML = 'New item';
	                newItem.size = '25%';
	                layout.appendChild(newItem);
	                break;
	            }
	            case 'removeChild':
	                layout.removeChild(layout.items[0]);
	                break;
	            case 'insert':
	                if (layout.getItem('0.1')) {
	                    return;
	                }
	                layout.insert({
	                    content: 'Inserted Item'
	                }, '0');
	                break;
	            case 'removeItem':
	                layout.removeItem('0');
	                break;
	            case 'updateItem':
	                layout.updateItem('0', {
	                    content: 'Content is Update'
	                });
	                break;
	            case 'saveState':
	                layout.saveState();
	                break;
	            case 'loadState':
	                layout.loadState();
	                break;
	            case 'clearState':
	                layout.clearState();
	                break;
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <smart-layout id="layout"></smart-layout>
			    <div class="options">
			        <div>Methods:</div>
			        <div class="option">
			            <Button ref="button" id="select">Select</Button>
			        </div>
			        <div class="option">
			            <Button ref="button2" id="unselect">Unselect</Button>
			        </div>
			        <div class="option">
			            <Button ref="button3" id="appendChild">AppendChild</Button>
			        </div>
			        <div class="option">
			            <Button ref="button4" id="removeChild">RemoveChild</Button>
			        </div>
			        <div class="option">
			            <Button ref="button5" id="insert">Insert</Button>
			        </div>
			        <div class="option">
			            <Button ref="button6" id="removeItem">RemoveItem</Button>
			        </div>
			        <div class="option">
			            <Button ref="button7" id="updateItem">UpdateItem</Button>
			        </div>
			        <div class="option">
			            <Button ref="button8" id="saveState">SaveState</Button>
			        </div>
			        <div class="option">
			            <Button ref="button9" id="loadState">LoadState</Button>
			        </div>
			        <div class="option">
			            <Button ref="button10" id="clearState">ClearState</Button>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
