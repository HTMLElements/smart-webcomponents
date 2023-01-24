<template>
  <div class="vue-root">
    <h3>Remote Filtering</h3>
    <label>Enter a filtering string(e.x. london)</label>
    <br />
    <br />
    <smart-list-box filterable id="listBox" filter-input-placeholder="Enter:"></smart-list-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const listBox = document.querySelector("smart-list-box");
      listBox.remoteFilteringDetails = {
        url: "../misc/customers.txt",
        success: function(filterQuery, items) {
          setTimeout(function() {
            console.log(items);
            if (!filterQuery) {
              listBox.dataSource = [];
              listBox.displayLoadingIndicator = false;
              return;
            }
            for (let i = 0; i < items.length; i++) {
              if (
                items[i].City.toLowerCase().indexOf(
                  filterQuery.toLowerCase()
                ) !== 0
              ) {
                items[i] = undefined;
              }
            }
            items = items.filter(item => item !== undefined);
            listBox.displayMember = "CompanyName";
            listBox.valueMember = "CustomerID";
            listBox.displayLoadingIndicator = false;
            listBox.dataSource = items;
          }, 500);
        },
        error: function() {
          //error
          console.log("Error");
        }
      };
    });
  }
};
</script>

<style>
smart-list-box {
  width: 300px;
  height: 500px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
</style>
