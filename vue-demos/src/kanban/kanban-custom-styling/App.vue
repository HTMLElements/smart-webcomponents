<template>
  <div class="vue-root">
    <div></div>
    <smart-kanban id="kanban"></smart-kanban>
    <div class="options">
        <div class="caption">
            Options
        </div>
        <div class="option">
            <smart-radio-button data-target="#kanban" data-value="false" data-property="columnColorEntireSurface"
                name="defaultStyle" id="style1" checked>
                Default Style
            </smart-radio-button>
            <smart-radio-button data-target="#kanban" data-value="true" data-property="columnColorEntireSurface"
                name="alternativeStyle" id="style2">
                Alternative Style
            </smart-radio-button>

        </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
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
