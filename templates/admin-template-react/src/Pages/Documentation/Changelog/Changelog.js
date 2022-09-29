import withAnimation from '../../../hoc/withAnimation';

import { useEffect } from 'react';

import { defaultTitle } from '../../../contexts/themeContext';

function Changelog() {

    useEffect(() => { document.title = `Changelog - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3"><h4>Changelog</h4></div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v3.2.0</span> June-28-2019</div>
                    <ul>
                        <li>Grid Cells Selection</li>
                        <li>Grid Rows Selection</li>
                        <li>Grid Grouping Menu</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v3.1.0</span> May-14-2019</div>
                    <ul>
                        <li>Tree Grid</li>
                        <li>Grid Context Menu</li>
                        <li>Grid Grouping</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v3.0.0</span> Apr-18-2019</div>
                    <ul>
                        <li>Chart</li>
                        <li>Grid Dialog Edit</li>
                        <li>Grid Batch Edit</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v2.4.0</span> Apr-05-2019</div>
                    <ul>
                        <li>Grid Cell Editing</li>
                        <li>Dark Theme for All Components</li>
                        <li>Auto Complete Input Web Component</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v2.3.0</span> Mar-08-2019</div>
                    <ul>
                        <li>Grid Web Component Filtering</li>
                        <li>Grid Columns Menu</li>
                        <li>Grid Custom Sort Icons</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v2.2.0</span> Feb-04-2019</div>
                    <ul>
                        <li>Table Web Component</li>
                        <li>Grid Columns Resize</li>
                        <li>Grid Columns and Rows Freeze</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v2.1.0</span> Jan-02-2019</div>
                    <ul>
                        <li>New Grid Paging options</li>
                        <li>Bug Fixes</li>
                        <li>CSS Variables for easier styling</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v2.0.0</span> Dec-03-2018</div>
                    <ul>
                        <li>Grid</li>
                        <li>Tree</li>
                        <li>Splitter</li>
                    </ul>
                    <div className="font-weight-bold"><span className="version smart-badge smart-badge-primary px-1 mr-1">v1.0.0</span> Mar-19-2018</div>
                    <ul>
                        <li>
                            The first version smart-badge smart-badge-primary px-1 mr-1 of the package includes:
                            <ul>
                                <li>Button</li>
                                <li>Toggle Button</li>
                                <li>Repeat Button</li>
                                <li>Power Button</li>
                                <li>Tank</li>
                                <li>Slider</li>
                                <li>Gauge</li>
                                <li>DropDownList</li>
                                <li>ComboBox</li>
                                <li>ListBox</li>
                                <li>Tooltip</li>
                                <li>Window</li>
                                <li>Menu</li>
                                <li>Tabs</li>
                                <li>ListMenu</li>
                                <li>ScrollBar</li>
                                <li>MultiSplitButton</li>
                                <li>TextBox</li>
                                <li>PasswordTextBox</li>
                                <li>MaskedTextBox</li>
                                <li>NumericTextBox</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Changelog)