import React from "react";
import ReactDOM from "react-dom";
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div className="smart-demo-container">
				<div id="materialPagerContainer">
					<section>
						<div>
							<div className="module">
								<p>smartPager provides navigation for paged information, typically used with
			                            a grid or table.</p>
							</div>
							<div className="module"></div>
						</div>
					</section>
					<section id="usage">
						<h2>Usage</h2>
						<div className="module">
							<h2>Navigation</h2>
							<p>User can navigate between pages and/or items via built-in optional buttons.</p>
						</div>
						<Pager  showPrevNextNavigationButtons autoEllipsis="both"
							showPageIndexSelectors pagesCount={20} pageIndexSelectors={10}></Pager>
					</section>
					<section id="pager-mobile">
						<h2>Mobile</h2>
						<div className="module"></div>
						<div className="module">
							<div id="pager-mobile-container" style={{ position: 'relative' }}>
								<div id="imageContainer">
									<div id="content" className="img0">
										<img src="https://htmlelements.com/demos/images/albums_pop.png" />
										<img src="https://htmlelements.com/demos/images/albums_alternative.png"
										/>
										<img src="https://htmlelements.com/demos/images/albums_rock.png" />
									</div>
								</div>
								<Pager  id="mobile" showPageIndexSelectors pagesCount={5}
									pageIndexSelectors={5}></Pager>
							</div>
						</div>
					</section>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
