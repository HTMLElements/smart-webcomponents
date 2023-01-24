import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

class App extends React.Component {
	layout = [{
		//The Base Group
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
				//DockingLayout Item A
				label: 'TabsWindow A',
				size: '50%',
				items: [{
					//Tab Item A1 of Item A
					label: 'Tab A1',
					content: 'Content of A1'
				}]
			},
			{
				//DockingLayout Item B
				label: 'TabsWindow B',
				size: '25%',
				items: [{
						//Tab Item B1 of Item B
						label: 'Tab B1',
						selected: true,
						content: 'Content of B1'
					},
					{
						//Tab Item B2 of Item B
						label: 'Tab B2',
						content: 'Content of B2'
					}
				]
			},
			{
				//DockingLayout Item C
				label: 'TabsWindow C',
				size: '25%',
				items: [{
					//Tab Item C1 of Item C
					label: 'Tab C1',
					content: 'Content of C1'
				}]
			}
		]
	}];

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <DockingLayout layout={this.layout}></DockingLayout>
			    <div className="description">In this demo, the Docking Layout has Layout Items, which are inside one
			        Layout Group</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
