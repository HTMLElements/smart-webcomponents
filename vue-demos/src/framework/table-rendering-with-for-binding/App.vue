<template>
    <div class="vue-root">
        <div class="demo-description">The Table is rendered by using 'smart-for' loop data bound to model.</div>
        <table id="customers">
            <tr smart-for="columns">
                <th>[[value]]</th>
            </tr>
            <tr smart-for-self smart-for="rows">
                <td>[[id]]</td>
                <td>[[firstName]]</td>
                <td>[[lastName]]</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/smart.element.js";
import "smart-webcomponents/source/smart.core.js";

export default {
    name: "app",
    setup() {
        onMounted(() => {
            new window.App({
                data: {
                    columns: [
                        'ID',
                        'First Name',
                        'Last Name'
                    ],
                    rows: [{
                            id: 1,
                            firstName: "Peter",
                            lastName: "Johnes"
                        },
                        {
                            id: 2,
                            firstName: "Michael",
                            lastName: "Roberts"
                        },
                        {
                            id: 3,
                            firstName: "Nancy",
                            lastName: "Davolio"
                        },
                        {
                            id: 4,
                            firstName: "Thomas",
                            lastName: "Purdy"
                        },
                        {
                            id: 5,
                            firstName: "John",
                            lastName: "Wilkinson"
                        }
                    ]
                }
            });
        })
    }
}
</script>

<style>
#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#customers tr:hover {
    background-color: #ddd;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}
</style>
