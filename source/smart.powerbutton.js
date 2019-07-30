
<<<<<<< HEAD
/* Smart HTML Elements v4.0.0 (2019-Aug) 
=======
/* Smart HTML Elements v3.2.0 (2019-June) 
>>>>>>> origin/master
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-power-button",class extends Smart.ToggleButton{static get styleUrls(){return["smart.powerbutton.css"]}template(){return`<div id='container' class='smart-container'>
                 <div id='powerButtonAnimation' class ='smart-animation'></div>
                 <span id='button' class ='smart-input'></span>
                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>
               </div>`}ready(){const a=this;super.ready(),a._updateHidenInputNameAndValue()}});