<template>
  <div class="vue-root">
    <div class="demo-description">
      Custom
      <b>timelineHeaderFormatFunction</b> is applied to change a specific
      format for the header of the Timeline.
      <br />Click on the Drop Down List to select a different Locale.
    </div>
    <smart-gantt-chart view="month"></smart-gantt-chart>
    <div class="options">
      <div class="option">
        <h3>Select locale:</h3>
        <smart-drop-down-list>
          <smart-list-item selected>en</smart-list-item>
          <smart-list-item>de</smart-list-item>
          <smart-list-item>bg</smart-list-item>
          <smart-list-item>fr</smart-list-item>
        </smart-drop-down-list>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gantt = document.querySelector("smart-gantt-chart"),
        dropDown = document.querySelector("smart-drop-down-list");
      gantt.durationUnit = "hour";
      gantt.taskColumns = [
        {
          label: "tasks",
          value: "label",
          size: "60%"
        },
        {
          label: "duration",
          value: "duration",
          formatFunction: date => parseInt(date)
        }
      ];
      //Simple Customization
      gantt.yearFormat = "2-digit";
      gantt.monthFormat = "short";
      gantt.dayFormat = "2-digit";
      gantt.treeSize = "35%";
      //Custom Format Function
      gantt.timelineHeaderFormatFunction = function(date, type) {
        if (type === "month") {
          return date.toLocaleDateString(gantt.locale, {
            month: "long",
            year: "numeric"
          });
        }
        if (type === "year") {
          return date.toLocaleDateString(gantt.locale, {
            year: "numeric"
          });
        }
        if (type === "week") {
          const startDayOfWeek = new Date(date),
            endDateOfWeek = new Date(date);
          endDateOfWeek.setDate(date.getDate() + 6);
          return (
            startDayOfWeek.toLocaleDateString(gantt.locale, {
              day: gantt.dayFormat,
              month: gantt.monthFormat,
              year: gantt.yearFormat
            }) +
            " - " +
            endDateOfWeek.toLocaleDateString(gantt.locale, {
              day: gantt.dayFormat,
              month: gantt.monthFormat,
              year: gantt.yearFormat
            })
          );
        }
        if (type === "day") {
          return date.toLocaleDateString(gantt.locale, {
            day: gantt.dayFormat
          });
        }
        if (type === "hour") {
          return date.toLocaleDateString(gantt.locale, {
            hour: "numeric"
          });
        }
      };
      gantt.dataSource = [
        {
          label: "PRD & User-Stories",
          dateStart: "2021-01-10",
          dateEnd: "2021-02-10",
          class: "product-team",
          type: "task"
        },
        {
          label: "Persona & Journey",
          dateStart: "2021-02-11",
          dateEnd: "2021-03-10",
          class: "marketing-team",
          type: "task"
        },
        {
          label: "Architecture",
          dateStart: "2021-03-11",
          dateEnd: "2021-04-1",
          class: "product-team",
          type: "task"
        },
        {
          label: "Prototyping",
          dateStart: "2021-04-02",
          dateEnd: "2021-05-01",
          class: "dev-team",
          type: "task"
        },
        {
          label: "Design",
          dateStart: "2021-05-02",
          dateEnd: "2021-06-31",
          class: "design-team",
          type: "task"
        },
        {
          label: "Development",
          dateStart: "2021-07-01",
          dateEnd: "2021-08-10",
          class: "dev-team",
          type: "task"
        },
        {
          label: "Testing & QA",
          dateStart: "2021-08-11",
          dateEnd: "2021-09-10",
          class: "qa-team",
          type: "task"
        },
        {
          label: "UAT Test",
          dateStart: "2021-09-12",
          dateEnd: "2021-10-01",
          class: "product-team",
          type: "task"
        },
        {
          label: "Handover & Documentation",
          dateStart: "2021-10-02",
          dateEnd: "2021-11-01",
          class: "marketing-team",
          type: "task"
        },
        {
          label: "Release",
          dateStart: "2021-11-01",
          dateEnd: "2021-12-31",
          class: "release-team",
          type: "task"
        }
      ];
      gantt.messages = {
        en: {
          incorrectArgument:
            "{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",
          outOfBounds:
            "{{elementType}}: Out of bounds argument {{argumentName}} in method {{methodName}}.",
          noId:
            "smartGanttChart requires an id in order to save/load/clear a state.",
          ok: "Ok",
          cancel: "Cancel",
          delete: "Delete",
          confirm:
            "{{componentName}} will be deleted permanently, <b>are you sure? </b>",
          tasks: "Tasks",
          duration: "Duration (hours)"
        },
        de: {
          incorrectArgument:
            "{{elementType}}: Falsches Argument {{argumentName}} in Methode {{methodName}}.",
          outOfBounds:
            "{{elementType}}: Unbegrenztes Argument {{argumentName}} in Methode {{methodName}}.",
          noId:
            "smartGanttChart erfordert eine ID, um einen Zustand speichern / laden / löschen.",
          ok: "Ok",
          cancel: "Stornieren",
          delete: "Löschen",
          confirm:
            "{{componentName}} wird dauerhaft gelöscht, <b>bist du sicher? </b>",
          tasks: "Aufgaben",
          duration: "Dauer (Std)"
        },
        bg: {
          incorrectArgument:
            "{{elementType}}: Невалиден аргумент {{argumentName}} в метод {{methodName}}.",
          outOfBounds:
            "{{elementType}}: Аргументът {{argumentName}} в метод {{methodName}} е извън обхват.",
          noId:
            "smartGanttChart трябва да има id за да може да записва/зарежда/изчиства запазени състояния.",
          ok: "Ok",
          cancel: "Отказ",
          delete: "Изтрий",
          confirm:
            "{{componentName}} ще бъде изтрит завинаги, <b>сигурни ли сте? </b>",
          tasks: "Задачи",
          duration: "Продължителност (часове)"
        },
        fr: {
          incorrectArgument:
            "{{elementType}}: Argument incorrect {{argumentName}} en méthode {{methodName}}.",
          outOfBounds:
            "{{elementType}}: Argument hors limites {{argumentName}} en méthode {{methodName}}.",
          noId:
            "smartGanttChart nécessite un identifiant pour sauvegarder / charger / effacer un état.",
          ok: "D'accord",
          cancel: "Annuler",
          delete: "Effacer",
          confirm:
            "{{componentName}} sera supprimé définitivement, <b>êtes-vous sûr? </b>",
          tasks: "Les tâches",
          duration: "Durée (heures)"
        }
      };
      dropDown.addEventListener("change", function(event) {
        gantt.locale = event.detail.label;
      });
    });
  }
};
</script>

<style>
smart-gantt-chart {
  width: calc(100% - 300px);
  height: auto;
  --smart-gantt-chart-timeline-cell-size: 200px;
}

@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}

smart-gantt-chart .product-team {
  --smart-gantt-chart-task-default-color: rgb(94, 99, 181);
}

smart-gantt-chart .marketing-team {
  --smart-gantt-chart-task-default-color: rgb(43, 195, 190);
}

smart-gantt-chart .dev-team {
  --smart-gantt-chart-task-default-color: rgb(242, 115, 112);
}

smart-gantt-chart .design-team {
  --smart-gantt-chart-task-default-color: rgb(255, 197, 53);
}

smart-gantt-chart .qa-team {
  --smart-gantt-chart-task-default-color: rgb(99, 181, 144);
}

smart-gantt-chart .release-team {
  --smart-gantt-chart-task-default-color: rgb(188, 150, 223);
}
</style>
