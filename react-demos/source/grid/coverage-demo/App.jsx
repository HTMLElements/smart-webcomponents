import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	data = [{
		'File': 'smart.accordion.js',
		'Statements_number': 91.38,
		'Statements_percentage': '91.38%',
		'Statements': '594/650',
		'Branches_percentage': '80.54%',
		'Branches': '385/478',
		'Functions_percentage': '96.67%',
		'Functions': '58/60',
		'Lines_percentage': '91.38%',
		'Lines': '594/650'
	},
	{
		'File': 'smart.array.js',
		'Statements_number': 92.8,
		'Statements_percentage': '92.8%',
		'Statements': '1238/1334',
		'Branches_percentage': '84.8%',
		'Branches': '664/783',
		'Functions_percentage': '97.94%',
		'Functions': '95/97',
		'Lines_percentage': '92.8%',
		'Lines': '1238/1334'
	},
	{
		'File': 'smart.button.js',
		'Statements_number': 75.38,
		'Statements_percentage': '75.38%',
		'Statements': '199/264',
		'Branches_percentage': '66.67%',
		'Branches': '104/156',
		'Functions_percentage': '82.61%',
		'Functions': '38/46',
		'Lines_percentage': '75.29%',
		'Lines': '198/263'
	},
	{
		'File': 'smart.calendar.js',
		'Statements_number': 83.74,
		'Statements_percentage': '83.74%',
		'Statements': '1689/2017',
		'Branches_percentage': '70.51%',
		'Branches': '1179/1672',
		'Functions_percentage': '94.74%',
		'Functions': '108/114',
		'Lines_percentage': '83.64%',
		'Lines': '1672/1999'
	},
	{
		'File': 'smart.card.js',
		'Statements_number': 88.24,
		'Statements_percentage': '88.24%',
		'Statements': '45/51',
		'Branches_percentage': '77.42%',
		'Branches': '24/31',
		'Functions_percentage': '90%',
		'Functions': '9/10',
		'Lines_percentage': '88.24%',
		'Lines': '45/51'
	},
	{
		'File': 'smart.carousel.js',
		'Statements_number': 80.52,
		'Statements_percentage': '80.52%',
		'Statements': '248/308',
		'Branches_percentage': '72.94%',
		'Branches': '159/218',
		'Functions_percentage': '88.1%',
		'Functions': '37/42',
		'Lines_percentage': '80.52%',
		'Lines': '248/308'
	},
	{
		'File': 'smart.checkbox.js',
		'Statements_number': 79.37,
		'Statements_percentage': '79.37%',
		'Statements': '50/63',
		'Branches_percentage': '80.95%',
		'Branches': '34/42',
		'Functions_percentage': '58.33%',
		'Functions': '7/12',
		'Lines_percentage': '79.37%',
		'Lines': '50/63'
	},
	{
		'File': 'smart.chip.js',
		'Statements_number': 89.23,
		'Statements_percentage': '89.23%',
		'Statements': '58/65',
		'Branches_percentage': '79.17%',
		'Branches': '38/48',
		'Functions_percentage': '91.67%',
		'Functions': '11/12',
		'Lines_percentage': '89.23%',
		'Lines': '58/65'
	},
	{
		'File': 'smart.combobox.js',
		'Statements_number': 71.58,
		'Statements_percentage': '71.58%',
		'Statements': '340/475',
		'Branches_percentage': '64.29%',
		'Branches': '315/490',
		'Functions_percentage': '81.82%',
		'Functions': '27/33',
		'Lines_percentage': '71.24%',
		'Lines': '332/466'
	},
	{
		'File': 'smart.date.js',
		'Statements_number': 81.34,
		'Statements_percentage': '81.34%',
		'Statements': '924/1136',
		'Branches_percentage': '71.94%',
		'Branches': '587/816',
		'Functions_percentage': '93.75%',
		'Functions': '120/128',
		'Lines_percentage': '82.91%',
		'Lines': '917/1106'
	},
	{
		'File': 'smart.datetimepicker.js',
		'Statements_number': 72.65,
		'Statements_percentage': '72.65%',
		'Statements': '765/1053',
		'Branches_percentage': '63.54%',
		'Branches': '474/746',
		'Functions_percentage': '77.65%',
		'Functions': '66/85',
		'Lines_percentage': '72.72%',
		'Lines': '765/1052'
	},
	{
		'File': 'smart.dropdownbutton.js',
		'Statements_number': 52.08,
		'Statements_percentage': '52.08%',
		'Statements': '238/457',
		'Branches_percentage': '50%',
		'Branches': '200/400',
		'Functions_percentage': '54.76%',
		'Functions': '23/42',
		'Lines_percentage': '52.19%',
		'Lines': '238/456'
	},
	{
		'File': 'smart.dropdownlist.js',
		'Statements_number': 73.45,
		'Statements_percentage': '73.45%',
		'Statements': '509/693',
		'Branches_percentage': '62.07%',
		'Branches': '396/638',
		'Functions_percentage': '86.57%',
		'Functions': '58/67',
		'Lines_percentage': '73.48%',
		'Lines': '507/690'
	},
	{
		'File': 'smart.fileupload.js',
		'Statements_number': 86.67,
		'Statements_percentage': '86.67%',
		'Statements': '273/315',
		'Branches_percentage': '80.43%',
		'Branches': '189/235',
		'Functions_percentage': '88.89%',
		'Functions': '32/36',
		'Lines_percentage': '86.67%',
		'Lines': '273/315'
	},
	{
		'File': 'smart.filterbuilder.js',
		'Statements_number': 71.05,
		'Statements_percentage': '71.05%',
		'Statements': '1406/1979',
		'Branches_percentage': '58.87%',
		'Branches': '826/1403',
		'Functions_percentage': '84.56%',
		'Functions': '115/136',
		'Lines_percentage': '71.06%',
		'Lines': '1375/1935'
	},
	{
		'File': 'smart.gauge.js',
		'Statements_number': 83.24,
		'Statements_percentage': '83.24%',
		'Statements': '730/877',
		'Branches_percentage': '79.87%',
		'Branches': '476/596',
		'Functions_percentage': '87.69%',
		'Functions': '57/65',
		'Lines_percentage': '83.2%',
		'Lines': '728/875'
	},
	{
		'File': 'smart.led.js',
		'Statements_number': 89.83,
		'Statements_percentage': '89.83%',
		'Statements': '53/59',
		'Branches_percentage': '84%',
		'Branches': '21/25',
		'Functions_percentage': '85.71%',
		'Functions': '6/7',
		'Lines_percentage': '89.83%',
		'Lines': '53/59'
	},
	{
		'File': 'smart.listbox.js',
		'Statements_number': 72.82,
		'Statements_percentage': '72.82%',
		'Statements': '1629/2237',
		'Branches_percentage': '62.95%',
		'Branches': '999/1587',
		'Functions_percentage': '83.56%',
		'Functions': '122/146',
		'Lines_percentage': '72.92%',
		'Lines': '1624/2227'
	},
	{
		'File': 'smart.listmenu.js',
		'Statements_number': 83.09,
		'Statements_percentage': '83.09%',
		'Statements': '678/816',
		'Branches_percentage': '73.9%',
		'Branches': '470/636',
		'Functions_percentage': '89.66%',
		'Functions': '52/58',
		'Lines_percentage': '83.09%',
		'Lines': '678/816'
	},
	{
		'File': 'smart.maskedtextbox.js',
		'Statements_number': 84.54,
		'Statements_percentage': '84.54%',
		'Statements': '547/647',
		'Branches_percentage': '75.51%',
		'Branches': '299/396',
		'Functions_percentage': '71.11%',
		'Functions': '32/45',
		'Lines_percentage': '84.54%',
		'Lines': '547/647'
	},
	{
		'File': 'smart.menu.js',
		'Statements_number': 78.62,
		'Statements_percentage': '78.62%',
		'Statements': '1625/2067',
		'Branches_percentage': '70.63%',
		'Branches': '1169/1655',
		'Functions_percentage': '89.8%',
		'Functions': '132/147',
		'Lines_percentage': '78.61%',
		'Lines': '1624/2066'
	},
	{
		'File': 'smart.multilinetextbox.js',
		'Statements_number': 65.5,
		'Statements_percentage': '65.5%',
		'Statements': '243/371',
		'Branches_percentage': '50.37%',
		'Branches': '137/272',
		'Functions_percentage': '78.38%',
		'Functions': '29/37',
		'Lines_percentage': '65.5%',
		'Lines': '243/371'
	},
	{
		'File': 'smart.multisplitbutton.js',
		'Statements_number': 85.71,
		'Statements_percentage': '85.71%',
		'Statements': '54/63',
		'Branches_percentage': '76.67%',
		'Branches': '23/30',
		'Functions_percentage': '81.82%',
		'Functions': '9/11',
		'Lines_percentage': '85.71%',
		'Lines': '54/63'
	},
	{
		'File': 'smart.numerictextbox.js',
		'Statements_number': 83.92,
		'Statements_percentage': '83.92%',
		'Statements': '600/715',
		'Branches_percentage': '75.95%',
		'Branches': '420/553',
		'Functions_percentage': '91.53%',
		'Functions': '54/59',
		'Lines_percentage': '84.03%',
		'Lines': '600/714'
	},
	{
		'File': 'smart.pager.js',
		'Statements_number': 78.93,
		'Statements_percentage': '78.93%',
		'Statements': '236/299',
		'Branches_percentage': '63.22%',
		'Branches': '110/174',
		'Functions_percentage': '81.58%',
		'Functions': '31/38',
		'Lines_percentage': '78.93%',
		'Lines': '236/299'
	},
	{
		'File': 'smart.passwordtextbox.js',
		'Statements_number': 95.8,
		'Statements_percentage': '95.8%',
		'Statements': '114/119',
		'Branches_percentage': '85.9%',
		'Branches': '67/78',
		'Functions_percentage': '70%',
		'Functions': '14/20',
		'Lines_percentage': '95.8%',
		'Lines': '114/119'
	},
	{
		'File': 'smart.powerbutton.js',
		'Statements_number': 83.33,
		'Statements_percentage': '83.33%',
		'Statements': '5/6',
		'Branches_percentage': '100%',
		'Branches': '0/0',
		'Functions_percentage': '66.67%',
		'Functions': '2/3',
		'Lines_percentage': '83.33%',
		'Lines': '5/6'
	},
	{
		'File': 'smart.progressbar.js',
		'Statements_number': 95,
		'Statements_percentage': '95%',
		'Statements': '57/60',
		'Branches_percentage': '95%',
		'Branches': '38/40',
		'Functions_percentage': '92.86%',
		'Functions': '13/14',
		'Lines_percentage': '95%',
		'Lines': '57/60'
	},
	{
		'File': 'smart.radiobutton.js',
		'Statements_number': 79.79,
		'Statements_percentage': '79.79%',
		'Statements': '75/94',
		'Branches_percentage': '80.28%',
		'Branches': '57/71',
		'Functions_percentage': '63.16%',
		'Functions': '12/19',
		'Lines_percentage': '80.65%',
		'Lines': '75/93'
	},
	{
		'File': 'smart.scrollbar.js',
		'Statements_number': 74.51,
		'Statements_percentage': '74.51%',
		'Statements': '152/204',
		'Branches_percentage': '70.06%',
		'Branches': '110/157',
		'Functions_percentage': '76%',
		'Functions': '19/25',
		'Lines_percentage': '74.51%',
		'Lines': '152/204'
	},
	{
		'File': 'smart.slider.js',
		'Statements_number': 77.29,
		'Statements_percentage': '77.29%',
		'Statements': '657/850',
		'Branches_percentage': '68.39%',
		'Branches': '344/503',
		'Functions_percentage': '76.62%',
		'Functions': '59/77',
		'Lines_percentage': '77.29%',
		'Lines': '657/850'
	},
	{
		'File': 'smart.splitter.js',
		'Statements_number': 78.97,
		'Statements_percentage': '78.97%',
		'Statements': '1145/1450',
		'Branches_percentage': '67.98%',
		'Branches': '896/1318',
		'Functions_percentage': '84.26%',
		'Functions': '91/108',
		'Lines_percentage': '78.89%',
		'Lines': '1125/1426'
	},
	{
		'File': 'smart.switchbutton.js',
		'Statements_number': 85.64,
		'Statements_percentage': '85.64%',
		'Statements': '173/202',
		'Branches_percentage': '69.48%',
		'Branches': '107/154',
		'Functions_percentage': '95.83%',
		'Functions': '23/24',
		'Lines_percentage': '86%',
		'Lines': '172/200'
	},
	{
		'File': 'smart.tabs.js',
		'Statements_number': 77.93,
		'Statements_percentage': '77.93%',
		'Statements': '1264/1622',
		'Branches_percentage': '68.11%',
		'Branches': '818/1201',
		'Functions_percentage': '87.5%',
		'Functions': '105/120',
		'Lines_percentage': '77.89%',
		'Lines': '1261/1619'
	},
	{
		'File': 'smart.tank.js',
		'Statements_number': 70.43,
		'Statements_percentage': '70.43%',
		'Statements': '662/940',
		'Branches_percentage': '64.25%',
		'Branches': '372/579',
		'Functions_percentage': '81.43%',
		'Functions': '57/70',
		'Lines_percentage': '70.43%',
		'Lines': '662/940'
	},
	{
		'File': 'smart.textbox.js',
		'Statements_number': 74.15,
		'Statements_percentage': '74.15%',
		'Statements': '261/352',
		'Branches_percentage': '63.55%',
		'Branches': '197/310',
		'Functions_percentage': '84.38%',
		'Functions': '27/32',
		'Lines_percentage': '74.15%',
		'Lines': '261/352'
	},
	{
		'File': 'smart.timepicker.js',
		'Statements_number': 83.98,
		'Statements_percentage': '83.98%',
		'Statements': '540/643',
		'Branches_percentage': '72.44%',
		'Branches': '297/410',
		'Functions_percentage': '86%',
		'Functions': '43/50',
		'Lines_percentage': '83.98%',
		'Lines': '540/643'
	},
	{
		'File': 'smart.toast.js',
		'Statements_number': 87.17,
		'Statements_percentage': '87.17%',
		'Statements': '163/187',
		'Branches_percentage': '78.63%',
		'Branches': '92/117',
		'Functions_percentage': '91.3%',
		'Functions': '21/23',
		'Lines_percentage': '87.63%',
		'Lines': '163/186'
	},
	{
		'File': 'smart.tooltip.js',
		'Statements_number': 77,
		'Statements_percentage': '77%',
		'Statements': '241/313',
		'Branches_percentage': '75.45%',
		'Branches': '126/167',
		'Functions_percentage': '88.46%',
		'Functions': '23/26',
		'Lines_percentage': '77%',
		'Lines': '241/313'
	},
	{
		'File': 'smart.tree.js',
		'Statements_number': 81.72,
		'Statements_percentage': '81.72%',
		'Statements': '1337/1636',
		'Branches_percentage': '70.87%',
		'Branches': '859/1212',
		'Functions_percentage': '88.99%',
		'Functions': '97/109',
		'Lines_percentage': '81.72%',
		'Lines': '1337/1636'
	},
	{
		'File': 'smart.window.js',
		'Statements_number': 46.61,
		'Statements_percentage': '46.61%',
		'Statements': '653/1401',
		'Branches_percentage': '41.59%',
		'Branches': '559/1344',
		'Functions_percentage': '49.15%',
		'Functions': '58/118',
		'Lines_percentage': '46.61%',
		'Lines': '653/1401'
	}
	];

	appearance = {
		showColumnHeaderLines: false,
	};
	sorting = {
		enabled: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'File: string',
			'Statements_number: number',
			'Statements_percentage: string',
			'Statements: string',
			'Branches_percentage: string',
			'Branches: string',
			'Functions_percentage: string',
			'Functions: string',
			'Lines_percentage: string',
			'Lines: string',
		]
	});
	columns = [{
		label: 'File',
		dataField: 'File',
		template: function (formatObject) {
			if (!formatObject.template) {
				formatObject.template = '<div className="filename"><span>' + formatObject.value + '</span></div>';
			} else {
				formatObject.template.innerHTML = formatObject.value;
			}
		}
	},
	{
		label: '',
		dataField: 'Statements_number',
		template: function (formatObject) {
			let progressBarColor;
			if (formatObject.value < 50) {
				progressBarColor = 'bkg-red';
			} else if (formatObject.value < 80) {
				progressBarColor = 'bkg-yellow';
			} else {
				progressBarColor = 'bkg-green';
			}
			if (!formatObject.template) {
				const templateContainer = document.createElement('div');

				ReactDOM.render(<ProgressBar />, templateContainer, function () {
					const progressBar = this;

					progressBar.nativeElement.classList.add('statement-progress-bar');
					progressBar.nativeElement.classList.add(progressBarColor);
					progressBar.value = formatObject.value;
				});

				formatObject.template = templateContainer;
			} else {
				formatObject.template.firstElementChild.value = formatObject.value;
				let progressBarClasses = formatObject.template.classList;
				for (let i = 0; i < progressBarClasses.length; i++) {
					if (progressBarClasses[i] === 'bkg-red' || progressBarClasses[i] === 'bkg-yellow' || progressBarClasses[i] === 'bkg-green') {
						progressBarClasses.remove(progressBarClasses[i]);
					}
				}
				progressBarClasses.add(progressBarColor);
			}
		}
	},
	{
		label: 'Statements',
		dataField: 'Statements_percentage',
		cellsAlign: 'right',
		formatFunction: (settings) => {
			this.setCellBackgroundColor(settings, 0, 4);
		},
	},
	{
		label: '',
		dataField: 'Statements',
		cellsAlign: 'right'
	},
	{
		label: 'Branches',
		dataField: 'Branches_percentage',
		cellsAlign: 'right',
		formatFunction: (settings) => {
			this.setCellBackgroundColor(settings, 5, 6);
		},
	},
	{
		label: '',
		dataField: 'Branches',
		cellsAlign: 'right'
	},
	{
		label: 'Functions',
		dataField: 'Functions_percentage',
		cellsAlign: 'right',
		formatFunction: (settings) => {
			this.setCellBackgroundColor(settings, 7, 8);
		},
	},
	{
		label: '',
		dataField: 'Functions',
		cellsAlign: 'right'
	},
	{
		label: 'Lines',
		dataField: 'Lines_percentage',
		cellsAlign: 'right',
		formatFunction: (settings) => {
			this.setCellBackgroundColor(settings, 9, 10);
		},
	},
	{
		label: '',
		dataField: 'Lines',
		cellsAlign: 'right'
	},
	];

	setCellBackgroundColor(settings, columnStart, columnEnd) {
		function bkgColor(v) {
			let cellColor;
			if (v < 50) {
				cellColor = '#FCE1E5';
			} else if (v < 80) {
				cellColor = '#fff4c2';
			} else {
				cellColor = '#E6F5D0';
			}
			return cellColor;
		}
		const value = parseFloat(settings.value);
		const cellColor = bkgColor(value);
		const row = settings.row;
		for (let i = 0; i < row.cells.length; i++) {
			if (i >= columnStart && i <= columnEnd) {
				row.cells[i].background = cellColor;
				row.cells[i].refresh();
			}
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="header">
					<div className="header">
						<div className="path"> <span className="home">all files</span>
							<span className="active">source/</span>
						</div>
						<div className="coverage-info">
							<div className="statements"> <span className="percantage">77.24%</span>
								<span className="text">Statements</span>
								<span
									className="overview">22470/29090</span>
							</div>
							<div className="branches"> <span className="percantage">67.32%</span>
								<span className="text">Branches</span>
								<span
									className="overview">14637/21741</span>
							</div>
							<div className="functions"> <span className="percantage">84.02%</span>
								<span className="text">Functions</span>
								<span
									className="overview">1992/2371</span>
							</div>
							<div className="functions"> <span className="percantage">77.31%</span>
								<span className="text">Lines</span>
								<span
									className="overview">22372/28938</span>
							</div>
						</div>
						<div className="status-line"></div>
					</div>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					appearance={this.appearance}
					sorting={this.sorting}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
