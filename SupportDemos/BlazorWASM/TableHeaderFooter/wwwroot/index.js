// // window.onload = function () {
// //     let grid, filterButtons;

// //     setTimeout(() => {
// //         grid = document.querySelector('smart-grid');
// //         filterButtons = document.querySelectorAll('.smart-filter-button')
// //         console.log(grid, filterButtons)

// //         for (let i = 0; i < filterButtons.length; i++) {
// //             filterButtons[i].addEventListener('click', () => {
// //                 let filterPanel = document.querySelector('smart-filter-panel'),
// //                     filterLabel = filterPanel.getElementsByClassName('smart-filter-panel-label'),
// //                     filterPanelButtons = filterPanel.querySelectorAll('smart-button');

// //                 filterLabel[0].innerText = "Your Label";
// //                 filterPanelButtons[0].innerText = "Filtrieren";
// //                 filterPanelButtons[1].innerText = "Klar"

// //                 console.log(filterPanelButtons)
// //             })
// //         }
// //     }, 2000);

// // }

// window.jsFunc = () =>{
//     let grid, filterButtons, comandColumn;
    
    
//         grid = document.querySelector('smart-grid');
//         filterButtons = document.querySelectorAll('.smart-filter-button');
       
        
//         for (let i = 0; i < filterButtons.length; i++) {
//             if (i !== 0 && i <= 7){
//                 filterButtons[i].addEventListener('click', () => {
//                     let filterPanel = document.querySelector('smart-filter-panel'),
//                         filterLabel = filterPanel.getElementsByClassName('smart-filter-panel-label'),
//                         filterPanelButtons = filterPanel.querySelectorAll('smart-button');
        
//                     filterLabel[0].innerText = "Your Label";
//                     filterPanelButtons[0].innerText = "Filtrieren";
//                     filterPanelButtons[1].innerText = "Klar";
//                 });
//             }
//         };
       
     

//         grid.onCommand = (commandname) => {
//             if (commandname.name === "commandColumnMenuCommand") {
//                 setTimeout( () => {
//                     let filterMenu = document.querySelector('.smart-grid-column-menu ');
//                     if( filterMenu.firstElementChild.classList.contains('smart-filter-container') ) {
//                         filterMenu.firstElementChild.style.display = 'none';
//                     } 
//                     else {
//                         return;
//                     }
//                 }, 50);
//             };
//         }
      
// }

// window.onload = () => {
//     setTimeout(() => {
//         const table  = document.getElementById('table');

//         table.columns =  [
//             { label: 'id', dataField: 'Id', dataType: 'number', responsivePriority: 3 },
//             { label: 'First Name', dataField: 'FirstName', dataType: 'string', responsivePriority: 4 },
//             { label: 'Last Name', dataField: 'LastName', dataType: 'string' },
//             { label: 'Product Name', dataField: 'ProductName', dataType: 'string' },
//             { label: 'Quantity', dataField: 'Quantity', dataType: 'number', responsivePriority: 3 },
//             { label: 'Price', dataField: 'Price', dataType: 'number', responsivePriority: 3 },
//             {
//                 label: '', dataField: '', width: 155, formatFunction: function (settings) {
//                     settings.template = '<div class="actions-container"><smart-button class="small-button outlined primary">Copy</smart-button><smart-button class="small-button outlined error">Remove</smart-button></div>';
//                 }
//             }
//         ];
//     }, 1000);
   
// }

// window.tableInit= () => {
//     const table  = document.getElementById('table');

//     table.columns =  [
//         { label: 'id', dataField: 'Id', dataType: 'number', responsivePriority: 3 },
//         { label: 'First Name', dataField: 'FirstName', dataType: 'string', responsivePriority: 4 },
//         { label: 'Last Name', dataField: 'LastName', dataType: 'string' },
//         { label: 'Product Name', dataField: 'ProductName', dataType: 'string' },
//         { label: 'Quantity', dataField: 'Quantity', dataType: 'number', responsivePriority: 3 },
//         { label: 'Price', dataField: 'Price', dataType: 'number', responsivePriority: 3 },
//         {
//             label: '', dataField: '', width: 155, formatFunction: function (settings) {
//                 settings.template = '<div class="actions-container"><smart-button class="small-button outlined primary">Copy</smart-button><smart-button class="small-button outlined error">Remove</smart-button></div>';
//             }
//         }
//     ];
// }
// // window.Smart.Table('#table', {
    
// //     filtering: true,
// //     paging: true,
// //     sortMode: 'one',
// //     tooltip: true,
// //     columns: [
// //         { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
// //         { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
// //         { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
// //         { label: 'Product Name', dataField: 'productName', dataType: 'string' },
// //         { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
// //         { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
// //         {
// //             label: '', dataField: '', width: 155, formatFunction: function (settings) {
// //                 settings.template = '<div class="actions-container"><smart-button class="small-button outlined primary">Copy</smart-button><smart-button class="small-button outlined error">Remove</smart-button></div>';
// //             }
// //         }
// //     ]
// // });