import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import {
  CardViewComponent,
  Smart
} from "smart-webcomponents-angular/cardview";
import { CheckBoxComponent } from "smart-webcomponents-angular/checkbox";
import { DropDownListComponent } from "smart-webcomponents-angular/dropdownlist";
import { RadioButtonComponent } from "smart-webcomponents-angular/radiobutton";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("cardview", { read: CardViewComponent, static: false })
  cardview!: CardViewComponent;
  @ViewChild("collapsible", { read: CheckBoxComponent, static: false })
  collapsible!: CheckBoxComponent;
  @ViewChild("icons", { read: CheckBoxComponent, static: false })
  icons!: CheckBoxComponent;
  @ViewChild("titleField", { read: DropDownListComponent, static: false })
  titleField!: DropDownListComponent;
  @ViewChild("horizontal", { read: RadioButtonComponent, static: false })
  horizontal!: RadioButtonComponent;
  @ViewChild("vertical", { read: RadioButtonComponent, static: false })
  vertical!: RadioButtonComponent;
  @ViewChild("crop", { read: RadioButtonComponent, static: false })
  crop!: RadioButtonComponent;
  @ViewChild("fit", { read: RadioButtonComponent, static: false })
  fit!: RadioButtonComponent;

  photoFormatFunction(settings) {
    const photoList = settings.value.split(",");
    let htmlResult = "";
    photoList.forEach(photoUrl => {
      htmlResult += `<img class="thumb" src="${photoUrl}" />`;
    });
    settings.template = htmlResult;
  }

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  get sampleData() {
    const sampleData = [],
      firstNames = [
        "Andrew",
        "Nancy",
        "Shelley",
        "Regina",
        "Yoshi",
        "Antoni",
        "Mayumi",
        "Ian",
        "Peter",
        "Lars",
        "Petra",
        "Martin",
        "Sven",
        "Elio",
        "Beate",
        "Cheryl",
        "Michael",
        "Guylene"
      ],
      lastNames = [
        "Fuller",
        "Davolio",
        "Burke",
        "Murphy",
        "Nagase",
        "Saavedra",
        "Ohno",
        "Devling",
        "Wilson",
        "Peterson",
        "Winkler",
        "Bein",
        "Petersen",
        "Rossi",
        "Vileid",
        "Saylor",
        "Bjorn",
        "Nodier"
      ],
      petNames = [
        "Sam",
        "Bob",
        "Lucky",
        "Tommy",
        "Charlie",
        "Olliver",
        "Mixie",
        "Fluffy",
        "Acorn",
        "Beak"
      ],
      productNames = [
        "Black Tea",
        "Green Tea",
        "Caffe Espresso",
        "Doubleshot Espresso",
        "Caffe Latte",
        "White Chocolate Mocha",
        "Cramel Latte",
        "Caffe Americano",
        "Cappuccino",
        "Espresso Truffle",
        "Espresso con Panna",
        "Peppermint Mocha Twist"
      ],
      contactImages = [
        "andrew.png",
        "anne.png",
        "avril.jpeg",
        "janet.png",
        "johanna.jpeg",
        "johnny.jpeg",
        "laura.png",
        "margaret.png",
        "Maria.jpeg",
        "mark.jpeg",
        "maya.jpeg",
        "michael.png",
        "monica.jpeg",
        "nancy.png",
        "robert.png",
        "steven.jpeg",
        "steven.png",
        "toni.jpeg"
      ];
    for (let i = 0; i < 20; i++) {
      const row: any = {};
      row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      row.birthday = new Date(
        Math.round(Math.random() * (2018 - 1918) + 1918),
        Math.round(Math.random() * 11),
        Math.round(Math.random() * (31 - 1) + 1)
      );
      row.petName = petNames[Math.floor(Math.random() * petNames.length)];
      row.productName =
        productNames[Math.floor(Math.random() * productNames.length)];
      row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
      row.quantity = Math.round(Math.random() * (50 - 1) + 1);
      row.timeOfPurchase = new Date(
        2018,
        8,
        19,
        Math.round(Math.random() * 23),
        Math.round(Math.random() * (31 - 1) + 1)
      );
      row.travelPhotos = [];
      row.contactPhotos = [];
      const maxPhotos = Math.floor(Math.random() * Math.floor(3)) + 1;
      for (let i = 0; i < maxPhotos; i++) {
        row.travelPhotos.push(
          `../../../images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`
        );
        row.contactPhotos.push(
          `../../../images/phonebook/${
            contactImages[Math.floor(Math.random() * contactImages.length)]
          }`
        );
      }
      row.travelPhotos = row.travelPhotos.join(",");
      row.contactPhotos = row.contactPhotos.join(",");
      sampleData[i] = row;
    }

    return sampleData;
  }
  init(): void {
    // init code.
    const that = this;

    that.cardview.dataSource = new Smart.DataAdapter({
      dataSource: that.sampleData,
      dataFields: [
        "firstName: string",
        "lastName: string",
        "birthday: date",
        "petName: string",
        "productName: string",
        "price: number",
        "quantity: number",
        "timeOfPurchase: date",
        "travelPhotos: string",
        "contactPhotos: string"
      ]
    });

    that.cardview.columns = [
      { label: "First Name", dataField: "firstName", icon: "firstName" },
      { label: "Last Name", dataField: "lastName", icon: "lastName" },
      {
        label: "Birthday",
        dataField: "birthday",
        icon: "birthday",
        formatSettings: { formatString: "d" }
      },
      { label: "Pet Name", dataField: "petName", icon: "petName" },
      { label: "Product Name", dataField: "productName", icon: "productName" },
      {
        label: "Price",
        dataField: "price",
        icon: "price",
        formatSettings: { formatString: "c2" }
      },
      {
        label: "Quantity",
        dataField: "quantity",
        icon: "quantity",
        formatFunction: function(settings) {
          const value = settings.value;
          let className;
          if (value < 20) {
            className = "red";
          } else if (value < 35) {
            className = "yellow";
          } else {
            className = "green";
          }
          settings.template = `<div class="${className}">${value}</div>`;
        }
      },
      {
        label: "Time of Purchase",
        dataField: "timeOfPurchase",
        icon: "timeOfPurchase",
        formatSettings: { formatString: "hh:mm tt" }
      },
      {
        label: "Travel photos",
        dataField: "travelPhotos",
        icon: "photo",
        formatFunction: that.photoFormatFunction,
        image: true
      },
      {
        label: "Contact photos",
        dataField: "contactPhotos",
        icon: "photo",
        formatFunction: that.photoFormatFunction,
        image: true
      }
    ];

    that.cardview.cellOrientation = "horizontal";
    that.cardview.collapsible = true;
    that.cardview.coverField = "travelPhotos";
    that.cardview.titleField = "firstName";

    that.collapsible.addEventListener("change", function(event: CustomEvent) {
      that.cardview.collapsible = event.detail.value;
    });

    that.icons.addEventListener("change", function() {
      that.cardview.nativeElement.classList.toggle("disabled-icons");
    });

    that.horizontal.addEventListener("change", function() {
      that.cardview.cellOrientation = "horizontal";
    });

    that.vertical.addEventListener("change", function() {
      that.cardview.cellOrientation = "vertical";
    });

    that.crop.addEventListener("change", function() {
      that.cardview.coverMode = "crop";
    });

    that.fit.addEventListener("change", function() {
      that.cardview.coverMode = "fit";
    });

    that.titleField.addEventListener("change", function() {
      switch (this.selectedIndexes[0]) {
        case 0:
          that.cardview.titleField = "firstName";
          break;
        case 1:
          that.cardview.titleField = "lastName";
          break;
        case 2:
          that.cardview.titleField = "petName";
          break;
      }
    });
  }
}
