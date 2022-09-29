import './Introduction.scss'

import withAnimation from '../../../hoc/withAnimation';

import { useEffect } from 'react';

import { defaultTitle } from '../../../contexts/themeContext';
import { Link } from 'react-router-dom';

function Introduction() {

    useEffect(() => { document.title = `Introduction - ${defaultTitle}` }, []);

    return (
        <div className="container introduction-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Introduction</h4></div>
            </div>

            <div className="card mb-5">
                <div className="card-body">
                    <h4>Introduction</h4>
                    <p>Smart is a comprehensive and innovative UI library built on top of JavaScript, HTML and CSS. It
                        empowers developers to deliver professional, cross-browser compatible web applications, while
                        significantly minimizing their development time. Smart HTML Elements contains more than 60 UI
                        components and is one of the fastest growing JavaScript UI frameworks on the Web.</p>
                    <Link to='/getting-started' className="btn btn-primary btn-sm">Getting Started</Link>
                </div>
            </div>

            <div className="card mb-5">
                <div className="card-body">
                    <h4>Download package contents</h4>
                    <p>Inside our download package, you will find the following files and directories:</p>
                    <div>
                        <div className="file-structure-entry"><span className="material-icons">cloud</span>smart-elements</div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">folder_open</span>export</div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>data.js</div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>data.xlsx
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>html2canvas.min.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>jszip.min.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>pdfmake.min.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┗ <span className="material-icons">text_snippet</span>vfs_fonts.js
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">folder_open</span>framework</div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.element-dev.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart.element.js
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">folder_open</span>source</div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">folder_open</span>modules</div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.accordion.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.breadcrumb.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.button.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.calendar.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.card.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.cardview.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.carousel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.checkbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chip.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorinput.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpicker.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.combobox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.common.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.datetimepicker.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dockinglayout.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownlist.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.element.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.fileupload.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.ganttchart.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gauge.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gridpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.input.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.kanban.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.layout.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listmenu.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.maskedtextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.menu.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multilinetextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multisplitbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numerictextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.pager.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.passwordtextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.path.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.progressbar.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.querybuilder.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.radiobutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.rating.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.scrollbar.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.slider.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.sortable.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.splitter.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.switchbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.table.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tabs.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tank.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.textbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.timepicker.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.toast.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tooltip.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tree.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.validator.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart.window.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">folder_open</span>styles</div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span className="material-icons">folder_open</span>default
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.accordion.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.array.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.badge.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.breadcrumb.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.button.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.calendar.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.card.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.cardview.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.carousel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.checkbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chip.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpicker.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.combobox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.common.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.currencyformatpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dateformatpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.datetimepicker.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dockinglayout.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdown.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownbutton.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownlist.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.editors.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.fileupload.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filterbuilder.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filterpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.ganttchart.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gauge.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gridpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.inputgroup.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.kanban.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.layout.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.layouts.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.led.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listmenu.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.loader.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.maskedtextbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.menu.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.misc.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multilinetextbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multisplitbutton.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numberformatpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numerictextbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.pager.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.passwordtextbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.path.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.powerbutton.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.progressbar.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.querybuilder.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.radiobutton.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.rating.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.scrollbar.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.scrollviewer.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.slider.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.sortable.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.splitter.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.switchbutton.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.table.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tabs.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tank.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.textbox.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.timepicker.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.toast.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.toggle.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tooltip.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tree.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.validationpanel.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.validator.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.variables.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart.window.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span className="material-icons">folder_open</span>font</div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart-icons.eot
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart-icons.svg
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart-icons.ttf
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart-icons.woff
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart-icons.woff2
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span className="material-icons">folder_open</span>images</div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span className="material-icons">text_snippet</span>error.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>grid-icons.svg
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>icons-sprite.svg
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>icons-stack.svg
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span className="material-icons">text_snippet</span>info.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>magnifier.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span className="material-icons">text_snippet</span>mail.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>radial.svg
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>success.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┣ <span className="material-icons">text_snippet</span>time.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┃ ┗ <span
                            className="material-icons">text_snippet</span>warning.png
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.bootstrap.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart.default.css
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.accordion.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.ajax.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.array.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.bootstrap.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.breadcrumb.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.button.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.calendar.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.card.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.cardview.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.carousel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.annotations.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.api.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.core.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.rangeselector.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.waterfall.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.checkbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.chip.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorinput.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpicker.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.combobox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.complex.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.customizationdialog.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.data.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.date.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dateformatpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.datetimepicker.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dockinglayout.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.draw.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownlist.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.element-polyfills.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.element.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.elements.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.export.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.fileupload.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filter.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filterbuilder.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filterpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.format.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.ganttchart.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gauge.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.cell.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.chart.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.column.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.core.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.edit.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.export.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.filter.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.group.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.grid.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.menu.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.pager.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.resize.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.row.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.select.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.sort.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.tree.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gridpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.input.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.kanban.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.layout.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.led.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listmenu.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.maskedtextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.math.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.menu.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multilinetextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multisplitbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numberformatpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numeric.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numerictextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.pager.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.passwordtextbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.path.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.powerbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.progressbar.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.radiobutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.rating.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.scrollbar.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.slider.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.sort.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.sortable.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.splitter.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.switchbutton.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.table.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.tabs.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.tank.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.textbox.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tickintervalhandler.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.timepicker.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.toast.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tooltip.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span className="material-icons">text_snippet</span>smart.tree.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.validationpanel.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.validator.js
                        </div>
                        <div className="file-structure-entry"> ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart.window.js
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">folder_open</span>typescript</div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.accordion.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.array.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.breadcrumb.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.button.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.calendar.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.card.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.cardview.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.carousel.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chart.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.checkbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.chip.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.circularprogressbar.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorinput.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpanel.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.colorpicker.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.combobox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.customizationdialog.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dataadapter.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.datetimepicker.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dockinglayout.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownbutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.dropdownlist.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.element.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.elements.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.fileupload.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filterbuilder.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.filterpanel.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.ganttchart.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.gauge.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grid.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.grouppanel.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.input.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.layout.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.led.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.listmenu.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.maskedtextbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.menu.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multicolumnfilterpanel.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multilinetextbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.multisplitbutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.numerictextbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.pager.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.passwordtextbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.path.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.powerbutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.progressbar.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.querybuilder.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.radiobutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.rating.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.repeatbutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.scrollbar.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.slider.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.sortable.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.sortpanel.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.splitter.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.switchbutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.table.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tabs.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tabswindow.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tank.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.textbox.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.timepicker.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.toast.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.togglebutton.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tooltip.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┣ <span
                            className="material-icons">text_snippet</span>smart.tree.d.ts
                        </div>
                        <div className="file-structure-entry"> ┃ ┗ <span
                            className="material-icons">text_snippet</span>smart.window.d.ts
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>chart.png</div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>docking.png
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>EULA.pdf</div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>grid-sheet.png
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>grid.png</div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>package.json
                        </div>
                        <div className="file-structure-entry"> ┣ <span className="material-icons">text_snippet</span>README.md</div>
                        <div className="file-structure-entry"> ┣ <span
                            className="material-icons">text_snippet</span>smart-calendar.png
                        </div>
                        <div className="file-structure-entry"> ┗ <span className="material-icons">text_snippet</span>smart-tabs.png
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withAnimation(Introduction)