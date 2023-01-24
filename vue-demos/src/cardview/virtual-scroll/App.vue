<template>
  <div class="vue-root">
    <div class="demo-description">
      CardView can operate in virtual mode, which greatly reduces the number
      of html elements on the web page and the start-up time when working with
      the component. In this demo, the CardView's data source is 1000 records.
      While you scroll, cards data is updated dynamically by the component depending
      on the scroll position and record index.
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
                virtualDataSourceLength: 1000,
                virtualDataSourceCache: true,
                virtualDataSource: function(resultCallbackFunction, details) {
                  fetch(
                    "https://randomuser.me/api/?results=" +
                      (details.last - details.first + 1),
                    {
                      method: "GET"
                    }
                  )
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(data) {
                      const results = data.results.map(result => {
                        return {
                          picture: result.picture.large,
                          name: result.name.first + " " + result.name.last,
                          email: result.email,
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
                  "email: string",
                  "registered: date"
                ]
              }),
              coverField: "picture",
              coverMode: "fit",
              columns: [
                {
                  label: "Name",
                  dataField: "name"
                },
                {
                  label: "Email",
                  dataField: "email",
                  icon: "email"
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
              scrolling: "virtual",
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
.email:after {
  background-image: url("https://img.icons8.com/ios/16/000000/secured-letter-filled.png");
}

.registered:after {
  background-image: url("https://img.icons8.com/ios/16/000000/calendar-filled.png");
}
</style>
