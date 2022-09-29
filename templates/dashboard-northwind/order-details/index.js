const data = { OrderDetails: null };
let table;
let orderDetailsId;

window.initOrderDetails = function () {
    getProductsNames();
    attachAddBtnClick();
    window.addEventListener('resize', () => {
        document.getElementById('orderDetailsTable').style.width = window.innerWidth - 310 + 'px';
    });
}

function getProductsNames() {
    getData(data, 'Products', getOrdersIds, 'get-products-names');    
}

function getOrdersIds() {
    getData(data, 'Orders', getOrderDetails, 'get-orders-ids');    
}

function getOrderDetails() {
    getData(data, 'OrderDetails', loadPage, 'get-order-details');    
}

function loadPage() {
    loadTable();
    initWindows();
}

function loadTable() {
    orderDetailsId = data.OrderDetails.length + 1;
    table = new window.Smart.Table('#orderDetailsTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.OrderDetails,
            dataFields: [
                'id: number',
                'OrderID: number',
                'ProductID: string',
                'Quantity: number'
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
            { label: 'Order', allowEdit: false, dataField: 'OrderID', dataType: 'string', width: 100,
                formatFunction: settings => { 
                    if (data.OrderDetails[settings.row]) {
                        settings.template = '<a><span class="material-icons">shopping_cart</span>' + settings.value + '</a>';
                    }
                }
            },
            { label: 'Product', dataField: 'ProductID', dataType: 'string', width: 200,
				editor: {
					template: '<smart-drop-down-list></smart-drop-down-list>',
					onInit(row, column, editor, value) {
						editor.dataSource = data['Products'].map(c => { return {label: c.ProductName, value: c.ProductID} })
						editor.dropDownAppendTo = 'body';
					},
					onRender(row, column, editor, value) {
						editor.selectedValues = [value];
					},
					getValue(editor) {
						return editor.selectedValues[0];
					}
				},
                formatFunction: settings => { 
                    if (data.OrderDetails[settings.row]) {
						const product = data.Products.find((data) => { if ( data.ProductID == settings.value) return true;});
				
						if (product) {
							settings.template = '<a><span class="material-icons">add_shopping_cart</span>' + product.ProductName + '</a>';
						}
					}
               }
            },
            { label: 'Quantity', dataField: 'Quantity', dataType: 'number', width: 130 },
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
        document.getElementById('orderDetailsTable').style.width = window.innerWidth - 310 + 'px';
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
			ProductID: row.ProductID,
			Quantity: row.Quantity
		};
		
		updateData('OrderDetails', newOrder, 'update', 'OrderID');	
	});
}

function attachRemoveBtnClick() {   
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeOrderDetail);
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
                    dataField: 'product',
                    controlType: 'dropdownlist',
                    label: 'Product',
                    controlOptions: {
					  selectedIndexes: [0],
                      dataSource: data['Products'].map(c => { return {label: c.ProductName, value: c.ProductID} })
                    }
                },
                {
                    dataField: 'quantity',
                    controlType: 'number',
                    label: 'Quantity'
                },
                {
                    dataField: 'date',
                    controlType: 'date',
                    label: 'Date'
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

    document.querySelector('#addForm .save-btn').addEventListener('click', addOrderDetail);
    document.querySelector('#addForm .cancel-btn').addEventListener('click', function() {
		document.getElementById('addWindow').close();
   });
}

function addOrderDetail() {
    const productInput = document.querySelector('#addForm #product');
    const quantityInput = document.querySelector('#addForm #quantity');
	const dateInput = document.querySelector('#addForm #date');
  
    const newOrder = {
        ProductID: productInput.value[0].value,
        Quantity: quantityInput.value,
		OrderDate: dateInput.value
    };
	
	const id = updateData('Orders', newOrder, 'add', 'OrderID').lastId;
	
    const newOrderDetail = {
        ProductID: productInput.value[0].value,
        Quantity: quantityInput.value,
		OrderID: id
    };
	
	
	updateData('OrderDetails', newOrderDetail, 'add', 'OrderDetailID');

    const newSource = table.dataSource.dataSource;
    newSource.push(newOrderDetail);
    data.OrderDetails = newSource;
    table.dataSource = newSource;

    productInput.selectedIndexes = [0];
    quantityInput.value = 0;

    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeOrderDetail(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const orderToRemove = source[rowId];
    const newSource = source.filter(c => c.OrderDetailID !== orderToRemove.OrderDetailID);  
	
	updateData('OrderDetails', orderToRemove, 'remove', 'OrderDetailID');

    data.OrderDetails = newSource;
    table.dataSource = newSource;
    attachRemoveBtnClick();
    table.loadState();
}