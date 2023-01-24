<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>smartGrid with Firestore DB</h1>
      <p>
        This example shows how to fetch data from Google's Firestore Database
        and load it to the Grid
      </p>
    </div>
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              layout: {
                rowHeight: 50
              },
              columns: [
                {
                  label: "Photo",
                  dataField: "Photo",
                  width: 50,
                  cellsVerticalAlign: "middle",
                  verticalAlign: "middle",
                  align: "center",
                  cellsAlign: "center",
                  formatFunction(settings) {
                    settings.template =
                      '<img width="32" src="' +
                      "../../../images/phonebook/" +
                      settings.row.data.firstName.toLowerCase() +
                      '.png"/>';
                  }
                },
                {
                  label: "First Name",
                  dataField: "firstName"
                },
                {
                  label: "Last Name",
                  dataField: "lastName"
                },
                {
                  label: "Title",
                  dataField: "title",
                  width: 150
                },
                {
                  label: "Notes",
                  dataField: "notes",
                  align: "center",
                  cellsAlign: "center",
                  width: 70
                },
                {
                  label: "City",
                  dataField: "city"
                },
                {
                  label: "Country",
                  width: 70,
                  cellsAlign: "center",
                  align: "center",
                  dataField: "country"
                },
                {
                  label: "Phone",
                  dataField: "homePhone",
                  template: '<a href="#{{value}}">{{value}}</a>'
                }
              ]
            };
          }
        }
      );
      //Connect to Firebase DB
      function connectionToDB() {
        //FireBase loaded from CDN
        const firebase = window.firebase;
        // Initialize Cloud Firestore through Firebase
        firebase.initializeApp({
          apiKey: "AIzaSyCHSo2msEA5qbe2kFZW0GBBFeKiHXb_p7k",
          authDomain: "my-firestore-app-89af3.firebaseapp.com",
          databaseURL: "https://my-firestore-app-89af3.firebaseio.com",
          projectId: "my-firestore-app-89af3"
        });
      }
      //Load the Data from the DB
      function loadDataFromDB() {
        const db = window.firebase.firestore();
        db.collection("employees")
          .get()
          .then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => data.push(doc.data()));
            const grid = document.querySelector("smart-grid");
            grid.dataSource = new window.Smart.DataAdapter({
              dataSource: data,
              dataFields: [
                "id: string",
                "firstName: string",
                "lastName: string",
                "title: string",
                "notes: string",
                "city: string",
                "country: string",
                "homePhone: string"
              ]
            });
          });
      }

      connectionToDB();
      loadDataFromDB();
    });
  }
};
</script>

<style>
smart-grid {
  height: auto;
}
</style>
