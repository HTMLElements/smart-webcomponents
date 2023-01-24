<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <div id="materialDropDownListContainer">
        <section>
          <div>
            <h2>Smart HTML DropDownList is a form control that allows selecting a value from a drop down list.</h2>
            <div class="module">
              <p>
                A dropdown list selects between multiple selections. It displays the current
                state and a down/up arrow. Available states may be shown as a list of strings,
                a palette, or icons, for example.
              </p>
              <p>
                When a user interacts with the dropDown, a menu can appear over, under
                or below the drop down list and displays the possible states. Pressing
                a state dismisses the menu if the selection is single and updates the button
                to display this new state.
              </p>
              <p>Scrolling within the dropdown behaves the same way a menu scrolls.</p>
            </div>
            <div style="height: 5px;" class="module">
              <figure style="visibility: hidden;">
                <img alt src="../../../images/components-buttons.png" />
              </figure>
            </div>
            <div class="module"></div>
            <div class="module preview">
              <smart-button class="floating primary">
                <i class="material-icons">photo_camera</i>
              </smart-button>
              <div id="textFields">
                <span>Name</span>
                <div class="group">
                  <span>Phone</span>
                  <smart-drop-down-list
                    selected-indexes="[0]"
                    drop-down-position="bottom"
                    selection-mode="one"
                    class="combos1"
                  >
                    <smart-list-item>Mobile</smart-list-item>
                    <smart-list-item>Home</smart-list-item>
                    <smart-list-item>Work</smart-list-item>
                  </smart-drop-down-list>
                </div>
                <div class="group">
                  <span>Email</span>
                  <smart-drop-down-list
                    selected-indexes="[0]"
                    drop-down-position="bottom"
                    selection-mode="one"
                    class="combos1"
                  >
                    <smart-list-item>Work</smart-list-item>
                    <smart-list-item>Mobile</smart-list-item>
                    <smart-list-item>Home</smart-list-item>
                  </smart-drop-down-list>
                </div>
                <div class="group">
                  <span>Address</span>
                  <smart-drop-down-list
                    selected-indexes="[0]"
                    drop-down-position="bottom"
                    selection-mode="one"
                    class="combos1"
                  >
                    <smart-list-item>Home</smart-list-item>
                    <smart-list-item>Mobile</smart-list-item>
                    <smart-list-item>Work</smart-list-item>
                  </smart-drop-down-list>
                </div>
                <span>Ringtone</span>
                <span>Add note</span>
              </div>
            </div>
            <div class="module"></div>
          </div>
        </section>
        <section>
          <div class="module">
            <h2>Generic overflow DropDownList</h2>
            <p>
              The generic overflow DropDownList displays an arrow by default. When the
              button is pressed, the menu appears. Pressing an option on the menu navigates
              to further settings for that option.
            </p>
            <br />
            <smart-drop-down-list selected-indexes="[0]" drop-down-position="bottom">
              <smart-list-item>Arial</smart-list-item>
              <smart-list-item selected>Calibri</smart-list-item>
              <smart-list-item>Courier</smart-list-item>
              <smart-list-item>Verdana</smart-list-item>
            </smart-drop-down-list>
          </div>
        </section>
        <section id="style">
          <h2>Style</h2>
          <div class="module dropDownListLightTheme">
            <table>
              <tr>
                <td>
                  <p>Normal</p>
                </td>
                <td>
                  <smart-drop-down-list selected-indexes="[0]" drop-down-position="bottom">
                    <smart-list-item selected>Home</smart-list-item>
                    <smart-list-item>Mobile</smart-list-item>
                    <smart-list-item>Work</smart-list-item>
                    <smart-list-item>Business</smart-list-item>
                    <smart-list-item>Personal</smart-list-item>
                  </smart-drop-down-list>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Disabled</p>
                </td>
                <td>
                  <smart-drop-down-list selected-indexes="[0]" drop-down-position="bottom" disabled>
                    <smart-list-item>Home</smart-list-item>
                    <smart-list-item>Mobile</smart-list-item>
                    <smart-list-item>Work</smart-list-item>
                    <smart-list-item>Business</smart-list-item>
                    <smart-list-item selected>Personal</smart-list-item>
                  </smart-drop-down-list>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section id="dropDownListOpenModes">
          <h2>Open Directions</h2>
          <div class="module">
            <p>
              smartDropDownList has a number of opening directions but the most popular
              are "bottom", "overlay-center" and "top".
            </p>
          </div>
          <div class="module dropDownOpenModes">
            <table>
              <tbody>
                <tr>
                  <td>Bottom</td>
                  <td>
                    <smart-drop-down-list selected-indexes="[0]" drop-down-position="bottom">
                      <smart-list-item>Africa</smart-list-item>
                      <smart-list-item selected>America</smart-list-item>
                      <smart-list-item>Asia</smart-list-item>
                      <smart-list-item>Europe</smart-list-item>
                    </smart-drop-down-list>
                  </td>
                </tr>
                <tr>
                  <td>Overlay-center</td>
                  <td>
                    <smart-drop-down-list
                      selected-indexes="[0]"
                      drop-down-position="overlay-center"
                    >
                      <smart-list-item>Yogurt</smart-list-item>
                      <smart-list-item selected>Honey</smart-list-item>
                      <smart-list-item>Strawberries</smart-list-item>
                    </smart-drop-down-list>
                  </td>
                </tr>
                <tr>
                  <td>Top</td>
                  <td>
                    <smart-drop-down-list selected-indexes="[0]" drop-down-position="top">
                      <smart-list-item>Peanuts</smart-list-item>
                      <smart-list-item selected>Hazelnuts</smart-list-item>
                      <smart-list-item>Almonds</smart-list-item>
                    </smart-drop-down-list>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="dropDownListSelectionModes">
          <h2>Selection Modes</h2>
          <div class="module">
            <p>
              smartDropDownList has a variaty of selection modes allowing single or
              multiple item selection.
            </p>
          </div>
          <div>One(Selection of single item)</div>
          <br />
          <smart-drop-down-list selected-indexes="[0]" drop-down-position="bottom">
            <smart-list-item selected>State 1</smart-list-item>
            <smart-list-item>State 2</smart-list-item>
            <smart-list-item>State 3</smart-list-item>
          </smart-drop-down-list>
          <br />
          <div>oneOrManyExtended - allows selection with shift and ctrl.</div>
          <br />
          <smart-drop-down-list
            selected-indexes="[0]"
            drop-down-position="bottom"
            selection-mode="oneOrManyExtended"
          >
            <smart-list-item>State 1</smart-list-item>
            <smart-list-item selected>State 2</smart-list-item>
            <smart-list-item>State 3</smart-list-item>
          </smart-drop-down-list>
          <br />
          <div>checkBox</div>
          <br />
          <smart-drop-down-list
            selected-indexes="[0]"
            drop-down-position="bottom"
            selection-mode="checkBox"
          >
            <smart-list-item>Item 1</smart-list-item>
            <smart-list-item selected>Item 2</smart-list-item>
            <smart-list-item>Item 3</smart-list-item>
          </smart-drop-down-list>
          <br />
          <div>radioButton</div>
          <br />
          <smart-drop-down-list
            selected-indexes="[0]"
            drop-down-position="bottom"
            selection-mode="radioButton"
          >
            <smart-list-item>Item 1</smart-list-item>
            <smart-list-item selected>Item 2</smart-list-item>
            <smart-list-item>Item 3</smart-list-item>
          </smart-drop-down-list>
          <br />
          <p>
            Additional selection modes are "zeroOrOne", "OneOrMany", "zeroOrMany"
            and "none"
          </p>
        </section>
        <section id="demoDropDown">
          <h2>Demo</h2>
          <div class="module">
            <p>
              DropDownListes are controls that are used for making a selection from
              a list of options.
            </p>
          </div>
          <div class="module shipping">
            <div>
              <h2>Edit shipping info</h2>
              <div>
                <div class="name">
                  <i class="material-icons">&#xE7FD;</i>
                  <span>John Williams</span>
                </div>
                <div class="address">
                  <div>
                    <i class="material-icons">&#xE55F;</i>
                    <span>2000 Main Street</span>
                    <br />
                  </div>
                  <div>
                    <span>Hoboken</span>
                    <smart-drop-down-list
                      selected-indexes="[0]"
                      drop-down-position="overlay-center"
                    >
                      <smart-list-item>NJ</smart-list-item>
                      <smart-list-item selected>DE</smart-list-item>
                      <smart-list-item>FL</smart-list-item>
                      <smart-list-item>NH</smart-list-item>
                      <smart-list-item>GA</smart-list-item>
                      <smart-list-item>IN</smart-list-item>
                      <smart-list-item>HI</smart-list-item>
                      <smart-list-item>CT</smart-list-item>
                      <smart-list-item>NM</smart-list-item>
                      <smart-list-item>ID</smart-list-item>
                      <smart-list-item>KS</smart-list-item>
                      <smart-list-item>LA</smart-list-item>
                      <smart-list-item>KY</smart-list-item>
                      <smart-list-item>CO</smart-list-item>
                      <smart-list-item>NE</smart-list-item>
                      <smart-list-item>OH</smart-list-item>
                      <smart-list-item>SC</smart-list-item>
                      <smart-list-item>RI</smart-list-item>
                      <smart-list-item>TX</smart-list-item>
                      <smart-list-item>WA</smart-list-item>
                    </smart-drop-down-list>
                    <span>94122</span>
                  </div>
                </div>
                <div class="email">
                  <i class="material-icons">&#xE0BE;</i>
                  <span>Email</span>
                </div>
                <div class="buttons">
                  <smart-button class="material flat">Cancel</smart-button>
                  <smart-button class="material flat" disabled>Done</smart-button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="module welcome">
            <div>
              <h2>Welcome</h2>
              <smart-drop-down-list
                selected-indexes="[0]"
                drop-down-position="overlay-center"
                selection-mode="zeroOrOne"
                placeholder="Select Language"
              >
                <smart-list-item>English(US)</smart-list-item>
                <smart-list-item>English(UK)</smart-list-item>
                <smart-list-item>English(AU)</smart-list-item>
                <smart-list-item>English(IN)</smart-list-item>
                <smart-list-item>Czech</smart-list-item>
                <smart-list-item>Dutch</smart-list-item>
                <smart-list-item>French</smart-list-item>
                <smart-list-item>German(DE)</smart-list-item>
                <smart-list-item>German(AT)</smart-list-item>
                <smart-list-item>Italian</smart-list-item>
                <smart-list-item>Japanase</smart-list-item>
                <smart-list-item>Korean</smart-list-item>
                <smart-list-item>Polish</smart-list-item>
                <smart-list-item>Russian</smart-list-item>
                <smart-list-item>Spanish</smart-list-item>
                <smart-list-item>Arabic(EG)</smart-list-item>
                <smart-list-item>Arabic(IL)</smart-list-item>
                <smart-list-item>Bulgarian</smart-list-item>
                <smart-list-item>Croatian</smart-list-item>
                <smart-list-item>Danish</smart-list-item>
                <smart-list-item>Finnish</smart-list-item>
                <smart-list-item>Romanian</smart-list-item>
                <smart-list-item>Swedish</smart-list-item>
                <smart-list-item>Thai</smart-list-item>
                <smart-list-item>Turkish</smart-list-item>
                <smart-list-item>Ukrainian</smart-list-item>
                <smart-list-item>Vietnamese</smart-list-item>
              </smart-drop-down-list>
              <smart-button class="floating">
                <i class="material-icons">&#xE5C8;</i>
              </smart-button>
              <smart-button class="raised error">
                <i class="material-icons">&#xE0CD;</i>
                <span>EMERGENCY</span>
              </smart-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // Your code here.
    });
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */ /* APACHE LICENSE 2.0 ! */

td p {
  position: relative;
  top: 5px;
}
.smart-demo-container {
  margin: 0px;
}
.combos1 {
  position: relative;
  top: 5px;
}
/* fallback */
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

/* ------------ */

#materialDropDownListContainer {
  margin: 0px;
  line-height: 24px;
  font-size: 13px;
  margin-left: 0;
}
#materialDropDownListContainer section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}
#materialDropDownListContainer section h1 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
}

#materialDropDownListContainer section:first-of-type h1 {
  font-size: 34px;
}

#materialDropDownListContainer section:first-of-type div h1 {
  font-size: 20px;
}

#materialDropDownListContainer section {
  margin-top: 80px;
}

#materialDropDownListContainer section:first-of-type {
  margin-top: 0;
}

#materialDropDownListContainer section div h1 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 30px;
  max-width: 940px;
}

#materialDropDownListContainer nav {
  display: block;
  border-left: 5px #3949ab solid;
  padding-left: 20px;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  margin-top: 60px;
}

#materialDropDownListContainer nav ul {
  list-style: none;
  margin-top: 0;
  padding-left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: block;
  list-style-type: disc;
}

#materialDropDownListContainer nav li {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-size: 20px;
  line-height: 40px;
}

#materialDropDownListContainer nav li a {
  text-decoration: none;
}

#materialDropDownListContainer nav h1 {
  font-size: 15px;
  line-height: 16px;
  padding-bottom: 12px;
  font-weight: 400;
  color: #757575;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

.module {
  width: calc(100% / 4);
  display: inline-block;
  font: inherit;
  margin-right: 40px;
  min-width: 355px;
  vertical-align: top;
}

.module h3 {
  font-size: 13px;
}

.module p {
  margin-bottom: 20px;
}

.module img {
  width: 100%;
}

.module h2 {
  font-weight: 400;
}

#materialDropDownListContainer section:first-of-type .module:first-of-type {
  width: calc(100% / 2 + 45px);
}

#materialDropDownListContainer section:first-of-type .module:nth-of-type(4) {
  margin-top: 40px;
}

#materialDropDownListContainer .preview smart-button {
  position: absolute;
  top: 35%;
  width: 65px;
  height: 65px;
  left: 79%;
  font-size: 30px;
  opacity: 1;
}

#materialDropDownListContainer .preview smart-button .material-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

#materialDropDownListContainer .preview smart-drop-down-list {
  --smart-drop-down-element-height: auto;
  --smart-drop-down-list-default-width: 30%;
}

#materialDropDownListContainer .preview #textFields {
  width: 80%;
  position: absolute;
  left: 15%;
  top: 46%;
  height: 46%;
  display: flex;
  flex-direction: column;
}

#materialDropDownListContainer #textFields > span {
  text-align: start;
  border-bottom: 1px solid lightgray;
  height: 40px;
  line-height: 4;
}

#materialDropDownListContainer .preview .group {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 10px;
}

#materialDropDownListContainer #textFields > span:nth-of-type(2),
#materialDropDownListContainer #textFields > span:nth-of-type(3) {
  margin-top: 10px;
}

#materialDropDownListContainer .preview .group > span {
  height: 100%;
  text-align: start;
  border-bottom: 1px solid lightgray;
  width: 65%;
  line-height: 4;
  margin-right: 5%;
}

#materialDropDownListContainer #tankUsage .module h3,
#materialDropDownListContainer #discreteTanks .module h3 {
  font-weight: 400;
  font-size: 16px;
}

#materialDropDownListContainer #usage .dropDownListUsage,
#materialDropDownListContainer #style .dropDownListLightTheme,
#materialDropDownListContainer #style .dropDownListDarkTheme,
#materialDropDownListContainer #dropDownListSelectionModes .dropDownSelections,
#materialDropDownListContainer #dropDownListOpenModes .dropDownOpenModes {
  width: calc(100% / 2 + 45px);
  height: 300px;
  margin-top: 50px;
  margin-bottom: 80px;
}

#materialDropDownListContainer #style .dropDownListLightTheme {
  margin-top: 0;
}

#materialDropDownListContainer #style .dropDownListDarkTheme {
  background-color: #000;
}

#materialDropDownListContainer #style .module:nth-of-type(3) {
  margin-top: 50px;
}

#materialDropDownListContainer #style th,
#materialDropDownListContainer #dropDownListSelectionModes th,
#materialDropDownListContainer #dropDownListOpenModes th {
  padding-left: 15px;
}

#materialDropDownListContainer .dropDownListUsage smart-drop-down-list,
#materialDropDownListContainer #style smart-drop-down-list {
  --smart-drop-down-element-height: auto;
}

#materialDropDownListContainer #continuousTanks .module:first-of-type,
#materialDropDownListContainer #discreteTanks .module:first-of-type {
  width: calc(100% - 280px);
}

#materialDropDownListContainer #continuousTanks .module:nth-child(2),
#materialDropDownListContainer #discreteTanks .module:nth-child(2) {
  display: block;
}

#materialDropDownListContainer #continuousTanks .continuousTankDarkTheme,
#materialDropDownListContainer #discreteTanks .dropDownListDarkTheme {
  background-color: #000;
}

#materialDropDownListContainer .dropDownListUsage table,
#materialDropDownListContainer .continuousTankLightTheme table,
#materialDropDownListContainer .continuousTankDarkTheme table,
#materialDropDownListContainer .dropDownListLightTheme table,
#materialDropDownListContainer .dropDownListDarkTheme table,
#materialDropDownListContainer .dropDownSelections table,
#materialDropDownListContainer .dropDownOpenModes table {
  width: 100%;
  height: 100%;
  padding: 50px;
  text-align: justify;
}

#materialDropDownListContainer .continuousTankLightTheme table,
#materialDropDownListContainer .dropDownListLightTheme table,
#materialDropDownListContainer .dropDownOpenModes table,
#materialDropDownListContainer .dropDownSelections table {
  background-color: #eeeeee;
}

#materialDropDownListContainer #continuousTanks .module:nth-child(3),
#materialDropDownListContainer #continuousTanks .module:nth-child(5),
#materialDropDownListContainer #discreteTanks .module:nth-child(3) {
  margin-top: 50px;
}

#materialDropDownListContainer #continuousTanks .module:first-of-type,
#materialDropDownListContainer #discreteTanks .module:first-of-type {
  width: calc(100% - 280px);
}

#materialDropDownListContainer #style h1:first-of-type,
#materialDropDownListContainer #dropDownListSelectionModes h1:first-of-type,
#materialDropDownListContainer #dropDownListOpenModes h1:first-of-type,
#materialDropDownListContainer #demoDropDown h1:first-of-type {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
  padding-top: 80px;
  width: calc(100% - 280px);
}

#materialDropDownListContainer #dropDownListSelectionModes .dropDownSelections,
#materialDropDownListContainer #dropDownListOpenModes .dropDownOpenModes,
#materialDropDownListContainer
  #dropDownListSelectionModes
  .discreteScaleSlider {
  height: 200px;
  margin-top: initial;
}

#dropDownListSelectionModes .discreteScaleSlider > div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

#materialDropDownListContainer #verticalTanks .module:nth-of-type(2) > div,
#materialDropDownListContainer #verticalTanks .module:nth-of-type(3) > div {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: #eeeeee;
  padding: 20px;
  height: 225px;
}

#materialDropDownListContainer section:first-of-type .module:nth-of-type(4) {
  position: relative;
  color: #757575;
  background-image: url(../../../images/components-buttons-mobile.png);
  height: 650px;
  background-color: #eeeeee;
  text-align: center;
  background-size: cover;
  background-position: center;
  margin-right: 0;
}

#materialDropDownListContainer #demoDropDown .media-controls h2,
#materialDropDownListContainer #demoDropDown .power-controls h2 {
  color: black;
  margin-bottom: 20%;
  -webkit-margin-before: 0;
}

#materialDropDownListContainer #demoDropDown .media-controls > div > div,
#materialDropDownListContainer #demoDropDown .power-controls > div > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 3%;
  width: 100%;
}

#materialDropDownListContainer #demoDropDown .power-controls > div > div {
  margin-bottom: 10%;
}

#materialDropDownListContainer #demoDropDown .power-controls .controls {
  margin-top: 5%;
}

#materialDropDownListContainer #demoDropDown .controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#materialDropDownListContainer #demoDropDown .media-controls .material-icons,
#materialDropDownListContainer #demoDropDown .power-controls .material-icons {
  font-size: 50px;
}

#materialDropDownListContainer #dropDownListSelectionModes smart-drop-down-list,
#materialDropDownListContainer #dropDownListOpenModes smart-drop-down-list {
  --smart-drop-down-element-height: auto;
}

#materialDropDownListContainer .shipping {
  background-color: #eeeeee;
  padding: 10px;
}

#materialDropDownListContainer .welcome {
  background-color: #000;
  height: 600px;
  padding: 10px;
}

#materialDropDownListContainer .welcome > div {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px);
  padding: 30px;
  background-color: #1976d2;
}

#materialDropDownListContainer .welcome h2 {
  text-align: center;
  margin-top: 50px;
  font-size: 35px;
  color: white;
}

#materialDropDownListContainer .welcome smart-drop-down-list {
  margin-top: 150px;
}

#materialDropDownListContainer .welcome smart-drop-down-list {
  margin-top: 150px;
}

#materialDropDownListContainer .welcome smart-button:first-of-type {
  margin-top: 50px;
  min-height: 40px;
}

#materialDropDownListContainer .welcome smart-button:last-of-type {
  margin-top: 100px;
}

#materialDropDownListContainer .welcome smart-button:last-of-type button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#materialDropDownListContainer .shipping > div {
  height: 300px;
  background-color: white;
  border: 1px solid lightgray;
  padding: 25px;
  border-radius: 2px;
  box-shadow: 0.5px 1px 1px lightgrey;
}

#materialDropDownListContainer .shipping h2 {
  margin-bottom: 30px;
  margin-top: 0;
}

#materialDropDownListContainer .shipping .name,
#materialDropDownListContainer .shipping .email,
#materialDropDownListContainer .shipping .address > div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 30px;
}

#materialDropDownListContainer .shipping .name i,
#materialDropDownListContainer .shipping .email i,
#materialDropDownListContainer .shipping .address i {
  width: 15px;
  margin-right: 15px;
}

#materialDropDownListContainer .shipping .name > span,
#materialDropDownListContainer .shipping .email > span,
#materialDropDownListContainer .shipping .address > div:first-of-type > span {
  border-bottom: 1px solid lightgrey;
  width: calc(100% - 30px);
}

#materialDropDownListContainer .shipping .address > div:first-of-type > span {
  line-height: 3;
}

#materialDropDownListContainer
  .shipping
  .address
  > div:not(:first-of-type)
  > span:first-of-type {
  border-bottom: 1px solid lightgrey;
  width: 50%;
  margin-left: 30px;
  padding: 2px;
  line-height: 3;
}

#materialDropDownListContainer
  .shipping
  .address
  > div:not(:first-of-type)
  > span {
  border-bottom: 1px solid lightgrey;
  width: 55px;
  margin-left: 2.5%;
  padding: 2px;
  line-height: 3;
}

#materialDropDownListContainer .shipping .address smart-drop-down-list {
  --smart-drop-down-list-default-height: 25px;
  margin-left: 2.5%;
}

#materialDropDownListContainer
  .shipping
  .address
  smart-drop-down-list
  .smart-drop-down-button {
  padding: 12px;
}

#materialDropDownListContainer
  .shipping
  .address
  smart-drop-down-list:not([focused])
  .smart-label {
  top: calc(var(--smart-label-height) - 2px);
}

#materialDropDownListContainer .shipping .address > div > span {
  height: 100%;
}

#materialDropDownListContainer .buttons {
  height: 30px;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}

#materialDropDownListContainer .buttons smart-button {
  height: 100%;
  margin-left: 10px;
}
</style>
