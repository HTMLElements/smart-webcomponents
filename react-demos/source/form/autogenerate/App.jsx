import React from "react";
import ReactDOM from "react-dom";
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';

import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.employeeList = React.createRef();
		this.employees = (() => {
			let data = new Array();
			let firstNames = ["Nancy", "Andrew", "Johnny", "Maya", "Steven", "Mark", "Monica", "Laura", "Anne"];
			let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
			let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager", "Sales Representative", "Sales Representative", "Inside Sales Coordinator", "Sales Representative"];
			let titleofcourtesy = ["Ms.", "Dr.", "Ms.", "Mrs.", "Mr.", "Mr.", "Mr.", "Ms.", "Ms."];
			let birthdate = ["08-Dec-1948", "19-Feb-1952", "30-Aug-1963", "19-Sep-1937", "04-Mar-1955", "02-Jul-1963", "29-May-1960", "09-Jan-1958", "27-Jan-1966"];
			let hiredate = ["01-May-1992", "14-Aug-1992", "01-Apr-1992", "03-May-1993", "17-Oct-1993", "17-Oct-1993", "02-Jan-1994", "05-Mar-1994", "15-Nov-1994"];
			let address = ["507 - 20th Ave. E. Apt. 2A", "908 W. Capital Way", "722 Moss Bay Blvd.", "4110 Old Redmond Rd.", "14 Garrett Hill", "Coventry House", "Miner Rd.", "Edgeham Hollow", "Winchester Way", "4726 - 11th Ave. N.E.", "7 Houndstooth Rd."];
			let city = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "London", "London", "Seattle", "London"];
			let postalcode = ["98122", "98401", "98033", "98052", "SW1 8JR", "EC2 7JR", "RG1 9SP", "98105", "WG2 7LT"];
			let country = ["USA", "USA", "USA", "USA", "UK", "UK", "UK", "USA", "UK"];
			let homephone = ["(206) 555-9857", "(206) 555-9482", "(206) 555-3412", "(206) 555-8122", "(71) 555-4848", "(71) 555-7773", "(71) 555-5598", "(206) 555-1189", "(71) 555-4444"];
			let notes = ["Education includes a BA in psychology from Colorado State University in 1970.  She also completed 'The Art of the Cold Call.'  Nancy is a member of Toastmasters International.",
				"Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
				"Johnny has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.",
				"Maya holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.",
				"Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses 'Successful Telemarketing' and 'International Sales Management.'  He is fluent in French.",
				"Mark is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses 'Multi-Cultural Selling' and 'Time Management for the Sales Professional.'  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
				"Monica King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled 'Selling in Europe,' he was transferred to the London office in March 1993.",
				"Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
				"Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German."
			];
			let k = 0;
			for (let i = 0; i < firstNames.length; i++) {
				let row = {};
				row["Photo"] = `../../images/phonebook/${firstNames[k].toLowerCase()}.png`;
				row["First Name"] = firstNames[k];
				row["Last Name"] = lastNames[k];
				row["Title"] = titles[k];
				row["Title of Courtesy"] = titleofcourtesy[k];
				row["Birth Date"] = birthdate[k];
				row["Hire Date"] = hiredate[k];
				row["Address"] = address[k];
				row["City"] = city[k];
				row["Postal Code"] = postalcode[k];
				row["Country"] = country[k];
				row["Home Phone"] = homephone[k];
				row["Notes"] = notes[k];
				data[i] = row;
				k++;
			}

			return data;
		})();
	}

	componentDidMount() {
		this.form = new window.Smart.Form('#employeeForm', {
			value: this.employees[0]
		});

		const employeeList = this.employeeList.current;

		employeeList.dataSource = this.employees.map((value) => {
			return value['First Name'] + ' ' + value['Last Name'];
		});

		employeeList.selectedIndexes = [0];
	}

	handleChange() {
		if (this.form) {
			const employeeIndex = this.employeeList.current.selectedIndexes[0];
			this.form.value = this.employees[employeeIndex];
		}
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This example shows you how to auto-generate a Form from its value.</div>
			    <div
			    id="employeeSelect">
			        	<h3>Select Employee</h3>
			        <DropDownList onChange={this.handleChange.bind(this)} ref={this.employeeList} id="employeeList"></DropDownList>
			</div>
			<br/>
			<form id="employeeForm"></form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
