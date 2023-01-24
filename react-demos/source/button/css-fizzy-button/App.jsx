import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="button-demo css-fizzy-button">
					<label>Fizzy Button</label>
					<div className="demo-buttons-group">
						<div className='button'>
							<input id='button' type='checkbox' />
							<label for='button'>
								<div className='button_inner q'>
									<Button className="Button"> <i className='l ion-log-in'></i>
										<span className='t'>Downloads</span>
										<span>

											<i className='tick ion-checkmark-round'></i>

										</span>
									</Button>
									<div className='b_l_quad'>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
										<div className='button_spots'></div>
									</div>
								</div>
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
