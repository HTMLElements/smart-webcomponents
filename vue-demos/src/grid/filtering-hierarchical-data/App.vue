<template>
  <div class="vue-root">
    <div class="demo-description">
      DataGrid supports Filtering of hierarchical data. When a child element
      is visible, all its ancestors should also be visible. The filter applied
      to the DataGrid is [ 'FirstName', 'contains Michael or contains Nancy'
      ], which means it will display all records with 'FirstName' equal to 'Michael'
      or 'Nancy'. As 'Michael' and 'Nancy' are sub-records of 'Andrew' and 'Steven',
      they are displayed in the view.
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
              dataSource: new window.Smart.DataAdapter({
                dataSource: [
                  {
                    EmployeeID: 1,
                    FirstName: "Nancy",
                    LastName: "Davolio",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Sales Representative",
                    HireDate: "1992-05-01 00:00:00",
                    BirthDate: "1948-12-08 00:00:00",
                    City: "Seattle",
                    Address: "507 - 20th Ave. E.Apt. 2A"
                  },
                  {
                    EmployeeID: 2,
                    FirstName: "Andrew",
                    LastName: "Fuller",
                    ReportsTo: null,
                    Country: "USA",
                    Title: "Vice President, Sales",
                    HireDate: "1992-08-14 00:00:00",
                    BirthDate: "1952-02-19 00:00:00",
                    City: "Tacoma",
                    Address: "908 W. Capital Way"
                  },
                  {
                    EmployeeID: 3,
                    FirstName: "Janet",
                    LastName: "Leverling",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Sales Representative",
                    HireDate: "1992-04-01 00:00:00",
                    BirthDate: "1963-08-30 00:00:00",
                    City: "Kirkland",
                    Address: "722 Moss Bay Blvd."
                  },
                  {
                    EmployeeID: 4,
                    FirstName: "Margaret",
                    LastName: "Peacock",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Sales Representative",
                    HireDate: "1993-05-03 00:00:00",
                    BirthDate: "1937-09-19 00:00:00",
                    City: "Redmond",
                    Address: "4110 Old Redmond Rd."
                  },
                  {
                    EmployeeID: 5,
                    FirstName: "Steven",
                    LastName: "Buchanan",
                    ReportsTo: 2,
                    Country: "UK",
                    Title: "Sales Manager",
                    HireDate: "1993-10-17 00:00:00",
                    BirthDate: "1955-03-04 00:00:00",
                    City: "London",
                    Address: "14 Garrett Hill"
                  },
                  {
                    EmployeeID: 6,
                    FirstName: "Michael",
                    LastName: "Suyama",
                    ReportsTo: 5,
                    Country: "UK",
                    Title: "Sales Representative",
                    HireDate: "1993-10-17 00:00:00",
                    BirthDate: "1963-07-02 00:00:00",
                    City: "London",
                    Address: "Coventry House Miner Rd."
                  },
                  {
                    EmployeeID: 7,
                    FirstName: "Robert",
                    LastName: "King",
                    ReportsTo: 5,
                    Country: "UK",
                    Title: "Sales Representative",
                    HireDate: "1994-01-02 00:00:00",
                    BirthDate: "1960-05-29 00:00:00",
                    City: "London",
                    Address: "Edgeham Hollow Winchester Way"
                  },
                  {
                    EmployeeID: 8,
                    FirstName: "Laura",
                    LastName: "Callahan",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Inside Sales Coordinator",
                    HireDate: "1994-03-05 00:00:00",
                    BirthDate: "1958-01-09 00:00:00",
                    City: "Seattle",
                    Address: "4726 - 11th Ave. N.E."
                  },
                  {
                    EmployeeID: 9,
                    FirstName: "Anne",
                    LastName: "Dodsworth",
                    ReportsTo: 5,
                    Country: "UK",
                    Title: "Sales Representative",
                    HireDate: "1994-11-15 00:00:00",
                    BirthDate: "1966-01-27 00:00:00",
                    City: "London",
                    Address: "7 Houndstooth Rd."
                  }
                ],
                keyDataField: "EmployeeID",
                parentDataField: "ReportsTo",
                id: "EmployeeID",
                dataFields: [
                  "EmployeeID: number",
                  "ReportsTo: number",
                  "FirstName: string",
                  "LastName: string",
                  "Country: string",
                  "City: string",
                  "Address: string",
                  "Title: string",
                  "HireDate: date",
                  "BirthDate: date"
                ]
              }),
              sorting: {
                enabled: true
              },
              filtering: {
                enabled: true,
                filter: [
                  ["firstName", "contains Andrew or contains Nancy"],
                  ["quantity", ">= 3 and <= 8"]
                ]
              },
              behavior: {
                columnResizeMode: "growAndShrink"
              },
              onRowInit: function(index, row) {
                if (row.id === 2) {
                  row.expanded = true;
                }
              },
              columns: [
                {
                  label: "First Name",
                  dataField: "FirstName",
                  width: 200
                },
                {
                  label: "Last Name",
                  dataField: "LastName",
                  width: 200
                },
                {
                  label: "Title",
                  dataField: "Title",
                  width: 160
                },
                {
                  label: "Birth Date",
                  dataField: "BirthDate",
                  cellsFormat: "d",
                  width: 120
                },
                {
                  label: "Hire Date",
                  dataField: "HireDate",
                  cellsFormat: "d",
                  width: 120
                },
                {
                  label: "Address",
                  dataField: "Address",
                  width: 250
                },
                {
                  label: "City",
                  dataField: "City",
                  width: 120
                },
                {
                  label: "Country",
                  dataField: "Country"
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
smart-grid {
  height: auto;
  width: 100%;
}
</style>
