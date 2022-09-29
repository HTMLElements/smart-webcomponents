const data = { Categories: null };
let table;
let categoriesId;

window.initCategories = function () {
    getCategories();
    attachAddBtnClick();
    initWindows();
}

function getCategories() {
    getData(data, 'Categories', loadTable, 'get-categories');    
}

function loadTable() {
    categoriesId = data.Categories.length + 1;
    table = new window.Smart.Table('#categoriesTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Categories,
            dataFields: [
                'CategoryID: number',
                'CategoryName: string',
                'Description: string'
            ]
        }),
		editing: true,
		editMode: 'row',
        filtering: true,
        filterRow: true,
        sortMode: 'one',        
        stateSettings: ['filtered', 'sorted'],
        columns: [
            { label: 'Category Name', dataField: 'CategoryName', dataType: 'string' },
            { label: 'Description', dataField: 'Description', dataType: 'string' },
            { 
                label: 'Products',
                allowFilter: false, 
              	allowEdit: false,
				formatFunction: settings => { 
                    settings.template = '<a><span class="material-icons">add_shopping_cart</span>Products</a>';
                        // settings.template = '<a href="./products-by-category/' + 
                        // data.categories[settings.row].CategoryID + 
                        // '"><span class="material-icons">add_shopping_cart</span>Products</a>';
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

    table.whenRendered(attachRemoveBtnClick);
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
		
		const newCategory = {
			CategoryID: row.CategoryID,
			CategoryName: row.CategoryName,
			Description: row.Description
		};
		
		updateData('Categories', newCategory, 'update', 'CategoryID');	
	});
}

function attachRemoveBtnClick() {   
    const removeBtns = document.querySelectorAll('smart-table .remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeCategory);
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
        controls: [
			{
				dataField: 'name',
				controlType: 'input',
				label: 'Category Name'
			},
			{
				dataField: 'description',
				controlType: 'input',
				label: 'Description'
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
			}
		]
    });

    document.querySelector('#addForm .save-btn').addEventListener('click', addCategory);
	document.querySelector('#addForm .cancel-btn').addEventListener('click', function() {
		document.getElementById('addWindow').close();
    });	
}

function addCategory() {
    const nameInput = document.querySelector('#addForm #name');
    const descriptionInput = document.querySelector('#addForm #description');
    const newCategory = {
        CategoryID: categoriesId++,
        CategoryName: nameInput.value,
        Description: descriptionInput.value
    };
    const newSource = table.dataSource.dataSource;
    newSource.push(newCategory);
    data.Categories = newSource;
    table.dataSource = newSource;

	updateData('Categories', newCategory, 'add', 'CategoryID');
	
    nameInput.value = '';
    descriptionInput.value = '';
    document.getElementById('addWindow').close();
    attachRemoveBtnClick();
    table.loadState();
}

function removeCategory(e) {
    const rowId = e.target.id.split('-')[2];
    const source = table.dataSource.dataSource;
    const categoryToRemove = source[rowId];
    const newSource = source.filter(c => c.CategoryID !== categoryToRemove.CategoryID);            
    data.Categories = newSource;
    table.dataSource = newSource;
	updateData('Categories', categoryToRemove, 'remove', 'CategoryID');

    attachRemoveBtnClick();
    table.loadState();
}