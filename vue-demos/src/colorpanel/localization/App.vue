<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Color Panel Localization</h1>In this example, the Color Panel is localized.
    </div>
    <smart-color-panel id="colorPanel" edit-alpha-channel enable-custom-colors></smart-color-panel>
    <div class="options">
      <div class="option">
        <h3>Locale</h3>
        <smart-radio-button group-name="locale" checked>en</smart-radio-button>
        <br />
        <smart-radio-button group-name="locale">de</smart-radio-button>
        <br />
        <smart-radio-button group-name="locale">fr</smart-radio-button>
        <br />
      </div>
      <div class="option">
        <h3>Display Mode</h3>
        <smart-radio-button group-name="displayMode" checked>default</smart-radio-button>
        <br />
        <smart-radio-button group-name="displayMode">grid</smart-radio-button>
        <br />
        <smart-radio-button group-name="displayMode">spectrumGrid</smart-radio-button>
        <br />
        <smart-radio-button group-name="displayMode">materialGrid</smart-radio-button>
        <br />
        <smart-radio-button group-name="displayMode">palette</smart-radio-button>
        <br />
        <smart-radio-button group-name="displayMode">radial</smart-radio-button>
        <br />
        <smart-radio-button group-name="displayMode">hexagonal</smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpanel.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.getElementById("colorPanel");
      colorPanel.messages = {
        en: {
          redPrefix: "R:",
          greenPrefix: "G:",
          bluePrefix: "B:",
          hexPrefix: "#:",
          alphaPrefix: "Alpha:",
          ok: "OK",
          cancel: "CANCEL",
          customColor: "CUSTOM COLOR ...",
          standardColors: "Standard colors",
          themeColors: "Theme colors"
        },
        de: {
          redPrefix: "R",
          greenPrefix: "G",
          bluePrefix: "B",
          hexPrefix: "#",
          alphaPrefix: "Alpha",
          ok: "OK",
          cancel: "STORNIEREN",
          customColor: "FREIWAEHLBARE FARBE ...",
          standardColors: "Standardfarben",
          themeColors: "Themenfarben"
        },
        fr: {
          redPrefix: "R:",
          greenPrefix: "G:",
          bluePrefix: "B:",
          hexPrefix: "#",
          alphaPrefix: "Alpha =",
          ok: " APPROUVER",
          cancel: "ANNULER",
          customColor: "COULEUR PERSONNALISEE ...",
          standardColors: "Couleurs standard",
          themeColors: "Couleurs du thème"
        }
      };
      document.addEventListener("change", function(event) {
        if (event.target.groupName === "displayMode") {
          colorPanel.displayMode = event.target.innerHTML;
          return;
        }
        if (event.target.groupName === "locale") {
          colorPanel.locale = event.target.innerHTML;
        }
      });
    });
  }
};
</script>

<style>
</style>
