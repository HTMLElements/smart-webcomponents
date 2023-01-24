import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';

class App extends React.Component {

	init() {


		let stars = document.querySelectorAll('#listMenu4 .material-icons');
		for (let i = 0; i < stars.length; i++) {
			stars[i].addEventListener('click', function (event) {
				event.stopPropagation();
				if (this.classList.contains('empty')) {
					this.innerHTML = '&#xE838;';
					this.classList.remove('empty');
				} else {
					this.innerHTML = '&#xE83A;';
					this.classList.add('empty');
				}
			});
		}

	}


	componentDidMount() {
		const templateContainer = document.createElement('div');

		templateContainer.innerHTML = `
			<template id="andrewInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/andrew.png"
							alt="" />
					</td>
					<td> <b>Andrew Fuller</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Representative</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Andrew received his BTS commercial in 1974 and a Ph.D. in international
					marketing from the University of Dallas in 1981. He is fluent in French
					and Italian and reads German. He joined the company as a sales representative,
					was promoted to sales manager in January 1992 and to vice president of
					sales in March 1993. Andrew is a member of the Sales Management Roundtable,
							the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>19-Feb-52</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>14-Aug-92</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(206) 555-9482</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>908 W. Capital Way.</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>98401</td>
				</tr>
				<tr>
					<td>City</td>
					<td>Tacoma</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>USA</td>
				</tr>
			</table>
		</template>
		<template id="anneInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/anne.png"
							alt="" />
					</td>
					<td> <b>Anne Dodsworth</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Inside Sales Coordinator</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Anne has a BA degree in English from St. Lawrence College. She is fluent
							in French and German.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>27-Jan-66</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>15-Nov-94</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(71) 555-5598</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>7 Houndstooth Rd.</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>WG2 7LT</td>
				</tr>
				<tr>
					<td>City</td>
					<td>London</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>UK</td>
				</tr>
			</table>
		</template>
		<template id="janetInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/janet.png"
							alt="" />
					</td>
					<td> <b>Janet Leverling</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Representative</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Janet has a BS degree in chemistry from Boston College (1984). She has
					also completed a certificate program in food retailing management. Janet
					was hired as a sales associate in 1991 and promoted to sales representative
							in February 1992.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>27-Jan-69</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>15-Nov-94</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(71) 555-4444</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>Miner Rd.</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>WG2 7LT</td>
				</tr>
				<tr>
					<td>City</td>
					<td>London</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>UK</td>
				</tr>
			</table>
		</template>
		<template id="lauraInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/laura.png"
							alt="" />
					</td>
					<td> <b>Laura Callahan</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Representative</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Laura received a BA in psychology from the University of Washington. She
							has also completed a course in business French. She reads and writes French.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>27-Jan-66</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>15-Nov-94</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(71) 555-4444</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>7 Houndstooth Rd.</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>WG2 7LT</td>
				</tr>
				<tr>
					<td>City</td>
					<td>London</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>UK</td>
				</tr>
			</table>
		</template>
		<template id="margaretInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/margaret.png"
							alt="" />
					</td>
					<td> <b>Margaret Peacock</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Vice President, Sales</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Margaret holds a BA in English literature from Concordia College (1958)
					and an MA from the American Institute of Culinary Arts (1966). She was
							assigned to the London office temporarily from July through November 1992.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>19-Sep-37</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>17-Oct-93</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(206) 555-8122</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>4110 Old Redmond Rd.</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>98052</td>
				</tr>
				<tr>
					<td>City</td>
					<td>Redmond</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>USA</td>
				</tr>
			</table>
		</template>
		<template id="michaelInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/michael.png"
							alt="" />
					</td>
					<td> <b>Michael Suyama</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Representative</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Michael is a graduate of Sussex University (MA, economics, 1983) and the
					University of California at Los Angeles (MBA, marketing, 1986). He has
					also taken the courses 'Multi-Cultural Selling' and 'Time Management for
					the Sales Professional.' He is fluent in Japanese and can read and write
							French, Portuguese, and Spanish.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>02-Jul-63</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>05-June-96</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(71) 555-4848</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>Coventry House</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>EC2 7JR</td>
				</tr>
				<tr>
					<td>City</td>
					<td>London</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>UK</td>
				</tr>
			</table>
		</template>
		<template id="nancyInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/nancy.png"
							alt="" />
					</td>
					<td> <b>Nancy Davolio</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Representative</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Education includes a BA in psychology from Colorado State University in
					1970. She also completed 'The Art of the Cold Call.' Nancy is a member
							of Toastmasters International.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>08-Dec-48</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>01-May-92</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(206) 555-9857</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>507 - 20th Ave. E. Apt. 2A</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>98122</td>
				</tr>
				<tr>
					<td>City</td>
					<td>Seattle</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>USA</td>
				</tr>
			</table>
		</template>
		<template id="robertInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/robert.png"
							alt="" />
					</td>
					<td> <b>Robert King</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Representative</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Robert King served in the Peace Corps and traveled extensively before
					completing his degree in English at the University of Michigan in 1992,
					the year he joined the company. After completing a course entitled 'Selling
							in Europe,' he was transferred to the London office in March 1993.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>29-May-60</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>02-Jan-94</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(71) 555-5598</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>Winchester Way</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>RG1 9SP</td>
				</tr>
				<tr>
					<td>City</td>
					<td>London</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>UK</td>
				</tr>
			</table>
		</template>
		<template id="stevenInfo">
			<table>
				<tr>
					<td>
						<img width="50" height="50" src="https://www.htmlelements.com/demos/images/phonebook/steven.png"
							alt="" />
					</td>
					<td> <b>Steven Buchanan</b>
					</td>
				</tr>
				<tr>
					<td>Title</td>
					<td>Sales Manager</td>
				</tr>
				<tr>
					<td>Notes</td>
					<td>Steven Buchanan graduated from St. Andrews University, Scotland, with
					a BSC degree in 1976. Upon joining the company as a sales representative
					in 1992, he spent 6 months in an orientation program at the Seattle office
					and then returned to his permanent post in London. He was promoted to sales
					manager in March 1993. Mr. Buchanan has completed the courses 'Successful
							Telemarketing' and 'International Sales Management.' He is fluent in French.</td>
				</tr>
				<tr>
					<td>Birth Date</td>
					<td>04-Mar-55</td>
				</tr>
				<tr>
					<td>Hire Date</td>
					<td>02-May-94</td>
				</tr>
				<tr>
					<td>Home Phone</td>
					<td>(71) 555-5598</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>908 W. Capital Way</td>
				</tr>
				<tr>
					<td>Postal Code</td>
					<td>98052</td>
				</tr>
				<tr>
					<td>City</td>
					<td>Redmond</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>USA</td>
				</tr>
			</table>
		</template>
		<template id="mail1Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">Ken</td>
						<td className="mail-time">15 min</td>
					</tr>
					<tr>
						<td className="mail-title">Appointment</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Hi, I just wanted to remind you dinner is at 8pm tonight at Carl's.</div>
						</td>
						<td><i className="material-icons empty">&#xE83A;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail1">
			<h2>Appointment</h2>
			<p className="mail-time">15 min</p>
			<p>Hi,</p>
			<p>I just wanted to remind you dinner is at 8pm tonight at Carl's.</p>
		</template>
		<template id="mail2Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">Sue</td>
						<td className="mail-time">2 hr</td>
					</tr>
					<tr>
						<td className="mail-title">Shopping</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Here's the shopping list for tommorow's party:</div>
						</td>
						<td><i className="material-icons">&#xE838;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail2">
			<h2>Shopping</h2>
			<p className="mail-time">2 hr</p>
			<p>Here's the shopping list for tommorow's party:</p>
			<ul>
				<li>Wine</li>
				<li>Tomatoes</li>
				<li>Cheese</li>
				<li>Popcorn</li>
			</ul>
		</template>
		<template id="mail3Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">University of Madrid</td>
						<td className="mail-time">9/1/17</td>
					</tr>
					<tr>
						<td className="mail-title">Re: Exam</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Dear student, Attached you can find the result of your exam.</div>
						</td>
						<td><i className="material-icons empty">&#xE83A;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail3">
			<h2>Re: Exam</h2>
			<p className="mail-time">9/1/17</p>
			<p>Dear student,</p>
			<p>Attached you can find the result of your exam.</p>
			<p>University of Madrid
					<br />Av. Séneca, 2, 28040 Madrid, Spain</p>
		</template>
		<template id="mail4Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">Meghan</td>
						<td className="mail-time">8/16/17</td>
					</tr>
					<tr>
						<td className="mail-title">Dinner tonight?</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Hi, how about a dinner at my parents' tonight?</div>
						</td>
						<td><i className="material-icons empty">&#xE83A;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail4">
			<h2>Dinner tonight?</h2>
			<p className="mail-time">8/16/17</p>
			<p>Hi,</p>
			<p>how about a dinner at my parents' tonight?</p>
		</template>
		<template id="mail5Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">Titus LDT</td>
						<td className="mail-time">7/11/17</td>
					</tr>
					<tr>
						<td className="mail-title">About the interview</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Hello, We are writing to inform you that your application has been shortlisted
									and would like to invite you to a second interview in our office.</div>
						</td>
						<td><i className="material-icons">&#xE838;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail5">
			<h2>About the interview</h2>
			<p className="mail-time">7/11/17</p>
			<p>Hello,</p>
			<p>We are writing to inform you that your application has been shortlisted
					and would like to invite you to a second interview in our office.</p>
			<p>Sincerely,
					<br />The Titus Team</p>
		</template>
		<template id="mail6Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">QuickShare</td>
						<td className="mail-time">5/30/17</td>
					</tr>
					<tr>
						<td className="mail-title">Important update</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Dear user, Our terms of service have changed.</div>
						</td>
						<td><i className="material-icons empty">&#xE83A;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail6">
			<h2>Important update</h2>
			<p className="mail-time">5/30/17</p>
			<p>Dear user,</p>
			<p>Our terms of service have changed. Please find attached the updated document.</p>
		</template>
		<template id="mail7Preview">
				<div>
				<table>
					<tr>
						<td className="mail-name">QuickShare</td>
						<td className="mail-time">5/28/17</td>
					</tr>
					<tr>
						<td className="mail-title">Welcome to our forums</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<div className="mail-preview">Dear user, Welcome to the QuickShare forums.</div>
						</td>
						<td><i className="material-icons empty">&#xE83A;</i>
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template id="mail7">
			<h2>Welcome to our forums</h2>
			<p className="mail-time">5/28/17</p>
			<p>Dear user,</p>
			<p>Welcome to the QuickShare forums.</p>
		</template>
		`;

		document.body.appendChild(templateContainer);
	}

	render() {
		return (
			<div className="smart-demo-container">
				<section id="list-menu">
					<h2>List menu</h2>
					<p>A list menu represents an element which can be used to choose an option
					from a nested list of items. Navigation through the nested list is done
			                in a single view.</p>
					<div className="module">
						<div id="listMenu1Container">
							<ListMenu ref="listmenu" id="listMenu1" filterable grouped overflow="hidden"
								filterMode="contains" enableMouseWheelAction>
								<MenuItemsGroup>Janet Leverling
			                            <MenuItem label="janetInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Andrew Fuller
			                            <MenuItem label="andrewInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Robert King
			                            <MenuItem label="robertInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Anne Dodsworth
			                            <MenuItem label="anneInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Margaret Peacock
			                            <MenuItem label="margaretInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Michael Suyama
			                            <MenuItem label="michaelInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Nancy Davolio
			                            <MenuItem label="nancyInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Steven Buchanan
			                            <MenuItem label="stevenInfo"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup>Laura Callahan
			                            <MenuItem label="lauraInfo"></MenuItem>
								</MenuItemsGroup>
							</ListMenu>
						</div>
					</div>
					<div className="module">
						<div id="listMenu3Container">
							<ListMenu ref="listmenu2" id="listMenu3" overflow="hidden" enableMouseWheelAction>
								<MenuItemsGroup> <i className="material-icons">&#xE53F;</i> Attractions
			                            <MenuItem>Movies</MenuItem>
									<MenuItem>Circus</MenuItem>
									<MenuItem>Concerts</MenuItem>
									<MenuItem>Monuments</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE56C;</i> Dining
			                            <MenuItem>Restaurants</MenuItem>
									<MenuItem>Cafés</MenuItem>
									<MenuItem>Bars</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE80C;</i> Education
			                            <MenuItem>Schools</MenuItem>
									<MenuItem>Colleges</MenuItem>
									<MenuItem>Universities</MenuItem>
									<MenuItem>Educational courses</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xEB41;</i> Family
			                            <MenuItem>Babysitting</MenuItem>
									<MenuItem>Family trips</MenuItem>
									<MenuItem>Theme parks</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE87D;</i> Health
			                            <MenuItem>Hospitals</MenuItem>
									<MenuItem>Family physicians</MenuItem>
									<MenuItem>Optics</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE30A;</i> Office
			                            <MenuItem>Offices for rent</MenuItem>
									<MenuItem>Office equipment</MenuItem>
									<MenuItem>Repair works</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE25C;</i> Promotions
			                            <MenuItem>Sales</MenuItem>
									<MenuItem>Malls</MenuItem>
									<MenuItem>Collective buying</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE03E;</i> Radio
			                            <MenuItem>Available stations</MenuItem>
									<MenuItem>Search</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE7E9;</i> Recipes
			                            <MenuItem>With meat</MenuItem>
									<MenuItem>With fish</MenuItem>
									<MenuItem>Vegetarian recipes</MenuItem>
									<MenuItem>Vegan recipes</MenuItem>
									<MenuItem>Desserts</MenuItem>
									<MenuItem>Chef's recommendations</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE52F;</i> Sports
			                            <MenuItem>Football</MenuItem>
									<MenuItem>Basketball</MenuItem>
									<MenuItem>Tennis</MenuItem>
									<MenuItem>Baseball</MenuItem>
									<MenuItem>Cycling</MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup> <i className="material-icons">&#xE53D;</i> Travel
			                            <MenuItem>Local destinations</MenuItem>
									<MenuItem>Book tickets</MenuItem>
									<MenuItem>Organised travel</MenuItem>
								</MenuItemsGroup>
							</ListMenu>
						</div>
					</div>
					<div className="module">
						<div id="listMenu4Container">
							<ListMenu ref="listmenu3" id="listMenu4" overflow="hidden" enableMouseWheelAction>
								<MenuItemsGroup label="mail1Preview" separator>
									<MenuItem label="mail1"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup label="mail2Preview" separator>
									<MenuItem label="mail2"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup label="mail3Preview" separator>
									<MenuItem label="mail3"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup label="mail4Preview" separator>
									<MenuItem label="mail4"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup label="mail5Preview" separator>
									<MenuItem label="mail5"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup label="mail6Preview" separator>
									<MenuItem label="mail6"></MenuItem>
								</MenuItemsGroup>
								<MenuItemsGroup label="mail7Preview" separator>
									<MenuItem label="mail7"></MenuItem>
								</MenuItemsGroup>
							</ListMenu>
							<Button ref="button" id="plusButton" className="primary floating">+</Button>
						</div>
					</div>
				</section>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
