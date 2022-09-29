window.onload = function () {
    document.getElementById('dashboard').addEventListener('click', handleNavigationClick);
    document.getElementById('products').addEventListener('click', handleNavigationClick);
    document.getElementById('sales').addEventListener('click', handleNavigationClick);
    document.getElementById('channels').addEventListener('click', handleNavigationClick);
    document.getElementById('customers').addEventListener('click', handleNavigationClick);
	
	const anchors = window.header.querySelectorAll('a');
	anchors[0].parentNode.parentNode.setAttribute('active', '');
		
    setupRouting();
}

function handleNavigationClick() {
    const anchor = event.context.querySelector('a');
	
	const anchors = window.header.querySelectorAll('a');
	
	for(let i = 0; i < anchors.length; i++){
		anchors[i].parentNode.parentNode.removeAttribute('active');
	}
	
    if (anchor) {
        anchor.click();
		anchor.parentNode.parentNode.setAttribute('active', '');
    }
}

function initRangeSelectorChart(onChangeCallback) {
    const salesByDate = [
        {
            "SaleDate": "1/1/2021",
            "Sales": 1077560.0
        },
        {
            "SaleDate": "1/2/2021",
            "Sales": 1070850.0
        },
        {
            "SaleDate": "1/3/2021",
            "Sales": 1056330.0
        },
        {
            "SaleDate": "1/4/2021",
            "Sales": 1038330.0
        },
        {
            "SaleDate": "1/5/2021",
            "Sales": 1001950.0
        },
        {
            "SaleDate": "1/6/2021",
            "Sales": 912220.0
        },
        {
            "SaleDate": "1/7/2021",
            "Sales": 1030130.0
        },
        {
            "SaleDate": "1/8/2021",
            "Sales": 1035770.0
        },
        {
            "SaleDate": "1/9/2021",
            "Sales": 1034400.0
        },
        {
            "SaleDate": "1/10/2021",
            "Sales": 1258430.0
        },
        {
            "SaleDate": "1/11/2021",
            "Sales": 1186160.0
        },
        {
            "SaleDate": "1/12/2021",
            "Sales": 1234380.0
        },
        {
            "SaleDate": "1/13/2021",
            "Sales": 1246970.0
        },
        {
            "SaleDate": "1/14/2021",
            "Sales": 1278030.0
        },
        {
            "SaleDate": "1/15/2021",
            "Sales": 1167270.0
        },
        {
            "SaleDate": "1/16/2021",
            "Sales": 1219960.0
        },
        {
            "SaleDate": "1/17/2021",
            "Sales": 1189630.0
        },
        {
            "SaleDate": "1/18/2021",
            "Sales": 1266140.0
        },
        {
            "SaleDate": "1/19/2021",
            "Sales": 1189880.0
        },
        {
            "SaleDate": "1/20/2021",
            "Sales": 1180440.0
        },
        {
            "SaleDate": "1/21/2021",
            "Sales": 1145620.0
        },
        {
            "SaleDate": "1/22/2021",
            "Sales": 1069970.0
        },
        {
            "SaleDate": "1/23/2021",
            "Sales": 1305990.0
        },
        {
            "SaleDate": "1/24/2021",
            "Sales": 1268510.0
        },
        {
            "SaleDate": "1/25/2021",
            "Sales": 1249760.0
        },
        {
            "SaleDate": "1/26/2021",
            "Sales": 1159600.0
        },
        {
            "SaleDate": "1/27/2021",
            "Sales": 1136190.0
        },
        {
            "SaleDate": "1/28/2021",
            "Sales": 1238660.0
        },
        {
            "SaleDate": "1/29/2021",
            "Sales": 1148860.0
        },
        {
            "SaleDate": "1/30/2021",
            "Sales": 1152490.0
        },
        {
            "SaleDate": "1/31/2021",
            "Sales": 1244450.0
        },
        {
            "SaleDate": "2/1/2021",
            "Sales": 1014730.0
        },
        {
            "SaleDate": "2/2/2021",
            "Sales": 1088430.0
        },
        {
            "SaleDate": "2/3/2021",
            "Sales": 1067650.0
        },
        {
            "SaleDate": "2/4/2021",
            "Sales": 1031170.0
        },
        {
            "SaleDate": "2/5/2021",
            "Sales": 1193460.0
        },
        {
            "SaleDate": "2/6/2021",
            "Sales": 1025440.0
        },
        {
            "SaleDate": "2/7/2021",
            "Sales": 1069360.0
        },
        {
            "SaleDate": "2/8/2021",
            "Sales": 1062510.0
        },
        {
            "SaleDate": "2/9/2021",
            "Sales": 1237760.0
        },
        {
            "SaleDate": "2/10/2021",
            "Sales": 1328740.0
        },
        {
            "SaleDate": "2/11/2021",
            "Sales": 1405230.0
        },
        {
            "SaleDate": "2/12/2021",
            "Sales": 1253000.0
        },
        {
            "SaleDate": "2/13/2021",
            "Sales": 1370780.0
        },
        {
            "SaleDate": "2/14/2021",
            "Sales": 1314700.0
        },
        {
            "SaleDate": "2/15/2021",
            "Sales": 1334280.0
        },
        {
            "SaleDate": "2/16/2021",
            "Sales": 1217170.0
        },
        {
            "SaleDate": "2/17/2021",
            "Sales": 1294320.0
        },
        {
            "SaleDate": "2/18/2021",
            "Sales": 1350880.0
        },
        {
            "SaleDate": "2/19/2021",
            "Sales": 1297590.0
        },
        {
            "SaleDate": "2/20/2021",
            "Sales": 1259560.0
        },
        {
            "SaleDate": "2/21/2021",
            "Sales": 1188570.0
        },
        {
            "SaleDate": "2/22/2021",
            "Sales": 1188150.0
        },
        {
            "SaleDate": "2/23/2021",
            "Sales": 1242740.0
        },
        {
            "SaleDate": "2/24/2021",
            "Sales": 1238910.0
        },
        {
            "SaleDate": "2/25/2021",
            "Sales": 1306490.0
        },
        {
            "SaleDate": "2/26/2021",
            "Sales": 1280280.0
        },
        {
            "SaleDate": "2/27/2021",
            "Sales": 1269520.0
        },
        {
            "SaleDate": "2/28/2021",
            "Sales": 1480650.0
        },
        {
            "SaleDate": "2/29/2021",
            "Sales": 1260550.0
        },
        {
            "SaleDate": "3/1/2021",
            "Sales": 1001310.0
        },
        {
            "SaleDate": "3/2/2021",
            "Sales": 906060.0
        },
        {
            "SaleDate": "3/3/2021",
            "Sales": 991390.0
        },
        {
            "SaleDate": "3/4/2021",
            "Sales": 1010620.0
        },
        {
            "SaleDate": "3/5/2021",
            "Sales": 1097200.0
        },
        {
            "SaleDate": "3/6/2021",
            "Sales": 1003530.0
        },
        {
            "SaleDate": "3/7/2021",
            "Sales": 1120560.0
        },
        {
            "SaleDate": "3/8/2021",
            "Sales": 1157570.0
        },
        {
            "SaleDate": "3/9/2021",
            "Sales": 959330.0
        },
        {
            "SaleDate": "3/10/2021",
            "Sales": 1227690.0
        },
        {
            "SaleDate": "3/11/2021",
            "Sales": 1327170.0
        },
        {
            "SaleDate": "3/12/2021",
            "Sales": 1332390.0
        },
        {
            "SaleDate": "3/13/2021",
            "Sales": 1299030.0
        },
        {
            "SaleDate": "3/14/2021",
            "Sales": 1298070.0
        },
        {
            "SaleDate": "3/15/2021",
            "Sales": 1353570.0
        },
        {
            "SaleDate": "3/16/2021",
            "Sales": 1349860.0
        },
        {
            "SaleDate": "3/17/2021",
            "Sales": 1279460.0
        },
        {
            "SaleDate": "3/18/2021",
            "Sales": 1241890.0
        },
        {
            "SaleDate": "3/19/2021",
            "Sales": 1115260.0
        },
        {
            "SaleDate": "3/20/2021",
            "Sales": 1270470.0
        },
        {
            "SaleDate": "3/21/2021",
            "Sales": 1184140.0
        },
        {
            "SaleDate": "3/22/2021",
            "Sales": 1062740.0
        },
        {
            "SaleDate": "3/23/2021",
            "Sales": 1255820.0
        },
        {
            "SaleDate": "3/24/2021",
            "Sales": 1168010.0
        },
        {
            "SaleDate": "3/25/2021",
            "Sales": 1213850.0
        },
        {
            "SaleDate": "3/26/2021",
            "Sales": 1251430.0
        },
        {
            "SaleDate": "3/27/2021",
            "Sales": 1197040.0
        },
        {
            "SaleDate": "3/28/2021",
            "Sales": 1302290.0
        },
        {
            "SaleDate": "3/29/2021",
            "Sales": 1186610.0
        },
        {
            "SaleDate": "3/30/2021",
            "Sales": 1093620.0
        },
        {
            "SaleDate": "3/31/2021",
            "Sales": 1173610.0
        },
        {
            "SaleDate": "4/1/2021",
            "Sales": 1033650.0
        },
        {
            "SaleDate": "4/2/2021",
            "Sales": 1084080.0
        },
        {
            "SaleDate": "4/3/2021",
            "Sales": 965750.0
        },
        {
            "SaleDate": "4/4/2021",
            "Sales": 1061880.0
        },
        {
            "SaleDate": "4/5/2021",
            "Sales": 1028580.0
        },
        {
            "SaleDate": "4/6/2021",
            "Sales": 1024120.0
        },
        {
            "SaleDate": "4/7/2021",
            "Sales": 1036410.0
        },
        {
            "SaleDate": "4/8/2021",
            "Sales": 925140.0
        },
        {
            "SaleDate": "4/9/2021",
            "Sales": 981780.0
        },
        {
            "SaleDate": "4/10/2021",
            "Sales": 1304080.0
        },
        {
            "SaleDate": "4/11/2021",
            "Sales": 1197980.0
        },
        {
            "SaleDate": "4/12/2021",
            "Sales": 1185180.0
        },
        {
            "SaleDate": "4/13/2021",
            "Sales": 1259750.0
        },
        {
            "SaleDate": "4/14/2021",
            "Sales": 1286940.0
        },
        {
            "SaleDate": "4/15/2021",
            "Sales": 1236210.0
        },
        {
            "SaleDate": "4/16/2021",
            "Sales": 1160000.0
        },
        {
            "SaleDate": "4/17/2021",
            "Sales": 1186270.0
        },
        {
            "SaleDate": "4/18/2021",
            "Sales": 1282750.0
        },
        {
            "SaleDate": "4/19/2021",
            "Sales": 1220560.0
        },
        {
            "SaleDate": "4/20/2021",
            "Sales": 1206250.0
        },
        {
            "SaleDate": "4/21/2021",
            "Sales": 1187260.0
        },
        {
            "SaleDate": "4/22/2021",
            "Sales": 1253870.0
        },
        {
            "SaleDate": "4/23/2021",
            "Sales": 1144290.0
        },
        {
            "SaleDate": "4/24/2021",
            "Sales": 1216590.0
        },
        {
            "SaleDate": "4/25/2021",
            "Sales": 1270010.0
        },
        {
            "SaleDate": "4/26/2021",
            "Sales": 1284150.0
        },
        {
            "SaleDate": "4/27/2021",
            "Sales": 1283980.0
        },
        {
            "SaleDate": "4/28/2021",
            "Sales": 1194580.0
        },
        {
            "SaleDate": "4/29/2021",
            "Sales": 1191760.0
        },
        {
            "SaleDate": "4/30/2021",
            "Sales": 1229460.0
        },
        {
            "SaleDate": "5/1/2021",
            "Sales": 1136700.0
        },
        {
            "SaleDate": "5/2/2021",
            "Sales": 1167130.0
        },
        {
            "SaleDate": "5/3/2021",
            "Sales": 1122070.0
        },
        {
            "SaleDate": "5/4/2021",
            "Sales": 1136140.0
        },
        {
            "SaleDate": "5/5/2021",
            "Sales": 1083840.0
        },
        {
            "SaleDate": "5/6/2021",
            "Sales": 1090070.0
        },
        {
            "SaleDate": "5/7/2021",
            "Sales": 1155150.0
        },
        {
            "SaleDate": "5/8/2021",
            "Sales": 1038730.0
        },
        {
            "SaleDate": "5/9/2021",
            "Sales": 1011920.0
        },
        {
            "SaleDate": "5/10/2021",
            "Sales": 1405900.0
        },
        {
            "SaleDate": "5/11/2021",
            "Sales": 1343320.0
        },
        {
            "SaleDate": "5/12/2021",
            "Sales": 1357330.0
        },
        {
            "SaleDate": "5/13/2021",
            "Sales": 1351900.0
        },
        {
            "SaleDate": "5/14/2021",
            "Sales": 1242970.0
        },
        {
            "SaleDate": "5/15/2021",
            "Sales": 1363480.0
        },
        {
            "SaleDate": "5/16/2021",
            "Sales": 1384310.0
        },
        {
            "SaleDate": "5/17/2021",
            "Sales": 1298530.0
        },
        {
            "SaleDate": "5/18/2021",
            "Sales": 1259700.0
        },
        {
            "SaleDate": "5/19/2021",
            "Sales": 1283630.0
        },
        {
            "SaleDate": "5/20/2021",
            "Sales": 1288710.0
        },
        {
            "SaleDate": "5/21/2021",
            "Sales": 1265580.0
        },
        {
            "SaleDate": "5/22/2021",
            "Sales": 1247170.0
        },
        {
            "SaleDate": "5/23/2021",
            "Sales": 1313840.0
        },
        {
            "SaleDate": "5/24/2021",
            "Sales": 1304770.0
        },
        {
            "SaleDate": "5/25/2021",
            "Sales": 1280650.0
        },
        {
            "SaleDate": "5/26/2021",
            "Sales": 1263350.0
        },
        {
            "SaleDate": "5/27/2021",
            "Sales": 1350210.0
        },
        {
            "SaleDate": "5/28/2021",
            "Sales": 1238560.0
        },
        {
            "SaleDate": "5/29/2021",
            "Sales": 1259210.0
        },
        {
            "SaleDate": "5/30/2021",
            "Sales": 1250030.0
        },
        {
            "SaleDate": "5/31/2021",
            "Sales": 1236230.0
        },
        {
            "SaleDate": "6/1/2021",
            "Sales": 987190.0
        },
        {
            "SaleDate": "6/2/2021",
            "Sales": 1111630.0
        },
        {
            "SaleDate": "6/3/2021",
            "Sales": 1009530.0
        },
        {
            "SaleDate": "6/4/2021",
            "Sales": 1017260.0
        },
        {
            "SaleDate": "6/5/2021",
            "Sales": 1074680.0
        },
        {
            "SaleDate": "6/6/2021",
            "Sales": 1078740.0
        },
        {
            "SaleDate": "6/7/2021",
            "Sales": 1112890.0
        },
        {
            "SaleDate": "6/8/2021",
            "Sales": 1142290.0
        },
        {
            "SaleDate": "6/9/2021",
            "Sales": 1113080.0
        },
        {
            "SaleDate": "6/10/2021",
            "Sales": 1310070.0
        },
        {
            "SaleDate": "6/11/2021",
            "Sales": 1342290.0
        },
        {
            "SaleDate": "6/12/2021",
            "Sales": 1211620.0
        },
        {
            "SaleDate": "6/13/2021",
            "Sales": 1188410.0
        },
        {
            "SaleDate": "6/14/2021",
            "Sales": 1188490.0
        },
        {
            "SaleDate": "6/15/2021",
            "Sales": 1185870.0
        },
        {
            "SaleDate": "6/16/2021",
            "Sales": 1124670.0
        },
        {
            "SaleDate": "6/17/2021",
            "Sales": 1183180.0
        },
        {
            "SaleDate": "6/18/2021",
            "Sales": 1231370.0
        },
        {
            "SaleDate": "6/19/2021",
            "Sales": 1261700.0
        },
        {
            "SaleDate": "6/20/2021",
            "Sales": 1303310.0
        },
        {
            "SaleDate": "6/21/2021",
            "Sales": 1163730.0
        },
        {
            "SaleDate": "6/22/2021",
            "Sales": 1296270.0
        },
        {
            "SaleDate": "6/23/2021",
            "Sales": 1221080.0
        },
        {
            "SaleDate": "6/24/2021",
            "Sales": 1257850.0
        },
        {
            "SaleDate": "6/25/2021",
            "Sales": 1163610.0
        },
        {
            "SaleDate": "6/26/2021",
            "Sales": 1314350.0
        },
        {
            "SaleDate": "6/27/2021",
            "Sales": 1184670.0
        },
        {
            "SaleDate": "6/28/2021",
            "Sales": 1196740.0
        },
        {
            "SaleDate": "6/29/2021",
            "Sales": 1140750.0
        },
        {
            "SaleDate": "6/30/2021",
            "Sales": 1210710.0
        },
        {
            "SaleDate": "7/1/2021",
            "Sales": 1052560.0
        },
        {
            "SaleDate": "7/2/2021",
            "Sales": 1034760.0
        },
        {
            "SaleDate": "7/3/2021",
            "Sales": 1073590.0
        },
        {
            "SaleDate": "7/4/2021",
            "Sales": 1038720.0
        },
        {
            "SaleDate": "7/5/2021",
            "Sales": 1016860.0
        },
        {
            "SaleDate": "7/6/2021",
            "Sales": 1028220.0
        },
        {
            "SaleDate": "7/7/2021",
            "Sales": 1221540.0
        },
        {
            "SaleDate": "7/8/2021",
            "Sales": 1021850.0
        },
        {
            "SaleDate": "7/9/2021",
            "Sales": 1047010.0
        },
        {
            "SaleDate": "7/10/2021",
            "Sales": 1237170.0
        },
        {
            "SaleDate": "7/11/2021",
            "Sales": 1216820.0
        },
        {
            "SaleDate": "7/12/2021",
            "Sales": 1285450.0
        },
        {
            "SaleDate": "7/13/2021",
            "Sales": 1237600.0
        },
        {
            "SaleDate": "7/14/2021",
            "Sales": 1309740.0
        },
        {
            "SaleDate": "7/15/2021",
            "Sales": 1267550.0
        },
        {
            "SaleDate": "7/16/2021",
            "Sales": 1148090.0
        },
        {
            "SaleDate": "7/17/2021",
            "Sales": 1245280.0
        },
        {
            "SaleDate": "7/18/2021",
            "Sales": 1138340.0
        },
        {
            "SaleDate": "7/19/2021",
            "Sales": 1167000.0
        },
        {
            "SaleDate": "7/20/2021",
            "Sales": 1076230.0
        },
        {
            "SaleDate": "7/21/2021",
            "Sales": 1227220.0
        },
        {
            "SaleDate": "7/22/2021",
            "Sales": 1186640.0
        },
        {
            "SaleDate": "7/23/2021",
            "Sales": 1264670.0
        },
        {
            "SaleDate": "7/24/2021",
            "Sales": 1239420.0
        },
        {
            "SaleDate": "7/25/2021",
            "Sales": 1263640.0
        },
        {
            "SaleDate": "7/26/2021",
            "Sales": 1187260.0
        },
        {
            "SaleDate": "7/27/2021",
            "Sales": 1181750.0
        },
        {
            "SaleDate": "7/28/2021",
            "Sales": 1286330.0
        },
        {
            "SaleDate": "7/29/2021",
            "Sales": 1232430.0
        },
        {
            "SaleDate": "7/30/2021",
            "Sales": 1157480.0
        },
        {
            "SaleDate": "7/31/2021",
            "Sales": 1199090.0
        },
        {
            "SaleDate": "8/1/2021",
            "Sales": 1079440.0
        },
        {
            "SaleDate": "8/2/2021",
            "Sales": 1102040.0
        },
        {
            "SaleDate": "8/3/2021",
            "Sales": 1115400.0
        },
        {
            "SaleDate": "8/4/2021",
            "Sales": 1168160.0
        },
        {
            "SaleDate": "8/5/2021",
            "Sales": 1034350.0
        },
        {
            "SaleDate": "8/6/2021",
            "Sales": 1139980.0
        },
        {
            "SaleDate": "8/7/2021",
            "Sales": 1114840.0
        },
        {
            "SaleDate": "8/8/2021",
            "Sales": 1142760.0
        },
        {
            "SaleDate": "8/9/2021",
            "Sales": 1045910.0
        },
        {
            "SaleDate": "8/10/2021",
            "Sales": 1266600.0
        },
        {
            "SaleDate": "8/11/2021",
            "Sales": 1440160.0
        },
        {
            "SaleDate": "8/12/2021",
            "Sales": 1382570.0
        },
        {
            "SaleDate": "8/13/2021",
            "Sales": 1261060.0
        },
        {
            "SaleDate": "8/14/2021",
            "Sales": 1377070.0
        },
        {
            "SaleDate": "8/15/2021",
            "Sales": 1335320.0
        },
        {
            "SaleDate": "8/16/2021",
            "Sales": 1262320.0
        },
        {
            "SaleDate": "8/17/2021",
            "Sales": 1281910.0
        },
        {
            "SaleDate": "8/18/2021",
            "Sales": 1278680.0
        },
        {
            "SaleDate": "8/19/2021",
            "Sales": 1273650.0
        },
        {
            "SaleDate": "8/20/2021",
            "Sales": 1314960.0
        },
        {
            "SaleDate": "8/21/2021",
            "Sales": 1125290.0
        },
        {
            "SaleDate": "8/22/2021",
            "Sales": 1320060.0
        },
        {
            "SaleDate": "8/23/2021",
            "Sales": 1281510.0
        },
        {
            "SaleDate": "8/24/2021",
            "Sales": 1283430.0
        },
        {
            "SaleDate": "8/25/2021",
            "Sales": 1328750.0
        },
        {
            "SaleDate": "8/26/2021",
            "Sales": 1314030.0
        },
        {
            "SaleDate": "8/27/2021",
            "Sales": 1224390.0
        },
        {
            "SaleDate": "8/28/2021",
            "Sales": 1244120.0
        },
        {
            "SaleDate": "8/29/2021",
            "Sales": 1286490.0
        },
        {
            "SaleDate": "8/30/2021",
            "Sales": 1321900.0
        },
        {
            "SaleDate": "8/31/2021",
            "Sales": 1298370.0
        },
        {
            "SaleDate": "9/1/2021",
            "Sales": 1043990.0
        },
        {
            "SaleDate": "9/2/2021",
            "Sales": 1025190.0
        },
        {
            "SaleDate": "9/3/2021",
            "Sales": 1013950.0
        },
        {
            "SaleDate": "9/4/2021",
            "Sales": 1057920.0
        },
        {
            "SaleDate": "9/5/2021",
            "Sales": 1117150.0
        },
        {
            "SaleDate": "9/6/2021",
            "Sales": 967490.0
        },
        {
            "SaleDate": "9/7/2021",
            "Sales": 992050.0
        },
        {
            "SaleDate": "9/8/2021",
            "Sales": 993030.0
        },
        {
            "SaleDate": "9/9/2021",
            "Sales": 1022470.0
        },
        {
            "SaleDate": "9/10/2021",
            "Sales": 1097080.0
        },
        {
            "SaleDate": "9/11/2021",
            "Sales": 1213470.0
        },
        {
            "SaleDate": "9/12/2021",
            "Sales": 1293700.0
        },
        {
            "SaleDate": "9/13/2021",
            "Sales": 1313540.0
        },
        {
            "SaleDate": "9/14/2021",
            "Sales": 1243180.0
        },
        {
            "SaleDate": "9/15/2021",
            "Sales": 1233090.0
        },
        {
            "SaleDate": "9/16/2021",
            "Sales": 1212910.0
        },
        {
            "SaleDate": "9/17/2021",
            "Sales": 1297040.0
        },
        {
            "SaleDate": "9/18/2021",
            "Sales": 1133970.0
        },
        {
            "SaleDate": "9/19/2021",
            "Sales": 1149680.0
        },
        {
            "SaleDate": "9/20/2021",
            "Sales": 1250250.0
        },
        {
            "SaleDate": "9/21/2021",
            "Sales": 1219390.0
        },
        {
            "SaleDate": "9/22/2021",
            "Sales": 1132110.0
        },
        {
            "SaleDate": "9/23/2021",
            "Sales": 1166730.0
        },
        {
            "SaleDate": "9/24/2021",
            "Sales": 1240950.0
        },
        {
            "SaleDate": "9/25/2021",
            "Sales": 1127350.0
        },
        {
            "SaleDate": "9/26/2021",
            "Sales": 1352940.0
        },
        {
            "SaleDate": "9/27/2021",
            "Sales": 1133360.0
        },
        {
            "SaleDate": "9/28/2021",
            "Sales": 1175200.0
        },
        {
            "SaleDate": "9/29/2021",
            "Sales": 1103580.0
        },
        {
            "SaleDate": "9/30/2021",
            "Sales": 1266440.0
        },
        {
            "SaleDate": "10/1/2021",
            "Sales": 1091950.0
        },
        {
            "SaleDate": "10/2/2021",
            "Sales": 1035170.0
        },
        {
            "SaleDate": "10/3/2021",
            "Sales": 1033510.0
        },
        {
            "SaleDate": "10/4/2021",
            "Sales": 1045600.0
        },
        {
            "SaleDate": "10/5/2021",
            "Sales": 1105710.0
        },
        {
            "SaleDate": "10/6/2021",
            "Sales": 955730.0
        },
        {
            "SaleDate": "10/7/2021",
            "Sales": 1027420.0
        },
        {
            "SaleDate": "10/8/2021",
            "Sales": 1106120.0
        },
        {
            "SaleDate": "10/9/2021",
            "Sales": 1107210.0
        },
        {
            "SaleDate": "10/10/2021",
            "Sales": 1207380.0
        },
        {
            "SaleDate": "10/11/2021",
            "Sales": 1212390.0
        }
    ];

    new window.Smart.Chart('#dates-chart', {
        caption: '',
        description: '',
        backgroundColor: '#f5f5f5',
        showBorderLine: false,
        showLegend: false,
        dataSource: salesByDate,
        xAxis: {
            visible: true,
            dataField: 'SaleDate',
            type: 'date',
            rangeSelector: {
                visible: true,
                size: 80,
                padding: { top: 0, bottom: 0 },
                dataField: 'Sales',
                baseUnit: 'month',
                gridLines: { visible: false },
                serieType: 'area',
				colorScheme: 'scheme29',
                backgroundColor: '#f5f5f5',
                borderLineColor: '#f5f5f5'
            }
        },
        seriesGroups:
            [
                {
                    type: 'line',
                    series: [
                        { dataField: 'Sales', displayText: 'Sales' }
                    ]
                }
            ]
    });

    setTimeout(() => {
        document.getElementById('dates-chart').xAxis.rangeSelector.renderTo = document.getElementById('rangeSelector');
        document.getElementById('dates-chart').style.visibility = 'hidden';
    });

    document.getElementById('dates-chart').addEventListener('rangeSelectionChanged', onChangeCallback);
}