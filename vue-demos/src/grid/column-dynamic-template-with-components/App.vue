<template>
  <div class="vue-root">
    <div class="demo-description">
      The example show how to render Custom Elements in Grid Cells initialized
      with Javascript. That is achieved by using the 'template' property of a
      Grid column.
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
      (function Data() {
        const csvData = `Order ID,Month,Customer,Region,State,City,Salesperson,Payment Method,Category,Product Name,Unit Price,Quantity,Revenue,Shipping Cost
1001,January,Company E,Northeast,New York,New York City,Laszlo Horvath,Visa,Condiments,Ketchup,5.45,500,2725,27.69
1002,January,Company D,South,Texas,Dallas,Laura Simpson,Mastercard,Condiments,BBQ Sauce,7.65,750,5737.5,38.73
1003,January,Company C,Midwest,Ohio,Cincinnati,Marcus Kowalski,Visa,Condiments,Mustard,1.85,250,462.5,15.08
1004,January,Company A,West,Montana,Billings,Marina Rossi,Visa,Breakfast Cereals,Corn Flakes,3.95,600,2370,25.7
1005,January,Company A,West,California,San Francisco,Nancy Hart,Mastercard,Confectionery,Nougat Bar,2.95,1250,3687.5,40.01
1006,January,Company D,Midwest,Ohio,Cincinnati,Michael Fisher,Mastercard,Soups,Tomato Soup,1.8,600,1080,21.07
1007,January,Company C,Northeast,Pennsylvania,Harrisburg,Marina Rossi,Mastercard,Bakery,Banana Cake,9.65,500,4825,30.22
1008,January,Company A,Midwest,Wisconsin,Green Bay,Marcus Kowalski,Visa,Confectionery,Chocolate Bar,1.99,2250,4477.5,42.43
1009,January,Company D,South,Texas,Dallas,Andrew Spacey,Mastercard,Condiments,Ketchup,5.45,750,4087.5,37.03
1010,January,Company C,South,Florida,Jacksonville,Laszlo Horvath,Visa,Breakfast Cereals,Corn Flakes,3.95,400,1580,26.86
1011,January,Company D,Northeast,New York,Albany,Laszlo Horvath,Mastercard,Bakery,Chocolate Biscuits,5.25,500,2625,29.02
1012,January,Company B,Northeast,Connecticut,Bridgeport,Michael Fisher,Visa,Bakery,Croissant,2.95,1000,2950,37.98
1013,January,Company E,Northeast,Connecticut,Bridgeport,Marcus Kowalski,Visa,Bakery,Chocolate Biscuits,5.25,250,1312.5,19.69
1014,January,Company C,South,North Carolina,Greensboro,Laszlo Horvath,Visa,Fruit Preserves,Apple Jam,3.95,750,2962.5,37.9
1015,January,Company B,West,Montana,Sidney,Laura Simpson,Visa,Fruit Preserves,Marmelade,4.5,400,1800,24.79
1016,January,Company A,Northeast,New York,Albany,Nancy Hart,Visa,Soups,Chicken Noodle Soup,2.2,400,880,19.84
1017,January,Company E,Northeast,New Jersey,Atlantic City,Laura Simpson,Visa,Soups,Chicken Noodle Soup,2.2,250,550,18.08
1018,January,Company C,South,North Carolina,Greensboro,Andrew Spacey,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,250,1125,21.84
1019,January,Company C,Northeast,New York,Albany,Nancy Hart,Visa,Bakery,Croissant,2.95,500,1475,27.1
1020,January,Company C,West,Washington,Seattle,Andrew Spacey,Visa,Breakfast Cereals,Cookie Crisp,6.25,250,1562.5,19.72
1021,January,Company B,West,California,Los Angeles,John Weber,Visa,Bakery,Apple Cake,10.25,400,4100,25.83
1022,January,Company C,West,Montana,Billings,Nancy Hart,Visa,Soups,Tomato Soup,1.8,400,720,21.89
1023,January,Company D,South,Texas,Dallas,John Weber,Mastercard,Confectionery,Chocolate Bar,1.99,2500,4975,56.47
1024,January,Company D,West,California,San Francisco,Marcus Kowalski,Mastercard,Breakfast Cereals,Cinnamon Flakes,4.5,400,1800,25.04
1025,January,Company E,Northeast,New Jersey,Newark,Marina Rossi,Visa,Soups,Tomato Soup,1.8,250,450,18.54
1026,January,Company A,Northeast,Pennsylvania,Philadelphia,Ann Larson,Mastercard,Confectionery,Chocolate Bar,1.99,2000,3980,51.81
1027,February,Company D,Northeast,New Jersey,Atlantic City,Robert Cole,Mastercard,Bakery,Apple Cake,10.25,500,5125,31.57
1028,February,Company D,Northeast,Pennsylvania,Harrisburg,Robert Cole,Mastercard,Confectionery,Chocolate Bar,1.99,1750,3482.5,47.27
1029,February,Company A,Midwest,Michigan,Detroit,Marcus Kowalski,Visa,Soups,Tomato Soup,1.8,500,900,20.97
1030,February,Company E,Northeast,New York,New York City,Andrew Spacey,Visa,Soups,Tomato Soup,1.8,1500,2700,42.58
1031,February,Company D,Northeast,New Jersey,Newark,Laura Simpson,Mastercard,Breakfast Cereals,Cookie Crisp,6.25,200,1250,19.29
1032,February,Company E,Northeast,Pennsylvania,Harrisburg,Nancy Hart,Mastercard,Confectionery,Chocolate Bar,1.99,2000,3980,50.26
1033,February,Company A,South,Florida,Jacksonville,Nancy Hart,Visa,Confectionery,Nougat Bar,2.95,1000,2950,37.58
1034,February,Company A,Northeast,New York,New York City,Michael Fisher,Visa,Soups,Chicken Noodle Soup,2.2,400,880,20.54
1035,February,Company A,South,Texas,Houston,Robert Cole,Visa,Soups,Chicken Noodle Soup,2.2,250,550,20.91
1036,February,Company B,Northeast,New York,Albany,John Weber,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,500,2250,26.01
1037,February,Company C,South,North Carolina,Greensboro,Nancy Hart,Visa,Bakery,Croissant,2.95,500,1475,29.24
1038,February,Company C,South,Louisiana,New Orleans,Nancy Hart,Visa,Fruit Preserves,Marmelade,4.5,500,2250,32.16
1039,February,Company B,South,Florida,Jacksonville,Ann Larson,Visa,Bakery,Croissant,2.95,900,2655,39.62
1040,February,Company C,Midwest,Michigan,Detroit,Nancy Hart,Mastercard,Condiments,Ketchup,5.45,750,4087.5,27.46
1041,February,Company A,Midwest,Illinois,Chicago,Michael Fisher,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,100,450,11.12
1042,February,Company D,West,California,Los Angeles,Laura Simpson,Mastercard,Condiments,BBQ Sauce,7.65,250,1912.5,21.1
1043,February,Company B,South,South Carolina,Columbia,John Weber,Visa,Confectionery,Nougat Bar,2.95,750,2212.5,36.98
1044,March,Company A,South,Texas,Dallas,Nancy Hart,Visa,Condiments,BBQ Sauce,7.65,500,3825,34.26
1045,March,Company B,Midwest,Illinois,Chicago,Andrew Spacey,Visa,Breakfast Cereals,Corn Flakes,3.95,1000,3950,30.18
1046,March,Company A,West,California,Los Angeles,Michael Fisher,Visa,Bakery,Chocolate Biscuits,5.25,750,3937.5,30.95
1047,March,Company E,South,Louisiana,New Orleans,Marcus Kowalski,Visa,Fruit Preserves,Apple Jam,3.95,500,1975,30.79
1048,March,Company A,Northeast,Connecticut,Bridgeport,Marina Rossi,Visa,Confectionery,Nougat Bar,2.95,1000,2950,37.29
1049,March,Company C,South,Texas,Houston,Robert Cole,Visa,Fruit Preserves,Marmelade,4.5,200,900,20.35
1050,March,Company C,South,North Carolina,Greensboro,Michael Fisher,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,500,2250,30.93
1051,March,Company E,Midwest,Wisconsin,Green Bay,Nancy Hart,Mastercard,Bakery,Banana Cake,9.65,750,7237.5,26.94
1052,March,Company B,South,Florida,Miami,Laszlo Horvath,Visa,Bakery,Apple Cake,10.25,1250,12812.5,50.39
1053,March,Company C,South,Louisiana,New Orleans,Ann Larson,Visa,Condiments,Ketchup,5.45,1000,5450,34.02
1054,March,Company D,West,Washington,Seattle,Andrew Spacey,Mastercard,Confectionery,Chocolate Bar,1.99,1250,2487.5,38.56
1055,March,Company E,South,Texas,Dallas,Michael Fisher,Visa,Breakfast Cereals,Cookie Crisp,6.25,150,937.5,18.4
1056,March,Company E,West,California,Sacramento,Laura Simpson,Visa,Fruit Preserves,Apple Jam,3.95,600,2370,28.13
1057,March,Company E,Northeast,Connecticut,Hartford,John Weber,Visa,Condiments,Mustard,1.85,200,370,14.85
1058,March,Company E,West,California,Los Angeles,Laura Simpson,Visa,Soups,Chicken Noodle Soup,2.2,200,440,16.2
1059,March,Company A,West,Montana,Billings,Ann Larson,Visa,Soups,Tomato Soup,1.8,1250,2250,37.3
1060,March,Company B,Northeast,Connecticut,Hartford,Ann Larson,Visa,Bakery,Croissant,2.95,1250,3687.5,42.44
1061,April,Company D,Northeast,New York,New York City,Andrew Spacey,Mastercard,Confectionery,Chocolate Bar,1.99,1000,1990,36.71
1062,April,Company E,Northeast,Pennsylvania,Philadelphia,Laura Simpson,Mastercard,Bakery,Banana Cake,9.65,1000,9650,44.02
1063,April,Company A,West,Montana,Billings,Nancy Hart,Visa,Bakery,Banana Cake,9.65,250,2412.5,22.06
1064,April,Company D,South,Texas,Dallas,Robert Cole,Mastercard,Condiments,BBQ Sauce,7.65,500,3825,31.62
1065,April,Company B,South,Texas,Dallas,Ann Larson,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,250,1125,22.77
1066,April,Company E,South,Texas,Houston,Marina Rossi,Mastercard,Bakery,Apple Cake,10.25,1000,10250,49.48
1067,April,Company D,Northeast,Pennsylvania,Philadelphia,Ann Larson,Mastercard,Confectionery,Nougat Bar,2.95,1250,3687.5,37.67
1068,April,Company D,West,Montana,Sidney,Laura Simpson,Mastercard,Breakfast Cereals,Cookie Crisp,6.25,250,1562.5,20.49
1069,April,Company C,South,Texas,Dallas,Nancy Hart,Visa,Bakery,Croissant,2.95,1250,3687.5,46.6
1070,April,Company C,West,California,San Francisco,Marina Rossi,Visa,Condiments,Ketchup,5.45,1500,8175,46.23
1071,April,Company C,Northeast,Pennsylvania,Philadelphia,Andrew Spacey,Visa,Condiments,Mustard,1.85,150,277.5,13.98
1072,April,Company C,West,Washington,Seattle,Michael Fisher,Visa,Soups,Chicken Noodle Soup,2.2,250,550,16.85
1073,April,Company B,South,Louisiana,New Orleans,Marcus Kowalski,Visa,Fruit Preserves,Marmelade,4.5,250,1125,21.23
1074,April,Company D,South,Texas,Dallas,Andrew Spacey,Mastercard,Fruit Preserves,Apple Jam,3.95,750,2962.5,36.98
1075,April,Company E,Northeast,New Jersey,Newark,Robert Cole,Visa,Soups,Tomato Soup,1.8,1000,1800,31.48
1076,April,Company B,West,California,San Francisco,Robert Cole,Visa,Bakery,Apple Cake,10.25,1250,12812.5,47.83
1077,April,Company E,South,North Carolina,Greensboro,John Weber,Visa,Fruit Preserves,Apple Jam,3.95,1000,3950,42.92
1078,April,Company A,Midwest,Michigan,Detroit,Michael Fisher,Visa,Soups,Tomato Soup,1.8,700,1260,24.9
1079,April,Company E,Midwest,Michigan,Detroit,Michael Fisher,Mastercard,Breakfast Cereals,Corn Flakes,3.95,900,3555,30.88
1080,April,Company E,South,Texas,Dallas,Andrew Spacey,Visa,Bakery,Chocolate Biscuits,5.25,1000,5250,45.73
1081,April,Company E,Midwest,Illinois,Chicago,Robert Cole,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,250,1125,16.95
1082,April,Company B,Northeast,New Jersey,Newark,Ann Larson,Visa,Confectionery,Chocolate Bar,1.99,1250,2487.5,35.44
1083,April,Company C,Northeast,New York,Albany,Nancy Hart,Visa,Bakery,Croissant,2.95,500,1475,26.94
1084,April,Company A,South,Florida,Miami,Nancy Hart,Visa,Fruit Preserves,Apple Jam,3.95,250,987.5,22.4
1085,May,Company D,West,California,Los Angeles,Robert Cole,Mastercard,Bakery,Apple Cake,10.25,500,5125,29.03
1086,May,Company E,West,California,Los Angeles,Laura Simpson,Mastercard,Condiments,BBQ Sauce,7.65,1000,7650,41.2
1087,May,Company E,South,Louisiana,New Orleans,Michael Fisher,Visa,Fruit Preserves,Apple Jam,3.95,500,1975,31.43
1088,May,Company B,Northeast,Pennsylvania,Philadelphia,Nancy Hart,Visa,Confectionery,Chocolate Bar,1.99,1000,1990,36.93
1089,May,Company B,Northeast,New Jersey,Atlantic City,Robert Cole,Visa,Bakery,Croissant,2.95,750,2212.5,33.42
1090,May,Company A,Midwest,Illinois,Springfield,Laszlo Horvath,Visa,Breakfast Cereals,Cookie Crisp,6.25,300,1875,19.43
1091,May,Company D,South,Texas,Dallas,Marina Rossi,Mastercard,Fruit Preserves,Apple Jam,3.95,600,2370,32.73
1092,May,Company B,South,Texas,Dallas,Nancy Hart,Visa,Condiments,Ketchup,5.45,1000,5450,42.03
1093,May,Company D,Midwest,Illinois,Chicago,Michael Fisher,Mastercard,Fruit Preserves,Marmelade,4.5,300,1350,18.63
1094,May,Company E,West,Washington,Seattle,John Weber,Mastercard,Bakery,Chocolate Biscuits,5.25,750,3937.5,33.63
1095,May,Company A,Midwest,Ohio,Cincinnati,Nancy Hart,Visa,Soups,Chicken Noodle Soup,2.2,400,880,19.28
1096,May,Company D,Midwest,Ohio,Cincinnati,John Weber,Mastercard,Bakery,Banana Cake,9.65,750,7237.5,28.75
1097,May,Company C,South,Texas,Houston,Nancy Hart,Visa,Confectionery,Chocolate Bar,1.99,2500,4975,61.06
1098,May,Company C,Northeast,New Jersey,Atlantic City,John Weber,Mastercard,Bakery,Apple Cake,10.25,750,7687.5,38.75
1099,May,Company E,West,California,San Francisco,Marina Rossi,Mastercard,Bakery,Apple Cake,10.25,1200,12300,45.64
1100,May,Company E,Northeast,New Jersey,Atlantic City,Laura Simpson,Mastercard,Bakery,Banana Cake,9.65,1000,9650,41.41
1101,May,Company A,West,California,Los Angeles,Michael Fisher,Visa,Fruit Preserves,Marmelade,4.5,250,1125,19.15
1102,May,Company B,West,California,San Francisco,Laszlo Horvath,Visa,Breakfast Cereals,Corn Flakes,3.95,600,2370,29.57
1103,May,Company C,South,Texas,Houston,Marina Rossi,Mastercard,Condiments,BBQ Sauce,7.65,1500,11475,55.45
1104,May,Company A,Midwest,Illinois,Springfield,Ann Larson,Visa,Condiments,Mustard,1.85,300,555,15.58
1105,May,Company A,West,Washington,Seattle,Marcus Kowalski,Visa,Confectionery,Nougat Bar,2.95,1000,2950,37.06
1106,May,Company C,Midwest,Wisconsin,Green Bay,Laura Simpson,Visa,Condiments,Ketchup,5.45,1000,5450,32.78
1107,May,Company C,West,Montana,Billings,Laura Simpson,Visa,Bakery,Croissant,2.95,750,2212.5,31.6
1108,May,Company C,West,Montana,Billings,Nancy Hart,Visa,Soups,Tomato Soup,1.8,1500,2700,42.72
1109,May,Company C,West,Washington,Seattle,Nancy Hart,Visa,Bakery,Chocolate Biscuits,5.25,400,2100,24.56
1110,May,Company E,Northeast,Pennsylvania,Philadelphia,Marcus Kowalski,Visa,Breakfast Cereals,Corn Flakes,3.95,500,1975,27.34
1111,May,Company C,Midwest,Illinois,Springfield,John Weber,Visa,Fruit Preserves,Apple Jam,3.95,1100,4345,32.49
1112,June,Company C,Northeast,Connecticut,Hartford,Ann Larson,Visa,Fruit Preserves,Marmelade,4.5,300,1350,21.02
1113,June,Company A,Northeast,Pennsylvania,Harrisburg,Laszlo Horvath,Mastercard,Condiments,BBQ Sauce,7.65,1500,11475,47.93
1114,June,Company A,South,North Carolina,Greensboro,Marina Rossi,Visa,Breakfast Cereals,Corn Flakes,3.95,700,2765,35.75
1115,June,Company E,Midwest,Wisconsin,Green Bay,Ann Larson,Visa,Confectionery,Nougat Bar,2.95,750,2212.5,26.84
1116,June,Company C,West,Montana,Sidney,Marina Rossi,Visa,Breakfast Cereals,Corn Flakes,3.95,600,2370,29.21
1117,June,Company D,South,Texas,Dallas,John Weber,Mastercard,Fruit Preserves,Apple Jam,3.95,1000,3950,44.46
1118,June,Company E,Midwest,Ohio,Cincinnati,Robert Cole,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,400,1800,20.05
1119,June,Company A,West,California,Sacramento,Nancy Hart,Visa,Confectionery,Chocolate Bar,1.99,2000,3980,40.04
1120,June,Company C,Northeast,New Jersey,Atlantic City,Robert Cole,Mastercard,Bakery,Apple Cake,10.25,1250,12812.5,49.95
1121,June,Company C,Midwest,Illinois,Chicago,John Weber,Visa,Confectionery,Chocolate Bar,1.99,1500,2985,35.42
1122,June,Company C,Northeast,Pennsylvania,Harrisburg,Andrew Spacey,Visa,Bakery,Chocolate Biscuits,5.25,500,2625,27.38
1123,June,Company B,Northeast,Pennsylvania,Philadelphia,Nancy Hart,Visa,Bakery,Croissant,2.95,1500,4425,45.04
1124,June,Company B,South,Texas,Dallas,Nancy Hart,Visa,Condiments,BBQ Sauce,7.65,1250,9562.5,42.24
1125,June,Company C,West,Washington,Seattle,Michael Fisher,Visa,Confectionery,Chocolate Bar,1.99,1250,2487.5,35.92
1126,June,Company D,Midwest,Ohio,Cincinnati,Laszlo Horvath,Mastercard,Soups,Tomato Soup,1.8,1000,1800,29.55
1127,June,Company E,Midwest,Wisconsin,Green Bay,Marcus Kowalski,Visa,Condiments,BBQ Sauce,7.65,500,3825,24.74
1128,June,Company A,Midwest,Wisconsin,Green Bay,Laura Simpson,Visa,Soups,Chicken Noodle Soup,2.2,250,550,13.79
1129,June,Company E,South,Louisiana,New Orleans,Marcus Kowalski,Visa,Fruit Preserves,Apple Jam,3.95,750,2962.5,37.24
1130,June,Company A,Midwest,Ohio,Cincinnati,Laszlo Horvath,Mastercard,Bakery,Banana Cake,9.65,1250,12062.5,34.87
1131,June,Company C,Midwest,Illinois,Chicago,Ann Larson,Visa,Fruit Preserves,Apple Jam,3.95,900,3555,31.24
1132,June,Company C,Northeast,New York,Albany,Laszlo Horvath,Visa,Bakery,Chocolate Biscuits,5.25,1000,5250,41.26
1133,June,Company B,South,Texas,Houston,Marcus Kowalski,Visa,Condiments,Ketchup,5.45,1250,6812.5,46.78
1134,June,Company E,West,Washington,Seattle,Robert Cole,Visa,Bakery,Chocolate Biscuits,5.25,750,3937.5,32.42
1135,June,Company E,Midwest,Illinois,Chicago,Laura Simpson,Mastercard,Condiments,Ketchup,5.45,1500,8175,39.33
1136,June,Company B,South,Louisiana,New Orleans,John Weber,Visa,Breakfast Cereals,Cookie Crisp,6.25,500,3125,33.53
1137,June,Company D,Northeast,New Jersey,Atlantic City,Andrew Spacey,Mastercard,Bakery,Apple Cake,10.25,600,6150,35.09
1138,June,Company E,Northeast,Connecticut,Hartford,Marcus Kowalski,Visa,Condiments,Mustard,1.85,250,462.5,18.41
1139,June,Company A,Northeast,Connecticut,Bridgeport,Robert Cole,Visa,Breakfast Cereals,Cookie Crisp,6.25,100,625,11.2
1140,July,Company E,South,Texas,Dallas,Nancy Hart,Visa,Confectionery,Chocolate Bar,1.99,2000,3980,51.53
1141,July,Company A,West,California,Sacramento,Laura Simpson,Mastercard,Confectionery,Chocolate Bar,1.99,2500,4975,47.25
1142,July,Company A,Northeast,Connecticut,Hartford,John Weber,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,300,1350,20.18
1143,July,Company E,Northeast,New York,New York City,Laura Simpson,Visa,Confectionery,Nougat Bar,2.95,1000,2950,38.11
1144,July,Company E,South,Texas,Houston,Michael Fisher,Mastercard,Condiments,BBQ Sauce,7.65,2000,15300,63.78
1145,July,Company D,Northeast,New Jersey,Atlantic City,Marcus Kowalski,Mastercard,Breakfast Cereals,Cookie Crisp,6.25,200,1250,18.77
1146,July,Company D,South,South Carolina,Columbia,Laura Simpson,Mastercard,Breakfast Cereals,Cookie Crisp,6.25,200,1250,20.96
1147,July,Company E,South,Texas,Dallas,Marina Rossi,Visa,Bakery,Croissant,2.95,1250,3687.5,47.56
1148,July,Company A,Midwest,Ohio,Cincinnati,Nancy Hart,Mastercard,Bakery,Apple Cake,10.25,900,9225,30.8
1149,July,Company A,South,Louisiana,New Orleans,Nancy Hart,Visa,Fruit Preserves,Marmelade,4.5,200,900,17.61
1150,July,Company D,Northeast,Pennsylvania,Philadelphia,Laszlo Horvath,Mastercard,Bakery,Apple Cake,10.25,1200,12300,47.42
1151,July,Company C,Northeast,Pennsylvania,Philadelphia,Marcus Kowalski,Mastercard,Bakery,Banana Cake,9.65,1100,10615,45.97
1152,July,Company C,Northeast,New Jersey,Atlantic City,Robert Cole,Mastercard,Condiments,Ketchup,5.45,1250,6812.5,41.37
1153,July,Company B,West,California,Sacramento,Michael Fisher,Visa,Condiments,BBQ Sauce,7.65,750,5737.5,32.32
1154,July,Company C,Northeast,New Jersey,Newark,Robert Cole,Visa,Breakfast Cereals,Corn Flakes,3.95,500,1975,25.25
1155,July,Company A,Northeast,Pennsylvania,Philadelphia,Michael Fisher,Visa,Bakery,Chocolate Biscuits,5.25,1000,5250,41.13
1156,July,Company C,West,California,Sacramento,Laszlo Horvath,Visa,Fruit Preserves,Marmelade,4.5,250,1125,19.28
1157,July,Company D,South,Texas,Dallas,Nancy Hart,Mastercard,Fruit Preserves,Apple Jam,3.95,600,2370,33.39
1158,July,Company C,South,North Carolina,Greensboro,Nancy Hart,Visa,Soups,Tomato Soup,1.8,750,1350,33.93
1159,July,Company A,Midwest,Wisconsin,Green Bay,Michael Fisher,Visa,Condiments,Mustard,1.85,200,370,13.55
1160,July,Company A,West,California,Sacramento,John Weber,Visa,Breakfast Cereals,Corn Flakes,3.95,750,2962.5,32.73
1161,July,Company E,South,Texas,Houston,Michael Fisher,Mastercard,Bakery,Apple Cake,10.25,1750,17937.5,64
1162,July,Company E,South,Texas,Houston,John Weber,Visa,Bakery,Chocolate Biscuits,5.25,750,3937.5,38.06
1163,July,Company A,South,Texas,Houston,Michael Fisher,Visa,Condiments,Ketchup,5.45,500,2725,29.07
1164,July,Company A,South,Florida,Miami,Laura Simpson,Visa,Fruit Preserves,Apple Jam,3.95,1500,5925,51.51
1165,July,Company C,South,Texas,Dallas,Marcus Kowalski,Mastercard,Condiments,Ketchup,5.45,1750,9537.5,60.06
1166,July,Company B,West,California,Sacramento,Michael Fisher,Visa,Condiments,Mustard,1.85,100,185,11.86
1167,July,Company D,Northeast,Pennsylvania,Harrisburg,John Weber,Mastercard,Condiments,BBQ Sauce,7.65,1000,7650,39.71
1168,July,Company E,Northeast,New York,New York City,John Weber,Mastercard,Bakery,Banana Cake,9.65,1000,9650,43.89
1169,July,Company B,West,California,Sacramento,Andrew Spacey,Visa,Soups,Chicken Noodle Soup,2.2,250,550,17.83
1170,August,Company B,West,California,San Francisco,Laszlo Horvath,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,400,1800,24.06
1171,August,Company E,South,Louisiana,New Orleans,Ann Larson,Visa,Fruit Preserves,Apple Jam,3.95,750,2962.5,28.24
1172,August,Company D,South,Florida,Miami,Nancy Hart,Mastercard,Soups,Chicken Noodle Soup,2.2,400,880,25.64
1173,August,Company D,Northeast,New Jersey,Newark,Andrew Spacey,Mastercard,Soups,Tomato Soup,1.8,1000,1800,36.34
1174,August,Company A,Northeast,New York,New York City,Andrew Spacey,Mastercard,Confectionery,Chocolate Bar,1.99,3000,5970,62.12
1175,August,Company D,South,Texas,Dallas,Andrew Spacey,Mastercard,Fruit Preserves,Apple Jam,3.95,500,1975,26.4
1176,August,Company B,West,California,Los Angeles,Nancy Hart,Visa,Bakery,Apple Cake,10.25,1100,11275,45.31
1177,August,Company C,Midwest,Illinois,Chicago,Nancy Hart,Visa,Bakery,Chocolate Biscuits,5.25,1500,7875,41.25
1178,August,Company A,West,Montana,Sidney,John Weber,Visa,Confectionery,Nougat Bar,2.95,750,2212.5,26.43
1179,August,Company B,West,California,San Francisco,Michael Fisher,Visa,Breakfast Cereals,Corn Flakes,3.95,1000,3950,36.22
1180,August,Company E,Midwest,Michigan,Detroit,Robert Cole,Visa,Fruit Preserves,Marmelade,4.5,250,1125,16.55
1181,August,Company B,West,Washington,Seattle,Laura Simpson,Visa,Condiments,Ketchup,5.45,1500,8175,39.44
1182,August,Company A,South,North Carolina,Greensboro,Laszlo Horvath,Mastercard,Condiments,BBQ Sauce,7.65,1750,13387.5,61.85
1183,August,Company B,West,California,Sacramento,Michael Fisher,Visa,Condiments,Mustard,1.85,100,185,11.52
1184,August,Company B,South,Louisiana,New Orleans,Nancy Hart,Visa,Fruit Preserves,Marmelade,4.5,300,1350,24.43
1185,August,Company C,Northeast,New York,Albany,Laszlo Horvath,Visa,Bakery,Banana Cake,9.65,750,7237.5,34.52
1186,August,Company C,Midwest,Illinois,Springfield,Marina Rossi,Visa,Fruit Preserves,Apple Jam,3.95,250,987.5,16.53
1187,August,Company C,Midwest,Ohio,Cincinnati,Robert Cole,Visa,Condiments,BBQ Sauce,7.65,1000,7650,34.9
1188,August,Company E,West,Montana,Sidney,Laura Simpson,Mastercard,Bakery,Apple Cake,10.25,750,7687.5,35.02
1189,August,Company A,West,California,Los Angeles,Marina Rossi,Visa,Bakery,Croissant,2.95,1750,5162.5,47.91
1190,August,Company B,Midwest,Ohio,Cincinnati,John Weber,Visa,Condiments,Ketchup,5.45,1500,8175,32.32
1191,August,Company A,West,Montana,Sidney,John Weber,Visa,Condiments,Mustard,1.85,200,370,15.95
1192,August,Company E,West,Washington,Seattle,Andrew Spacey,Mastercard,Breakfast Cereals,Cookie Crisp,6.25,1000,6250,36.76
1193,September,Company A,Midwest,Illinois,Chicago,Andrew Spacey,Visa,Breakfast Cereals,Corn Flakes,3.95,400,1580,19.35
1194,September,Company E,Northeast,Pennsylvania,Harrisburg,John Weber,Visa,Bakery,Banana Cake,9.65,500,4825,30.82
1195,September,Company B,Midwest,Ohio,Cincinnati,Laura Simpson,Visa,Fruit Preserves,Marmelade,4.5,500,2250,22.96
1196,September,Company A,South,Louisiana,New Orleans,Andrew Spacey,Visa,Soups,Chicken Noodle Soup,2.2,500,1100,29.52
1197,September,Company E,Northeast,New Jersey,Newark,Nancy Hart,Visa,Confectionery,Chocolate Bar,1.99,2250,4477.5,51.36
1198,September,Company E,South,Louisiana,New Orleans,John Weber,Visa,Fruit Preserves,Apple Jam,3.95,500,1975,29.83
1199,September,Company A,South,Texas,Dallas,Andrew Spacey,Visa,Condiments,BBQ Sauce,7.65,1000,7650,47.31
1200,September,Company C,South,South Carolina,Columbia,Nancy Hart,Mastercard,Condiments,Ketchup,5.45,1250,6812.5,49.66
1201,September,Company E,Northeast,New York,New York City,Laszlo Horvath,Visa,Soups,Tomato Soup,1.8,500,900,24.83
1202,September,Company D,South,Texas,Dallas,Laura Simpson,Mastercard,Fruit Preserves,Apple Jam,3.95,1000,3950,44.49
1203,September,Company C,South,Louisiana,New Orleans,Laszlo Horvath,Visa,Bakery,Croissant,2.95,1250,3687.5,46.22
1204,September,Company A,South,Texas,Dallas,Nancy Hart,Visa,Breakfast Cereals,Cookie Crisp,6.25,500,3125,33.37
1205,September,Company A,South,Florida,Miami,Marcus Kowalski,Visa,Fruit Preserves,Apple Jam,3.95,250,987.5,20.71
1206,September,Company B,Midwest,Ohio,Cincinnati,Michael Fisher,Visa,Condiments,Mustard,1.85,250,462.5,14.89
1207,September,Company B,Northeast,Pennsylvania,Philadelphia,Laura Simpson,Visa,Confectionery,Chocolate Bar,1.99,3000,5970,61.91
1208,September,Company B,Northeast,Pennsylvania,Harrisburg,Ann Larson,Visa,Confectionery,Nougat Bar,2.95,1000,2950,36.57
1209,September,Company A,West,California,Los Angeles,John Weber,Visa,Breakfast Cereals,Corn Flakes,3.95,400,1580,22.19
1210,September,Company B,West,Washington,Seattle,John Weber,Visa,Bakery,Chocolate Biscuits,5.25,900,4725,37.62
1211,September,Company C,Midwest,Ohio,Cincinnati,Marcus Kowalski,Visa,Soups,Tomato Soup,1.8,1000,1800,27.73
1212,September,Company C,South,Texas,Houston,Ann Larson,Mastercard,Bakery,Apple Cake,10.25,1000,10250,48.85
1213,September,Company C,South,Texas,Houston,Marina Rossi,Visa,Bakery,Chocolate Biscuits,5.25,750,3937.5,39.97
1214,September,Company B,West,Montana,Billings,Ann Larson,Visa,Confectionery,Nougat Bar,2.95,250,737.5,18.82
1215,September,Company A,Northeast,New Jersey,Atlantic City,Marina Rossi,Mastercard,Condiments,Ketchup,5.45,2000,10900,54.59
1216,September,Company E,Northeast,Connecticut,Hartford,Andrew Spacey,Visa,Fruit Preserves,Marmelade,4.5,200,900,12.43
1217,September,Company C,West,California,Los Angeles,Marina Rossi,Mastercard,Condiments,BBQ Sauce,7.65,1000,7650,37.78
1218,September,Company E,Northeast,New York,New York City,Marina Rossi,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,500,2250,27.71
1219,October,Company A,Midwest,Michigan,Detroit,Ann Larson,Visa,Confectionery,Nougat Bar,2.95,1000,2950,31.14
1220,October,Company B,Northeast,New York,New York City,Marina Rossi,Visa,Bakery,Croissant,2.95,1000,2950,38.56
1221,October,Company D,South,Texas,Dallas,Andrew Spacey,Mastercard,Fruit Preserves,Apple Jam,3.95,750,2962.5,35.28
1222,October,Company A,West,Washington,Seattle,Robert Cole,Visa,Fruit Preserves,Marmelade,4.5,750,3375,33.85
1223,October,Company D,South,Texas,Dallas,Marcus Kowalski,Mastercard,Fruit Preserves,Apple Jam,3.95,1000,3950,43.87
1224,October,Company A,Midwest,Illinois,Springfield,Andrew Spacey,Mastercard,Bakery,Banana Cake,9.65,1250,12062.5,39.73
1225,October,Company B,South,Texas,Houston,Nancy Hart,Visa,Bakery,Croissant,2.95,700,2065,35.19
1226,October,Company C,South,Florida,Miami,Michael Fisher,Visa,Condiments,BBQ Sauce,7.65,1500,11475,57.74
1227,October,Company B,South,South Carolina,Columbia,Robert Cole,Visa,Confectionery,Nougat Bar,2.95,500,1475,28.91
1228,October,Company B,West,Montana,Billings,Robert Cole,Visa,Bakery,Chocolate Biscuits,5.25,500,2625,28.34
1229,October,Company E,Midwest,Michigan,Detroit,Andrew Spacey,Mastercard,Confectionery,Chocolate Bar,1.99,2500,4975,45.95
1230,October,Company D,Northeast,Pennsylvania,Philadelphia,Laszlo Horvath,Mastercard,Bakery,Apple Cake,10.25,750,7687.5,38.92
1231,October,Company E,West,California,San Francisco,Marina Rossi,Mastercard,Bakery,Apple Cake,10.25,750,7687.5,35.34
1232,October,Company D,Northeast,New York,New York City,Laura Simpson,Mastercard,Condiments,Mustard,1.85,150,277.5,13.47
1233,October,Company C,West,California,Los Angeles,Marina Rossi,Visa,Bakery,Chocolate Biscuits,5.25,500,2625,23.27
1234,October,Company E,Midwest,Ohio,Cincinnati,Marina Rossi,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,400,1800,20.92
1235,October,Company C,South,Texas,Houston,Michael Fisher,Visa,Bakery,Chocolate Biscuits,5.25,600,3150,35.51
1236,October,Company C,West,Washington,Seattle,Robert Cole,Visa,Soups,Chicken Noodle Soup,2.2,250,550,15.93
1237,October,Company C,Northeast,Pennsylvania,Philadelphia,Laura Simpson,Visa,Breakfast Cereals,Cookie Crisp,6.25,750,4687.5,36.58
1238,October,Company A,South,Texas,Houston,Laura Simpson,Visa,Breakfast Cereals,Corn Flakes,3.95,750,2962.5,38.4
1239,October,Company E,West,Washington,Seattle,John Weber,Visa,Soups,Chicken Noodle Soup,2.2,300,660,19.84
1240,October,Company A,South,Texas,Dallas,Marina Rossi,Mastercard,Condiments,Ketchup,5.45,1750,9537.5,56.26
1241,October,Company D,Midwest,Michigan,Detroit,Marina Rossi,Mastercard,Soups,Tomato Soup,1.8,1000,1800,28.23
1242,October,Company B,South,Texas,Houston,Marina Rossi,Visa,Confectionery,Chocolate Bar,1.99,1500,2985,48.53
1243,November,Company A,Midwest,Michigan,Detroit,Marina Rossi,Visa,Bakery,Chocolate Biscuits,5.25,750,3937.5,29.4
1244,November,Company B,Northeast,New York,Albany,Marcus Kowalski,Visa,Breakfast Cereals,Corn Flakes,3.95,900,3555,37.5
1245,November,Company E,West,Montana,Billings,Nancy Hart,Visa,Soups,Tomato Soup,1.8,1000,1800,32.07
1246,November,Company A,Northeast,Connecticut,Bridgeport,Andrew Spacey,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,250,1125,19.31
1247,November,Company E,South,North Carolina,Greensboro,Laszlo Horvath,Visa,Fruit Preserves,Apple Jam,3.95,750,2962.5,37.91
1248,November,Company A,Midwest,Wisconsin,Green Bay,John Weber,Visa,Confectionery,Nougat Bar,2.95,1250,3687.5,35.15
1249,November,Company E,Midwest,Michigan,Detroit,John Weber,Visa,Soups,Chicken Noodle Soup,2.2,300,660,17
1250,November,Company C,Northeast,Pennsylvania,Philadelphia,Laura Simpson,Visa,Condiments,Ketchup,5.45,1500,8175,50.14
1251,November,Company B,West,California,Sacramento,Robert Cole,Visa,Bakery,Croissant,2.95,800,2360,28.62
1252,November,Company B,West,California,Los Angeles,John Weber,Visa,Bakery,Apple Cake,10.25,900,9225,40.85
1253,November,Company C,South,Louisiana,New Orleans,Marcus Kowalski,Visa,Breakfast Cereals,Cookie Crisp,6.25,400,2500,26.94
1254,November,Company C,Midwest,Michigan,Detroit,Marina Rossi,Visa,Breakfast Cereals,Cookie Crisp,6.25,250,1562.5,16.92
1255,November,Company D,Midwest,Ohio,Cincinnati,Laszlo Horvath,Mastercard,Fruit Preserves,Marmelade,4.5,500,2250,22.98
1256,November,Company B,South,North Carolina,Greensboro,Robert Cole,Visa,Bakery,Chocolate Biscuits,5.25,250,1312.5,23.12
1257,November,Company A,Midwest,Illinois,Chicago,Andrew Spacey,Visa,Soups,Tomato Soup,1.8,500,900,16.66
1258,November,Company B,Northeast,New Jersey,Newark,Marina Rossi,Visa,Soups,Tomato Soup,1.8,250,450,17.31
1259,November,Company A,South,South Carolina,Columbia,Michael Fisher,Visa,Condiments,Mustard,1.85,150,277.5,15.96
1260,November,Company E,South,South Carolina,Columbia,Laura Simpson,Visa,Confectionery,Chocolate Bar,1.99,2500,4975,55.96
1261,November,Company A,West,Montana,Sidney,Marcus Kowalski,Visa,Confectionery,Chocolate Bar,1.99,2000,3980,47.35
1262,November,Company C,Midwest,Illinois,Chicago,Michael Fisher,Visa,Fruit Preserves,Apple Jam,3.95,900,3555,30.9
1263,November,Company D,South,Texas,Houston,Marcus Kowalski,Mastercard,Soups,Chicken Noodle Soup,2.2,300,660,21.65
1264,November,Company A,West,California,Sacramento,John Weber,Mastercard,Condiments,BBQ Sauce,7.65,750,5737.5,34.8
1265,November,Company B,South,South Carolina,Columbia,Nancy Hart,Visa,Bakery,Banana Cake,9.65,750,7237.5,42.58
1266,December,Company D,Midwest,Illinois,Chicago,John Weber,Mastercard,Confectionery,Nougat Bar,2.95,1000,2950,29.38
1267,December,Company A,Northeast,New Jersey,Newark,Andrew Spacey,Mastercard,Bakery,Apple Cake,10.25,750,7687.5,38.28
1268,December,Company B,West,Washington,Seattle,Laura Simpson,Visa,Bakery,Apple Cake,10.25,400,4100,26.95
1269,December,Company A,West,California,Los Angeles,John Weber,Mastercard,Confectionery,Chocolate Bar,1.99,2000,3980,48.29
1270,December,Company B,Northeast,Pennsylvania,Philadelphia,Andrew Spacey,Visa,Fruit Preserves,Marmelade,4.5,400,1800,24.62
1271,December,Company A,West,Montana,Billings,Andrew Spacey,Visa,Bakery,Croissant,2.95,750,2212.5,30.32
1272,December,Company C,Midwest,Wisconsin,Green Bay,John Weber,Visa,Soups,Chicken Noodle Soup,2.2,500,1100,21.37
1273,December,Company A,South,South Carolina,Columbia,Laszlo Horvath,Visa,Bakery,Chocolate Biscuits,5.25,500,2625,31.84
1274,December,Company C,Midwest,Illinois,Chicago,Marina Rossi,Visa,Confectionery,Chocolate Bar,1.99,1000,1990,29.62
1275,December,Company C,South,Louisiana,New Orleans,Marina Rossi,Visa,Confectionery,Chocolate Bar,1.99,2250,4477.5,52.24
1276,December,Company D,West,Washington,Seattle,Marcus Kowalski,Mastercard,Confectionery,Nougat Bar,2.95,250,737.5,18.67
1277,December,Company B,South,Texas,Dallas,Laszlo Horvath,Visa,Breakfast Cereals,Cookie Crisp,6.25,500,3125,27.42
1278,December,Company E,Midwest,Illinois,Springfield,Laura Simpson,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,300,1350,15.84
1279,December,Company D,Midwest,Michigan,Detroit,Robert Cole,Mastercard,Fruit Preserves,Marmelade,4.5,300,1350,16.5
1280,December,Company B,South,Texas,Dallas,Ann Larson,Visa,Condiments,Ketchup,5.45,500,2725,31.67
1281,December,Company E,South,South Carolina,Columbia,Michael Fisher,Visa,Confectionery,Chocolate Bar,1.99,750,1492.5,31.67
1282,December,Company E,South,North Carolina,Greensboro,Marcus Kowalski,Visa,Breakfast Cereals,Cinnamon Flakes,4.5,250,1125,22.31
1283,December,Company A,Northeast,Pennsylvania,Harrisburg,Michael Fisher,Mastercard,Bakery,Banana Cake,9.65,500,4825,31.67
1284,December,Company D,Northeast,New York,Albany,Andrew Spacey,Mastercard,Bakery,Banana Cake,9.65,500,4825,29.4
1285,December,Company D,West,Washington,Seattle,Nancy Hart,Mastercard,Bakery,Chocolate Biscuits,5.25,500,2625,25.4
1286,December,Company D,Northeast,New York,New York City,John Weber,Mastercard,Condiments,Ketchup,5.45,500,2725,29.07
1287,December,Company C,Midwest,Illinois,Chicago,Ann Larson,Visa,Fruit Preserves,Apple Jam,3.95,750,2962.5,26.48
1288,December,Company D,South,North Carolina,Greensboro,Laura Simpson,Mastercard,Soups,Tomato Soup,1.8,750,1350,32.95
1289,December,Company B,Midwest,Michigan,Detroit,Ann Larson,Visa,Confectionery,Chocolate Bar,1.99,1000,1990,29.05
1290,December,Company B,Midwest,Illinois,Chicago,Marina Rossi,Visa,Bakery,Banana Cake,9.65,250,2412.5,18.25
1291,December,Company B,Midwest,Illinois,Springfield,John Weber,Visa,Soups,Tomato Soup,1.8,1000,1800,26.61
1292,December,Company D,South,South Carolina,Columbia,Michael Fisher,Mastercard,Condiments,BBQ Sauce,7.65,500,3825,33.29
1293,December,Company A,West,California,Sacramento,Ann Larson,Visa,Bakery,Apple Cake,10.25,600,6150,33.4
1294,December,Company B,West,Washington,Seattle,Marina Rossi,Visa,Breakfast Cereals,Corn Flakes,3.95,950,3752.5,35.43
1295,December,Company D,South,Texas,Dallas,Nancy Hart,Mastercard,Condiments,Mustard,1.85,200,370,18.57
1296,December,Company E,Midwest,Ohio,Cincinnati,Ann Larson,Visa,Soups,Tomato Soup,1.8,500,900,20.27
1297,December,Company C,Northeast,New Jersey,Atlantic City,Marcus Kowalski,Visa,Fruit Preserves,Marmelade,4.5,300,1350,21.04`;
        const rows = csvData.split("\n");
        const header = rows[0].split(",");
        const data = [];
        const columns = [];
        for (let i = 0; i < header.length; i++) {
          const column = {
            dataField: header[i].replace(/ /gi, ""),
            label: header[i].trim()
          };
          columns.push(column);
        }
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i].split(",");
          const dataRow = {};
          for (let j = 0; j < columns.length; j++) {
            const dataField = columns[j].dataField;
            dataRow[dataField] = row[j].trim();
          }
          data.push(dataRow);
        }
        window.Data = data;
      })();

      function getChipColor(colorIndex) {
        const colors = [
          "#18BFFF",
          "#F82B60",
          "#6B1CB0",
          "#1283DA",
          "#FCB400",
          "#20C933"
        ];
        const color = colors[colorIndex];
        return color;
      }
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: window.Data,
                dataFields: [
                  "Customer: string",
                  "Salesperson: string",
                  "Category: string",
                  "City: string",
                  "PaymentMethod: string",
                  "ProductName: string",
                  "Quantity: number",
                  "Revenue: number"
                ]
              }),
              columns: [
                {
                  label: "Sales person",
                  dataField: "Salesperson",
                  icon: "fa-user",
                  showIcon: true
                },
                {
                  label: "City",
                  dataField: "City",
                  showIcon: true,
                  icon: "fa-university"
                },
                {
                  label: "Product",
                  dataField: "ProductName",
                  icon: "fa-product-hunt",
                  showIcon: true
                },
                {
                  label: "Payment Method",
                  dataField: "PaymentMethod",
                  icon: "fa-money",
                  showIcon: true,
                  template: function(formatObject) {
                    if (!formatObject.template) {
                      if (formatObject.value === "Mastercard") {
                        formatObject.template =
                          '<div style="font-family: FontAwesome;"><span style="margin-left: 7px;" class="far fa-cc-mastercard"></span><span style="margin-left: 5px;">' +
                          formatObject.value +
                          "</span></div>";
                      } else {
                        formatObject.template =
                          '<div style="font-family: FontAwesome;"><span style="margin-left: 7px;" class="far fa-cc-visa"></span><span style="margin-left: 5px;">' +
                          formatObject.value +
                          "</span></div>";
                      }
                    } else {
                      if (formatObject.value === "Mastercard") {
                        formatObject.template.firstChild.className =
                          "far fa-cc-mastercard";
                      } else {
                        formatObject.template.firstChild.className =
                          "far fa-cc-visa";
                      }
                      formatObject.template.lastChild.innerHTML =
                        formatObject.value;
                    }
                  }
                },
                {
                  label: "Quantity",
                  dataField: "Quantity",
                  showIcon: true,
                  align: "center",
                  icon: "fa-plus-circle",
                  cellsAlign: "center",
                  width: 120,
                  template: function(formatObject) {
                    if (!formatObject.template) {
                      const data = document.createElement("span");
                      const plus = document.createElement("smart-button");
                      const minus = document.createElement("smart-button");
                      plus.style.background = getChipColor(0);
                      minus.style.background = getChipColor(5);
                      plus.innerHTML = '<span class="fa-plus"></span>';
                      minus.innerHTML = '<span class="fa-minus"></span>';
                      data.innerHTML = formatObject.value;
                      data.style.marginLeft = "7px";
                      plus.row = formatObject.row;
                      minus.row = formatObject.row;
                      plus.addEventListener("click", () => {
                        const row = plus.row;
                        row.getCell("Quantity").value += 5;
                      });
                      minus.addEventListener("click", () => {
                        const row = minus.row;
                        row.getCell("Quantity").value -= 5;
                      });
                      const template = document.createElement("div");
                      template.appendChild(data);
                      template.appendChild(minus);
                      template.appendChild(plus);
                      formatObject.template = template;
                    } else {
                      formatObject.template.firstChild.innerHTML =
                        formatObject.value;
                      const buttons = formatObject.template.querySelectorAll(
                        "smart-button"
                      );
                      buttons[0].row = formatObject.row;
                      buttons[1].row = formatObject.row;
                    }
                  }
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
smart-grid-row {
  height: 40px;
  font-size: 16px;
}

smart-grid-column {
  font-size: 14px;
}

smart-grid-column .smart-icon {
  font-family: "FontAwesome" !important;
  font-size: 16px;
}

smart-grid-cell smart-button {
  margin-left: 7px;
  width: 28px;
  height: 28px;
  color: #fff;
  border-radius: 10px;
  border: none;
  margin-top: -1px;
  font-family: "FontAwesome" !important;
}
smart-grid-cell smart-button:last-child {
  margin-right: 7px;
  margin-left: 2px;
}

smart-grid-cell smart-button .smart-button {
  padding-left: 0px;
  padding-right: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 700px) {
  smart-grid {
    width: 100%;
  }
}
</style>
