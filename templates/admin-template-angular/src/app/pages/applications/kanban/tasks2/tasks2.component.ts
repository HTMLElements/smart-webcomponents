import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sm-tasks2',
  templateUrl: './tasks2.component.html',
  styleUrls: ['./tasks2.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class Tasks2Component {

  kanbanData = {
    collapsible: true,
    dataSource: this.data.getKanbanData(),
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

  constructor(private data: DataService) { }

}
