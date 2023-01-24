<template>
  <div class="vue-root">
    <div class="demo-description">
      The Infinite scroll feature of the CardView allows you to load additional
      data records on demand, when you scroll to the bottom.
    </div>
    <smart-card-view id="cardView"></smart-card-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.card.js";
import "smart-webcomponents/source/modules/smart.cardview.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#cardView",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                virtualDataSource: function(resultCallbackFunction) {
                  fetch("https://randomuser.me/api/?results=20", {
                    method: "GET"
                  })
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(data) {
                      const results = data.results.map(result => {
                        return {
                          picture: result.picture.large,
                          name: result.name.first + " " + result.name.last,
                          nationality: result.nat,
                          phone: result.phone,
                          registered: new Date(result.registered.date)
                        };
                      });
                      resultCallbackFunction({
                        dataSource: results
                      });
                    });
                },
                dataFields: [
                  "picture: string",
                  "name: string",
                  "nationality: string",
                  "phone: string",
                  "registered: date"
                ]
              }),
              cellOrientation: "horizontal",
              coverField: "picture",
              coverMode: "fit",
              columns: [
                {
                  label: "Name",
                  dataField: "name"
                },
                {
                  label: "Nationality",
                  dataField: "nationality",
                  icon: "nationality",
                  formatFunction: function(settings) {
                    settings.template = `<span class="flag-icon flag-icon-${settings.value.toLowerCase()}"></span>`;
                  }
                },
                {
                  label: "Phone",
                  dataField: "phone",
                  icon: "phone"
                },
                {
                  label: "Registered",
                  dataField: "registered",
                  icon: "registered",
                  formatSettings: {
                    formatString: "d"
                  }
                },
                {
                  label: "Picture",
                  dataField: "picture",
                  image: true
                }
              ],
              scrolling: "infinite",
              titleField: "name"
            };
          }
        }
      );
    });
  }
};
</script>

<style>
.nationality:after {
  background-image: url("https://img.icons8.com/ios/16/000000/flag-of-europe.png");
}

.phone:after {
  background-image: url("https://img.icons8.com/ios/16/000000/phone.png");
}

.registered:after {
  background-image: url("https://img.icons8.com/ios/16/000000/calendar-filled.png");
}
</style>
