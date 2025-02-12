import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { Input } from 'smart-webcomponents-react/input';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.menu = React.createRef();
		this.menuitem = React.createRef();
		this.menuitem2 = React.createRef();
		this.menuitem3 = React.createRef();
		this.menuitem4 = React.createRef();
		this.menuitem5 = React.createRef();
		this.aboutcontainer = React.createRef();
		this.itemcontainer = React.createRef();
		this.itemcontainer2 = React.createRef();
		this.itemcontainer3 = React.createRef();
		this.itemcontainer4 = React.createRef();
		this.carousel = React.createRef();
		this.carousel2 = React.createRef();

		this.last_known_scroll_position = 0;
		this.ticking = false;
	}

	navigateTo(url) {
		window.location.href = url;
	}

	scrollFunction() {
		const menuItems = [this.menuitem.current, this.menuitem2.current, this.menuitem3.current, this.menuitem4.current, this.menuitem5.current],
			contactsContainerMenuItem = this.menuitem.current.nativeElement,
			aboutContainerItem = this.menuitem5.current.nativeElement,
			pricingContainerMenuItem = this.menuitem3.current.nativeElement,
			servicesMenuItem = this.menuitem4.current.nativeElement,
			blogMenuItem = this.menuitem2.current.nativeElement,
			aboutContainer = this.aboutcontainer.current,
			blogContainerOffsetTop = parseInt(this.itemcontainer2.current.offsetTop) - 100,
			servicesContainerOffsetTop = parseInt(this.itemcontainer4.current.offsetTop) - 100,
			pricingContainerOffsetTop = parseInt(this.itemcontainer3.current.offsetTop) - 100,
			contactsContainerOffsetTop = parseInt(this.itemcontainer.current.offsetTop) - 100;

		function scrollCallback(windowScrollPosition) {
			windowScrollPosition = parseInt(windowScrollPosition);

			if (windowScrollPosition) {
				for (let i = 0; i < menuItems.length; i++) {
					menuItems[i].nativeElement.classList.remove('active-item');
				}

				if ((parseInt(aboutContainer.offsetTop) - 100) <= windowScrollPosition && windowScrollPosition < servicesContainerOffsetTop) {
					aboutContainerItem.classList.add('active-item');
				}
				else if (servicesContainerOffsetTop <= windowScrollPosition && windowScrollPosition < pricingContainerOffsetTop) {
					servicesMenuItem.classList.add('active-item');
				}
				else if (pricingContainerOffsetTop <= windowScrollPosition && windowScrollPosition < blogContainerOffsetTop) {
					pricingContainerMenuItem.classList.add('active-item');
				}
				else if (blogContainerOffsetTop <= windowScrollPosition && windowScrollPosition < contactsContainerOffsetTop) {
					blogMenuItem.classList.add('active-item');
				}
				else if (windowScrollPosition >= contactsContainerOffsetTop) {
					contactsContainerMenuItem.classList.add('active-item');
				}
			}
		}

		window.addEventListener('scroll', function (e) {
			const that = this;

			that.last_known_scroll_position = window.scrollY;

			if (!that.ticking) {
				window.requestAnimationFrame(function () {
					scrollCallback(that.last_known_scroll_position);
					that.ticking = false;
				});

				that.ticking = true;
			}
		});
	}

	init() {
		this.scrollFunction();

		function setBrandsDataSource() {
			let dataSource = [];

			let item = {
				image: './../../../src/images/instagram-1581266_960_720.jpg',
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/youtube-1837872_960_720.png',
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/logo-2078018_960_720.png',
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/logo-google-1991840_960_720.png',
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/tux-158547_960_720.png',
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/animal-2028258_960_720.png',
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/lotus-with-hands-1889661_960_720.png',
			};
			dataSource.push(item);

			return dataSource;
		}

		function setDataSource() {
			let dataSource = [];

			let item = {
				image: './../../../src/images/man-4252192_960_720.jpg',
				description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
				name: 'Fajar Siddiq',
				position: 'CEOCEO, MakerFlix'
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/girl-2366438_960_720.jpg',
				description: item.description,
				name: 'Isabela Moreira',
				position: 'CEO, GrayGrids'
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/entrepreneur-593358_960_720.jpg',
				description: item.description,
				name: 'Elon Musk',
				position: 'CEO, SpaceX'
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/woman-3096664_960_720.jpg',
				description: item.description,
				name: 'Fiona',
				position: 'Lead Designer, UIdeck'
			};
			dataSource.push(item);

			item = {
				image: './../../../src/images/girl-2771001_960_720.jpg',
				description: item.description,
				name: 'Natalie Portman',
				position: 'Lead Designer, UIdeck'
			};
			dataSource.push(item);

			return dataSource;
		}

		this.carousel.current.dataSource = setDataSource();
		this.carousel2.current.dataSource = setBrandsDataSource();

		const template = document.createElement('template');

		template.id = 'itemTemplate';
		template.innerHTML = `<smart-card className="testimonial-card">
								<img src="{{image}}" className="portfolio-image" />
								<div className="card-description">{{description}}</div>
								<div className="card-name">{{name}}</div>
								<div className="card-position">{{position}}</div>
							</smart-card>`;

		document.body.appendChild(template);

		this.carousel.current.itemTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<header>
					<div className="header-container">
						<div className="logo">
							<img src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg" />
						</div>

						<Menu ref={this.menu} id="menu" minimizeWidth={500}>
							<MenuItem ref={this.menuitem} shortcut="Ctrl+O" id="contacts-container-menuitem" onClick={this.navigateTo.bind(this, '#contacts-container')}>Contact</MenuItem>
							<MenuItem ref={this.menuitem2} shortcut="Ctrl+L" id="testimonials-container-menuitem" onClick={this.navigateTo.bind(this, '#testimonials-container')}>Services</MenuItem>
							<MenuItem ref={this.menuitem3} shortcut="Ctrl+R" id="pricing-container-menuitem" onClick={this.navigateTo.bind(this, '#pricing-container')}>Pricing</MenuItem>
							<MenuItem ref={this.menuitem4} shortcut="Ctrl+E" id="portfolio-container-menuitem" onClick={this.navigateTo.bind(this, '#portfolio-container')}>Blog</MenuItem>
							<MenuItem ref={this.menuitem5} shortcut="Ctrl+B" id="about-container-menuitem" onClick={this.navigateTo.bind(this, '#about-container')}>Contact</MenuItem>
						</Menu>

					</div>
				</header>

				<section className="main-container" id="home-container">
					<div className="main-container-holder">
						<div className="main-text">Refreshing Design & Easy to Customize</div>
						<Button className="primary btn-success icon text">Get Started</Button>
						<Button className="btn-success outlined btn-regular btn-right">simple</Button>
					</div>
				</section>

				<section className="service-container" ref={this.aboutcontainer} id="about-container">
					<div className="services-left-container">
						<img src="./../../../src/images/startup-594091_960_720.jpg" />
					</div>
					<div className="services-right-container">
						<div className="subtitle">
							HIGHLY OPTIMIZED
            </div>
						<div className="title">
							Optimized for multipurpose use
            </div>
						<div className="description">
							By far the best fundraising experience on a mobile device, whether you’re launching, customizing, managing, or donating to a campaign.
            </div>
					</div>
				</section>

				<section className="service-second-container" id="about-second-container">
					<div className="services-second-left-container">
						<div className="subtitle">
							STARTUP FOCUSED
            </div>
						<div className="title">
							Designed for startup and small business
            </div>
						<div className="description">
							By far the best fundraising experience on a mobile device, whether you’re launching, customizing, managing, or donating to a campaign.
            </div>
					</div>
					<div className="services-second-right-container">
						<img src="./../../../src/images/digital-marketing-1433427_960_720.jpg" />
					</div>
				</section>

				<section ref={this.itemcontainer4} className="services" id="services-container">
					<div className="title">
						Our Services
        </div>
					<div className="description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </div>

					<div className="smart-card-holder">
						<div className=" smart-grid-layout centered">
							<div className="row">

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
									<Card className="service-card">
										<div className="services-icon">
											<i className="material-icons">
												flight
                                </i>
										</div>
										<div className="services-content">
											<h5 className="services-title"><a href="javascript:void(0)">Best Creative Solution</a></h5>
											<p className="text">We use product UI, UX Motion to the interaction design to craft products that makes better solutions.</p>
										</div>
									</Card>
								</div>

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
									<Card className="service-card">
										<div className="services-icon">
											<i className="material-icons">
												layers
                                </i>
										</div>
										<div className="services-content">
											<h5 className="services-title"><a href="javascript:void(0)">Branding Support</a></h5>
											<p className="text">We use product UI, UX Motion to the interaction design to craft products that makes better solutions.</p>
										</div>
									</Card>
								</div>

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
									<Card className="service-card">
										<div className="services-icon">
											<i className="material-icons">
												thumb_up_alt
                                </i>
										</div>
										<div className="services-content">
											<h5 className="services-title"><a href="javascript:void(0)">Bussiness Consultancy</a></h5>
											<p className="text">We use product UI, UX Motion to the interaction design to craft products that makes better solutions.</p>
										</div>
									</Card>
								</div>

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
									<Card className="service-card">
										<div className="services-icon">
											<i className="material-icons">
												trending_up
                                </i>
										</div>
										<div className="services-content">
											<h5 className="services-title"><a href="javascript:void(0)">Startup Bussiness</a></h5>
											<p className="text">We use product UI, UX Motion to the interaction design to craft products that makes better solutions.</p>
										</div>
									</Card>
								</div>

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
									<Card className="service-card">
										<div className="services-icon">
											<i className="material-icons">
												verified_user
                                </i>
										</div>
										<div className="services-content">
											<h5 className="services-title"><a href="javascript:void(0)">Good Service Guarantee</a></h5>
											<p className="text">We use product UI, UX Motion to the interaction design to craft products that makes better solutions.</p>
										</div>
									</Card>
								</div>

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
									<Card className="service-card">
										<div className="services-icon">
											<i className="material-icons">
												work
                                </i>
										</div>
										<div className="services-content">
											<h5 className="services-title"><a href="javascript:void(0)">Bussiness Consultancy</a></h5>
											<p className="text">We use product UI, UX Motion to the interaction design to craft products that makes better solutions.</p>
										</div>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section ref={this.itemcontainer3} className="pricing" id="pricing-container">
					<div className="title">
						Pricing Plan
        </div>
					<div className="description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </div>

					<div className="pricing-container">
						<div className="container">

							<div className="smart-grid-layout centered">
								<div className="row">

									<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
										<Card id="pro">
											<div className="thumb-section">
												<h2>Pro</h2>
											</div>
											<div className="content">
												<p>300 messages</p>
												<p>150 emails</p>
												<p>24/7 Support</p>

												<h3 className="text-on-front">$95</h3>
												<h5 className="text-on-back">95</h5>
												<sub>Professional plan</sub>

												<Button className="get-started primary">Get started</Button>
											</div>
										</Card>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
										<Card id="basic">
											<div className="thumb-section">
												<h2>Basic</h2>
											</div>
											<div className="content">
												<p>50 messages</p>
												<p>100 emails</p>
												<p>24/7 Support</p>

												<h3 className="text-on-front">$57</h3>
												<h5 className="text-on-back">57</h5>
												<sub>Basic plan</sub>

												<Button className="get-started primary">Get started</Button>
											</div>
										</Card>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
										<Card className="popular active" id="mid">
											<div className="thumb-section">
												<p className="subheadline">Most popular</p>
												<h2>Mid</h2>
											</div>
											<div className="content">
												<p>200 messages</p>
												<p>130 emails</p>
												<p>24/7 Support</p>

												<h3 className="text-on-front">$72</h3>
												<h5 className="text-on-back">72</h5>
												<sub>Medium plan</sub>

												<Button className="get-started primary">Get started</Button>
											</div>
										</Card>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
										<Card id="trial">
											<div className="thumb-section">
												<h2>Trial</h2>
											</div>
											<div className="content">
												<p>50 messages</p>
												<p>50 emails</p>
												<p>No Support</p>

												<h3 className="text-on-front">$9</h3>
												<h5 className="text-on-back">9</h5>
												<sub>Trial plan</sub>

												<Button className="get-started primary">Get started</Button>
											</div>
										</Card>
									</div>
								</div>

							</div>
						</div>
					</div>

				</section>


				<section className="subscription" id="subscription-container">
					<div className="subscription-text">
						<div className="title">Get latest updates!</div>
						<div className="description">We never spam your email</div>
					</div>

					<div></div>
					<div className="subscription-input">
						<Input placeholder="Enter your email"></Input>
						<Button className="primary btn-success icon text">Subscribe</Button>
					</div>
				</section>

				<section ref={this.itemcontainer2} className="testimonials" id="testimonials-container">
					<div className="title">
						Testimonial
        </div>
					<div className="description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </div>

					<Carousel ref={this.carousel} swipe autoPlay id="carousel" loop hideIndicators keyboard hideArrows displayMode="3d" interval={5000} slideShow></Carousel>
				</section>


				<section className="brands" id="brands-carousel-container">
					<Carousel ref={this.carousel2} swipe id="carouselBrands" className="horizontal" autoPlay slideShow loop hideIndicators keyboard displayMode="3d" interval={1500} hideIndicators hideArrows></Carousel>
				</section>

				<section ref={this.itemcontainer2} className="blog" id="blog-container">

					<div className="section-title">Our Blog</div>
					<p className="section-description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
</p>

					<div className="smart-grid-layout centered">
						<div className="row">

							<div className="col-md-4 col-lg-4 col-sm-6 col-12">
								<Card className="blog-card">
									<img src="./../../../src/images/digital-marketing-1725340_960_720.jpg" className="blog-image" />
									<div className="card-content">
										<h1 className="card-title">Budget-Friendly Design Ideas to Transform Your Office</h1>
										<span className="date">
											<i className="material-icons">
												date_range
			</i>
			Mar 23, 2022
		</span>
										<span className="comments">
											<i className="material-icons">
												comment
			</i>
			24Commnet
		</span>
										<div className="card-description">Create a workspace your team will love with these money-saving interior design tips. Learn how People and Culture leaders… align their workspace and company values.</div>
										<a className="blog-link-footer" href="javascript:void(0)">READ MORE</a>
									</div>
								</Card>
							</div>

							<div className="col-md-4 col-lg-4 col-sm-6 col-12">
								<Card className="blog-card">
									<img src="./../../../src/images/computer-1185626_960_720.jpg" className="blog-image" />
									<div className="card-content">
										<h1 className="card-title">Budget-Friendly Design Ideas to Transform Your Office</h1>
										<span className="date">
											<i className="material-icons">
												date_range
			</i>
			Mar 23, 2022
		</span>
										<span className="comments">
											<i className="material-icons">
												comment
			</i>
			24Commnet
		</span>
										<div className="card-description">Create a workspace your team will love with these money-saving interior design tips. Learn how People and Culture leaders… align their workspace and company values.</div>
										<a className="blog-link-footer" href="javascript:void(0)">READ MORE</a>
									</div>
								</Card>
							</div>

							<div className="col-md-4 col-lg-4 col-sm-6 col-12">
								<Card className="blog-card">
									<img src="./../../../src/images/office-1209640_960_720.jpg" className="blog-image" />
									<div className="card-content">
										<h1 className="card-title">Budget-Friendly Design Ideas to Transform Your Office</h1>
										<span className="date">
											<i className="material-icons">
												date_range
			</i>
			Mar 23, 2022
		</span>
										<span className="comments">
											<i className="material-icons">
												comment
			</i>
			24Commnet
		</span>
										<div className="card-description">Create a workspace your team will love with these money-saving interior design tips. Learn how People and Culture leaders… align their workspace and company values.</div>
										<a className="blog-link-footer" href="javascript:void(0)">READ MORE</a>
									</div>
								</Card>
							</div>

						</div>
					</div>
				</section>

				<section ref={this.itemcontainer} className="get-in-touch" id="contacts-container">
					<div className="title">
						Get in touch
        </div>

					<div className="description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </div>

					<div className="container">
						<div className="left-container">
							<div className="left-container">
								<div className="subtitle">
									Lets talk about the project
										</div>
								<p className="subdescription">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde repellendus delectus facilis quia consequatur maxime perferendis! Sequi, modi consequatur.
                </p>
								<div className="links">
									<div className="link">
										<i className="material-icons">
											my_location
                        </i>
										<span>Sofia, Bulgaria</span>
									</div>
									<div className="link">
										<i className="material-icons">
											phone
                        </i>
										<span>+359 324 473 564</span>
									</div>
									<div className="link">
										<i className="material-icons">
											email
                        </i>
										<span>example@mail.com</span>
									</div>
								</div>
							</div>
							<div className="right-container">
								<TextBox value="" placeholder="Name"></TextBox>
								<TextBox value="" placeholder="Email"></TextBox>
								<TextBox value="" placeholder="Message"></TextBox>

								<Button className="btn-primary btn-success submit-btn">Submit</Button>
							</div>
						</div>
					</div>
				</section>

				<section className="footer" id="footer-container">

					<div className="smart-grid-layout centered">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="column-title">Company</div>
								<a href="javascript:void(0)" className="footer-link">About</a>
								<a href="javascript:void(0)" className="footer-link">Contact</a>
								<a href="javascript:void(0)" className="footer-link">Investors</a>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="column-title">Solutions</div>
								<a href="javascript:void(0)" className="footer-link">Facilities Services</a>
								<a href="javascript:void(0)" className="footer-link">Workplace Staffing</a>
								<a href="javascript:void(0)" className="footer-link">Project Management</a>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="column-title">Product & Services</div>
								<a href="javascript:void(0)" className="footer-link">Products</a>
								<a href="javascript:void(0)" className="footer-link">Business</a>
								<a href="javascript:void(0)" className="footer-link">Developer</a>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="column-title">Help & Support</div>
								<a href="javascript:void(0)" className="footer-link">Support Center</a>
								<a href="javascript:void(0)" className="footer-link">FAQ</a>
								<a href="javascript:void(0)" className="footer-link">Terms & Conditions</a>
							</div>
						</div>
					</div>

					<div className="footer-info">
						<div className="footer-text">
							Crafted by SMART HTML Elements
            </div>
					</div>

				</section>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
