<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Server-Side Pagination, Sort, Filter with MySQL and PHP</h1>
      Data in this demo is loaded on demand from MySql Database and especially
      the 'Customers' table of the Northwind Database. Server request is made
      when you change Page, Sort, Filter or expand a Group. This is achieved by
      using the Table's Data Virtualization in combination with DataAdapter's
      "virtualDataSource".
      <ul>
        <li>
          Paging is enabled by setting the property <strong>paging</strong> to
          <em>true</em>.
        </li>
        <li>
          Filtering is enabled by setting the properties
          <strong>filtering</strong> and <strong>filterRow</strong> to
          <em>true</em>.
        </li>
        <li>
          Sorting is enabled by setting the property
          <strong>sortMode</strong> to <em>'one'</em>.
        </li>
        <li>
          The number of rows returned per request is set to 10, which is equal
          to <strong>pageSize</strong>.
        </li>
        <li>
          The 'query' in the data request is used by the server to perform
          pagination, sorting and filtering.
        </li>
      </ul>
    </div>
    <smart-table id="table"></smart-table>
    <br />
    <br />
    <h3>SQL Query</h3>
    <div id="query"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#table",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                virtualDataSource: function (resultCallbackFunction, details) {
                  const sqlQuery = details.query;
                  window.query.innerHTML =
                    "SELECT CompanyName, ContactName, ContactTitle, Country, Address, City FROM Customers" +
                    sqlQuery["where"] +
                    sqlQuery["groupBy"] +
                    sqlQuery["orderBy"] +
                    sqlQuery["limit"];
                  new window.Smart.Ajax(
                    {
                      url: "grid_data.php",
                      dataSourceType: "json",
                      data: details.query,
                    },
                    (response) => {
                      resultCallbackFunction({
                        dataSource: JSON.parse(response.data),
                        virtualDataSourceLength: parseInt(response.length),
                      });
                    }
                  );
                },
                dataFields: [
                  "CompanyName: string",
                  "ContactName: string",
                  "ContactTitle: string",
                  "Address: string",
                  "City: string",
                  "Country: string",
                ],
              }),
              filtering: true,
              filterRow: true,
              sortMode: "one",
              paging: true,
              columns: [
                {
                  label: "Company Name",
                  dataField: "CompanyName",
                },
                {
                  label: "Contact Name",
                  dataField: "ContactName",
                },
                {
                  label: "Contact Title",
                  dataField: "ContactTitle",
                },
                {
                  label: "Address",
                  dataField: "Address",
                },
                {
                  label: "City",
                  dataField: "City",
                },
                {
                  label: "Country",
                  dataField: "Country",
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
</style>
