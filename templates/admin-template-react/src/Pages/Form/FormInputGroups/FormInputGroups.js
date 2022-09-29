import './FormInputGroups.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Input, MultiSplitButton, MultiSplitButtonListItem, RadioButton, CheckBox, Button }
    from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function FormInputGroups() {

    useEffect(() => { document.title = `Input Groups - ${defaultTitle}` }, []);

    return (
        <div className="container input-groups-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Input Groups</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Default</h4>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <Input className="form-control" placeholder="Username"></Input>
                            </div>

                            <div className="input-group">
                                <Input className="form-control" dataSource={['oliver', 'george', 'harry', 'jack', 'jacob', 'noah', 'charlie']} placeholder="Recipient's username"></Input>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                </div>
                                <Input className="form-control" dataSource={['oliver', 'george', 'harry', 'jack', 'jacob', 'noah', 'charlie']} placeholder="Recipient's username"></Input>
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <Input className="form-control"></Input>
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                    <span className="input-group-text">0.00</span>
                                </div>
                                <Input className="form-control"></Input>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Checkbox and radio buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="input-group-container">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <CheckBox></CheckBox>
                                        </span>
                                    </div>
                                    <Input className="form-control"></Input>
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <RadioButton></RadioButton>
                                        </span>
                                    </div>
                                    <Input className="form-control"></Input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Buttons with dropdowns</h4>
                        </div>
                        <div className="card-body">
                            <div className="input-group-container">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <MultiSplitButton buttonsDataSource={['Action']} dropDownAppendTo="body" dropDownOpenMode="auto" drop-down-width="auto">
                                            <MultiSplitButtonListItem>First action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Second action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Third action</MultiSplitButtonListItem>
                                        </MultiSplitButton>
                                    </div>
                                    <Input className="form-control" placeholder="Search for..."></Input>
                                </div>

                                <div className="input-group">
                                    <Input className="form-control" placeholder="Search for..."></Input>
                                    <div className="input-group-append">
                                        <MultiSplitButton buttonsDataSource={['Action']} dropDownAppendTo="body" dropDownOpenMode="auto" drop-down-width="auto">
                                            <MultiSplitButtonListItem>First action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Second action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Third action</MultiSplitButtonListItem>
                                        </MultiSplitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Select addons</h4>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <Input className="form-control" dataSource={["A", "B", "C", "D", "E"]} dropDownButtonPosition="right" placeholder="Select..."></Input>
                                <div className="input-group-append">
                                    <Button className="primary">GO!</Button>
                                </div>
                            </div>

                            <div className="input-group">
                                <Input className="form-control" placeholder="Search for..."></Input>
                                <Input className="form-control" dataSource={["A", "B", "C", "D", "E"]} dropDownButtonPosition="right" placeholder="Select..."></Input>
                                <div className="input-group-append">
                                    <Button className="primary">GO!</Button>
                                </div>
                            </div>

                            <div className="input-group">
                                <Input className="form-control" dataSource={["A", "B", "C", "D", "E"]} dropDownButtonPosition="right" placeholder="Select..."></Input>
                                <Input className="form-control" placeholder="Search for..."></Input>
                                <div className="input-group-append">
                                    <Button className="primary">GO!</Button>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <Button className="primary">GO!</Button>
                                </div>
                                <Input className="form-control" placeholder="Search for..."></Input>
                                <Input className="form-control" dataSource={["A", "B", "C", "D", "E"]} dropDownButtonPosition="right" placeholder="Select..."></Input>
                            </div>
                        </div>
                    </div >

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Button addons</h4>
                        </div>
                        <div className="card-body">
                            <div className="input-group-container">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <Button className="primary">GO!</Button>
                                    </div>
                                    <Input className="form-control" placeholder="Search for..."></Input>
                                </div>

                                <div className="input-group">
                                    <Input className="form-control" placeholder="Search for..."></Input>
                                    <div className="input-group-append">
                                        <Button className="primary">GO!</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <Button className="primary">Like!</Button>
                                </div>
                                <Input className="form-control" placeholder="Product name"></Input>
                                <div className="input-group-append">
                                    <Button className="primary">Dislike!</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Segmented buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="input-group-container">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <MultiSplitButton buttonsDataSource={['Action']} dropDownAppendTo="body"
                                            drop-down-width="auto">
                                            <MultiSplitButtonListItem>First action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Second action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Third action</MultiSplitButtonListItem>
                                        </MultiSplitButton>
                                    </div>
                                    <Input className="form-control" placeholder="Search for..."></Input>
                                </div>

                                <div className="input-group">
                                    <Input className="form-control" placeholder="Search for..."></Input>
                                    <div className="input-group-append">
                                        <MultiSplitButton buttonsDataSource={['Action']} dropDownAppendTo="body"
                                            drop-down-width="auto">
                                            <MultiSplitButtonListItem>First action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Second action</MultiSplitButtonListItem>
                                            <MultiSplitButtonListItem>Third action</MultiSplitButtonListItem>
                                        </MultiSplitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default withAnimation(FormInputGroups)