import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

class App extends React.Component {

	layout = [{
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
				type: 'LayoutPanel',
				label: 'חלון א',
				items: [{
					id: 'Itme',
					label: '#Itme',
					content: 'תוכן הפריט עם המזהה "Itme"',
					selected: true
				}]
			},
			{
				type: 'LayoutGroup',
				id: 'verticalGroup',
				orientation: 'vertical',
				items: [{
						type: 'LayoutPanel',
						label: 'חלון ב',
						size: '50%',
						items: [{
							id: 'פריט ב',
							label: '#פריט ב',
							content: 'תוכן הפריט עם המזהה "פריט ב"',
						}]
					},
					{
						type: 'LayoutPanel',
						label: 'חלון ג',
						items: [{
							id: 'פריט ג',
							label: '#פריט ג',
							content: 'תוכן הפריט עם המזהה "פריט ג"'
						}]
					},
				]
			},
			{
				type: 'LayoutPanel',
				label: 'חלון ד',
				items: [{
					id: 'פריטים',
					label: '#פריטים',
					content: 'תוכן הפריט עם המזהה "פריטים"',
				}]
			}
		]
	}];


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <DockingLayout id="layout" rightToLeft layout={this.layout}></DockingLayout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
