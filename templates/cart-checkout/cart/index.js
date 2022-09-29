window.onload = () => {
    gridCartTable = document.getElementById('gridCartTable');
    gridCartTable.addEventListener('click', gridClickHandler);

    deleteWindow = document.getElementById('delete-prod-modal');
    deleteWindow.addEventListener('click', windowClickHandler);
};

let gridCartTable;
let deleteWindow;
let gridIdToRemove = 0;

const gridClickHandler = (e) => {
    if (e.target.classList.contains('delete-product-icon')) {
        gridIdToRemove = e.target.id;
        deleteWindow.open();
    }
}

const windowClickHandler = (e) => {
    if (e.target.textContent ==='YES') {
        let totalSelector = document.querySelector('.cart-container .total');
        let totalContent = totalSelector.innerText;

        totalContent = totalContent.replace(',', '.');
        totalContent = totalContent.split(': $')[1];
        totalContent = parseFloat(totalContent).toFixed(2);

        const col = gridCartTable.rows[gridIdToRemove]._cells[4].row.data;
        let deleteProdPrice = (parseFloat(col.price).toFixed(2) * parseInt(col.quantity));
        totalContent = totalContent - deleteProdPrice;
        totalContent = parseFloat(totalContent.toFixed(2));

        totalSelector.innerText = 'Total: $' + totalContent;

        closeDeleteModal(1);
    }
    
    if (e.target.textContent === 'NO') {
        closeDeleteModal();
    }
}

const closeDeleteModal = (confirmDelete = 0) => {
    if (confirmDelete === 1) {
        gridCartTable.rows.splice(gridIdToRemove, 1);
    }

    deleteWindow.close();
}

const productImages = [
    '../../../images/tablet-184888_960_720.jpg',
    '../../../images/quadrocopter-1658967_960_720.png',
    '../../../images/battery-1049664_960_720.jpg',
];

let i = 0;
new Smart.Grid('#gridCartTable', {
    layout: {
        rowHeight: 100
    },
    dataSource: new Smart.DataAdapter(
        {
            dataSource: [
                {
                    image: productImages[0],
                    title: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
                    description: 'Protect your Amazon Fire 7" tablet from scratches and bumps on the go with this slim Amazon B00ZGUYN1Q case, which features a full-coverage design with polyurethane and microfiber materials for durability. The built-in stand enables hands-free viewing.',
                    price: 24.99,
                    quantity: 1,
                    total: '',
                },
                {
                    image: productImages[1],
                    title: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
                    description: '3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.',
                    price: 14.95,
                    quantity: 1,
                    total: '',
                },
                {
                    image: productImages[2],
                    title: '3DR - Solo Smart Rechargeable Battery - Black',
                    description: '3D Robotics Battery for Solo Drones: Instead of waiting for your lone battery to recharge, get back to flying right away with this rechargeable battery for Solo drones. The battery can power your drone for up to 25 minutes with no camera attached, or 20 minutes carrying a camera.',
                    price: 149.95,
                    quantity: 2,
                    total: '',
                },
                {
                    image: productImages[0],
                    title: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
                    description: 'Take your Amazon Fire HD 8 tablet on the go with this Amazon B00XM5W2WE case, which features a folio cover that guards your device\'s display and automatically wakes up your device when opened.The built-in stand offers comfortable hands-free viewing.',
                    price: 39.99,
                    quantity: 3,
                    total: '',
                },
            ],
            dataFields:
                [
                    'image: string',
                    'title: string',
                    'description: string',
                    'price: string',
                    'quantity: string',
                    'total: string',
                ]
        }),
    columns: [
        { label: '', dataField: 'image', cellsAlign: 'center', align: 'center', width: '10%',
            template: function (formatObject) {
                if (!formatObject.template) {
                    formatObject.template = '<i class="material-icons delete-product-icon" id="' + formatObject.row.visibleIndex +'">close</i><img class="product-image" src = "' + formatObject.value + '" />';
                }
            }
        },
        { label: 'Name', dataField: 'title', width: '40%', formatFunction(settings) {
            settings.template = '<span class="product-title">' + settings.row.data.title + '</span><span class="product-description">' + settings.row.data.description + '</span>';
            }
        },
        { label: 'Price', dataField: 'price', cellsAlign: 'center', align: 'center', width: '20%', template: function (formatObject) {
                if (!formatObject.template) {
                    formatObject.template = '$' + formatObject.value ;
                }
            }
        },
        { label: 'Quantity', dataField: 'quantity', width: '10%', cellsAlign: 'center', align: 'center', formatFunction(settings) {
                settings.template = '<smart-input placeholder="Quantity" value=' + settings.row.data.quantity +'></smart-input>';
            }
        },
        { label: 'Total', dataField: 'total', cellsAlign: 'center', align: 'center', width: '20%', formatFunction(settings) {
            settings.template = '$' + parseFloat(settings.row.data.price) * parseFloat(settings.row.data.quantity);
            }
        }
    ]
});
