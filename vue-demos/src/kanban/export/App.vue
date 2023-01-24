<template>
  <div class="vue-root">
    <smart-kanban id="kanban"></smart-kanban>
    <div class="options">
      <smart-button id="csv">Export to CSV</smart-button>
      <smart-button id="html">Export to HTML</smart-button>
      <smart-button id="json">Export to JSON</smart-button>
      <smart-button id="pdf">Export to PDF</smart-button>
      <smart-button id="tsv">Export to TSV</smart-button>
      <smart-button id="xlsx">Export to XLSX</smart-button>
      <smart-button id="xml">Export to XML</smart-button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
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
              collapsible: true,
              dataSource: window.getKanbanData(),
              columns: [
                {
                  label: "To do",
                  dataField: "toDo"
                },
                {
                  label: "In progress",
                  dataField: "inProgress"
                },
                {
                  label: "Testing",
                  dataField: "testing"
                },
                {
                  label: "Done",
                  dataField: "done"
                }
              ]
            };
          }
        }
      );

      const kanban = document.getElementById("kanban");
      document.getElementById("csv").addEventListener("click", function() {
        kanban.exportData("csv", "kanban");
      });
      document.getElementById("html").addEventListener("click", function() {
        kanban.exportData("html", "kanban");
      });
      document.getElementById("json").addEventListener("click", function() {
        kanban.exportData("json", "kanban");
      });
      document.getElementById("pdf").addEventListener("click", function() {
        kanban.exportData("pdf", "kanban");
      });
      document.getElementById("tsv").addEventListener("click", function() {
        kanban.exportData("tsv", "kanban");
      });
      document.getElementById("xlsx").addEventListener("click", function() {
        kanban.exportData("xlsx", "kanban");
      });
      document.getElementById("xml").addEventListener("click", function() {
        kanban.exportData("xml", "kanban");
      });
    });
  }
};
</script>

<style>
#kanban {
  width: 800px;
  height: 600px;
}

smart-button {
  width: 100%;
  margin-bottom: 10px;
}
</style>
