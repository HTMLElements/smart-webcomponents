window.initTasks = function () {
    new window.Smart.Kanban('#kanban', {
        collapsible: true,
        dataSource: getKanbanData(),
        editable: true,
        userList: true,
        users: [
            { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
            { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
            { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
            { id: 3, name: 'John', image: '../../images/people/john.png' },
            { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
        ],
        columns: [
            { label: 'To do', dataField: 'toDo' },
            { label: 'In progress', dataField: 'inProgress' },
            { label: 'Testing', dataField: 'testing' },
            { label: 'Done', dataField: 'done' }
        ]
    });
}