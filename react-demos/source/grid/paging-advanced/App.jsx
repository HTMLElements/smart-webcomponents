import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.grid = React.createRef();
		this.showBottomPager = React.createRef();
		this.changePageSizeSelectorPosition = React.createRef();
		this.changeNavigationButtonsPosition = React.createRef();
		this.showNavigationButtonsAsLabels = React.createRef();
		this.changeSummaryPosition = React.createRef();
		this.showTopPager = React.createRef();
		this.showNavigationButtonsAsLabels = React.createRef();
		this.changeNavigationInputPosition = React.createRef();
	}

	paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 1
	};
	pager = {
		visible: true,
		pageSizeSelector: {
			visible: true
		},
		pageIndexSelectors: {
			dataSource: 3
		}
	};
	dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 5000,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {
			setTimeout(function () {
				resultCallbackFunction({
					dataSource: GetData(details.first, details.last)
				});
			}, 100);
		},
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});
	columns = [
		'id',
		{
			label: 'First Name',
			dataField: 'firstName'
		},
		{
			label: 'Last Name',
			dataField: 'lastName'
		},
		{
			label: 'Product',
			dataField: 'productName'
		},
		{
			label: 'Quantity',
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	handleShowPagerSummaryChange(event) {
		const checked = event.detail.value;

		this.grid.current.pager.summary.visible = checked;
		this.changeSummaryPosition.current.disabled = !checked;
	}

	handleShowPagerChange() {
		const that = this,
			grid = this.grid.current;
		const isTopPagerVisible = this.showTopPager.current.checked;
		const isBottomPagerVisible = this.showBottomPager.current.checked;
		grid.pager.visible = true;
		if (isTopPagerVisible && isBottomPagerVisible) {
			grid.pager.position = 'both';
		} else if (isTopPagerVisible) {
			grid.pager.position = 'near';
		} else if (isBottomPagerVisible) {
			grid.pager.position = 'far';
		} else {
			grid.pager.visible = false;
		}
	}

	handleChangePageIndexSelectorsCountChange(event) {
		this.grid.current.pager.pageIndexSelectors.dataSource = event.detail.value ? 3 : 5;
	}

	handleShowPageSizeSelectorChange(event) {
		const checked = event.detail.value;

		this.grid.current.pager.pageSizeSelector.visible = checked;
		this.changePageSizeSelectorPosition.current.disabled = !checked;
	}

	handleChangePageSizeSelectorPositionChange(event) {
		this.grid.current.pager.pageSizeSelector.position = event.detail.value ? 'near' : 'far';
	}

	handleChangeSummaryPositionChange(event) {
		this.grid.current.pager.summary.position = event.detail.value ? 'near' : 'far';
	}

	handleChangeNavigationInputPositionChange(event) {
		this.grid.current.pager.navigationInput.position = event.detail.value ? 'near' : 'far';
	}

	handleChangeNavigationButtonsPositionChange(event) {
		this.grid.current.pager.navigationButtons.position = event.detail.value ? 'near' : 'far';
	}

	handleShowPrevNextNavigationButtonsChange(event) {
		const that = this,
			grid = that.grid.current;

		grid.pager.navigationButtons.prevNextButtons.visible = event.detail.value;
		if (!grid.pager.navigationButtons.prevNextButtons.visible && !grid.pager.navigationButtons.firstLastButtons.visible) {
			that.changeNavigationButtonsPosition.current.disabled = true;
			that.showNavigationButtonsAsLabels.current.disabled = true;
		} else {
			that.changeNavigationButtonsPosition.current.disabled = false;
			that.showNavigationButtonsAsLabels.current.disabled = false;
		}
	}

	handleShowFirstLastNavigationButtonsChange(event) {
		const that = this,
			grid = that.grid.current;

		grid.pager.navigationButtons.firstLastButtons.visible = event.detail.value;
		if (!grid.pager.navigationButtons.prevNextButtons.visible && !grid.pager.navigationButtons.firstLastButtons.visible) {
			that.changeNavigationButtonsPosition.current.disabled = true;
			that.showNavigationButtonsAsLabels.current.disabled = true;
		} else {
			that.changeNavigationButtonsPosition.current.disabled = false;
			that.showNavigationButtonsAsLabels.current.disabled = false;
		}
	}

	handleShowNavigationButtonsAsLabelsChange(event) {
		this.grid.current.pager.navigationButtons.labels.visible = event.detail.value;
	}

	handleShowNavigationInputChange(event) {
		this.changeNavigationInputPosition.current.disabled = !event.detail.value;
		this.grid.current.pager.navigationInput.visible = event.detail.value;
	}

	handleShowPagerIndexSelectorsChange(event) {
		this.grid.current.pager.pageIndexSelectors.visible = event.detail.value;
	}

	handleShowPagerEllipsisChange(event) {
		this.grid.current.pager.autoEllipsis = event.detail.value ? 'both' : 'none';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Paging in Smart Grid is highly customizable. Use the options on the right
			        to dynamically customize the Grid pager.</div>
				<Grid ref={this.grid} id="grid"
					paging={this.paging}
					pager={this.pager}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<CheckBox ref={this.showBottomPager} checked id="showBottomPager" onChange={this.handleShowPagerChange.bind(this)}>Show Bottom Pager</CheckBox>
					</div>
					<div className="option">
						<CheckBox ref={this.changePageSizeSelectorPosition} id="changePageSizeSelectorPosition" onChange={this.handleChangePageSizeSelectorPositionChange.bind(this)}>Page Size Near Position</CheckBox>
					</div>
					<div className="option">
						<CheckBox checked id="changePageIndexSelectorsCount" onChange={this.handleChangePageIndexSelectorsCountChange.bind(this)}>Page Index Count to 3</CheckBox>
					</div>
					<div className="option">
						<CheckBox ref={this.changeNavigationButtonsPosition} id="changeNavigationButtonsPosition" onChange={this.handleChangeNavigationButtonsPositionChange.bind(this)}>Nav Buttons Near Position</CheckBox>
					</div>
					<div className="option">
						<CheckBox disabled ref={this.changeNavigationInputPosition} id="changeNavigationInputPosition" onChange={this.handleChangeNavigationInputPositionChange.bind(this)}>Nav Input Near Position</CheckBox>
					</div>
					<div className="option">
						<CheckBox ref={this.changeSummaryPosition} disabled id="changeSummaryPosition" onChange={this.handleChangeSummaryPositionChange.bind(this)}>Summary Near Position</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showPagerSummary" onChange={this.handleShowPagerSummaryChange.bind(this)}>Show Pager Summary</CheckBox>
					</div>
					<div className="option">
						<CheckBox ref={this.showTopPager} id="showTopPager" onChange={this.handleShowPagerChange.bind(this)}>Show Top Pager</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showPageSizeSelector" checked onChange={this.handleShowPageSizeSelectorChange.bind(this)}>Show Page Size Selector</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showPrevNextNavigationButtons" checked onChange={this.handleShowPrevNextNavigationButtonsChange.bind(this)}>Show Prev/Next Nav Buttons</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showFirstLastNavigationButtons" checked onChange={this.handleShowFirstLastNavigationButtonsChange.bind(this)}>Show First/Last Nav Buttons</CheckBox>
					</div>
					<div className="option">
						<CheckBox ref={this.showNavigationButtonsAsLabels} id="showNavigationButtonsAsLabels" onChange={this.handleShowNavigationButtonsAsLabelsChange.bind(this)}>Show Nav Buttons as Labels</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showNavigationInput" onChange={this.handleShowNavigationInputChange.bind(this)}>Show Nav Input</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showPagerIndexSelectors" checked onChange={this.handleShowPagerIndexSelectorsChange.bind(this)}>Show Pager Index Selectors</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="showPagerEllipsis" checked onChange={this.handleShowPagerEllipsisChange.bind(this)}>Show Pager Ellipsis</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
