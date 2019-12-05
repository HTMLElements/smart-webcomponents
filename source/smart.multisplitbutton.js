
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-multi-split-button",class extends Smart.DropDownList{static get properties(){return{buttonsDataSource:{value:[],type:"array"},dropDownOpenMode:{allowedValues:["none","dropDownButton","auto"],value:"dropDownButton",type:"string"}}}template(){return`<div id="container">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content">
                        <div id="actionButton" class ="smart-input smart-action-button">
                         <template>
                                 <div class="smart-multi-split-button-buttons" *items={{buttonsDataSource}}><span class="smart-action-split-button" inner-H-T-M-L={{item}}></span></div>
                          </template>
                        </div>
                        <span id="dropDownButton" class="smart-drop-down-button">
                            <span class ="smart-drop-down-button-icon" id="arrow"></span>
                        </span>
                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden">
                            <smart-list-box id="listBox" unfocusable
                                    animation="[[animation]]"
                                    data-source="[[dataSource]]"
                                    disabled="[[disabled]]"
                                    display-loading-indicator="[[displayLoadingIndicator]]"
                                    display-member="[[displayMember]]"
                                    filterable="[[filterable]]"
                                    filter-mode="[[filterMode]]"
                                    filter-input-placeholder="[[filterInputPlaceholder]]"
                                    grouped="[[grouped]]"
                                    group-member="[[groupMember]]"
                                    item-height="[[itemHeight]]"
                                    item-template="[[itemTemplate]]"
                                    incremental-search-delay="[[incrementalSearchDelay]]"
                                    incremental-search-mode="[[incrementalSearchMode]]"
                                    loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"
                                    loading-indicator-position="[[loadingIndicatorPosition]]"
                                    name="[[name]]"
                                    placeholder="[[dropDownPlaceholder]]"
                                    readonly="[[readonly]]"
                                    right-to-left="[[rightToLeft]]"
                                    selected-indexes="{{selectedIndexes}}"
                                    selection-mode="[[selectionMode]]"
                                    selected-values="{{selectedValues}}"
                                    sorted="[[sorted]]"
                                    theme="[[theme]]"
                                    value-member="[[valueMember]]"
                                    horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"
                                    vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]"
                                    virtualized="[[virtualized]]">
                                <content></content>
                            </smart-list-box>
                            <div id="resizeBar" class="smart-drop-down-resize-bar">
                                <div></div>
                            </div>
                         </div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`}static get listeners(){return{"actionButton.down":"_buttonsDownHandler","actionButton.mouseenter":"_buttonsMouseEventsHandler","actionButton.move":"_buttonsMouseEventsHandler","actionButton.mouseleave":"_buttonsMouseEventsHandler","dropDownButton.mouseenter":"_dropDownButtonMouseEventsHandler","dropDownButton.mouseleave":"_dropDownButtonMouseEventsHandler","actionButton.focus":"_focusEventHandler","actionButton.blur":"_blurEventHandler","dropDownButton.focus":"_focusEventHandler","dropDownButton.blur":"_blurEventHandler"}}static get styleUrls(){return["smart.dropdown.css","smart.multisplitbutton.css"]}_blurEventHandler(){const a=this;a.removeAttribute("focus"),a._preventDropDownClose||a.close()}_focusEventHandler(){this.setAttribute("focus","")}_documentUpHandler(a){const b=this;super._documentUpHandler(a);const c=(b.shadowRoot||b).querySelectorAll(".smart-action-split-button");for(let b=0;b<c.length;b++){const a=c[b];a.removeAttribute("active")}b.removeAttribute("active")}_dropDownButtonMouseEventsHandler(a){const b=this;"mouseleave"===a.type?(b.$.dropDownButton.removeAttribute("hover"),b.removeAttribute("hover")):(b.$.dropDownButton.setAttribute("hover",""),b.setAttribute("hover",""))}_buttonsDownHandler(a){const b=this,c=(b.shadowRoot||b).querySelectorAll(".smart-action-split-button");for(let d=0;d<c.length;d++){const e=c[d],f=e.getBoundingClientRect();"mouseleave"===a.type?(c[d].removeAttribute("active"),b.removeAttribute("active","")):(b.setAttribute("active",""),c[d].removeAttribute("active"),f.left<=a.pageX&&a.pageX<=f.width+f.left&&(c[d].setAttribute("active",""),b.$.fireEvent("buttonClick",{index:d,label:b.buttonsDataSource[d]})))}}_buttonsMouseEventsHandler(a){const b=this,c=(b.shadowRoot||b).querySelectorAll(".smart-action-split-button");for(let d=0;d<c.length;d++){const e=c[d],f=e.getBoundingClientRect();"mouseleave"===a.type?(c[d].removeAttribute("hover"),b.removeAttribute("hover","")):(b.setAttribute("hover",""),c[d].removeAttribute("hover"),f.left<=a.pageX&&a.pageX<=f.width+f.left&&c[d].setAttribute("hover",""))}}_applySelection(){const a=this;if(0===a.buttonsDataSource.length){if("placeholder"===a.selectionDisplayMode||0===a.selectedIndexes.length)return void((a.shadowRoot||a).querySelector(".smart-template-container").innerHTML=a.placeholder);if(!a.$.listBox._items||0===a.$.listBox._items.length)return;(a.shadowRoot||a).querySelector(".smart-template-container").innerHTML="<div class=\"smart-multi-split-button-buttons\"><span class=\"smart-action-split-button\"></span></div>",a.$.actionButton.querySelector(".smart-action-split-button").appendChild(a._createToken())}}propertyChangedHandler(a,b,c){const d=this;"dataSource"===a||"displayMember"===a?(d._setDropDownSize(),d._positionDetection.checkBrowserBounds("vertically"),d._positionDetection.positionDropDown(),d._positionDetection.checkBrowserBounds("horizontally")):super.propertyChangedHandler(a,b,c)}});