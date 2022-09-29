import './FormBasicInputs.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Input, ListItem, ListBox, CheckBox, TimeInput, ColorInput, DateInput, SwitchButton, RadioButton, TextArea }
    from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function FormBasicInputs() {

    useEffect(() => { document.title = `Basic Inputs - ${defaultTitle}` }, []);

    return (
        <div className="container basic-inputs-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Basic Inputs</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Input</h4>
                        </div>
                        <div className="card-body">
                            <Input className="basic-input" placeholder="Input"></Input>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Textarea</h4>
                        </div>
                        <div className="card-body">
                            <TextArea className="basic-input" placeholder="Textarea"></TextArea>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Checkboxes</h4>
                        </div>
                        <div className="card-body">
                            <div className="options-container">
                                <CheckBox>Checkbox 1</CheckBox>
                                <CheckBox checked>Checkbox 2</CheckBox>
                                <CheckBox disabled>Disabled checkbox 3</CheckBox>
                                <CheckBox checked disabled>Disabled checkbox 4</CheckBox>
                            </div>

                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Radio Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="options-container">
                                <RadioButton>Radio button 1</RadioButton>
                                <RadioButton checked>Radio button 2</RadioButton>
                                <RadioButton disabled>Disabled radio button 3</RadioButton>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Switch Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="options-container">
                                <SwitchButton></SwitchButton>
                                <SwitchButton checked></SwitchButton>
                                <SwitchButton disabled></SwitchButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Color Input</h4>
                        </div>
                        <div className="card-body">
                            <ColorInput className="basic-input" value="#85AA4C"></ColorInput>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Date and Time Inputs</h4>
                        </div>
                        <div className="card-body">
                            <DateInput className="basic-input"></DateInput>
                            <TimeInput className="basic-input"></TimeInput>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Selects</h4>
                        </div>
                        <div className="card-body">
                            <Input className="basic-input" dataSource={["pellentesque gravida", "neque id rutrum", "sit amet", "tristique", "cras consectetur"]} drop-down-button-position="right" value="sit amet"></Input>
                            <ListBox className="basic-input">
                                <ListItem>pellentesque gravida</ListItem>
                                <ListItem>neque id rutrum</ListItem>
                                <ListItem selected>sit amet</ListItem>
                                <ListItem>tristique</ListItem>
                                <ListItem>cras consectetur</ListItem>
                            </ListBox>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Disabled</h4>
                        </div>
                        <div className="card-body">
                            <Input className="basic-input" disabled placeholder="Disabled input"></Input>
                            <Input className="basic-input" disabled drop-down-button-position="right" placeholder="Disabled select"></Input>
                            <CheckBox className="basic-input" disabled>Disabled checkbox</CheckBox>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Readonly</h4>
                        </div>
                        <div className="card-body">
                            <Input className="basic-input" readonly placeholder="Readonly input"></Input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(FormBasicInputs)