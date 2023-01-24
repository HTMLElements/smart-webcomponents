import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Slider } from 'smart-webcomponents-react/slider';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {
	layout = [{
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
			type: 'LayoutGroup',
			items: [{
				type: 'LayoutPanel',
				id: 'tabPanel',
				label: 'Input',
				items: [{
					label: 'TextBox Tab',
					content: '<div style="padding:10px;" id="firstContainer"></div>'
				},
				{
					label: 'Slider Tab',
					content: '<div style="padding:10px;" id="secondContainer"></div>'
				}
				]
			},
			{
				type: 'LayoutPanel',
				label: 'Output',
				items: [{
					id: 'outputTab',
					label: 'Output',
					headerPosition: 'none',
					content: 'Write more text here ...'
				}]
			}
			],
			orientation: 'vertical'
		},
		{
			id: 'item0',
			label: 'Tabs 0',
			items: [{
				label: 'Tab A',
				selected: true,
				content: 'What is Lorem Ipsum?\n' +
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' + 'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ' + 'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
					'Why do we use it?\n' +
					'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ' + 'distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their' + 'default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on ' + 'purpose (injected humour and the like).'
			}]
		}
		]
	}];

	componentDidMount() {
	}

	handleReady() {
		ReactDOM.render(<MultilineTextBox />, document.querySelector("#firstContainer"));
		ReactDOM.render(<Slider />, document.querySelector("#secondContainer"));
	}

	render() {
		return (
			<div>
				<DockingLayout onReady={this.handleReady} layout={this.layout}>

				</DockingLayout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
