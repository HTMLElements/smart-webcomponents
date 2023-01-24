<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <template id="headerTemplate">
        <div class="headerTemplateContainer">
          <i class="material-icons">&#xE8B8;</i> Window with an Icon inside the Header
        </div>
      </template>

      <template id="footerTemplate">
        <div class="footerTemplateContainer">
          <smart-button class="flat">Cancel</smart-button>
          <smart-button class="flat">Ok</smart-button>
        </div>
      </template>

      <template id="footerTemplateLight">
        <div class="footerTemplateContainer">
          <smart-button class="flat">CANCEL</smart-button>
          <smart-button class="flat">DISCARD</smart-button>
        </div>
      </template>

      <template id="footerTemplateAgreenment">
        <div class="footerTemplateContainer">
          <smart-button class="flat">DISAGREE</smart-button>
          <smart-button class="flat">AGREE</smart-button>
        </div>
      </template>
      <div id="materialWindowContainer">
        <section>
          <div>
            <h2>Windows inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.</h2>
            <div class="module">
              <p>
                Windows contain text and UI controls. They retain focus until dismissed
                or a required action has been taken. Use windows sparingly because they
                are interruptive.
              </p>
              <p>Some windows types include:</p>
              <ul>
                <li>
                  <strong>Alerts</strong>are urgent interruptions that inform about a situation
                  and require acknowledgement.
                </li>
                <li>
                  <strong>Progress</strong> windows inform about a specific task completion.
                </li>
                <li>
                  <strong>Dialogs</strong> require users to explicitly confirm a choice.
                </li>
              </ul>
            </div>
            <div class="module">
              <h3>Behavior</h3>
              <p>
                Windows should never be obscured, either by other elements or the screen
                edge. Dialogs are dismissed when a required action has been taken.
              </p>
              <h3>Full-screen dialogs</h3>
              <p>
                Full-screen dialogs are best suited to complex tasks, or require an input
                method editor, as they group a series of tasks together before they can
                be saved.
              </p>
            </div>
            <div class="module"></div>
          </div>
        </section>
        <section id="appearance">
          <h2>Appearance</h2>
          <div class="module">
            <p>Windows consist of three main sections: Header, Content and Footer.</p>
          </div>
          <div class="module">
            <p>Window sections</p>
          </div>
          <div class="module">
            <p>
              <strong>Header</strong> section is optional. It can contain an arbitrary
              text or other Custom Elements.
            </p>
            <p>
              By default, the header section contains the lable of the Window. The label
              can be changed by setting the
              <strong>label</strong> property.
            </p>
            <p>
              The content of the Header section can be completely replaced using an
              HTMLTemplate. In order to do that the user has to apply the id of an HTML
              Template to the
              <strong>headerTempalte</strong> property.
            </p>
          </div>
          <div class="module">
            <smart-window opened pinned header-template="headerTemplate">No Content Added</smart-window>
            <p>Window with a material icon inside the Header</p>
          </div>
          <div class="module">
            <p>
              <strong>Content</strong> section holds the main information presented to
              the user. It can contain any HTML.
            </p>
            <p>
              When the window is collapsed the content is hidden. The only visible section
              if the Header.
            </p>
          </div>
          <div class="module">
            <smart-window class="content-window" opened pinned label="Window with Content">
              <smart-list-box>
                <smart-list-item>Item 1</smart-list-item>
                <smart-list-item>Item 2</smart-list-item>
                <smart-list-item>Item 3</smart-list-item>
                <smart-list-item>Item 4</smart-list-item>
              </smart-list-box>
            </smart-window>
            <p>Window with a ListBox inside.</p>
          </div>
          <div class="module">
            <p>
              <strong>Footer</strong> section is optional. It can contain an arbitrary
              text or other Custom Elements.
            </p>
            <p>Usualy used to hold the Dialog interaction controls.</p>
          </div>
          <div class="module confirmation-window2">
            <smart-window
              class="content-window animation"
              opened
              pinned
              label="Permissions"
              footer-template="footerTemplate"
            >
              <smart-list-box selection-mode="radioButton">
                <smart-list-item selected>Danish scrollable list item</smart-list-item>
                <smart-list-item>Eggs scrollable list item</smart-list-item>
              </smart-list-box>
            </smart-window>
            <p>Permissions</p>
          </div>
          <div class="module confirmation-window">
            <smart-window
              class="content-window animation"
              opened
              pinned
              label="Phone ringtone"
              footer-template="footerTemplate"
            >
              <smart-list-box selection-mode="radioButton">
                <smart-list-item>None</smart-list-item>
                <smart-list-item>Callisto</smart-list-item>
                <smart-list-item>Dione</smart-list-item>
                <smart-list-item selected>Ganymede</smart-list-item>
                <smart-list-item>Hangouts Call</smart-list-item>
                <smart-list-item>Luna</smart-list-item>
                <smart-list-item>Oberon</smart-list-item>
                <smart-list-item>Phobos</smart-list-item>
                <smart-list-item>Natural</smart-list-item>
                <smart-list-item>Onward</smart-list-item>
                <smart-list-item>Organic</smart-list-item>
                <smart-list-item>Orion</smart-list-item>
                <smart-list-item>Pegasus</smart-list-item>
                <smart-list-item>Titania</smart-list-item>
                <smart-list-item>Pyxis</smart-list-item>
                <smart-list-item>Luna</smart-list-item>
              </smart-list-box>
            </smart-window>
            <p>Ringtone selection window</p>
          </div>
          <div class="module window-themes">
            <h2>Themes</h2>
            <br />
            <h3>Windows without header bars</h3>
            <p>Most windows don't need headers.</p>
            <p>They summarize a decision in a sentence or two by either:</p>
            <ul>
              <li>Asking a question (e.g. "Delete this conversation?")</li>
              <li>Making a statement related to the action buttons</li>
            </ul>
          </div>
          <div class="module window-themes window-themes1">
            <smart-window
              class="content-window animation"
              opened
              pinned
              footer-template="footerTemplateLight"
            >
              <p>Discard draft ?</p>
            </smart-window>
          </div>
          <div class="module window-themes">
            <h3>Windows width header bars</h3>
            <p>
              Use header bar windows only for high-risk situations, such as the potential
              loss of connectivity. Users should be able to understand the choices based
              on the header and button text alone.
            </p>
            <p>If a header is required:</p>
            <ul>
              <li>
                Use a clear question or statement with an explanation in the content area,
                such as "Erase USB storage?"
              </li>
              <li>
                Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you
                sure?”
              </li>
            </ul>
          </div>
          <div class="module window-themes window-with-header-themes2">
            <smart-window
              class="content-window animation"
              opened
              pinned
              label="Use Google's location service?"
              footer-template="footerTemplateAgreenment"
            >
              <p>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, event when no apps are running.
              </p>
            </smart-window>
          </div>
        </section>
        <section id="behavior">
          <h2>Behavior</h2>
          <div class="module">
            <h2>Modal</h2>
            <p>
              Windows can be modal by setting the
              <strong>modal</strong> property.
            </p>
            <p>Modal windows disable background intereaction whilte opened.</p>
          </div>
          <div class="module window-themes window-modal">
            <smart-window
              class="content-window animation"
              opened
              pinned
              modal
              footer-template="footerTemplateLight"
            >
              <p>Discard draft ?</p>
            </smart-window>
          </div>
          <div class="module"></div>
          <div class="module">
            <h2>Pinned</h2>
            <p>
              Pinned Windows can't be dragged. They are used for alerts or dialogs.
              By default
              <strong>pinned</strong> property is not applied. The Header section
              of the element is the window's draggable area.
            </p>
          </div>
          <div class="module window-themes window-modal unpinned">
            <smart-window
              class="content-window animation"
              opened
              label="Hi"
              footer-template="footerTemplateLight"
            >
              <p>What's your favourite animal ?</p>
              <smart-text-box></smart-text-box>
            </smart-window>
          </div>
          <div class="module"></div>
          <div class="module">
            <h2>Resizable</h2>
            <p>
              Resizable Windows can be resized from any direction. By default
              <strong>resizeMode</strong> property
              is not set.
            </p>
            <p>Several modes are available:</p>
            <ul>
              <li>none</li>
              <li>horizontal</li>
              <li>vertical</li>
              <li>both</li>
            </ul>
          </div>
          <div class="module window-themes window-modal scrollable-content">
            <smart-window
              class="content-window animation"
              opened
              resize-mode="both"
              label="Resizable Window"
            >
              <div>
                <h4>Scrollable content exception</h4>
                <p>Some dialog content requires scrolling, such as lists of ringtones.</p>
                <ul>
                  <li>
                    For scrollable lists of options, the dialog title remains pinned to the
                    top. This ensures that a selected item remains visible with the title,
                    regardless of the item’s position in the list.
                  </li>
                  <li>
                    Otherwise, the title scrolls off with the content. Actions always remain
                    in place when content scrolls.
                  </li>
                </ul>
                <p>
                  Dialogs are separate from the underlying parent material and do not scroll
                  with it.
                </p>
                <h4>Displaying additional content</h4>
                <p>
                  To disclose additional content in a dialog, do so using inline expansion
                  within the content area. Or consider alternative components that are optimized
                  for large amounts of content.
                </p>
                <h4>Dismissing dialogs</h4>
                <p>
                  Dialogs may be dismissed either by tapping outside of the dialog, or tapping
                  the system back button (on Android). Alternatively, the user’s ability
                  to dismiss a dialog may be disabled, so that one of the actions must be
                  chosen before proceeding.
                </p>
              </div>
            </smart-window>
          </div>
          <div class="module">
            <h2>Header Controls</h2>
            <p>
              The header section of the Window element contains the control buttons
              used to do operations like maximizing, minimizing, closing, collapsing
              and etc.
            </p>
            <p>
              Those operations can be executed programatically as well by calling the
              appropriate method.
            </p>
          </div>
          <div class="module window-themes window-modal header-controls">
            <smart-button class="open-window-button">Open</smart-button>
            <smart-window class="content-window animation" opened resizable label="Albums">
              <img src="../../../images/albums_pop.png" />
            </smart-window>
          </div>
          <div class="module window-themes window-modal header-controls dark">
            <smart-button class="open-window-button">Open</smart-button>
            <smart-window
              class="content-window animation"
              opened
              resizable
              maximized
              label="Albums"
            >
              <smart-tabs class="animation padding">
                <smart-tab-item label="Pop">
                  <img src="../../../images/albums_pop.png" />
                </smart-tab-item>
                <smart-tab-item label="Alternative">
                  <img src="../../../images/albums_alternative.png" />
                </smart-tab-item>
                <smart-tab-item label="Rock">
                  <img src="../../../images/albums_rock.png" />
                </smart-tab-item>
                <smart-tab-item label="R & B">
                  <img src="../../../images/albums_rnb.png" />
                </smart-tab-item>
              </smart-tabs>
            </smart-window>
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
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.tabs.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let buttons = document.getElementsByClassName("open-window-button"),
        cancelButtons = document.getElementsByClassName("flat"),
        i,
        progressWindows = document.getElementsByTagName(
          "smart-progress-window"
        );
      for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
          event.target.nextElementSibling.open();
        });
      }
      for (i = 0; i < cancelButtons.length; i++) {
        cancelButtons[i].addEventListener("click", function (event) {
          const that = event.target;
          if (
            that.ownerElement &&
            (that.textContent.toLowerCase() === "cancel" ||
              that.textContent.toLowerCase() === "disagree")
          ) {
            that.ownerElement.close();
          }
        });
      }
      for (i = 0; i < progressWindows.length; i++) {
        progressWindows[i].addEventListener("click", function (event) {
          const that = event.target;
          if (!event.target.closest(".smart-complete-button") || !that.opened) {
            return;
          }
          that.innerHTML = "Loading...";
          that.value = 0;
          var interval = setInterval(function () {
            if (that.value >= that.max) {
              that.innerHTML = "Finished";
              clearInterval(interval);
            }
            that.value = that.value + Math.random() * 10;
          }, 500);
        });
      }
    });
  },
};
</script>

<style>
/* ------------ Google fonts ------------ */ /* APACHE LICENSE 2.0 ! */

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

smart-tabs {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

smart-tab-item .smart-container {
  overflow: hidden;
}
/* ------------ */
.smart-demo-container {
  margin: 0 !important;
}
#materialWindowContainer {
  line-height: 24px;
  font-size: 13px;
  margin: 5% 10%;
}
#materialWindowContainer section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}
#materialWindowContainer section h2 {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
}

#materialWindowContainer smart-tabs-window {
  --smart-window-default-width: 80%;
  --smart-window-default-height: 80%;
}

#materialWindowContainer smart-tabs-window smart-tab-item div h2 {
  border-top: initial;
  font-size: 30px;
}

#materialWindowContainer section:first-of-type h2 {
  font-size: 34px;
  border-top: initial;
}

#materialWindowContainer #appearance h2 {
  border-top: initial;
}

#materialWindowContainer section:first-of-type div h2 {
  font-size: 20px;
}

#materialWindowContainer section {
  margin-top: 80px;
}

#materialWindowContainer section:first-of-type {
  margin-top: 0;
}

#materialWindowContainer section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 30px;
  max-width: 940px;
}

#materialWindowContainer nav {
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

#materialWindowContainer nav ul {
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

#materialWindowContainer nav li {
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

#materialWindowContainer nav li a {
  text-decoration: none;
}

#materialWindowContainer nav h2 {
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

.module.gestures {
  width: calc(100% / 2);
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

#materialWindowContainer #appearance .module:nth-child(4),
#materialWindowContainer #appearance .module:nth-child(5),
#materialWindowContainer #behavior .module:nth-child(5),
#materialWindowContainer #behavior .module:nth-child(6),
#materialWindowContainer #behavior .module:nth-child(7),
#materialWindowContainer #behavior .module:nth-child(8),
#materialWindowContainer #behavior .module:nth-child(9),
#materialWindowContainer #behavior .module:nth-child(10),
#materialWindowContainer #behavior .module:nth-child(11),
#materialWindowContainer #behavior .module:nth-child(12),
#materialWindowContainer #types .module {
  margin-top: 50px;
}

#materialWindowContainer #appearance .module:nth-child(3),
#materialWindowContainer #appearance .module:nth-child(5),
#materialWindowContainer #appearance .module:nth-child(7) {
  width: calc(100% / 2);
}

#materialWindowContainer #appearance .module:nth-child(5),
#materialWindowContainer #appearance .module:nth-child(7) {
  height: 400px;
}

#materialWindowContainer .headerTemplateContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

#materialWindowContainer .headerTemplateContainer i {
  margin-right: 5px;
  font-size: 16px;
}

#materialWindowContainer smart-window:first-of-type {
  --smart-window-default-height: 250px;
  --smart-window-default-width: 250px;
}

#materialWindowContainer smart-window {
  --smart-window-default-width: 400px;
  --smart-window-default-height: 200px;
}

#materialWindowContainer smart-window.content-window smart-list-box {
  height: 100%;
  width: 100%;
  box-shadow: initial;
  background-color: initial;
}

#materialWindowContainer #appearance .module:nth-child(5) p {
  margin-top: 350px;
  padding-left: 125px;
}

#materialWindowContainer #appearance .module:nth-child(7) p {
  margin-top: 365px;
  padding-left: 300px;
}

#materialWindowContainer .confirmation-window {
  background-image: url(../../../images/components-windows-confirmation.png);
  height: 725px;
  width: 405px;
  background-size: cover;
}

#materialWindowContainer .confirmation-window2 {
  height: 725px;
  width: 405px;
  background-color: #e0e0e0;
}

#materialWindowContainer .confirmation-window2 smart-window {
  --smart-window-default-width: 300px;
  --smart-window-default-height: 225px;
}

#materialWindowContainer .confirmation-window smart-window {
  --smart-window-default-width: 317px;
  --smart-window-default-height: 588px;
  top: 55px;
  left: 45px;
}

#materialWindowContainer #appearance .module:nth-child(8),
#materialWindowContainer .confirmation-window,
#materialWindowContainer .confirmation-window2,
#materialWindowContainer .window-themes {
  margin-top: 50px;
}

#materialWindowContainer .confirmation-window smart-window,
#materialWindowContainer .confirmation-window2 smart-window {
  --smart-window-header-height: 55px;
  --smart-window-footer-height: 55px;
}

#materialWindowContainer .confirmation-window .smart-header-section,
#materialWindowContainer .confirmation-window2 .smart-header-section {
  background-color: initial;
  font-size: 23px;
  padding: 20px;
  font-weight: 600;
}

#materialWindowContainer
  .confirmation-window
  smart-list-item
  .smart-input:after,
#materialWindowContainer
  .confirmation-window
  smart-list-items-group
  .smart-input:after,
#materialWindowContainer
  .confirmation-window2
  smart-list-item
  .smart-input:after,
#materialWindowContainer
  .confirmation-window2
  smart-list-items-group
  .smart-input:after {
  line-height: 15px;
}

#materialWindowContainer .confirmation-window smart-list-item .smart-input,
#materialWindowContainer
  .confirmation-window
  smart-list-items-group
  .smart-input,
#materialWindowContainer .confirmation-window2 smart-list-item .smart-input,
#materialWindowContainer
  .confirmation-window2
  smart-list-items-group
  .smart-input {
  font-size: inherit;
}

#materialWindowContainer .confirmation-window .smart-footer,
#materialWindowContainer .confirmation-window2 .smart-footer {
  background-color: initial;
  display: flex;
  justify-content: flex-end;
}

#materialWindowContainer .confirmation-window .smart-footer smart-button,
#materialWindowContainer .confirmation-window2 .smart-footer smart-button {
  height: 100%;
}

#materialWindowContainer .confirmation-window p,
#materialWindowContainer .confirmation-window2 p {
  margin-top: 750px;
}

#materialWindowContainer smart-list-box.material smart-list-item {
  border-bottom: initial;
}

#materialWindowContainer .window-themes {
  margin-top: 100px;
}

#materialWindowContainer .window-themes1,
#materialWindowContainer .window-modal,
#materialWindowContainer .window-types {
  height: 500px;
}

#materialWindowContainer .window-with-header-themes1,
#materialWindowContainer .window-with-header-themes2 {
  background-image: url("../../../images/components-windows-header.png");
  background-size: cover;
  height: 665px;
}

#materialWindowContainer .window-with-header-themes1 smart-window,
#materialWindowContainer .window-with-header-themes2 smart-window {
  left: 40px;
  top: 165px;
  --smart-window-default-width: 295px;
  --smart-window-default-height: 300px;
  --smart-window-header-height: 70px;
  --smart-window-footer-height: 50px;
}

#materialWindowContainer
  .window-with-header-themes1
  smart-window
  .smart-header-section,
#materialWindowContainer
  .window-with-header-themes2
  smart-window
  .smart-header-section {
  font-size: 20px;
  padding: 20px;
  color: white;
  background-color: initial;
}

#materialWindowContainer .window-with-header-themes1 smart-window .smart-footer,
#materialWindowContainer
  .window-with-header-themes2
  smart-window
  .smart-footer {
  background-color: initial;
}

#materialWindowContainer
  .window-with-header-themes1
  smart-window
  .smart-footer
  button,
#materialWindowContainer
  .window-with-header-themes2
  smart-window
  .smart-footer
  button {
  color: #2693e5;
}

#materialWindowContainer
  .window-with-header-themes2
  smart-window
  .smart-header-section {
  color: black;
  background-color: initial;
}

#materialWindowContainer
  .window-with-header-themes1
  smart-window
  > .smart-container
  > .smart-content,
#materialWindowContainer
  .window-with-header-themes2
  smart-window
  > .smart-container
  > .smart-content {
  padding: 20px;
}

#materialWindowContainer .window-themes1 > p,
#materialWindowContainer .window-themes2 > p {
  margin-top: 525px;
}

#materialWindowContainer .window-with-header-themes1 > p,
#materialWindowContainer .window-with-header-themes2 > p {
  margin-top: 685px;
}

#materialWindowContainer .window-themes1 smart-window smart-button,
#materialWindowContainer .window-themes2 smart-window smart-button,
#materialWindowContainer .window-modal smart-window smart-button {
  height: 100%;
}

#materialWindowContainer .header-controls > smart-button,
#materialWindowContainer .window-types > smart-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#materialWindowContainer .window-modal.header-controls.dark {
  background-color: black;
}

#materialWindowContainer .header-controls smart-window img {
  height: 100%;
}

#materialWindowContainer .window-modal.header-controls smart-window.material {
  --smart-window-header-height: 50px;
  --smart-window-default-width: 250px;
  --smart-window-default-height: 300px;
}

#materialWindowContainer
  .window-modal.header-controls
  smart-window.material-dark {
  --smart-window-header-height: 50px;
  --smart-window-default-width: 250px;
  --smart-window-default-height: 300px;
}

#materialWindowContainer
  .window-modal.header-controls
  smart-window.material-dark
  smart-tabs {
  width: 100%;
  height: 100%;
}

#materialWindowContainer
  .window-modal.header-controls
  smart-window.material-dark
  smart-tab-item {
  overflow: initial;
}

#materialWindowContainer
  .window-modal.header-controls
  smart-window.material-dark
  .smart-tabs-content-section {
  margin: initial;
}

#materialWindowContainer .header-controls smart-window .smart-content {
  height: 100%;
}

#materialWindowContainer .window-themes1 smart-window .smart-content p,
#materialWindowContainer .window-themes2 smart-window .smart-content p,
#materialWindowContainer .window-modal smart-window .smart-content p {
  width: 100%;
  margin-left: 35px;
  margin-top: 0;
}

#materialWindowContainer .window-modal.unpinned .smart-header-section,
#materialWindowContainer .window-modal.scrollable-content .smart-header-section,
#materialWindowContainer .window-modal.header-controls .smart-header-section {
  display: flex;
}

.scrollable-content smart-window {
  width: 250px;
  left: 0px;
}
#materialWindowContainer
  .window-modal.scrollable-content
  smart-window
  .smart-content {
  overflow: scroll;
}

#materialWindowContainer .window-modal.scrollable-content .smart-content > div {
  height: 100%;
}

#materialWindowContainer
  .window-modal.scrollable-content
  .smart-container
  > .smart-content {
  padding: 10px;
}

#materialWindowContainer .window-modal.unpinned smart-window,
#materialWindowContainer .window-modal.scrollable-content smart-window {
  --smart-window-header-height: 50px;
  --smart-window-default-height: 200px;
}

#materialWindowContainer .window-modal.scrollable-content smart-window {
  --smart-window-default-height: 350px;
  --smart-window-default-width: 600px;
  min-width: 150px;
}

#materialWindowContainer .window-modal.scrollable-content,
#materialWindowContainer .window-types.tabs-window {
  width: calc(100% / 2);
}

#materialWindowContainer .window-types.tabs-window:last-of-type {
  background-color: black;
}

#materialWindowContainer
  .window-modal.header-controls
  smart-window
  .smart-header-section
  smart-button {
  display: initial;
}

#materialWindowContainer .window-modal.unpinned .smart-content p {
  text-align: center;
  margin: initial;
}

#materialWindowContainer .window-themes2 {
  background-color: black;
  height: 500px;
}

@media (max-width: 1026px) {
  #materialWindowContainer .window-modal.scrollable-content,
  #materialWindowContainer .window-types.tabs-window {
    width: 96% !important;
  }
}
</style>
