<template>
  <div class="vue-root">
    <div class="container">
      <smart-tree id="tree"></smart-tree>
      <smart-scheduler id="scheduler"></smart-scheduler>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tree.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        todayDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        rooms = [
          {
            label: "Room 406",
            value: 406,
            dateStart: new Date(currentYear, currentMonth, 26, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 31, 0, 0),
            backgroundColor: "#D50000",
            color: "#ffffff",
          },
          {
            label: "Room 107",
            value: 107,
            dateStart: new Date(currentYear, currentMonth, 23, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 26, 0, 0),
            backgroundColor: "#FFD600",
            color: "#000000",
          },
          {
            label: "Room 212",
            value: 212,
            dateStart: new Date(currentYear, currentMonth, todayDate - 2, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
            backgroundColor: "#00C853",
            color: "#000000",
          },
          {
            label: "Room 309",
            value: 309,
            dateStart: new Date(currentYear, currentMonth, 5, 0, 0),
            dateEnd: new Date(currentYear, currentMonth, 8, 0, 0),
            backgroundColor: "#0091EA",
            color: "#ffffff",
          },
          {
            label: "Room 111",
            selected: true,
            value: 111,
            backgroundColor: "#C51162",
            color: "#000000",
          },
          {
            label: "Room 207",
            value: 207,
            backgroundColor: "#9CCC65",
            color: "#000000",
          },
          {
            label: "Room 208",
            value: 208,
            backgroundColor: "#9E9E9E",
            color: "#000000",
          },
          {
            label: "Room 305",
            value: 305,
            backgroundColor: "#FFD740",
            color: "#000000",
          },
          {
            label: "Room 401",
            value: 401,
            backgroundColor: "#9C27B0",
            color: "#ffffff",
          },
          {
            label: "Room 101",
            value: 101,
            backgroundColor: "#00897B",
            color: "#ffffff",
          },
          {
            label: "Room 102",
            value: 102,
            backgroundColor: "#AB47BC",
            color: "#ffffff",
          },
          {
            label: "Room 103",
            value: 103,
            backgroundColor: "#FDD835",
            color: "#000000",
          },
          {
            label: "Room 204",
            value: 204,
            backgroundColor: "#40C4FF",
            color: "#000000",
          },
          {
            label: "Room 302",
            value: 302,
            backgroundColor: "#1A237E",
            color: "#ffffff",
          },
          {
            label: "Room 408",
            value: 408,
            backgroundColor: "#B2FF59",
            color: "#000000",
          },
          {
            label: "Room 109",
            value: 109,
            backgroundColor: "#EA80FC",
            color: "#000000",
          },
        ],
        data = rooms.filter((i, index) => index < 5),
        treeData = [
          {
            label: "Hotel All Seasons",
            expanded: true,
            items: rooms.filter((i, index) => index > 4),
          },
        ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties

              dataSource: data,
              view: "month",
              views: ["month", "timelineMonth"],
            };
          }
        }
      );
      window.Smart(
        "#tree",
        class {
          get properties() {
            return {
              //Properties
              allowDrag: true,
              allowDrop: true,
              sorted: true,
              dataSource: treeData,
            };
          }
        }
      );

      const tree = document.querySelector("smart-tree"),
        scheduler = document.querySelector("smart-scheduler");
      tree.addEventListener("dragStart", function (event) {
        if (event.detail.item instanceof window.Smart.TreeItemsGroup) {
          event.preventDefault();
        }
      });
      tree.addEventListener("dragEnd", function (event) {
        const item = event.detail.item,
          schedulerCell = event.detail.target.closest(".smart-scheduler-cell");
        if (!schedulerCell) {
          return;
        }
        const cellDateRange = scheduler.getCellDateRange(schedulerCell),
          colorData = rooms.find((r) => r.value === item.value);
        if (scheduler.contains(schedulerCell)) {
          scheduler.insertEvent({
            label: item.label,
            value: item.value,
            dateStart: cellDateRange.dateStart,
            dateEnd: cellDateRange.dateEnd,
            backgroundColor: colorData.backgroundColor,
            color: colorData.color,
          });
          tree.removeItem(item);
        }
      });
      scheduler.addEventListener("dragEnd", function (event) {
        const item = event.detail.item,
          target = event.detail.target;
        if (!tree.contains(event.detail.target) && tree !== target) {
          return;
        }
        scheduler.removeEvent(item);
        tree.insert(
          {
            label: item.label,
            value: item.value,
          },
          "0.1"
        );
      });
    });
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% minmax(0, 1fr);
  grid-column-gap: 10px;
}

.smart-scheduler {
  height: 100vh;
  --smart-scheduler-view-item-size: 100px;
}

.smart-tree {
  width: 100%;
  height: 100%;
}

#app,
.vue-root {
  height: 100%;
}
</style>
