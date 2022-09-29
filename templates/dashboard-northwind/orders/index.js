const data = { Orders: null };
let table;
let ordersId = 1;

window.initOrders = function () {
    getCustomersNames();
    attachAddBtnClick();
    window.addEventListener('resize', () => {
        document.getElementById('ordersTable').style.width = window.innerWidth - 310 + 'px';
    });
}

function getCustomersNames() {
    getData(data, 'Customers', getEmployeesNames, 'get-customers-names');    
}

function getEmployeesNames() {
    getData(data, 'Employees', getOrders, 'get-employees-names');    
}

function getOrders() {
    getData(data, 'Orders', loadPage, 'get-orders');    
}

function loadPage() {
    loadTable();
    initWindows();
}

function loadTable() {
    table = new window.Smart.Table('#ordersTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Orders,
            dataFields: [
                'OrderID: number',
                'CustomerID: string',
                'EmployeeID: number',
                'OrderDate: date',
                'RequiredDate: date',
                'ShippedDate: date',
                'Freight: number'
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
            { label: 'OrderID', dataField: 'OrderID', dataType: 'number', width: 100 },
            { label: 'Customer', dataField: 'CustomerID', dataType: 'string', width: 350, 
                formatFunction: settings => { 
                    if (data.Orders[settings.row]) {
						let customer = data.Customers.find((data) => { if (data.CustomerID == settings.value) return true });
						
						if (!customer) {
							customer = {
								CustomerName: ''
							}
						}
						
                        settings.template = '<a><span class="material-icons">credit_card</span>' + customer.CustomerName + '</a>';
                    }
                }
            },
            { label: 'Employee', dataField: 'EmployeeID', dataType: 'string', width: 160,
                formatFunction: settings => { 
                    if (data.Orders[settings.row]) {
						let employee = data.Employees.find((data) => { if (data.EmployeeID == settings.value) return true });
						
						if (!employee) {
							employee = {
								FirstName: '',
								LastName: ''
							}
						}
						
                        settings.template = '<a><span class="material-icons">face</span>' +  employee.FirstName + ' ' + employee.LastName + '</a>';
                    }
                }    
            },
            { 
                label: 'Details',
                allowFilter: false, 
				allowEdit: false,
                formatFunction: settings => { 
                    if (data.Orders[settings.row]) {
                        settings.template = '<a><span class="material-icons">add_shopping_cart</span>Order Details</a>';
                    }
                },
                width: 150
            },
            { label: 'Order Date', dataField: 'OrderDate', dataType: 'date', width: 100 },  
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
        document.getElementById('ordersTable').style.width = window.innerWidth - 310 + 'px';
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
		
		const newOrder = {
			OrderID: row.OrderID,
			CustomerID: row.CustomerID,
			EmployeeID: row.EmployeeID,
			OrderDate: row.OrderDate
		};
		
		updateData('Orders', newOrder, 'update', 'OrderID');	
	});
}

function attachRemoveBtnClick() {   
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeOrder);
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
                    dataField: 'customer',
                    controlType: 'dropdownlist',
                    label: 'Customer',
                    controlOptions: {
						selectedIndexes: [0],
                        dataSource: data['Customers'].map(s => { return {label: s.CustomerName, value: s.CustomerID} })
                    }
                },
                {
                    dataField: 'employee',
                    controlType: 'dropdownlist',
                    label: 'Employee',
                    controlOptions: {
					  selectedIndexes: [0],
                      dataSource: data['Employees'].map(s => { return {label: s.FirstName + ' ' + s.LastName, value: s.EmployeeID} })
                    }
                },
                {
                    dataField: 'orderDate',
                    controlType: 'date',
                    label: 'Order Date'
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

    document.querySelector('#addForm .save-btn').addEventListener('click', addOrder);
    document.querySelector('#addForm .cancel-btn').addEventListener('click', function() {
		document.getElementById('addWindow').close();
    });
}

function addOrder() {
    const customerInput = document.querySelector('#addForm #customer');
    const employeeInput = document.querySelector('#addForm #employee');
    const orderDateInput = document.querySelector('#addForm #orderDate');
    const newOrder = {
        CustomerID: customerInput.value[0].value,
        EmployeeID: employeeInput.value[0].value,
        OrderDate: orderDateInput.value
      
    };
	
	let id = updateData('Orders', newOrder, 'add', 'OrderID').lastId;
	newOrder.OrderID = id;
	
    const newSource = table.dataSource.dataSource;
    newSource.push(newOrder);
    data.Orders = newSource;
    table.dataSource = newSource;

    customerInput.selectedIndexes = [0];
    employeeInput.selectedIndexes = [0];
    orderDateInput.value = '';
  
    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeOrder(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const orderToRemove = source[rowId];
    const newSource = source.filter(o => o.OrderID !== orderToRemove.OrderID);   

	updateData('Orders', orderToRemove, 'remove', 'OrderID');
	
    data.Orders = newSource;
    table.dataSource = newSource;
    attachRemoveBtnClick();
    table.loadState();
}