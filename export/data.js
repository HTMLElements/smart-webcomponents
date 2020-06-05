function getEmployees() {
    var data = new Array();
	var firstNames = ["Nancy", "Andrew", "Johnny", "Maya", "Steven", "Mark", "Monica", "Laura", "Anne"];
	var lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
	var titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager", "Sales Representative", "Sales Representative", "Inside Sales Coordinator", "Sales Representative"];
	var titleofcourtesy = ["Ms.", "Dr.", "Ms.", "Mrs.", "Mr.", "Mr.", "Mr.", "Ms.", "Ms."];
	var birthdate = ["08-Dec-48", "19-Feb-52", "30-Aug-63", "19-Sep-37", "04-Mar-55", "02-Jul-63", "29-May-60", "09-Jan-58", "27-Jan-66"];
	var hiredate = ["01-May-92", "14-Aug-92", "01-Apr-92", "03-May-93", "17-Oct-93", "17-Oct-93", "02-Jan-94", "05-Mar-94", "15-Nov-94"];
	var address = ["507 - 20th Ave. E. Apt. 2A", "908 W. Capital Way", "722 Moss Bay Blvd.", "4110 Old Redmond Rd.", "14 Garrett Hill", "Coventry House", "Miner Rd.", "Edgeham Hollow", "Winchester Way", "4726 - 11th Ave. N.E.", "7 Houndstooth Rd."];
	var city = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "London", "London", "Seattle", "London"];
	var postalcode = ["98122", "98401", "98033", "98052", "SW1 8JR", "EC2 7JR", "RG1 9SP", "98105", "WG2 7LT"];
	var country = ["USA", "USA", "USA", "USA", "UK", "UK", "UK", "USA", "UK"];
	var homephone = ["(206) 555-9857", "(206) 555-9482", "(206) 555-3412", "(206) 555-8122", "(71) 555-4848", "(71) 555-7773", "(71) 555-5598", "(206) 555-1189", "(71) 555-4444"];
	var notes = ["Education includes a BA in psychology from Colorado State University in 1970.  She also completed 'The Art of the Cold Call.'  Nancy is a member of Toastmasters International.",
		"Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
		"Johnny has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.",
		"Maya holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.",
		"Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses 'Successful Telemarketing' and 'International Sales Management.'  He is fluent in French.",
		"Mark is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses 'Multi-Cultural Selling' and 'Time Management for the Sales Professional.'  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
		"Monica King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled 'Selling in Europe,' he was transferred to the London office in March 1993.",
		"Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
		"Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German."];
	var k = 0;
	for (var i = 0; i < firstNames.length; i++) {
		var row = {};
		row["firstName"] = firstNames[k];
		row["lastName"] = lastNames[k];
		row["title"] = titles[k];
		row["titleOfCourtesy"] = titleofcourtesy[k];
		row["birthDate"] = birthdate[k];
		row["hireDate"] = hiredate[k];
		row["address"] = address[k];
		row["city"] = city[k];
		row["postalCode"] = postalcode[k];
		row["country"] = country[k];
		row["homePhone"] = homephone[k];
		row["notes"] = notes[k];
		data[i] = row;
		k++;
	}
	
	return data;
}

function generateData(rowscount, hasNullValues) {
    // prepare the data
    var data = new Array();
    if (rowscount == undefined) rowscount = 100;
    var firstNames =
    [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
    ];

    var lastNames =
    [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
    ];

    var productNames =
    [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
    ];

    var priceValues =
    [
         "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];

    for (var i = 0; i < rowscount; i++) {
        var row = {};
        var productindex = Math.floor(Math.random() * productNames.length);
        var price = parseFloat(priceValues[productindex]);
        var quantity = 1 + Math.round(Math.random() * 10);

        row["id"] = i;
        row["reportsto"] = Math.floor(Math.random() * firstNames.length);
        if (i % Math.floor(Math.random() * firstNames.length) === 0) {
            row["reportsto"] = null;
        }

        row["available"] = productindex % 2 == 0;
        if (hasNullValues == true) {
            if (productindex % 2 != 0) {
                var random = Math.floor(Math.random() * rowscount);
                row["available"] = i % random == 0 ? null : false;
            }
        }
        row["firstName"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["lastName"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["name"] = row["firstName"] + " " + row["lastName"]; 
        row["productName"] = productNames[productindex];
        row["price"] = price;
        row["quantity"] = quantity;
        row["total"] = price * quantity;

        var date = new Date();
        date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
        date.setHours(0, 0, 0, 0);
        row["date"] = date;
       
        data[i] = row;
    }

    return data;
}
function generateOrdersData(rowscount) {
    // prepare the data
    var data = new Array();
    if (rowscount == undefined) rowscount = 10;
    var firstNames =
    [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
    ];

    var lastNames =
    [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
    ];

    var productNames =
    [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
    ];

    var priceValues =
    [
         "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];

    var companyNames = ["Dolor Foundation", "Vivamus Non Lorem LLP", "Vel Ltd", "Turpis Incorporated", "Egestas Nunc PC", "At Pretium Aliquet Associates", "Feugiat Inc.", "Lacus Industries", "Senectus Et Foundation", "Sed LLC", "Maecenas Mi Felis LLC", "Pede Blandit Ltd", "Pellentesque Habitant Morbi Institute"
		, "Mollis Vitae Industries", "Malesuada Vel Convallis LLP", "Risus Duis Corp.", "Convallis LLP", "Lobortis Augue LLC", "Auctor LLP", "Neque Inc.", "Lorem Eu Corporation"];
		
    for (var i = 0; i < rowscount; i++) {
        var row = {};
        var productindex = Math.floor(Math.random() * productNames.length);
        var price = parseFloat(priceValues[productindex]);
        var quantity = 2 + Math.round(Math.random() * 10);
       
        row["id"] = i;
        row["parentid"] = null;
        row["name"] = "Order " + i;
        row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["customer"] = companyNames[Math.floor(Math.random() * companyNames.length)];
        var date = new Date();
        var month = Math.floor(Math.random() * 11);
        var day = Math.floor(Math.random() * 27);
        date.setFullYear(2016, month, day);
        date.setHours(0, 0, 0, 0);
        row["date"] = date;
        row["price"] = "";
        row["quantity"] = "";
        data.push(row);

        var subRowsCount = 1+Math.round(Math.random() * 8);
        var t = 0;
        var q = 0;
        for (var j = 0; j < subRowsCount; j++) {
            var subRow = {};
            var productindex = Math.floor(Math.random() * productNames.length);
            var price = parseFloat(priceValues[productindex]);
            var quantity = 1;
            subRow["name"] = productNames[productindex];
            subRow["id"] = "" + i + "." + (1 + j);
            subRow["parentid"] = i;
            subRow["price"] = price;
            subRow["quantity"] = 1;
            var date = new Date();
            date.setFullYear(2016, month, day);
            date.setHours(Math.floor(Math.random() * 23), Math.floor(Math.random() * 59), 0, 0);
            subRow["date"] = date;
            row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
            row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
            subRow["customer"] = row["firstname"] + " " + row["lastname"];
            t += quantity * price;
            data.push(subRow);
            q += quantity;
        }
        row["price"] = t;
        row["quantity"] = 1;
    }

    return data;
}
function generateCarsData() {
    var makes = [{ value:"", label: "Any"}, 
       {value:"140", label: "Abarth"},      
       {value:"375", label: "Acura"},      
       {value:"800", label: "Aixam"},      
       {value:"900", label: "Alfa Romeo"},      
       {value:"1100", label: "Alpina"},      
       {value:"121", label: "Artega"},      
       {value:"1750", label: "Asia Motors"},      
       {value:"1700", label: "Aston Martin"},      
       {value:"1900", label: "Audi"},      
       {value:"2000", label: "Austin"},      
       {value:"1950", label: "Austin Healey"},      
       {value:"3100", label: "Bentley"},      
       {value:"3500", label: "BMW"},      
       {value:"3850", label: "Borgward"},      
       {value:"4025", label: "Brilliance"},      
       {value:"4350", label: "Bugatti"},      
       {value:"4400", label: "Buick"},      
       {value:"4700", label: "Cadillac"},      
       {value:"112", label: "Casalini"},      
       {value:"5300", label: "Caterham"},      
       {value:"5600", label: "Chevrolet"},      
       {value:"5700", label: "Chrysler"},      
       {value:"5900", label: "Citroën"},      
       {value:"6200", label: "Cobra"},      
       {value:"6325", label: "Corvette"},      
       {value:"6600", label: "Dacia"},      
       {value:"6800", label: "Daewoo"},      
       {value:"7000", label: "Daihatsu"},      
       {value:"7400", label: "DeTomaso"},      
       {value:"7700", label: "Dodge"},      
       {value:"8600", label: "Ferrari"},      
       {value:"8800", label: "Fiat"},      
       {value:"172", label: "Fisker"},      
       {value:"9000", label: "Ford"},      
       {value:"9900", label: "GMC"},      
       {value:"122", label: "Grecav"},      
       {value:"10850", label: "Holden"},      
       {value:"11000", label: "Honda"},      
       {value:"11050", label: "Hummer"},      
       {value:"11600", label: "Hyundai"},      
       {value:"11650", label: "Infiniti"},      
       {value:"11900", label: "Isuzu"},      
       {value:"12100", label: "Iveco"},      
       {value:"12400", label: "Jaguar"},      
       {value:"12600", label: "Jeep"},      
       {value:"13200", label: "Kia"},      
       {value:"13450", label: "Königsegg"},      
       {value:"13900", label: "KTM"},      
       {value:"14400", label: "Lada"},      
       {value:"14600", label: "Lamborghini"},      
       {value:"14700", label: "Lancia"},      
       {value:"14800", label: "Land Rover"},      
       {value:"14845", label: "Landwind"},      
       {value:"15200", label: "Lexus"},      
       {value:"15400", label: "Ligier"},      
       {value:"15500", label: "Lincoln"},      
       {value:"15900", label: "Lotus"},      
       {value:"16200", label: "Mahindra"},      
       {value:"16600", label: "Maserati"},      
       {value:"16700", label: "Maybach"},      
       {value:"16800", label: "Mazda"},      
       {value:"137", label: "McLaren"},      
       {value:"17200", label: "Mercedes-Benz"},      
       {value:"17300", label: "MG"},      
       {value:"30011", label: "Microcar"},      
       {value:"17500", label: "MINI"},      
       {value:"17700", label: "Mitsubishi"},      
       {value:"17900", label: "Morgan"},      
       {value:"18700", label: "Nissan"},      
       {value:"18875", label: "NSU"},      
       {value:"18975", label: "Oldsmobile"},      
       {value:"19000", label: "Opel"},      
       {value:"149", label: "Pagani"},      
       {value:"19300", label: "Peugeot"},      
       {value:"19600", label: "Piaggio"},      
       {value:"19800", label: "Plymouth"},      
       {value:"20000", label: "Pontiac"},      
       {value:"20100", label: "Porsche"},      
       {value:"20200", label: "Proton"},      
       {value:"20700", label: "Renault"},      
       {value:"21600", label: "Rolls Royce"},      
       {value:"21700", label: "Rover"},      
       {value:"125", label: "Ruf"},      
       {value:"21800", label: "Saab"},      
       {value:"22000", label: "Santana"},      
       {value:"22500", label: "Seat"},      
       {value:"22900", label: "Skoda"},      
       {value:"23000", label: "Smart"},      
       {value:"100", label: "Spyker"},      
       {value:"23100", label: "Ssangyong"},      
       {value:"23500", label: "Subaru"},      
       {value:"23600", label: "Suzuki"},      
       {value:"23800", label: "Talbot"},      
       {value:"23825", label: "Tata"},      
       {value:"135", label: "Tesla"},      
       {value:"24100", label: "Toyota"},      
       {value:"24200", label: "Trabant"},      
       {value:"24400", label: "Triumph"},      
       {value:"24500", label: "TVR"},      
       {value:"25200", label: "Volkswagen"},      
       {value:"25100", label: "Volvo"},      
       {value:"25300", label: "Wartburg"},      
       {value:"113", label: "Westfield"},      
       { value: "25650", label: "Wiesmann" }];

    var fuelType = ["Any", "Diesel", "Electric", "Ethanol (FFV, E85, etc.)", "Gas", "LPG", "Natural Gas", "Hybrid", "Hydrogen", "Petrol"];
    var vehicleType = ["Saloon", "Small Car", "Estate Car", "Van / Minibus", "Off-road Vehicle/Pickup Truck", "Cabriolet / Roadster", "Sports Car/Coupe"];
    var power =
    [
      {value:"24", label: "24 kW (33 PS)"},
      {value:"36", label: "36 kW (49 PS)"},
      {value:"43", label: "43 kW (58 PS)"},
      {value:"54", label: "54 kW (73 PS)"},
      {value:"65", label: "65 kW (88 PS)"},
      {value:"73", label: "73 kW (99 PS)"},
      {value:"86", label: "86 kW (117 PS)"},
      {value:"95", label: "95 kW (129 PS)"},
      {value:"109", label: "109 kW (148 PS)"},
      {value:"146", label: "146 kW (199 PS)"},
      {value:"184", label: "184 kW (250 PS)"},
      {value:"222", label: "222 kW (302 PS)"},
      {value:"262", label: "262 kW (356 PS)"},
      {value:"295", label: "295 kW (401 PS)"},
      {value:"333", label: "333 kW (453 PS)"}
    ];

    var data = new Array();
    for (var i = 0; i < makes.length; i++) {
        var row = {};
        row.make = makes[i].label;
        row.fuelType = fuelType[Math.floor(Math.random() * fuelType.length)];
        row.vehicleType = vehicleType[Math.floor(Math.random() * vehicleType.length)];
        var powerIndex = Math.floor(Math.random() * power.length);
        if (powerIndex == power.length - 1) powerIndex --;
        row.powerFrom = power[powerIndex];
        row.powerTo = power[powerIndex + 1];
        data.push(row);
    }
    return data;
}

function getCountriesData() {
    var countries = [{
        "ID": 1,
        "Country": "Brazil",
        "Area": 8515767,
        "Population_Urban": 0.85,
        "Population_Rural": 0.15,
        "Population_Total": 205809000,
        "GDP_Agriculture": 0.054,
        "GDP_Industry": 0.274,
        "GDP_Services": 0.672,
        "GDP_Total": 2353025
    }, {
        "ID": 2,
        "Country": "China",
        "Area": 9388211,
        "Population_Urban": 0.54,
        "Population_Rural": 0.46,
        "Population_Total": 1375530000,
        "GDP_Agriculture": 0.091,
        "GDP_Industry": 0.426,
        "GDP_Services": 0.483,
        "GDP_Total": 10380380
    }, {
        "ID": 3,
        "Country": "France",
        "Area": 675417,
        "Population_Urban": 0.79,
        "Population_Rural": 0.21,
        "Population_Total": 64529000,
        "GDP_Agriculture": 0.019,
        "GDP_Industry": 0.183,
        "GDP_Services": 0.798,
        "GDP_Total": 2846889
    }, {
        "ID": 4,
        "Country": "Germany",
        "Area": 357021,
        "Population_Urban": 0.75,
        "Population_Rural": 0.25,
        "Population_Total": 81459000,
        "GDP_Agriculture": 0.008,
        "GDP_Industry": 0.281,
        "GDP_Services": 0.711,
        "GDP_Total": 3859547
    }, {
        "ID": 5,
        "Country": "India",
        "Area": 3287590,
        "Population_Urban": 0.32,
        "Population_Rural": 0.68,
        "Population_Total": 1286260000,
        "GDP_Agriculture": 0.174,
        "GDP_Industry": 0.258,
        "GDP_Services": 0.569,
        "GDP_Total": 2047811
    }, {
        "ID": 6,
        "Country": "Italy",
        "Area": 301230,
        "Population_Urban": 0.69,
        "Population_Rural": 0.31,
        "Population_Total": 60676361,
        "GDP_Agriculture": 0.02,
        "GDP_Industry": 0.242,
        "GDP_Services": 0.738,
        "GDP_Total": 2147952
    }, {
        "ID": 7,
        "Country": "Japan",
        "Area": 377835,
        "Population_Urban": 0.93,
        "Population_Rural": 0.07,
        "Population_Total": 126920000,
        "GDP_Agriculture": 0.012,
        "GDP_Industry": 0.275,
        "GDP_Services": 0.714,
        "GDP_Total": 4616335
    }, {
        "ID": 8,
        "Country": "Russia",
        "Area": 17098242,
        "Population_Urban": 0.74,
        "Population_Rural": 0.26,
        "Population_Total": 146544710,
        "GDP_Agriculture": 0.039,
        "GDP_Industry": 0.36,
        "GDP_Services": 0.601,
        "GDP_Total": 1857461
    }, {
        "ID": 9,
        "Country": "United States",
        "Area": 9147420,
        "Population_Urban": 0.81,
        "Population_Rural": 0.19,
        "Population_Total": 323097000,
        "GDP_Agriculture": 0.0112,
        "GDP_Industry": 0.191,
        "GDP_Services": 0.797,
        "GDP_Total": 17418925
    }, {
        "ID": 10,
        "Country": "United Kingdom",
        "Area": 244820,
        "Population_Urban": 0.82,
        "Population_Rural": 0.18,
        "Population_Total": 65097000,
        "GDP_Agriculture": 0.007,
        "GDP_Industry": 0.21,
        "GDP_Services": 0.783,
        "GDP_Total": 2945146
    }];

    return countries;
}


function getStockData() {
	var data = 
	 [
        {
            "symbol": "BA",
            "name": "The Boeing Company",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "1.0000"
        },
        {
            "symbol": "BABA",
            "name": "Alibaba Group Holding Limited",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.8000"
        },
        {
            "symbol": "BAC",
            "name": "Bank of America Corporation",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.6667"
        },
        {
            "symbol": "BSVN",
            "name": "Bank7 Corp.",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.4000"
        },
        {
            "symbol": "BHC",
            "name": "Bausch Health Companies Inc.",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.4000"
        },
        {
            "symbol": "GOLD",
            "name": "Barrick Gold Corporation",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.3333"
        },
        {
            "symbol": "BIDU",
            "name": "Baidu Inc.",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.3333"
        },
        {
            "symbol": "ABX",
            "name": "Barrick Gold Corporation",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.3333"
        },
        {
            "symbol": "BLDP",
            "name": "Ballard Power Systems Inc.",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.3333"
        },
        {
            "symbol": "BZUN",
            "name": "Baozun Inc.",
            "type": "Equity",
            "region": "United States",
            "marketOpen": "09:30",
            "marketClose": "16:00",
            "timezone": "UTC-05",
            "currency": "USD",
            "matchScore": "0.1538"
        }
    ];
	
	return data;
}


function getCountriesCodesData() {
	const data = [
	  ["Albania","AL","ALB",8  ],
	  ["Algeria","DZ","DZA",12  ],
	  ["American Samoa","AS","ASM",16  ],
	  ["Andorra","AD","AND",20  ],
	  ["Angola","AO","AGO",24  ],
	  ["Anguilla","AI","AIA",660  ],
	  ["Antarctica","AQ","ATA",10  ],
	  ["Antigua and Barbuda","AG","ATG",28  ],
	  ["Argentina","AR","ARG",32  ],
	  ["Armenia","AM","ARM",51  ],
	  ["Aruba","AW","ABW",533  ],
	  ["Australia","AU","AUS",36  ],
	  ["Austria","AT","AUT",40  ],
	  ["Azerbaijan","AZ","AZE",31  ],
	  ["Bahamas (the)","BS","BHS",44  ],
	  ["Bahrain","BH","BHR",48  ],
	  ["Bangladesh","BD","BGD",50  ],
	  ["Barbados","BB","BRB",52  ],
	  ["Belarus","BY","BLR",112  ],
	  ["Belgium","BE","BEL",56  ],
	  ["Belize","BZ","BLZ",84  ],
	  ["Benin","BJ","BEN",204  ],
	  ["Bermuda","BM","BMU",60  ],
	  ["Bhutan","BT","BTN",64  ],
	  ["Bolivia (Plurinational State of)","BO","BOL",68  ],
	  ["Bonaire, Sint Eustatius and Saba","BQ","BES",535  ],
	  ["Bosnia and Herzegovina","BA","BIH",70  ],
	  ["Botswana","BW","BWA",72  ],
	  ["Bouvet Island","BV","BVT",74  ],
	  ["Brazil","BR","BRA",76  ],
	  ["British Indian Ocean Territory (the)","IO","IOT",86  ],
	  ["Brunei Darussalam","BN","BRN",96  ],
	  ["Bulgaria","BG","BGR",100  ],
	  ["Burkina Faso","BF","BFA",854  ],
	  ["Burundi","BI","BDI",108  ],
	  ["Cabo Verde","CV","CPV",132  ],
	  ["Cambodia","KH","KHM",116  ],
	  ["Cameroon","CM","CMR",120  ],
	  ["Canada","CA","CAN",124  ],
	  ["Cayman Islands (the)","KY","CYM",136  ],
	  ["Central African Republic (the)","CF","CAF",140  ],
	  ["Chad","TD","TCD",148  ],
	  ["Chile","CL","CHL",152  ],
	  ["China","CN","CHN",156  ],
	  ["Christmas Island","CX","CXR",162  ],
	  ["Cocos (Keeling) Islands (the)","CC","CCK",166  ],
	  ["Colombia","CO","COL",170  ],
	  ["Comoros (the)","KM","COM",174  ],
	  ["Congo (the Democratic Republic of the)","CD","COD",180  ],
	  ["Congo (the)","CG","COG",178  ],
	  ["Cook Islands (the)","CK","COK",184  ],
	  ["Costa Rica","CR","CRI",188  ],
	  ["Croatia","HR","HRV",191  ],
	  ["Cuba","CU","CUB",192  ],
	  ["Curaçao","CW","CUW",531  ],
	  ["Cyprus","CY","CYP",196  ],
	  ["Czechia","CZ","CZE",203  ],
	  ["Côte d'Ivoire","CI","CIV",384  ],
	  ["Denmark","DK","DNK",208  ],
	  ["Djibouti","DJ","DJI",262  ],
	  ["Dominica","DM","DMA",212  ],
	  ["Dominican Republic (the)","DO","DOM",214  ],
	  ["Ecuador","EC","ECU",218  ],
	  ["Egypt","EG","EGY",818  ],
	  ["El Salvador","SV","SLV",222  ],
	  ["Equatorial Guinea","GQ","GNQ",226  ],
	  ["Eritrea","ER","ERI",232  ],
	  ["Estonia","EE","EST",233  ],
	  ["Eswatini","SZ","SWZ",748  ],
	  ["Ethiopia","ET","ETH",231  ],
	  ["Falkland Islands (the) [Malvinas]","FK","FLK",238  ],
	  ["Faroe Islands (the)","FO","FRO",234  ],
	  ["Fiji","FJ","FJI",242  ],
	  ["Finland","FI","FIN",246  ],
	  ["France","FR","FRA",250  ],
	  ["French Guiana","GF","GUF",254  ],
	  ["French Polynesia","PF","PYF",258  ],
	  ["French Southern Territories (the)","TF","ATF",260  ],
	  ["Gabon","GA","GAB",266  ],
	  ["Gambia (the)","GM","GMB",270  ],
	  ["Georgia","GE","GEO",268  ],
	  ["Germany","DE","DEU",276  ],
	  ["Ghana","GH","GHA",288  ],
	  ["Gibraltar","GI","GIB",292  ],
	  ["Greece","GR","GRC",300  ],
	  ["Greenland","GL","GRL",304  ],
	  ["Grenada","GD","GRD",308  ],
	  ["Guadeloupe","GP","GLP",312  ],
	  ["Guam","GU","GUM",316  ],
	  ["Guatemala","GT","GTM",320  ],
	  ["Guernsey","GG","GGY",831  ],
	  ["Guinea","GN","GIN",324  ],
	  ["Guinea-Bissau","GW","GNB",624  ],
	  ["Guyana","GY","GUY",328  ],
	  ["Haiti","HT","HTI",332  ],
	  ["Heard Island and McDonald Islands","HM","HMD",334  ],
	  ["Holy See (the)","VA","VAT",336  ],
	  ["Honduras","HN","HND",340  ],
	  ["Hong Kong","HK","HKG",344  ],
	  ["Hungary","HU","HUN",348  ],
	  ["Iceland","IS","ISL",352  ],
	  ["India","IN","IND",356  ],
	  ["Indonesia","ID","IDN",360  ],
	  ["Iran (Islamic Republic of)","IR","IRN",364  ],
	  ["Iraq","IQ","IRQ",368  ],
	  ["Ireland","IE","IRL",372  ],
	  ["Isle of Man","IM","IMN",833  ],
	  ["Israel","IL","ISR",376  ],
	  ["Italy","IT","ITA",380  ],
	  ["Jamaica","JM","JAM",388  ],
	  ["Japan","JP","JPN",392  ],
	  ["Jersey","JE","JEY",832  ],
	  ["Jordan","JO","JOR",400  ],
	  ["Kazakhstan","KZ","KAZ",398  ],
	  ["Kenya","KE","KEN",404  ],
	  ["Kiribati","KI","KIR",296  ],
	  ["Korea (the Democratic People's Republic of)","KP","PRK",408  ],
	  ["Korea (the Republic of)","KR","KOR",410  ],
	  ["Kuwait","KW","KWT",414  ],
	  ["Kyrgyzstan","KG","KGZ",417  ],
	  ["Lao People's Democratic Republic (the)","LA","LAO",418  ],
	  ["Latvia","LV","LVA",428  ],
	  ["Lebanon","LB","LBN",422  ],
	  ["Lesotho","LS","LSO",426  ],
	  ["Liberia","LR","LBR",430  ],
	  ["Libya","LY","LBY",434  ],
	  ["Liechtenstein","LI","LIE",438  ],
	  ["Lithuania","LT","LTU",440  ],
	  ["Luxembourg","LU","LUX",442  ],
	  ["Macao","MO","MAC",446  ],
	  ["Madagascar","MG","MDG",450  ],
	  ["Malawi","MW","MWI",454  ],
	  ["Malaysia","MY","MYS",458  ],
	  ["Maldives","MV","MDV",462  ],
	  ["Mali","ML","MLI",466  ],
	  ["Malta","MT","MLT",470  ],
	  ["Marshall Islands (the)","MH","MHL",584  ],
	  ["Martinique","MQ","MTQ",474  ],
	  ["Mauritania","MR","MRT",478  ],
	  ["Mauritius","MU","MUS",480  ],
	  ["Mayotte","YT","MYT",175  ],
	  ["Mexico","MX","MEX",484  ],
	  ["Micronesia (Federated States of)","FM","FSM",583  ],
	  ["Moldova (the Republic of)","MD","MDA",498  ],
	  ["Monaco","MC","MCO",492  ],
	  ["Mongolia","MN","MNG",496  ],
	  ["Montenegro","ME","MNE",499  ],
	  ["Montserrat","MS","MSR",500  ],
	  ["Morocco","MA","MAR",504  ],
	  ["Mozambique","MZ","MOZ",508  ],
	  ["Myanmar","MM","MMR",104  ],
	  ["Namibia","NA","NAM",516  ],
	  ["Nauru","NR","NRU",520  ],
	  ["Nepal","NP","NPL",524  ],
	  ["Netherlands (the)","NL","NLD",528  ],
	  ["New Caledonia","NC","NCL",540  ],
	  ["New Zealand","NZ","NZL",554  ],
	  ["Nicaragua","NI","NIC",558  ],
	  ["Niger (the)","NE","NER",562  ],
	  ["Nigeria","NG","NGA",566  ],
	  ["Niue","NU","NIU",570  ],
	  ["Norfolk Island","NF","NFK",574  ],
	  ["Northern Mariana Islands (the)","MP","MNP",580  ],
	  ["Norway","NO","NOR",578  ],
	  ["Oman","OM","OMN",512  ],
	  ["Pakistan","PK","PAK",586  ],
	  ["Palau","PW","PLW",585  ],
	  ["Palestine, State of","PS","PSE",275  ],
	  ["Panama","PA","PAN",591  ],
	  ["Papua New Guinea","PG","PNG",598  ],
	  ["Paraguay","PY","PRY",600  ],
	  ["Peru","PE","PER",604  ],
	  ["Philippines (the)","PH","PHL",608  ],
	  ["Pitcairn","PN","PCN",612  ],
	  ["Poland","PL","POL",616  ],
	  ["Portugal","PT","PRT",620  ],
	  ["Puerto Rico","PR","PRI",630  ],
	  ["Qatar","QA","QAT",634  ],
	  ["Republic of North Macedonia","MK","MKD",807  ],
	  ["Romania","RO","ROU",642  ],
	  ["Russian Federation (the)","RU","RUS",643  ],
	  ["Rwanda","RW","RWA",646  ],
	  ["Réunion","RE","REU",638  ],
	  ["Saint Barthélemy","BL","BLM",652  ],
	  ["Saint Helena, Ascension and Tristan da Cunha","SH","SHN",654  ],
	  ["Saint Kitts and Nevis","KN","KNA",659  ],
	  ["Saint Lucia","LC","LCA",662  ],
	  ["Saint Martin (French part)","MF","MAF",663  ],
	  ["Saint Pierre and Miquelon","PM","SPM",666  ],
	  ["Saint Vincent and the Grenadines","VC","VCT",670  ],
	  ["Samoa","WS","WSM",882  ],
	  ["San Marino","SM","SMR",674  ],
	  ["Sao Tome and Principe","ST","STP",678  ],
	  ["Saudi Arabia","SA","SAU",682  ],
	  ["Senegal","SN","SEN",686  ],
	  ["Serbia","RS","SRB",688  ],
	  ["Seychelles","SC","SYC",690  ],
	  ["Sierra Leone","SL","SLE",694  ],
	  ["Singapore","SG","SGP",702  ],
	  ["Sint Maarten (Dutch part)","SX","SXM",534  ],
	  ["Slovakia","SK","SVK",703  ],
	  ["Slovenia","SI","SVN",705  ],
	  ["Solomon Islands","SB","SLB",90  ],
	  ["Somalia","SO","SOM",706  ],
	  ["South Africa","ZA","ZAF",710  ],
	  ["South Georgia and the South Sandwich Islands","GS","SGS",239  ],
	  ["South Sudan","SS","SSD",728  ],
	  ["Spain","ES","ESP",724  ],
	  ["Sri Lanka","LK","LKA",144  ],
	  ["Sudan (the)","SD","SDN",729  ],
	  ["Suriname","SR","SUR",740  ],
	  ["Svalbard and Jan Mayen","SJ","SJM",744  ],
	  ["Sweden","SE","SWE",752  ],
	  ["Switzerland","CH","CHE",756  ],
	  ["Syrian Arab Republic","SY","SYR",760  ],
	  ["Taiwan (Province of China)","TW","TWN",158  ],
	  ["Tajikistan","TJ","TJK",762  ],
	  ["Tanzania, United Republic of","TZ","TZA",834  ],
	  ["Thailand","TH","THA",764  ],
	  ["Timor-Leste","TL","TLS",626  ],
	  ["Togo","TG","TGO",768  ],
	  ["Tokelau","TK","TKL",772  ],
	  ["Tonga","TO","TON",776  ],
	  ["Trinidad and Tobago","TT","TTO",780  ],
	  ["Tunisia","TN","TUN",788  ],
	  ["Turkey","TR","TUR",792  ],
	  ["Turkmenistan","TM","TKM",795  ],
	  ["Turks and Caicos Islands (the)","TC","TCA",796  ],
	  ["Tuvalu","TV","TUV",798  ],
	  ["Uganda","UG","UGA",800  ],
	  ["Ukraine","UA","UKR",804  ],
	  ["United Arab Emirates (THE)","AE","ARE",784  ],
	  ["United Kingdom of Great Britain and Northern Ireland (the)","GB","GBR",826  ],
	  ["United States Minor Outlying Islands (the)","UM","UMI",581  ],
	  ["United States of America (the)","US","USA",840  ],
	  ["Uruguay","UY","URY",858  ],
	  ["Uzbekistan","UZ","UZB",860  ],
	  ["Vanuatu","VU","VUT",548  ],
	  ["Venezuela (Bolivarian Republic of)","VE","VEN",862  ],
	  ["Viet Nam","VN","VNM",704  ],
	  ["Virgin Islands (British)","VG","VGB",92  ],
	  ["Virgin Islands (U.S.)","VI","VIR",850  ],
	  ["Wallis and Futuna","WF","WLF",876  ],
	  ["Western Sahara","EH","ESH",732  ],
	  ["Yemen","YE","YEM",887  ],
	  ["Zambia","ZM","ZMB",894  ],
	  ["Zimbabwe","ZW","ZWE",716  ],
	  ["Åland Islands","AX","ALA",248  ]
	]
	return data;
}

function getCountriesCurrencyData() {
	var data = [
	  ["ALBANIA","Lek","ALL",8  ],
	  ["ALGERIA","Algerian Dinar","DZD",12  ],
	  ["AMERICAN SAMOA","US Dollar","USD",840  ],
	  ["ANDORRA","Euro","EUR",978  ],
	  ["ANGOLA","Kwanza","AOA",973  ],
	  ["ANGUILLA","East Caribbean Dollar","XCD",951  ],
	  ["ANTARCTICA","No universal currency","",null  ],
	  ["ANTIGUA AND BARBUDA","East Caribbean Dollar","XCD",951  ],
	  ["ARGENTINA","Argentine Peso","ARS",32  ],
	  ["ARMENIA","Armenian Dram","AMD",51  ],
	  ["ARUBA","Aruban Florin","AWG",533  ],
	  ["AUSTRALIA","Australian Dollar","AUD",36  ],
	  ["AUSTRIA","Euro","EUR",978  ],
	  ["AZERBAIJAN","Azerbaijanian Manat","AZN",944  ],
	  ["BAHAMAS (THE)","Bahamian Dollar","BSD",44  ],
	  ["BAHRAIN","Bahraini Dinar","BHD",48  ],
	  ["BANGLADESH","Taka","BDT",50  ],
	  ["BARBADOS","Barbados Dollar","BBD",52  ],
	  ["BELARUS","Belarussian Ruble","BYN",933  ],
	  ["BELGIUM","Euro","EUR",978  ],
	  ["BELIZE","Belize Dollar","BZD",84  ],
	  ["BENIN","CFA Franc BCEAO","XOF",952  ],
	  ["BERMUDA","Bermudian Dollar","BMD",60  ],
	  ["BHUTAN","Ngultrum","BTN",64  ],
	  ["BHUTAN","Indian Rupee","INR",356  ],
	  ["BOLIVIA (PLURINATIONAL STATE OF)","Boliviano","BOB",68  ],
	  ["BOLIVIA (PLURINATIONAL STATE OF)","Mvdol","BOV",984  ],
	  ["BONAIRE, SINT EUSTATIUS AND SABA","US Dollar","USD",840  ],
	  ["BOSNIA AND HERZEGOVINA","Convertible Mark","BAM",977  ],
	  ["BOTSWANA","Pula","BWP",72  ],
	  ["BOUVET ISLAND","Norwegian Krone","NOK",578  ],
	  ["BRAZIL","Brazilian Real","BRL",986  ],
	  ["BRITISH INDIAN OCEAN TERRITORY (THE)","US Dollar","USD",840  ],
	  ["BRUNEI DARUSSALAM","Brunei Dollar","BND",96  ],
	  ["BULGARIA","Bulgarian Lev","BGN",975  ],
	  ["BURKINA FASO","CFA Franc BCEAO","XOF",952  ],
	  ["BURUNDI","Burundi Franc","BIF",108  ],
	  ["CABO VERDE","Cabo Verde Escudo","CVE",132  ],
	  ["CAMBODIA","Riel","KHR",116  ],
	  ["CAMEROON","CFA Franc BEAC","XAF",950  ],
	  ["CANADA","Canadian Dollar","CAD",124  ],
	  ["CAYMAN ISLANDS (THE)","Cayman Islands Dollar","KYD",136  ],
	  ["CENTRAL AFRICAN REPUBLIC (THE)","CFA Franc BEAC","XAF",950  ],
	  ["CHAD","CFA Franc BEAC","XAF",950  ],
	  ["CHILE","Unidad de Fomento","CLF",990  ],
	  ["CHILE","Chilean Peso","CLP",152  ],
	  ["CHINA","Yuan Renminbi","CNY",156  ],
	  ["CHRISTMAS ISLAND","Australian Dollar","AUD",36  ],
	  ["COCOS (KEELING) ISLANDS (THE)","Australian Dollar","AUD",36  ],
	  ["COLOMBIA","Colombian Peso","COP",170  ],
	  ["COLOMBIA","Unidad de Valor Real","COU",970  ],
	  ["COMOROS (THE)","Comoro Franc","KMF",174  ],
	  ["CONGO (THE DEMOCRATIC REPUBLIC OF THE)","Congolese Franc","CDF",976  ],
	  ["CONGO (THE)","CFA Franc BEAC","XAF",950  ],
	  ["COOK ISLANDS (THE)","New Zealand Dollar","NZD",554  ],
	  ["COSTA RICA","Costa Rican Colon","CRC",188  ],
	  ["CROATIA","Kuna","HRK",191  ],
	  ["CUBA","Peso Convertible","CUC",931  ],
	  ["CUBA","Cuban Peso","CUP",192  ],
	  ["CURAÇAO","Netherlands Antillean Guilder","ANG",532  ],
	  ["CYPRUS","Euro","EUR",978  ],
	  ["CZECH REPUBLIC (THE)","Czech Koruna","CZK",203  ],
	  ["CÔTE D'IVOIRE","CFA Franc BCEAO","XOF",952  ],
	  ["DENMARK","Danish Krone","DKK",208  ],
	  ["DJIBOUTI","Djibouti Franc","DJF",262  ],
	  ["DOMINICA","East Caribbean Dollar","XCD",951  ],
	  ["DOMINICAN REPUBLIC (THE)","Dominican Peso","DOP",214  ],
	  ["ECUADOR","US Dollar","USD",840  ],
	  ["EGYPT","Egyptian Pound","EGP",818  ],
	  ["EL SALVADOR","El Salvador Colon","SVC",222  ],
	  ["EL SALVADOR","US Dollar","USD",840  ],
	  ["EQUATORIAL GUINEA","CFA Franc BEAC","XAF",950  ],
	  ["ERITREA","Nakfa","ERN",232  ],
	  ["ESTONIA","Euro","EUR",978  ],
	  ["ETHIOPIA","Ethiopian Birr","ETB",230  ],
	  ["EUROPEAN UNION","Euro","EUR",978  ],
	  ["FALKLAND ISLANDS (THE) [MALVINAS]","Falkland Islands Pound","FKP",238  ],
	  ["FAROE ISLANDS (THE)","Danish Krone","DKK",208  ],
	  ["FIJI","Fiji Dollar","FJD",242  ],
	  ["FINLAND","Euro","EUR",978  ],
	  ["FRANCE","Euro","EUR",978  ],
	  ["FRENCH GUIANA","Euro","EUR",978  ],
	  ["FRENCH POLYNESIA","CFP Franc","XPF",953  ],
	  ["FRENCH SOUTHERN TERRITORIES (THE)","Euro","EUR",978  ],
	  ["GABON","CFA Franc BEAC","XAF",950  ],
	  ["GAMBIA (THE)","Dalasi","GMD",270  ],
	  ["GEORGIA","Lari","GEL",981  ],
	  ["GERMANY","Euro","EUR",978  ],
	  ["GHANA","Ghana Cedi","GHS",936  ],
	  ["GIBRALTAR","Gibraltar Pound","GIP",292  ],
	  ["GREECE","Euro","EUR",978  ],
	  ["GREENLAND","Danish Krone","DKK",208  ],
	  ["GRENADA","East Caribbean Dollar","XCD",951  ],
	  ["GUADELOUPE","Euro","EUR",978  ],
	  ["GUAM","US Dollar","USD",840  ],
	  ["GUATEMALA","Quetzal","GTQ",320  ],
	  ["GUERNSEY","Pound Sterling","GBP",826  ],
	  ["GUINEA","Guinea Franc","GNF",324  ],
	  ["GUINEA-BISSAU","CFA Franc BCEAO","XOF",952  ],
	  ["GUYANA","Guyana Dollar","GYD",328  ],
	  ["HAITI","Gourde","HTG",332  ],
	  ["HAITI","US Dollar","USD",840  ],
	  ["HEARD ISLAND AND McDONALD ISLANDS","Australian Dollar","AUD",36  ],
	  ["HOLY SEE (THE)","Euro","EUR",978  ],
	  ["HONDURAS","Lempira","HNL",340  ],
	  ["HONG KONG","Hong Kong Dollar","HKD",344  ],
	  ["HUNGARY","Forint","HUF",348  ],
	  ["ICELAND","Iceland Krona","ISK",352  ],
	  ["INDIA","Indian Rupee","INR",356  ],
	  ["INDONESIA","Rupiah","IDR",360  ],
	  ["INTERNATIONAL MONETARY FUND (IMF)","SDR (Special Drawing Right)","XDR",960  ],
	  ["IRAN (ISLAMIC REPUBLIC OF)","Iranian Rial","IRR",364  ],
	  ["IRAQ","Iraqi Dinar","IQD",368  ],
	  ["IRELAND","Euro","EUR",978  ],
	  ["ISLE OF MAN","Pound Sterling","GBP",826  ],
	  ["ISRAEL","New Israeli Sheqel","ILS",376  ],
	  ["ITALY","Euro","EUR",978  ],
	  ["JAMAICA","Jamaican Dollar","JMD",388  ],
	  ["JAPAN","Yen","JPY",392  ],
	  ["JERSEY","Pound Sterling","GBP",826  ],
	  ["JORDAN","Jordanian Dinar","JOD",400  ],
	  ["KAZAKHSTAN","Tenge","KZT",398  ],
	  ["KENYA","Kenyan Shilling","KES",404  ],
	  ["KIRIBATI","Australian Dollar","AUD",36  ],
	  ["KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)","North Korean Won","KPW",408  ],
	  ["KOREA (THE REPUBLIC OF)","Won","KRW",410  ],
	  ["KUWAIT","Kuwaiti Dinar","KWD",414  ],
	  ["KYRGYZSTAN","Som","KGS",417  ],
	  ["LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)","Kip","LAK",418  ],
	  ["LATVIA","Euro","EUR",978  ],
	  ["LEBANON","Lebanese Pound","LBP",422  ],
	  ["LESOTHO","Loti","LSL",426  ],
	  ["LESOTHO","Rand","ZAR",710  ],
	  ["LIBERIA","Liberian Dollar","LRD",430  ],
	  ["LIBYA","Libyan Dinar","LYD",434  ],
	  ["LIECHTENSTEIN","Swiss Franc","CHF",756  ],
	  ["LITHUANIA","Euro","EUR",978  ],
	  ["LUXEMBOURG","Euro","EUR",978  ],
	  ["MACAO","Pataca","MOP",446  ],
	  ["MADAGASCAR","Malagasy Ariary","MGA",969  ],
	  ["MALAWI","Kwacha","MWK",454  ],
	  ["MALAYSIA","Malaysian Ringgit","MYR",458  ],
	  ["MALDIVES","Rufiyaa","MVR",462  ],
	  ["MALI","CFA Franc BCEAO","XOF",952  ],
	  ["MALTA","Euro","EUR",978  ],
	  ["MARSHALL ISLANDS (THE)","US Dollar","USD",840  ],
	  ["MARTINIQUE","Euro","EUR",978  ],
	  ["MAURITANIA","Ouguiya","MRU",929  ],
	  ["MAURITIUS","Mauritius Rupee","MUR",480  ],
	  ["MAYOTTE","Euro","EUR",978  ],
	  ["MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP","ADB Unit of Account","XUA",965  ],
	  ["MEXICO","Mexican Peso","MXN",484  ],
	  ["MEXICO","Mexican Unidad de Inversion (UDI)","MXV",979  ],
	  ["MICRONESIA (FEDERATED STATES OF)","US Dollar","USD",840  ],
	  ["MOLDOVA (THE REPUBLIC OF)","Moldovan Leu","MDL",498  ],
	  ["MONACO","Euro","EUR",978  ],
	  ["MONGOLIA","Tugrik","MNT",496  ],
	  ["MONTENEGRO","Euro","EUR",978  ],
	  ["MONTSERRAT","East Caribbean Dollar","XCD",951  ],
	  ["MOROCCO","Moroccan Dirham","MAD",504  ],
	  ["MOZAMBIQUE","Mozambique Metical","MZN",943  ],
	  ["MYANMAR","Kyat","MMK",104  ],
	  ["NAMIBIA","Namibia Dollar","NAD",516  ],
	  ["NAMIBIA","Rand","ZAR",710  ],
	  ["NAURU","Australian Dollar","AUD",36  ],
	  ["NEPAL","Nepalese Rupee","NPR",524  ],
	  ["NETHERLANDS (THE)","Euro","EUR",978  ],
	  ["NEW CALEDONIA","CFP Franc","XPF",953  ],
	  ["NEW ZEALAND","New Zealand Dollar","NZD",554  ],
	  ["NICARAGUA","Cordoba Oro","NIO",558  ],
	  ["NIGER (THE)","CFA Franc BCEAO","XOF",952  ],
	  ["NIGERIA","Naira","NGN",566  ],
	  ["NIUE","New Zealand Dollar","NZD",554  ],
	  ["NORFOLK ISLAND","Australian Dollar","AUD",36  ],
	  ["NORTHERN MARIANA ISLANDS (THE)","US Dollar","USD",840  ],
	  ["NORWAY","Norwegian Krone","NOK",578  ],
	  ["OMAN","Rial Omani","OMR",512  ],
	  ["PAKISTAN","Pakistan Rupee","PKR",586  ],
	  ["PALAU","US Dollar","USD",840  ],
	  ["PALESTINE, STATE OF","No universal currency","",null  ],
	  ["PANAMA","Balboa","PAB",590  ],
	  ["PANAMA","US Dollar","USD",840  ],
	  ["PAPUA NEW GUINEA","Kina","PGK",598  ],
	  ["PARAGUAY","Guarani","PYG",600  ],
	  ["PERU","Nuevo Sol","PEN",604  ],
	  ["PHILIPPINES (THE)","Philippine Peso","PHP",608  ],
	  ["PITCAIRN","New Zealand Dollar","NZD",554  ],
	  ["POLAND","Zloty","PLN",985  ],
	  ["PORTUGAL","Euro","EUR",978  ],
	  ["PUERTO RICO","US Dollar","USD",840  ],
	  ["QATAR","Qatari Rial","QAR",634  ],
	  ["REPUBLIC OF NORTH MACEDONIA","Denar","MKD",807  ],
	  ["ROMANIA","Romanian Leu","RON",946  ],
	  ["RUSSIAN FEDERATION (THE)","Russian Ruble","RUB",643  ],
	  ["RWANDA","Rwanda Franc","RWF",646  ],
	  ["RÉUNION","Euro","EUR",978  ],
	  ["SAINT BARTHÉLEMY","Euro","EUR",978  ],
	  ["SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA","Saint Helena Pound","SHP",654  ],
	  ["SAINT KITTS AND NEVIS","East Caribbean Dollar","XCD",951  ],
	  ["SAINT LUCIA","East Caribbean Dollar","XCD",951  ],
	  ["SAINT MARTIN (FRENCH PART)","Euro","EUR",978  ],
	  ["SAINT PIERRE AND MIQUELON","Euro","EUR",978  ],
	  ["SAINT VINCENT AND THE GRENADINES","East Caribbean Dollar","XCD",951  ],
	  ["SAMOA","Tala","WST",882  ],
	  ["SAN MARINO","Euro","EUR",978  ],
	  ["SAO TOME AND PRINCIPE","Dobra","STN",930  ],
	  ["SAUDI ARABIA","Saudi Riyal","SAR",682  ],
	  ["SENEGAL","CFA Franc BCEAO","XOF",952  ],
	  ["SERBIA","Serbian Dinar","RSD",941  ],
	  ["SEYCHELLES","Seychelles Rupee","SCR",690  ],
	  ["SIERRA LEONE","Leone","SLL",694  ],
	  ["SINGAPORE","Singapore Dollar","SGD",702  ],
	  ["SINT MAARTEN (DUTCH PART)","Netherlands Antillean Guilder","ANG",532  ],
	  ["SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS \"SUCRE\"","Sucre","XSU",994  ],
	  ["SLOVAKIA","Euro","EUR",978  ],
	  ["SLOVENIA","Euro","EUR",978  ],
	  ["SOLOMON ISLANDS","Solomon Islands Dollar","SBD",90  ],
	  ["SOMALIA","Somali Shilling","SOS",706  ],
	  ["SOUTH AFRICA","Rand","ZAR",710  ],
	  ["SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","No universal currency","",null  ],
	  ["SOUTH SUDAN","South Sudanese Pound","SSP",728  ],
	  ["SPAIN","Euro","EUR",978  ],
	  ["SRI LANKA","Sri Lanka Rupee","LKR",144  ],
	  ["SUDAN (THE)","Sudanese Pound","SDG",938  ],
	  ["SURINAME","Surinam Dollar","SRD",968  ],
	  ["SVALBARD AND JAN MAYEN","Norwegian Krone","NOK",578  ],
	  ["SWAZILAND","Lilangeni","SZL",748  ],
	  ["SWEDEN","Swedish Krona","SEK",752  ],
	  ["SWITZERLAND","WIR Euro","CHE",947  ],
	  ["SWITZERLAND","Swiss Franc","CHF",756  ],
	  ["SWITZERLAND","WIR Franc","CHW",948  ],
	  ["SYRIAN ARAB REPUBLIC","Syrian Pound","SYP",760  ],
	  ["TAIWAN (PROVINCE OF CHINA)","New Taiwan Dollar","TWD",901  ],
	  ["TAJIKISTAN","Somoni","TJS",972  ],
	  ["TANZANIA, UNITED REPUBLIC OF","Tanzanian Shilling","TZS",834  ],
	  ["THAILAND","Baht","THB",764  ],
	  ["TIMOR-LESTE","US Dollar","USD",840  ],
	  ["TOGO","CFA Franc BCEAO","XOF",952  ],
	  ["TOKELAU","New Zealand Dollar","NZD",554  ],
	  ["TONGA","Pa’anga","TOP",776  ],
	  ["TRINIDAD AND TOBAGO","Trinidad and Tobago Dollar","TTD",780  ],
	  ["TUNISIA","Tunisian Dinar","TND",788  ],
	  ["TURKEY","Turkish Lira","TRY",949  ],
	  ["TURKMENISTAN","Turkmenistan New Manat","TMT",934  ],
	  ["TURKS AND CAICOS ISLANDS (THE)","US Dollar","USD",840  ],
	  ["TUVALU","Australian Dollar","AUD",36  ],
	  ["UGANDA","Uganda Shilling","UGX",800  ],
	  ["UKRAINE","Hryvnia","UAH",980  ],
	  ["UNITED ARAB EMIRATES (THE)","UAE Dirham","AED",784  ],
	  ["UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)","Pound Sterling","GBP",826  ],
	  ["UNITED STATES MINOR OUTLYING ISLANDS (THE)","US Dollar","USD",840  ],
	  ["UNITED STATES OF AMERICA (THE)","US Dollar","USD",840  ],
	  ["UNITED STATES OF AMERICA (THE)","US Dollar (Next day)","USN",997  ],
	  ["URUGUAY","Uruguay Peso en Unidades Indexadas (URUIURUI)","UYI",940  ],
	  ["URUGUAY","Peso Uruguayo","UYU",858  ],
	  ["UZBEKISTAN","Uzbekistan Sum","UZS",860  ],
	  ["VANUATU","Vatu","VUV",548  ],
	  ["VENEZUELA (BOLIVARIAN REPUBLIC OF)","Bolivar","VEF",937  ],
	  ["VIET NAM","Dong","VND",704  ],
	  ["VIRGIN ISLANDS (BRITISH)","US Dollar","USD",840  ],
	  ["VIRGIN ISLANDS (U.S.)","US Dollar","USD",840  ],
	  ["WALLIS AND FUTUNA","CFP Franc","XPF",953  ],
	  ["WESTERN SAHARA","Moroccan Dirham","MAD",504  ],
	  ["YEMEN","Yemeni Rial","YER",886  ],
	  ["ZAMBIA","Zambian Kwacha","ZMW",967  ],
	  ["ZIMBABWE","Zimbabwe Dollar","ZWL",932  ],
	  ["ÅLAND ISLANDS","Euro","EUR",978  ]
	];
	
	return data;
}

function getKanbanData(locale = 'en') {
    const text = {
        en: [
            'Research', 'Displaying data from data source', 'Showing cover and title', 'Property validation',
            'formatFunction and formatSettings', 'Expand/collapse arrow', 'Virtual scrolling', 'Deferred scrolling',
            'Infinite scrolling', 'Visible/hidden columns', 'Public methods', 'Editing',
            'Header', 'Dragging with feedback', 'Vertical virtualization', 'Observable columns array',
            'Reusing existing HTML elements', 'Virtualize collapsed cards'
        ],
        he: [
            'מחקר', 'הצגת נתונים ממקור נתונים', 'מראה כריכה וכותרת', 'אימות נכס',
            'formatFunction ו formatSettings', 'הרחב / כווץ חץ', 'גלילה וירטואלית', 'גלילה נדחית',
            'גלילה אינסופית', 'עמודות גלויות / מוסתרות', 'שיטות ציבוריות', 'עריכה',
            'כותרת עליונה', 'גרירה עם משוב', 'וירטואליזציה אנכית', 'מערך עמודות ניתן לצפייה',
            'שימוש חוזר באלמנטים HTML קיימים', 'וירטואליזציה של כרטיסים שהתמוטטו'
        ]
    },
        tags = {
            en: ['initial', 'data', 'visual', 'property', 'scrolling', 'method'],
            he: ['התחלתי', 'נתונים', 'חזותי', 'תכונה', 'גלילה', 'שיטה']
        },
        data = [
            {
                id: 0,
                status: 'done',
                text: text[locale][0],
                tags: tags[locale][0],
                progress: 100,
                userId: 2

            }, {
                id: 1,
                status: 'done',
                text: text[locale][1],
                tags: tags[locale][1],
                priority: 'high',
                progress: 100,
                userId: 3
            }, {
                id: 2,
                status: 'done',
                text: text[locale][2],
                tags: tags[locale][2] + ', ' + tags[locale][3],
                priority: 'high',
                progress: 100,
                userId: 2
            }, {
                id: 3,
                status: 'done',
                text: text[locale][3],
                tags: tags[locale][3],
                checklist: [
                    { text: 'addNewButton', completed: true },
                    { text: 'allowDrag', completed: true },
                    { text: 'cardHeight', completed: true },
                    { text: 'cellOrientation', completed: true },
                    { text: 'collapsible', completed: true },
                    { text: 'columns', completed: true }
                ],
                userId: 1
            }, {
                id: 4,
                status: 'done',
                text: text[locale][4],
                tags: tags[locale][1] + ', ' + tags[locale][3],
                progress: 100,
                userId: 0
            }, {
                id: 5,
                status: 'testing',
                text: text[locale][5],
                tags: tags[locale][2],
                progress: 90,
                userId: 3
            }, {
                id: 7,
                status: 'testing',
                text: text[locale][6],
                tags: tags[locale][4] + ', ' + tags[locale][1],
                progress: 10,
                userId: 3
            }, {
                id: 6,
                status: 'testing',
                text: text[locale][7],
                tags: tags[locale][4],
                color: '#9966CC',
                userId: 3
            }, {
                id: 8,
                status: 'inProgress',
                text: text[locale][8],
                tags: tags[locale][4] + ', ' + tags[locale][1],
                progress: 25,
                userId: 0
            }, {
                id: 9,
                status: 'inProgress',
                text: text[locale][9],
                tags: tags[locale][2],
                priority: 'high',
                progress: 85,
                color: 'red',
                userId: 1
            }, {
                id: 10,
                status: 'inProgress',
                text: text[locale][10],
                tags: tags[locale][5],
                checklist: [
                    { text: 'closePanel', completed: true },
                    { text: 'openCustomizePanel', completed: true },
                    { text: 'openFilterPanel', completed: true },
                    { text: 'openSortPanel', completed: false },
                    { text: 'showColumn', completed: false },
                    { text: 'hideColumn', completed: false },
                    { text: 'addFilter', completed: false },
                    { text: 'removeFilter', completed: false }
                ],
                userId: 2
            }, {
                id: 11,
                status: 'toDo',
                text: text[locale][11],
                tags: tags[locale][5],
                priority: 'high',
                progress: 0
            }, {
                id: 12,
                status: 'toDo',
                text: text[locale][12],
                tags: tags[locale][2]
            }, {
                id: 13,
                status: 'toDo',
                text: text[locale][13],
                tags: tags[locale][2] + ', ' + tags[locale][5] + ', ' + tags[locale][1],
                priority: 'low',
                userId: 4
            }, {
                id: 14,
                status: 'toDo',
                text: text[locale][14],
                checklist: [
                    { text: text[locale][16], completed: false },
                    { text: text[locale][17], completed: false }
                ],
                userId: 1
            }, {
                id: 15,
                status: 'toDo',
                text: text[locale][15],
                tags: tags[locale][1]
            }
        ],
        time = new Date().getTime(),
        msInMonth = 2592000000,
        msInDay = 86400000,
        comments = [
            'Ut ultrices dolor vitae magna lacinia vehicula.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Donec vitae dapibus mauris, quis cursus nibh.',
            'Aenean ultrices maximus ex id scelerisque. Suspendisse cursus maximus nulla, sed ornare lectus aliquet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'Curabitur at accumsan metus, rhoncus porttitor ligula.',
            'Nulla sodales faucibus accumsan.'
        ];

    for (let i = 0; i < data.length; i++) {
        const task = data[i];

        if (task.status === 'inProgress') {
            task.startDate = new Date(time - Math.floor(Math.random() * 9 + 1) * msInDay);
        }
        else if (task.status === 'testing') {
            task.startDate = new Date(time - Math.floor(Math.random() * 20 + 10) * msInDay);
        }
        else if (task.status === 'done') {
            task.startDate = new Date(time - Math.floor(Math.random() * 20 + 20) * msInDay);
        }

        if (task.priority === 'high' && task.status !== 'done') {
            task.dueDate = new Date(time - Math.floor(Math.random() * 3 + 1) * msInDay);
        }
        else if (task.priority === 'low') {
            task.dueDate = new Date(time + msInMonth + Math.floor(Math.random() * 30 + 10) * msInDay);
        }
        else if (task.startDate) {
            task.dueDate = new Date(task.startDate.getTime() + msInMonth + Math.floor(Math.random() * 2 + 1) * msInDay);
        }
        else {
            task.dueDate = new Date(time + msInMonth + Math.floor(Math.random() * 2 + 1) * msInDay);
        }

        let numberOfComments = Math.round(Math.random() * 3);

        task.comments = [];

        if (Math.round(Math.random() + 1) === 2) {
            let prevTime = time - Math.floor(Math.random() * 10 + 3) * msInDay;

            for (let j = 0; j < numberOfComments; j++) {
                prevTime = prevTime + Math.floor(Math.random() * 2 + 1) * msInDay + msInDay / Math.floor(Math.random() * 5 + 1);

                task.comments.push({
                    text: comments[Math.round(Math.random() * 5)],
                    userId: Math.round(Math.random() * 4),
                    time: new Date(prevTime)
                });
            }
        }
    }

    return data;
}

function getKanbanHierarchicalData() {
    let data = [
        {
            id: 16,
            status: 'desktop',
            text: 'Customize cards panel',
            tags: 'visual, data',
            progress: 50,
            userId: 3

        }, {
            id: 17,
            status: 'desktop',
            text: 'Filter panel',
            tags: 'visual, data',
            priority: 'high',
            progress: 90,
            userId: 1
        }, {
            id: 18,
            status: 'mobile',
            text: 'Sort panel',
            tags: 'visual, data',
            priority: 'high',
            progress: 15,
            userId: 2
        }, {
            id: 19,
            status: 'manualTesting',
            text: 'Search bar',
            tags: 'visual, data',
            progress: 20,
            userId: 4
        }, {
            id: 20,
            status: 'unitTesting',
            text: 'Cancel and Save buttons',
            tags: 'visual, data',
            progress: 90,
            userId: 0
        }, {
            id: 21,
            status: 'unitTesting',
            text: 'Dynamically show/hide column',
            tags: 'visual',
            progress: 60,
            userId: 3
        }, {
            id: 22,
            status: 'unitTesting',
            text: 'Property changed handlers',
            tags: 'property',
            progress: 10,
            userId: 3
        }
    ];

    data = data.concat(getKanbanData());
    return data;
}
