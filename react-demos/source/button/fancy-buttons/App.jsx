import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { PRIORITY_HIGHEST } from "constants";

class App extends React.Component {
	constructor(p) {
		super(p);

		this.button = React.createRef();
	}

	handleClick() {
		this.button.current.classList.add('active');

		window.setTimeout(() => {
			this.button.current.classList.remove('active');
		}, 300);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="button-demo fancy-buttons">
					<label>Fancy Buttons</label>
					<div className="demo-buttons-group">
						<section className="content">
							<div>
								<Button className="doar-btn"> <a href="javascript:void(0)" className="btn btn--doar">Click</a>
								</Button>
							</div>
							<br />
							<div> <a href="javascript:void(0)" className="btn btn--promo"><Button className="promtion-btn">Promo</Button></a>
							</div>
							<br />
							<div>
								<Button className="pausar-btn"> <a href="javascript:void(0)" className="btn btn--action"><span>Pause</span></a>
								</Button>
							</div>
							<div className='flat-under'>
								<div className='grow-container'>
									<Button className="share-btn"> <a href="javascript:void(0)" className='to-twitter circle-button'>

										<i className="fa fa-twitter fa-fw" aria-hidden="true"></i>

									</a>
									</Button>
								</div>
								<div className='grow-container'>
									<Button className="share-btn"> <a href="javascript:void(0)" className='to-facebook circle-button'>

										<i className="fa fa-facebook fa-fw" aria-hidden="true"></i>

									</a>
									</Button>
								</div>
								<div className='grow-container'>
									<Button className="share-btn"> <a href="javascript:void(0)" className='to-linkedin circle-button'>

										<i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>

									</a>
									</Button>
								</div>
								<div className='grow-container'>
									<Button className="share-btn"> <a href="javascript:void(0)" className='to-reddit circle-button'>

										<i className="fa fa-reddit-alien fa-fw" aria-hidden="true"></i>

									</a>
									</Button>
								</div>
							</div>
							<div className="box">
								<button ref={this.button} onClick={this.handleClick.bind(this)} className="cta">
									<Button className="click-me"> <a href="javascript:void(0)">Click me</a>
									</Button>
									<span className="shape">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</button>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
