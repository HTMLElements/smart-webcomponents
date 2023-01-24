import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { Path } from 'smart-webcomponents-react/path';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.path = React.createRef();
		this.log = React.createRef();
	}

	init() {
		const that = this;
		
	    document.addEventListener('change', function(event) {
			const pathControl = that.path.current
			
	        if (event.target.groupName === 'pathFormat') {
	            pathControl.pathFormat = event.target.innerHTML.trim();
	            return;
	        }
	        if (event.target instanceof window.Smart.ListBox || event.target instanceof window.Smart.DropDownList) {
	            pathControl.value = event.detail.label;
	            return;
	        }
	        if (event.target instanceof window.Smart.Path) {
	            that.log.current.innerHTML = event.detail.value;
	        }
	    });
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <table>
			        <thead>
			            <tr>
			                <th>Encoded Path</th>
			                <th>Windows</th>
			                <th>Linux</th>
			                <th>Notes</th>
			            </tr>
			        </thead>
			        <tbody>
			            <tr>
			                <td>//rel//../Folder/File.txt</td>
			                <td>..\Folder\File.txt</td>
			                <td>../Folder/File.txt</td>
			                <td>This represents a relative file path.</td>
			            </tr>
			            <tr>
			                <td>//abs//C/Folder/File.txt</td>
			                <td>C:\Folder\File.txt</td>
			                <td>/C/Folder/File.txt</td>
			                <td>This represents an absolute file path.</td>
			            </tr>
			            <tr>
			                <td>//unc//Server/Folder/File.txt</td>
			                <td>\\Server\Folder\File.txt</td>
			                <td>//Server/Folder/File.txt</td>
			                <td>This represents a UNC path.</td>
			            </tr>
			            <tr>
			                <td>//</td>
			                <td><strong>not a path</strong>
			                </td>
			                <td><strong>not a path</strong>
			                </td>
			                <td></td>
			            </tr>
			            <tr>
			                <td>////</td>
			                <td><strong>empty path</strong>
			                </td>
			                <td><strong>empty path</strong>
			                </td>
			                <td></td>
			            </tr>
			        </tbody>
			    </table>
			    <Path ref={this.path} label="Path Control" value="C:\Folder\File.txt"></Path>
			    <div className="options">
			        <div className="option">
			            <DropDownList>
			                <ListItem>..\Folder\File.txt</ListItem>
			                <ListItem>../Folder/File.txt</ListItem>
			                <ListItem selected>C:\Folder\File.txt</ListItem>
			                <ListItem>/C/Folder/File.txt</ListItem>
			                <ListItem>//Server/Folder/File.txt</ListItem>
			                <ListItem>\\Server\Folder\File.txt</ListItem>
			                <ListItem>//rel//../Folder/File.txt</ListItem>
			                <ListItem>//abs//C/Folder/File.txt</ListItem>
			                <ListItem>//unc//Server/Folder/File.txt</ListItem>
			                <ListItem>//</ListItem>
			                <ListItem>////</ListItem>
			            </DropDownList>
			        </div>
			        <div className="option">
			             <h3>Select path format:</h3>
			            <RadioButton  checked group-name="pathFormat">windows</RadioButton>
			            <RadioButton  group-name="pathFormat">unix</RadioButton>
			        </div>
			        <div className="option">
			             <h2>Value:</h2>
			            <div ref={this.log} id="log"></div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
