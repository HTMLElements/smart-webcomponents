<template>
  <div class="vue-root">
    <smart-cards>
      <smart-card class="expandable-card" item-template="customTemplate"></smart-card>
      <smart-card class="expandable-card" item-template="customTemplate"></smart-card>
      <smart-card class="expandable-card" item-template="customTemplate"></smart-card>
      <smart-card class="expandable-card" item-template="customTemplate"></smart-card>
      <smart-card class="expandable-card" item-template="customTemplate"></smart-card>
      <smart-card class="expandable-card" item-template="customTemplate"></smart-card>
    </smart-cards>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.card.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const cards = document.getElementsByTagName("smart-card"),
        dataSource = [
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/17/Tiger_in_Ranthambhore.jpg",
            title: "Bengal tiger",
            comment:
              "Bengal tigers weigh up to 325 kg (717 lb), and reach a head and body length of 320 cm (130 in).",
            content:
              "The Bengal tiger (<em>Panthera tigris tigris</em>) is the most numerous tiger. By 2011, the total population was estimated at fewer than 2,500 individuals with a decreasing trend."
          },
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1280px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg",
            title: "Indochinese tiger",
            comment:
              "Males range in size from 2.55 to 2.85 m (8.4 to 9.4 ft) and in weight from 150 to 195 kg (331 to 430 lb).",
            content:
              "The Indochinese tiger (<em>Panthera tigris corbetti</em>) is a tiger subspecies occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern China."
          },
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MalayanTiger01.jpg/1280px-MalayanTiger01.jpg",
            title: "Malayan tiger",
            comment:
              "The average length of a male is 8 ft 6 in (259 cm), and of a female 7 ft 10 in (239 cm).",
            content:
              "The Malayan tiger (<em>Panthera tigris jacksoni</em>) is a tiger subspecies that inhabits the southern and central parts of the Malay Peninsula and has been classified as Critically Endangered by IUCN in 2015 as the population was roughly estimated at 250 to 340 adult individuals in 2013; this population likely comprises less than 250 mature breeding individuals, with a declining trend."
          },
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1280px-P.t.altaica_Tomak_Male.jpg",
            title: "Siberian tiger",
            comment:
              "The body length is not less than 150 cm (60 in), condylobasal length of skull 250 mm (10 in).",
            content:
              "The Siberian tiger (<em>Panthera tigris altaica</em>), also called Amur tiger, is a tiger subspecies inhabiting mainly the Sikhote Alin mountain region with a small population in southwest Primorye Province in the Russian Far East. The Siberian tiger once ranged throughout all of Korea, north-eastern China, Russian Far East, and eastern Mongolia."
          },
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/1280px-2012_Suedchinesischer_Tiger.JPG",
            title: "South China tiger",
            comment:
              "Males measure from 230 to 265 cm (91 to 104 in) between the pegs, and weigh 130 to 175 kg (287 to 386 lb).",
            content:
              "The South China tiger (<em>Panthera tigris tigris</em>) is a tiger population in the provinces of Fujian, Guangdong, Hunan, Jiangxi in southern China."
          },
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/62/Panthera_tigris_sumatran_subspecies.jpg",
            title: "Malayan tiger",
            comment:
              "Males weigh 100 to 140 kg (220 to 310 lb) and measure 2.2 to 2.55 m (87 to 100 in).",
            content:
              "The Sumatran tiger (<em>Panthera tigris sondaica</em>) is a tiger population that lives in the Indonesian island of Sumatra."
          }
        ];

      const template = document.createElement("template");

      template.id = "customTemplate";
      template.innerHTML = `<div class="card-image">
        <img src="{{image}}" />
        <h2 class="card-title">{{title}}</h2>
      </div>
      <div class="card-comment">{{comment}}</div>
      <div class="card-buttons">
        <smart-button class="share">Share</smart-button>
        <smart-button class="more">More</smart-button>
        <smart-toggle-button>
          <i class="material-icons">&#xE313;</i>
        </smart-toggle-button>
      </div>
      <div class="card-content hidden">{{content}}</div>`;

      document.body.appendChild(template);

      for (let i = 0; i < cards.length; i++) {
        cards[i].itemTemplate = "customTemplate";
        cards[i].dataSource = dataSource[i];
        cards[i].contentHandler = contentHandler;
      }

      function contentHandler(card) {
        const toggleBtn = card.getElementsByTagName("smart-toggle-button")[0],
          moreBtn = card.querySelector(".more"),
          content = card.querySelector(".card-content");
        moreBtn.addEventListener("click", function() {
          content.classList.remove("hidden");
          toggleBtn.checked = true;
        });
        toggleBtn.addEventListener("click", function() {
          content.classList.toggle("hidden");
        });
      }
    });
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

smart-cards {
  min-height: 100vh;
}

smart-card.expandable-card {
  background-color: white;
}

smart-card.expandable-card .card-image {
  position: relative;
}

smart-card.expandable-card .card-image img {
  width: 100%;
  border-radius: 2px 2px 0px 0px;
}

smart-card.expandable-card .card-image .card-title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: white;
  font-size: 30px;
  background-color: #00000087;
  padding: 20px;
}

smart-card.expandable-card .card-content,
smart-card.expandable-card .card-comment,
smart-card.expandable-card .card-action {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px;
}

smart-card.expandable-card .card-comment {
  font-style: italic;
  font-size: 0.9em;
}

smart-card.expandable-card .card-action {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  border-radius: 0px 0px 2px 2px;
}

smart-card.expandable-card smart-accordion {
  width: 100%;
  height: auto;
}

smart-card.expandable-card smart-accordion-item > .smart-container {
  border-bottom-width: 0px;
}

smart-card.expandable-card smart-accordion-item p {
  border-bottom: 1px solid lightgray;
  padding: 5px;
  margin: 2px;
  color: gray;
}

smart-card.expandable-card .card-buttons {
  position: relative;
  padding: 0px 20px 20px 0px;
}

smart-card.expandable-card .card-content.hidden {
  display: none;
}

smart-card smart-toggle-button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 16px;
  background-color: lightgray;
  position: absolute;
  right: 20px;
  top: 0px;
}

smart-card smart-button button.smart-button {
  border-width: 0px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
}

smart-card smart-toggle-button button.smart-button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-width: 0px;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  -o-transition: transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}

smart-card smart-toggle-button[checked] button.smart-button {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  -o-transition: transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
</style>
