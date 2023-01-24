<template>
  <div class="vue-root">
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
      const messages = {
        en: {
          addFilter: "+ Add filter",
          and: "And",
          apply: "Apply",
          booleanFirst: "☐",
          booleanLast: "☑",
          cancel: "Cancel",
          CONTAINS: "contains",
          CONTAINS_CASE_SENSITIVE: "contains (case sensitive)",
          dateFirst: "1",
          dateLast: "9",
          DOES_NOT_CONTAIN: "does not contain",
          DOES_NOT_CONTAIN_CASE_SENSITIVE: "does not contain (case sensitive)",
          EMPTY: "empty",
          ENDS_WITH: "ends with",
          ENDS_WITH_CASE_SENSITIVE: "ends with (case sensitive)",
          EQUAL: "equal",
          EQUAL_CASE_SENSITIVE: "equal (case sensitive)",
          filter: "Filter",
          filteredByMultiple: "{{n}} filters",
          filteredByOne: "1 filter",
          filterValuePlaceholder: "Value",
          find: "Find a field",
          findInView: "Find in view",
          firstBy: "Sort by",
          found: "{{nth}} of {{n}}",
          from: "from",
          GREATER_THAN: "greater than",
          GREATER_THAN_OR_EQUAL: "greater than or equal",
          LESS_THAN: "less than",
          LESS_THAN_OR_EQUAL: "less than or equal",
          noFilters: "No filters applied",
          noResults: "No results",
          noSorting: "No sorting applied",
          NOT_EMPTY: "not empty",
          NOT_EQUAL: "not equal",
          NOT_NULL: "not null",
          NULL: "null",
          numberFirst: "1",
          numberLast: "9",
          ok: "OK",
          or: "Or",
          pickAnother: "Pick another field to sort by",
          sort: "Sort",
          sortedByMultiple: "Sorted by {{n}} fields",
          sortedByOne: "Sorted by 1 field",
          STARTS_WITH: "starts with",
          STARTS_WITH_CASE_SENSITIVE: "starts with (case sensitive)",
          stringFirst: "A",
          stringLast: "Z",
          thenBy: "then by",
          where: "Where",
          actionsIcon: "Actions icon",
          addNewStatus: "New status",
          addNewTask: "Add new task",
          addSubtask: "Add subtask",
          assignedTo: "Assigned to",
          checklist: "Checklist",
          color: "Color",
          commentsIcon: "Comments icon",
          copy: "Copy",
          customize: "Customize tasks",
          dueDate: "Due date",
          edit: "Edit",
          editTask: 'Edit task "{{taskId}}"',
          high: "High",
          low: "Low",
          newComment: "New comment",
          newSubtask: "New subtask",
          normal: "Normal",
          priority: "Priority",
          priorityIcon: "Priority icon",
          progress: "Progress",
          promptComment: "Are you sure you want to remove this comment?",
          promptTask:
            'Are you sure you want to remove the task "{{taskText}}"?',
          remove: "Remove",
          removeSubtask: "Remove subtask",
          send: "Send",
          startDate: "Start date",
          status: "Status",
          swimlane: "Swimlane",
          tags: "Tags",
          text: "Text",
          userId: "User ID",
          userIcon: "User icon"
        },
        he: {
          addFilter: "הוסף פילטר",
          and: "ו",
          apply: "להגיש מועמדות",
          booleanFirst: "☐",
          booleanLast: "☑",
          cancel: "בטל",
          CONTAINS: "מכיל",
          CONTAINS_CASE_SENSITIVE: "מכיל (רגיש רישיות)",
          dateFirst: "1",
          dateLast: "9",
          DOES_NOT_CONTAIN: "לא מכיל",
          DOES_NOT_CONTAIN_CASE_SENSITIVE: "אינו מכיל (רגיש רישיות)",
          EMPTY: "ריק",
          ENDS_WITH: "נגמר עם",
          ENDS_WITH_CASE_SENSITIVE: "מסתיים ב (רגיש רישיות)",
          EQUAL: "שווה",
          EQUAL_CASE_SENSITIVE: "שווה (רגיש אותיות רישיות)",
          filter: "סנן",
          filteredByMultiple: "{{n}} פילטרים",
          filteredByOne: "1 פילטר",
          filterValuePlaceholder: "ערך",
          find: "מצא שדה",
          findInView: "מצא בתצוגה",
          firstBy: "מיין לפי",
          found: "{{nth}} מתוך {{n}}",
          from: "מ",
          GREATER_THAN: "גדול מ",
          GREATER_THAN_OR_EQUAL: "גדול או שווה",
          LESS_THAN: "פחות מ",
          LESS_THAN_OR_EQUAL: "פחות מ או שווה",
          noFilters: "לא הוחל מסננים",
          noResults: "אין תוצאות",
          noSorting: "לא מיושם מיון",
          NOT_EMPTY: "לא ריק",
          NOT_EQUAL: "לא שווה",
          NOT_NULL: "לא ריק",
          NULL: "ריק",
          numberFirst: "1",
          numberLast: "9",
          ok: "בסדר",
          or: "או",
          pickAnother: "בחר שדה אחר למיין לפי",
          sort: "סוג",
          sortedByMultiple: "ממוין לפי שדות {{n}}",
          sortedByOne: "מסודר לפי שדה 1",
          STARTS_WITH: "starts with",
          STARTS_WITH_CASE_SENSITIVE: "מתחיל עם",
          stringFirst: "א",
          stringLast: "ז",
          thenBy: "ואז על ידי",
          where: "איפה",
          actionsIcon: "סמל פעולות",
          addNewStatus: "סטטוס חדש",
          addNewTask: "הוסף משימה חדשה",
          addSubtask: "הוסף משימת משנה",
          assignedTo: "שהוקצה ל",
          checklist: "רשימת מטלות",
          color: "צבע",
          commentsIcon: "סמל הערות",
          copy: "עותק",
          customize: "התאם אישית משימות",
          dueDate: "תאריך להגשה",
          edit: "ערוך",
          editTask: 'ערוך את המשימה "{{taskId}}"',
          high: "גבוה",
          low: "נמוך",
          newComment: "תגובה חדשה",
          newSubtask: "תת-משימה חדשה",
          normal: "רגיל",
          priority: "עדיפות",
          priorityIcon: "סמל עדיפות",
          progress: "התקדמות",
          promptComment: "האם אתה בטוח שברצונך להסיר תגובה זו?",
          promptTask: 'האם אתה בטוח שברצונך להסיר את המשימה "{{taskText}}"?',
          remove: "הסר",
          removeSubtask: "הסר את תת המשנה",
          send: "שלח",
          startDate: "תאריך התחלה",
          status: "סטטוס",
          swimlane: "נתיב שחייה",
          tags: "תגיות",
          text: "טקסט",
          userId: "תעודת זהות של המשתמש",
          userIcon: "סמל משתמש"
        }
      };
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
              currentUser: 2,
              dataSource: window.getKanbanData("he"),
              editable: true,
              headerPosition: "top",
              locale: "he",
              messages: messages,
              rightToLeft: true,
              taskActions: true,
              taskComments: true,
              taskDue: true,
              taskPriority: true,
              taskProgress: true,
              taskTags: true,
              taskUserIcon: true,
              userList: true,
              users: [
                {
                  id: 0,
                  name: "אנדרו",
                  image: "../../../demos/images/people/andrew.png"
                },
                {
                  id: 1,
                  name: "אן",
                  image: "../../../demos/images/people/anne.png"
                },
                {
                  id: 2,
                  name: "חוה",
                  image: "../../../demos/images/people/janet.png"
                },
                {
                  id: 3,
                  name: "האנס",
                  image: "../../../demos/images/people/john.png"
                },
                {
                  id: 4,
                  name: "לורה",
                  image: "../../../demos/images/people/laura.png"
                }
              ],
              columns: [
                {
                  label: "לעשות",
                  dataField: "toDo"
                },
                {
                  label: "בתהליך",
                  dataField: "inProgress"
                },
                {
                  label: "בדיקה",
                  dataField: "testing"
                },
                {
                  label: "בוצע",
                  dataField: "done"
                }
              ]
            };
          }
        }
      );
    });
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
