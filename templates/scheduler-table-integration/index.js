/// <reference path="../../source/typescript/smart.elements.d.ts" />
const today = new Date(), currentYear = today.getFullYear(), currentMonth = today.getMonth(), resoruceItems = [
    {
        id: 1,
        label: 'Andrew Smith',
        value: 'andrew',
        backgroundColor: '#689F38'
    },
    {
        id: 2,
        label: 'Anne Williams',
        value: 'anne',
        backgroundColor: '#BA68C8'
    },
    {
        id: 3,
        label: 'Janet Brown',
        value: 'janet',
        backgroundColor: '#009688'
    },
    {
        id: 4,
        label: 'Johnny Miler',
        value: 'johnny',
        backgroundColor: '#795548'
    },
    {
        id: 5,
        label: 'Laura Martinez',
        value: 'laura',
        backgroundColor: '#F9A825'
    },
    {
        id: 6,
        label: 'Maria Davis',
        value: 'maria',
        backgroundColor: '#4A148C'
    },
    {
        id: 7,
        label: 'Steven Taylor',
        value: 'steven',
        backgroundColor: '#F06292'
    }
], data = [
    {
        id: 0,
        label: 'Google AdWords Strategy',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 10, 9, 0),
        dateEnd: new Date(currentYear, currentMonth, 11, 10, 30),
        status: 'tentative',
        description: 'Define a strategy for using Google Adwords.'
    }, {
        id: 1,
        label: 'New Brochures',
        img: './../../images/phonebook/anne.png',
        personalId: 2,
        dateStart: new Date(currentYear, currentMonth, 11, 11, 30),
        dateEnd: new Date(currentYear, currentMonth, 12, 14, 15),
        status: 'tentative',
        description: 'Create new brochures to populate the product.'
    }, {
        id: 2,
        label: 'Brochure Design Review',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 12, 13, 15),
        dateEnd: new Date(currentYear, currentMonth, 14, 16, 15),
        status: 'tentative',
        description: 'Review the new brochure design.'
    }, {
        id: 3,
        label: 'Website Re-Design Plan',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
        dateEnd: new Date(currentYear, currentMonth, 20, 11, 15),
        status: 'tentative',
        description: 'Create a plan to re-design the website.'
    },
    {
        id: 4,
        label: 'Rollout of New Website and Marketing Brochures',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 2, 8, 15),
        dateEnd: new Date(currentYear, currentMonth, 2, 10, 45),
        status: 'tentative',
        description: 'Rollout the new brochuers and new website.'
    }, {
        id: 5,
        label: 'Update Sales Strategy Documents',
        img: './../../images/phonebook/maria.png',
        personalId: 6,
        dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
        dateEnd: new Date(currentYear, currentMonth, 2, 13, 45),
        status: 'tentative',
        description: 'Update and check the sales strategy documents.'
    }, {
        id: 6,
        label: 'Non-Compete Agreements',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 3, 8, 15),
        dateEnd: new Date(currentYear, currentMonth, 3, 9, 0),
        status: 'tentative',
        description: 'Settle non-complete agreements.'
    }, {
        id: 7,
        label: 'Approve Hiring of John Jeffers',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 3, 10, 0),
        dateEnd: new Date(currentYear, currentMonth, 3, 11, 15),
        status: 'tentative',
        description: 'Review the jon cadidate papers and approve or reject the hiring.'
    }, {
        id: 8,
        label: 'Update NDA Agreement',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 3, 11, 45),
        dateEnd: new Date(currentYear, currentMonth, 3, 13, 45),
        status: 'tentative',
        description: 'Update the NDA agreement.'
    }, {
        id: 9,
        label: 'Update Employee Files with New NDA',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 3, 14, 0),
        dateEnd: new Date(currentYear, currentMonth, 3, 16, 45),
        status: 'tentative',
        description: 'Update the employee files'
    }, {
        id: 10,
        label: 'Submit Questions Regarding New NDA',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 6, 8, 0),
        dateEnd: new Date(currentYear, currentMonth, 6, 9, 30),
        status: 'tentative',
        description: 'Submit questions.'
    }, {
        id: 11,
        label: 'Submit Signed NDA',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 6, 12, 45),
        dateEnd: new Date(currentYear, currentMonth, 6, 14, 0),
        status: 'tentative',
        description: 'Submit signed NDA.'
    }, {
        id: 12,
        label: 'Review Revenue Projections',
        img: './../../images/phonebook/anne.png',
        personalId: 2,
        dateStart: new Date(currentYear, currentMonth, 6, 17, 15),
        dateEnd: new Date(currentYear, currentMonth, 6, 18, 0),
        status: 'tentative',
        description: 'Analyze the revenue projections data and prepare for approval.'
    }, {
        id: 13,
        label: 'Comment on Revenue Projections',
        img: './../../images/phonebook/maria.png',
        personalId: 6,
        dateStart: new Date(currentYear, currentMonth, 5, 9, 15),
        dateEnd: new Date(currentYear, currentMonth, 5, 11, 15),
        status: 'tentative',
        description: 'Discuss the revenue projections with the team and leave comments.'
    }, {
        id: 14,
        label: 'Provide New Health Insurance Docs',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 5, 12, 45),
        dateEnd: new Date(currentYear, currentMonth, 5, 14, 15),
        status: 'tentative',
        description: 'Provide health insurance docs.'
    }, {
        id: 15,
        label: 'Review Changes to Health Insurance Coverage',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 5, 14, 15),
        dateEnd: new Date(currentYear, currentMonth, 5, 15, 30),
        status: 'tentative',
        description: 'Review changes to health insurance coverage.'
    }, {
        id: 16,
        label: 'Review Training Course for any Ommissions',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 8, 14, 0),
        dateEnd: new Date(currentYear, currentMonth, 9, 12, 0),
        status: 'tentative',
        description: 'Review training course.'
    }, {
        id: 17,
        label: 'Recall Rebate Form',
        img: './../../images/phonebook/maria.png',
        personalId: 6,
        dateStart: new Date(currentYear, currentMonth, 8, 12, 45),
        dateEnd: new Date(currentYear, currentMonth, 8, 13, 15),
        status: 'tentative',
        description: 'Recall rebate form.'
    }, {
        id: 18,
        label: 'Create Report on Customer Feedback',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 9, 15, 15),
        dateEnd: new Date(currentYear, currentMonth, 9, 17, 30),
        status: 'tentative',
        description: 'Create a report on the customer feedback.'
    }, {
        id: 19,
        label: 'Review Customer Feedback Report',
        img: './../../images/phonebook/anne.png',
        personalId: 2,
        dateStart: new Date(currentYear, currentMonth, 9, 16, 15),
        dateEnd: new Date(currentYear, currentMonth, 9, 18, 30),
        status: 'tentative',
        description: 'Review custom feedback.'
    }, {
        id: 20,
        label: 'Customer Feedback Report Analysis',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 10, 9, 30),
        dateEnd: new Date(currentYear, currentMonth, 10, 10, 30),
        status: 'tentative',
        description: 'Analize the feedback from the customers.'
    }, {
        id: 21,
        label: 'Prepare Shipping Cost Analysis Report',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 10, 12, 30),
        dateEnd: new Date(currentYear, currentMonth, 10, 13, 30),
        status: 'tentative',
        description: 'Prepare shipping cost analysis report.'
    }, {
        id: 22,
        label: 'Provide Feedback on Shippers',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 10, 14, 15),
        dateEnd: new Date(currentYear, currentMonth, 10, 16, 0),
        status: 'tentative',
        description: 'Review shippers and provide feedback for them.'
    }, {
        id: 23,
        label: 'Select Preferred Shipper',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 10, 17, 30),
        dateEnd: new Date(currentYear, currentMonth, 10, 20, 0),
        status: 'tentative',
        description: 'Select shipper.'
    }, {
        id: 24,
        label: 'Complete Shipper Selection Form',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 11, 8, 30),
        dateEnd: new Date(currentYear, currentMonth, 11, 10, 0),
        status: 'tentative',
        description: 'Complete shipper selection details.'
    }, {
        id: 25,
        label: 'Upgrade Server Hardware',
        img: './../../images/phonebook/maria.png',
        personalId: 6,
        dateStart: new Date(currentYear, currentMonth, 11, 12, 0),
        dateEnd: new Date(currentYear, currentMonth, 11, 14, 15),
        status: 'tentative',
        description: 'Replace old hardware with new modern.'
    }, {
        id: 26,
        label: 'Upgrade Personal Computers',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 11, 14, 45),
        dateEnd: new Date(currentYear, currentMonth, 11, 16, 30),
        status: 'tentative',
        description: 'Update personal computers.'
    }, {
        id: 27,
        label: 'Upgrade Apps to Windows RT or stay with WinForms',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 12, 10, 30),
        dateEnd: new Date(currentYear, currentMonth, 12, 13, 0),
        status: 'tentative',
        description: 'Upgrade apps to Windows RT.'
    }, {
        id: 28,
        label: 'Estimate Time Required to Touch-Enable Apps',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 12, 14, 45),
        dateEnd: new Date(currentYear, currentMonth, 12, 16, 30),
        status: 'tentative',
        description: 'Estimate time required for mobile devices.'
    }, {
        id: 29,
        label: 'Report on Tranistion to Touch-Based Apps',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 12, 18, 30),
        dateEnd: new Date(currentYear, currentMonth, 12, 19, 0),
        status: 'tentative',
        description: 'Report on transition to mobile apps.'
    }, {
        id: 30,
        label: 'Submit New Website Design',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 15, 8, 0),
        dateEnd: new Date(currentYear, currentMonth, 15, 10, 0),
        status: 'tentative',
        description: 'Submit the new web design changes.'
    }, {
        id: 31,
        label: 'Create Icons for Website',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 15, 11, 30),
        dateEnd: new Date(currentYear, currentMonth, 15, 13, 15),
        status: 'tentative',
        description: 'Create icons for website.'
    }, {
        id: 32,
        label: 'Create New Product Pages',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 16, 9, 45),
        dateEnd: new Date(currentYear, currentMonth, 16, 11, 45),
        status: 'tentative',
        description: 'Create new product pages.'
    }, {
        id: 33,
        label: 'Approve Website Launch',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 16, 12, 0),
        dateEnd: new Date(currentYear, currentMonth, 16, 15, 15),
        status: 'tentative',
        description: 'Review the new website before launching for approval or rejections.'
    }, {
        id: 34,
        label: 'Update Customer Shipping Profiles',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 17, 9, 30),
        dateEnd: new Date(currentYear, currentMonth, 17, 11, 0),
        status: 'tentative',
        description: 'Update customer shipping profiles.'
    }, {
        id: 35,
        label: 'Create New Shipping Return Labels',
        img: './../../images/phonebook/anne.png',
        personalId: 2,
        dateStart: new Date(currentYear, currentMonth, 17, 12, 45),
        dateEnd: new Date(currentYear, currentMonth, 17, 14, 0),
        status: 'tentative',
        description: 'Create the new shipping return labels.'
    }, {
        id: 36,
        label: 'Get Design for Shipping Return Labels',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 17, 15, 0),
        dateEnd: new Date(currentYear, currentMonth, 17, 16, 30),
        status: 'tentative',
        description: 'Get design for shipping return labels.'
    }, {
        id: 37,
        label: 'PSD needed for Shipping Return Labels',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 18, 8, 30),
        dateEnd: new Date(currentYear, currentMonth, 18, 9, 15),
        status: 'tentative',
        description: 'Provide PSD for shipping return labels.'
    }, {
        id: 38,
        label: 'Contact ISP and Discuss Payment Options',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 18, 11, 30),
        dateEnd: new Date(currentYear, currentMonth, 18, 16, 0),
        status: 'tentative',
        description: 'Discuss payment options.'
    }, {
        id: 39,
        label: 'Prepare Year-End Support Summary Report',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 18, 17, 0),
        dateEnd: new Date(currentYear, currentMonth, 18, 20, 0),
        status: 'tentative'
    }, {
        id: 40,
        label: 'Review New Training Material',
        img: './../../images/phonebook/anne.png',
        personalId: 2,
        dateStart: new Date(currentYear, currentMonth, 19, 8, 0),
        dateEnd: new Date(currentYear, currentMonth, 19, 9, 15),
        status: 'tentative',
        description: 'Review new training material.'
    }, {
        id: 41,
        label: 'Distribute Training Material to Support Staff',
        img: './../../images/phonebook/maria.png',
        personalId: 6,
        dateStart: new Date(currentYear, currentMonth, 19, 12, 45),
        dateEnd: new Date(currentYear, currentMonth, 19, 14, 0),
        status: 'tentative',
        description: 'Distribute traning material to support staff.'
    }, {
        id: 42,
        label: 'Training Material Distribution Schedule',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 19, 14, 15),
        dateEnd: new Date(currentYear, currentMonth, 19, 16, 15),
        status: 'tentative',
        description: 'Training material distribution sheduler.'
    }, {
        id: 43,
        label: 'Approval on Converting to New HDMI Specification',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 22, 9, 30),
        dateEnd: new Date(currentYear, currentMonth, 22, 10, 15),
        status: 'tentative',
        description: 'Approval on converting to new HDMI specifications.'
    }, {
        id: 44,
        label: 'Create New Spike for Automation Server',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 22, 10, 0),
        dateEnd: new Date(currentYear, currentMonth, 22, 12, 30),
        status: 'tentative',
        description: 'Create new spike for automation server.'
    }, {
        id: 45,
        label: 'Code Review - New Automation Server',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 22, 13, 0),
        dateEnd: new Date(currentYear, currentMonth, 22, 15, 0),
        status: 'tentative',
        description: 'Review code.'
    }, {
        id: 46,
        label: 'Confirm Availability for Sales Meeting',
        img: './../../images/phonebook/steven.png',
        personalId: 7,
        dateStart: new Date(currentYear, currentMonth, 23, 10, 15),
        dateEnd: new Date(currentYear, currentMonth, 23, 15, 15),
        status: 'tentative'
    }, {
        id: 47,
        label: 'Reschedule Sales Team Meeting',
        img: './../../images/phonebook/anne.png',
        personalId: 2,
        dateStart: new Date(currentYear, currentMonth, 23, 16, 15),
        dateEnd: new Date(currentYear, currentMonth, 23, 18, 0),
        status: 'tentative',
        description: 'Rescheduler the sales meeting because some of the personnel are unavailable.'
    }, {
        id: 48,
        label: 'Send 2 Remotes for Giveaways',
        img: './../../images/phonebook/maria.png',
        personalId: 6,
        dateStart: new Date(currentYear, currentMonth, 24, 9, 30),
        dateEnd: new Date(currentYear, currentMonth, 24, 11, 45),
        status: 'tentative',
        description: 'Giveaway remotes.'
    }, {
        id: 49,
        label: 'Discuss Product Giveaways with Management',
        img: './../../images/phonebook/janet.png',
        personalId: 3,
        dateStart: new Date(currentYear, currentMonth, 24, 12, 15),
        dateEnd: new Date(currentYear, currentMonth, 24, 16, 45),
        status: 'tentative',
        description: 'Giveaway the products that are left in stock.'
    }, {
        id: 50,
        label: 'Replace Desktops on the 3rd Floor',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 25, 9, 30),
        dateEnd: new Date(currentYear, currentMonth, 25, 10, 45),
        status: 'tentative',
        description: 'Replace the desktop computers on the 3rd floor and recycle the old.'
    }, {
        id: 51,
        label: 'Update Database with New Leads',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 25, 12, 0),
        dateEnd: new Date(currentYear, currentMonth, 25, 14, 15),
        status: 'tentative',
        description: 'Update database.'
    }, {
        id: 52,
        label: 'Mail New Leads for Follow Up',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 25, 14, 45),
        dateEnd: new Date(currentYear, currentMonth, 25, 15, 30),
        status: 'tentative',
        description: 'Mail new leads.'
    }, {
        id: 53,
        label: 'Send Territory Sales Breakdown',
        img: './../../images/phonebook/johnny.png',
        personalId: 4,
        dateStart: new Date(currentYear, currentMonth, 25, 18, 0),
        dateEnd: new Date(currentYear, currentMonth, 25, 20, 0),
        status: 'tentative',
        description: 'Send the territory sales breakdown to the sales departament.'
    }, {
        id: 54,
        label: 'Territory Sales Breakdown Report',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 26, 8, 45),
        dateEnd: new Date(currentYear, currentMonth, 26, 9, 45),
        status: 'tentative',
        description: 'Territory sales report.'
    }, {
        id: 55,
        label: 'Report on the State of Engineering Dept',
        img: './../../images/phonebook/andrew.png',
        personalId: 1,
        dateStart: new Date(currentYear, currentMonth, 26, 14, 45),
        dateEnd: new Date(currentYear, currentMonth, 26, 15, 30),
        status: 'tentative',
        description: 'Report on the state of engineering departament.'
    }, {
        id: 56,
        label: 'Staff Productivity Report',
        img: './../../images/phonebook/laura.png',
        personalId: 5,
        dateStart: new Date(currentYear, currentMonth, 26, 16, 15),
        dateEnd: new Date(currentYear, currentMonth, 26, 19, 30),
        status: 'tentative',
        description: 'Createa a report on staff productivity.'
    }
];
window.Smart('#scheduler', class {
    get properties() {
        return {
            //Properties
            view: 'timelineWeek',
            dataSource: data,
            views: [{
                    label: '',
                    value: 'timelineWeek',
                    type: 'timelineWeek'
                }],
            disableViewMenu: true,
            hourStart: 8,
            hourEnd: 20,
            resources: [
                {
                    label: 'Personal',
                    value: 'personalId',
                    dataSource: resoruceItems
                }
            ]
        };
    }
});
window.Smart('#listBox', class {
    get properties() {
        return {
            //Properties
            dataSource: resoruceItems,
            displayMember: 'label',
            valueMember: 'value',
            selectionMode: 'checkBox',
            selectedIndexes: [0, 1, 2, 3, 4, 5, 6],
            itemTemplate: handleItemTemplate
        };
    }
});
function handleItemTemplate(item, settings) {
    let img = item.querySelector('img'), label = item.querySelector('label');
    if (item.contains(img) && item.contains(label)) {
        img.src = './../../images/phonebook/' + settings.value.toLowerCase() + '.png';
        label.textContent = settings.label;
        return;
    }
    item.innerHTML = `<span class="item-wrapper">
                    <img class="avatar" src="./../../images/phonebook/${settings.value.toLowerCase()}.png" />
                    <label>${settings.label}</label>
                  </span>`;
}
function dateFormatFunction(data) {
    const scheduler = document.querySelector('smart-scheduler');
    data.value = new Intl.DateTimeFormat(scheduler.locale, {
        year: scheduler.yearFormat,
        month: scheduler.monthFormat,
        day: scheduler.dayFormat,
        hour: scheduler.hourFormat,
        minute: scheduler.minuteFormat
    }).format(data.value);
}
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: data,
                dataFields: [
                    'id: number',
                    'label: string',
                    'dateStart: date',
                    'dateEnd: date',
                    'description: string',
                    'status: string',
                    'personalId: number'
                ]
            }),
            editing: true,
            keyboardNavigation: true,
            sortMode: 'one',
            filtering: true,
            filterRow: true,
            freezeHeader: true,
            columns: [
                { label: 'ID', dataField: 'id', dataType: 'number', allowEdit: false, width: '100px' },
                { label: 'Event', dataField: 'label', dataType: 'string' },
                {
                    label: 'Start Date', dataField: 'dateStart', dataType: 'date', formatFunction: dateFormatFunction,
                    editor: {
                        template: '<smart-date-time-picker calendar-button drop-down-append-to="body"></smart-date-time-picker>',
                        onRender(row, column, editor, value) {
                            editor.value = value;
                        },
                        getValue(editor) {
                            return editor.value.toDate()
                        }
                    }
                },
                {
                    label: 'End Date', dataField: 'dateEnd', dataType: 'date', formatFunction: dateFormatFunction,
                    editor: {
                        template: '<smart-date-time-picker calendar-button drop-down-append-to="body"></smart-date-time-picker>',
                        onRender(row, column, editor, value) {
                            editor.value = value;
                        },
                        getValue(editor) {
                            return editor.value.toDate()
                        }
                    }
                },
                { label: 'Description', dataField: 'description', dataType: 'string' },
                {
                    label: 'Status', dataField: 'status', dataType: 'string', editor: {
                        template: '<smart-input drop-down-button-position="right" readonly></smart-input>',
                        onInit(row, column, editor, value) {
                            editor.dataSource = document.querySelector('smart-scheduler').statuses;
                        },
                        onRender(row, column, editor, value) {
                            editor.value = value;
                        },
                        getValue(editor) {
                            return editor.dataset.value || editor.value;
                        }
                    }
                },
                {
                    label: 'Personal', dataField: 'personalId', dataType: 'number',
                    formatFunction(settings) {
                        const value = settings.value, resourceItem = resoruceItems.find(i => i.id === value);
                        if (!resourceItem) {
                            settings.template = '';
                            return;
                        }
                        settings.template = `<span class="item-wrapper">
                                                <img class="avatar" src="./../../images/phonebook/${resourceItem.value.toLowerCase()}.png"/>
                                                <label>${resourceItem ? resourceItem.label : ''}</label>
                                            </span>`;
                    },
                    editor: {
                        template: '<smart-drop-down-list drop-down-append-to="body"></smart-drop-down-list>',
                        onInit(row, column, editor, value) {
                            editor.itemTemplate = handleItemTemplate;
                            editor.dataSource = resoruceItems;
                        },
                        onRender(row, column, editor, value) {
                            const resourceItem = resoruceItems.find(r => r.id === value);
                            if (resourceItem) {
                                editor.selectedValues = [resourceItem.value];
                            }
                        },
                        getValue(editor) {
                            const selectedIndexes = editor.selectedIndexes;
                            if (selectedIndexes.length) {
                                return resoruceItems[editor.selectedIndexes[0]].id;
                            }
                        }
                    }
                },
                {
                    label: 'Action', dataType: 'boolean', allowEdit: false, width: '100px', allowFilter: false,
                    formatFunction(settings) {
                        settings.template = '<smart-button class="delete-button"><i class="material-icons">&#xE5CD;</i></smart-button>';
                    },
                },
            ]
        };
    }
});
window.onload = function () {
    const scheduler = document.getElementById('scheduler'), listBox = document.getElementById('listBox'), table = document.getElementById('table');
    let filteredEvents = [];
    function refreshTableData(event) {
        const originalEvent = event.detail.originalEvent;
        if (originalEvent && originalEvent.type === 'keydown' && originalEvent.key === 'Escape') {
            return;
        }
        if (event.type === 'itemInsert') {
            //Set an id to the new event
            const maxId = scheduler.events.reduce((acc, e) => acc = Math.max(parseInt(e.id || 0), acc), 0);
            scheduler.updateEvent(event.detail.item, { id: maxId + 1 });
            return;
        }
        table.dataSource.dataSource = scheduler.events;
    }
    function refreshSchedulerData(event) {
        const detail = event.detail;
        let settings = {};
        settings[detail.dataField] = detail.dataField === 'personalId' ? parseInt(detail.value) : detail.value;
        scheduler.updateEvent(detail.row.id + '', settings);
    }
    function refreshData(event) {
        const resourceIds = listBox.selectedIndexes.map(i => resoruceItems[i].id);
        let events = scheduler.events, newEvents = [];
        filteredEvents.forEach(e => {
            events.push(e);
        });
        filteredEvents = [];
        for (let i = 0; i < events.length; i++) {
            const eventObj = events[i];
            if (resourceIds.indexOf(eventObj.personalId) > -1 || eventObj.personalId === undefined) {
                newEvents.push(eventObj);
            }
            else {
                filteredEvents.push(eventObj);
            }
        }
        scheduler.dataSource = newEvents;
        refreshTableData(event);
    }
    function removeEvent(event) {
        const detail = event.detail;
        if (detail.originalEvent.target.closest('.smart-button.delete-button')) {
            scheduler.removeEvent(detail.row.id + '');
        }
    }
    scheduler.addEventListener('itemUpdate', refreshTableData);
    scheduler.addEventListener('itemRemove', refreshTableData);
    scheduler.addEventListener('itemInsert', refreshTableData);
    scheduler.addEventListener('resizeEnd', refreshTableData);
    scheduler.addEventListener('dragEnd', refreshTableData);
    table.addEventListener('cellEndEdit', refreshSchedulerData);
    listBox.addEventListener('change', refreshData);
    table.addEventListener('cellClick', removeEvent);
};
