function getRandomCountryData() {
    const countryCodes = ['AF', 'AL', 'DZ', 'AO', 'AG', 'AR', 'AM', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BT', 'BO', 'BA', 'BW', 'BR', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'CF', 'TD', 'CL', 'CN', 'CO', 'KM', 'CD', 'CG', 'CR', 'CI', 'HR', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FJ', 'FI', 'FR', 'GA', 'GM', 'GE', 'DE', 'GH', 'GR', 'GD', 'GT', 'GN', 'GW', 'GY', 'HT', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IL', 'IT', 'JM', 'JP', 'JO', 'KZ', 'KE', 'KI', 'KR', 'UNDEFINED', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LT', 'LU', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MR', 'MU', 'MX', 'MD', 'MN', 'ME', 'MA', 'MZ', 'MM', 'NA', 'NP', 'NL', 'NZ', 'NI', 'NE', 'NG', 'NO', 'OM', 'PK', 'PA', 'PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'QA', 'RO', 'RU', 'RW', 'WS', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'ZA', 'ES', 'LK', 'KN', 'LC', 'VC', 'SD', 'SR', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TO', 'TT', 'TN', 'TR', 'TM', 'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'UZ', 'VU', 'VE', 'VN', 'YE', 'ZM', 'ZW'];
    const randomData = {};

    countryCodes.forEach(code => {
        randomData[code] = Math.random() * 100;
    });

    return randomData;
}

function generateMarketShare() {
    const percent = Math.floor(Math.random() * 50);
    const marketShare = [
        { country: 'Selected', share: percent },
        { country: 'Others', share: 100 - percent }
    ];

    return marketShare;
}

function generateTopSellingProducts() {
    const topSellingProducts = [
        { 'SaleDate': '08:00' },
        { 'SaleDate': '09:00' },
        { 'SaleDate': '10:00' },
        { 'SaleDate': '11:00' },
        { 'SaleDate': '12:00' },
        { 'SaleDate': '13:00' },
        { 'SaleDate': '14:00' },
        { 'SaleDate': '15:00' },
        { 'SaleDate': '16:00' },
        { 'SaleDate': '17:00' }
    ];

    for (let i = 0; i < topSellingProducts.length; i++) {
        topSellingProducts[i]['High Sharing'] = Math.floor(Math.random() * 60000);
        topSellingProducts[i]['Mk Movement'] = Math.floor(Math.random() * 45000);
        topSellingProducts[i]['Pan Bridge'] = Math.floor(Math.random() * 40000);
        topSellingProducts[i]['Flip Disc'] = Math.floor(Math.random() * 36000);
    }

    return topSellingProducts;
}

function getCountriesData() {
    var countries = [{
        'ID': 1,
        'Country': 'Brazil',
        'Area': 8515767,
        'Population_Urban': 0.85,
        'Population_Rural': 0.15,
        'Population_Total': 205809000,
        'GDP_Agriculture': 0.054,
        'GDP_Industry': 0.274,
        'GDP_Services': 0.672,
        'GDP_Total': 2353025
    }, {
        'ID': 2,
        'Country': 'China',
        'Area': 9388211,
        'Population_Urban': 0.54,
        'Population_Rural': 0.46,
        'Population_Total': 1375530000,
        'GDP_Agriculture': 0.091,
        'GDP_Industry': 0.426,
        'GDP_Services': 0.483,
        'GDP_Total': 10380380
    }, {
        'ID': 3,
        'Country': 'France',
        'Area': 675417,
        'Population_Urban': 0.79,
        'Population_Rural': 0.21,
        'Population_Total': 64529000,
        'GDP_Agriculture': 0.019,
        'GDP_Industry': 0.183,
        'GDP_Services': 0.798,
        'GDP_Total': 2846889
    }, {
        'ID': 4,
        'Country': 'Germany',
        'Area': 357021,
        'Population_Urban': 0.75,
        'Population_Rural': 0.25,
        'Population_Total': 81459000,
        'GDP_Agriculture': 0.008,
        'GDP_Industry': 0.281,
        'GDP_Services': 0.711,
        'GDP_Total': 3859547
    }, {
        'ID': 5,
        'Country': 'India',
        'Area': 3287590,
        'Population_Urban': 0.32,
        'Population_Rural': 0.68,
        'Population_Total': 1286260000,
        'GDP_Agriculture': 0.174,
        'GDP_Industry': 0.258,
        'GDP_Services': 0.569,
        'GDP_Total': 2047811
    }, {
        'ID': 6,
        'Country': 'Italy',
        'Area': 301230,
        'Population_Urban': 0.69,
        'Population_Rural': 0.31,
        'Population_Total': 60676361,
        'GDP_Agriculture': 0.02,
        'GDP_Industry': 0.242,
        'GDP_Services': 0.738,
        'GDP_Total': 2147952
    }, {
        'ID': 7,
        'Country': 'Japan',
        'Area': 377835,
        'Population_Urban': 0.93,
        'Population_Rural': 0.07,
        'Population_Total': 126920000,
        'GDP_Agriculture': 0.012,
        'GDP_Industry': 0.275,
        'GDP_Services': 0.714,
        'GDP_Total': 4616335
    }, {
        'ID': 8,
        'Country': 'Russia',
        'Area': 17098242,
        'Population_Urban': 0.74,
        'Population_Rural': 0.26,
        'Population_Total': 146544710,
        'GDP_Agriculture': 0.039,
        'GDP_Industry': 0.36,
        'GDP_Services': 0.601,
        'GDP_Total': 1857461
    }, {
        'ID': 9,
        'Country': 'United States',
        'Area': 9147420,
        'Population_Urban': 0.81,
        'Population_Rural': 0.19,
        'Population_Total': 323097000,
        'GDP_Agriculture': 0.0112,
        'GDP_Industry': 0.191,
        'GDP_Services': 0.797,
        'GDP_Total': 17418925
    }, {
        'ID': 10,
        'Country': 'United Kingdom',
        'Area': 244820,
        'Population_Urban': 0.82,
        'Population_Rural': 0.18,
        'Population_Total': 65097000,
        'GDP_Agriculture': 0.007,
        'GDP_Industry': 0.21,
        'GDP_Services': 0.783,
        'GDP_Total': 2945146
    }];

    return countries;
}

function generateRandomMonthsData(maxValue) {
    const data = [
        { month: 'Jan' },
        { month: 'Feb' },
        { month: 'Mar' },
        { month: 'Apr' },
        { month: 'May' },
        { month: 'Jun' },
        { month: 'Jul' },
        { month: 'Aug' },
        { month: 'Sep' },
        { month: 'Oct' },
        { month: 'Nov' },
        { month: 'Dec' }
    ];

    for (let i = 0; i < data.length; i++) {
        data[i].data = Math.floor(Math.random() * Number(maxValue));
    }

    return data;
}

function generateSalesVolume() {
    return [{ data: Math.floor(Math.random() * (4500 - 1500 + 1) + 1500) }];
}

function generateSalesData() {
    const salesData = [
        { 'SaleDate': 'Jan \'19' },
        { 'SaleDate': 'Feb \'19' },
        { 'SaleDate': 'Mar \'19' },
        { 'SaleDate': 'Apr \'19' },
        { 'SaleDate': 'May \'19' },
        { 'SaleDate': 'Jun \'19' },
        { 'SaleDate': 'Jul \'19' },
        { 'SaleDate': 'Aug \'19' },
        { 'SaleDate': 'Sep \'19' },
        { 'SaleDate': 'Oct \'19' },
        { 'SaleDate': 'Nov \'19' },
        { 'SaleDate': 'Dec \'19' },

        { 'SaleDate': 'Jan \'20' },
        { 'SaleDate': 'Feb \'20' },
        { 'SaleDate': 'Mar \'20' },
        { 'SaleDate': 'Apr \'20' },
        { 'SaleDate': 'May \'20' },
        { 'SaleDate': 'Jun \'20' },
        { 'SaleDate': 'Jul \'20' },
        { 'SaleDate': 'Aug \'20' },
        { 'SaleDate': 'Sep \'20' },
        { 'SaleDate': 'Oct \'20' },
        { 'SaleDate': 'Nov \'20' },
        { 'SaleDate': 'Dec \'20' }
    ];

    for (let i = 0; i < salesData.length; i++) {
        salesData[i]['Representative'] = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000);
        salesData[i]['Total'] = Math.floor(Math.random() * (125000 - 20000 + 1) + 20000);
    }

    return salesData;
}

function generateSchedulerTasks() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const tasks = [
        {
            label: 'Brochure Design Review',
            class: 'event'
        }, {
            label: 'Website Re-Design Plan',
            class: 'event'
        }, {
            label: 'Update Sales Strategy Documents',
            class: 'event'
        }, {
            label: 'Non-Compete Agreements',
            class: 'event'
        }, {
            label: 'Approve Hiring of John Jeffers',
            class: 'event'
        }, {
            label: 'Update NDA Agreement',
            class: 'event'
        }, {
            label: 'Update Employee Files with New NDA',
            class: 'event'
        }, {
            label: 'Compete Agreements',
            class: 'event'
        }, {
            label: 'Approve Hiring of Mark Waterberg',
            class: 'event'
        }
    ];

    for (let i = 0; i < tasks.length; i++) {
        const randomDate = getRandomDate();
        tasks[i]['dateStart'] = new Date(currentYear, currentMonth, randomDate);
        tasks[i]['dateEnd'] = new Date(currentYear, currentMonth, randomDate + 1);
    }

    return tasks;
}

function getRandomDate() {
    return Math.floor(Math.random() * 30) + 1;
}
