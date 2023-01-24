import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';
import { textChangeRangeIsUnchanged } from "typescript";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.textbox = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
		this.radiobutton4 = React.createRef();
	}

	handleRadioButtonChange() {
		const that = this,
			target = [that.radiobutton.current, that.radiobutton2.current, that.radiobutton3.current, that.radiobutton4.current].find(b => b.checked);
		let mode = target.innerHTML.trim();

		that.textbox.current.autoComplete = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<TextBox ref={this.textbox} id="textBox" autoComplete="manual" minLength={1} dropDownAppendTo="body" placeholder="">
					<ListItem value="Afghanistan">Afghanistan</ListItem>
					<ListItem value="Albania">Albania</ListItem>
					<ListItem value="Algeria">Algeria</ListItem>
					<ListItem value="American Samoa">American Samoa</ListItem>
					<ListItem value="Andorra">Andorra</ListItem>
					<ListItem value="Angola">Angola</ListItem>
					<ListItem value="Anguilla">Anguilla</ListItem>
					<ListItem value="Antarctica">Antarctica</ListItem>
					<ListItem value="Antigua and Barbuda">Antigua and Barbuda</ListItem>
					<ListItem value="Argentina">Argentina</ListItem>
					<ListItem value="Armenia">Armenia</ListItem>
					<ListItem value="Aruba">Aruba</ListItem>
					<ListItem value="Australia">Australia</ListItem>
					<ListItem value="Austria">Austria</ListItem>
					<ListItem value="Azerbaijan">Azerbaijan</ListItem>
					<ListItem value="Bahamas">Bahamas</ListItem>
					<ListItem value="Bahrain">Bahrain</ListItem>
					<ListItem value="Bangladesh">Bangladesh</ListItem>
					<ListItem value="Barbados">Barbados</ListItem>
					<ListItem value="Belarus">Belarus</ListItem>
					<ListItem value="Belgium">Belgium</ListItem>
					<ListItem value="Belize">Belize</ListItem>
					<ListItem value="Benin">Benin</ListItem>
					<ListItem value="Bermuda">Bermuda</ListItem>
					<ListItem value="Bhutan">Bhutan</ListItem>
					<ListItem value="Bolivia">Bolivia</ListItem>
					<ListItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</ListItem>
					<ListItem value="Botswana">Botswana</ListItem>
					<ListItem value="Bouvet Island">Bouvet Island</ListItem>
					<ListItem value="Brazil">Brazil</ListItem>
					<ListItem value="British Indian Ocean Territory">British Indian Ocean Territory</ListItem>
					<ListItem value="Brunei Darussalam">Brunei Darussalam</ListItem>
					<ListItem value="Bulgaria">Bulgaria</ListItem>
					<ListItem value="Burkina Faso">Burkina Faso</ListItem>
					<ListItem value="Burundi">Burundi</ListItem>
					<ListItem value="Cambodia">Cambodia</ListItem>
					<ListItem value="Cameroon">Cameroon</ListItem>
					<ListItem value="Canada">Canada</ListItem>
					<ListItem value="Cape Verde">Cape Verde</ListItem>
					<ListItem value="Cayman Islands">Cayman Islands</ListItem>
					<ListItem value="Central African Republic">Central African Republic</ListItem>
					<ListItem value="Chad">Chad</ListItem>
					<ListItem value="Chile">Chile</ListItem>
					<ListItem value="China">China</ListItem>
					<ListItem value="Christmas Island">Christmas Island</ListItem>
					<ListItem value="Cocos (Keeling) Islands">Cocos Islands</ListItem>
					<ListItem value="Colombia">Colombia</ListItem>
					<ListItem value="Comoros">Comoros</ListItem>
					<ListItem value="Congo">Congo</ListItem>
					<ListItem value="Congo, The Democratic Republic of The">Congo</ListItem>
					<ListItem value="Cook Islands">Cook Islands</ListItem>
					<ListItem value="Costa Rica">Costa Rica</ListItem>
					<ListItem value="Cote D'ivoire">Cote D'ivoire</ListItem>
					<ListItem value="Croatia">Croatia</ListItem>
					<ListItem value="Cuba">Cuba</ListItem>
					<ListItem value="Cyprus">Cyprus</ListItem>
					<ListItem value="Czech Republic">Czech Republic</ListItem>
					<ListItem value="Denmark">Denmark</ListItem>
					<ListItem value="Djibouti">Djibouti</ListItem>
					<ListItem value="Dominica">Dominica</ListItem>
					<ListItem value="Dominican Republic">Dominican Republic</ListItem>
					<ListItem value="Ecuador">Ecuador</ListItem>
					<ListItem value="Egypt">Egypt</ListItem>
					<ListItem value="El Salvador">El Salvador</ListItem>
					<ListItem value="Equatorial Guinea">Equatorial Guinea</ListItem>
					<ListItem value="Eritrea">Eritrea</ListItem>
					<ListItem value="Estonia">Estonia</ListItem>
					<ListItem value="Ethiopia">Ethiopia</ListItem>
					<ListItem value="Falkland Islands (Malvinas)">Falkland Islands</ListItem>
					<ListItem value="Faroe Islands">Faroe Islands</ListItem>
					<ListItem value="Fiji">Fiji</ListItem>
					<ListItem value="Finland">Finland</ListItem>
					<ListItem value="France">France</ListItem>
					<ListItem value="French Guiana">French Guiana</ListItem>
					<ListItem value="French Polynesia">French Polynesia</ListItem>
					<ListItem value="French Southern Territories">French Southern Territories</ListItem>
					<ListItem value="Gabon">Gabon</ListItem>
					<ListItem value="Gambia">Gambia</ListItem>
					<ListItem value="Georgia">Georgia</ListItem>
					<ListItem value="Germany">Germany</ListItem>
					<ListItem value="Ghana">Ghana</ListItem>
					<ListItem value="Gibraltar">Gibraltar</ListItem>
					<ListItem value="Greece">Greece</ListItem>
					<ListItem value="Greenland">Greenland</ListItem>
					<ListItem value="Grenada">Grenada</ListItem>
					<ListItem value="Guadeloupe">Guadeloupe</ListItem>
					<ListItem value="Guam">Guam</ListItem>
					<ListItem value="Guatemala">Guatemala</ListItem>
					<ListItem value="Guinea">Guinea</ListItem>
					<ListItem value="Guinea-bissau">Guinea-bissau</ListItem>
					<ListItem value="Guyana">Guyana</ListItem>
					<ListItem value="Haiti">Haiti</ListItem>
					<ListItem value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</ListItem>
					<ListItem value="Holy See (Vatican City State)">Holy See</ListItem>
					<ListItem value="Honduras">Honduras</ListItem>
					<ListItem value="Hong Kong">Hong Kong</ListItem>
					<ListItem value="Hungary">Hungary</ListItem>
					<ListItem value="Iceland">Iceland</ListItem>
					<ListItem value="India">India</ListItem>
					<ListItem value="Indonesia">Indonesia</ListItem>
					<ListItem value="Iran, Islamic Republic of">Iran</ListItem>
					<ListItem value="Iraq">Iraq</ListItem>
					<ListItem value="Ireland">Ireland</ListItem>
					<ListItem value="Israel">Israel</ListItem>
					<ListItem value="Italy">Italy</ListItem>
					<ListItem value="Jamaica">Jamaica</ListItem>
					<ListItem value="Japan">Japan</ListItem>
					<ListItem value="Jordan">Jordan</ListItem>
					<ListItem value="Kazakhstan">Kazakhstan</ListItem>
					<ListItem value="Kenya">Kenya</ListItem>
					<ListItem value="Kiribati">Kiribati</ListItem>
					<ListItem value="Korea, Democratic People's Republic of">Korea</ListItem>
					<ListItem value="Korea, Republic of">Korea, Republic of</ListItem>
					<ListItem value="Kuwait">Kuwait</ListItem>
					<ListItem value="Kyrgyzstan">Kyrgyzstan</ListItem>
					<ListItem value="Lao People's Democratic Republic">Lao People's Democratic Republic</ListItem>
					<ListItem value="Latvia">Latvia</ListItem>
					<ListItem value="Lebanon">Lebanon</ListItem>
					<ListItem value="Lesotho">Lesotho</ListItem>
					<ListItem value="Liberia">Liberia</ListItem>
					<ListItem value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</ListItem>
					<ListItem value="Liechtenstein">Liechtenstein</ListItem>
					<ListItem value="Lithuania">Lithuania</ListItem>
					<ListItem value="Luxembourg">Luxembourg</ListItem>
					<ListItem value="Macao">Macao</ListItem>
					<ListItem value="Macedonia, The Former Yugoslav Republic of">Macedonia</ListItem>
					<ListItem value="Madagascar">Madagascar</ListItem>
					<ListItem value="Malawi">Malawi</ListItem>
					<ListItem value="Malaysia">Malaysia</ListItem>
					<ListItem value="Maldives">Maldives</ListItem>
					<ListItem value="Mali">Mali</ListItem>
					<ListItem value="Malta">Malta</ListItem>
					<ListItem value="Marshall Islands">Marshall Islands</ListItem>
					<ListItem value="Martinique">Martinique</ListItem>
					<ListItem value="Mauritania">Mauritania</ListItem>
					<ListItem value="Mauritius">Mauritius</ListItem>
					<ListItem value="Mayotte">Mayotte</ListItem>
					<ListItem value="Mexico">Mexico</ListItem>
					<ListItem value="Micronesia, Federated States of">Micronesia</ListItem>
					<ListItem value="Moldova, Republic of">Moldova, Republic of</ListItem>
					<ListItem value="Monaco">Monaco</ListItem>
					<ListItem value="Mongolia">Mongolia</ListItem>
					<ListItem value="Montserrat">Montserrat</ListItem>
					<ListItem value="Morocco">Morocco</ListItem>
					<ListItem value="Mozambique">Mozambique</ListItem>
					<ListItem value="Myanmar">Myanmar</ListItem>
					<ListItem value="Namibia">Namibia</ListItem>
					<ListItem value="Nauru">Nauru</ListItem>
					<ListItem value="Nepal">Nepal</ListItem>
					<ListItem value="Netherlands">Netherlands</ListItem>
					<ListItem value="Netherlands Antilles">Netherlands Antilles</ListItem>
					<ListItem value="New Caledonia">New Caledonia</ListItem>
					<ListItem value="New Zealand">New Zealand</ListItem>
					<ListItem value="Nicaragua">Nicaragua</ListItem>
					<ListItem value="Niger">Niger</ListItem>
					<ListItem value="Nigeria">Nigeria</ListItem>
					<ListItem value="Niue">Niue</ListItem>
					<ListItem value="Norfolk Island">Norfolk Island</ListItem>
					<ListItem value="Northern Mariana Islands">Northern Mariana Islands</ListItem>
					<ListItem value="Norway">Norway</ListItem>
					<ListItem value="Oman">Oman</ListItem>
					<ListItem value="Pakistan">Pakistan</ListItem>
					<ListItem value="Palau">Palau</ListItem>
					<ListItem value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</ListItem>
					<ListItem value="Panama">Panama</ListItem>
					<ListItem value="Papua New Guinea">Papua New Guinea</ListItem>
					<ListItem value="Paraguay">Paraguay</ListItem>
					<ListItem value="Peru">Peru</ListItem>
					<ListItem value="Philippines">Philippines</ListItem>
					<ListItem value="Pitcairn">Pitcairn</ListItem>
					<ListItem value="Poland">Poland</ListItem>
					<ListItem value="Portugal">Portugal</ListItem>
					<ListItem value="Puerto Rico">Puerto Rico</ListItem>
					<ListItem value="Qatar">Qatar</ListItem>
					<ListItem value="Reunion">Reunion</ListItem>
					<ListItem value="Romania">Romania</ListItem>
					<ListItem value="Russian Federation">Russian Federation</ListItem>
					<ListItem value="Rwanda">Rwanda</ListItem>
					<ListItem value="Saint Helena">Saint Helena</ListItem>
					<ListItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</ListItem>
					<ListItem value="Saint Lucia">Saint Lucia</ListItem>
					<ListItem value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</ListItem>
					<ListItem value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</ListItem>
					<ListItem value="Samoa">Samoa</ListItem>
					<ListItem value="San Marino">San Marino</ListItem>
					<ListItem value="Sao Tome and Principe">Sao Tome and Principe</ListItem>
					<ListItem value="Saudi Arabia">Saudi Arabia</ListItem>
					<ListItem value="Senegal">Senegal</ListItem>
					<ListItem value="Serbia and Montenegro">Serbia and Montenegro</ListItem>
					<ListItem value="Seychelles">Seychelles</ListItem>
					<ListItem value="Sierra Leone">Sierra Leone</ListItem>
					<ListItem value="Singapore">Singapore</ListItem>
					<ListItem value="Slovakia">Slovakia</ListItem>
					<ListItem value="Slovenia">Slovenia</ListItem>
					<ListItem value="Solomon Islands">Solomon Islands</ListItem>
					<ListItem value="Somalia">Somalia</ListItem>
					<ListItem value="South Africa">South Africa</ListItem>
					<ListItem value="South Georgia and The South Sandwich Islands">South Georgia</ListItem>
					<ListItem value="Spain">Spain</ListItem>
					<ListItem value="Sri Lanka">Sri Lanka</ListItem>
					<ListItem value="Sudan">Sudan</ListItem>
					<ListItem value="Suriname">Suriname</ListItem>
					<ListItem value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</ListItem>
					<ListItem value="Swaziland">Swaziland</ListItem>
					<ListItem value="Sweden">Sweden</ListItem>
					<ListItem value="Switzerland">Switzerland</ListItem>
					<ListItem value="Syrian Arab Republic">Syrian Arab Republic</ListItem>
					<ListItem value="Taiwan, Province of China">Taiwan, Province of China</ListItem>
					<ListItem value="Tajikistan">Tajikistan</ListItem>
					<ListItem value="Tanzania, United Republic of">Tanzania, United Republic of</ListItem>
					<ListItem value="Thailand">Thailand</ListItem>
					<ListItem value="Timor-leste">Timor-leste</ListItem>
					<ListItem value="Togo">Togo</ListItem>
					<ListItem value="Tokelau">Tokelau</ListItem>
					<ListItem value="Tonga">Tonga</ListItem>
					<ListItem value="Trinidad and Tobago">Trinidad and Tobago</ListItem>
					<ListItem value="Tunisia">Tunisia</ListItem>
					<ListItem value="Turkey">Turkey</ListItem>
					<ListItem value="Turkmenistan">Turkmenistan</ListItem>
					<ListItem value="Turks and Caicos Islands">Turks and Caicos Islands</ListItem>
					<ListItem value="Tuvalu">Tuvalu</ListItem>
					<ListItem value="Uganda">Uganda</ListItem>
					<ListItem value="Ukraine">Ukraine</ListItem>
					<ListItem value="United Arab Emirates">United Arab Emirates</ListItem>
					<ListItem value="United Kingdom">United Kingdom</ListItem>
					<ListItem value="United States">United States</ListItem>
					<ListItem value="United States Minor Outlying Islands">United States Minor Outlying Islands</ListItem>
					<ListItem value="Uruguay">Uruguay</ListItem>
					<ListItem value="Uzbekistan">Uzbekistan</ListItem>
					<ListItem value="Vanuatu">Vanuatu</ListItem>
					<ListItem value="Venezuela">Venezuela</ListItem>
					<ListItem value="Viet Nam">Viet Nam</ListItem>
					<ListItem value="Virgin Islands, British">Virgin Islands, British</ListItem>
					<ListItem value="Virgin Islands, U.S.">Virgin Islands, U.S.</ListItem>
					<ListItem value="Wallis and Futuna">Wallis and Futuna</ListItem>
					<ListItem value="Western Sahara">Western Sahara</ListItem>
					<ListItem value="Yemen">Yemen</ListItem>
					<ListItem value="Zambia">Zambia</ListItem>
					<ListItem value="Zimbabwe">Zimbabwe</ListItem>
				</TextBox>

				<div className="options">
					<div className="caption">TextBox's autoComplete modes:</div>
					<div className="option">
						<RadioButton ref={this.radiobutton} onChange={this.handleRadioButtonChange.bind(this)}>None</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton2} onChange={this.handleRadioButtonChange.bind(this)}>Auto</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton3} onChange={this.handleRadioButtonChange.bind(this)}>Inline</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton4} checked onChange={this.handleRadioButtonChange.bind(this)}>Manual</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
