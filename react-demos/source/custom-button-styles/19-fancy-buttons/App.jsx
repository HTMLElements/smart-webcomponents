import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	
	    'use strict';
	    let button = document.querySelector('.cta');
	    button.addEventListener('click', function() {
	        button.classList.add('active');
	        setTimeout(function() {
	            button.classList.remove('active');
	        }, 300);
	    });
	
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
			                    <Button ref="button" className="doar-btn"> <a href="javascript:void(0)" className="btn btn--doar">Doar</a>
			                    </Button>
			                </div>
			                <br />
			                <div> <a href="javascript:void(0)" className="btn btn--promo"><Button  ref="button2"  className="promtion-btn">Promoção</Button></a>
			                </div>
			                <br />
			                <div>
			                    <Button ref="button3" className="pausar-btn"> <a href="javascript:void(0)" className="btn btn--action"><span>Pausar</span></a>
			                    </Button>
			                </div>
			                <!-- Redes Sociais -->
			                <div className='flat-under'>
			                    <div className='grow-container'>
			                        <Button ref="button4" className="share-btn"> <a href="javascript:void(0)" className='to-twitter circle-button'>
			
			                                <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
			
			                            </a>
			                        </Button>
			                    </div>
			                    <div className='grow-container'>
			                        <Button ref="button5" className="share-btn"> <a href="javascript:void(0)" className='to-red circle-button'>
			
			                                <i className="fa fa-google-plus fa-fw" aria-hidden="true"></i>
			
			                            </a>
			                        </Button>
			                    </div>
			                    <div className='grow-container'>
			                        <Button ref="button6" className="share-btn"> <a href="javascript:void(0)" className='to-facebook circle-button'>
			
			                                <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
			
			                            </a>
			                        </Button>
			                    </div>
			                    <div className='grow-container'>
			                        <Button ref="button7" className="share-btn"> <a href="javascript:void(0)" className='to-linkedin circle-button'>
			
			                                <i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>
			
			                            </a>
			                        </Button>
			                    </div>
			                    <div className='grow-container'>
			                        <Button ref="button8" className="share-btn"> <a href="javascript:void(0)" className='to-reddit circle-button'>
			
			                                <i className="fa fa-reddit-alien fa-fw" aria-hidden="true"></i>
			
			                            </a>
			                        </Button>
			                    </div>
			                </div>
			                <!-- WOOOOOW -->
			                <div className="box">
			                    <button className="cta">
			                        <Button ref="button9" className="click-me"> <a href="javascript:void(0)">Click me</a>
			                        </Button> <span className="shape">
			
			                            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></span>
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
