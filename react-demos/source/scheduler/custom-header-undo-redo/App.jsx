import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';
import { Button } from 'smart-webcomponents-react/button';

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

	view = 'day';

	headerViewPosition = 'near';

	headerTemplate = (header) => {
		if (header.querySelector('.quick-controls')) {
			return;
		}

		const that = this;

		ReactDOM.render(<div className="quick-controls">
			<label>Quick Settings:</label>
			<Button disabled className="undo" title="Undo"><span class="icon"></span></Button>
			<Button disabled className="redo" title="Redo"><span class="icon"></span></Button>
		</div>, document.createDocumentFragment(), function () {
			this.addEventListener('click', that.buttonHandler.bind(that));
			header.appendChild(this);
		});
	}

	buttonHandler(event) {
		const target = event.target,
			scheduler = this.scheduler.current;

		if (!target.closest) {
			return;
		}
		
		if (target.closest('.smart-button.undo')) {
			scheduler.undo();
		} 
		else if (target.closest('.smart-button.redo')) {
			scheduler.redo();
		}

		this.updateButtons();
	}

	updateButtons() {
		const scheduler = this.scheduler.current.nativeElement,
			buttonUndo = scheduler.querySelector('.smart-button.undo'),
			buttonRedo = scheduler.querySelector('.smart-button.redo');

		if (buttonUndo) {
			buttonUndo.disabled = !scheduler.canUndo();
		}

		if (buttonRedo) {
			buttonRedo.disabled = !scheduler.canRedo();
		}
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.dataSource} view={this.view} headerViewPosition={this.headerViewPosition}
					headerTemplate={this.headerTemplate.bind(this)}
					onDragEnd={this.updateButtons.bind(this)} onResizeEnd={this.updateButtons.bind(this)}
					onItemRemove={this.updateButtons.bind(this)} onItemInsert={this.updateButtons.bind(this)} onItemUpdate={this.updateButtons.bind(this)}></Scheduler>
				<div className="options">
					<div className="option">
						<h4>Description:</h4>
						<p>The component creates a history of the events that have been removed,
			                updated or inserted.</p>In this demo the Smart.Scheduler has it's header
			            customized in order to contain two additional Buttons that allow to call
			            the <b>undo</b> and <b>redo</b> operations of the Scheduler.
			            <p>When the user makes changes to some of the events like drag and drop an
						event to another cell or delete an event the undo/redo buttons inside Scheduler's
						header section will be updated. Clicking on the buttons will restore the
						event that was modifed to it's previus or future state (depending on the
			                action).</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
