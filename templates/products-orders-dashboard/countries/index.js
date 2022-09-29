window.initCountries = function () {
    initGrid();

    window.updateData = null;
}

function initGrid() {
    new window.Smart.Grid('#productsGrid', {
        appearance: {
            showRowHeaderNumber: true,
            allowRowDetailToggleAnimation: true
        },
        onRowInit(index, row) {
            if (index === 0) {
                row.showDetail = true;
            }
        },
        onRowDetailInit(index, row, detail) {
            const grid = document.createElement('div');

            detail.appendChild(grid);

            const gridInstance = new Smart.Grid(grid, {
                dataSource: new Smart.DataAdapter(
                    {
                        dataSource: getCountriesData().filter(data => data.ID === row.data.ID),
                        dataFields:
                            [
                                'ID: number',
                                'Country: string',
                                'Area: number',
                                'Population_Urban: number',
                                'Population_Rural: number',
                                'Population_Total: number',
                                'GDP_Agriculture: number',
                                'GDP_Industry: number',
                                'GDP_Services: number',
                                'GDP_Total: number'
                            ]
                    }),
                columns: [
                    'Population_Urban',
                    'Population_Rural',
                    'Population_Total',
                    'GDP_Total'
                ]
            });
        },
        rowDetail: {
            enabled: true,
            visible: true,
            height: 100
        },
        dataSource: new Smart.DataAdapter(
            {
                dataSource: getCountriesData(),
                dataFields:
                    [
                        'ID: number',
                        'Country: string',
                        'Area: number',
                        'Population_Urban: number',
                        'Population_Rural: number',
                        'Population_Total: number',
                        'GDP_Agriculture: number',
                        'GDP_Industry: number',
                        'GDP_Services: number',
                        'GDP_Total: number'
                    ]
            }),
        columns: [
            'Country',
            'Area',
            'Population_Rural',
            'Population_Total',
            'GDP_Total'
        ]
    });
}
