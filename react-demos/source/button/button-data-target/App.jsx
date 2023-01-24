import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { Toast } from 'smart-webcomponents-react/toast';
import { Window } from 'smart-webcomponents-react/window';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			     <h3>Collapse</h3>
			    <Button ref="button" data-toggle="collapse" data-target="#collapseExample"
			    aria-expanded="false" aria-controls="collapseExample">Button with data-target</Button>
			    <br/>
			    <div class="collapse" id="collapseExample">
			        <div class="card card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
			            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
			            anderson cred nesciunt sapiente ea proident.</div>
			    </div>
			     <h3>Dropdown</h3>
			    <Button ref="button2" id="dropdownMenuButton" data-target=".dropdown-menu"
			    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</Button>
			    <br/>
			    <br/>
			    <DropDownList ref="dropdownlist" selected-indexes="[0]" class="dropdown-menu">
			        <ListItem>Action</ListItem>
			        <ListItem>Another action</ListItem>
			        <ListItem>Something else</ListItem>
			    </DropDownList>
			     <h3>Modal</h3>
			    <Button ref="button3" type="button" class="btn btn-primary" data-toggle="modal"
			    data-target="#exampleModal">Launch demo modal</Button>
			    <Window ref="window" header="Title" id="exampleModal" tabindex="-1" role="dialog"
			    aria-labelledby="exampleModalLabel" aria-hidden="true">
			        <div>
			            <div id="article">
			                <section>
			                     <h3>What is Lorem Ipsum?</h3>
			                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			                        Lorem Ipsum has been the industry's standard dummy text ever since the
			                        1500s, when an unknown printer took a galley of type and scrambled it to
			                        make a type specimen book. It has survived not only five centuries, but
			                        also the leap into electronic typesetting, remaining essentially unchanged.
			                        It was popularised in the 1960s with the release of Letraset sheets containing
			                        Lorem Ipsum passages, and more recently with desktop publishing software
			                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
			                </section>
			                <section>
			                     <h3>Where does it come from?</h3>
			                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
			                        has roots in a piece of classical Latin literature from 45 BC, making it
			                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
			                        College in Virginia, looked up one of the more obscure Latin words, consectetur,
			                        from a Lorem Ipsum passage, and going through the cites of the word in
			                        classical literature, discovered the undoubtable source. Lorem Ipsum comes
			                        from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
			                        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
			                        treatise on the theory of ethics, very popular during the Renaissance.
			                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
			                        a line in section 1.10.32. The standard chunk of Lorem Ipsum used since
			                        the 1500s is reproduced below for those interested. Sections 1.10.32 and
			                        1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
			                        in their exact original form, accompanied by English versions from the
			                        1914 translation by H. Rackham.</p>
			                </section>
			            </div>
			            <div class="modal-footer">
			                <Button ref="button4" type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
			            </div>
			        </div>
			    </Window>
			    	<h3>Tooltip</h3>
			    <Button ref="button5" type="button" class="btn btn-secondary" data-toggle="tooltip"
			    data-placement="top" data-title="Tooltip on top">Tooltip on top</Button>
			    <Button ref="button6" type="button" class="btn btn-secondary"
			    data-toggle="tooltip" data-placement="bottom" data-title="Tooltip on bottom">Tooltip on bottom</Button>
			    	<h3>Toast</h3>
			    <Button ref="button7" type="button" data-target="#toast" data-toggle="toggle">Toggle Toast</Button>
			    <Toast ref="toast" id="toast" position="top-left"
			    show-close-button type="mail" class="blink">You have 2 new messages.
			        <button data-dismiss="toast">Close</button>
			    </Toast>
			    	<h3>List</h3>
			    <ul class="nav nav-tabs" id="myTab" role="tablist">
			        <li class="nav-item" role="presentation">
			            <Button ref="button8" class="nav-link active" id="home-tab" data-toggle="tab"
			            data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</Button>
			        </li>
			        <li class="nav-item" role="presentation">
			            <Button ref="button9" class="nav-link" id="profile-tab" data-toggle="tab"
			            data-target="#profile" type="button" role="tab" aria-controls="profile"
			            aria-selected="false">Profile</Button>
			        </li>
			        <li class="nav-item" role="presentation">
			            <Button ref="button10" class="nav-link" id="contact-tab" data-toggle="tab"
			            data-target="#contact" type="button" role="tab" aria-controls="contact"
			            aria-selected="false">Contact</Button>
			        </li>
			    </ul>
			    <div class="tab-content" id="myTabContent">
			        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Content 1</div>
			        <div class="tab-pane fade smart-hidden" id="profile" role="tabpanel"
			        aria-labelledby="profile-tab">Content 2</div>
			        <div class="tab-pane fade smart-hidden" id="contact" role="tabpanel"
			        aria-labelledby="contact-tab">Content 3</div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
