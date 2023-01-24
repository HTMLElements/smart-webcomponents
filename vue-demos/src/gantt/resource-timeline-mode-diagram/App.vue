<template>
  <div class="vue-root">
    <p>
      <b>Description:</b>The resource Timeline displays the working time of
      the poeple that have tasks assigned. The capacity of each resource represents
      the working hours of a person on a task.
    </p>
    <p>The workload represents the total working time in hours of a resource.</p>
    <p>
      Clicking on a resource from the Resource Tree will highlight the tasks
      ( inside the TaskTree) that are assigned to that resource. The same goes
      for the tasks inside the Task tree.
    </p>
    <smart-gantt-chart id="ganttChart"></smart-gantt-chart>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.ganttchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#ganttChart",
        class {
          get properties() {
            return {
              dataSource: [
                {
                  label: "Development",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  tasks: [
                    {
                      label: "User Interface Design",
                      dateStart: "2020-02-01",
                      dateEnd: "2020-02-10",
                      progress: 50,
                      resources: [
                        {
                          id: "megan",
                          label: "Megan"
                        }
                      ]
                    },
                    {
                      label: "Controllers & Event",
                      dateStart: "2020-02-10",
                      dateEnd: "2020-02-20",
                      progress: 25,
                      type: "task",
                      resources: "megan"
                    },
                    {
                      label: "Database Connectivity",
                      dateStart: "2020-02-20",
                      dateEnd: "2020-03-01",
                      progress: 50,
                      type: "task",
                      resources: [
                        {
                          id: "taylor",
                          label: "Taylor"
                        }
                      ]
                    },
                    {
                      label: "Request & Response",
                      dateStart: "2020-03-01",
                      dateEnd: "2020-03-10",
                      type: "task",
                      resources: "taylor"
                    }
                  ]
                },
                {
                  label: "Quality Assurance",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  tasks: [
                    {
                      label: "User Interaction Testing",
                      dateStart: "2020-03-11",
                      dateEnd: "2020-03-20",
                      progress: 90,
                      type: "task",
                      resources: [
                        {
                          id: "chris",
                          label: "Chris"
                        }
                      ]
                    },
                    {
                      label: "Load and Stress Testing",
                      dateStart: "2020-03-21",
                      dateEnd: "2020-03-31",
                      progress: 45,
                      type: "task",
                      resources: "taylor"
                    }
                  ]
                },
                {
                  label: "Deployment",
                  synchronized: true,
                  expanded: true,
                  disableResources: true,
                  type: "project",
                  tasks: [
                    {
                      label: "URL Acquiring",
                      dateStart: "2020-02-10",
                      dateEnd: "2020-02-20",
                      type: "task",
                      resources: "chris"
                    },
                    {
                      label: "Server Cost & Maintanance",
                      dateStart: "2020-02-15",
                      dateEnd: "2020-02-20",
                      progress: 75,
                      type: "task",
                      resources: [
                        {
                          id: "david",
                          label: "David"
                        }
                      ]
                    },
                    {
                      label: "Backup & Security",
                      dateStart: "2020-02-21",
                      dateEnd: "2020-03-01"
                    },
                    {
                      label: "Updates",
                      dateStart: "2020-03-03",
                      dateEnd: "2020-03-10",
                      resources: [
                        {
                          id: "maria",
                          label: "Maria"
                        }
                      ]
                    }
                  ]
                }
              ],
              taskColumns: [
                {
                  label: "Name",
                  value: "label",
                  size: "40%"
                },
                {
                  label: "From",
                  value: "dateStart",
                  size: "20%"
                },
                {
                  label: "To",
                  value: "dateEnd",
                  size: "20%"
                },
                {
                  label: "Owner",
                  value: "resources"
                }
              ],
              resourceColumns: [
                {
                  label: "Name",
                  value: "label",
                  size: "40%"
                },
                {
                  label: "Completion",
                  value: "progress",
                  formatFunction: data => data + "%",
                  size: "20%"
                },
                {
                  label: "Workload",
                  value: "workload",
                  formatFunction: data => data + "h",
                  size: "20%"
                }
              ],
              treeMin: "30%",
              resourcePanelSize: 150,
              view: "week",
              nonworkingDays: [0, 6],
              timelineHeaderFormatFunction: function(
                date,
                type,
                isHeaderDetailsContainer
              ) {
                const gantt = document.querySelector("smart-gantt-chart");
                if (isHeaderDetailsContainer) {
                  return `Week ${ISO8601_week_no(
                    date
                  )}, ${date.toLocaleDateString(gantt.locale, {
                    year: "2-digit"
                  })}`;
                } else {
                  return date.toLocaleDateString(gantt.locale, {
                    weekday: "short"
                  });
                }
              }
            };
          }
        }
      );
      //W3C Standard function for week numbers
      function ISO8601_week_no(date) {
        let toDate = new Date(date.valueOf());
        const dayNumber = (date.getDay() + 6) % 7;
        toDate.setDate(toDate.getDate() - dayNumber + 3);
        const firstThursday = toDate.valueOf();
        toDate.setMonth(0, 1);
        if (toDate.getDay() !== 4) {
          toDate.setMonth(0, 1 + ((4 - toDate.getDay() + 7) % 7));
        }
        return 1 + Math.ceil((firstThursday - toDate.valueOf()) / 604800000);
      }
    });
  }
};
</script>

<style>
smart-gantt-chart {
  height: auto;
}

@media (max-width: 700px) {
  smart-gantt-chart {
    width: 95%;
    margin-left: 2%;
  }
}
</style>
