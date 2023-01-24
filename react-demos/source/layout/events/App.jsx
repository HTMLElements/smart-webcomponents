import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	init() {
	
	
	    const layout = document.querySelector('smart-layout'),
	        eventLog = document.getElementById('log');
	
	    function getElement(event) {
	        const element = document.createElement('div');
	        element.textContent = 'Type: ' + event.type;
	        if (event.detail.x) {
	            element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
	        }
	        return element;
	    }
	    layout.addEventListener('resizeStart', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('resizeEnd', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('change', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('stateChange', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('opening', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('open', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('closing', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('close', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	    layout.addEventListener('menuItemClick', function(event) {
	        eventLog.appendChild(getElement(event));
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <smart-layout>
			        <Splitter ref="splitter">
			            <SplitterItem size="25%">
			                 <h2>What is Lorem Ipsum?</h2>
			                <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
			                    industry. Lorem Ipsum has been the industry's standard dummy text ever
			                    since the 1500s, when an unknown printer took a galley of type and scrambled
			                    it to make a type specimen book. It has survived not only five centuries,
			                    but also the leap into electronic typesetting, remaining essentially unchanged.
			                    It was popularised in the 1960s with the release of Letraset sheets containing
			                    Lorem Ipsum passages, and more recently with desktop publishing software
			                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
			            </SplitterItem>
			            <SplitterItem size="25%">
			                 <h2>Why do we use it?</h2>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lobortis
			                    mi. Sed at urna eget justo tincidunt finibus nec eu nulla. Sed vitae pretium
			                    lorem. Sed tristique, risus non pellentesque pellentesque, ligula purus
			                    ullamcorper diam, non iaculis enim orci semper nibh. Donec tincidunt ex
			                    lacus, sed ornare dui commodo at. Nullam id lectus cursus felis posuere
			                    venenatis. Phasellus gravida felis eu vestibulum luctus. Nunc convallis
			                    diam sed pretium gravida. Fusce scelerisque leo sem, vitae accumsan arcu
			                    tempus ac. Cras commodo augue mauris, eu posuere lectus lobortis auctor.
			                    Sed euismod sit amet lectus et bibendum. Aenean congue felis nunc.</p>
			                <p>Vivamus placerat quam vel eros hendrerit, id sagittis eros suscipit. Cras
			                    quis dapibus sem. Maecenas faucibus faucibus metus, sit amet viverra augue
			                    auctor quis. Quisque sed lectus sed tellus dapibus vulputate. Aenean sem
			                    est, aliquam non ornare ut, tristique et leo. Nulla vehicula urna non aliquet
			                    rutrum. Nullam imperdiet nibh a aliquam elementum. Nullam vitae mi posuere,
			                    sollicitudin magna at, ultricies magna. Aenean egestas, nulla nec faucibus
			                    dictum, sapien elit vulputate odio, ut interdum nisi velit at leo. Proin
			                    posuere ac neque id volutpat. In varius dignissim posuere.</p>
			            </SplitterItem>
			            <SplitterItem size="25%">
			                 <h2>Why do we use it?</h2>
			                <p>It is a long established fact that a reader will be distracted by the
			                    readable content of a page when looking at its layout. The point of using
			                    Lorem Ipsum is that it has a more-or-less normal distribution of letters,
			                    as opposed to using 'Content here, content here', making it look like readable
			                    English. Many desktop publishing packages and web page editors now use
			                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
			                    will uncover many web sites still in their infancy. Various versions have
			                    evolved over the years, sometimes by accident, sometimes on purpose (injected
			                    humour and the like).</p>
			            </SplitterItem>
			            <SplitterItem>
			                 <h2>Where does it come from?</h2>
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
			                    a line in section 1.10.32.</p>
			                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
			                    for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
			                    et Malorum" by Cicero are also reproduced in their exact original form,
			                    accompanied by English versions from the 1914 translation by H. Rackham.</p>
			            </SplitterItem>
			        </Splitter>
			    </smart-layout>
			    <div class="options">
			        <div>Event Log:</div>
			        <div class="option">
			            <div id="log"></div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
