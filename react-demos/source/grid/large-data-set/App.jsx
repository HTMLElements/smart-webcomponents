import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	appearance = {
		showRowHeaderNumber: true
	};
	columnWidth = 100;
	dataSource = new window.Smart.DataAdapter({
		dataSource: 10000,
		dataFields: 1000
	});
	onCellValue(cell) {
		cell.value = cell.row.index + '.' + cell.column.index;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">The Grid in this example is with 1000 columns, 10,000 rows</div>
				<Grid id="grid"
					appearance={this.appearance}
					columnWidth={this.columnWidth}
					dataSource={this.dataSource}
					onCellValue={this.onCellValue}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
