<template>
  <div class="vue-root">
    <smart-layout>
      <smart-tab-layout-group size="80%">
        <smart-tab-layout-item label="My Milan Notes">
          <textarea class="input">The massive Cathedral of Santa Maria Nascente, which the Milanese call
just "Il Duomo" is among the world's largest (it holds up to 40,000 people)
and most magnificent churches, the ultimate example of the Flamboyant Gothic
style. It was begun in the 14th century, but its façade was not completed
until the early 1800s, under Napoleon. The roof is topped by 135 delicately
carved stone pinnacles and the exterior is decorated with 2,245 marble
statues. The dim interior, in striking contrast to the brilliant and richly
patterned exterior, makes a powerful impression with its 52 gigantic pillars.
The stained-glass windows in the nave (mostly 15th-16th centuries) are
the largest in the world; the earliest of them are in the south aisle.
Highlights include the seven-branched bronze candelabrum by Nicholas of
Verdun (c. 1200) in the north transept, the 16th-century tomb of Gian Giacomo
Medici, and the jeweled gold reliquary of San Carlo Borromeo in the octagonal
Borromeo Chapel leading off the crypt. Behind the high altar, the choir
has deeply carved panels, and misericords under the seats. In the south
sacristy is the treasury with gold and silver work dating from the fourth
to the 17th century. A walk on the roof of the cathedral is an impressive
experience, offering views across the city and extending on clear days
to the snow-covered Alps. (An elevator ascends all but the last 73 steps
to the platform of the dome). At the front of the Duomo, near the central
doorway, you can descend under Piazza del Duomo into the foundations of
the Basilica di Santa Tecla (fourth-fifth and seventh century) and the
fourth-century baptistery, Battistero di San Giovanni alle Fonti, which
were discovered during the construction of the Milan Metro system.</textarea>
        </smart-tab-layout-item>
        <smart-tab-layout-item label="Milan City Map">
          <div id="map"></div>
        </smart-tab-layout-item>
      </smart-tab-layout-group>
      <smart-tab-layout-group position="right">
        <smart-tab-layout-item label="Explorer">
          <smart-tree id="tree" filterable>
            <smart-tree-items-group>
              <i class="material-icons">folder</i> Attractions
              <smart-tree-item>Movies</smart-tree-item>
              <smart-tree-item>Circus</smart-tree-item>
              <smart-tree-item>Concerts</smart-tree-item>
              <smart-tree-item>Monuments</smart-tree-item>
            </smart-tree-items-group>
            <smart-tree-items-group>
              <i class="material-icons">folder</i> Dining
              <smart-tree-item>Restaurants</smart-tree-item>
              <smart-tree-item>Cafés</smart-tree-item>
              <smart-tree-item>Bars</smart-tree-item>
            </smart-tree-items-group>
            <smart-tree-items-group>
              <i class="material-icons">folder</i> Education
              <smart-tree-item>Schools</smart-tree-item>
              <smart-tree-item>Colleges</smart-tree-item>
              <smart-tree-item>Universities</smart-tree-item>
              <smart-tree-item>Educational courses</smart-tree-item>
            </smart-tree-items-group>
            <smart-tree-items-group>
              <i class="material-icons">folder</i> Family
              <smart-tree-item>Babysitting</smart-tree-item>
              <smart-tree-item>Family trips</smart-tree-item>
              <smart-tree-item>Theme parks</smart-tree-item>
            </smart-tree-items-group>
            <smart-tree-items-group>
              <i class="material-icons">folder</i> Health
              <smart-tree-item>Hospitals</smart-tree-item>
              <smart-tree-item>Family physicians</smart-tree-item>
              <smart-tree-item>Optics</smart-tree-item>
            </smart-tree-items-group>
          </smart-tree>
        </smart-tab-layout-item>
        <smart-tab-layout-item label="About Milan">
          <p>
            Milan, a metropolis in Italy's northern Lombardy region, is a global capital
            of fashion and design. Home to the national stock exchange, it’s a financial
            hub also known for its high-end restaurants and shops. The Gothic Duomo
            di Milano cathedral and the Santa Maria delle Grazie convent, housing Leonardo
            da Vinci’s mural “The Last Supper,” testify to centuries of art and culture.
          </p>
        </smart-tab-layout-item>
      </smart-tab-layout-group>
    </smart-layout>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tree.js";
import "smart-webcomponents/source/modules/smart.layout.js";
import "smart-webcomponents/source/modules/smart.textarea.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.initializeMaps = function() {
        new window.google.maps.Map(document.getElementById("map"), {
          center: new window.google.maps.LatLng(45.4642, 9.19),
          zoom: 8,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP
        });
      };

      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=initializeMaps";
      document.body.appendChild(script);
    });
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: Roboto;
}

p {
  padding: 10px;
}

smart-layout {
  width: 100%;
  height: 100%;
}
#map,
textarea,
smart-tree {
  border: 0;
  width: 100%;
  height: 100%;
  outline: none;
}

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
