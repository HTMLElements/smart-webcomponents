
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-power-button",class extends Smart.ToggleButton{static get styleUrls(){return["smart.powerbutton.css"]}template(){return`<div id='container' class='smart-container'>
                    <div id='powerButtonAnimation' class='smart-animation'></div>
                    <span id='button' class='smart-input' aria-hidden="true"></span>
                    <input id='hiddenInput' class='smart-hidden-input' type='hidden'>
                </div>`}ready(){const a=this;super.ready(),a._updateHidenInputNameAndValue()}});