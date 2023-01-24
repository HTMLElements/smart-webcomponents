import React from "react";
import ReactDOM from "react-dom";
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	    Smart('#queryBuilder', class {
	        get properties() {
	            return {
	                allowDrag: true,
	                fields: [{
	                        label: 'Id',
	                        dataField: 'id',
	                        dataType: 'number'
	                    },
	                    {
	                        label: 'Product',
	                        dataField: 'productName',
	                        dataType: 'string'
	                    },
	                    {
	                        label: 'Unit Price',
	                        dataField: 'price',
	                        dataType: 'number'
	                    },
	                    {
	                        label: 'Purchased',
	                        dataField: 'purchased',
	                        dataType: 'datetime'
	                    },
	                    {
	                        label: 'Available',
	                        dataField: 'available',
	                        dataType: 'boolean'
	                    }
	                ],
	                value: [
	                    [
	                        ['purchased', '=', new Date(2019, 0, 4)],
	                        'and',
	                        ['productName', '<>', 'Monitors'],
	                        'or',
	                        ['productName', 'isblank']
	                    ],
	                    'and',
	                    [
	                        ['available', '=', true],
	                        'and',
	                        ['price', '<', 1300],
	                    ],
	                    'or',
	                    [
	                        ['productName', '=', 'Televisions'],
	                        'and',
	                        ['price', '<', 4000]
	                    ]
	                ]
	            };
	        }
	    });
	
	    const queryBuilder = document.getElementById('queryBuilder'),
	        slider = document.getElementById('horizontalSlider');
	    slider.addEventListener('change', function() {
	        const value = slider.value;
	        queryBuilder.style.width = value + 'px';
	        queryBuilder.style.height = parseFloat(value) + 200 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="options">
			         <h3>Slide to resize:</h3>
			        <Slider ref="slider" id="horizontalSlider" min="200" max="1000" value="400"
			        orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    </div>
			    <QueryBuilder ref="querybuilder" id="queryBuilder"></QueryBuilder>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
