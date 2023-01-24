import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {

	menuDataSource = [{
		label: 'Technology',
		value: 'technology'
	},
	{
		label: 'Design',
		value: 'design'
	},
	{
		label: 'Culture',
		value: 'culture'
	},
	{
		label: 'Business',
		value: 'business'
	},
	{
		label: 'Politics',
		value: 'politics'
	},
	{
		label: 'Opinion',
		value: 'opinion'
	},
	{
		label: 'Science',
		value: 'science'
	},
	{
		label: 'Health',
		value: 'health'
	},
	{
		label: 'Style',
		value: 'style'
	},
	{
		label: 'Travel',
		value: 'travel'
	}
	];


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<header>
					<div className="container">
						<Button id="subscribe" className="flat">Subscribe</Button>
						<h2>Blog</h2>
						<div className="button-group">
							<Button id="search" className="floating flat"><i className="material-icons">search</i>
							</Button>
							<Button id="signup">SIGN UP</Button>
						</div>
					</div>
				</header>
				<section className="menu">
					<div className="container">
						<Menu dataSource={this.menuDataSource} id="menu" dropDownAppendTo="body"></Menu>
					</div>
				</section>
				<section className="user">
					<div className="container">
						<h1 className="headline">Title of a longer featured blog post</h1>
						<p className="content">Multiple lines of text that form the lede, informing new readers quickly
			                and efficiently about what's most interesting in this post's contents…</p>
					</div>
				</section>
				<section className="featured">
					<div className="container">
						<Card >
							<div className="content">
								<h3>Featured post</h3>
								<h4>Nov 12</h4>
								<p>This is a wider card with supporting text below as a natural lead-in to
								additional content.
			                        <br />
									<br /> <span className="more-info">Continue reading...</span>
								</p>
							</div>
							<div className="thumb">Thumbnail</div>
						</Card>
						<Card>
							<div className="content">
								<h3>Post title</h3>
								<h4>Nov 11</h4>
								<p>This is a wider card with supporting text below as a natural lead-in to
								additional content.
			                        <br />
									<br /> <span className="more-info">Continue reading...</span>
								</p>
							</div>
							<div className="thumb">Thumbnail</div>
						</Card>
					</div>
				</section>
				<section className="articles">
					<div className="container">
						<div className="main">
							<h6 className="top-headline">From the Firehose</h6>
							<div className="blog-post">
								<h6>Sample blog post</h6>
								<p className="timestamp">April 1, 2020 by Olivier</p>
								<p>This blog post shows a few different types of content that are supported
								and styled with Material styles. Basic typography, images, and code are
			                        all supported. You can extend these by modifying Markdown.js.</p>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
								venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
			                        consectetur purus sit amet fermentum.</p>
								<p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
			                        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
								<p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
			                        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
							<div className="blog-post">
								<h6>Another blog post</h6>
								<p className="timestamp">March 23, 2020 by Matt</p>
								<p>This blog post shows a few different types of content that are supported
								and styled with Material styles. Basic typography, images, and code are
			                        all supported. You can extend these by modifying Markdown.js.</p>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
								venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
			                        consectetur purus sit amet fermentum.</p>
								<p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
			                        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
								<p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
			                        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
							<div className="blog-post">
								<h6>New feature</h6>
								<p className="timestamp">March 14, 2020 by Tom</p>
								<p>This blog post shows a few different types of content that are supported
								and styled with Material styles. Basic typography, images, and code are
			                        all supported. You can extend these by modifying Markdown.js.</p>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
								venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
			                        consectetur purus sit amet fermentum.</p>
								<p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
			                        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
								<p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
			                        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
						</div>
						<div className="side-bar">
							<div className="about">
								<h3>About</h3>
								<p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
			                        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
							<div className="archives">
								<h3>Archives</h3>
								<ul>
									<li>March 2020</li>
									<li>February 2020</li>
									<li>January 2020</li>
									<li>December 2019</li>
									<li>November 2019</li>
									<li>October 2019</li>
									<li>September 2019</li>
									<li>August 2019</li>
									<li>July 2019</li>
									<li>June 2019</li>
									<li>May 2019</li>
									<li>April 2019</li>
								</ul>
							</div>
							<div className="social">
								<h3>Social</h3>
								<ul>
									<li>GitHub</li>
									<li>Twitter</li>
									<li>Facebook</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<footer>
					<h4>Footer</h4>
					<p>Something here to give the footer a purpose!</p>
				</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
