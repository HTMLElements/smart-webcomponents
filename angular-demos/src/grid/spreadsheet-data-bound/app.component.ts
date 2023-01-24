import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


    selection = {
        enabled: true,
        allowCellSelection: true,
        mode: 'extended',
        allowColumnHeaderSelection: true,
        allowRowHeaderSelection: true
    }

    editing = {
        enabled: true
    }

    layout = {
        rowHeight: 40
    }

    behavior = {
        rowResizeMode: 'growAndShrink',
        columnResizeMode: 'growAndShrink'
    }

    appearance = {
        showRowHeaderNumber: true,
        alternationStart: 1,
        alternationEnd: 199,
        alternationCount: 2
    }

    dataSource = new Smart.DataAdapter({
        dataSource: [
            {
                "value": "Country",
                "cell": "A1"
            },
            {
                "value": "Population",
                "cell": "B1"
            },
            {
                "value": "Yearly Change",
                "cell": "C1"
            },
            {
                "value": "Net Change",
                "cell": "D1"
            },
            {
                "value": "Density (P/Km²)",
                "cell": "E1"
            },
            {
                "value": "Land Area (Km²)",
                "cell": "F1"
            },
            {
                "value": "Migrants (net)",
                "cell": "G1"
            },
            {
                "value": "Fert. Rate",
                "cell": "H1"
            },
            {
                "value": "Med. Age",
                "cell": "I1"
            },
            {
                "value": "Urban Pop %",
                "cell": "J1"
            },
            {
                "value": "World Share",
                "cell": "K1"
            },
            {
                "value": "China",
                "cell": "A2",
                "css": "someclass"
            },
            {
                "value": "1,415,045,928",
                "cell": "B2"
            },
            {
                "value": "0.39 %",
                "cell": "C2"
            },
            {
                "value": "5,528,531",
                "cell": "D2"
            },
            {
                "value": "151",
                "cell": "E2"
            },
            {
                "value": "9,388,211",
                "cell": "F2"
            },
            {
                "value": "-339,690",
                "cell": "G2"
            },
            {
                "value": "1.6",
                "cell": "H2"
            },
            {
                "value": "37",
                "cell": "I2"
            },
            {
                "value": "58 %",
                "cell": "J2"
            },
            {
                "value": "18.54 %",
                "cell": "K2"
            },
            {
                "value": "India",
                "cell": "A3"
            },
            {
                "value": "1,354,051,854",
                "cell": "B3"
            },
            {
                "value": "1.11 %",
                "cell": "C3"
            },
            {
                "value": "14,871,727",
                "cell": "D3"
            },
            {
                "value": "455",
                "cell": "E3"
            },
            {
                "value": "2,973,190",
                "cell": "F3"
            },
            {
                "value": "-515,643",
                "cell": "G3"
            },
            {
                "value": "2.4",
                "cell": "H3"
            },
            {
                "value": "27",
                "cell": "I3"
            },
            {
                "value": "32 %",
                "cell": "J3"
            },
            {
                "value": "17.74 %",
                "cell": "K3"
            },
            {
                "value": "U.S.",
                "cell": "A4"
            },
            {
                "value": "326,766,748",
                "cell": "B4"
            },
            {
                "value": "0.71 %",
                "cell": "C4"
            },
            {
                "value": "2,307,285",
                "cell": "D4"
            },
            {
                "value": "36",
                "cell": "E4"
            },
            {
                "value": "9,147,420",
                "cell": "F4"
            },
            {
                "value": "900,000",
                "cell": "G4"
            },
            {
                "value": "1.9",
                "cell": "H4"
            },
            {
                "value": "38",
                "cell": "I4"
            },
            {
                "value": "83 %",
                "cell": "J4"
            },
            {
                "value": "4.28 %",
                "cell": "K4"
            },
            {
                "value": "Indonesia",
                "cell": "A5"
            },
            {
                "value": "266,794,980",
                "cell": "B5"
            },
            {
                "value": "1.06 %",
                "cell": "C5"
            },
            {
                "value": "2,803,601",
                "cell": "D5"
            },
            {
                "value": "147",
                "cell": "E5"
            },
            {
                "value": "1,811,570",
                "cell": "F5"
            },
            {
                "value": "-167,000",
                "cell": "G5"
            },
            {
                "value": "2.5",
                "cell": "H5"
            },
            {
                "value": "28",
                "cell": "I5"
            },
            {
                "value": "54 %",
                "cell": "J5"
            },
            {
                "value": "3.50 %",
                "cell": "K5"
            },
            {
                "value": "Brazil",
                "cell": "A6"
            },
            {
                "value": "210,867,954",
                "cell": "B6"
            },
            {
                "value": "0.75 %",
                "cell": "C6"
            },
            {
                "value": "1,579,676",
                "cell": "D6"
            },
            {
                "value": "25",
                "cell": "E6"
            },
            {
                "value": "8,358,140",
                "cell": "F6"
            },
            {
                "value": "3,185",
                "cell": "G6"
            },
            {
                "value": "1.8",
                "cell": "H6"
            },
            {
                "value": "31",
                "cell": "I6"
            },
            {
                "value": "84 %",
                "cell": "J6"
            },
            {
                "value": "2.76 %",
                "cell": "K6"
            },
            {
                "value": "Pakistan",
                "cell": "A7"
            },
            {
                "value": "200,813,818",
                "cell": "B7"
            },
            {
                "value": "1.93 %",
                "cell": "C7"
            },
            {
                "value": "3,797,863",
                "cell": "D7"
            },
            {
                "value": "260",
                "cell": "E7"
            },
            {
                "value": "770,880",
                "cell": "F7"
            },
            {
                "value": "-236,384",
                "cell": "G7"
            },
            {
                "value": "3.7",
                "cell": "H7"
            },
            {
                "value": "22",
                "cell": "I7"
            },
            {
                "value": "38 %",
                "cell": "J7"
            },
            {
                "value": "2.63 %",
                "cell": "K7"
            },
            {
                "value": "Nigeria",
                "cell": "A8"
            },
            {
                "value": "195,875,237",
                "cell": "B8"
            },
            {
                "value": "2.61 %",
                "cell": "C8"
            },
            {
                "value": "4,988,926",
                "cell": "D8"
            },
            {
                "value": "215",
                "cell": "E8"
            },
            {
                "value": "910,770",
                "cell": "F8"
            },
            {
                "value": "-60,000",
                "cell": "G8"
            },
            {
                "value": "5.7",
                "cell": "H8"
            },
            {
                "value": "18",
                "cell": "I8"
            },
            {
                "value": "49 %",
                "cell": "J8"
            },
            {
                "value": "2.57 %",
                "cell": "K8"
            },
            {
                "value": "Bangladesh",
                "cell": "A9"
            },
            {
                "value": "166,368,149",
                "cell": "B9"
            },
            {
                "value": "1.03 %",
                "cell": "C9"
            },
            {
                "value": "1,698,398",
                "cell": "D9"
            },
            {
                "value": "1,278",
                "cell": "E9"
            },
            {
                "value": "130,170",
                "cell": "F9"
            },
            {
                "value": "-505,297",
                "cell": "G9"
            },
            {
                "value": "2.2",
                "cell": "H9"
            },
            {
                "value": "26",
                "cell": "I9"
            },
            {
                "value": "35 %",
                "cell": "J9"
            },
            {
                "value": "2.18 %",
                "cell": "K9"
            },
            {
                "value": "Russia",
                "cell": "A10"
            },
            {
                "value": "143,964,709",
                "cell": "B10"
            },
            {
                "value": "-0.02 %",
                "cell": "C10"
            },
            {
                "value": "-25,045",
                "cell": "D10"
            },
            {
                "value": "9",
                "cell": "E10"
            },
            {
                "value": "16,376,870",
                "cell": "F10"
            },
            {
                "value": "203,577",
                "cell": "G10"
            },
            {
                "value": "1.7",
                "cell": "H10"
            },
            {
                "value": "39",
                "cell": "I10"
            },
            {
                "value": "73 %",
                "cell": "J10"
            },
            {
                "value": "1.89 %",
                "cell": "K10"
            },
            {
                "value": "Mexico",
                "cell": "A11"
            },
            {
                "value": "130,759,074",
                "cell": "B11"
            },
            {
                "value": "1.24 %",
                "cell": "C11"
            },
            {
                "value": "1,595,798",
                "cell": "D11"
            },
            {
                "value": "67",
                "cell": "E11"
            },
            {
                "value": "1,943,950",
                "cell": "F11"
            },
            {
                "value": "-60,000",
                "cell": "G11"
            },
            {
                "value": "2.3",
                "cell": "H11"
            },
            {
                "value": "28",
                "cell": "I11"
            },
            {
                "value": "78 %",
                "cell": "J11"
            },
            {
                "value": "1.71 %",
                "cell": "K11"
            },
            {
                "value": "Japan",
                "cell": "A12"
            },
            {
                "value": "127,185,332",
                "cell": "B12"
            },
            {
                "value": "-0.23 %",
                "cell": "C12"
            },
            {
                "value": "-299,118",
                "cell": "D12"
            },
            {
                "value": "349",
                "cell": "E12"
            },
            {
                "value": "364,555",
                "cell": "F12"
            },
            {
                "value": "71,627",
                "cell": "G12"
            },
            {
                "value": "1.4",
                "cell": "H12"
            },
            {
                "value": "46",
                "cell": "I12"
            },
            {
                "value": "94 %",
                "cell": "J12"
            },
            {
                "value": "1.67 %",
                "cell": "K12"
            },
            {
                "value": "Ethiopia",
                "cell": "A13"
            },
            {
                "value": "107,534,882",
                "cell": "B13"
            },
            {
                "value": "2.46 %",
                "cell": "C13"
            },
            {
                "value": "2,577,444",
                "cell": "D13"
            },
            {
                "value": "108",
                "cell": "E13"
            },
            {
                "value": "1,000,000",
                "cell": "F13"
            },
            {
                "value": "-12,000",
                "cell": "G13"
            },
            {
                "value": "4.6",
                "cell": "H13"
            },
            {
                "value": "19",
                "cell": "I13"
            },
            {
                "value": "20 %",
                "cell": "J13"
            },
            {
                "value": "1.41 %",
                "cell": "K13"
            },
            {
                "value": "Philippines",
                "cell": "A14"
            },
            {
                "value": "106,512,074",
                "cell": "B14"
            },
            {
                "value": "1.52 %",
                "cell": "C14"
            },
            {
                "value": "1,593,984",
                "cell": "D14"
            },
            {
                "value": "357",
                "cell": "E14"
            },
            {
                "value": "298,170",
                "cell": "F14"
            },
            {
                "value": "-130,000",
                "cell": "G14"
            },
            {
                "value": "3.1",
                "cell": "H14"
            },
            {
                "value": "24",
                "cell": "I14"
            },
            {
                "value": "44 %",
                "cell": "J14"
            },
            {
                "value": "1.40 %",
                "cell": "K14"
            },
            {
                "value": "Egypt",
                "cell": "A15"
            },
            {
                "value": "99,375,741",
                "cell": "B15"
            },
            {
                "value": "1.87 %",
                "cell": "C15"
            },
            {
                "value": "1,822,590",
                "cell": "D15"
            },
            {
                "value": "100",
                "cell": "E15"
            },
            {
                "value": "995,450",
                "cell": "F15"
            },
            {
                "value": "-55,005",
                "cell": "G15"
            },
            {
                "value": "3.4",
                "cell": "H15"
            },
            {
                "value": "25",
                "cell": "I15"
            },
            {
                "value": "38 %",
                "cell": "J15"
            },
            {
                "value": "1.30 %",
                "cell": "K15"
            },
            {
                "value": "Viet Nam",
                "cell": "A16"
            },
            {
                "value": "96,491,146",
                "cell": "B16"
            },
            {
                "value": "0.99 %",
                "cell": "C16"
            },
            {
                "value": "950,346",
                "cell": "D16"
            },
            {
                "value": "311",
                "cell": "E16"
            },
            {
                "value": "310,070",
                "cell": "F16"
            },
            {
                "value": "-40,000",
                "cell": "G16"
            },
            {
                "value": "2.0",
                "cell": "H16"
            },
            {
                "value": "30",
                "cell": "I16"
            },
            {
                "value": "34 %",
                "cell": "J16"
            },
            {
                "value": "1.26 %",
                "cell": "K16"
            },
            {
                "value": "DR Congo",
                "cell": "A17"
            },
            {
                "value": "84,004,989",
                "cell": "B17"
            },
            {
                "value": "3.28 %",
                "cell": "C17"
            },
            {
                "value": "2,665,001",
                "cell": "D17"
            },
            {
                "value": "37",
                "cell": "E17"
            },
            {
                "value": "2,267,050",
                "cell": "F17"
            },
            {
                "value": "3,012",
                "cell": "G17"
            },
            {
                "value": "6.4",
                "cell": "H17"
            },
            {
                "value": "17",
                "cell": "I17"
            },
            {
                "value": "39 %",
                "cell": "J17"
            },
            {
                "value": "1.10 %",
                "cell": "K17"
            },
            {
                "value": "Germany",
                "cell": "A18"
            },
            {
                "value": "82,293,457",
                "cell": "B18"
            },
            {
                "value": "0.22 %",
                "cell": "C18"
            },
            {
                "value": "179,233",
                "cell": "D18"
            },
            {
                "value": "236",
                "cell": "E18"
            },
            {
                "value": "348,560",
                "cell": "F18"
            },
            {
                "value": "355,425",
                "cell": "G18"
            },
            {
                "value": "1.4",
                "cell": "H18"
            },
            {
                "value": "46",
                "cell": "I18"
            },
            {
                "value": "76 %",
                "cell": "J18"
            },
            {
                "value": "1.08 %",
                "cell": "K18"
            },
            {
                "value": "Iran",
                "cell": "A19"
            },
            {
                "value": "82,011,735",
                "cell": "B19"
            },
            {
                "value": "1.05 %",
                "cell": "C19"
            },
            {
                "value": "848,947",
                "cell": "D19"
            },
            {
                "value": "50",
                "cell": "E19"
            },
            {
                "value": "1,628,550",
                "cell": "F19"
            },
            {
                "value": "-80,000",
                "cell": "G19"
            },
            {
                "value": "1.7",
                "cell": "H19"
            },
            {
                "value": "30",
                "cell": "I19"
            },
            {
                "value": "74 %",
                "cell": "J19"
            },
            {
                "value": "1.07 %",
                "cell": "K19"
            },
            {
                "value": "Turkey",
                "cell": "A20"
            },
            {
                "value": "81,916,871",
                "cell": "B20"
            },
            {
                "value": "1.45 %",
                "cell": "C20"
            },
            {
                "value": "1,171,851",
                "cell": "D20"
            },
            {
                "value": "106",
                "cell": "E20"
            },
            {
                "value": "769,630",
                "cell": "F20"
            },
            {
                "value": "325,434",
                "cell": "G20"
            },
            {
                "value": "2.1",
                "cell": "H20"
            },
            {
                "value": "30",
                "cell": "I20"
            },
            {
                "value": "71 %",
                "cell": "J20"
            },
            {
                "value": "1.07 %",
                "cell": "K20"
            },
            {
                "value": "Thailand",
                "cell": "A21"
            },
            {
                "value": "69,183,173",
                "cell": "B21"
            },
            {
                "value": "0.21 %",
                "cell": "C21"
            },
            {
                "value": "145,660",
                "cell": "D21"
            },
            {
                "value": "135",
                "cell": "E21"
            },
            {
                "value": "510,890",
                "cell": "F21"
            },
            {
                "value": "33,463",
                "cell": "G21"
            },
            {
                "value": "1.5",
                "cell": "H21"
            },
            {
                "value": "38",
                "cell": "I21"
            },
            {
                "value": "52 %",
                "cell": "J21"
            },
            {
                "value": "0.91 %",
                "cell": "K21"
            },
            {
                "value": "U.K.",
                "cell": "A22"
            },
            {
                "value": "66,573,504",
                "cell": "B22"
            },
            {
                "value": "0.59 %",
                "cell": "C22"
            },
            {
                "value": "391,919",
                "cell": "D22"
            },
            {
                "value": "275",
                "cell": "E22"
            },
            {
                "value": "241,930",
                "cell": "F22"
            },
            {
                "value": "198,000",
                "cell": "G22"
            },
            {
                "value": "1.9",
                "cell": "H22"
            },
            {
                "value": "40",
                "cell": "I22"
            },
            {
                "value": "81 %",
                "cell": "J22"
            },
            {
                "value": "0.87 %",
                "cell": "K22"
            },
            {
                "value": "France",
                "cell": "A23"
            },
            {
                "value": "65,233,271",
                "cell": "B23"
            },
            {
                "value": "0.39 %",
                "cell": "C23"
            },
            {
                "value": "253,723",
                "cell": "D23"
            },
            {
                "value": "119",
                "cell": "E23"
            },
            {
                "value": "547,557",
                "cell": "F23"
            },
            {
                "value": "72,344",
                "cell": "G23"
            },
            {
                "value": "2.0",
                "cell": "H23"
            },
            {
                "value": "41",
                "cell": "I23"
            },
            {
                "value": "80 %",
                "cell": "J23"
            },
            {
                "value": "0.85 %",
                "cell": "K23"
            },
            {
                "value": "Italy",
                "cell": "A24"
            },
            {
                "value": "59,290,969",
                "cell": "B24"
            },
            {
                "value": "-0.12 %",
                "cell": "C24"
            },
            {
                "value": "-68,931",
                "cell": "D24"
            },
            {
                "value": "202",
                "cell": "E24"
            },
            {
                "value": "294,140",
                "cell": "F24"
            },
            {
                "value": "52,829",
                "cell": "G24"
            },
            {
                "value": "1.4",
                "cell": "H24"
            },
            {
                "value": "46",
                "cell": "I24"
            },
            {
                "value": "72 %",
                "cell": "J24"
            },
            {
                "value": "0.78 %",
                "cell": "K24"
            },
            {
                "value": "Tanzania",
                "cell": "A25"
            },
            {
                "value": "59,091,392",
                "cell": "B25"
            },
            {
                "value": "3.11 %",
                "cell": "C25"
            },
            {
                "value": "1,781,373",
                "cell": "D25"
            },
            {
                "value": "67",
                "cell": "E25"
            },
            {
                "value": "885,800",
                "cell": "F25"
            },
            {
                "value": "-40,000",
                "cell": "G25"
            },
            {
                "value": "5.2",
                "cell": "H25"
            },
            {
                "value": "17",
                "cell": "I25"
            },
            {
                "value": "31 %",
                "cell": "J25"
            },
            {
                "value": "0.77 %",
                "cell": "K25"
            },
            {
                "value": "South Africa",
                "cell": "A26"
            },
            {
                "value": "57,398,421",
                "cell": "B26"
            },
            {
                "value": "1.20 %",
                "cell": "C26"
            },
            {
                "value": "681,265",
                "cell": "D26"
            },
            {
                "value": "47",
                "cell": "E26"
            },
            {
                "value": "1,213,090",
                "cell": "F26"
            },
            {
                "value": "161,300",
                "cell": "G26"
            },
            {
                "value": "2.6",
                "cell": "H26"
            },
            {
                "value": "26",
                "cell": "I26"
            },
            {
                "value": "62 %",
                "cell": "J26"
            },
            {
                "value": "0.75 %",
                "cell": "K26"
            },
            {
                "value": "Myanmar",
                "cell": "A27"
            },
            {
                "value": "53,855,735",
                "cell": "B27"
            },
            {
                "value": "0.91 %",
                "cell": "C27"
            },
            {
                "value": "485,126",
                "cell": "D27"
            },
            {
                "value": "82",
                "cell": "E27"
            },
            {
                "value": "653,290",
                "cell": "F27"
            },
            {
                "value": "-94,856",
                "cell": "G27"
            },
            {
                "value": "2.3",
                "cell": "H27"
            },
            {
                "value": "28",
                "cell": "I27"
            },
            {
                "value": "36 %",
                "cell": "J27"
            },
            {
                "value": "0.71 %",
                "cell": "K27"
            },
            {
                "value": "South Korea",
                "cell": "A28"
            },
            {
                "value": "51,164,435",
                "cell": "B28"
            },
            {
                "value": "0.36 %",
                "cell": "C28"
            },
            {
                "value": "182,223",
                "cell": "D28"
            },
            {
                "value": "526",
                "cell": "E28"
            },
            {
                "value": "97,230",
                "cell": "F28"
            },
            {
                "value": "33,927",
                "cell": "G28"
            },
            {
                "value": "1.2",
                "cell": "H28"
            },
            {
                "value": "41",
                "cell": "I28"
            },
            {
                "value": "81 %",
                "cell": "J28"
            },
            {
                "value": "0.67 %",
                "cell": "K28"
            },
            {
                "value": "Kenya",
                "cell": "A29"
            },
            {
                "value": "50,950,879",
                "cell": "B29"
            },
            {
                "value": "2.52 %",
                "cell": "C29"
            },
            {
                "value": "1,251,017",
                "cell": "D29"
            },
            {
                "value": "90",
                "cell": "E29"
            },
            {
                "value": "569,140",
                "cell": "F29"
            },
            {
                "value": "-10,000",
                "cell": "G29"
            },
            {
                "value": "4.1",
                "cell": "H29"
            },
            {
                "value": "19",
                "cell": "I29"
            },
            {
                "value": "26 %",
                "cell": "J29"
            },
            {
                "value": "0.67 %",
                "cell": "K29"
            },
            {
                "value": "Colombia",
                "cell": "A30"
            },
            {
                "value": "49,464,683",
                "cell": "B30"
            },
            {
                "value": "0.81 %",
                "cell": "C30"
            },
            {
                "value": "399,068",
                "cell": "D30"
            },
            {
                "value": "45",
                "cell": "E30"
            },
            {
                "value": "1,109,500",
                "cell": "F30"
            },
            {
                "value": "-29,000",
                "cell": "G30"
            },
            {
                "value": "1.9",
                "cell": "H30"
            },
            {
                "value": "30",
                "cell": "I30"
            },
            {
                "value": "79 %",
                "cell": "J30"
            },
            {
                "value": "0.65 %",
                "cell": "K30"
            },
            {
                "value": "Spain",
                "cell": "A31"
            },
            {
                "value": "46,397,452",
                "cell": "B31"
            },
            {
                "value": "0.09 %",
                "cell": "C31"
            },
            {
                "value": "43,131",
                "cell": "D31"
            },
            {
                "value": "93",
                "cell": "E31"
            },
            {
                "value": "498,800",
                "cell": "F31"
            },
            {
                "value": "-114,000",
                "cell": "G31"
            },
            {
                "value": "1.3",
                "cell": "H31"
            },
            {
                "value": "43",
                "cell": "I31"
            },
            {
                "value": "82 %",
                "cell": "J31"
            },
            {
                "value": "0.61 %",
                "cell": "K31"
            },
            {
                "value": "Argentina",
                "cell": "A32"
            },
            {
                "value": "44,688,864",
                "cell": "B32"
            },
            {
                "value": "0.94 %",
                "cell": "C32"
            },
            {
                "value": "417,823",
                "cell": "D32"
            },
            {
                "value": "16",
                "cell": "E32"
            },
            {
                "value": "2,736,690",
                "cell": "F32"
            },
            {
                "value": "6,000",
                "cell": "G32"
            },
            {
                "value": "2.3",
                "cell": "H32"
            },
            {
                "value": "31",
                "cell": "I32"
            },
            {
                "value": "88 %",
                "cell": "J32"
            },
            {
                "value": "0.59 %",
                "cell": "K32"
            },
            {
                "value": "Uganda",
                "cell": "A33"
            },
            {
                "value": "44,270,563",
                "cell": "B33"
            },
            {
                "value": "3.28 %",
                "cell": "C33"
            },
            {
                "value": "1,407,605",
                "cell": "D33"
            },
            {
                "value": "222",
                "cell": "E33"
            },
            {
                "value": "199,810",
                "cell": "F33"
            },
            {
                "value": "-30,000",
                "cell": "G33"
            },
            {
                "value": "5.9",
                "cell": "H33"
            },
            {
                "value": "16",
                "cell": "I33"
            },
            {
                "value": "16 %",
                "cell": "J33"
            },
            {
                "value": "0.58 %",
                "cell": "K33"
            },
            {
                "value": "Ukraine",
                "cell": "A34"
            },
            {
                "value": "44,009,214",
                "cell": "B34"
            },
            {
                "value": "-0.48 %",
                "cell": "C34"
            },
            {
                "value": "-213,733",
                "cell": "D34"
            },
            {
                "value": "76",
                "cell": "E34"
            },
            {
                "value": "579,320",
                "cell": "F34"
            },
            {
                "value": "-40,000",
                "cell": "G34"
            },
            {
                "value": "1.5",
                "cell": "H34"
            },
            {
                "value": "40",
                "cell": "I34"
            },
            {
                "value": "70 %",
                "cell": "J34"
            },
            {
                "value": "0.58 %",
                "cell": "K34"
            },
            {
                "value": "Algeria",
                "cell": "A35"
            },
            {
                "value": "42,008,054",
                "cell": "B35"
            },
            {
                "value": "1.67 %",
                "cell": "C35"
            },
            {
                "value": "689,912",
                "cell": "D35"
            },
            {
                "value": "18",
                "cell": "E35"
            },
            {
                "value": "2,381,740",
                "cell": "F35"
            },
            {
                "value": "-28,654",
                "cell": "G35"
            },
            {
                "value": "3.0",
                "cell": "H35"
            },
            {
                "value": "28",
                "cell": "I35"
            },
            {
                "value": "72 %",
                "cell": "J35"
            },
            {
                "value": "0.55 %",
                "cell": "K35"
            },
            {
                "value": "Sudan",
                "cell": "A36"
            },
            {
                "value": "41,511,526",
                "cell": "B36"
            },
            {
                "value": "2.41 %",
                "cell": "C36"
            },
            {
                "value": "978,196",
                "cell": "D36"
            },
            {
                "value": "24",
                "cell": "E36"
            },
            {
                "value": "1,765,048",
                "cell": "F36"
            },
            {
                "value": "-117,877",
                "cell": "G36"
            },
            {
                "value": "4.8",
                "cell": "H36"
            },
            {
                "value": "19",
                "cell": "I36"
            },
            {
                "value": "34 %",
                "cell": "J36"
            },
            {
                "value": "0.54 %",
                "cell": "K36"
            },
            {
                "value": "Iraq",
                "cell": "A37"
            },
            {
                "value": "39,339,753",
                "cell": "B37"
            },
            {
                "value": "2.78 %",
                "cell": "C37"
            },
            {
                "value": "1,065,135",
                "cell": "D37"
            },
            {
                "value": "91",
                "cell": "E37"
            },
            {
                "value": "434,320",
                "cell": "F37"
            },
            {
                "value": "92,733",
                "cell": "G37"
            },
            {
                "value": "4.6",
                "cell": "H37"
            },
            {
                "value": "19",
                "cell": "I37"
            },
            {
                "value": "67 %",
                "cell": "J37"
            },
            {
                "value": "0.52 %",
                "cell": "K37"
            },
            {
                "value": "Poland",
                "cell": "A38"
            },
            {
                "value": "38,104,832",
                "cell": "B38"
            },
            {
                "value": "-0.17 %",
                "cell": "C38"
            },
            {
                "value": "-65,880",
                "cell": "D38"
            },
            {
                "value": "124",
                "cell": "E38"
            },
            {
                "value": "306,230",
                "cell": "F38"
            },
            {
                "value": "-14,799",
                "cell": "G38"
            },
            {
                "value": "1.3",
                "cell": "H38"
            },
            {
                "value": "40",
                "cell": "I38"
            },
            {
                "value": "61 %",
                "cell": "J38"
            },
            {
                "value": "0.50 %",
                "cell": "K38"
            },
            {
                "value": "Canada",
                "cell": "A39"
            },
            {
                "value": "36,953,765",
                "cell": "B39"
            },
            {
                "value": "0.90 %",
                "cell": "C39"
            },
            {
                "value": "329,566",
                "cell": "D39"
            },
            {
                "value": "4",
                "cell": "E39"
            },
            {
                "value": "9,093,510",
                "cell": "F39"
            },
            {
                "value": "229,144",
                "cell": "G39"
            },
            {
                "value": "1.6",
                "cell": "H39"
            },
            {
                "value": "41",
                "cell": "I39"
            },
            {
                "value": "81 %",
                "cell": "J39"
            },
            {
                "value": "0.48 %",
                "cell": "K39"
            },
            {
                "value": "Afghanistan",
                "cell": "A40"
            },
            {
                "value": "36,373,176",
                "cell": "B40"
            },
            {
                "value": "2.37 %",
                "cell": "C40"
            },
            {
                "value": "843,095",
                "cell": "D40"
            },
            {
                "value": "56",
                "cell": "E40"
            },
            {
                "value": "652,860",
                "cell": "F40"
            },
            {
                "value": "89,601",
                "cell": "G40"
            },
            {
                "value": "5.3",
                "cell": "H40"
            },
            {
                "value": "17",
                "cell": "I40"
            },
            {
                "value": "25 %",
                "cell": "J40"
            },
            {
                "value": "0.48 %",
                "cell": "K40"
            },
            {
                "value": "Morocco",
                "cell": "A41"
            },
            {
                "value": "36,191,805",
                "cell": "B41"
            },
            {
                "value": "1.27 %",
                "cell": "C41"
            },
            {
                "value": "452,225",
                "cell": "D41"
            },
            {
                "value": "81",
                "cell": "E41"
            },
            {
                "value": "446,300",
                "cell": "F41"
            },
            {
                "value": "-61,422",
                "cell": "G41"
            },
            {
                "value": "2.6",
                "cell": "H41"
            },
            {
                "value": "28",
                "cell": "I41"
            },
            {
                "value": "59 %",
                "cell": "J41"
            },
            {
                "value": "0.47 %",
                "cell": "K41"
            },
            {
                "value": "Saudi Arabia",
                "cell": "A42"
            },
            {
                "value": "33,554,343",
                "cell": "B42"
            },
            {
                "value": "1.87 %",
                "cell": "C42"
            },
            {
                "value": "616,130",
                "cell": "D42"
            },
            {
                "value": "16",
                "cell": "E42"
            },
            {
                "value": "2,149,690",
                "cell": "F42"
            },
            {
                "value": "318,000",
                "cell": "G42"
            },
            {
                "value": "2.7",
                "cell": "H42"
            },
            {
                "value": "30",
                "cell": "I42"
            },
            {
                "value": "77 %",
                "cell": "J42"
            },
            {
                "value": "0.44 %",
                "cell": "K42"
            },
            {
                "value": "Peru",
                "cell": "A43"
            },
            {
                "value": "32,551,815",
                "cell": "B43"
            },
            {
                "value": "1.20 %",
                "cell": "C43"
            },
            {
                "value": "386,330",
                "cell": "D43"
            },
            {
                "value": "25",
                "cell": "E43"
            },
            {
                "value": "1,280,000",
                "cell": "F43"
            },
            {
                "value": "-48,000",
                "cell": "G43"
            },
            {
                "value": "2.5",
                "cell": "H43"
            },
            {
                "value": "27",
                "cell": "I43"
            },
            {
                "value": "78 %",
                "cell": "J43"
            },
            {
                "value": "0.43 %",
                "cell": "K43"
            },
            {
                "value": "Venezuela",
                "cell": "A44"
            },
            {
                "value": "32,381,221",
                "cell": "B44"
            },
            {
                "value": "1.26 %",
                "cell": "C44"
            },
            {
                "value": "404,156",
                "cell": "D44"
            },
            {
                "value": "37",
                "cell": "E44"
            },
            {
                "value": "882,050",
                "cell": "F44"
            },
            {
                "value": "-13,824",
                "cell": "G44"
            },
            {
                "value": "2.4",
                "cell": "H44"
            },
            {
                "value": "27",
                "cell": "I44"
            },
            {
                "value": "88 %",
                "cell": "J44"
            },
            {
                "value": "0.42 %",
                "cell": "K44"
            },
            {
                "value": "Uzbekistan",
                "cell": "A45"
            },
            {
                "value": "32,364,996",
                "cell": "B45"
            },
            {
                "value": "1.42 %",
                "cell": "C45"
            },
            {
                "value": "454,355",
                "cell": "D45"
            },
            {
                "value": "76",
                "cell": "E45"
            },
            {
                "value": "425,400",
                "cell": "F45"
            },
            {
                "value": "-13,294",
                "cell": "G45"
            },
            {
                "value": "2.4",
                "cell": "H45"
            },
            {
                "value": "26",
                "cell": "I45"
            },
            {
                "value": "34 %",
                "cell": "J45"
            },
            {
                "value": "0.42 %",
                "cell": "K45"
            },
            {
                "value": "Malaysia",
                "cell": "A46"
            },
            {
                "value": "32,042,458",
                "cell": "B46"
            },
            {
                "value": "1.32 %",
                "cell": "C46"
            },
            {
                "value": "418,194",
                "cell": "D46"
            },
            {
                "value": "98",
                "cell": "E46"
            },
            {
                "value": "328,550",
                "cell": "F46"
            },
            {
                "value": "156,330",
                "cell": "G46"
            },
            {
                "value": "2.1",
                "cell": "H46"
            },
            {
                "value": "28",
                "cell": "I46"
            },
            {
                "value": "75 %",
                "cell": "J46"
            },
            {
                "value": "0.42 %",
                "cell": "K46"
            },
            {
                "value": "Angola",
                "cell": "A47"
            },
            {
                "value": "30,774,205",
                "cell": "B47"
            },
            {
                "value": "3.32 %",
                "cell": "C47"
            },
            {
                "value": "990,012",
                "cell": "D47"
            },
            {
                "value": "25",
                "cell": "E47"
            },
            {
                "value": "1,246,700",
                "cell": "F47"
            },
            {
                "value": "17,464",
                "cell": "G47"
            },
            {
                "value": "6.0",
                "cell": "H47"
            },
            {
                "value": "16",
                "cell": "I47"
            },
            {
                "value": "36 %",
                "cell": "J47"
            },
            {
                "value": "0.40 %",
                "cell": "K47"
            },
            {
                "value": "Mozambique",
                "cell": "A48"
            },
            {
                "value": "30,528,673",
                "cell": "B48"
            },
            {
                "value": "2.90 %",
                "cell": "C48"
            },
            {
                "value": "859,839",
                "cell": "D48"
            },
            {
                "value": "39",
                "cell": "E48"
            },
            {
                "value": "786,380",
                "cell": "F48"
            },
            {
                "value": "-5,000",
                "cell": "G48"
            },
            {
                "value": "5.5",
                "cell": "H48"
            },
            {
                "value": "17",
                "cell": "I48"
            },
            {
                "value": "31 %",
                "cell": "J48"
            },
            {
                "value": "0.40 %",
                "cell": "K48"
            },
            {
                "value": "Nepal",
                "cell": "A49"
            },
            {
                "value": "29,624,035",
                "cell": "B49"
            },
            {
                "value": "1.09 %",
                "cell": "C49"
            },
            {
                "value": "319,037",
                "cell": "D49"
            },
            {
                "value": "207",
                "cell": "E49"
            },
            {
                "value": "143,350",
                "cell": "F49"
            },
            {
                "value": "-74,474",
                "cell": "G49"
            },
            {
                "value": "2.3",
                "cell": "H49"
            },
            {
                "value": "23",
                "cell": "I49"
            },
            {
                "value": "19 %",
                "cell": "J49"
            },
            {
                "value": "0.39 %",
                "cell": "K49"
            },
            {
                "value": "Ghana",
                "cell": "A50"
            },
            {
                "value": "29,463,643",
                "cell": "B50"
            },
            {
                "value": "2.18 %",
                "cell": "C50"
            },
            {
                "value": "630,014",
                "cell": "D50"
            },
            {
                "value": "129",
                "cell": "E50"
            },
            {
                "value": "227,540",
                "cell": "F50"
            },
            {
                "value": "-10,000",
                "cell": "G50"
            },
            {
                "value": "4.2",
                "cell": "H50"
            },
            {
                "value": "20",
                "cell": "I50"
            },
            {
                "value": "53 %",
                "cell": "J50"
            },
            {
                "value": "0.39 %",
                "cell": "K50"
            },
            {
                "value": "Yemen",
                "cell": "A51"
            },
            {
                "value": "28,915,284",
                "cell": "B51"
            },
            {
                "value": "2.35 %",
                "cell": "C51"
            },
            {
                "value": "664,864",
                "cell": "D51"
            },
            {
                "value": "55",
                "cell": "E51"
            },
            {
                "value": "527,970",
                "cell": "F51"
            },
            {
                "value": "-15,002",
                "cell": "G51"
            },
            {
                "value": "4.4",
                "cell": "H51"
            },
            {
                "value": "19",
                "cell": "I51"
            },
            {
                "value": "33 %",
                "cell": "J51"
            },
            {
                "value": "0.38 %",
                "cell": "K51"
            },
            {
                "value": "Madagascar",
                "cell": "A52"
            },
            {
                "value": "26,262,810",
                "cell": "B52"
            },
            {
                "value": "2.71 %",
                "cell": "C52"
            },
            {
                "value": "691,915",
                "cell": "D52"
            },
            {
                "value": "45",
                "cell": "E52"
            },
            {
                "value": "581,795",
                "cell": "F52"
            },
            {
                "value": "-1,500",
                "cell": "G52"
            },
            {
                "value": "4.4",
                "cell": "H52"
            },
            {
                "value": "19",
                "cell": "I52"
            },
            {
                "value": "35 %",
                "cell": "J52"
            },
            {
                "value": "0.34 %",
                "cell": "K52"
            },
            {
                "value": "North Korea",
                "cell": "A53"
            },
            {
                "value": "25,610,672",
                "cell": "B53"
            },
            {
                "value": "0.47 %",
                "cell": "C53"
            },
            {
                "value": "119,707",
                "cell": "D53"
            },
            {
                "value": "213",
                "cell": "E53"
            },
            {
                "value": "120,410",
                "cell": "F53"
            },
            {
                "value": "-5,403",
                "cell": "G53"
            },
            {
                "value": "2.0",
                "cell": "H53"
            },
            {
                "value": "34",
                "cell": "I53"
            },
            {
                "value": "61 %",
                "cell": "J53"
            },
            {
                "value": "0.34 %",
                "cell": "K53"
            },
            {
                "value": "CÃ´te d'Ivoire",
                "cell": "A54"
            },
            {
                "value": "24,905,843",
                "cell": "B54"
            },
            {
                "value": "2.52 %",
                "cell": "C54"
            },
            {
                "value": "611,093",
                "cell": "D54"
            },
            {
                "value": "78",
                "cell": "E54"
            },
            {
                "value": "318,000",
                "cell": "F54"
            },
            {
                "value": "12,000",
                "cell": "G54"
            },
            {
                "value": "5.1",
                "cell": "H54"
            },
            {
                "value": "18",
                "cell": "I54"
            },
            {
                "value": "50 %",
                "cell": "J54"
            },
            {
                "value": "0.33 %",
                "cell": "K54"
            },
            {
                "value": "Australia",
                "cell": "A55"
            },
            {
                "value": "24,772,247",
                "cell": "B55"
            },
            {
                "value": "1.32 %",
                "cell": "C55"
            },
            {
                "value": "321,686",
                "cell": "D55"
            },
            {
                "value": "3",
                "cell": "E55"
            },
            {
                "value": "7,682,300",
                "cell": "F55"
            },
            {
                "value": "182,621",
                "cell": "G55"
            },
            {
                "value": "1.9",
                "cell": "H55"
            },
            {
                "value": "37",
                "cell": "I55"
            },
            {
                "value": "89 %",
                "cell": "J55"
            },
            {
                "value": "0.32 %",
                "cell": "K55"
            },
            {
                "value": "Cameroon",
                "cell": "A56"
            },
            {
                "value": "24,678,234",
                "cell": "B56"
            },
            {
                "value": "2.60 %",
                "cell": "C56"
            },
            {
                "value": "624,507",
                "cell": "D56"
            },
            {
                "value": "52",
                "cell": "E56"
            },
            {
                "value": "472,710",
                "cell": "F56"
            },
            {
                "value": "-7,200",
                "cell": "G56"
            },
            {
                "value": "5.0",
                "cell": "H56"
            },
            {
                "value": "18",
                "cell": "I56"
            },
            {
                "value": "55 %",
                "cell": "J56"
            },
            {
                "value": "0.32 %",
                "cell": "K56"
            },
            {
                "value": "Taiwan",
                "cell": "A57"
            },
            {
                "value": "23,694,089",
                "cell": "B57"
            },
            {
                "value": "0.29 %",
                "cell": "C57"
            },
            {
                "value": "67,633",
                "cell": "D57"
            },
            {
                "value": "669",
                "cell": "E57"
            },
            {
                "value": "35,410",
                "cell": "F57"
            },
            {
                "value": "34,000",
                "cell": "G57"
            },
            {
                "value": "1.1",
                "cell": "H57"
            },
            {
                "value": "40",
                "cell": "I57"
            },
            {
                "value": "77 %",
                "cell": "J57"
            },
            {
                "value": "0.31 %",
                "cell": "K57"
            },
            {
                "value": "Niger",
                "cell": "A58"
            },
            {
                "value": "22,311,375",
                "cell": "B58"
            },
            {
                "value": "3.88 %",
                "cell": "C58"
            },
            {
                "value": "834,027",
                "cell": "D58"
            },
            {
                "value": "18",
                "cell": "E58"
            },
            {
                "value": "1,266,700",
                "cell": "F58"
            },
            {
                "value": "-5,699",
                "cell": "G58"
            },
            {
                "value": "7.4",
                "cell": "H58"
            },
            {
                "value": "15",
                "cell": "I58"
            },
            {
                "value": "18 %",
                "cell": "J58"
            },
            {
                "value": "0.29 %",
                "cell": "K58"
            },
            {
                "value": "Sri Lanka",
                "cell": "A59"
            },
            {
                "value": "20,950,041",
                "cell": "B59"
            },
            {
                "value": "0.35 %",
                "cell": "C59"
            },
            {
                "value": "73,124",
                "cell": "D59"
            },
            {
                "value": "334",
                "cell": "E59"
            },
            {
                "value": "62,710",
                "cell": "F59"
            },
            {
                "value": "-96,954",
                "cell": "G59"
            },
            {
                "value": "2.1",
                "cell": "H59"
            },
            {
                "value": "32",
                "cell": "I59"
            },
            {
                "value": "19 %",
                "cell": "J59"
            },
            {
                "value": "0.27 %",
                "cell": "K59"
            },
            {
                "value": "Burkina Faso",
                "cell": "A60"
            },
            {
                "value": "19,751,651",
                "cell": "B60"
            },
            {
                "value": "2.91 %",
                "cell": "C60"
            },
            {
                "value": "558,269",
                "cell": "D60"
            },
            {
                "value": "72",
                "cell": "E60"
            },
            {
                "value": "273,600",
                "cell": "F60"
            },
            {
                "value": "-25,000",
                "cell": "G60"
            },
            {
                "value": "5.6",
                "cell": "H60"
            },
            {
                "value": "17",
                "cell": "I60"
            },
            {
                "value": "30 %",
                "cell": "J60"
            },
            {
                "value": "0.26 %",
                "cell": "K60"
            },
            {
                "value": "Romania",
                "cell": "A61"
            },
            {
                "value": "19,580,634",
                "cell": "B61"
            },
            {
                "value": "-0.50 %",
                "cell": "C61"
            },
            {
                "value": "-98,672",
                "cell": "D61"
            },
            {
                "value": "85",
                "cell": "E61"
            },
            {
                "value": "230,170",
                "cell": "F61"
            },
            {
                "value": "-59,999",
                "cell": "G61"
            },
            {
                "value": "1.5",
                "cell": "H61"
            },
            {
                "value": "41",
                "cell": "I61"
            },
            {
                "value": "60 %",
                "cell": "J61"
            },
            {
                "value": "0.26 %",
                "cell": "K61"
            },
            {
                "value": "Malawi",
                "cell": "A62"
            },
            {
                "value": "19,164,728",
                "cell": "B62"
            },
            {
                "value": "2.91 %",
                "cell": "C62"
            },
            {
                "value": "542,624",
                "cell": "D62"
            },
            {
                "value": "203",
                "cell": "E62"
            },
            {
                "value": "94,280",
                "cell": "F62"
            },
            {
                "value": "-6,000",
                "cell": "G62"
            },
            {
                "value": "4.9",
                "cell": "H62"
            },
            {
                "value": "17",
                "cell": "I62"
            },
            {
                "value": "16 %",
                "cell": "J62"
            },
            {
                "value": "0.25 %",
                "cell": "K62"
            },
            {
                "value": "Mali",
                "cell": "A63"
            },
            {
                "value": "19,107,706",
                "cell": "B63"
            },
            {
                "value": "3.05 %",
                "cell": "C63"
            },
            {
                "value": "565,726",
                "cell": "D63"
            },
            {
                "value": "16",
                "cell": "E63"
            },
            {
                "value": "1,220,190",
                "cell": "F63"
            },
            {
                "value": "-60,490",
                "cell": "G63"
            },
            {
                "value": "6.4",
                "cell": "H63"
            },
            {
                "value": "16",
                "cell": "I63"
            },
            {
                "value": "38 %",
                "cell": "J63"
            },
            {
                "value": "0.25 %",
                "cell": "K63"
            },
            {
                "value": "Kazakhstan",
                "cell": "A64"
            },
            {
                "value": "18,403,860",
                "cell": "B64"
            },
            {
                "value": "1.10 %",
                "cell": "C64"
            },
            {
                "value": "199,361",
                "cell": "D64"
            },
            {
                "value": "7",
                "cell": "E64"
            },
            {
                "value": "2,699,700",
                "cell": "F64"
            },
            {
                "value": "31,961",
                "cell": "G64"
            },
            {
                "value": "2.7",
                "cell": "H64"
            },
            {
                "value": "29",
                "cell": "I64"
            },
            {
                "value": "49 %",
                "cell": "J64"
            },
            {
                "value": "0.24 %",
                "cell": "K64"
            },
            {
                "value": "Syria",
                "cell": "A65"
            },
            {
                "value": "18,284,407",
                "cell": "B65"
            },
            {
                "value": "0.08 %",
                "cell": "C65"
            },
            {
                "value": "14,539",
                "cell": "D65"
            },
            {
                "value": "100",
                "cell": "E65"
            },
            {
                "value": "183,630",
                "cell": "F65"
            },
            {
                "value": "-831,579",
                "cell": "G65"
            },
            {
                "value": "3.1",
                "cell": "H65"
            },
            {
                "value": "20",
                "cell": "I65"
            },
            {
                "value": "75 %",
                "cell": "J65"
            },
            {
                "value": "0.24 %",
                "cell": "K65"
            },
            {
                "value": "Chile",
                "cell": "A66"
            },
            {
                "value": "18,197,209",
                "cell": "B66"
            },
            {
                "value": "0.79 %",
                "cell": "C66"
            },
            {
                "value": "142,483",
                "cell": "D66"
            },
            {
                "value": "24",
                "cell": "E66"
            },
            {
                "value": "743,532",
                "cell": "F66"
            },
            {
                "value": "16,164",
                "cell": "G66"
            },
            {
                "value": "1.8",
                "cell": "H66"
            },
            {
                "value": "34",
                "cell": "I66"
            },
            {
                "value": "90 %",
                "cell": "J66"
            },
            {
                "value": "0.24 %",
                "cell": "K66"
            },
            {
                "value": "Zambia",
                "cell": "A67"
            },
            {
                "value": "17,609,178",
                "cell": "B67"
            },
            {
                "value": "3.01 %",
                "cell": "C67"
            },
            {
                "value": "515,048",
                "cell": "D67"
            },
            {
                "value": "24",
                "cell": "E67"
            },
            {
                "value": "743,390",
                "cell": "F67"
            },
            {
                "value": "-6,898",
                "cell": "G67"
            },
            {
                "value": "5.2",
                "cell": "H67"
            },
            {
                "value": "17",
                "cell": "I67"
            },
            {
                "value": "39 %",
                "cell": "J67"
            },
            {
                "value": "0.23 %",
                "cell": "K67"
            },
            {
                "value": "Guatemala",
                "cell": "A68"
            },
            {
                "value": "17,245,346",
                "cell": "B68"
            },
            {
                "value": "1.96 %",
                "cell": "C68"
            },
            {
                "value": "331,843",
                "cell": "D68"
            },
            {
                "value": "161",
                "cell": "E68"
            },
            {
                "value": "107,160",
                "cell": "F68"
            },
            {
                "value": "-10,026",
                "cell": "G68"
            },
            {
                "value": "3.2",
                "cell": "H68"
            },
            {
                "value": "21",
                "cell": "I68"
            },
            {
                "value": "52 %",
                "cell": "J68"
            },
            {
                "value": "0.23 %",
                "cell": "K68"
            },
            {
                "value": "Netherlands",
                "cell": "A69"
            },
            {
                "value": "17,084,459",
                "cell": "B69"
            },
            {
                "value": "0.28 %",
                "cell": "C69"
            },
            {
                "value": "48,521",
                "cell": "D69"
            },
            {
                "value": "507",
                "cell": "E69"
            },
            {
                "value": "33,720",
                "cell": "F69"
            },
            {
                "value": "12,537",
                "cell": "G69"
            },
            {
                "value": "1.7",
                "cell": "H69"
            },
            {
                "value": "42",
                "cell": "I69"
            },
            {
                "value": "91 %",
                "cell": "J69"
            },
            {
                "value": "0.22 %",
                "cell": "K69"
            },
            {
                "value": "Zimbabwe",
                "cell": "A70"
            },
            {
                "value": "16,913,261",
                "cell": "B70"
            },
            {
                "value": "2.32 %",
                "cell": "C70"
            },
            {
                "value": "383,357",
                "cell": "D70"
            },
            {
                "value": "44",
                "cell": "E70"
            },
            {
                "value": "386,850",
                "cell": "F70"
            },
            {
                "value": "-50,000",
                "cell": "G70"
            },
            {
                "value": "4.0",
                "cell": "H70"
            },
            {
                "value": "19",
                "cell": "I70"
            },
            {
                "value": "30 %",
                "cell": "J70"
            },
            {
                "value": "0.22 %",
                "cell": "K70"
            },
            {
                "value": "Ecuador",
                "cell": "A71"
            },
            {
                "value": "16,863,425",
                "cell": "B71"
            },
            {
                "value": "1.44 %",
                "cell": "C71"
            },
            {
                "value": "238,567",
                "cell": "D71"
            },
            {
                "value": "68",
                "cell": "E71"
            },
            {
                "value": "248,360",
                "cell": "F71"
            },
            {
                "value": "-7,600",
                "cell": "G71"
            },
            {
                "value": "2.6",
                "cell": "H71"
            },
            {
                "value": "27",
                "cell": "I71"
            },
            {
                "value": "64 %",
                "cell": "J71"
            },
            {
                "value": "0.22 %",
                "cell": "K71"
            },
            {
                "value": "Senegal",
                "cell": "A72"
            },
            {
                "value": "16,294,270",
                "cell": "B72"
            },
            {
                "value": "2.80 %",
                "cell": "C72"
            },
            {
                "value": "443,703",
                "cell": "D72"
            },
            {
                "value": "85",
                "cell": "E72"
            },
            {
                "value": "192,530",
                "cell": "F72"
            },
            {
                "value": "-19,999",
                "cell": "G72"
            },
            {
                "value": "5.0",
                "cell": "H72"
            },
            {
                "value": "18",
                "cell": "I72"
            },
            {
                "value": "43 %",
                "cell": "J72"
            },
            {
                "value": "0.21 %",
                "cell": "K72"
            },
            {
                "value": "Cambodia",
                "cell": "A73"
            },
            {
                "value": "16,245,729",
                "cell": "B73"
            },
            {
                "value": "1.50 %",
                "cell": "C73"
            },
            {
                "value": "240,356",
                "cell": "D73"
            },
            {
                "value": "92",
                "cell": "E73"
            },
            {
                "value": "176,520",
                "cell": "F73"
            },
            {
                "value": "-30,000",
                "cell": "G73"
            },
            {
                "value": "2.7",
                "cell": "H73"
            },
            {
                "value": "24",
                "cell": "I73"
            },
            {
                "value": "21 %",
                "cell": "J73"
            },
            {
                "value": "0.21 %",
                "cell": "K73"
            },
            {
                "value": "Chad",
                "cell": "A74"
            },
            {
                "value": "15,353,184",
                "cell": "B74"
            },
            {
                "value": "3.04 %",
                "cell": "C74"
            },
            {
                "value": "453,190",
                "cell": "D74"
            },
            {
                "value": "12",
                "cell": "E74"
            },
            {
                "value": "1,259,200",
                "cell": "F74"
            },
            {
                "value": "20,000",
                "cell": "G74"
            },
            {
                "value": "6.3",
                "cell": "H74"
            },
            {
                "value": "16",
                "cell": "I74"
            },
            {
                "value": "21 %",
                "cell": "J74"
            },
            {
                "value": "0.20 %",
                "cell": "K74"
            },
            {
                "value": "Somalia",
                "cell": "A75"
            },
            {
                "value": "15,181,925",
                "cell": "B75"
            },
            {
                "value": "2.98 %",
                "cell": "C75"
            },
            {
                "value": "439,402",
                "cell": "D75"
            },
            {
                "value": "24",
                "cell": "E75"
            },
            {
                "value": "627,340",
                "cell": "F75"
            },
            {
                "value": "-45,374",
                "cell": "G75"
            },
            {
                "value": "6.6",
                "cell": "H75"
            },
            {
                "value": "17",
                "cell": "I75"
            },
            {
                "value": "31 %",
                "cell": "J75"
            },
            {
                "value": "0.20 %",
                "cell": "K75"
            },
            {
                "value": "Guinea",
                "cell": "A76"
            },
            {
                "value": "13,052,608",
                "cell": "B76"
            },
            {
                "value": "2.64 %",
                "cell": "C76"
            },
            {
                "value": "335,432",
                "cell": "D76"
            },
            {
                "value": "53",
                "cell": "E76"
            },
            {
                "value": "245,720",
                "cell": "F76"
            },
            {
                "value": "-50,000",
                "cell": "G76"
            },
            {
                "value": "5.1",
                "cell": "H76"
            },
            {
                "value": "18",
                "cell": "I76"
            },
            {
                "value": "38 %",
                "cell": "J76"
            },
            {
                "value": "0.17 %",
                "cell": "K76"
            },
            {
                "value": "South Sudan",
                "cell": "A77"
            },
            {
                "value": "12,919,053",
                "cell": "B77"
            },
            {
                "value": "2.73 %",
                "cell": "C77"
            },
            {
                "value": "343,339",
                "cell": "D77"
            },
            {
                "value": "21",
                "cell": "E77"
            },
            {
                "value": "610,952",
                "cell": "F77"
            },
            {
                "value": "85,000",
                "cell": "G77"
            },
            {
                "value": "5.2",
                "cell": "H77"
            },
            {
                "value": "19",
                "cell": "I77"
            },
            {
                "value": "19 %",
                "cell": "J77"
            },
            {
                "value": "0.17 %",
                "cell": "K77"
            },
            {
                "value": "Rwanda",
                "cell": "A78"
            },
            {
                "value": "12,501,156",
                "cell": "B78"
            },
            {
                "value": "2.40 %",
                "cell": "C78"
            },
            {
                "value": "292,749",
                "cell": "D78"
            },
            {
                "value": "507",
                "cell": "E78"
            },
            {
                "value": "24,670",
                "cell": "F78"
            },
            {
                "value": "-15,820",
                "cell": "G78"
            },
            {
                "value": "4.2",
                "cell": "H78"
            },
            {
                "value": "19",
                "cell": "I78"
            },
            {
                "value": "32 %",
                "cell": "J78"
            },
            {
                "value": "0.16 %",
                "cell": "K78"
            },
            {
                "value": "Tunisia",
                "cell": "A79"
            },
            {
                "value": "11,659,174",
                "cell": "B79"
            },
            {
                "value": "1.10 %",
                "cell": "C79"
            },
            {
                "value": "127,047",
                "cell": "D79"
            },
            {
                "value": "75",
                "cell": "E79"
            },
            {
                "value": "155,360",
                "cell": "F79"
            },
            {
                "value": "-13,193",
                "cell": "G79"
            },
            {
                "value": "2.3",
                "cell": "H79"
            },
            {
                "value": "31",
                "cell": "I79"
            },
            {
                "value": "66 %",
                "cell": "J79"
            },
            {
                "value": "0.15 %",
                "cell": "K79"
            },
            {
                "value": "Belgium",
                "cell": "A80"
            },
            {
                "value": "11,498,519",
                "cell": "B80"
            },
            {
                "value": "0.61 %",
                "cell": "C80"
            },
            {
                "value": "69,183",
                "cell": "D80"
            },
            {
                "value": "380",
                "cell": "E80"
            },
            {
                "value": "30,280",
                "cell": "F80"
            },
            {
                "value": "51,734",
                "cell": "G80"
            },
            {
                "value": "1.8",
                "cell": "H80"
            },
            {
                "value": "41",
                "cell": "I80"
            },
            {
                "value": "96 %",
                "cell": "J80"
            },
            {
                "value": "0.15 %",
                "cell": "K80"
            },
            {
                "value": "Cuba",
                "cell": "A81"
            },
            {
                "value": "11,489,082",
                "cell": "B81"
            },
            {
                "value": "0.04 %",
                "cell": "C81"
            },
            {
                "value": "4,446",
                "cell": "D81"
            },
            {
                "value": "108",
                "cell": "E81"
            },
            {
                "value": "106,440",
                "cell": "F81"
            },
            {
                "value": "-14,654",
                "cell": "G81"
            },
            {
                "value": "1.7",
                "cell": "H81"
            },
            {
                "value": "41",
                "cell": "I81"
            },
            {
                "value": "75 %",
                "cell": "J81"
            },
            {
                "value": "0.15 %",
                "cell": "K81"
            },
            {
                "value": "Benin",
                "cell": "A82"
            },
            {
                "value": "11,485,674",
                "cell": "B82"
            },
            {
                "value": "2.77 %",
                "cell": "C82"
            },
            {
                "value": "309,982",
                "cell": "D82"
            },
            {
                "value": "102",
                "cell": "E82"
            },
            {
                "value": "112,760",
                "cell": "F82"
            },
            {
                "value": "-8,454",
                "cell": "G82"
            },
            {
                "value": "5.2",
                "cell": "H82"
            },
            {
                "value": "18",
                "cell": "I82"
            },
            {
                "value": "45 %",
                "cell": "J82"
            },
            {
                "value": "0.15 %",
                "cell": "K82"
            },
            {
                "value": "Burundi",
                "cell": "A83"
            },
            {
                "value": "11,216,450",
                "cell": "B83"
            },
            {
                "value": "3.24 %",
                "cell": "C83"
            },
            {
                "value": "352,205",
                "cell": "D83"
            },
            {
                "value": "437",
                "cell": "E83"
            },
            {
                "value": "25,680",
                "cell": "F83"
            },
            {
                "value": "-14,000",
                "cell": "G83"
            },
            {
                "value": "6.0",
                "cell": "H83"
            },
            {
                "value": "18",
                "cell": "I83"
            },
            {
                "value": "13 %",
                "cell": "J83"
            },
            {
                "value": "0.15 %",
                "cell": "K83"
            },
            {
                "value": "Bolivia",
                "cell": "A84"
            },
            {
                "value": "11,215,674",
                "cell": "B84"
            },
            {
                "value": "1.48 %",
                "cell": "C84"
            },
            {
                "value": "164,074",
                "cell": "D84"
            },
            {
                "value": "10",
                "cell": "E84"
            },
            {
                "value": "1,083,300",
                "cell": "F84"
            },
            {
                "value": "-12,359",
                "cell": "G84"
            },
            {
                "value": "3.0",
                "cell": "H84"
            },
            {
                "value": "24",
                "cell": "I84"
            },
            {
                "value": "70 %",
                "cell": "J84"
            },
            {
                "value": "0.15 %",
                "cell": "K84"
            },
            {
                "value": "Greece",
                "cell": "A85"
            },
            {
                "value": "11,142,161",
                "cell": "B85"
            },
            {
                "value": "-0.16 %",
                "cell": "C85"
            },
            {
                "value": "-17,612",
                "cell": "D85"
            },
            {
                "value": "86",
                "cell": "E85"
            },
            {
                "value": "128,900",
                "cell": "F85"
            },
            {
                "value": "-32,360",
                "cell": "G85"
            },
            {
                "value": "1.3",
                "cell": "H85"
            },
            {
                "value": "43",
                "cell": "I85"
            },
            {
                "value": "78 %",
                "cell": "J85"
            },
            {
                "value": "0.15 %",
                "cell": "K85"
            },
            {
                "value": "Haiti",
                "cell": "A86"
            },
            {
                "value": "11,112,945",
                "cell": "B86"
            },
            {
                "value": "1.20 %",
                "cell": "C86"
            },
            {
                "value": "131,716",
                "cell": "D86"
            },
            {
                "value": "403",
                "cell": "E86"
            },
            {
                "value": "27,560",
                "cell": "F86"
            },
            {
                "value": "-30,000",
                "cell": "G86"
            },
            {
                "value": "3.1",
                "cell": "H86"
            },
            {
                "value": "23",
                "cell": "I86"
            },
            {
                "value": "60 %",
                "cell": "J86"
            },
            {
                "value": "0.15 %",
                "cell": "K86"
            },
            {
                "value": "Dominican Republic",
                "cell": "A87"
            },
            {
                "value": "10,882,996",
                "cell": "B87"
            },
            {
                "value": "1.08 %",
                "cell": "C87"
            },
            {
                "value": "115,998",
                "cell": "D87"
            },
            {
                "value": "225",
                "cell": "E87"
            },
            {
                "value": "48,320",
                "cell": "F87"
            },
            {
                "value": "-30,602",
                "cell": "G87"
            },
            {
                "value": "2.5",
                "cell": "H87"
            },
            {
                "value": "26",
                "cell": "I87"
            },
            {
                "value": "81 %",
                "cell": "J87"
            },
            {
                "value": "0.14 %",
                "cell": "K87"
            },
            {
                "value": "Czech Republic",
                "cell": "A88"
            },
            {
                "value": "10,625,250",
                "cell": "B88"
            },
            {
                "value": "0.07 %",
                "cell": "C88"
            },
            {
                "value": "6,947",
                "cell": "D88"
            },
            {
                "value": "138",
                "cell": "E88"
            },
            {
                "value": "77,240",
                "cell": "F88"
            },
            {
                "value": "11,999",
                "cell": "G88"
            },
            {
                "value": "1.5",
                "cell": "H88"
            },
            {
                "value": "41",
                "cell": "I88"
            },
            {
                "value": "74 %",
                "cell": "J88"
            },
            {
                "value": "0.14 %",
                "cell": "K88"
            },
            {
                "value": "Portugal",
                "cell": "A89"
            },
            {
                "value": "10,291,196",
                "cell": "B89"
            },
            {
                "value": "-0.37 %",
                "cell": "C89"
            },
            {
                "value": "-38,310",
                "cell": "D89"
            },
            {
                "value": "112",
                "cell": "E89"
            },
            {
                "value": "91,590",
                "cell": "F89"
            },
            {
                "value": "-28,000",
                "cell": "G89"
            },
            {
                "value": "1.3",
                "cell": "H89"
            },
            {
                "value": "44",
                "cell": "I89"
            },
            {
                "value": "67 %",
                "cell": "J89"
            },
            {
                "value": "0.13 %",
                "cell": "K89"
            },
            {
                "value": "Sweden",
                "cell": "A90"
            },
            {
                "value": "9,982,709",
                "cell": "B90"
            },
            {
                "value": "0.73 %",
                "cell": "C90"
            },
            {
                "value": "72,008",
                "cell": "D90"
            },
            {
                "value": "24",
                "cell": "E90"
            },
            {
                "value": "410,340",
                "cell": "F90"
            },
            {
                "value": "50,792",
                "cell": "G90"
            },
            {
                "value": "1.9",
                "cell": "H90"
            },
            {
                "value": "41",
                "cell": "I90"
            },
            {
                "value": "85 %",
                "cell": "J90"
            },
            {
                "value": "0.13 %",
                "cell": "K90"
            },
            {
                "value": "Azerbaijan",
                "cell": "A91"
            },
            {
                "value": "9,923,914",
                "cell": "B91"
            },
            {
                "value": "0.98 %",
                "cell": "C91"
            },
            {
                "value": "96,325",
                "cell": "D91"
            },
            {
                "value": "120",
                "cell": "E91"
            },
            {
                "value": "82,658",
                "cell": "F91"
            },
            {
                "value": "0",
                "cell": "G91"
            },
            {
                "value": "2.1",
                "cell": "H91"
            },
            {
                "value": "30",
                "cell": "I91"
            },
            {
                "value": "54 %",
                "cell": "J91"
            },
            {
                "value": "0.13 %",
                "cell": "K91"
            },
            {
                "value": "Jordan",
                "cell": "A92"
            },
            {
                "value": "9,903,802",
                "cell": "B92"
            },
            {
                "value": "2.08 %",
                "cell": "C92"
            },
            {
                "value": "201,449",
                "cell": "D92"
            },
            {
                "value": "112",
                "cell": "E92"
            },
            {
                "value": "88,780",
                "cell": "F92"
            },
            {
                "value": "195,057",
                "cell": "G92"
            },
            {
                "value": "3.6",
                "cell": "H92"
            },
            {
                "value": "22",
                "cell": "I92"
            },
            {
                "value": "67 %",
                "cell": "J92"
            },
            {
                "value": "0.13 %",
                "cell": "K92"
            },
            {
                "value": "Hungary",
                "cell": "A93"
            },
            {
                "value": "9,688,847",
                "cell": "B93"
            },
            {
                "value": "-0.34 %",
                "cell": "C93"
            },
            {
                "value": "-32,712",
                "cell": "D93"
            },
            {
                "value": "107",
                "cell": "E93"
            },
            {
                "value": "90,530",
                "cell": "F93"
            },
            {
                "value": "6,000",
                "cell": "G93"
            },
            {
                "value": "1.3",
                "cell": "H93"
            },
            {
                "value": "42",
                "cell": "I93"
            },
            {
                "value": "73 %",
                "cell": "J93"
            },
            {
                "value": "0.13 %",
                "cell": "K93"
            },
            {
                "value": "United Arab Emirates",
                "cell": "A94"
            },
            {
                "value": "9,541,615",
                "cell": "B94"
            },
            {
                "value": "1.50 %",
                "cell": "C94"
            },
            {
                "value": "141,470",
                "cell": "D94"
            },
            {
                "value": "114",
                "cell": "E94"
            },
            {
                "value": "83,600",
                "cell": "F94"
            },
            {
                "value": "96,000",
                "cell": "G94"
            },
            {
                "value": "1.8",
                "cell": "H94"
            },
            {
                "value": "33",
                "cell": "I94"
            },
            {
                "value": "90 %",
                "cell": "J94"
            },
            {
                "value": "0.13 %",
                "cell": "K94"
            },
            {
                "value": "Belarus",
                "cell": "A95"
            },
            {
                "value": "9,452,113",
                "cell": "B95"
            },
            {
                "value": "-0.17 %",
                "cell": "C95"
            },
            {
                "value": "-16,225",
                "cell": "D95"
            },
            {
                "value": "47",
                "cell": "E95"
            },
            {
                "value": "202,910",
                "cell": "F95"
            },
            {
                "value": "15,160",
                "cell": "G95"
            },
            {
                "value": "1.6",
                "cell": "H95"
            },
            {
                "value": "40",
                "cell": "I95"
            },
            {
                "value": "75 %",
                "cell": "J95"
            },
            {
                "value": "0.12 %",
                "cell": "K95"
            },
            {
                "value": "Honduras",
                "cell": "A96"
            },
            {
                "value": "9,417,167",
                "cell": "B96"
            },
            {
                "value": "1.64 %",
                "cell": "C96"
            },
            {
                "value": "152,100",
                "cell": "D96"
            },
            {
                "value": "84",
                "cell": "E96"
            },
            {
                "value": "111,890",
                "cell": "F96"
            },
            {
                "value": "-3,000",
                "cell": "G96"
            },
            {
                "value": "2.7",
                "cell": "H96"
            },
            {
                "value": "23",
                "cell": "I96"
            },
            {
                "value": "52 %",
                "cell": "J96"
            },
            {
                "value": "0.12 %",
                "cell": "K96"
            },
            {
                "value": "Tajikistan",
                "cell": "A97"
            },
            {
                "value": "9,107,211",
                "cell": "B97"
            },
            {
                "value": "2.08 %",
                "cell": "C97"
            },
            {
                "value": "185,868",
                "cell": "D97"
            },
            {
                "value": "65",
                "cell": "E97"
            },
            {
                "value": "139,960",
                "cell": "F97"
            },
            {
                "value": "-20,000",
                "cell": "G97"
            },
            {
                "value": "3.5",
                "cell": "H97"
            },
            {
                "value": "22",
                "cell": "I97"
            },
            {
                "value": "27 %",
                "cell": "J97"
            },
            {
                "value": "0.12 %",
                "cell": "K97"
            },
            {
                "value": "Serbia",
                "cell": "A98"
            },
            {
                "value": "8,762,027",
                "cell": "B98"
            },
            {
                "value": "-0.32 %",
                "cell": "C98"
            },
            {
                "value": "-28,547",
                "cell": "D98"
            },
            {
                "value": "100",
                "cell": "E98"
            },
            {
                "value": "87,460",
                "cell": "F98"
            },
            {
                "value": "-20,000",
                "cell": "G98"
            },
            {
                "value": "1.6",
                "cell": "H98"
            },
            {
                "value": "40",
                "cell": "I98"
            },
            {
                "value": "59 %",
                "cell": "J98"
            },
            {
                "value": "0.11 %",
                "cell": "K98"
            },
            {
                "value": "Austria",
                "cell": "A99"
            },
            {
                "value": "8,751,820",
                "cell": "B99"
            },
            {
                "value": "0.19 %",
                "cell": "C99"
            },
            {
                "value": "16,367",
                "cell": "D99"
            },
            {
                "value": "106",
                "cell": "E99"
            },
            {
                "value": "82,409",
                "cell": "F99"
            },
            {
                "value": "53,434",
                "cell": "G99"
            },
            {
                "value": "1.4",
                "cell": "H99"
            },
            {
                "value": "43",
                "cell": "I99"
            },
            {
                "value": "65 %",
                "cell": "J99"
            },
            {
                "value": "0.11 %",
                "cell": "K99"
            },
            {
                "value": "Switzerland",
                "cell": "A100"
            },
            {
                "value": "8,544,034",
                "cell": "B100"
            },
            {
                "value": "0.80 %",
                "cell": "C100"
            },
            {
                "value": "68,029",
                "cell": "D100"
            },
            {
                "value": "216",
                "cell": "E100"
            },
            {
                "value": "39,516",
                "cell": "F100"
            },
            {
                "value": "79,453",
                "cell": "G100"
            },
            {
                "value": "1.5",
                "cell": "H100"
            },
            {
                "value": "42",
                "cell": "I100"
            },
            {
                "value": "73 %",
                "cell": "J100"
            },
            {
                "value": "0.11 %",
                "cell": "K100"
            },
            {
                "value": "Israel",
                "cell": "A101"
            },
            {
                "value": "8,452,841",
                "cell": "B101"
            },
            {
                "value": "1.58 %",
                "cell": "C101"
            },
            {
                "value": "131,271",
                "cell": "D101"
            },
            {
                "value": "391",
                "cell": "E101"
            },
            {
                "value": "21,640",
                "cell": "F101"
            },
            {
                "value": "3,899",
                "cell": "G101"
            },
            {
                "value": "3.0",
                "cell": "H101"
            },
            {
                "value": "30",
                "cell": "I101"
            },
            {
                "value": "89 %",
                "cell": "J101"
            },
            {
                "value": "0.11 %",
                "cell": "K101"
            },
            {
                "value": "Papua New Guinea",
                "cell": "A102"
            },
            {
                "value": "8,418,346",
                "cell": "B102"
            },
            {
                "value": "2.03 %",
                "cell": "C102"
            },
            {
                "value": "167,184",
                "cell": "D102"
            },
            {
                "value": "19",
                "cell": "E102"
            },
            {
                "value": "452,860",
                "cell": "F102"
            },
            {
                "value": "-200",
                "cell": "G102"
            },
            {
                "value": "3.8",
                "cell": "H102"
            },
            {
                "value": "22",
                "cell": "I102"
            },
            {
                "value": "12 %",
                "cell": "J102"
            },
            {
                "value": "0.11 %",
                "cell": "K102"
            },
            {
                "value": "Togo",
                "cell": "A103"
            },
            {
                "value": "7,990,926",
                "cell": "B103"
            },
            {
                "value": "2.48 %",
                "cell": "C103"
            },
            {
                "value": "193,232",
                "cell": "D103"
            },
            {
                "value": "147",
                "cell": "E103"
            },
            {
                "value": "54,390",
                "cell": "F103"
            },
            {
                "value": "-1,999",
                "cell": "G103"
            },
            {
                "value": "4.7",
                "cell": "H103"
            },
            {
                "value": "19",
                "cell": "I103"
            },
            {
                "value": "39 %",
                "cell": "J103"
            },
            {
                "value": "0.10 %",
                "cell": "K103"
            },
            {
                "value": "Sierra Leone",
                "cell": "A104"
            },
            {
                "value": "7,719,729",
                "cell": "B104"
            },
            {
                "value": "2.15 %",
                "cell": "C104"
            },
            {
                "value": "162,517",
                "cell": "D104"
            },
            {
                "value": "107",
                "cell": "E104"
            },
            {
                "value": "72,180",
                "cell": "F104"
            },
            {
                "value": "-4,200",
                "cell": "G104"
            },
            {
                "value": "4.8",
                "cell": "H104"
            },
            {
                "value": "18",
                "cell": "I104"
            },
            {
                "value": "35 %",
                "cell": "J104"
            },
            {
                "value": "0.10 %",
                "cell": "K104"
            },
            {
                "value": "Hong Kong",
                "cell": "A105"
            },
            {
                "value": "7,428,887",
                "cell": "B105"
            },
            {
                "value": "0.87 %",
                "cell": "C105"
            },
            {
                "value": "64,004",
                "cell": "D105"
            },
            {
                "value": "7,075",
                "cell": "E105"
            },
            {
                "value": "1,050",
                "cell": "F105"
            },
            {
                "value": "14,978",
                "cell": "G105"
            },
            {
                "value": "1.2",
                "cell": "H105"
            },
            {
                "value": "43",
                "cell": "I105"
            },
            {
                "value": "N.A.",
                "cell": "J105"
            },
            {
                "value": "0.10 %",
                "cell": "K105"
            },
            {
                "value": "Bulgaria",
                "cell": "A106"
            },
            {
                "value": "7,036,848",
                "cell": "B106"
            },
            {
                "value": "-0.67 %",
                "cell": "C106"
            },
            {
                "value": "-47,723",
                "cell": "D106"
            },
            {
                "value": "65",
                "cell": "E106"
            },
            {
                "value": "108,560",
                "cell": "F106"
            },
            {
                "value": "-4,894",
                "cell": "G106"
            },
            {
                "value": "1.5",
                "cell": "H106"
            },
            {
                "value": "43",
                "cell": "I106"
            },
            {
                "value": "74 %",
                "cell": "J106"
            },
            {
                "value": "0.09 %",
                "cell": "K106"
            },
            {
                "value": "Laos",
                "cell": "A107"
            },
            {
                "value": "6,961,210",
                "cell": "B107"
            },
            {
                "value": "1.50 %",
                "cell": "C107"
            },
            {
                "value": "103,050",
                "cell": "D107"
            },
            {
                "value": "30",
                "cell": "E107"
            },
            {
                "value": "230,800",
                "cell": "F107"
            },
            {
                "value": "-35,498",
                "cell": "G107"
            },
            {
                "value": "2.9",
                "cell": "H107"
            },
            {
                "value": "23",
                "cell": "I107"
            },
            {
                "value": "42 %",
                "cell": "J107"
            },
            {
                "value": "0.09 %",
                "cell": "K107"
            },
            {
                "value": "Paraguay",
                "cell": "A108"
            },
            {
                "value": "6,896,908",
                "cell": "B108"
            },
            {
                "value": "1.26 %",
                "cell": "C108"
            },
            {
                "value": "85,611",
                "cell": "D108"
            },
            {
                "value": "17",
                "cell": "E108"
            },
            {
                "value": "397,300",
                "cell": "F108"
            },
            {
                "value": "-17,340",
                "cell": "G108"
            },
            {
                "value": "2.6",
                "cell": "H108"
            },
            {
                "value": "25",
                "cell": "I108"
            },
            {
                "value": "63 %",
                "cell": "J108"
            },
            {
                "value": "0.09 %",
                "cell": "K108"
            },
            {
                "value": "Libya",
                "cell": "A109"
            },
            {
                "value": "6,470,956",
                "cell": "B109"
            },
            {
                "value": "1.51 %",
                "cell": "C109"
            },
            {
                "value": "96,340",
                "cell": "D109"
            },
            {
                "value": "4",
                "cell": "E109"
            },
            {
                "value": "1,759,540",
                "cell": "F109"
            },
            {
                "value": "-86,681",
                "cell": "G109"
            },
            {
                "value": "2.4",
                "cell": "H109"
            },
            {
                "value": "27",
                "cell": "I109"
            },
            {
                "value": "79 %",
                "cell": "J109"
            },
            {
                "value": "0.08 %",
                "cell": "K109"
            },
            {
                "value": "El Salvador",
                "cell": "A110"
            },
            {
                "value": "6,411,558",
                "cell": "B110"
            },
            {
                "value": "0.53 %",
                "cell": "C110"
            },
            {
                "value": "33,705",
                "cell": "D110"
            },
            {
                "value": "309",
                "cell": "E110"
            },
            {
                "value": "20,720",
                "cell": "F110"
            },
            {
                "value": "-48,083",
                "cell": "G110"
            },
            {
                "value": "2.2",
                "cell": "H110"
            },
            {
                "value": "26",
                "cell": "I110"
            },
            {
                "value": "69 %",
                "cell": "J110"
            },
            {
                "value": "0.08 %",
                "cell": "K110"
            },
            {
                "value": "Nicaragua",
                "cell": "A111"
            },
            {
                "value": "6,284,757",
                "cell": "B111"
            },
            {
                "value": "1.08 %",
                "cell": "C111"
            },
            {
                "value": "67,176",
                "cell": "D111"
            },
            {
                "value": "52",
                "cell": "E111"
            },
            {
                "value": "120,340",
                "cell": "F111"
            },
            {
                "value": "-27,000",
                "cell": "G111"
            },
            {
                "value": "2.3",
                "cell": "H111"
            },
            {
                "value": "25",
                "cell": "I111"
            },
            {
                "value": "61 %",
                "cell": "J111"
            },
            {
                "value": "0.08 %",
                "cell": "K111"
            },
            {
                "value": "Kyrgyzstan",
                "cell": "A112"
            },
            {
                "value": "6,132,932",
                "cell": "B112"
            },
            {
                "value": "1.45 %",
                "cell": "C112"
            },
            {
                "value": "87,815",
                "cell": "D112"
            },
            {
                "value": "32",
                "cell": "E112"
            },
            {
                "value": "191,800",
                "cell": "F112"
            },
            {
                "value": "-27,580",
                "cell": "G112"
            },
            {
                "value": "3.1",
                "cell": "H112"
            },
            {
                "value": "25",
                "cell": "I112"
            },
            {
                "value": "35 %",
                "cell": "J112"
            },
            {
                "value": "0.08 %",
                "cell": "K112"
            },
            {
                "value": "Lebanon",
                "cell": "A113"
            },
            {
                "value": "6,093,509",
                "cell": "B113"
            },
            {
                "value": "0.18 %",
                "cell": "C113"
            },
            {
                "value": "11,152",
                "cell": "D113"
            },
            {
                "value": "596",
                "cell": "E113"
            },
            {
                "value": "10,230",
                "cell": "F113"
            },
            {
                "value": "250,000",
                "cell": "G113"
            },
            {
                "value": "1.7",
                "cell": "H113"
            },
            {
                "value": "29",
                "cell": "I113"
            },
            {
                "value": "73 %",
                "cell": "J113"
            },
            {
                "value": "0.08 %",
                "cell": "K113"
            },
            {
                "value": "Turkmenistan",
                "cell": "A114"
            },
            {
                "value": "5,851,466",
                "cell": "B114"
            },
            {
                "value": "1.62 %",
                "cell": "C114"
            },
            {
                "value": "93,391",
                "cell": "D114"
            },
            {
                "value": "12",
                "cell": "E114"
            },
            {
                "value": "469,930",
                "cell": "F114"
            },
            {
                "value": "-10,000",
                "cell": "G114"
            },
            {
                "value": "3.0",
                "cell": "H114"
            },
            {
                "value": "26",
                "cell": "I114"
            },
            {
                "value": "48 %",
                "cell": "J114"
            },
            {
                "value": "0.08 %",
                "cell": "K114"
            },
            {
                "value": "Singapore",
                "cell": "A115"
            },
            {
                "value": "5,791,901",
                "cell": "B115"
            },
            {
                "value": "1.45 %",
                "cell": "C115"
            },
            {
                "value": "83,057",
                "cell": "D115"
            },
            {
                "value": "8,274",
                "cell": "E115"
            },
            {
                "value": "700",
                "cell": "F115"
            },
            {
                "value": "67,586",
                "cell": "G115"
            },
            {
                "value": "1.2",
                "cell": "H115"
            },
            {
                "value": "40",
                "cell": "I115"
            },
            {
                "value": "N.A.",
                "cell": "J115"
            },
            {
                "value": "0.08 %",
                "cell": "K115"
            },
            {
                "value": "Denmark",
                "cell": "A116"
            },
            {
                "value": "5,754,356",
                "cell": "B116"
            },
            {
                "value": "0.36 %",
                "cell": "C116"
            },
            {
                "value": "20,805",
                "cell": "D116"
            },
            {
                "value": "136",
                "cell": "E116"
            },
            {
                "value": "42,430",
                "cell": "F116"
            },
            {
                "value": "21,368",
                "cell": "G116"
            },
            {
                "value": "1.7",
                "cell": "H116"
            },
            {
                "value": "42",
                "cell": "I116"
            },
            {
                "value": "87 %",
                "cell": "J116"
            },
            {
                "value": "0.08 %",
                "cell": "K116"
            },
            {
                "value": "Finland",
                "cell": "A117"
            },
            {
                "value": "5,542,517",
                "cell": "B117"
            },
            {
                "value": "0.35 %",
                "cell": "C117"
            },
            {
                "value": "19,286",
                "cell": "D117"
            },
            {
                "value": "18",
                "cell": "E117"
            },
            {
                "value": "303,890",
                "cell": "F117"
            },
            {
                "value": "16,283",
                "cell": "G117"
            },
            {
                "value": "1.8",
                "cell": "H117"
            },
            {
                "value": "42",
                "cell": "I117"
            },
            {
                "value": "84 %",
                "cell": "J117"
            },
            {
                "value": "0.07 %",
                "cell": "K117"
            },
            {
                "value": "Slovakia",
                "cell": "A118"
            },
            {
                "value": "5,449,816",
                "cell": "B118"
            },
            {
                "value": "0.04 %",
                "cell": "C118"
            },
            {
                "value": "2,154",
                "cell": "D118"
            },
            {
                "value": "113",
                "cell": "E118"
            },
            {
                "value": "48,088",
                "cell": "F118"
            },
            {
                "value": "2,269",
                "cell": "G118"
            },
            {
                "value": "1.4",
                "cell": "H118"
            },
            {
                "value": "39",
                "cell": "I118"
            },
            {
                "value": "54 %",
                "cell": "J118"
            },
            {
                "value": "0.07 %",
                "cell": "K118"
            },
            {
                "value": "Congo",
                "cell": "A119"
            },
            {
                "value": "5,399,895",
                "cell": "B119"
            },
            {
                "value": "2.64 %",
                "cell": "C119"
            },
            {
                "value": "139,145",
                "cell": "D119"
            },
            {
                "value": "16",
                "cell": "E119"
            },
            {
                "value": "341,500",
                "cell": "F119"
            },
            {
                "value": "-12,000",
                "cell": "G119"
            },
            {
                "value": "4.9",
                "cell": "H119"
            },
            {
                "value": "19",
                "cell": "I119"
            },
            {
                "value": "60 %",
                "cell": "J119"
            },
            {
                "value": "0.07 %",
                "cell": "K119"
            },
            {
                "value": "Norway",
                "cell": "A120"
            },
            {
                "value": "5,353,363",
                "cell": "B120"
            },
            {
                "value": "0.90 %",
                "cell": "C120"
            },
            {
                "value": "47,980",
                "cell": "D120"
            },
            {
                "value": "15",
                "cell": "E120"
            },
            {
                "value": "365,268",
                "cell": "F120"
            },
            {
                "value": "44,363",
                "cell": "G120"
            },
            {
                "value": "1.8",
                "cell": "H120"
            },
            {
                "value": "39",
                "cell": "I120"
            },
            {
                "value": "79 %",
                "cell": "J120"
            },
            {
                "value": "0.07 %",
                "cell": "K120"
            },
            {
                "value": "Eritrea",
                "cell": "A121"
            },
            {
                "value": "5,187,948",
                "cell": "B121"
            },
            {
                "value": "2.35 %",
                "cell": "C121"
            },
            {
                "value": "119,117",
                "cell": "D121"
            },
            {
                "value": "51",
                "cell": "E121"
            },
            {
                "value": "101,000",
                "cell": "F121"
            },
            {
                "value": "-32,000",
                "cell": "G121"
            },
            {
                "value": "4.4",
                "cell": "H121"
            },
            {
                "value": "19",
                "cell": "I121"
            },
            {
                "value": "32 %",
                "cell": "J121"
            },
            {
                "value": "0.07 %",
                "cell": "K121"
            },
            {
                "value": "State of Palestine",
                "cell": "A122"
            },
            {
                "value": "5,052,776",
                "cell": "B122"
            },
            {
                "value": "2.68 %",
                "cell": "C122"
            },
            {
                "value": "132,052",
                "cell": "D122"
            },
            {
                "value": "839",
                "cell": "E122"
            },
            {
                "value": "6,020",
                "cell": "F122"
            },
            {
                "value": "-8,750",
                "cell": "G122"
            },
            {
                "value": "4.3",
                "cell": "H122"
            },
            {
                "value": "19",
                "cell": "I122"
            },
            {
                "value": "72 %",
                "cell": "J122"
            },
            {
                "value": "0.07 %",
                "cell": "K122"
            },
            {
                "value": "Costa Rica",
                "cell": "A123"
            },
            {
                "value": "4,953,199",
                "cell": "B123"
            },
            {
                "value": "0.97 %",
                "cell": "C123"
            },
            {
                "value": "47,430",
                "cell": "D123"
            },
            {
                "value": "97",
                "cell": "E123"
            },
            {
                "value": "51,060",
                "cell": "F123"
            },
            {
                "value": "3,932",
                "cell": "G123"
            },
            {
                "value": "1.9",
                "cell": "H123"
            },
            {
                "value": "31",
                "cell": "I123"
            },
            {
                "value": "81 %",
                "cell": "J123"
            },
            {
                "value": "0.06 %",
                "cell": "K123"
            },
            {
                "value": "Liberia",
                "cell": "A124"
            },
            {
                "value": "4,853,516",
                "cell": "B124"
            },
            {
                "value": "2.57 %",
                "cell": "C124"
            },
            {
                "value": "121,610",
                "cell": "D124"
            },
            {
                "value": "50",
                "cell": "E124"
            },
            {
                "value": "96,320",
                "cell": "F124"
            },
            {
                "value": "-4,000",
                "cell": "G124"
            },
            {
                "value": "4.8",
                "cell": "H124"
            },
            {
                "value": "19",
                "cell": "I124"
            },
            {
                "value": "49 %",
                "cell": "J124"
            },
            {
                "value": "0.06 %",
                "cell": "K124"
            },
            {
                "value": "Oman",
                "cell": "A125"
            },
            {
                "value": "4,829,946",
                "cell": "B125"
            },
            {
                "value": "4.18 %",
                "cell": "C125"
            },
            {
                "value": "193,684",
                "cell": "D125"
            },
            {
                "value": "16",
                "cell": "E125"
            },
            {
                "value": "309,500",
                "cell": "F125"
            },
            {
                "value": "163,500",
                "cell": "G125"
            },
            {
                "value": "2.9",
                "cell": "H125"
            },
            {
                "value": "29",
                "cell": "I125"
            },
            {
                "value": "72 %",
                "cell": "J125"
            },
            {
                "value": "0.06 %",
                "cell": "K125"
            },
            {
                "value": "Ireland",
                "cell": "A126"
            },
            {
                "value": "4,803,748",
                "cell": "B126"
            },
            {
                "value": "0.88 %",
                "cell": "C126"
            },
            {
                "value": "42,091",
                "cell": "D126"
            },
            {
                "value": "70",
                "cell": "E126"
            },
            {
                "value": "68,890",
                "cell": "F126"
            },
            {
                "value": "-27,999",
                "cell": "G126"
            },
            {
                "value": "2.0",
                "cell": "H126"
            },
            {
                "value": "37",
                "cell": "I126"
            },
            {
                "value": "64 %",
                "cell": "J126"
            },
            {
                "value": "0.06 %",
                "cell": "K126"
            },
            {
                "value": "New Zealand",
                "cell": "A127"
            },
            {
                "value": "4,749,598",
                "cell": "B127"
            },
            {
                "value": "0.93 %",
                "cell": "C127"
            },
            {
                "value": "43,780",
                "cell": "D127"
            },
            {
                "value": "18",
                "cell": "E127"
            },
            {
                "value": "263,310",
                "cell": "F127"
            },
            {
                "value": "18,179",
                "cell": "G127"
            },
            {
                "value": "2.0",
                "cell": "H127"
            },
            {
                "value": "37",
                "cell": "I127"
            },
            {
                "value": "85 %",
                "cell": "J127"
            },
            {
                "value": "0.06 %",
                "cell": "K127"
            },
            {
                "value": "Central African Republic",
                "cell": "A128"
            },
            {
                "value": "4,737,423",
                "cell": "B128"
            },
            {
                "value": "1.68 %",
                "cell": "C128"
            },
            {
                "value": "78,343",
                "cell": "D128"
            },
            {
                "value": "8",
                "cell": "E128"
            },
            {
                "value": "622,980",
                "cell": "F128"
            },
            {
                "value": "-79,226",
                "cell": "G128"
            },
            {
                "value": "5.1",
                "cell": "H128"
            },
            {
                "value": "18",
                "cell": "I128"
            },
            {
                "value": "43 %",
                "cell": "J128"
            },
            {
                "value": "0.06 %",
                "cell": "K128"
            },
            {
                "value": "Mauritania",
                "cell": "A129"
            },
            {
                "value": "4,540,068",
                "cell": "B129"
            },
            {
                "value": "2.71 %",
                "cell": "C129"
            },
            {
                "value": "119,884",
                "cell": "D129"
            },
            {
                "value": "4",
                "cell": "E129"
            },
            {
                "value": "1,030,700",
                "cell": "F129"
            },
            {
                "value": "8,000",
                "cell": "G129"
            },
            {
                "value": "4.9",
                "cell": "H129"
            },
            {
                "value": "20",
                "cell": "I129"
            },
            {
                "value": "57 %",
                "cell": "J129"
            },
            {
                "value": "0.06 %",
                "cell": "K129"
            },
            {
                "value": "Kuwait",
                "cell": "A130"
            },
            {
                "value": "4,197,128",
                "cell": "B130"
            },
            {
                "value": "1.46 %",
                "cell": "C130"
            },
            {
                "value": "60,600",
                "cell": "D130"
            },
            {
                "value": "236",
                "cell": "E130"
            },
            {
                "value": "17,820",
                "cell": "F130"
            },
            {
                "value": "134,000",
                "cell": "G130"
            },
            {
                "value": "2.1",
                "cell": "H130"
            },
            {
                "value": "33",
                "cell": "I130"
            },
            {
                "value": "88 %",
                "cell": "J130"
            },
            {
                "value": "0.05 %",
                "cell": "K130"
            },
            {
                "value": "Croatia",
                "cell": "A131"
            },
            {
                "value": "4,164,783",
                "cell": "B131"
            },
            {
                "value": "-0.59 %",
                "cell": "C131"
            },
            {
                "value": "-24,570",
                "cell": "D131"
            },
            {
                "value": "74",
                "cell": "E131"
            },
            {
                "value": "55,960",
                "cell": "F131"
            },
            {
                "value": "-6,554",
                "cell": "G131"
            },
            {
                "value": "1.5",
                "cell": "H131"
            },
            {
                "value": "43",
                "cell": "I131"
            },
            {
                "value": "60 %",
                "cell": "J131"
            },
            {
                "value": "0.05 %",
                "cell": "K131"
            },
            {
                "value": "Panama",
                "cell": "A132"
            },
            {
                "value": "4,162,618",
                "cell": "B132"
            },
            {
                "value": "1.56 %",
                "cell": "C132"
            },
            {
                "value": "64,031",
                "cell": "D132"
            },
            {
                "value": "56",
                "cell": "E132"
            },
            {
                "value": "74,340",
                "cell": "F132"
            },
            {
                "value": "5,621",
                "cell": "G132"
            },
            {
                "value": "2.6",
                "cell": "H132"
            },
            {
                "value": "28",
                "cell": "I132"
            },
            {
                "value": "66 %",
                "cell": "J132"
            },
            {
                "value": "0.05 %",
                "cell": "K132"
            },
            {
                "value": "Moldova",
                "cell": "A133"
            },
            {
                "value": "4,041,065",
                "cell": "B133"
            },
            {
                "value": "-0.25 %",
                "cell": "C133"
            },
            {
                "value": "-10,147",
                "cell": "D133"
            },
            {
                "value": "123",
                "cell": "E133"
            },
            {
                "value": "32,850",
                "cell": "F133"
            },
            {
                "value": "-1,906",
                "cell": "G133"
            },
            {
                "value": "1.3",
                "cell": "H133"
            },
            {
                "value": "36",
                "cell": "I133"
            },
            {
                "value": "38 %",
                "cell": "J133"
            },
            {
                "value": "0.05 %",
                "cell": "K133"
            },
            {
                "value": "Georgia",
                "cell": "A134"
            },
            {
                "value": "3,907,131",
                "cell": "B134"
            },
            {
                "value": "-0.13 %",
                "cell": "C134"
            },
            {
                "value": "-4,930",
                "cell": "D134"
            },
            {
                "value": "56",
                "cell": "E134"
            },
            {
                "value": "69,490",
                "cell": "F134"
            },
            {
                "value": "-61,054",
                "cell": "G134"
            },
            {
                "value": "2.0",
                "cell": "H134"
            },
            {
                "value": "38",
                "cell": "I134"
            },
            {
                "value": "59 %",
                "cell": "J134"
            },
            {
                "value": "0.05 %",
                "cell": "K134"
            },
            {
                "value": "Puerto Rico",
                "cell": "A135"
            },
            {
                "value": "3,659,007",
                "cell": "B135"
            },
            {
                "value": "-0.11 %",
                "cell": "C135"
            },
            {
                "value": "-4,124",
                "cell": "D135"
            },
            {
                "value": "413",
                "cell": "E135"
            },
            {
                "value": "8,870",
                "cell": "F135"
            },
            {
                "value": "-20,706",
                "cell": "G135"
            },
            {
                "value": "1.5",
                "cell": "H135"
            },
            {
                "value": "36",
                "cell": "I135"
            },
            {
                "value": "94 %",
                "cell": "J135"
            },
            {
                "value": "0.05 %",
                "cell": "K135"
            },
            {
                "value": "Bosnia & Herzegovina",
                "cell": "A136"
            },
            {
                "value": "3,503,554",
                "cell": "B136"
            },
            {
                "value": "-0.10 %",
                "cell": "C136"
            },
            {
                "value": "-3,463",
                "cell": "D136"
            },
            {
                "value": "69",
                "cell": "E136"
            },
            {
                "value": "51,000",
                "cell": "F136"
            },
            {
                "value": "-32,274",
                "cell": "G136"
            },
            {
                "value": "1.3",
                "cell": "H136"
            },
            {
                "value": "41",
                "cell": "I136"
            },
            {
                "value": "44 %",
                "cell": "J136"
            },
            {
                "value": "0.05 %",
                "cell": "K136"
            },
            {
                "value": "Uruguay",
                "cell": "A137"
            },
            {
                "value": "3,469,551",
                "cell": "B137"
            },
            {
                "value": "0.37 %",
                "cell": "C137"
            },
            {
                "value": "12,801",
                "cell": "D137"
            },
            {
                "value": "20",
                "cell": "E137"
            },
            {
                "value": "175,020",
                "cell": "F137"
            },
            {
                "value": "-6,000",
                "cell": "G137"
            },
            {
                "value": "2.0",
                "cell": "H137"
            },
            {
                "value": "35",
                "cell": "I137"
            },
            {
                "value": "95 %",
                "cell": "J137"
            },
            {
                "value": "0.05 %",
                "cell": "K137"
            },
            {
                "value": "Mongolia",
                "cell": "A138"
            },
            {
                "value": "3,121,772",
                "cell": "B138"
            },
            {
                "value": "1.50 %",
                "cell": "C138"
            },
            {
                "value": "46,125",
                "cell": "D138"
            },
            {
                "value": "2",
                "cell": "E138"
            },
            {
                "value": "1,553,560",
                "cell": "F138"
            },
            {
                "value": "-3,000",
                "cell": "G138"
            },
            {
                "value": "2.8",
                "cell": "H138"
            },
            {
                "value": "27",
                "cell": "I138"
            },
            {
                "value": "71 %",
                "cell": "J138"
            },
            {
                "value": "0.04 %",
                "cell": "K138"
            },
            {
                "value": "Albania",
                "cell": "A139"
            },
            {
                "value": "2,934,363",
                "cell": "B139"
            },
            {
                "value": "0.14 %",
                "cell": "C139"
            },
            {
                "value": "4,176",
                "cell": "D139"
            },
            {
                "value": "107",
                "cell": "E139"
            },
            {
                "value": "27,400",
                "cell": "F139"
            },
            {
                "value": "-18,685",
                "cell": "G139"
            },
            {
                "value": "1.7",
                "cell": "H139"
            },
            {
                "value": "36",
                "cell": "I139"
            },
            {
                "value": "65 %",
                "cell": "J139"
            },
            {
                "value": "0.04 %",
                "cell": "K139"
            },
            {
                "value": "Armenia",
                "cell": "A140"
            },
            {
                "value": "2,934,152",
                "cell": "B140"
            },
            {
                "value": "0.13 %",
                "cell": "C140"
            },
            {
                "value": "3,702",
                "cell": "D140"
            },
            {
                "value": "103",
                "cell": "E140"
            },
            {
                "value": "28,470",
                "cell": "F140"
            },
            {
                "value": "-6,107",
                "cell": "G140"
            },
            {
                "value": "1.7",
                "cell": "H140"
            },
            {
                "value": "34",
                "cell": "I140"
            },
            {
                "value": "64 %",
                "cell": "J140"
            },
            {
                "value": "0.04 %",
                "cell": "K140"
            },
            {
                "value": "Jamaica",
                "cell": "A141"
            },
            {
                "value": "2,898,677",
                "cell": "B141"
            },
            {
                "value": "0.29 %",
                "cell": "C141"
            },
            {
                "value": "8,378",
                "cell": "D141"
            },
            {
                "value": "268",
                "cell": "E141"
            },
            {
                "value": "10,830",
                "cell": "F141"
            },
            {
                "value": "-18,619",
                "cell": "G141"
            },
            {
                "value": "2.1",
                "cell": "H141"
            },
            {
                "value": "29",
                "cell": "I141"
            },
            {
                "value": "54 %",
                "cell": "J141"
            },
            {
                "value": "0.04 %",
                "cell": "K141"
            },
            {
                "value": "Lithuania",
                "cell": "A142"
            },
            {
                "value": "2,876,475",
                "cell": "B142"
            },
            {
                "value": "-0.48 %",
                "cell": "C142"
            },
            {
                "value": "-13,822",
                "cell": "D142"
            },
            {
                "value": "46",
                "cell": "E142"
            },
            {
                "value": "62,674",
                "cell": "F142"
            },
            {
                "value": "-29,243",
                "cell": "G142"
            },
            {
                "value": "1.6",
                "cell": "H142"
            },
            {
                "value": "43",
                "cell": "I142"
            },
            {
                "value": "69 %",
                "cell": "J142"
            },
            {
                "value": "0.04 %",
                "cell": "K142"
            },
            {
                "value": "Qatar",
                "cell": "A143"
            },
            {
                "value": "2,694,849",
                "cell": "B143"
            },
            {
                "value": "2.11 %",
                "cell": "C143"
            },
            {
                "value": "55,638",
                "cell": "D143"
            },
            {
                "value": "232",
                "cell": "E143"
            },
            {
                "value": "11,610",
                "cell": "F143"
            },
            {
                "value": "120,400",
                "cell": "G143"
            },
            {
                "value": "2.0",
                "cell": "H143"
            },
            {
                "value": "31",
                "cell": "I143"
            },
            {
                "value": "91 %",
                "cell": "J143"
            },
            {
                "value": "0.04 %",
                "cell": "K143"
            },
            {
                "value": "Namibia",
                "cell": "A144"
            },
            {
                "value": "2,587,801",
                "cell": "B144"
            },
            {
                "value": "2.13 %",
                "cell": "C144"
            },
            {
                "value": "54,007",
                "cell": "D144"
            },
            {
                "value": "3",
                "cell": "E144"
            },
            {
                "value": "823,290",
                "cell": "F144"
            },
            {
                "value": "-274",
                "cell": "G144"
            },
            {
                "value": "3.6",
                "cell": "H144"
            },
            {
                "value": "21",
                "cell": "I144"
            },
            {
                "value": "47 %",
                "cell": "J144"
            },
            {
                "value": "0.03 %",
                "cell": "K144"
            },
            {
                "value": "Botswana",
                "cell": "A145"
            },
            {
                "value": "2,333,201",
                "cell": "B145"
            },
            {
                "value": "1.81 %",
                "cell": "C145"
            },
            {
                "value": "41,540",
                "cell": "D145"
            },
            {
                "value": "4",
                "cell": "E145"
            },
            {
                "value": "566,730",
                "cell": "F145"
            },
            {
                "value": "3,000",
                "cell": "G145"
            },
            {
                "value": "2.9",
                "cell": "H145"
            },
            {
                "value": "24",
                "cell": "I145"
            },
            {
                "value": "52 %",
                "cell": "J145"
            },
            {
                "value": "0.03 %",
                "cell": "K145"
            },
            {
                "value": "Lesotho",
                "cell": "A146"
            },
            {
                "value": "2,263,010",
                "cell": "B146"
            },
            {
                "value": "1.33 %",
                "cell": "C146"
            },
            {
                "value": "29,671",
                "cell": "D146"
            },
            {
                "value": "75",
                "cell": "E146"
            },
            {
                "value": "30,360",
                "cell": "F146"
            },
            {
                "value": "-5,000",
                "cell": "G146"
            },
            {
                "value": "3.3",
                "cell": "H146"
            },
            {
                "value": "21",
                "cell": "I146"
            },
            {
                "value": "27 %",
                "cell": "J146"
            },
            {
                "value": "0.03 %",
                "cell": "K146"
            },
            {
                "value": "Gambia",
                "cell": "A147"
            },
            {
                "value": "2,163,765",
                "cell": "B147"
            },
            {
                "value": "3.01 %",
                "cell": "C147"
            },
            {
                "value": "63,197",
                "cell": "D147"
            },
            {
                "value": "214",
                "cell": "E147"
            },
            {
                "value": "10,120",
                "cell": "F147"
            },
            {
                "value": "-2,695",
                "cell": "G147"
            },
            {
                "value": "5.6",
                "cell": "H147"
            },
            {
                "value": "17",
                "cell": "I147"
            },
            {
                "value": "59 %",
                "cell": "J147"
            },
            {
                "value": "0.03 %",
                "cell": "K147"
            },
            {
                "value": "TFYR Macedonia",
                "cell": "A148"
            },
            {
                "value": "2,085,051",
                "cell": "B148"
            },
            {
                "value": "0.09 %",
                "cell": "C148"
            },
            {
                "value": "1,891",
                "cell": "D148"
            },
            {
                "value": "83",
                "cell": "E148"
            },
            {
                "value": "25,220",
                "cell": "F148"
            },
            {
                "value": "-1,771",
                "cell": "G148"
            },
            {
                "value": "1.5",
                "cell": "H148"
            },
            {
                "value": "37",
                "cell": "I148"
            },
            {
                "value": "58 %",
                "cell": "J148"
            },
            {
                "value": "0.03 %",
                "cell": "K148"
            },
            {
                "value": "Slovenia",
                "cell": "A149"
            },
            {
                "value": "2,081,260",
                "cell": "B149"
            },
            {
                "value": "0.06 %",
                "cell": "C149"
            },
            {
                "value": "1,284",
                "cell": "D149"
            },
            {
                "value": "103",
                "cell": "E149"
            },
            {
                "value": "20,140",
                "cell": "F149"
            },
            {
                "value": "3,314",
                "cell": "G149"
            },
            {
                "value": "1.6",
                "cell": "H149"
            },
            {
                "value": "43",
                "cell": "I149"
            },
            {
                "value": "50 %",
                "cell": "J149"
            },
            {
                "value": "0.03 %",
                "cell": "K149"
            },
            {
                "value": "Gabon",
                "cell": "A150"
            },
            {
                "value": "2,067,561",
                "cell": "B150"
            },
            {
                "value": "2.09 %",
                "cell": "C150"
            },
            {
                "value": "42,424",
                "cell": "D150"
            },
            {
                "value": "8",
                "cell": "E150"
            },
            {
                "value": "257,670",
                "cell": "F150"
            },
            {
                "value": "17,088",
                "cell": "G150"
            },
            {
                "value": "4.0",
                "cell": "H150"
            },
            {
                "value": "23",
                "cell": "I150"
            },
            {
                "value": "78 %",
                "cell": "J150"
            },
            {
                "value": "0.03 %",
                "cell": "K150"
            },
            {
                "value": "Latvia",
                "cell": "A151"
            },
            {
                "value": "1,929,938",
                "cell": "B151"
            },
            {
                "value": "-1.01 %",
                "cell": "C151"
            },
            {
                "value": "-19,732",
                "cell": "D151"
            },
            {
                "value": "31",
                "cell": "E151"
            },
            {
                "value": "62,200",
                "cell": "F151"
            },
            {
                "value": "-16,665",
                "cell": "G151"
            },
            {
                "value": "1.5",
                "cell": "H151"
            },
            {
                "value": "43",
                "cell": "I151"
            },
            {
                "value": "70 %",
                "cell": "J151"
            },
            {
                "value": "0.03 %",
                "cell": "K151"
            },
            {
                "value": "Guinea-Bissau",
                "cell": "A152"
            },
            {
                "value": "1,907,268",
                "cell": "B152"
            },
            {
                "value": "2.47 %",
                "cell": "C152"
            },
            {
                "value": "45,985",
                "cell": "D152"
            },
            {
                "value": "68",
                "cell": "E152"
            },
            {
                "value": "28,120",
                "cell": "F152"
            },
            {
                "value": "-2,001",
                "cell": "G152"
            },
            {
                "value": "4.9",
                "cell": "H152"
            },
            {
                "value": "19",
                "cell": "I152"
            },
            {
                "value": "50 %",
                "cell": "J152"
            },
            {
                "value": "0.02 %",
                "cell": "K152"
            },
            {
                "value": "Bahrain",
                "cell": "A153"
            },
            {
                "value": "1,566,993",
                "cell": "B153"
            },
            {
                "value": "4.99 %",
                "cell": "C153"
            },
            {
                "value": "74,409",
                "cell": "D153"
            },
            {
                "value": "2,062",
                "cell": "E153"
            },
            {
                "value": "760",
                "cell": "F153"
            },
            {
                "value": "8,400",
                "cell": "G153"
            },
            {
                "value": "2.1",
                "cell": "H153"
            },
            {
                "value": "31",
                "cell": "I153"
            },
            {
                "value": "80 %",
                "cell": "J153"
            },
            {
                "value": "0.02 %",
                "cell": "K153"
            },
            {
                "value": "Swaziland",
                "cell": "A154"
            },
            {
                "value": "1,391,385",
                "cell": "B154"
            },
            {
                "value": "1.76 %",
                "cell": "C154"
            },
            {
                "value": "24,131",
                "cell": "D154"
            },
            {
                "value": "81",
                "cell": "E154"
            },
            {
                "value": "17,200",
                "cell": "F154"
            },
            {
                "value": "-1,200",
                "cell": "G154"
            },
            {
                "value": "3.3",
                "cell": "H154"
            },
            {
                "value": "20",
                "cell": "I154"
            },
            {
                "value": "20 %",
                "cell": "J154"
            },
            {
                "value": "0.02 %",
                "cell": "K154"
            },
            {
                "value": "Trinidad and Tobago",
                "cell": "A155"
            },
            {
                "value": "1,372,598",
                "cell": "B155"
            },
            {
                "value": "0.25 %",
                "cell": "C155"
            },
            {
                "value": "3,473",
                "cell": "D155"
            },
            {
                "value": "268",
                "cell": "E155"
            },
            {
                "value": "5,130",
                "cell": "F155"
            },
            {
                "value": "-1,000",
                "cell": "G155"
            },
            {
                "value": "1.8",
                "cell": "H155"
            },
            {
                "value": "34",
                "cell": "I155"
            },
            {
                "value": "8 %",
                "cell": "J155"
            },
            {
                "value": "0.02 %",
                "cell": "K155"
            },
            {
                "value": "Timor-Leste",
                "cell": "A156"
            },
            {
                "value": "1,324,094",
                "cell": "B156"
            },
            {
                "value": "2.14 %",
                "cell": "C156"
            },
            {
                "value": "27,783",
                "cell": "D156"
            },
            {
                "value": "89",
                "cell": "E156"
            },
            {
                "value": "14,870",
                "cell": "F156"
            },
            {
                "value": "-10,001",
                "cell": "G156"
            },
            {
                "value": "5.9",
                "cell": "H156"
            },
            {
                "value": "17",
                "cell": "I156"
            },
            {
                "value": "31 %",
                "cell": "J156"
            },
            {
                "value": "0.02 %",
                "cell": "K156"
            },
            {
                "value": "Equatorial Guinea",
                "cell": "A157"
            },
            {
                "value": "1,313,894",
                "cell": "B157"
            },
            {
                "value": "3.64 %",
                "cell": "C157"
            },
            {
                "value": "46,205",
                "cell": "D157"
            },
            {
                "value": "47",
                "cell": "E157"
            },
            {
                "value": "28,050",
                "cell": "F157"
            },
            {
                "value": "18,000",
                "cell": "G157"
            },
            {
                "value": "5.0",
                "cell": "H157"
            },
            {
                "value": "22",
                "cell": "I157"
            },
            {
                "value": "26 %",
                "cell": "J157"
            },
            {
                "value": "0.02 %",
                "cell": "K157"
            },
            {
                "value": "Estonia",
                "cell": "A158"
            },
            {
                "value": "1,306,788",
                "cell": "B158"
            },
            {
                "value": "-0.22 %",
                "cell": "C158"
            },
            {
                "value": "-2,844",
                "cell": "D158"
            },
            {
                "value": "31",
                "cell": "E158"
            },
            {
                "value": "42,390",
                "cell": "F158"
            },
            {
                "value": "-2,103",
                "cell": "G158"
            },
            {
                "value": "1.6",
                "cell": "H158"
            },
            {
                "value": "42",
                "cell": "I158"
            },
            {
                "value": "66 %",
                "cell": "J158"
            },
            {
                "value": "0.02 %",
                "cell": "K158"
            },
            {
                "value": "Mauritius",
                "cell": "A159"
            },
            {
                "value": "1,268,315",
                "cell": "B159"
            },
            {
                "value": "0.25 %",
                "cell": "C159"
            },
            {
                "value": "3,177",
                "cell": "D159"
            },
            {
                "value": "625",
                "cell": "E159"
            },
            {
                "value": "2,030",
                "cell": "F159"
            },
            {
                "value": "-2,416",
                "cell": "G159"
            },
            {
                "value": "1.5",
                "cell": "H159"
            },
            {
                "value": "36",
                "cell": "I159"
            },
            {
                "value": "39 %",
                "cell": "J159"
            },
            {
                "value": "0.02 %",
                "cell": "K159"
            },
            {
                "value": "Cyprus",
                "cell": "A160"
            },
            {
                "value": "1,189,085",
                "cell": "B160"
            },
            {
                "value": "0.81 %",
                "cell": "C160"
            },
            {
                "value": "9,534",
                "cell": "D160"
            },
            {
                "value": "129",
                "cell": "E160"
            },
            {
                "value": "9,240",
                "cell": "F160"
            },
            {
                "value": "4,502",
                "cell": "G160"
            },
            {
                "value": "1.4",
                "cell": "H160"
            },
            {
                "value": "35",
                "cell": "I160"
            },
            {
                "value": "67 %",
                "cell": "J160"
            },
            {
                "value": "0.02 %",
                "cell": "K160"
            },
            {
                "value": "Djibouti",
                "cell": "A161"
            },
            {
                "value": "971,408",
                "cell": "B161"
            },
            {
                "value": "1.51 %",
                "cell": "C161"
            },
            {
                "value": "14,423",
                "cell": "D161"
            },
            {
                "value": "42",
                "cell": "E161"
            },
            {
                "value": "23,180",
                "cell": "F161"
            },
            {
                "value": "1,200",
                "cell": "G161"
            },
            {
                "value": "3.1",
                "cell": "H161"
            },
            {
                "value": "24",
                "cell": "I161"
            },
            {
                "value": "74 %",
                "cell": "J161"
            },
            {
                "value": "0.01 %",
                "cell": "K161"
            },
            {
                "value": "Fiji",
                "cell": "A162"
            },
            {
                "value": "912,241",
                "cell": "B162"
            },
            {
                "value": "0.74 %",
                "cell": "C162"
            },
            {
                "value": "6,739",
                "cell": "D162"
            },
            {
                "value": "50",
                "cell": "E162"
            },
            {
                "value": "18,270",
                "cell": "F162"
            },
            {
                "value": "-5,744",
                "cell": "G162"
            },
            {
                "value": "2.6",
                "cell": "H162"
            },
            {
                "value": "28",
                "cell": "I162"
            },
            {
                "value": "54 %",
                "cell": "J162"
            },
            {
                "value": "0.01 %",
                "cell": "K162"
            },
            {
                "value": "RÃ©union",
                "cell": "A163"
            },
            {
                "value": "883,247",
                "cell": "B163"
            },
            {
                "value": "0.76 %",
                "cell": "C163"
            },
            {
                "value": "6,685",
                "cell": "D163"
            },
            {
                "value": "353",
                "cell": "E163"
            },
            {
                "value": "2,500",
                "cell": "F163"
            },
            {
                "value": "-2,828",
                "cell": "G163"
            },
            {
                "value": "2.4",
                "cell": "H163"
            },
            {
                "value": "35",
                "cell": "I163"
            },
            {
                "value": "99 %",
                "cell": "J163"
            },
            {
                "value": "0.01 %",
                "cell": "K163"
            },
            {
                "value": "Comoros",
                "cell": "A164"
            },
            {
                "value": "832,347",
                "cell": "B164"
            },
            {
                "value": "2.26 %",
                "cell": "C164"
            },
            {
                "value": "18,435",
                "cell": "D164"
            },
            {
                "value": "447",
                "cell": "E164"
            },
            {
                "value": "1,861",
                "cell": "F164"
            },
            {
                "value": "-2,000",
                "cell": "G164"
            },
            {
                "value": "4.6",
                "cell": "H164"
            },
            {
                "value": "20",
                "cell": "I164"
            },
            {
                "value": "28 %",
                "cell": "J164"
            },
            {
                "value": "0.01 %",
                "cell": "K164"
            },
            {
                "value": "Bhutan",
                "cell": "A165"
            },
            {
                "value": "817,054",
                "cell": "B165"
            },
            {
                "value": "1.17 %",
                "cell": "C165"
            },
            {
                "value": "9,444",
                "cell": "D165"
            },
            {
                "value": "21",
                "cell": "E165"
            },
            {
                "value": "38,117",
                "cell": "F165"
            },
            {
                "value": "2,000",
                "cell": "G165"
            },
            {
                "value": "2.2",
                "cell": "H165"
            },
            {
                "value": "26",
                "cell": "I165"
            },
            {
                "value": "39 %",
                "cell": "J165"
            },
            {
                "value": "0.01 %",
                "cell": "K165"
            },
            {
                "value": "Guyana",
                "cell": "A166"
            },
            {
                "value": "782,225",
                "cell": "B166"
            },
            {
                "value": "0.56 %",
                "cell": "C166"
            },
            {
                "value": "4,366",
                "cell": "D166"
            },
            {
                "value": "4",
                "cell": "E166"
            },
            {
                "value": "196,850",
                "cell": "F166"
            },
            {
                "value": "-5,456",
                "cell": "G166"
            },
            {
                "value": "2.6",
                "cell": "H166"
            },
            {
                "value": "25",
                "cell": "I166"
            },
            {
                "value": "30 %",
                "cell": "J166"
            },
            {
                "value": "0.01 %",
                "cell": "K166"
            },
            {
                "value": "Macao",
                "cell": "A167"
            },
            {
                "value": "632,418",
                "cell": "B167"
            },
            {
                "value": "1.58 %",
                "cell": "C167"
            },
            {
                "value": "9,851",
                "cell": "D167"
            },
            {
                "value": "21,081",
                "cell": "E167"
            },
            {
                "value": "30",
                "cell": "F167"
            },
            {
                "value": "8,470",
                "cell": "G167"
            },
            {
                "value": "1.2",
                "cell": "H167"
            },
            {
                "value": "38",
                "cell": "I167"
            },
            {
                "value": "95 %",
                "cell": "J167"
            },
            {
                "value": "0.01 %",
                "cell": "K167"
            },
            {
                "value": "Montenegro",
                "cell": "A168"
            },
            {
                "value": "629,219",
                "cell": "B168"
            },
            {
                "value": "0.04 %",
                "cell": "C168"
            },
            {
                "value": "259",
                "cell": "D168"
            },
            {
                "value": "47",
                "cell": "E168"
            },
            {
                "value": "13,450",
                "cell": "F168"
            },
            {
                "value": "-622",
                "cell": "G168"
            },
            {
                "value": "1.7",
                "cell": "H168"
            },
            {
                "value": "38",
                "cell": "I168"
            },
            {
                "value": "64 %",
                "cell": "J168"
            },
            {
                "value": "0.01 %",
                "cell": "K168"
            },
            {
                "value": "Solomon Islands",
                "cell": "A169"
            },
            {
                "value": "623,281",
                "cell": "B169"
            },
            {
                "value": "1.95 %",
                "cell": "C169"
            },
            {
                "value": "11,938",
                "cell": "D169"
            },
            {
                "value": "22",
                "cell": "E169"
            },
            {
                "value": "27,990",
                "cell": "F169"
            },
            {
                "value": "-2,374",
                "cell": "G169"
            },
            {
                "value": "4.1",
                "cell": "H169"
            },
            {
                "value": "20",
                "cell": "I169"
            },
            {
                "value": "23 %",
                "cell": "J169"
            },
            {
                "value": "0.01 %",
                "cell": "K169"
            },
            {
                "value": "Luxembourg",
                "cell": "A170"
            },
            {
                "value": "590,321",
                "cell": "B170"
            },
            {
                "value": "1.18 %",
                "cell": "C170"
            },
            {
                "value": "6,866",
                "cell": "D170"
            },
            {
                "value": "228",
                "cell": "E170"
            },
            {
                "value": "2,590",
                "cell": "F170"
            },
            {
                "value": "9,741",
                "cell": "G170"
            },
            {
                "value": "1.5",
                "cell": "H170"
            },
            {
                "value": "39",
                "cell": "I170"
            },
            {
                "value": "86 %",
                "cell": "J170"
            },
            {
                "value": "0.01 %",
                "cell": "K170"
            },
            {
                "value": "Suriname",
                "cell": "A171"
            },
            {
                "value": "568,301",
                "cell": "B171"
            },
            {
                "value": "0.87 %",
                "cell": "C171"
            },
            {
                "value": "4,899",
                "cell": "D171"
            },
            {
                "value": "4",
                "cell": "E171"
            },
            {
                "value": "156,000",
                "cell": "F171"
            },
            {
                "value": "-1,000",
                "cell": "G171"
            },
            {
                "value": "2.5",
                "cell": "H171"
            },
            {
                "value": "28",
                "cell": "I171"
            },
            {
                "value": "65 %",
                "cell": "J171"
            },
            {
                "value": "0.01 %",
                "cell": "K171"
            },
            {
                "value": "Western Sahara",
                "cell": "A172"
            },
            {
                "value": "567,421",
                "cell": "B172"
            },
            {
                "value": "2.68 %",
                "cell": "C172"
            },
            {
                "value": "14,793",
                "cell": "D172"
            },
            {
                "value": "2",
                "cell": "E172"
            },
            {
                "value": "266,000",
                "cell": "F172"
            },
            {
                "value": "572",
                "cell": "G172"
            },
            {
                "value": "2.6",
                "cell": "H172"
            },
            {
                "value": "27",
                "cell": "I172"
            },
            {
                "value": "92 %",
                "cell": "J172"
            },
            {
                "value": "0.01 %",
                "cell": "K172"
            },
            {
                "value": "Cabo Verde",
                "cell": "A173"
            },
            {
                "value": "553,335",
                "cell": "B173"
            },
            {
                "value": "1.27 %",
                "cell": "C173"
            },
            {
                "value": "6,947",
                "cell": "D173"
            },
            {
                "value": "137",
                "cell": "E173"
            },
            {
                "value": "4,030",
                "cell": "F173"
            },
            {
                "value": "-2,210",
                "cell": "G173"
            },
            {
                "value": "2.5",
                "cell": "H173"
            },
            {
                "value": "24",
                "cell": "I173"
            },
            {
                "value": "62 %",
                "cell": "J173"
            },
            {
                "value": "0.01 %",
                "cell": "K173"
            },
            {
                "value": "Guadeloupe",
                "cell": "A174"
            },
            {
                "value": "449,173",
                "cell": "B174"
            },
            {
                "value": "-0.09 %",
                "cell": "C174"
            },
            {
                "value": "-395",
                "cell": "D174"
            },
            {
                "value": "266",
                "cell": "E174"
            },
            {
                "value": "1,690",
                "cell": "F174"
            },
            {
                "value": "-2,001",
                "cell": "G174"
            },
            {
                "value": "2.0",
                "cell": "H174"
            },
            {
                "value": "42",
                "cell": "I174"
            },
            {
                "value": "N.A.",
                "cell": "J174"
            },
            {
                "value": "0.01 %",
                "cell": "K174"
            },
            {
                "value": "Maldives",
                "cell": "A175"
            },
            {
                "value": "444,259",
                "cell": "B175"
            },
            {
                "value": "1.82 %",
                "cell": "C175"
            },
            {
                "value": "7,929",
                "cell": "D175"
            },
            {
                "value": "1,481",
                "cell": "E175"
            },
            {
                "value": "300",
                "cell": "F175"
            },
            {
                "value": "4,383",
                "cell": "G175"
            },
            {
                "value": "2.2",
                "cell": "H175"
            },
            {
                "value": "28",
                "cell": "I175"
            },
            {
                "value": "40 %",
                "cell": "J175"
            },
            {
                "value": "0.01 %",
                "cell": "K175"
            },
            {
                "value": "Brunei",
                "cell": "A176"
            },
            {
                "value": "434,076",
                "cell": "B176"
            },
            {
                "value": "1.25 %",
                "cell": "C176"
            },
            {
                "value": "5,379",
                "cell": "D176"
            },
            {
                "value": "82",
                "cell": "E176"
            },
            {
                "value": "5,270",
                "cell": "F176"
            },
            {
                "value": "406",
                "cell": "G176"
            },
            {
                "value": "1.9",
                "cell": "H176"
            },
            {
                "value": "30",
                "cell": "I176"
            },
            {
                "value": "79 %",
                "cell": "J176"
            },
            {
                "value": "0.01 %",
                "cell": "K176"
            },
            {
                "value": "Malta",
                "cell": "A177"
            },
            {
                "value": "432,089",
                "cell": "B177"
            },
            {
                "value": "0.29 %",
                "cell": "C177"
            },
            {
                "value": "1,254",
                "cell": "D177"
            },
            {
                "value": "1,350",
                "cell": "E177"
            },
            {
                "value": "320",
                "cell": "F177"
            },
            {
                "value": "1,889",
                "cell": "G177"
            },
            {
                "value": "1.4",
                "cell": "H177"
            },
            {
                "value": "41",
                "cell": "I177"
            },
            {
                "value": "96 %",
                "cell": "J177"
            },
            {
                "value": "0.01 %",
                "cell": "K177"
            },
            {
                "value": "Bahamas",
                "cell": "A178"
            },
            {
                "value": "399,285",
                "cell": "B178"
            },
            {
                "value": "0.99 %",
                "cell": "C178"
            },
            {
                "value": "3,924",
                "cell": "D178"
            },
            {
                "value": "40",
                "cell": "E178"
            },
            {
                "value": "10,010",
                "cell": "F178"
            },
            {
                "value": "1,934",
                "cell": "G178"
            },
            {
                "value": "1.8",
                "cell": "H178"
            },
            {
                "value": "33",
                "cell": "I178"
            },
            {
                "value": "83 %",
                "cell": "J178"
            },
            {
                "value": "0.01 %",
                "cell": "K178"
            },
            {
                "value": "Martinique",
                "cell": "A179"
            },
            {
                "value": "385,065",
                "cell": "B179"
            },
            {
                "value": "0.04 %",
                "cell": "C179"
            },
            {
                "value": "169",
                "cell": "D179"
            },
            {
                "value": "363",
                "cell": "E179"
            },
            {
                "value": "1,060",
                "cell": "F179"
            },
            {
                "value": "-3,354",
                "cell": "G179"
            },
            {
                "value": "2.0",
                "cell": "H179"
            },
            {
                "value": "44",
                "cell": "I179"
            },
            {
                "value": "94 %",
                "cell": "J179"
            },
            {
                "value": "0.01 %",
                "cell": "K179"
            },
            {
                "value": "Belize",
                "cell": "A180"
            },
            {
                "value": "382,444",
                "cell": "B180"
            },
            {
                "value": "2.07 %",
                "cell": "C180"
            },
            {
                "value": "7,763",
                "cell": "D180"
            },
            {
                "value": "17",
                "cell": "E180"
            },
            {
                "value": "22,810",
                "cell": "F180"
            },
            {
                "value": "1,519",
                "cell": "G180"
            },
            {
                "value": "2.6",
                "cell": "H180"
            },
            {
                "value": "23",
                "cell": "I180"
            },
            {
                "value": "42 %",
                "cell": "J180"
            },
            {
                "value": "0.01 %",
                "cell": "K180"
            },
            {
                "value": "Iceland",
                "cell": "A181"
            },
            {
                "value": "337,780",
                "cell": "B181"
            },
            {
                "value": "0.82 %",
                "cell": "C181"
            },
            {
                "value": "2,755",
                "cell": "D181"
            },
            {
                "value": "3",
                "cell": "E181"
            },
            {
                "value": "100,250",
                "cell": "F181"
            },
            {
                "value": "-433",
                "cell": "G181"
            },
            {
                "value": "2.0",
                "cell": "H181"
            },
            {
                "value": "36",
                "cell": "I181"
            },
            {
                "value": "96 %",
                "cell": "J181"
            },
            {
                "value": "0.00 %",
                "cell": "K181"
            },
            {
                "value": "French Guiana",
                "cell": "A182"
            },
            {
                "value": "289,763",
                "cell": "B182"
            },
            {
                "value": "2.49 %",
                "cell": "C182"
            },
            {
                "value": "7,032",
                "cell": "D182"
            },
            {
                "value": "4",
                "cell": "E182"
            },
            {
                "value": "82,200",
                "cell": "F182"
            },
            {
                "value": "1,200",
                "cell": "G182"
            },
            {
                "value": "3.5",
                "cell": "H182"
            },
            {
                "value": "24",
                "cell": "I182"
            },
            {
                "value": "80 %",
                "cell": "J182"
            },
            {
                "value": "0.00 %",
                "cell": "K182"
            },
            {
                "value": "Barbados",
                "cell": "A183"
            },
            {
                "value": "286,388",
                "cell": "B183"
            },
            {
                "value": "0.23 %",
                "cell": "C183"
            },
            {
                "value": "669",
                "cell": "D183"
            },
            {
                "value": "666",
                "cell": "E183"
            },
            {
                "value": "430",
                "cell": "F183"
            },
            {
                "value": "436",
                "cell": "G183"
            },
            {
                "value": "1.8",
                "cell": "H183"
            },
            {
                "value": "39",
                "cell": "I183"
            },
            {
                "value": "32 %",
                "cell": "J183"
            },
            {
                "value": "0.00 %",
                "cell": "K183"
            },
            {
                "value": "French Polynesia",
                "cell": "A184"
            },
            {
                "value": "285,859",
                "cell": "B184"
            },
            {
                "value": "1.01 %",
                "cell": "C184"
            },
            {
                "value": "2,852",
                "cell": "D184"
            },
            {
                "value": "78",
                "cell": "E184"
            },
            {
                "value": "3,660",
                "cell": "F184"
            },
            {
                "value": "-1,000",
                "cell": "G184"
            },
            {
                "value": "2.1",
                "cell": "H184"
            },
            {
                "value": "31",
                "cell": "I184"
            },
            {
                "value": "56 %",
                "cell": "J184"
            },
            {
                "value": "0.00 %",
                "cell": "K184"
            },
            {
                "value": "Vanuatu",
                "cell": "A185"
            },
            {
                "value": "282,117",
                "cell": "B185"
            },
            {
                "value": "2.13 %",
                "cell": "C185"
            },
            {
                "value": "5,873",
                "cell": "D185"
            },
            {
                "value": "23",
                "cell": "E185"
            },
            {
                "value": "12,190",
                "cell": "F185"
            },
            {
                "value": "121",
                "cell": "G185"
            },
            {
                "value": "3.4",
                "cell": "H185"
            },
            {
                "value": "22",
                "cell": "I185"
            },
            {
                "value": "26 %",
                "cell": "J185"
            },
            {
                "value": "0.00 %",
                "cell": "K185"
            },
            {
                "value": "New Caledonia",
                "cell": "A186"
            },
            {
                "value": "279,821",
                "cell": "B186"
            },
            {
                "value": "1.29 %",
                "cell": "C186"
            },
            {
                "value": "3,566",
                "cell": "D186"
            },
            {
                "value": "15",
                "cell": "E186"
            },
            {
                "value": "18,280",
                "cell": "F186"
            },
            {
                "value": "1,132",
                "cell": "G186"
            },
            {
                "value": "2.2",
                "cell": "H186"
            },
            {
                "value": "33",
                "cell": "I186"
            },
            {
                "value": "69 %",
                "cell": "J186"
            },
            {
                "value": "0.00 %",
                "cell": "K186"
            },
            {
                "value": "Mayotte",
                "cell": "A187"
            },
            {
                "value": "259,682",
                "cell": "B187"
            },
            {
                "value": "2.62 %",
                "cell": "C187"
            },
            {
                "value": "6,637",
                "cell": "D187"
            },
            {
                "value": "692",
                "cell": "E187"
            },
            {
                "value": "375",
                "cell": "F187"
            },
            {
                "value": "-300",
                "cell": "G187"
            },
            {
                "value": "4.1",
                "cell": "H187"
            },
            {
                "value": "19",
                "cell": "I187"
            },
            {
                "value": "44 %",
                "cell": "J187"
            },
            {
                "value": "0.00 %",
                "cell": "K187"
            },
            {
                "value": "Sao Tome & Principe",
                "cell": "A188"
            },
            {
                "value": "208,818",
                "cell": "B188"
            },
            {
                "value": "2.20 %",
                "cell": "C188"
            },
            {
                "value": "4,491",
                "cell": "D188"
            },
            {
                "value": "218",
                "cell": "E188"
            },
            {
                "value": "960",
                "cell": "F188"
            },
            {
                "value": "-1,120",
                "cell": "G188"
            },
            {
                "value": "4.7",
                "cell": "H188"
            },
            {
                "value": "18",
                "cell": "I188"
            },
            {
                "value": "67 %",
                "cell": "J188"
            },
            {
                "value": "0.00 %",
                "cell": "K188"
            },
            {
                "value": "Samoa",
                "cell": "A189"
            },
            {
                "value": "197,695",
                "cell": "B189"
            },
            {
                "value": "0.64 %",
                "cell": "C189"
            },
            {
                "value": "1,255",
                "cell": "D189"
            },
            {
                "value": "70",
                "cell": "E189"
            },
            {
                "value": "2,830",
                "cell": "F189"
            },
            {
                "value": "-2,538",
                "cell": "G189"
            },
            {
                "value": "4.2",
                "cell": "H189"
            },
            {
                "value": "21",
                "cell": "I189"
            },
            {
                "value": "19 %",
                "cell": "J189"
            },
            {
                "value": "0.00 %",
                "cell": "K189"
            },
            {
                "value": "Saint Lucia",
                "cell": "A190"
            },
            {
                "value": "179,667",
                "cell": "B190"
            },
            {
                "value": "0.46 %",
                "cell": "C190"
            },
            {
                "value": "823",
                "cell": "D190"
            },
            {
                "value": "295",
                "cell": "E190"
            },
            {
                "value": "610",
                "cell": "F190"
            },
            {
                "value": "8",
                "cell": "G190"
            },
            {
                "value": "1.5",
                "cell": "H190"
            },
            {
                "value": "33",
                "cell": "I190"
            },
            {
                "value": "19 %",
                "cell": "J190"
            },
            {
                "value": "0.00 %",
                "cell": "K190"
            },
            {
                "value": "Channel Islands",
                "cell": "A191"
            },
            {
                "value": "166,083",
                "cell": "B191"
            },
            {
                "value": "0.47 %",
                "cell": "C191"
            },
            {
                "value": "769",
                "cell": "D191"
            },
            {
                "value": "874",
                "cell": "E191"
            },
            {
                "value": "190",
                "cell": "F191"
            },
            {
                "value": "731",
                "cell": "G191"
            },
            {
                "value": "1.5",
                "cell": "H191"
            },
            {
                "value": "43",
                "cell": "I191"
            },
            {
                "value": "31 %",
                "cell": "J191"
            },
            {
                "value": "0.00 %",
                "cell": "K191"
            },
            {
                "value": "Guam",
                "cell": "A192"
            },
            {
                "value": "165,718",
                "cell": "B192"
            },
            {
                "value": "0.91 %",
                "cell": "C192"
            },
            {
                "value": "1,489",
                "cell": "D192"
            },
            {
                "value": "307",
                "cell": "E192"
            },
            {
                "value": "540",
                "cell": "F192"
            },
            {
                "value": "-1,519",
                "cell": "G192"
            },
            {
                "value": "2.4",
                "cell": "H192"
            },
            {
                "value": "30",
                "cell": "I192"
            },
            {
                "value": "N.A.",
                "cell": "J192"
            },
            {
                "value": "0.00 %",
                "cell": "K192"
            },
            {
                "value": "CuraÃ§ao",
                "cell": "A193"
            },
            {
                "value": "161,577",
                "cell": "B193"
            },
            {
                "value": "0.65 %",
                "cell": "C193"
            },
            {
                "value": "1,038",
                "cell": "D193"
            },
            {
                "value": "364",
                "cell": "E193"
            },
            {
                "value": "444",
                "cell": "F193"
            },
            {
                "value": "1,363",
                "cell": "G193"
            },
            {
                "value": "2.1",
                "cell": "H193"
            },
            {
                "value": "41",
                "cell": "I193"
            },
            {
                "value": "93 %",
                "cell": "J193"
            },
            {
                "value": "0.00 %",
                "cell": "K193"
            },
            {
                "value": "Kiribati",
                "cell": "A194"
            },
            {
                "value": "118,414",
                "cell": "B194"
            },
            {
                "value": "1.73 %",
                "cell": "C194"
            },
            {
                "value": "2,016",
                "cell": "D194"
            },
            {
                "value": "146",
                "cell": "E194"
            },
            {
                "value": "810",
                "cell": "F194"
            },
            {
                "value": "-426",
                "cell": "G194"
            },
            {
                "value": "3.8",
                "cell": "H194"
            },
            {
                "value": "22",
                "cell": "I194"
            },
            {
                "value": "41 %",
                "cell": "J194"
            },
            {
                "value": "0.00 %",
                "cell": "K194"
            },
            {
                "value": "St. Vincent & Grenadines",
                "cell": "A195"
            },
            {
                "value": "110,200",
                "cell": "B195"
            },
            {
                "value": "0.28 %",
                "cell": "C195"
            },
            {
                "value": "303",
                "cell": "D195"
            },
            {
                "value": "283",
                "cell": "E195"
            },
            {
                "value": "390",
                "cell": "F195"
            },
            {
                "value": "-1,000",
                "cell": "G195"
            },
            {
                "value": "2.0",
                "cell": "H195"
            },
            {
                "value": "30",
                "cell": "I195"
            },
            {
                "value": "51 %",
                "cell": "J195"
            },
            {
                "value": "0.00 %",
                "cell": "K195"
            },
            {
                "value": "Tonga",
                "cell": "A196"
            },
            {
                "value": "109,008",
                "cell": "B196"
            },
            {
                "value": "0.91 %",
                "cell": "C196"
            },
            {
                "value": "988",
                "cell": "D196"
            },
            {
                "value": "151",
                "cell": "E196"
            },
            {
                "value": "720",
                "cell": "F196"
            },
            {
                "value": "-1,616",
                "cell": "G196"
            },
            {
                "value": "3.8",
                "cell": "H196"
            },
            {
                "value": "21",
                "cell": "I196"
            },
            {
                "value": "24 %",
                "cell": "J196"
            },
            {
                "value": "0.00 %",
                "cell": "K196"
            },
            {
                "value": "Grenada",
                "cell": "A197"
            },
            {
                "value": "108,339",
                "cell": "B197"
            },
            {
                "value": "0.48 %",
                "cell": "C197"
            },
            {
                "value": "514",
                "cell": "D197"
            },
            {
                "value": "319",
                "cell": "E197"
            },
            {
                "value": "340",
                "cell": "F197"
            },
            {
                "value": "-855",
                "cell": "G197"
            },
            {
                "value": "2.2",
                "cell": "H197"
            },
            {
                "value": "27",
                "cell": "I197"
            },
            {
                "value": "35 %",
                "cell": "J197"
            },
            {
                "value": "0.00 %",
                "cell": "K197"
            },
            {
                "value": "Micronesia",
                "cell": "A198"
            },
            {
                "value": "106,227",
                "cell": "B198"
            },
            {
                "value": "0.65 %",
                "cell": "C198"
            },
            {
                "value": "683",
                "cell": "D198"
            },
            {
                "value": "152",
                "cell": "E198"
            },
            {
                "value": "700",
                "cell": "F198"
            },
            {
                "value": "-1,638",
                "cell": "G198"
            },
            {
                "value": "3.3",
                "cell": "H198"
            },
            {
                "value": "22",
                "cell": "I198"
            },
            {
                "value": "23 %",
                "cell": "J198"
            },
            {
                "value": "0.00 %",
                "cell": "K198"
            },
            {
                "value": "Aruba",
                "cell": "A199"
            },
            {
                "value": "105,670",
                "cell": "B199"
            },
            {
                "value": "0.39 %",
                "cell": "C199"
            },
            {
                "value": "406",
                "cell": "D199"
            },
            {
                "value": "587",
                "cell": "E199"
            },
            {
                "value": "180",
                "cell": "F199"
            },
            {
                "value": "251",
                "cell": "G199"
            },
            {
                "value": "1.8",
                "cell": "H199"
            },
            {
                "value": "40",
                "cell": "I199"
            },
            {
                "value": "41 %",
                "cell": "J199"
            },
            {
                "value": "0.00 %",
                "cell": "K199"
            },
            {
                "value": "U.S. Virgin Islands",
                "cell": "A200"
            },
            {
                "value": "104,914",
                "cell": "B200"
            },
            {
                "value": "0.01 %",
                "cell": "C200"
            },
            {
                "value": "13",
                "cell": "D200"
            },
            {
                "value": "300",
                "cell": "E200"
            },
            {
                "value": "350",
                "cell": "F200"
            },
            {
                "value": "-900",
                "cell": "G200"
            },
            {
                "value": "2.3",
                "cell": "H200"
            },
            {
                "value": "41",
                "cell": "I200"
            },
            {
                "value": "97 %",
                "cell": "J200"
            },
            {
                "value": "0.00 %",
                "cell": "K200"
            }
        ],
        dataSourceLength: 1000,
        dataFields: 26
    })

    columns = 26

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        that.grid.nativeElement.whenRendered(() => {
            const rows = that.grid.rows;
            const headerRow = rows[0];

            that.grid.beginUpdate();

            for (let i = 0; i < headerRow.cells.length; i++) {
                const cell = headerRow.cells[i];
                cell.background = "#FFFDE1";
                cell.color = "#555";
                cell.fontStyle = "italic";
            }
            that.grid.endUpdate();
        })
    }
}