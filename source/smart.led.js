
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-led",class extends Smart.ToggleButton{static get properties(){return{shape:{value:"round",allowedValues:["round","square"],type:"string"}}}static get styleUrls(){return["smart.led.css"]}template(){return`<div id='container' class='smart-container' role="presentation">
                    <div id='ledAnimation' class='smart-animation' role="presentation"></div>
                    <div id='button' class='smart-input' role="presentation">
                        <span id='falseContentContainer' inner-h-t-m-l='[[falseContent]]' class='smart-false-content-container'></span>
                        <span id='indeterminateContentContainer' inner-h-t-m-l='[[indeterminateContent]]' class='smart-indeterminate-content-container'></span>
                        <span id='trueContentContainer' inner-h-t-m-l='[[trueContent]]' class='smart-true-content-container'></span>
                    </div>
                    <input id='hiddenInput' class='smart-hidden-input' type='hidden'>
                </div>`}ready(){const a=this;super.ready(),a._htmlBindOnInitialization(),a.indeterminate&&(a._valueCashe=a.checked,a.checked=null),a._handleTemplate(!0),a._handleTemplate(!1),a._handleTemplate(),a._updateHidenInputNameAndValue()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"indeterminate"===a?(c?(d._valueCashe=d.checked,d.checked=null):d.checked=d._valueCashe,d._updateHidenInputNameAndValue()):"trueContent"===a?(d.trueContent=c,d._handleTemplate(!0)):"falseContent"===a?(d.falseContent=c,d._handleTemplate(!1)):"indeterminateContent"===a?(d.indeterminateContent=c,d._handleTemplate()):"value"===a?d._updateHidenInputNameAndValue():"checked"===a?d._updateHidenInputNameAndValue():"name"===a?d._updateHidenInputName():void 0}_documentUpHandler(a){const b=this;return!b._pressed||b.readonly?void 0:"press"===b.clickMode?(a.preventDefault(),a.stopPropagation(),void(b._pressed=!1)):void(super._documentUpHandler(a),b.indeterminate=!1,b._updateHidenInputNameAndValue(),b._pressed=!1)}_mouseDownHandler(){const a=this;a.readonly||a.disabled||(a._pressed=!0,("press"===a.clickMode||"pressAndRelease"===a.clickMode)&&(a._changeCheckState("pointer"),a.$.fireEvent("click"),a.indeterminate=!1,a._updateHidenInputNameAndValue()))}});