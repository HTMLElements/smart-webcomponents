import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { WaitWindow } from 'smart-webcomponents-react/waitwindow';
import { ProgressWindow } from 'smart-webcomponents-react/progresswindow';
import { MultilinePromptWindow } from 'smart-webcomponents-react/multilinepromptwindow';
import { PromptWindow } from 'smart-webcomponents-react/promptwindow';
import { AlertWindow } from 'smart-webcomponents-react/alertwindow';

class App extends React.Component {

	init() {
	
	
	    const dialogWindow = document.querySelector('smart-dialog-window'),
	        alertWindow = document.querySelector('smart-alert-window'),
	        progressWindow = document.querySelector('smart-progress-window'),
	        waitWindow = document.querySelector('smart-wait-window'),
	        promptWindow = document.querySelector('smart-prompt-window'),
	        multilinePromptWindow = document.querySelector('smart-multiline-prompt-window'),
	        iconDialogWindow = document.getElementById('iconDialogWindow'),
	        dropDownList = document.querySelector('smart-drop-down-list');
	    const log = document.getElementById('log');
	
	    function dialogButtonsHandler(event) {
	        const target = event.target;
	        if (target.closest('.smart-cancel-button')) {
	            log.textContent = 'Canceled';
	            target.close();
	        } else if (target.closest('.smart-confirm-button')) {
	            log.textContent = 'Confirmed';
	            target.close();
	        }
	    }
	    document.getElementById('openDialogButton').addEventListener('click', function() {
	        dialogWindow.opened ? dialogWindow.close() : dialogWindow.open();
	    });
	    document.getElementById('openAlertButton').addEventListener('click', function() {
	        alertWindow.opened ? alertWindow.close() : alertWindow.open();
	    });
	    dialogWindow.addEventListener('click', dialogButtonsHandler);
	    alertWindow.addEventListener('click', function(event) {
	        const target = event.target;
	        if (target.closest('.smart-confirm-button')) {
	            log.textContent = 'Confirmed';
	            alertWindow.close();
	        }
	    });
	    document.getElementById('openProgressButton').addEventListener('click', function() {
	        if (progressWindow.opened) {
	            return;
	        }
	        progressWindow.innerHTML = 'Loading...';
	        progressWindow.open();
	        let interval = setInterval(function() {
	            if (progressWindow.value >= progressWindow.max) {
	                progressWindow.innerHTML = 'Finished';
	                clearInterval(interval);
	            }
	            progressWindow.value = (progressWindow.value + Math.random() * 10);
	        }, 500);
	    });
	    progressWindow.addEventListener('click', function(event) {
	        const target = event.target;
	        if (target.closest('.smart-complete-button')) {
	            progressWindow.close();
	            progressWindow.value = 0;
	        }
	    });
	    document.getElementById('openWaitButton').addEventListener('click', function() {
	        if (waitWindow.opened) {
	            return;
	        }
	        waitWindow.open();
	        setTimeout(function() {
	            waitWindow.close();
	        }, 2500);
	    });
	    document.getElementById('openPromptButton').addEventListener('click', function() {
	        promptWindow.opened ? promptWindow.close() : promptWindow.open();
	    });
	    promptWindow.addEventListener('click', dialogButtonsHandler);
	    document.getElementById('openMultilinePromptButton').addEventListener('click', function() {
	        multilinePromptWindow.opened ? multilinePromptWindow.close() : multilinePromptWindow.open();
	    });
	    multilinePromptWindow.addEventListener('click', dialogButtonsHandler);
	    document.getElementById('openIconDialogButton').addEventListener('click', function() {
	        const selectedItem = dropDownList.getItem(dropDownList.selectedValues[0]);
	        document.getElementsByClassName('smart-icon-dialog-icon')[0].innerHTML = '<span className="glyphicon glyphicon-' + selectedItem.value + '"></span>';
	        document.getElementsByClassName('smart-icon-dialog-content')[0].innerHTML = selectedItem.label;
	        for (let i = 0; i < iconDialogWindow.classList.length; i++) {
	            if (iconDialogWindow.classList[i].indexOf('smart-theme-') > -1) {
	                iconDialogWindow.classList.remove(iconDialogWindow.classList[i]);
	            }
	        }
	        iconDialogWindow.classList.add('smart-theme-' + selectedItem.label.toLowerCase());
	        iconDialogWindow.opened ? iconDialogWindow.close() : iconDialogWindow.open();
	    });
	    iconDialogWindow.addEventListener('click', dialogButtonsHandler);
	    document.addEventListener('click', function(event) {
	        if (document.querySelector('smart-check-box').checked) {
	            dialogWindow.closeOnMaskClick = alertWindow.closeOnMaskClick = progressWindow.closeOnMaskClick =
	                waitWindow.closeOnMaskClick = promptWindow.closeOnMaskClick = multilinePromptWindow.closeOnMaskClick =
	                iconDialogWindow.closeOnMaskClick = true;
	        } else {
	            dialogWindow.closeOnMaskClick = alertWindow.closeOnMaskClick = progressWindow.closeOnMaskClick =
	                waitWindow.closeOnMaskClick = promptWindow.closeOnMaskClick = multilinePromptWindow.closeOnMaskClick =
	                iconDialogWindow.closeOnMaskClick = false;
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="options">
			        <div className="option">
			            <Button  id="openAlertButton">Alert Window</Button>
			        </div>
			        <div className="option">
			            <Button  id="openDialogButton">Dialog Window</Button>
			        </div>
			        <div className="option">
			            <Button  id="openProgressButton">Progress Window</Button>
			        </div>
			        <div className="option">
			            <Button  id="openWaitButton">Wait Window</Button>
			        </div>
			        <div className="option">
			            <Button  id="openPromptButton">Prompt Window</Button>
			        </div>
			        <div className="option">
			            <Button  id="openMultilinePromptButton">Multiline Window</Button>
			        </div>
			        <div className="option">
			            <label>Hide on mask click:</label>
			            <CheckBox  enable-container-click></CheckBox>
			        </div>
			        <div className="caption">
			            <label>Choose icon:</label>
			        </div>
			        <div className="option">
			            <DropDownList >
			                <ListItem value="remove-sign">Error</ListItem>
			                <ListItem value="info-sign">Information</ListItem>
			                <ListItem value="question-sign">Question</ListItem>
			                <ListItem value="exclamation-sign">Warning</ListItem>
			            </DropDownList>
			        </div>
			        <div className="option">
			            <Button  id="openIconDialogButton">Icon Dialog Window</Button>
			        </div>
			        <div className="caption">Log:</div>
			        <div className="option"> <span id="log"></span>
			        </div>
			    </div>
			    <DialogWindow id="iconDialogWindow" label="Icon Dialog Window"
			    className="material">
			        <div className="smart-icon-dialog-icon">&#xe82f</div>
			        <div className="smart-icon-dialog-content">Continue ?</div>
			    </DialogWindow>
			    <DialogWindow label="Dialog Window" className="material">
			        <div className="smart-dialog-icon"></div>
			        <div className="smart-dialog-content"></div>
			    </DialogWindow>
			    <AlertWindow  label="Alert Window" className="material">Operation Successful !</AlertWindow>
			    <ProgressWindow 
			    label="Progress Window" max="50" className="material">Loading...</ProgressWindow>
			    <WaitWindow  label="Wait Window"
			    className="material"></WaitWindow>
			    <PromptWindow  label="Prompt Window" prompt-label="Enter your name:"
			    className="material"></PromptWindow>
			    <MultilinePromptWindow  label="Prompt Window"
			    prompt-label="Enter your address:" className="material"></MultilinePromptWindow>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
