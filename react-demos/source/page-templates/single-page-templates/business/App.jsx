import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { Input } from 'smart-webcomponents-react/input';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

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
							<MenuItem ref={this.menuitem2} shortcut="Ctrl+L" id="blog-container-menuitem" onClick={this.navigateTo.bind(this, '#blog-container')}>Blog</MenuItem>
							<MenuItem ref={this.menuitem3} shortcut="Ctrl+R" id="pricing-container-menuitem" onClick={this.navigateTo.bind(this, '#pricing-container')}>Pricing</MenuItem>
							<MenuItem ref={this.menuitem4} shortcut="Ctrl+E" id="portfolio-container-menuitem" onClick={this.navigateTo.bind(this, '#portfolio-container')}>Portfolio</MenuItem>
							<MenuItem ref={this.menuitem5} shortcut="Ctrl+B" id="about-container-menuitem" onClick={this.navigateTo.bind(this, '#about-container')}>About</MenuItem>
						</Menu>

					</div>
				</header>

				<section className="main-container" id="home-container">
					<div className="main-container-holder">
						<div className="main-text">A Multi-purpose Landing Page Designed for Everyone</div>
						<div className="main-description">Creating mind-blowing experience for startups</div>
						<Button className="primary btn-success icon text">Get in touch</Button>
						<Button className="btn-success outlined btn-regular btn-right">watch the video</Button>
					</div>
					<div className="header-shape">
						<img src="./../../../src/images/shape-header.svg" alt="shape" />
					</div>
				</section>


				<section className="service-container" ref={this.aboutcontainer} id="about-container">
					<div className="container-title">
						Services We Provide
        </div>
					<div className="container-description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </div>
				</section>

				<section className="advantages" id="advantages-container">

					<div className="advantages-holder">
						<div className="advantage">
							<div className="left-advantage">
								<div className="image-container">
									<img src="./../../../src/images/statistics-3679874_960_720.png" />
								</div>
								<div className="info-container">
									<div className="info-title">
										Powerful templates
                        </div>
									<div className="info-description">
										Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.
                        </div>
								</div>
							</div>
							<div className="right-advantage">
								<div className="image-container">
									<img src="./../../../src/images/handshake-3498407_960_720.png" />
								</div>
								<div className="info-container">
									<div className="info-title">
										Designed for everyone
                        </div>
									<div className="info-description">
										Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.
                        </div>
								</div>
							</div>
						</div>

						<div className="advantage">
							<div className="left-advantage">
								<div className="image-container">
									<img src="./../../../src/images/gear-1077550_960_720.png" />
								</div>
								<div className="info-container">
									<div className="info-title">
										Work anywhere
                        </div>
									<div className="info-description">
										Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.
                        </div>
								</div>
							</div>
							<div className="right-advantage">
								<div className="image-container">
									<img src="./../../../src/images/time-1606153_960_720.png" />
								</div>
								<div className="info-container">
									<div className="info-title">
										Updated in real time
                        </div>
									<div className="info-description">
										Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.
                        </div>
								</div>
							</div>
						</div>
					</div>
					<div className="image-holder">
						<img className="dashboard" src="./../../../src/images/woman-1594711_960_720.jpg" />
					</div>
				</section>

				<section ref={this.itemcontainer4} className="portfolio" id="portfolio-container">
					<div className="title">
						Our Portfolio
        </div>
					<div className="description">
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </div>


					<Tabs id="tabs3" className="animation mobile" animation="none">

						<TabItem label="All Work">
							<div className="smart-grid-layout centered">
								<div className="row">
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/dog-2474784_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/image-1247354_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/tree-2733772_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/ship-2459940_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/windows-3590598_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/house-2723396_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
								</div>
							</div>
						</TabItem>


						<TabItem label="Branding">
							<div className="smart-grid-layout centered">
								<div className="row">
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/dog-2474784_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/tree-2733772_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
								</div>
							</div>
						</TabItem>

						<TabItem label="Marketing">
							<div className="smart-grid-layout centered">
								<div className="row">
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/image-1247354_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/tree-2733772_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/ship-2459940_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
								</div>
							</div>
						</TabItem>

						<TabItem label="Planning">
							<div className="smart-grid-layout centered">
								<div className="row">
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/dog-2474784_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/ship-2459940_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/house-2723396_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
								</div>
							</div>
						</TabItem>

						<TabItem label="Research">
							<div className="smart-grid-layout centered">
								<div className="row">
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/dog-2474784_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/ship-2459940_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
									<div className="col-md-6 col-lg-4">
										<Card className="portfolio-card">
											<img src="./../../../src/images/windows-3590598_960_720.jpg" className="portfolio-image" />
											<h1 className="card-title">Graphics Design</h1>
											<div className="card-description">Short description for the ones who look for something new. Awesome!</div>
										</Card>
									</div>
								</div>
							</div>
						</TabItem>
					</Tabs>
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

				<section className="testimonials" id="testimonials-container">
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

				<section ref={this.itemcontainer} className="contacts" id="contacts-container">
					<div className="contacts-main-container">
						<div className="title">
							Contact
            </div>

						<div className="description">
							Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
            </div>

						<div className="contact-blocks">
							<div className="email-block">
								<div className="block-icon">
									<i className="material-icons">
										email
                        </i>
								</div>
								<div className="block-title">Email Us</div>
								<div className="block-description">admin@htmlelements.com</div>
							</div>
							<div className="callus-block">
								<div className="block-icon">
									<i className="material-icons">
										call
                        </i>
								</div>
								<div className="block-title">Call Us</div>
								<div className="block-description">+61 (8) 8234 3555</div>
							</div>
							<div className="address-block">
								<div className="block-icon">
									<i className="material-icons">
										near_me
                        </i>
								</div>
								<div className="block-title">Address</div>
								<div className="block-description">75 Cherni Vrah, Sofia 1000, Bulgaria</div>
							</div>
						</div>

						<div className="container">
							<div className="left-container">
								<div id="map"></div>
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
