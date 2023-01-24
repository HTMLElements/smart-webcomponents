import React from "react";
import ReactDOM from "react-dom";
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

class App extends React.Component {


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">The Query Builder component allows you to build complex quieries through
			        UI. The output of the component is a JSON object with the query.</div>
				<QueryBuilder allowDrag
					fields={[{
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
					]}
					ref="querybuilder" id="queryBuilder"></QueryBuilder>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
