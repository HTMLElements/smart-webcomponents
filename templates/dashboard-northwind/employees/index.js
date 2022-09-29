const data = { Employees: null };
let table;
let employeesId;

window.initEmployees = function () {
    getEmployees();
    attachAddBtnClick();
    initWindows();
    window.addEventListener('resize', () => {
        document.getElementById('employeesTable').style.width = window.innerWidth - 310 + 'px';
    });
}
 
function getEmployees() {
    getData(data, 'Employees', loadTable, 'get-employees');    
} 

function loadTable() {    
    employeesId = data.Employees.length + 1;
    table = new window.Smart.Table('#employeesTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Employees,
            dataFields: [
                'EmployeeID: string',
                'FirstName: string',
                'LastName: string',
                'Notes: string',
                'BirthDate: date'
            ]
        }),
        filtering: true,
        filterRow: true,
		editing: true,
		editMode: 'row',
        sortMode: 'one',
        stateSettings: ['filtered', 'sorted'],
        columns: [
            { label: 'First Name', dataField: 'FirstName', dataType: 'string', width: 100 },
            { label: 'Last Name', dataField: 'LastName', dataType: 'string', width: 100 },
            { label: 'Birth Date', dataField: 'BirthDate', dataType: 'date', width: 100 },
            { label: 'Notes', dataField: 'Notes', dataType: 'string', width: 100 },
            { 
                label: 'Orders',
                allowFilter: false, 
                formatFunction: settings => { 
                    settings.template = '<a><span class="material-icons">add_shopping_cart</span>Orders</a>';
                },
                width: 100
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
        document.getElementById('employeesTable').style.width = window.innerWidth - 310 + 'px';
    });
    table.addEventListener('filter', () => {
        attachRemoveBtnClick();
        table.saveState();
    });
    table.addEventListener('sort', () => {
        attachRemoveBtnClick();
        table.saveState();
    });
	
	table.addEventListener('rowEndEdit', (event) => {
	    const row = event.detail.row;
		
		const newRow = {
			EmployeeID: row.EmployeeID,
			FirstName: row.FirstName,
			LastName: row.LastName,
			BirthDate: row.BirthDate,
			Notes: row.Notes,
		};
		
		updateData('Employees', newRow, 'update', 'EmployeeID');	
	});
}

function attachRemoveBtnClick() {   
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeEmployee);
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
                    dataField: 'firstName',
                    controlType: 'input',
                    label: 'First Name'
                },
                {
                    dataField: 'lastName',
                    controlType: 'input',
                    label: 'Last Name'
                },
                {
                    dataField: 'birthDate',
                    controlType: 'date',
                    label: 'Birth Date'
                },
                {
                    dataField: 'notes',
                    controlType: 'input',
                    label: 'Notes'
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

    document.querySelector('#addForm .save-btn').addEventListener('click', addEmployee);
    document.querySelector('#addForm .cancel-btn').addEventListener('click', function() {
		document.getElementById('addWindow').close();
    });
}

function addEmployee() {
    const firstNameInput = document.querySelector('#addForm #firstName');
    const lastNameInput = document.querySelector('#addForm #lastName');
    const birthDateInput = document.querySelector('#addForm #birthDate');
    const notesInput = document.querySelector('#addForm #notes');

    const newEmployee = {
        EmployeeID: employeesId++,
        FirstName: firstNameInput.value,
        LastName: lastNameInput.value,
        BirthDate: birthDateInput.value,
        Notes: notesInput.value
    };
    const newSource = table.dataSource.dataSource;
    newSource.push(newEmployee);
    data.Employees = newSource;
    table.dataSource = newSource;

	updateData('Employees', newEmployee, 'add', 'EmployeeID');

    firstNameInput.value = '';
    lastNameInput.value = '';
    birthDateInput.value = '';
    notesInput.value = '';
    
    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeEmployee(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const employeeToRemove = source[rowId];
    const newSource = source.filter(c => c.EmployeeID !== employeeToRemove.EmployeeID);   
	
	updateData('Employees', employeeToRemove, 'remove', 'EmployeeID');

    data.Employees = newSource;
    table.dataSource = newSource;
    attachRemoveBtnClick();
    table.loadState();
}