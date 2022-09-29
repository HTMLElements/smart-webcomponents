import './AjaxData.scss';
import { useEffect, useState } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function AjaxData() {

    const [tableData, setTableData] = useState(null);
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {

        if (tableData) {
            setIsDataLoading(false);
        }

    }, [tableData]);

    useEffect(() => {

        document.title = `Table With Data From Ajax - ${defaultTitle}`;

        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(json => {

                const data = json.results.map((dataPoint) => {

                    const result = {
                        name: dataPoint.name.first + ' ' + dataPoint.name.last,
                        country: dataPoint.location.country,
                        countryCode: dataPoint.nat,
                        mobile: dataPoint.cell,
                        landline: dataPoint.phone,
                        address: dataPoint.location.street.number + ' ' + dataPoint.location.street.name + ', ' + dataPoint.location.postcode + ' ' + dataPoint.location.city
                    }

                    const skills = [];

                    result.proficiency = Math.floor(Math.random() * Math.floor(99)) + 1;

                    if (dataPoint.dob.age % 2 === 0) {

                        if (dataPoint.dob.age % 4 === 0) {

                            skills.push('javascript');

                        }

                        skills.push('html-5');
                        skills.push('css3');

                    } else if (dataPoint.registered.age % 2) {

                        skills.push('python');

                    }

                    if (dataPoint.registered.age % 3 === 0) {

                        skills.push('react-native');

                    }
                    if (dataPoint.registered.age % 2 === 0) {

                        skills.push('angularjs');

                    } else {

                        skills.push('android-os');

                    }

                    result.skills = skills.join(',');

                    return result;
                });

                setTableData({
                    dataSource: new window.Smart.DataAdapter({
                        dataSource: data,
                        dataFields: [
                            'name: string',
                            'country: string',
                            'skills: string',
                            'proficiency: number',
                            'mobile: string',
                            'landline: string',
                            'address: string'
                        ]
                    }),
                    columnReorder: true,
                    sortMode: 'one',
                    columns: [
                        { label: 'Name', dataField: 'name', dataType: 'string' },
                        {
                            label: 'Country', dataField: 'country', dataType: 'string', formatFunction(settings) {
                                settings.template =
                                    `<div class="country-container">
                                <img class="flag" style="width: 40px; height: 27px;" src="assets/images/flags/${data[settings.row].countryCode}.svg" />
                                ${settings.value}
                            </div>`;
                            }
                        },
                        {
                            label: 'Skills', dataField: 'skills', dataType: 'string', allowSort: false, formatFunction(settings) {
                                const skills = settings.value.split(',');
                                let template = '<div class="skill-container">';
                                skills.forEach(skill => template += `<img src="https://img.icons8.com/color/48/000000/${skill}.png" title="${skill}" />`);
                                settings.template = template + '</div>';
                            }
                        },
                        {
                            label: 'Proficiency', dataField: 'proficiency', dataType: 'number', formatFunction(settings) {
                                const value = settings.value;
                                let className;
                                if (settings.value >= 60) {
                                    className = 'high';
                                }
                                else if (value >= 20) {
                                    className = 'mid';
                                }
                                else {
                                    className = 'low';
                                }
                                settings.template = `<smart-progress-bar class="${className}" show-progress-value value="${value}"></smart-progress-bar>`;
                            }
                        }
                    ]
                });

            });
    }, []);

    return (
        <div className="container ajax-data-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Table With Data From Ajax</h4></div>
            </div>

            <div className="card">
                <div className="card-body">
                    {
                        isDataLoading
                            ? <p id="loading">Remote data is being loaded...</p>
                            : <Table
                                id="table"
                                {...tableData}
                            ></Table>
                    }
                </div>
            </div>
        </div>
    )
}

export default withAnimation(AjaxData)