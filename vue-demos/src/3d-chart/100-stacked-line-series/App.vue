<template>
  <div class="vue-root">
    <div class="container">
      <smart-3d-chart id="chart"></smart-3d-chart>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.3dchart.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const source = [
  {
    Day: 'Jan',
    Website1: {
      Referral: 800,
      Paid: 500,
      Organic: 1400,
    },
    Website2: {
      Referral: 1000,
      Paid: 600,
      Organic: 1600,
    }
  },
  {
    Day: 'Feb',
    Website1: {
      Referral: 1000,
      Paid: 600,
      Organic: 1200,
    },
    Website2: {
      Referral: 800,
      Paid: 650,
      Organic: 1700,
    }
  },
  {
    Day: 'Mar',
    Website1: {
      Referral: 1200,
      Paid: 700,
      Organic: 1000,
    },
    Website2: {
      Referral: 1600,
      Paid: 1600,
      Organic: 1200,
    }
  },
  {
    Day: 'Apr',
    Website1: {
      Referral: 1400,
      Paid: 800,
      Organic: 800,
    },
    Website2: {
      Referral: 1000,
      Paid: 600,
      Organic: 1600,
    }
  },


];

Smart(
  '#chart',
  class {
    get properties() {
      return {
        caption: 'Interent Traffic Sources',
        description: 'Visitors by source for two websites',
        showLegend: false,
        legendLayout: {
          flow: 'horizontal',
        },
        cameraPosition: {
          x: 15,
          y: 30,
          z: 70,
        },
        dataSource: source,
        colorScheme: 'scheme05',
        xAxis: {
          dataField: 'Day',
        },
        valueAxis: {
          formatSettings: {
            prefix: '$',
          }
        },
        seriesGroups: [
          {
            type: 'stackedline100',
            dataField: 'Website1',
            displayText: 'Website #1',
            series: [
              {
                dataField: 'Referral',
                displayText: 'Referral Traffic',
              },
              {
                dataField: 'Paid',
                displayText: 'Paid Search Traffic',
              },
              {
                dataField: 'Organic',
                displayText: 'Organic Search Traffic',
              },
            ],
          },
          {
            type: 'stackedline100',
            dataField: 'Website2',
            displayText: 'Website #2',
            series: [
              {
                dataField: 'Referral',
                displayText: 'Referral Traffic',
              },
              {
                dataField: 'Paid',
                displayText: 'Paid Search Traffic',
              },
              {
                dataField: 'Organic',
                displayText: 'Organic Search Traffic',
              },
            ],
          },
        ],
      };
    }
  }
);

    });
  },
};
</script>
<style>
#chart {
  width: 80%;
  max-width: 1000px;
  height: 600px;
}
</style>