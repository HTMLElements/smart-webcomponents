const data = { Suppliers: null };
let table;
let suppliersId;

window.initSuppliers = function () {
    getSuppliers();
    attachAddBtnClick();
    initWindows();
    window.addEventListener('resize', () => {
        document.getElementById('suppliersTable').style.width = window.innerWidth - 310 + 'px';
    });
}
 
function getSuppliers() {
    getData(data, 'Suppliers', loadTable, 'get-suppliers');    
} 

function loadTable() {   
    suppliersId = data.Suppliers.length + 1; 
    table = new window.Smart.Table('#suppliersTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Suppliers,
            dataFields: [
                'SupplierID: string',
                'SupplierName: string',
                'ContactName: string',
                'ContactTitle: string',
                'Address: string',
                'Country: string',
                'City: string',
                'Region: string',
                'PostalCode: string',
                'Phone: string'
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
            { label: 'Supplier Name', dataField: 'SupplierName', dataType: 'string', width: 250 },
            { label: 'Contact Name', dataField: 'ContactName', dataType: 'string', width: 150 },
            { label: 'Address', dataField: 'Address', dataType: 'string', width: 150 },
            { label: 'Country', dataField: 'Country', dataType: 'string', width: 150 },
            { label: 'City', dataField: 'City', dataType: 'string', width: 150 },
            { label: 'Postal Code', dataField: 'PostalCode', dataType: 'string', width: 150 },
            { label: 'Phone', dataField: 'Phone', dataType: 'string', width: 150 },
            { 
                label: 'Orders', 
                allowFilter: false, 
                formatFunction: settings => { 
                    if (data.Suppliers[settings.row]) {
                        settings.template = '<a><span class="material-icons">add_shopping_cart</span>Products</a>';
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
        document.getElementById('suppliersTable').style.width = window.innerWidth - 310 + 'px';
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
			SupplierID: row.SupplierID,
			SupplierName: row.SupplierName,
			ContactName: row.ContactName,
			Phone: row.Phone,
			PostalCode: row.PostalCode,
			City: row.City,
			Country: row.Country,
			Address: row.Address		
		};
		
		updateData('Suppliers', newRow, 'update', 'SupplierID');	
	});
}

function attachRemoveBtnClick() {   
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeSupplier);
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

	document.getElementById('addWindow').addEventListener('open', function(event) {
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
                    dataField: 'supplierName',
                    controlType: 'input',
                    label: 'Supplier Name'
                },
				{
                    dataField: 'companyName',
                    controlType: 'input',
                    label: 'Company Name'
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
                },
                {
                    dataField: 'phone',
                    controlType: 'input',
                    label: 'Phone'
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

    document.querySelector('#addForm .save-btn').addEventListener('click', addSupplier);
    document.querySelector('#addForm .cancel-btn').addEventListener('click', function() {
		document.getElementById('addWindow').close();
    });
}

function addSupplier() {
    const supplierNameInput = document.querySelector('#addForm #supplierName');
    const companyNameInput = document.querySelector('#addForm #companyName');
    const contactNameInput = document.querySelector('#addForm #contactName');
    const addressInput = document.querySelector('#addForm #address');
    const countryInput = document.querySelector('#addForm #country');
    const cityInput = document.querySelector('#addForm #city');
    const postalCodeInput = document.querySelector('#addForm #postalCode');
    const phoneInput = document.querySelector('#addForm #phone');

    const newSupplier = {
        SupplierID: suppliersId++,
        SupplierName: supplierNameInput.value,
        CompanyName: companyNameInput.value,
        ContactName: contactNameInput.value,
        Address: addressInput.value,
        Country: countryInput.value,
        City: cityInput.value,
        PostalCode: postalCodeInput.value,
        Phone: phoneInput.value
    };
	
	updateData('Suppliers', newSupplier, 'add', 'SupplierID');

    const newSource = table.dataSource.dataSource;
    newSource.push(newSupplier);
    data.Suppliers = newSource;
    table.dataSource = newSource;

	supplierNameInput.value = '';
    companyNameInput.value = '';
    contactNameInput.value = '';
    addressInput.value = '';
    countryInput.value = '';
    cityInput.value = '';
    postalCodeInput.value = '';
    phoneInput.value = '';
    
    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeSupplier(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const supplierToRemove = source[rowId];
    const newSource = source.filter(c => c.SupplierID !== supplierToRemove.SupplierID);       
	
	updateData('Suppliers', supplierToRemove, 'remove', 'SupplierID');
	
    data.Suppliers = newSource;
    table.dataSource = newSource;
    attachRemoveBtnClick();
    table.loadState();
}
