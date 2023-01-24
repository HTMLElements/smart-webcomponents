<template>
  <div class="vue-root">
    <smart-carousel id="carousel" auto-play loop wheel keyboard display-mode="3d" interval="10000"></smart-carousel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.carousel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const template = document.createElement("template");
      template.id = "itemTemplate";
      template.innerHTML = `
        <div class="image-container" style="background-image:url('{{image}}')">
          <span class="date-container">29 July 2018</span>
        </div>
        <div class="text-container">
          <h2>{{headline}}</h2>
          <p>{{content}}</p>
          <p>Read more ...</p>
        </div>
        <div class="footer-container">
          <span class="footer-item">
            <i class="material-icons">local_offer</i>
            <span class="footer-text">Art</span>
          </span>
          <span class="footer-item">
            <i class="material-icons">person</i> admin
          </span>
          <span class="footer-item">
            <i class="material-icons">forum</i> 4
          </span>
          <span class="footer-item">
            <i class="material-icons">favorite</i> Favorite
          </span>
        </div>`;
      document.body.appendChild(template);

      const basePath = "../../../images/",
        carousel = document.getElementById("carousel");
      carousel.whenRendered(() => {
        carousel.itemTemplate = "itemTemplate";
      });

      carousel.dataSource = generateDataSource(6, 30, 250);

      function generateDataSource(items, headlineLength, contentLength) {
        const headlines = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Pellentesque facilisis dui ut faucibus laoreet",
            "Mauris tempus elit et metus sollicitudin, sit amet tempor justo auctor",
            "Cras dictum mauris et erat fringilla, ac porta nisl faucibus",
            "Duis in libero eu tortor cursus porttitor"
          ],
          contentParagraphs = [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus ac bibendum volutpat, justo orci finibus nulla, sed laoreet velit mauris eget est. Donec venenatis elit sit amet dui tempor, quis ornare augue viverra. In varius ut erat at cursus. Phasellus mollis odio sit amet neque imperdiet pharetra. Nam ut diam elementum, tempus lectus eget, pulvinar ligula. Morbi sit amet gravida justo. Integer ex orci, vulputate laoreet ornare sit amet, vehicula vel erat. Suspendisse molestie lacus sed fringilla pulvinar.`,
            `Nullam eget fermentum tellus. Nullam hendrerit ante eget pharetra ornare. Pellentesque posuere arcu elit, ut sagittis sapien lobortis quis. Duis ac aliquet lorem, vel ornare mauris. Aliquam lobortis blandit neque. Duis eros tellus, congue a faucibus non, pulvinar vitae magna. Morbi eu mauris velit. Sed in fringilla leo. Nullam ut odio ante. In gravida tortor sed tempor sagittis. Integer blandit, ligula eu blandit suscipit, nunc risus condimentum lectus, quis viverra orci tortor at est. Sed augue lacus, efficitur non purus quis, porta maximus metus.`,
            `Maecenas placerat vitae nunc sed egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Aliquam bibendum elit tempus sodales vestibulum. Maecenas a dapibus leo. Ut porta elit purus, eu lobortis nisl vehicula at. Aliquam vel ipsum ut metus ullamcorper porttitor. Nulla et facilisis orci, sed varius velit. In molestie in elit suscipit tincidunt.`,
            `Cras euismod iaculis tellus et laoreet. Proin eleifend porttitor mattis. Maecenas in dolor dignissim, mollis lacus consequat, tempus nunc. Morbi lacus ante, convallis eget rutrum eu, consectetur nec augue. Nullam vel sodales nulla. Donec in rhoncus odio, non cursus enim. Donec at mauris sit amet justo sagittis eleifend. Vivamus vel ligula id purus venenatis lobortis. Integer laoreet fermentum urna in lacinia. Maecenas sed urna eu ligula porta elementum non sit amet tortor. Praesent tincidunt laoreet quam ac congue. Sed eu ex ac lectus suscipit aliquet. Vivamus interdum ullamcorper sapien ut aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus posuere dolor in sollicitudin. Sed scelerisque fermentum urna, at ultricies lacus rutrum sed.`,
            `Aliquam scelerisque elit pharetra, finibus turpis quis, dictum ex. Morbi venenatis sodales commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vitae tortor magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin in diam lacinia, ultricies dui in, cursus lectus. Cras risus lorem, rhoncus ac neque quis, auctor gravida leo. In hac habitasse platea dictumst. Nunc nulla felis, porttitor et tempor consectetur, pretium in nisl. Vivamus sollicitudin dolor gravida risus cursus viverra.`
          ];
        let dataSource = [];
        items = items || 1;
        headlineLength = headlineLength || 10;
        contentLength = contentLength || 100;
        for (let i = 0; i < items; i++) {
          const image = `${basePath}carousel-medium-${i + 1}.jpg`,
            headline = headlines[parseInt("" + Math.random() * 5)].substring(
              0,
              headlineLength
            ),
            content =
              contentParagraphs[parseInt("" + Math.random() * 5)].substring(
                0,
                contentLength
              ) + ".";
          let item = {
            image: image,
            headline: headline,
            content: content
          };
          dataSource.push(item);
        }
        return dataSource;
      }
    });
  }
};
</script>

<style>
body,
.vue-root {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#carousel {
  width: 100%;
  height: 100%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  border-width: 0px;
  background-image: url("../../../images/carousel-background-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

#carousel .smart-arrow:after {
  font-size: 40px;
  position: absolute;
  color: white;
}

#carousel .smart-arrow-right:after {
  right: 20px;
}

#carousel .smart-carousel-item {
  border-width: 0px;
}

#carousel .smart-carousel-item .image-container {
  height: 200px;
  background-size: 150%;
  transition: background-size 1s;
}

#carousel .smart-carousel-item .image-container:hover {
  background-size: 160%;
  transition: background-size 1s;
}

#carousel .smart-indicator {
  border-color: white;
}

#carousel .smart-carousel-item .image-container:after {
  font-family: "Material Icons";
  content: "zoom_in";
  position: absolute;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0px;
  transition: font-size 0.3s;
  opacity: 0.8;
  cursor: pointer;
}

#carousel .smart-carousel-item .image-container:hover:after {
  font-size: 50px;
  transition: font-size 0.3s;
}

#carousel .smart-carousel-item .date-container {
  font-size: 12px;
  padding: 10px 30px 10px 20px;
  background-color: white;
  color: red;
  position: absolute;
  left: 0px;
  top: 20px;
  opacity: 0.8;
  box-shadow: 2px 5px 5px #aaaaaa80;
}

#carousel .smart-carousel-item .text-container {
  background-color: #d35555;
  height: 150px;
  position: relative;
}

#carousel .smart-carousel-item .text-container h2 {
  color: white;
  margin: 0px;
  padding: 20px 10px 10px 10px;
}

#carousel .smart-carousel-item .text-container p {
  color: white;
  font-size: 12px;
  margin: 0px;
  padding: 0px 10px 10px 10px;
}

#carousel .smart-carousel-item .footer-container {
  height: 50px;
  background-color: white;
  color: #9b4545;
  font-size: 10px;
  padding-top: 14px;
}

#carousel .smart-carousel-item .footer-item {
  display: inline-block;
  border-left: 1px solid #9b4545;
  margin-left: 5px;
  padding-left: 20px;
  padding-right: 20px;
}

#carousel .smart-carousel-item .footer-item:first-of-type {
  border-left-width: 0px;
}

#carousel .smart-carousel-item .material-icons,
#carousel .smart-carousel-item .footer-text {
  display: inline-block;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}

#carousel .smart-carousel-item .footer-text {
  line-height: 2.5;
}

#carousel .smart-carousel-item .footer-item:hover .material-icons {
  color: darkred;
}

#carousel .smart-carousel-item:hover {
  margin-top: -10px;
  transition-duration: 300ms;
}

@media only screen and (max-width: 800px) {
  smart-carousel {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  smart-carousel .smart-carousel-item {
    width: 250px;
  }
}

@media only screen and (max-width: 500px) {
  smart-carousel {
    width: 300px;
  }
  smart-carousel .smart-carousel-item {
    width: 180px !important;
  }
}
</style>
