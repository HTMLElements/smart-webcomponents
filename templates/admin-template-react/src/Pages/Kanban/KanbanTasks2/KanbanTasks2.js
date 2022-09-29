import './KanbanTasks2.scss';

import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Kanban } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

import { getKanbanData } from '../../../services/dataService';

function KanbanTasks2() {

    useEffect(() => { document.title = `Tasks 2 - ${defaultTitle}` }, []);

    const KanbanData = {
        collapsible: true,
        dataSource: getKanbanData(),
        editable: true,
        userList: true,
        users: [
            { id: 0, name: 'Andrew', image: 'assets/images/people/andrew.png' },
            { id: 1, name: 'Anne', image: 'assets/images/people/anne.png' },
            { id: 2, name: 'Janet', image: 'assets/images/people/janet.png' },
            { id: 3, name: 'John', image: 'assets/images/people/john.png' },
            { id: 4, name: 'Laura', image: 'assets/images/people/laura.png' }
        ],
        columns: [
            { label: 'To do', dataField: 'toDo' },
            { label: 'In progress', dataField: 'inProgress' },
            { label: 'Testing', dataField: 'testing' },
            { label: 'Done', dataField: 'done' }
        ]
    }

    return (
        <div className="container kanban-tasks2">
            <div className="row">
                <div className="col-12 mb-3"><h4>Tasks 2</h4></div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <Kanban id="kanban" {...KanbanData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(KanbanTasks2)