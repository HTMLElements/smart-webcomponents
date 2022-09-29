window.initClients = function () {
    const clientsData = [
        { image: 'avril', name: 'Marcia Gomez', company: 'Sandy Lake', email: 'marcia.gomez@example.com', status: 'Active' },
        { image: 'andrew', name: 'Marvin George', company: 'Saddle Dr', email: 'marvin.george@example.com', status: 'Finished' },
        { image: 'johanna', name: 'Carole Pearson', company: 'Dane Ent.', email: 'carole.pearson@example.com', status: 'Inactive' },
        { image: 'johnny', name: 'Leroy Shelton', company: 'Lakeview', email: 'leroy.shelton@example.com', status: 'Active' },
        { image: 'maria', name: 'Daisy Murphy', company: 'Saddle Dr', email: 'daisy.murphy@example.com', status: 'Active' },
        { image: 'mark', name: 'Lois Franklin', company: 'Saddle Dr', email: 'lois.franklin@example.com', status: 'Finished' },
        { image: 'michael', name: 'Tom Day', company: 'Homestead', email: 'tom.day@example.com', status: 'Inactive' },
        { image: 'maya', name: 'Pamela Miller', company: 'Railroad', email: 'pamela.miller@example.com', status: 'Active' },
        { image: 'monica', name: 'Sue Nichols', company: 'Lakeview', email: 'sue.nichols@example.com', status: 'Active' },
        { image: 'toni', name: 'Ritthy Green', company: 'Lakeview', email: 'ritthy.green@example.com', status: 'Inactive' },
        { image: 'robert', name: 'Martin Shelton', company: 'Lakeview', email: 'martin.shelton@example.com', status: 'Finished' },
        { image: 'laura', name: 'Katrina Murray', company: 'First Street', email: 'katrina.murray@example.com', status: 'Inactive' },
        { image: 'steven', name: 'Alfred Soto', company: 'Homestead', email: 'alfred.soto@example.com', status: 'Active' },
        { image: 'anne', name: 'Irene Sanders', company: 'Blossom Hill Ent.', email: 'irene.sanders@example.com', status: 'Active' },
        { image: 'johnny', name: 'Randy Newman', company: 'Wycliff Solutions', email: 'randy.newman@example.com', status: 'Finished' },
        { image: 'monica', name: 'Emma Long', company: 'Northraven', email: 'emma.long@example.com', status: 'Active' },
        { image: 'avril', name: 'Irene Sanders', company: 'Wycliff Solutions', email: 'sanders.ene@example.com', status: 'Inactive' },
        { image: 'maria', name: 'Jenny Thompson', company: 'Green Café', email: 'jenny.thompson@example.com', status: 'Finished' },
        { image: 'toni', name: 'Jim Fisher', company: 'First Street', email: 'jim.fisher@example.com', status: 'Finished' }
    ];

    new window.Smart.Table('#clientsTable', {
        dataSource: clientsData,
        filtering: true,
        paging: true,
        sortMode: 'one',
        columns: [
            {
                label: '', dataField: 'image', dataType: 'string', width: 50, formatFunction(settings) {
                    settings.template = `<div class="client-image" style="background-image: url('../../images/phonebook/${settings.value}.png')"></div>`;
                }
            },
            { label: 'Name', dataField: 'name', dataType: 'string' },
            { label: 'Company', dataField: 'company', dataType: 'string' },
            { label: 'Email', dataField: 'email', dataType: 'string' },
            {
                label: 'Status', dataField: 'status', dataType: 'string', width: 100, formatFunction(settings) {
                    const value = settings.value;

                    settings.template = `<span class="pill ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
                }
            }
        ]
    });

    addTodayMenuOpenHandlers();
}