<template>
  <div class="vue-root">
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="description">
        <p>A Scheduler with 100 000 events loaded</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        currentYear = today.getFullYear(),
        colors = [
          "#D50000",
          "#E67C73",
          "#F4511E",
          "#F6BF26",
          "#33B679",
          "#0B8043",
          "#039BE5",
          "#3F51B5",
          "#7986CB",
          "#8E24AA",
          "#616161",
        ],
        labels = [
          "Quarterly Project Review Meeting",
          "IT Group Mtg",
          "New Projects Planning",
          "Interview with James",
          "Interview with Nancy",
        ];
	  let data = [];
	  
      //Load 100 000 events
      for (let i = 0; i < 100000; i++) {
        const year = Math.round(
            Math.random() * (currentYear + 5 - currentYear) + currentYear
          ),
          month = Math.round(Math.random() * 12),
          day = Math.round(Math.random() * 31),
          offset = Math.round(Math.random() * 5);
        data.push({
          label: labels[Math.round(Math.random() * 4)],
          dateStart: new Date(year, month, day),
          dateEnd: new Date(year, month, day + offset),
          backgroundColor: colors[Math.round(Math.random() * 10)],
        });
	  }
	  
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "month",
              views: [
                "day",
                "week",
                "month",
                "timelineDay",
                "timelineWeek",
                "timelineMonth",
                "agenda",
              ],
              dataSource: data,
              hourStart: 7,
              hourEnd: 19,
              firstDayOfWeek: 1
            };
          }
        }
      )
    })
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.smart-scheduler {
  width: calc(100% - 260px);
  height: 100%;
  --smart-scheduler-timeline-cell-height: 50px;
}

@media (max-width: 750px) {
  .smart-scheduler {
    width: 100%;
  }
}

#app,
.vue-root {
  height: 100%;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 260px;
}

@media (max-width: 750px) {
  .options {
    position: relative;
    top: 30px;
    width: 240px;
    margin: 0 auto;
  }
}

.options {
  box-sizing: border-box;
}
</style>
