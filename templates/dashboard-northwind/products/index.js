const data = { Products: null };
let table;
let productsId;

window.initProducts = function () {
    getSuppliersNames();
    attachAddBtnClick();
    window.addEventListener('resize', () => {
        document.getElementById('productsTable').style.width = window.innerWidth - 310 + 'px';
    });
}

function getSuppliersNames() {
    getData(data, 'Suppliers', getCategoriesNames, 'get-suppliers-names');    
}

function getCategoriesNames() {
    getData(data, 'Categories', getProducts, 'get-categories-names');    
}

function getProducts() {
    getData(data, 'Products', loadPage, 'get-products');    
}

function loadPage() {
    loadTable();
    initWindows();
}

function loadTable() {
    productsId = data.Products.length + 1;
    table = new window.Smart.Table('#productsTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Products,
            dataFields: [
                'ProductID: number',
                'ProductName: string',
                'SupplierID: string',
                'CategoryID: string',
                'Price: number',
                'Unit: string',
                'Discontinued: boolean'
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
            { label: 'Product Name', dataField: 'ProductName', dataType: 'string', width: 200 },
            { label: 'Supplier', allowEdit: false, dataField: 'SupplierID', dataType: 'string', width: 200, 
                formatFunction: settings => { 
                    if (data.Products[settings.row]) {
						const supplier = data.Suppliers.find((data) => { if ( data.SupplierID == settings.value) return true;});
						
						if (supplier) {
							settings.template = '<a><span class="material-icons">pedal_bike</span>' + supplier.SupplierName + '</a>';
						}
					}
                }
            },
            { label: 'Category',  allowEdit: false, dataField: 'CategoryID', dataType: 'string', width: 200,
                formatFunction: settings => { 
                    if (data.Products[settings.row]) {
						const category = data.Categories.find((data) => { if ( data.CategoryID == settings.value) return true;});
				
						if (category) {
							settings.template = '<a><span class="material-icons">folder</span>' + category.CategoryName + '</a>';
						}
					}
                }    
            },
            { label: 'Unit Price', dataField: 'Price', dataType: 'number', width: 100,
                formatFunction: settings => { 
                    settings.template = '$' + settings.value;
                }
            },
            { label: 'Unit', dataField: 'Unit', dataType: 'string', width: 120 },
            { label: 'Discontinued', dataField: 'Discontinued', dataType: 'boolean', width: 120 },
            { 
                label: 'Orders',
                allowFilter: false, 
                formatFunction: settings => { 
                    if (data.Products[settings.row]) {
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
        document.getElementById('productsTable').style.width = window.innerWidth - 310 + 'px';
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
		
		const newProduct = {
			ProductID: row.ProductID,
			ProductName: row.ProductName,
			Price: row.Price
		};
		
		updateData('Categories', newProduct, 'update', 'ProductID');	
	});
}

function attachRemoveBtnClick() {   
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeProduct);
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
                    dataField: 'name',
                    controlType: 'input',
                    label: 'Product Name'
                },
                {
                    dataField: 'supplier',
                    controlType: 'dropdownlist',
                    label: 'Supplier',
                    controlOptions: {
						selectedIndexes: [0],
                        dataSource: data['Suppliers'].map(s => { return {label: s.SupplierName, value: s.SupplierID} })
                    }
                },
                {
                    dataField: 'category',
                    controlType: 'dropdownlist',
                    label: 'Category',
                    controlOptions: {
						selectedIndexes: [0],
                        dataSource: data['Categories'].map(c => { return {label: c.CategoryName, value: c.CategoryID} })
                    }
                },
                {
                    dataField: 'price',
                    controlType: 'number',
                    label: 'Unit Price'
                },
                {
                    dataField: 'unit',
                    controlType: 'input',
                    label: 'Unit'
                },
                {
                    dataField: 'discontinued',
                    controlType: 'boolean',
                    label: 'Discontinued'
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

   document.querySelector('#addForm .save-btn').addEventListener('click', addProduct);
   document.querySelector('#addForm .cancel-btn').addEventListener('click', function() {
		document.getElementById('addWindow').close();
   });
}

function addProduct() {
    const nameInput = document.querySelector('#addForm #name');
    const supplierInput = document.querySelector('#addForm #supplier');
    const categoryInput = document.querySelector('#addForm #category');
    const unitPriceInput = document.querySelector('#addForm #price');
    const unitsInStockInput = document.querySelector('#addForm #unit');
    const unitsOnOrderInput = document.querySelector('#addForm #unitsOnOrder');
    const discontinuedInput = document.querySelector('#addForm #discontinued smart-check-box');

    const newProduct = {
        ProductID: productsId++,
        ProductName: nameInput.value,
        SupplierID: supplierInput.value[0].value,
        CategoryID: categoryInput.value[0].value,
        Price: unitPriceInput.value,
        Unit: unitsInStockInput.value,
        Discontinued: discontinuedInput.checked
    };
    const newSource = table.dataSource.dataSource;
    newSource.push(newProduct);
    data.Products = newSource;
    table.dataSource = newSource;
	
	updateData('Products', newProduct, 'add', 'ProductID');
	
    nameInput.value = '';
    supplierInput.selectedIndexes = [0];
    categoryInput.selectedIndexes = [0];
    unitPriceInput.value = 0;
    unitsInStockInput.value = '';
    discontinuedInput.checked = false;

    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeProduct(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const productToRemove = source[rowId];
    const newSource = source.filter(c => c.ProductID !== productToRemove.ProductID);            
  
  	updateData('Products', productToRemove, 'remove', 'ProductID');

	data.Products = newSource;
    table.dataSource = newSource;
    attachRemoveBtnClick();
    table.loadState();
}