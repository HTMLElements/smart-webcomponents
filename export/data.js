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
        row["name"] = row["firstname"] + " " + row["lastname"]; 
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
function getCarsData() {
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
		if ( i=== 14)
		{
			break;
		}
		
        row.make =  makes[Math.floor(Math.random() * makes.length)].label;
        row.fuelType = fuelType[Math.floor(Math.random() * fuelType.length)];
        row.vehicleType = vehicleType[Math.floor(Math.random() * vehicleType.length)];
        var powerIndex = Math.floor(Math.random() * power.length );
        if (powerIndex == power.length - 1) powerIndex --;
        row.powerFrom = power[powerIndex].label;
        row.powerTo = power[powerIndex + 1].label;
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