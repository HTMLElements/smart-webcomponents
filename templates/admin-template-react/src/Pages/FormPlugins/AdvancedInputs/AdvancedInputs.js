import './AdvancedInput.scss';

import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { 
    ComboBox, ComboBoxListItemsGroup, ComboBoxListItem, DropDownList, DropDownListItem, DropDownItemsGroup, MaskedTextBox,
    DateTimePicker, DateRangeInput
 } 
from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function AdvancedInputs() {

  useEffect(() => { document.title = `Advanced Inputs - ${defaultTitle}` }, []);

    return (
        <div className="container advanced-inputs-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Advanced Inputs</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">DropDownList</h4>
                        </div>
                        <div className="card-body">
                            <p>Smart.DropDownList and Smart.ComboBox - alternatives of HTML select boxes.</p>
                            <DropDownList dropDownAppendTo="body" filterable placeholder="Please select...">
                                <DropDownItemsGroup label="Cats">
                                    <DropDownListItem>Lion</DropDownListItem>
                                    <DropDownListItem>Tiger</DropDownListItem>
                                    <DropDownListItem disabled>Jaguar</DropDownListItem>
                                    <DropDownListItem>Domestic cat</DropDownListItem>
                                </DropDownItemsGroup>
                                <DropDownItemsGroup label="Dogs">
                                    <DropDownListItem>Wolf</DropDownListItem>
                                    <DropDownListItem>Domestic dog</DropDownListItem>
                                    <DropDownListItem disabled>Coyote</DropDownListItem>
                                    <DropDownListItem>Jackal</DropDownListItem>
                                    <DropDownListItem>Fox</DropDownListItem>
                                </DropDownItemsGroup>
                            </DropDownList>

                            <ComboBox dropDownAppendTo="body" placeholder="Please select...">
                                <ComboBoxListItemsGroup label="Cats">
                                    <ComboBoxListItem>Lion</ComboBoxListItem>
                                    <ComboBoxListItem>Tiger</ComboBoxListItem>
                                    <ComboBoxListItem disabled>Jaguar</ComboBoxListItem>
                                    <ComboBoxListItem>Domestic cat</ComboBoxListItem>
                                </ComboBoxListItemsGroup>
                                <ComboBoxListItemsGroup label="Dogs">
                                    <ComboBoxListItem>Wolf</ComboBoxListItem>
                                    <ComboBoxListItem>Domestic dog</ComboBoxListItem>
                                    <ComboBoxListItem disabled>Coyote</ComboBoxListItem>
                                    <ComboBoxListItem>Jackal</ComboBoxListItem>
                                    <ComboBoxListItem>Fox</ComboBoxListItem>
                                </ComboBoxListItemsGroup>
                            </ComboBox>

                            <ComboBox dropDownAppendTo="body" placeholder="Please select..." selectionDisplayMode="tokens"
                                selectionMode="zeroOrMany">
                                <ComboBoxListItemsGroup label="Cats">
                                    <ComboBoxListItem>Lion</ComboBoxListItem>
                                    <ComboBoxListItem>Tiger</ComboBoxListItem>
                                    <ComboBoxListItem disabled>Jaguar</ComboBoxListItem>
                                    <ComboBoxListItem>Domestic cat</ComboBoxListItem>
                                </ComboBoxListItemsGroup>
                                <ComboBoxListItemsGroup label="Dogs">
                                    <ComboBoxListItem>Wolf</ComboBoxListItem>
                                    <ComboBoxListItem>Domestic dog</ComboBoxListItem>
                                    <ComboBoxListItem disabled>Coyote</ComboBoxListItem>
                                    <ComboBoxListItem>Jackal</ComboBoxListItem>
                                    <ComboBoxListItem>Fox</ComboBoxListItem>
                                </ComboBoxListItemsGroup>
                            </ComboBox>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">DateRangeInput</h4>
                        </div>
                        <div className="card-body">
                            <p>Smart.DateRangeInput is an input that allows to select a Date/Date range from a Calendar drop down.</p>
                            <label>Date range</label>
                            <DateRangeInput placeholder="Please select..." drop-down-button-position="right" drop-down-width="300"></DateRangeInput>
                            <label>DateTime range</label>
                            <DateRangeInput placeholder="Please select..." drop-down-button-position="right" drop-down-width="300" timepicker></DateRangeInput>
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">DateTimePicker</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Default</label>
                                    <DateTimePicker calendar-button dropDownAppendTo="body"></DateTimePicker>
                                    <label>Time only</label>
                                    <DateTimePicker calendar-button dropDownAppendTo="body" drop-down-display-mode="timePicker" format-string="t"></DateTimePicker>
                                </div>
                                <div className="col-lg-6">
                                    <label>Date only</label>
                                    <DateTimePicker calendar-button dropDownAppendTo="body" drop-down-display-mode="calendar" format-string="d"></DateTimePicker>
                                    <label>With spin buttons</label>
                                    <DateTimePicker calendar-button dropDownAppendTo="body" spin-buttons></DateTimePicker>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">MaskedTextBox</h4>
                        </div>
                        <div className="card-body">
                            <p>Masked Text fields use a mask to distinguish between proper and improper user input.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Date</label>
                                    <MaskedTextBox mask="##/##/####"></MaskedTextBox>
                                    <label>Time</label>
                                    <MaskedTextBox mask="##:##:##"></MaskedTextBox>
                                    <label>Date and Time</label>
                                    <MaskedTextBox mask="##/##/#### ##:##:##"></MaskedTextBox>
                                    <label>ZIP Code</label>
                                    <MaskedTextBox mask="#####-###"></MaskedTextBox>
                                    <label>Money</label>
                                    <MaskedTextBox mask="###.###,##"></MaskedTextBox>
                                </div>
                                <div className="col-lg-6">
                                    <label>Phone Number</label>
                                    <MaskedTextBox mask="####-####"></MaskedTextBox>
                                    <label>Phone Number with Area Code</label>
                                    <MaskedTextBox mask="(##) ####-####"></MaskedTextBox>
                                    <label>US Phone Number</label>
                                    <MaskedTextBox mask="+1 (###) ###-####"></MaskedTextBox>
                                    <label>IPv4</label>
                                    <MaskedTextBox mask="###.###.###.###"></MaskedTextBox>
                                    <label>IPv6</label>
                                    <MaskedTextBox mask="zzzz:zzzz:zzzz:zzzz:zzzz:zzzz:zzzz:zzzz"></MaskedTextBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(AdvancedInputs)