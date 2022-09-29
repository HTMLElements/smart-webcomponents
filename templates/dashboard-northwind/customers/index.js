const data = { Customers: null };
let table;
let customersId = 1;

window.initCustomers = function () {
    getCustomers();
    attachAddBtnClick();
    initWindows();
    window.addEventListener('resize', () => {
        document.getElementById('customersTable').style.width = window.innerWidth - 310 + 'px';
    });
}

function getCustomers() {
    getData(data, 'Customers', loadTable, 'get-customers');
}

function loadTable() {
    table = new window.Smart.Table('#customersTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Customers,
            dataFields: [
                'CustomerID: string',
                'CustomerName: string',
                'ContactName: string',
                'ContactTitle: string',
                'Address: string',
                'Country: string',
                'City: string',
                'PostalCode: string'

            ]
        }),
        filtering: true,
        filterRow: true,
        editing: true,
        editMode: 'row',
        paging: true,
        sortMode: 'one',
        stateSettings: ['filtered', 'sorted'],
        columns: [
            { label: 'Customer Name', dataField: 'CustomerName', dataType: 'string', width: 200 },
            { label: 'Contact Name', dataField: 'ContactName', dataType: 'string', width: 150 },
            { label: 'Address', dataField: 'Address', dataType: 'string', width: 150 },
            { label: 'Country', dataField: 'Country', dataType: 'string', width: 150 },
            { label: 'City', dataField: 'City', dataType: 'string', width: 150 },
            { label: 'Postal Code', dataField: 'PostalCode', dataType: 'string', width: 150 },
            {
                label: 'Orders',
                allowFilter: false,
                allowEdit: false,
                formatFunction: settings => {
                    if (data.Customers[settings.row]) {
                        settings.template = '<a><span class="material-icons">add_shopping_cart</span>Orders</a>';
                    }
                },
                width: 150
            },
            {
                label: '',
                allowFilter: false,
                allowEdit: false,
                formatFunction: settings => {
                    const editId = 'edit-btn-' + settings.row;
                    const id = 'remove-btn-' + settings.row;
                    settings.template = '<div class="buttons"><div id="' + editId + '" class="edit-btn"><span class="material-icons">edit</span></div><div id="' + id + '" class="remove-btn">x</div></div>'
                },
                width: 70
            }
        ]
    });

    table.whenRendered(() => {
        attachRemoveBtnClick();
        document.getElementById('customersTable').style.width = window.innerWidth - 310 + 'px';
    });
    table.addEventListener('filter', () => {
        attachRemoveBtnClick();
        table.saveState();
    });
    table.addEventListener('sort', () => {
        attachRemoveBtnClick();
        table.saveState();
    });
    table.addEventListener('page', () => {
        attachRemoveBtnClick();
        table.saveState();
    });

    table.addEventListener('rowEndEdit', (event) => {
        const row = event.detail.row;

        const newRow = {
            CustomerID: row.CustomerID,
            CustomerName: row.CustomerName,
            ContactName: row.ContactName,
            Address: row.Address,
            Country: row.Country,
            City: row.City,
            PostalCode: row.PostalCode
        };

        updateData('Customers', newRow, 'update', 'CustomerID');
    });
}

function attachRemoveBtnClick() {
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeCustomer);
    }

    const editBtns = document.querySelectorAll('smart-table .edit-btn');
    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', (event) => {
            const target = event.target.id ? event.target : event.target.parentNode;
            const rowId = target.id.split('-')[2];
            table.beginEdit(rowId);
        });
    }
}

function attachAddBtnClick() {
    const addBtn = document.getElementById('addBtn');

    document.getElementById('addWindow').addEventListener('open', function (event) {
        const input = document.getElementById('addWindow').querySelector('input');

        if (event.target.id === 'addWindow') {
            if (input) {
                setTimeout(() => {
                    input.focus();
                }, 250);
            }
        }
    });

    addBtn.addEventListener('click', () => {
        document.getElementById('addWindow').open();
    });
}

function initWindows() {
    new window.Smart.Form('#addForm', {
        controls: [{
            controlType: 'group',
            controls: [
                {
                    dataField: 'customerName',
                    controlType: 'input',
                    label: 'Customer Name'
                },
                {
                    dataField: 'contactName',
                    controlType: 'input',
                    label: 'Contact Name'
                },
                {
                    dataField: 'address',
                    controlType: 'input',
                    label: 'Address'
                },
                {
                    dataField: 'country',
                    controlType: 'input',
                    label: 'Country'
                },
                {
                    dataField: 'city',
                    controlType: 'input',
                    label: 'City'
                },
                {
                    dataField: 'postalCode',
                    controlType: 'input',
                    label: 'Postal Code'
                }
            ]
        },
        {
            controlType: 'group',
            columns: 2,
            controls: [
                {
                    controlType: 'button',
                    label: 'Save',
                    cssClass: 'primary save-btn'
                },
                {
                    controlType: 'button',
                    id: 'cancelBtn',
                    label: 'Cancel',
                    cssClass: 'cancel-btn'
                }
            ]
        }]

    });

    document.querySelector('#addForm .save-btn').addEventListener('click', addCustomer);
    document.querySelector('#addForm .cancel-btn').addEventListener('click', function () {
        document.getElementById('addWindow').close();
    });
}

function addCustomer() {
    const customerNameInput = document.querySelector('#addForm #customerName');
    const contactNameInput = document.querySelector('#addForm #contactName');
    const contactTitleInput = document.querySelector('#addForm #contactTitle');
    const addressInput = document.querySelector('#addForm #address');
    const countryInput = document.querySelector('#addForm #country');
    const cityInput = document.querySelector('#addForm #city');
    const postalCodeInput = document.querySelector('#addForm #postalCode');

    const newCustomer = {
        CustomerName: customerNameInput.value,
        ContactName: contactNameInput.value,
        Address: addressInput.value,
        Country: countryInput.value,
        City: cityInput.value,
        PostalCode: postalCodeInput.value
    };

    let id = updateData('Customers', newCustomer, 'add', 'CustomerID').lastId;

    newCustomer.CustomerID = id;

    const newSource = table.dataSource.dataSource;
    newSource.push(newCustomer);
    data.Customers = newSource;
    table.dataSource = newSource;


    customerNameInput.value = '';
    contactNameInput.value = '';
    addressInput.value = '';
    countryInput.value = '';
    cityInput.value = '';
    postalCodeInput.value = '';


    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeCustomer(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const customerToRemove = source[rowId];

    updateData('Customers', customerToRemove, 'remove', 'CustomerID');

    const newSource = source.filter(c => c.CustomerID !== customerToRemove.CustomerID);
    data.Customers = newSource;
    table.dataSource = newSource;
    attachRemoveBtnClick();
}