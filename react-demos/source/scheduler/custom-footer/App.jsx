import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.scheduler = React.createRef();

		const today = new Date(),
			todayDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.dataSource = [{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30)
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15)
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15)
		}];
	}

	view = 'week';

	footerTemplate = function (footerContainer) {
		if (footerContainer.querySelector('.custom-footer')) {
			return
		}

		const schedulerClassList = this.scheduler.current.nativeElement.classList;

		ReactDOM.render(<div className="custom-footer">
			<label>Select an Event color:</label>
			<RadioButton id="green">Green</RadioButton><RadioButton id="yellow">Yellow</RadioButton>
			<RadioButton id="purple">Purple</RadioButton><RadioButton id="brown">Brown</RadioButton>
		</div>, footerContainer, function () {
			this.addEventListener('change', function (event) {
				const target = event.target;
				if (target instanceof window.Smart.RadioButton) {

					//Remove previous classes
					Array.from(schedulerClassList).forEach(c => {
						if (c.indexOf('color-') > -1) {
							schedulerClassList.remove(c);
						}
					});

					schedulerClassList.add('color-' + target.id);
				}
			});
		});
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.dataSource} view={this.view} footerTemplate={this.footerTemplate.bind(this)}></Scheduler>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
