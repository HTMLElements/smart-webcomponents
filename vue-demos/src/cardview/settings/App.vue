<template>
  <div class="vue-root">
    <div class="options" style="position: absolute; right: 10px;">
      <smart-check-box id="collapsible" checked>Collapsible cards</smart-check-box>
      <smart-check-box id="icons" checked>Icons</smart-check-box>
      <div>
        <p>Cell orientation:</p>
        <smart-radio-button id="horizontal" checked>horizontal</smart-radio-button>
        <smart-radio-button id="vertical">vertical</smart-radio-button>
      </div>
      <div>
        <p>Cover mode:</p>
        <smart-radio-button id="crop" checked>crop</smart-radio-button>
        <smart-radio-button id="fit">fit</smart-radio-button>
      </div>
      <p>Title:</p>
      <smart-drop-down-list id="titleField" dropDownHeight="135"></smart-drop-down-list>
    </div>
    <smart-card-view id="cardView"></smart-card-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.card.js";
import "smart-webcomponents/source/modules/smart.cardview.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
        var dropDownList = document.getElementById('titleField');
        dropDownList.whenRendered(() => {
            dropDownList.dataSource = ['First name', 'Last name', 'Pet name'];
            setTimeout(()=> {
                dropDownList.select('First name');
            });            
        });

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
        const row = {};
        row.firstName =
          firstNames[Math.floor(Math.random() * firstNames.length)];
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

      function photoFormatFunction(settings) {
        const photoList = settings.value.split(",");
        let htmlResult = "";
        photoList.forEach(photoUrl => {
          htmlResult += `<img class="thumb" src="${photoUrl}" />`;
        });
        settings.template = htmlResult;
      }
      window.Smart(
        "#cardView",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: sampleData,
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
              }),
              columns: [
                {
                  label: "First Name",
                  dataField: "firstName",
                  icon: "firstName"
                },
                {
                  label: "Last Name",
                  dataField: "lastName",
                  icon: "lastName"
                },
                {
                  label: "Birthday",
                  dataField: "birthday",
                  icon: "birthday",
                  formatSettings: {
                    formatString: "d"
                  }
                },
                {
                  label: "Pet Name",
                  dataField: "petName",
                  icon: "petName"
                },
                {
                  label: "Product Name",
                  dataField: "productName",
                  icon: "productName"
                },
                {
                  label: "Price",
                  dataField: "price",
                  icon: "price",
                  formatSettings: {
                    formatString: "c2"
                  }
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
                  formatSettings: {
                    formatString: "hh:mm tt"
                  }
                },
                {
                  label: "Travel photos",
                  dataField: "travelPhotos",
                  icon: "photo",
                  formatFunction: photoFormatFunction,
                  image: true
                },
                {
                  label: "Contact photos",
                  dataField: "contactPhotos",
                  icon: "photo",
                  formatFunction: photoFormatFunction,
                  image: true
                }
              ],
              cellOrientation: "horizontal",
              collapsible: true,
              coverField: "travelPhotos",
              titleField: "firstName"
            };
          }
        }
      );

      const cardView = document.getElementById("cardView");
      document
        .getElementById("collapsible")
        .addEventListener("change", function(event) {
          cardView.collapsible = event.detail.value;
        });
      document.getElementById("icons").addEventListener("change", function() {
        cardView.classList.toggle("disabled-icons");
      });
      document
        .getElementById("horizontal")
        .addEventListener("change", function() {
          cardView.cellOrientation = "horizontal";
        });
      document
        .getElementById("vertical")
        .addEventListener("change", function() {
          cardView.cellOrientation = "vertical";
        });
      document.getElementById("crop").addEventListener("change", function() {
        cardView.coverMode = "crop";
      });
      document.getElementById("fit").addEventListener("change", function() {
        cardView.coverMode = "fit";
      });
      document
        .getElementById("titleField")
        .addEventListener("change", function() {
          switch (this.selectedIndexes[0]) {
            case 0:
              cardView.titleField = "firstName";
              break;
            case 1:
              cardView.titleField = "lastName";
              break;
            case 2:
              cardView.titleField = "petName";
              break;
          }
        });
    });
  }
};
</script>

<style>
#cardView {
  width: 800px;
}

#cardView.disabled-icons .smart-card-view-label {
  padding-left: 0;
}

#cardView.disabled-icons .smart-card-view-label:after {
  content: none;
}

.firstName:after {
  background-image: url("https://img.icons8.com/ios/16/000000/user-filled.png");
}

.lastName:after {
  background-image: url("https://img.icons8.com/ios/16/000000/signature-filled.png");
}

.birthday:after {
  background-image: url("https://img.icons8.com/ios/16/000000/birthday-filled.png");
}

.petName:after {
  background-image: url("https://img.icons8.com/ios/16/000000/pet-commands-follow-filled.png");
}

.productName:after {
  background-image: url("https://img.icons8.com/ios/16/000000/box-filled.png");
}

.price:after {
  background-image: url("https://img.icons8.com/ios/16/000000/price-tag-euro-filled.png");
}

.quantity:after {
  background-image: url("https://img.icons8.com/ios/16/000000/negative-dynamic-filled.png");
}

.country:after {
  background-image: url("https://img.icons8.com/ios/16/000000/country-filled.png");
}

.timeOfPurchase:after {
  background-image: url("https://img.icons8.com/ios/16/000000/alarm-clock-filled.png");
}

.expired:after {
  background-image: url("https://img.icons8.com/ios/16/000000/expired-filled.png");
}

.photo:after {
  background-image: url("https://img.icons8.com/ios/16/000000/compact-camera-filled.png");
}

.red,
.yellow,
.green {
  display: inline-block;
  border-radius: 10px;
  padding: 5px;
}

.red {
  background-color: #e94f37;
  color: white;
}

.yellow {
  background-color: #ffee93;
}

.green {
  background-color: #63c7b2;
  color: white;
}

.thumb {
  display: inline-block;
  margin-right: 5px;
  width: 25px;
  height: 25px;
}
</style>
