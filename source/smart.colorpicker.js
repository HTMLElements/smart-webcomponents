
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-color-picker",class extends Smart.DropDownButton{static get properties(){return{applyValueMode:{value:"instantly",allowedValues:["instantly","useButtons"],type:"string"},columnCount:{value:8,type:"number"},gridThemeColors:{value:null,type:"array?",reflectToAttribute:!1},gridShadeColors:{value:null,type:"array?",reflectToAttribute:!1},gridStandardColors:{value:null,type:"array?",reflectToAttribute:!1},paletteColors:{value:null,type:"array?",reflectToAttribute:!1},paletteCustomColors:{value:null,type:"array?",reflectToAttribute:!1},disableUndo:{value:!1,type:"boolean"},displayMode:{value:"default",allowedValues:["default","grid","palette","radial","hexagonal","spectrumGrid","materialGrid"],type:"string"},dropDownAppendTo:{value:null,type:"any"},dropDownHeight:{value:"auto",type:"string"},dropDownWidth:{value:"auto",type:"string"},editable:{value:!1,type:"boolean"},editAlphaChannel:{value:!1,type:"boolean"},enableCustomColors:{value:!1,type:"boolean"},hidePreviewContainer:{value:!1,type:"boolean"},hideRGBEditor:{value:!1,type:"boolean"},hideHEXEditor:{value:!1,type:"boolean"},hideAlphaEditor:{value:!1,type:"boolean"},messages:{value:{en:{redPrefix:"R:",greenPrefix:"G:",bluePrefix:"B:",hexPrefix:"#:",alphaPrefix:"Alpha:",ok:"OK",cancel:"CANCEL",customColor:"CUSTOM COLOR",standardColors:"Standard colors",themeColors:"Theme colors"}},type:"object",extend:!0},name:{value:"",type:"string"},palette:{value:"default",allowedValues:["default","gray","red","green","blue","custom"],type:"string"},placeholder:{value:"Please Select Color",type:"string"},tooltipDisplayMode:{value:"hex",allowedValues:["none","rgba","rgb","hex"],type:"string"},value:{value:null,type:"string?"},valueDisplayMode:{value:"default",allowedValues:["default","colorBox","colorCode","none"],type:"string"},valueFormat:{value:"default",allowedValues:["default","rgb","rgba","hex"],type:"string"},inverted:{value:!1,type:"boolean"},hideContentToFit:{value:["RGB","HEX","alpha","previewContainer"],type:"array"}}}static get listeners(){return{"input.change":"_inputChangeHandler","input.focus":"_focusEventHandler","input.blur":"_blurEventHandler","colorPanel.cancelButtonClick":"_cancelButtonHandler","colorPanel.okButtonClick":"_okButtonHandler","colorPanel.change":"_colorPanelChangeHandler",keydown:"_keyDownHandler"}}static get requires(){return{"Smart.ColorPanel":"smart.colorpanel.js","Smart.DropDownButton":"smart.dropdownbutton.js"}}static get styleUrls(){return["smart.colorpanel.css","smart.colorpicker.css"]}template(){return`<div id="container">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content">
                        <div id="buttonsContainer" class ="smart-buttons-container">
                            <div id="actionButton" class ="smart-input smart-action-button">
                                <div id="colorSampleContainer" class="color-picker-sample-container">
                                    <div id="colorSample" class="color-picker-sample"></div>
                                </div>
                                <input type="text" id="input" class ="color-picker-action-input" placeholder="[[placeholder]]" spellcheck="false" autocomplete="off"/>
                            </div>
                            <span id="dropDownButton" class ="smart-drop-down-button">
                                <span id="arrow"></span>
                            </span>
                        </div>
                        <div id="dropDownContainer" class ="smart-drop-down smart-drop-down-color-picker smart-drop-down-container smart-visibility-hidden">
                            <smart-scroll-viewer id="scrollViewer"
                                right-to-left="[[right-to-left]]"
                                horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"
                                vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]">
                                    <smart-color-panel id="colorPanel" wait
                                        animation="[[animation]]"
                                        apply-value-mode="[[applyValueMode]]"
                                        column-count="[[columnCount]]"
                                        disabled="[[disabled]]"
                                        display-mode="[[displayMode]]"
                                        edit-alpha-channel="[[editAlphaChannel]]"
                                        enable-custom-colors="[[enableCustomColors]]"
                                        grid-theme-colors="[[gridThemeColors]]"
                                        grid-shade-colors="[[gridShadeColors]]"
                                        grid-standard-colors="[[gridStandardColors]]"
                                        hide-content-to-fit="[[hideContentToFit]]"
                                        hide-preview-container="[[hidePreviewContainer]]"
                                        hide-r-g-b-editor="[[hideRGBEditor]]"
                                        hide-h-e-x-editor="[[hideHEXEditor]]"
                                        hide-alpha-editor="[[hideAlphaEditor]]"
                                        inverted="[[inverted]]"
                                        locale="[[locale]]"
                                        name="[[name]]"
                                        palette-colors="[[paletteColors]]"
                                        palette-custom-colors="[[paletteCustomColors]]"
                                        palette="[[palette]]"
                                        theme="[[theme]]"
                                        tooltip-display-mode="[[tooltipDisplayMode]]"
                                        value="{{value}}"
                                        value-format="[[valueFormat]]">
                                    </smart-color-panel>
                            </smart-scroll-viewer>
                            <div id="resizeBar" class="smart-drop-down-resize-bar">
                                <div></div>
                            </div>
                         </div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`}propertyChangedHandler(a,b,c){const d=this;switch(d._bindProperties(a),a){case"editable":case"disabled":case"readonly":d.$.input.readOnly=d.disabled||d.readonly||!d.editable;break;case"value":d.$.colorPanel._isValidColor(d.value)&&d._applyValue(d.value);break;case"displayMode":d._applyValue(d.value);break;default:super.propertyChangedHandler(a,b,c);}"displayMode"===a&&d.$.colorPanel._hideControlsByPriority()}open(){const a=this;a.$.colorPanel._initializeOnOpening&&(delete a.$.colorPanel._initializeOnOpening,a.$.colorPanel._generateGridStructures(),a.$.colorPanel._applyValue(a.value),a.$.colorPanel._hideControlsByPriority()),super.open()}blur(){this.$.input.blur()}focus(){this.$.input.focus()}_createElement(){const a=this;a.$.colorPanel._initializeOnOpening=!a.opened,a.$.colorPanel.wait=!1,a.$.input.readOnly=a.disabled||a.readonly||!a.editable,a._applyValue(a.$.colorPanel.value),a._setFocusable()}_colorPanelChangeHandler(a){const b=this;b._applyValue(a.detail.value),b.dropDownAppendTo&&0<b.dropDownAppendTo.length&&b.$.fireEvent("change",a.detail)}_cancelButtonHandler(){const a=this;-1<a.$.colorPanel.$.container.className.indexOf("custom-color-selection")||a.close()}_okButtonHandler(){const a=this;a._applyValue(a.$.colorPanel.value),a.close()}_setFocusable(){const a=this;if(!a.disabled&&!a.unfocusable){let b=0<a.tabIndex?a.tabIndex:0;return a.$.input.tabIndex=b,void("dropDownButton"===a.dropDownOpenMode?a.$.dropDownButton.setAttribute("tabindex",b):a.$.dropDownButton.removeAttribute("tabindex"))}a.$.input.tabIndex=-1,a.$.dropDownButton.removeAttribute("tabindex")}_bindProperties(a){const b=this;if(a)return(-1<["columnCount","gridThemeColors","gridShadeColors","gridStandardColors","paletteCustomColors","name","hideContentToFit","applyValueMode","inverted","paletteColors","displayMode","tooltipDisplayMode","editAlphaChannel","enableCustomColors","hidePreviewContainer","hideRGBEditor","hideHEXEditor","hideAlphaEditor","hideContentToFit","messages","theme","animation","theme","locale","palette","valueMember","disabled","valueFormat"].indexOf(a)||"value"===a)&&(b.$.colorPanel[a]=b[a]),void b.$.scrollViewer.refresh()}_inputChangeHandler(a){const b=this;a.preventDefault(),a.stopPropagation(),b.value=b.$.colorPanel.value=b.$.input.value}_applyValue(a){const b=this;b.value=b.$.colorPanel.value=b.$.colorSample.style.backgroundColor=b.$.input.value=a,b.value?b.$colorSampleContainer.removeClass("no-color"):b.$colorSampleContainer.addClass("no-color")}_keyDownHandler(a){const b=this,c=b.shadowRoot||b.isInShadowDOM?a.composedPath()[0]:a.target,d=(b.shadowRoot||b.getRootNode()).activeElement||document.activeElement;if(!(b.disabled||b.readonly||d!==b&&d!==b.$.dropDownButton&&d!==b.$.input))switch(a.key){case"Enter":case" ":c===b.$.input?"Enter"===a.key&&(a.preventDefault(),b.$.colorPanel.value=b.$.input.value):b.opened&&"Enter"===a.key?(a.preventDefault(),b.close()):!b.opened&&!b.readonly&&"none"!==b.dropDownOpenMode&&(a.preventDefault(),b.open());break;case"PageUp":case"PageDown":b.$.scrollViewer.scrollTop+=(-1<a.key.indexOf("Down")?1:-1)*b.$.dropDownContainer.offsetHeight;break;case"ArrowUp":case"ArrowDown":if(a.altKey)return void(b.disabled||b.readonly||"none"===b.dropDownOpenMode||("ArrowDown"===a.key?b.open():b.close()));a.preventDefault();break;case"Escape":a.preventDefault(),b.close();}}});