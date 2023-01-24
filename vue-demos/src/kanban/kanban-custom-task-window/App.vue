<template>
  <div class="vue-root">
    <div>In this example is shown how to replace the default task window.</div>
    <smart-kanban id="kanban"></smart-kanban>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.kanban.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
        window.Smart(
            "#kanban",
            class {
            get properties() {
                return {
                    addNewColumn: true,
                    allowColumnRemove: true,
                    collapsible: true,
                    addNewButton: true,
                    editable: true,
                    columnActions: true,
                    columnEditMode: 'menu',
                    columnFooter: true,
                    columnSummary: true,
                    columnColors: true,
                    columnColorEntireSurface: true,
                    dataSource: window.getKanbanData(),
                    allowColumnEdit: true,
                    allowColumnReorder: true,
                    taskActions: true,
                    taskDue: true,
                    taskComments: true,
                    currentUser: 0,
                    taskProgress: true,
                    users: [
                        { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
                        { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
                        { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
                        { id: 3, name: 'John', image: '../../images/people/john.png' },
                        { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
                    ],
                    columns: [
                        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
                        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
                        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
                        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
                    ]
                };
            }
            }
        );
        });
        const kanban = document.querySelector('smart-kanban');

        kanban.addEventListener('taskDoubleClick', (event) => {
            const task = event.detail.value;
            const window = document.querySelector('#customWindow');


            const taskWindow = window || document.createElement('smart-window');
            taskWindow.id = 'customWindow';
            document.body.appendChild(taskWindow);
            taskWindow.label = task.text;
            taskWindow.content = `Text: ${task.text}<br/><br/>
            Due Date: ${task.dueDate}<br/><br/>
            Tags: ${task.tags}<br/><br/>
            Priority: ${task.priority}<br/><br/>
            <img style="max-width: 100%;" src="https://www.htmlelements.com/demos/images/admin-template.png"/>`
            taskWindow.open('center');

            event.preventDefault();
        })
  }
};
</script>

<style>
html,
body,
#kanban {
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
}
</style>
