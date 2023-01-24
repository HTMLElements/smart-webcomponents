import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">smartDropDownButton allows you to display any type of content in a Drop-down.</div>
				<DropDownButton
					ref={this.dropdownbutton} dropDownWidth="auto" placeholder="Calendar">
					<Calendar ></Calendar>
				</DropDownButton>
				<DropDownButton  drop-down-width="auto" placeholder="ListMenu">
					<ListMenu  dataSource={
						[{
							label: 'OSI',
							items: [{
								label: 'Application Layer',
								items: [{
									label: 'SIP'
								},
								{
									label: 'DNS'
								},
								{
									label: 'FTP'
								},
								{
									label: 'RTP'
								},
								{
									label: 'DHCP'
								}
								]
							},
							{
								label: 'Presentation Layer',
								items: [{
									label: 'SSL'
								},
								{
									label: 'TLS'
								}
								]
							},
							{
								label: 'Session Layer',
								items: [{
									label: 'NetBIOS'
								},
								{
									label: 'SPDY'
								}
								]
							},
							{
								label: 'Transport Layer',
								items: [{
									label: 'TCP'
								},
								{
									label: 'UDP'
								},
								{
									label: 'SCTP'
								}
								]
							},
							{
								label: 'Network Layer',
								items: [{
									label: 'IP'
								},
								{
									label: 'ARP'
								},
								{
									label: 'ICMP'
								}
								]
							},
							{
								label: 'Data Link Layer',
								items: [{
									label: 'ATM'
								},
								{
									label: 'SDLS'
								},
								{
									label: 'LLC'
								}
								]
							},
							{
								label: 'Physical Layer',
								items: [{
									label: 'EIA/TIA-232'
								},
								{
									label: 'ITU-T V-Series'
								},
								{
									label: 'DSL'
								}
								]
							}
							]
						},
						{
							label: 'TCP/IP',
							items: [{
								label: 'Application Layer',
								items: [{
									label: 'DHCP'
								},
								{
									label: 'DNS'
								},
								{
									label: 'FTP'
								},
								{
									label: 'HTTP'
								},
								{
									label: 'IMAP'
								},
								{
									label: 'LDAP'
								},
								{
									label: 'XMPP'
								},
								{
									label: 'SSH'
								},
								{
									label: 'RIP'
								}
								]
							},
							{
								label: 'Transport Layer',
								items: [{
									label: 'TCP'
								},
								{
									label: 'UDP'
								},
								{
									label: 'SCTP'
								}
								]
							},
							{
								label: 'Internet Layer',
								items: [{
									label: 'IP'
								},
								{
									label: 'ICMP'
								},
								{
									label: 'ECN'
								}
								]
							},
							{
								label: 'Link Layer',
								items: [{
									label: 'ARP'
								},
								{
									label: 'NDP'
								},
								{
									label: 'DSL'
								}
								]
							}
							]
						}
						]
					}></ListMenu>
				</DropDownButton>
				<DropDownButton  placeholder="Buttons">
					<Button >Button</Button>
					<SwitchButton >Switch Button</SwitchButton>
				</DropDownButton>
				<DropDownButton  placeholder="Text">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
				and typesetting industry. Lorem Ipsum has been the industry's standard
				dummy text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has survived
				not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
			            of Lorem Ipsum.</DropDownButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
