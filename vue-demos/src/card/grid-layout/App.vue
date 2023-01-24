<template>
  <div class="vue-root">
    <smart-cards>
      <smart-card id="charts" class="image-card large"></smart-card>
      <smart-card id="marketing" class="image-card small"></smart-card>
      <smart-card id="conversion" class="image-card medium"></smart-card>
      <smart-card id="impressions" class="image-card medium"></smart-card>
      <smart-card id="sales" class="image-card small"></smart-card>
      <smart-card id="design" class="image-card small"></smart-card>
      <smart-card id="clicks" class="image-card small"></smart-card>
    </smart-cards>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.card.js";
import "smart-webcomponents/source/modules/smart.pager.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smallTemplate = document.createElement("template");
      smallTemplate.id = "smallTemplate";
      smallTemplate.innerHTML = `<div class="card-title">{{title}}</div>
        <div class="card-content">{{content}}</div>`;
      document.body.appendChild(smallTemplate);

      const mediumTemplate = document.createElement("template");
      mediumTemplate.id = "mediumTemplate";
      mediumTemplate.innerHTML = `<div class="card-title">{{title}}</div>
      <div class="card-content">{{content}}</div>
      <div class="card-target">
        <span class="card-percentage">{{percentage}}%</span> of target
      </div>
      <div class="card-graphic">
        <img src="{{image}}" />
      </div>`;
      document.body.appendChild(mediumTemplate);

      const largeTemplate = document.createElement("template");
      largeTemplate.id = "largeTemplate";
      largeTemplate.innerHTML = `<h3>{{title}}</h3>
      <div class="carrusel">
        <div class="slide">
          <div class="card-graphic">
            <img src="{{image1}}" />
          </div>
        </div>
        <div class="slide hidden">
          <div class="card-graphic">
            <img src="{{image2}}" />
          </div>
        </div>
        <div class="slide hidden">
          <div class="card-graphic">
            <img src="{{image3}}" />
          </div>
        </div>
      </div>
      <div class="pager">
        <smart-pager items="3" item-template="pagerTemplate"></smart-pager>
      </div>`;
      document.body.appendChild(largeTemplate);

      const pagerTemplate = document.createElement("template");
      pagerTemplate.id = "pagerTemplate";
      document.body.appendChild(pagerTemplate);

      const charts = document.getElementById("charts"),
        marketing = document.getElementById("marketing"),
        conversion = document.getElementById("conversion"),
        impressions = document.getElementById("impressions"),
        sales = document.getElementById("sales"),
        design = document.getElementById("design"),
        clicks = document.getElementById("clicks");

      charts.itemTemplate = "largeTemplate";
      charts.dataSource = {
        title: "Progress",
        image1: "../../../images/card-demo-chart-1.png",
        image2: "../../../images/card-demo-chart-2.png",
        image3: "../../../images/card-demo-chart-3.png"
      };
      charts.contentHandler = function(card) {
        const pager = card.querySelector("smart-pager"),
          slides = card.querySelectorAll(".slide");
        pager.addEventListener("change", function(event) {
          for (let i = 0; i < slides.length; i++) {
            i === event.detail.index
              ? slides[i].classList.remove("hidden")
              : slides[i].classList.add("hidden");
          }
        });
      };

      marketing.itemTemplate = "smallTemplate";
      marketing.dataSource = {
        title: "Marketing",
        content: "123.4M"
      };

      conversion.itemTemplate = "mediumTemplate";
      conversion.dataSource = {
        title: "Conversion",
        content: "537",
        percentage: "+22",
        image: "../../../images/card-demo-chart-4.png"
      };

      impressions.itemTemplate = "mediumTemplate";
      impressions.dataSource = {
        title: "Impressions",
        content: "123.4M",
        percentage: "+12.3",
        image: "../../../images/card-demo-chart-5.png"
      };

      sales.itemTemplate = "smallTemplate";
      sales.dataSource = {
        title: "Sales",
        content: "345.8M"
      };

      design.itemTemplate = "smallTemplate";
      design.dataSource = {
        title: "Design",
        content: "345.2M"
      };

      clicks.itemTemplate = "smallTemplate";
      clicks.dataSource = {
        title: "Clicks",
        content: "537"
      };
    });
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

h3 {
  text-align: center;
}

smart-cards {
  display: -ms-grid;
  display: grid;
  min-height: 100vh;
}

smart-cards > * {
  overflow: hidden;
}

smart-card {
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
  margin: 0px;
  padding: 15px;
  background-color: white;
  -webkit-transition: grid-column 1s, grid-row 1s;
  -o-transition: grid-column 1s, grid-row 1s;
  transition: grid-column 1s, grid-row 1s;
  transition: grid-column 1s, grid-row 1s, -ms-grid-column 1s, -ms-grid-row 1s;
}

smart-card .card-title,
smart-card .card-content,
smart-card .card-comment {
  position: relative;
}

smart-card .card-target {
  font-size: 12px;
  color: gray;
}

smart-card .card-percentage {
  color: #51b785;
}

smart-card .card-content {
  margin: 5px 0px 5px 0px;
  font-size: 30px;
}

smart-card .card-graphic {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

smart-card .card-graphic img {
  max-width: 100%;
  max-height: 80px;
  margin-top: 10px;
}

smart-card.large .card-graphic {
  display: block;
}

smart-card.large .card-graphic img {
  max-height: initial;
  width: 100%;
  height: auto;
  margin-top: 10px;
}

smart-card .pager {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

smart-card smart-pager {
  margin-left: auto;
  margin-right: auto;
}

smart-card smart-pager {
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-color: transparent;
}

smart-card smart-pager .smart-container {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

smart-card smart-pager .smart-items-container {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

smart-card smart-pager .smart-pager-item {
  width: 10px;
  height: 10px;
  background-color: lightgray;
  margin: 5px;
  border-radius: 50%;
}

smart-card smart-pager .smart-pager-item.smart-selected {
  background-color: #4285f4;
}

.hidden {
  display: none;
}
/* Large scren ----------- */
@media only screen and (min-width: 1025px) {
  smart-cards {
    -ms-grid-columns: calc(20% - 10px) calc(20% - 10px) calc(20% - 10px)
      calc(20% - 10px) calc(20% - 10px);
    grid-template-columns:
      calc(20% - 10px) calc(20% - 10px) calc(20% - 10px) calc(20% - 10px)
      calc(20% - 10px);
    -ms-grid-rows: 100px 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px 100px;
    grid-gap: 10px;
    padding: 10px;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  smart-card {
    width: 100%;
    -webkit-transition: grid-column 1s, grid-row 1s;
    -o-transition: grid-column 1s, grid-row 1s;
    transition: grid-column 1s, grid-row 1s;
    transition: grid-column 1s, grid-row 1s, -ms-grid-column 1s, -ms-grid-row 1s;
  }

  #charts {
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1/4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 5;
    grid-row: 1/6;
  }

  #marketing {
    -ms-grid-column: 5;
    grid-column: 5;
    -ms-grid-row: 4;
    grid-row: 4;
  }

  #sales {
    -ms-grid-column: 4;
    grid-column: 4;
    -ms-grid-row: 3;
    grid-row: 3;
  }

  #design {
    -ms-grid-column: 4;
    grid-column: 4;
    -ms-grid-row: 4;
    grid-row: 4;
  }

  #clicks {
    -ms-grid-column: 4;
    -ms-grid-column-span: 2;
    grid-column: 4/6;
    -ms-grid-row: 5;
    grid-row: 5;
  }

  #conversion {
    -ms-grid-column: 4;
    grid-column: 4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1/3;
  }

  #impressions {
    -ms-grid-column: 5;
    grid-column: 5;
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
    grid-row: 1/4;
  }

  #impressions .card-graphic {
    display: block;
  }

  #impressions .card-graphic img {
    width: 100%;
    max-height: initial;
    height: auto;
    display: block;
  }
}
/* Mobile (landscape) ----------- */
@media only screen and (max-width: 1024px) {
  smart-cards {
    -ms-grid-columns: 33% 33% 33%;
    grid-template-columns: 33% 33% 33%;
    -ms-grid-rows: auto 90px 90px 90px;
    grid-template-rows: auto 90px 90px 90px;
    grid-gap: 10px;
    padding: 10px;
    justify-items: stretch;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  smart-card {
    width: 100%;
    -webkit-transition: grid-column 1s, grid-row 1s;
    -o-transition: grid-column 1s, grid-row 1s;
    transition: grid-column 1s, grid-row 1s;
    transition: grid-column 1s, grid-row 1s, -ms-grid-column 1s, -ms-grid-row 1s;
  }

  smart-card.large .card-graphic img {
    max-width: 850px;
  }

  #charts {
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1/4;
  }

  #marketing {
    -ms-grid-column: 1;
    grid-column: 1/1;
    -ms-grid-row: 2;
    grid-row: 2/2;
  }

  #conversion {
    -ms-grid-column: 2;
    grid-column: 2/2;
    -ms-grid-row: 2;
    -ms-grid-row-span: 2;
    grid-row: 2/4;
  }

  #impressions {
    -ms-grid-column: 3;
    grid-column: 3/3;
    -ms-grid-row: 2;
    -ms-grid-row-span: 2;
    grid-row: 2/4;
  }

  #design {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
  }
}
/* Mobile (portrait) ----------- */
@media only screen and (max-width: 768px) {
  smart-cards {
    -ms-grid-columns: 50% 50%;
    grid-template-columns: 50% 50%;
    -ms-grid-rows: auto 90px 90px 90px 90px;
    grid-template-rows: auto 90px 90px 90px 90px;
    grid-gap: 10px;
    padding: 10px;
    justify-items: stretch;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  smart-card {
    -webkit-transition: grid-column 1s, grid-row 1s;
    -o-transition: grid-column 1s, grid-row 1s;
    transition: grid-column 1s, grid-row 1s;
    transition: grid-column 1s, grid-row 1s, -ms-grid-column 1s, -ms-grid-row 1s;
  }

  smart-cards smart-card {
    margin: 0px;
  }

  #charts {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
  }

  #marketing {
    -ms-grid-column: 1;
    grid-column: 1/1;
    -ms-grid-row: 2;
    grid-row: 2/2;
  }

  #conversion {
    -ms-grid-column: 2;
    grid-column: 2/2;
    -ms-grid-row: 2;
    -ms-grid-row-span: 2;
    grid-row: 2/4;
  }

  #impressions {
    -ms-grid-column: 1;
    grid-column: 1/1;
    -ms-grid-row: 3;
    -ms-grid-row-span: 2;
    grid-row: 3/5;
  }

  #design {
    -ms-grid-column: 1;
    grid-column: 1/1;
  }
}
</style>
