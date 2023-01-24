import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        dockingLayout = document.querySelector('smart-docking-layout');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        dockingLayout.style.width = value + 'px';
	        dockingLayout.style.height = value + 'px';
	    });
	    dockingLayout.layout = [{
	            type: 'LayoutPanel',
	            label: 'Item 1',
	            items: [{
	                    label: 'Tab 1',
	                    content: 'Content of Tab 1'
	                },
	                {
	                    label: 'Tab 2',
	                    content: 'Content of Tab 2'
	                }
	            ],
	            panelContainerSettings: {
	                size: '25%'
	            }
	        },
	        {
	            type: 'LayoutGroup',
	            label: 'Item Group ',
	            orientation: 'horizontal',
	            items: [{
	                    type: 'LayoutPanel',
	                    label: 'Item 2',
	                    items: [{
	                        label: 'Tab 3',
	                        content: 'Content of Tab 3'
	                    }],
	                    panelContainerSettings: {
	                        size: '50%'
	                    }
	                },
	                {
	                    type: 'LayoutPanel',
	                    label: 'Item 3',
	                    items: [{
	                        label: 'Tab 4',
	                        content: 'Content of Tab 4'
	                    }]
	                }
	            ]
	        },
	        {
	            type: 'LayoutPanel',
	            label: 'Item 4',
	            items: [{
	                    label: 'Tab 5',
	                    content: 'Content of Tab 5'
	                },
	                {
	                    label: 'Tab 6',
	                    content: 'Content of Tab 6'
	                }
	            ],
	            panelContainerSettings: {
	                size: '25%'
	            }
	        }
	    ];
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="100" max="1000" value="500"
			    orientation="horizontal" scale-position="near" unit="px" show-unit="true"
			    show-tool-tip="false"></Slider>
			    <br />
			    <br />
			    <DockingLayout ref="dockinglayout"></DockingLayout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
