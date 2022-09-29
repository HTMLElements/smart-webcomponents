const data = { Employees: null };
let chart;

const chart2018Data = [
    { month: 'January', Beverages: 3451, Condiments: 3947, Confections: 6159, 'Dairy Products': 5297, 'Grains/Cereals': 10439, 'Meat/Poultry': 10248, 'Produce': 8018, 'Seafood': 14456 },
    { month: 'February', Beverages: 2846, Condiments: 4964, Confections: 5485, 'Dairy Products': 5438, 'Grains/Cereals': 15499, 'Meat/Poultry': 8465, 'Produce': 8546, 'Seafood': 15555 },
    { month: 'March', Beverages: 5431, Condiments: 4236, Confections: 7128, 'Dairy Products': 6325, 'Grains/Cereals': 16288, 'Meat/Poultry': 7459, 'Produce': 9654, 'Seafood': 13695 },
    { month: 'April', Beverages: 3557, Condiments: 3564, Confections: 7106, 'Dairy Products': 6985, 'Grains/Cereals': 12695, 'Meat/Poultry': 8495, 'Produce': 6585, 'Seafood': 12357 },
    { month: 'May', Beverages: 4645, Condiments: 3664, Confections: 5019, 'Dairy Products': 7665, 'Grains/Cereals': 11859, 'Meat/Poultry': 10499, 'Produce': 6014, 'Seafood': 10249 },
    { month: 'June', Beverages: 8546, Condiments: 4281, Confections: 8920, 'Dairy Products': 7808, 'Grains/Cereals': 11048, 'Meat/Poultry': 13644, 'Produce': 5974, 'Seafood': 11269 },
    { month: 'July', Beverages: 9513, Condiments: 5241, Confections: 7469, 'Dairy Products': 7028, 'Grains/Cereals': 9584, 'Meat/Poultry': 14588, 'Produce': 6148, 'Seafood': 8028 },
    { month: 'August', Beverages: 7513, Condiments: 5369, Confections: 6236, 'Dairy Products': 6047, 'Grains/Cereals': 8854, 'Meat/Poultry': 12482, 'Produce': 6951, 'Seafood': 10695 },
    { month: 'September', Beverages: 4046, Condiments: 4260, Confections: 4924, 'Dairy Products': 8456, 'Grains/Cereals': 7102, 'Meat/Poultry': 10499, 'Produce': 7952, 'Seafood': 12369 },
    { month: 'October', Beverages: 5422, Condiments: 2395, Confections: 5249, 'Dairy Products': 8231, 'Grains/Cereals': 10558, 'Meat/Poultry': 7459, 'Produce': 8264, 'Seafood': 13698 },
    { month: 'November', Beverages: 5013, Condiments: 6544, Confections: 6745, 'Dairy Products': 6105, 'Grains/Cereals': 11297, 'Meat/Poultry': 9578, 'Produce': 9624, 'Seafood': 14658 },
    { month: 'December', Beverages: 3584, Condiments: 7182, Confections: 8466, 'Dairy Products': 4567, 'Grains/Cereals': 9684, 'Meat/Poultry': 10487, 'Produce': 10556, 'Seafood': 10239 }
];

const chart2019Data = [
    { month: 'January', Beverages: 6540, Condiments: 3855, Confections: 5458, 'Dairy Products': 5925, 'Grains/Cereals': 12646, 'Meat/Poultry': 10499, 'Produce': 7650, 'Seafood': 13285 },
    { month: 'February', Beverages: 6018, Condiments: 4205, Confections: 5845, 'Dairy Products': 6652, 'Grains/Cereals': 11285, 'Meat/Poultry': 9800, 'Produce': 7025, 'Seafood': 12365 },
    { month: 'March', Beverages: 5789, Condiments: 4625, Confections: 6654, 'Dairy Products': 6022, 'Grains/Cereals': 12395, 'Meat/Poultry': 9506, 'Produce': 6889, 'Seafood': 11295 },
    { month: 'April', Beverages: 5564, Condiments: 4980, Confections: 6183, 'Dairy Products': 5456, 'Grains/Cereals': 13020, 'Meat/Poultry': 9025, 'Produce': 6625, 'Seafood': 10578 },
    { month: 'May', Beverages: 4985, Condiments: 5345, Confections: 7546, 'Dairy Products': 5000, 'Grains/Cereals': 14560, 'Meat/Poultry': 8456, 'Produce': 6001, 'Seafood': 8549 },
    { month: 'June', Beverages: 4402, Condiments: 6102, Confections: 8236, 'Dairy Products': 4569, 'Grains/Cereals': 14952, 'Meat/Poultry': 7459, 'Produce': 5280, 'Seafood': 7489 },
    { month: 'July', Beverages: 4012, Condiments: 6785, Confections: 9358, 'Dairy Products': 5850, 'Grains/Cereals': 13524, 'Meat/Poultry': 9028, 'Produce': 6236, 'Seafood': 8865 },
    { month: 'August', Beverages: 4985, Condiments: 4585, Confections: 10339, 'Dairy Products': 7350, 'Grains/Cereals': 12589, 'Meat/Poultry': 12695, 'Produce': 6945, 'Seafood': 10298 },
    { month: 'September', Beverages: 5952, Condiments: 4058, Confections: 11288, 'Dairy Products': 7785, 'Grains/Cereals': 10328, 'Meat/Poultry': 13645, 'Produce': 8465, 'Seafood': 12358 },
    { month: 'October', Beverages: 8545, Condiments: 3358, Confections: 9586, 'Dairy Products': 8654, 'Grains/Cereals': 10289, 'Meat/Poultry': 13958, 'Produce': 9249, 'Seafood': 13685 },
    { month: 'November', Beverages: 6754, Condiments: 6548, Confections: 9125, 'Dairy Products': 9000, 'Grains/Cereals': 9320, 'Meat/Poultry': 15488, 'Produce': 11295, 'Seafood': 9850 },
    { month: 'December', Beverages: 5200, Condiments: 7995, Confections: 10654, 'Dairy Products': 9450, 'Grains/Cereals': 8024, 'Meat/Poultry': 12948, 'Produce': 9258, 'Seafood': 8650 }
];

const chart2021Data = [
    { month: 'January', Beverages: 4310, Condiments: 3641, Confections: 6245, 'Dairy Products': 5297, 'Grains/Cereals': 12646, 'Meat/Poultry': 10499, 'Produce': 8465, 'Seafood': 14365 },
    { month: 'February', Beverages: 3214, Condiments: 4212, Confections: 6164, 'Dairy Products': 5947, 'Grains/Cereals': 15499, 'Meat/Poultry': 9589, 'Produce': 9245, 'Seafood': 13487 },
    { month: 'March', Beverages: 3101, Condiments: 3664, Confections: 5945, 'Dairy Products': 6426, 'Grains/Cereals': 13549, 'Meat/Poultry': 9048, 'Produce': 8546, 'Seafood': 12487 },
    { month: 'April', Beverages: 2476, Condiments: 4526, Confections: 5146, 'Dairy Products': 6985, 'Grains/Cereals': 13020, 'Meat/Poultry': 10679, 'Produce': 7145, 'Seafood': 10578 },
    { month: 'May', Beverages: 5137, Condiments: 5169, Confections: 8469, 'Dairy Products': 6157, 'Grains/Cereals': 12646, 'Meat/Poultry': 10499, 'Produce': 7654, 'Seafood': 11675 },
    { month: 'June', Beverages: 7521, Condiments: 4684, Confections: 8920, 'Dairy Products': 5297, 'Grains/Cereals': 11647, 'Meat/Poultry': 12648, 'Produce': 6452, 'Seafood': 16238 },
    { month: 'July', Beverages: 6424, Condiments: 2159, Confections: 7469, 'Dairy Products': 8559, 'Grains/Cereals': 10648, 'Meat/Poultry': 13648, 'Produce': 6148, 'Seafood': 18465 },
    { month: 'August', Beverages: 4576, Condiments: 5169, Confections: 7054, 'Dairy Products': 9762, 'Grains/Cereals': 8548, 'Meat/Poultry': 11369, 'Produce': 5000, 'Seafood': 13467 },
    { month: 'September', Beverages: 7546, Condiments: 7516, Confections: 6245, 'Dairy Products': 8615, 'Grains/Cereals': 6482, 'Meat/Poultry': 10499, 'Produce': 8465, 'Seafood': 14675 },
    { month: 'October', Beverages: 6454, Condiments: 9514, Confections: 6945, 'Dairy Products': 6465, 'Grains/Cereals': 9645, 'Meat/Poultry': 10368, 'Produce': 8145, 'Seafood': 12864 },
    { month: 'November', Beverages: 6754, Condiments: 8954, Confections: 5464, 'Dairy Products': 6105, 'Grains/Cereals': 10648, 'Meat/Poultry': 9578, 'Produce': 9624, 'Seafood': 12377 },
    { month: 'December', Beverages: 4576, Condiments: 7995, Confections: 8466, 'Dairy Products': 5297, 'Grains/Cereals': 11054, 'Meat/Poultry': 8694, 'Produce': 8645, 'Seafood': 11028 }
];

window.initDefault = function () {
    getEmployees();
    loadCharts();  
    document.getElementById('exportBtn').addEventListener('click', () => {
        document.getElementById('employeesTable').exportData('xlsx', 'table');
    });
    document.querySelector('smart-button-group').addEventListener('change', (e) => {
        updateChartSource(e.detail.values[0]);
    });
}

function getEmployees() {
    getData(data, 'Employees', loadTable, 'get-top-employees');    
} 

function loadTable() {
    new window.Smart.Table('#employeesTable', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: data.Employees,
            dataFields: [
                'EmployeeID: string',
                'FirstName: string',
                'LastName: string',               
                'BirthDate: string',
                'Notes: string'
            ]
        }),
        sortMode: 'one',
        columns: [
            { 
                label: 'Employee', 
				dataField: 'EmployeeID',
                formatFunction: settings => {
					const name = data.Employees[settings.row].FirstName.toLowerCase();
					
					switch(name) {
						case 'nancy':
						case 'andrew':
						case 'steven':
						case 'janet':
						case 'laura':
						case 'margaret':
						case 'maya':
						case 'monica':
						case 'mark':
						case 'michael':
						case 'anne':
						case 'robert':
							break;
						default: {
						    settings.template = '<img class="employee-image" src="../../images/avatar.png"/>'
							return;
						}
					}
					
                    settings.template = '<img class="employee-image" src="../../images/phonebook/' + 
                        data.Employees[settings.row].FirstName.toLowerCase() + '.png"/>'
                },
                width: 50
            },
            { label: 'FirstName', dataField: 'FirstName', dataType: 'string', width: 100 },
            { label: 'LastName', dataField: 'LastName', dataType: 'string', width: 60 },
            { label: 'BirthDate', dataField: 'BirthDate', dataType: 'string', width: 100 }
        ]
    });
}

function updateChartSource(year) {
    switch(year) {
        case '2021': chart.dataSource = chart2021Data;
            break;
        case '2019': chart.dataSource = chart2019Data;
            break;
        case '2018': chart.dataSource = chart2018Data;
            break;
    }
}

function loadCharts() {
    const newCustomers = [10, 15, 10, 20, 20, 20, 25];

    new window.Smart.Chart('#newCustomersChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        dataSource: newCustomers,
        xAxis: { visible: false },
        valueAxis: { visible: false },
        colorScheme: 'scheme13',
        seriesGroups: [ { type: 'spline', series: [ { displayText: '' } ] } ]
    });
    
    chart = new window.Smart.Chart('#productSales', {
        caption: '',
        description: '',
        theme: getTheme(),
        showLegend: true,
        showBorderLine: false,
        padding: { left: 20, top: 15, right: 20, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
        dataSource: chart2021Data,
        colorScheme: 'scheme29',
        xAxis:
        {
            dataField: 'month',
            valuesOnTicks: true
        },
        valueAxis:
        {
            visible: true,
        },
        seriesGroups:
            [
                {
                    type: 'area',
                    series: [
                        { dataField: 'Beverages', opacity: 0.9 },
                        { dataField: 'Condiments', opacity: 0.8 },
                        { dataField: 'Confections', opacity: 0.7 },
                        { dataField: 'Dairy Products', opacity: 0.6 },
                        { dataField: 'Grains/Cereals', opacity: 0.5 },
                        { dataField: 'Meat/Poultry', opacity: 0.4 },
                        { dataField: 'Produce', opacity: 0.3 },
                        { dataField: 'Seafood', opacity: 0.2 }
                    ]
                }
            ]       
    });
    
	window.newCustomersChart.refresh();
	window.productSales.refresh();
}
