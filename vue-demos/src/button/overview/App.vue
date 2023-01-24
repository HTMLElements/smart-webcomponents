<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Buttons communicate the action that will occur when the user touches them.</h2>
          <div class="module">
            <p>
              Smart buttons trigger an ink reaction on press. They may display text,
              imagery, or both. Flat buttons and raised buttons are the most commonly
              used types.
            </p>
            <p></p>
            <h3>Flat buttons</h3>
            <p>
              Flat buttons are text-only buttons.
              <br />They may be used in dialogs, toolbars, or inline.
              <br />They do not lift, but fill with color on press.
            </p>
            <h3>Raised buttons</h3>
            <p>
              Raised buttons are rectangular-shaped buttons.
              <br />They may be used inline.
              <br />They lift and display ink reactions on press.
            </p>
          </div>
        </div>
      </section>
      <section id="button-types">
        <h2>Button types</h2>
        <div class="module">
          <p>There are three standard types of buttons:</p>
          <ul class="arrow-list">
            <li>
              Floating action button: A circular button that lifts and displays an ink
              reaction on press.
            </li>
            <li>
              Raised button: A typically rectangular button that lifts and displays
              ink reactions on press.
            </li>
            <li>
              Flat button: A button made of ink that displays ink reactions on press
              but does not lift
            </li>
          </ul>
        </div>
        <div class="module">
          <div class="button-container">
            <smart-button class="floating">+</smart-button>
          </div>
          <p>Floating action button</p>
        </div>
        <div class="module">
          <div class="button-container">
            <smart-button class="raised">button</smart-button>
          </div>
          <p>Raised button</p>
        </div>
        <div class="module">
          <div class="button-container">
            <smart-button class="flat">button</smart-button>
          </div>
          <p>Flat button</p>
        </div>
        <div class="module">
          <div class="floating-demo-start">
            <smart-button class="secondary floating">
              <i class="material-icons">directions_car</i>
            </smart-button>
          </div>
          <p>Example of a floating action button</p>
        </div>
        <div class="module">
          <div class="raised-demo-start">
            <smart-button class="primary">force stop</smart-button>
            <smart-button class="error">uninstall</smart-button>
            <smart-button class="success">clear data</smart-button>
          </div>
          <p>Example of a raised button</p>
        </div>
        <div class="module">
          <div class="flat-demo-start">
            <smart-button class="flat">disagree</smart-button>
            <smart-button class="flat">agree</smart-button>
          </div>
          <p>Example of a flat button</p>
        </div>
        <div class="module button-style">
          <h2>Choosing button style</h2>
          <p>
            Choosing a button style depends on the primacy of the button, the number
            of containers on screen, and the screen layout.
          </p>
          <p>
            <strong>Function:</strong> Is it important and ubiquitous enough to be
            a floating action button?
          </p>
          <p>
            <strong>Dimension:</strong> Choose raised or flat depending on the container
            it will be in and how many z-space layers you have on screen. There should
            not be many layers of objects on the screen.
          </p>
          <p>
            <strong>Layout:</strong> Use primarily one type of button per container.
            Only mix button types when you have a good reason to, such as emphasizing
            an important function.
          </p>
        </div>
      </section>
      <section id="button-usage">
        <h2>Usage</h2>
        <div class="module">
          <h2>Button types</h2>
          <p>The type of button used should be suited to the context in which it appears.</p>
        </div>
        <div class="module usage-table">
          <table>
            <tbody>
              <tr>
                <td colspan="1" rowspan="1">
                  <p>Context</p>
                </td>
                <td colspan="1" rowspan="1">
                  <p>Button type</p>
                </td>
              </tr>
              <tr>
                <td colspan="1" rowspan="1">
                  <p>Dialogs</p>
                </td>
                <td colspan="1" rowspan="1">
                  <p>
                    Use
                    <strong>flat buttons</strong> in dialogs.
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="1" rowspan="1">
                  <p>Inline</p>
                </td>
                <td colspan="1" rowspan="1">
                  <p>
                    Raised buttons or
                    <strong>flat buttons</strong> can be used for inline buttons.
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="1" rowspan="1">
                  <p>Always available</p>
                </td>
                <td colspan="1" rowspan="1">
                  <p>
                    If your app requires actions to be persistent and readily available, you
                    can use the
                    <strong>floating action button</strong>.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="module">
          <h2>Recommended button placement</h2>
          <p>
            <strong>Standard dialogs</strong>
          </p>
          <p>Button alignment on screen: right</p>
          <p>
            Place the affirmative button on the right, the dismissive button on the
            left.
          </p>
          <br />
          <p>
            <strong>Forms</strong>
          </p>
          <p>Button alignment on screen: Left</p>
          <p>
            Place the affirmative button on the left, the dismissive button on the
            right.
          </p>
          <br />
          <p>
            <strong>Cards</strong>
          </p>
          <p>
            Buttons are best placed on the left side of a card to increase their visibility.
            However, as cards have flexible layouts, buttons may be placed in a location
            suited to the content and context, while maintaining consistency within
            the product.
          </p>
          <br />
          <p>
            <strong>Non-standard dialogs and modal windows</strong>
          </p>
          <p>
            Button placement in non-standard dialogs and modal windows depends on
            the complexity of the content they contain.
          </p>
          <p>
            For dialogs with relatively simple content, it is recommended to place
            buttons on the right side of a dialog, with the affirmative button to the
            right of the dismissive button.
          </p>
          <p>
            For lengthy or complex forms, it is recommended to place buttons on the
            left of the form, with the affirmative button to the left of the dismissive
            button.
          </p>
        </div>
      </section>
      <section id="button-flat">
        <h2>Outlined buttons</h2>
        <div class="module">
          <h2>Specs & Behavior</h2>
          <p>
            Outlined buttons are medium-emphasis buttons. They contain actions that
            are important, but aren’t the primary action in an app.
          </p>
        </div>
        <div class="module button-light">
          <div>
            <smart-button class="primary outlined">normal</smart-button>
            <br />
            <smart-button focus class="primary outlined">focused</smart-button>
            <br />
            <smart-button active class="primary outlined">Pressed</smart-button>
            <br />
            <smart-button class="primary outlined" disabled>disabled</smart-button>
          </div>
        </div>
      </section>
      <section id="button-flat">
        <h2>Flat buttons</h2>
        <div class="module">
          <h2>Specs & Behavior</h2>
        </div>
        <div class="module button-light">
          <div>
            <smart-button class="primary flat">normal</smart-button>
            <br />
            <smart-button focus class="primary flat">focused</smart-button>
            <br />
            <smart-button active class="primary flat">Pressed</smart-button>
            <br />
            <smart-button class="primary flat" disabled>disabled</smart-button>
          </div>
        </div>
      </section>
      <section id="button-flat-demo">
        <div class="module">
          <h2>Demo usage</h2>
          <br />
          <p>
            Flat buttons are printed on material. They do not lift, but fill with
            color on press.
          </p>
        </div>
        <div class="module">
          <div class="flat-demo">
            <smart-button class="primary flat">share</smart-button>
            <smart-button class="primary flat">explore</smart-button>
          </div>
          <p>Flat buttons minimize distraction from content.</p>
        </div>
        <div class="module">
          <div class="flat-demo2">
            <smart-button class="primary flat">button</smart-button>
            <smart-button class="primary flat">button</smart-button>
          </div>
          <p>Flat buttons are appropriate in dialogs.</p>
        </div>
      </section>
      <section id="button-raised">
        <h2>Raised buttons</h2>
        <div class="module">
          <h2>Specs & Behavior</h2>
          <br />
          <p>
            Raised buttons behave like a piece of material resting on another sheet
            – they lift and fill with color on press.
          </p>
        </div>
        <div class="module button-light">
          <div>
            <smart-button class="primary raised">normal</smart-button>
            <br />
            <smart-button focus class="primary raised">focused</smart-button>
            <br />
            <smart-button active class="primary raised">Pressed</smart-button>
            <br />
            <smart-button class="primary raised" disabled>disabled</smart-button>
          </div>
        </div>
      </section>
      <section id="button-raised-demo">
        <div class="module">
          <h2>Demo usage</h2>
          <br />
          <p>
            Raised buttons add dimension to mostly flat layouts. They emphasize functions
            on busy or wide spaces.
          </p>
        </div>
        <div class="module">
          <div class="raised-demo">
            <smart-button class="primary raised">force stop</smart-button>
            <smart-button class="primary raised error">uninstall</smart-button>
            <smart-button class="primary raised">clear data</smart-button>
          </div>
          <p>Raised buttons stand out more than flat buttons.</p>
        </div>
      </section>
      <section id="button-floating">
        <h2>Floating action buttons</h2>
        <div>
          <h2>A floating action button represents the primary action in an application.</h2>
          <div class="module">
            <p>A floating action button is used for a promoted action.</p>
            <p>
              Shaped like a circled icon floating above the UI, it changes color upon
              focus and lifts upon selection. When pressed, it may contain more related
              actions.
            </p>
          </div>
          <div class="module">
            <h3>Usage</h3>
            <p>
              Only one floating action button is recommended per screen to represent
              the most common action.
            </p>
            <h3>Behavior</h3>
            <p>It animates onto the screen as an expanding piece of material, by default.</p>
            <h3>Sizes</h3>
            <p>
              Default: 56 x 56dp
              <br />Mini: 40 x 40dp
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="module">
          <p>
            The floating action button should be placed 16dp minimum from the edge
            on mobile and 24dp minimum on tablet/desktop.
          </p>
        </div>
        <div class="module">
          <p>
            Raised buttons behave like a piece of material resting on another sheet
            – they lift and fill with color on press.
          </p>
        </div>
        <div class="module">
          <p>
            Raised buttons behave like a piece of material resting on another sheet
            – they lift and fill with color on press.
          </p>
        </div>
      </section>
      <section id="button-floating">
        <div class="module specs-behavior">
          <h2>Specs & Behavior</h2>
          <br />
          <p>
            Raised buttons behave like a piece of material resting on another sheet
            – they lift and fill with color on press.
          </p>
        </div>
        <div class="module button-light specs-behavior">
          <div>
            <smart-button class="secondary floating">
              <i class="material-icons">add_circle</i>
            </smart-button>
            <br />
            <smart-button class="success floating">
              <i class="material-icons">call</i>
            </smart-button>
            <br />
            <smart-button class="primary floating">
              <i class="material-icons">search</i>
            </smart-button>
            <br />
            <smart-button class="error floating" disabled>
              <i class="material-icons">replay</i>
            </smart-button>
          </div>
        </div>
      </section>
      <section id="button-floating-demo">
        <div class="module">
          <h2>Demo usage</h2>
          <br />
          <p>Floating action buttons are designed to be flexible.</p>
          <p>
            The floating action button can simply trigger an action or navigate somewhere.
            The animation of the touch ripple expands outwards as the force that causes
            changes to the UI.
          </p>
        </div>
        <div class="module">
          <div class="floating-action-area">
            <smart-button class="secondary floating" id="floating-click-action">
              <i class="material-icons">share</i>
            </smart-button>
            <smart-button
              class="secondary floating floating-click-sub-action smart-visibility-hidden"
            >
              <i class="material-icons">cast</i>
            </smart-button>
            <smart-button
              class="secondary floating floating-click-sub-action smart-visibility-hidden"
            >
              <i class="material-icons">cloud</i>
            </smart-button>
          </div>
          <p>A floating action button flinging out related actions</p>
        </div>
        <div class="module">
          <div class="floating-action-area">
            <div id="hover-area"></div>
            <smart-button
              class="primary floating smart-visibility-hidden"
              id="floating-hover-action"
            >
              <i class="material-icons">apps</i>
            </smart-button>
          </div>
          <p>
            A floating action button that spans multiple lateral screens (such as
            tabbed screens) should briefly disappear, then reappear if its action changes.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const hoverArea = document.getElementById("hover-area"),
        floatingHoverButton = document.getElementById("floating-hover-action"),
        floatingClickButton = document.getElementById("floating-click-action"),
        toggleButtons = document.getElementsByClassName("exclusive-selection");
      // progressBar = document.getElementById("progressBar"),
      // circularProgressBar = document.getElementById("progressBarCircular");
      for (var i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener("change", function(event) {
          if (event.detail.value) {
            for (var k = 0; k < toggleButtons.length; k++) {
              if (toggleButtons[k] !== this) {
                toggleButtons[k].checked = false;
              }
            }
          }
        });
      }
      hoverArea.addEventListener("mouseover", function() {
        floatingHoverButton.classList.remove("smart-visibility-hidden");
      });
      hoverArea.addEventListener("mouseout", function(event) {
        if (
          event.relatedTarget &&
          event.relatedTarget["closest"]("smart-button")
        ) {
          return;
        }
        floatingHoverButton.classList.add("smart-visibility-hidden");
      });
      floatingClickButton.addEventListener("click", function() {
        let subMenuButtons = document.getElementsByClassName(
            "floating-click-sub-action"
          ),
          changeIcon = false;
        for (let i = 0; i < subMenuButtons.length; i++) {
          if (subMenuButtons[i].classList.contains("smart-visibility-hidden")) {
            subMenuButtons[i].classList.remove("smart-visibility-hidden");
            changeIcon = true;
          } else {
            subMenuButtons[i].classList.add("smart-visibility-hidden");
          }
        }
        this.getElementsByClassName("material-icons")[0].innerHTML = changeIcon
          ? "close"
          : "share";
      });
    });
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */

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
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

/* ------------ */

.smart-demo-container {
  line-height: 24px;
  font-size: 13px;
  margin: 5% 10%;
  margin-left: 0;
  padding-top: 50px;
}

.smart-demo-container section h1 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}

.smart-demo-container section:first-of-type h1 {
  font-size: 34px;
  border-top: initial;
}

.smart-demo-container section:first-of-type div h1 {
  font-size: 20px;
}

.smart-demo-container section {
  margin-top: 80px;
}

.smart-demo-container section:first-of-type {
  margin-top: 0;
}

.smart-demo-container section div h1 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 940px;
}

.smart-demo-container nav {
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

.smart-demo-container nav ul {
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

.smart-demo-container nav li {
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

.smart-demo-container nav li a {
  text-decoration: none;
}

.smart-demo-container nav h1 {
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
  min-width: 365px;
  vertical-align: top;
}

.smart-demo-container #button-types .module:first-of-type {
  display: block;
  width: 100%;
}

.smart-demo-container .module h1,
.smart-demo-container .module h2 {
  -webkit-margin-before: 0;
  font-weight: 700;
}

.smart-demo-container #button-types .module,
.smart-demo-container #button-style .module {
  display: inline-block;
  margin-top: 30px;
}

.smart-demo-container #button-types figure {
  width: 100%;
  -webkit-margin-start: 0;
  margin-top: 40px;
}

.smart-demo-container #button-types .button-style,
.smart-demo-container #button-floating .specs-behavior {
  margin-top: 80px;
}

.smart-demo-container #button-types .button-style h1 {
  margin-top: initial;
}

.smart-demo-container #button-types .button-style:last-of-type {
  width: calc(100% / 2 + 45px);
}

.smart-demo-container #button-types .button-style:last-of-type figure {
  margin-top: initial;
}

.smart-demo-container #button-usage .usage-table {
  width: calc(100% / 2 + 45px);
}

.smart-demo-container section > h2:first-of-type {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
  padding-top: 80px;
}

.smart-demo-container #button-usage .usage-table p {
  margin-top: initial;
  margin-bottom: initial;
}

.smart-demo-container #button-usage table {
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #fff;
  font-size: 13px;
  width: 100%;
  margin-bottom: 40px;
  table-layout: auto;
}

.smart-demo-container #button-usage table tr:first-child td p {
  color: #757575;
  font-size: 13px;
  line-height: 24px;
  margin: 0 0 0.5em;
  max-width: 760px;
  word-wrap: break-word;
}

.smart-demo-container #button-usage table td {
  border: 1px solid #eee;
  line-height: 24px;
  padding: 12px 12px 12px 24px;
  color: #212121;
  vertical-align: middle;
}

.smart-demo-container #button-flat .button-light,
.smart-demo-container #button-flat .button-dark,
.smart-demo-container #button-raised .button-light,
.smart-demo-container #button-raised .button-dark,
.smart-demo-container #button-floating .button-light,
.smart-demo-container #button-floating .button-dark {
  text-align: center;
}

.smart-demo-container #button-flat .button-dark p,
.smart-demo-container #button-flat .button-light p,
.smart-demo-container #button-raised .button-dark p,
.smart-demo-container #button-raised .button-light p,
.smart-demo-container #button-floating .button-light p,
.smart-demo-container #button-floating .button-dark p,
.smart-demo-container #repeat-buttons-specs-behavior .repeat-button-light p,
.smart-demo-container #repeat-buttons-specs-behavior .repeat-button-dark p {
  margin: initial;
  -webkit-margin-before: initial;
  -webkit-margin-after: initial;
  text-align: left;
}

.smart-demo-container #button-flat .button-dark p:first-of-type,
.smart-demo-container #button-flat .button-light p:first-of-type,
.smart-demo-container #button-raised .button-dark p:first-of-type,
.smart-demo-container #button-raised .button-light p:first-of-type,
.smart-demo-container
  #repeat-buttons-specs-behavior
  .repeat-button-light
  p:first-of-type,
.smart-demo-container
  #repeat-buttons-specs-behavior
  .repeat-button-dark
  p:first-of-type {
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
}

.smart-demo-container #button-flat .button-light div,
.smart-demo-container #button-raised .button-light div,
.smart-demo-container #button-floating .button-light div {
  background-color: #eeeeee;
  padding: 50px;
}

.smart-demo-container #button-flat .button-dark > div,
.smart-demo-container #button-raised .button-dark > div,
.smart-demo-container #button-floating .button-dark > div {
  background-color: #333333;
  color: #fff;
  text-align: center;
  padding: 50px;
}

.smart-demo-container #button-flat .module,
.smart-demo-container #button-raised .module,
.smart-demo-container #button-floating .module {
  height: 100%;
}

.smart-demo-container #button-flat .module h2,
.smart-demo-container #button-raised .module h2,
.smart-demo-container #button-floating .module h2,
.smart-demo-container #button-floating-demo .module h2 {
  font-weight: 500;
}

.smart-demo-container #button-flat-demo .flat-demo,
.smart-demo-container #button-flat-demo .flat-demo2 {
  position: relative;
  height: 700px;
  background-color: #eeeeee;
  text-align: center;
  background-image: url(../../../images/flat-button-demo.png);
  background-size: cover;
  background-position: center;
}

.smart-demo-container #button-flat-demo .flat-demo button,
.smart-demo-container #button-flat-demo .flat-demo2 button {
  color: var(--smart-hover-color);
}

.smart-demo-container #button-flat-demo .flat-demo smart-button {
  position: absolute;
  top: calc(50% + 45px);
  left: 0;
}

.smart-demo-container #button-flat-demo .flat-demo smart-button:nth-child(2) {
  left: 95px;
}

.smart-demo-container #button-flat-demo .flat-demo2 {
  background-image: url(../../../images/flat-button-demo2.png);
}

.smart-demo-container #button-flat-demo .flat-demo2 smart-button {
  position: absolute;
  top: calc(50% + 40px);
  left: calc(100% - 130px);
}

.smart-demo-container #button-flat-demo .flat-demo2 smart-button:nth-child(2) {
  left: calc(100% - 225px);
}

.smart-demo-container #button-flat-demo h2 {
  font-weight: 500;
}

.smart-demo-container #button-floating-demo .floating-action-area,
.smart-demo-container #button-raised-demo .raised-demo,
.smart-demo-container #button-raised-demo .raised-demo2,
.smart-demo-container .floating-demo-start,
.smart-demo-container .raised-demo-start,
.smart-demo-container .flat-demo-start {
  position: relative;
  height: 700px;
  background-color: #eeeeee;
  text-align: center;
  background-image: url(../../../images/raised-button-demo.png);
  background-size: cover;
  background-position: center;
}

.smart-demo-container .raised-demo-start smart-button,
.smart-demo-container #button-raised-demo .raised-demo smart-button {
  position: absolute;
  top: 25%;
  left: 18%;
}

.smart-demo-container .raised-demo-start smart-button:nth-child(2),
.smart-demo-container
  #button-raised-demo
  .raised-demo
  smart-button:nth-child(2) {
  left: calc(22% + 125px);
}

.smart-demo-container .raised-demo-start smart-button:nth-child(3),
.smart-demo-container
  #button-raised-demo
  .raised-demo
  smart-button:nth-child(3) {
  top: 68%;
  left: 18%;
}

.smart-demo-container #button-raised-demo .raised-demo2 {
  background-image: url(../../../images/raised-button-demo2.png);
}

.smart-demo-container #button-raised-demo .raised-demo2 smart-button {
  position: absolute;
  top: 42.5%;
  left: 14%;
  width: 100px;
}

.smart-demo-container #button-raised-demo .raised-demo2 smart-button button {
  --smart-material-background-color: transparent;
  color: #2396f1;
}

.smart-demo-container
  #button-raised-demo
  .raised-demo2
  smart-button:nth-child(2) {
  left: calc(14% + 115px);
}

.smart-demo-container
  #button-raised-demo
  .raised-demo2
  smart-button:nth-child(3) {
  top: 71%;
}

.smart-demo-container #button-floating-demo .floating-action-area {
  background-image: url(../../../images/Album.png);
}

.smart-demo-container #button-floating-demo .floating-action-area div h2 {
  pointer-events: none;
}

.smart-demo-container #button-floating-demo .floating-action-area div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.smart-demo-container #button-floating-demo .floating-action-area smart-button {
  position: absolute;
  top: 70%;
  left: calc(100% - 70px);
  width: 56px;
  height: 56px;
}

.smart-demo-container
  #button-floating-demo
  .floating-action-area
  #floating-hover-action {
  position: absolute;
  top: 70%;
  left: calc(50% - 20px);
}

.smart-demo-container
  #button-floating-demo
  .floating-action-area
  .floating-click-sub-action:nth-of-type(2) {
  top: 60%;
  transition: top 0.2s ease-in;
  left: calc(100% - 65px);
}

.smart-demo-container
  #button-floating-demo
  .floating-action-area
  .floating-click-sub-action:nth-of-type(3) {
  top: 50%;
  transition: top 0.2s ease-in;
  left: calc(100% - 65px);
}

.smart-demo-container
  #button-floating-demo
  .floating-action-area
  .floating-click-sub-action.smart-visibility-hidden:nth-of-type(2),
.smart-demo-container
  #button-floating-demo
  .floating-action-area
  .floating-click-sub-action.smart-visibility-hidden:nth-of-type(3) {
  top: 70%;
  transition: animation, visibility 0.2s ease-out;
}

.smart-demo-container
  #button-floating-demo
  .floating-action-area
  .floating-click-sub-action.smart-visibility-hidden:nth-of-type(2) {
  animation: material-sub-button-top-hide 0.2s ease-out;
}

.smart-demo-container
  #button-floating-demo
  .floating-action-area
  .floating-click-sub-action.smart-visibility-hidden:nth-of-type(3) {
  animation: material-sub-button-middle-hide 0.2s ease-out;
}

@keyframes material-sub-button-top-hide {
  0% {
    top: 60%;
  }

  100% {
    top: 70%;
  }
}

@keyframes material-sub-button-middle-hide {
  0% {
    top: 50%;
  }

  100% {
    top: 70%;
  }
}

.smart-demo-container .floating-demo-start {
  background-image: url(../../../images/floating-demo-start.png);
}

.smart-demo-container .floating-demo-start smart-button {
  position: absolute;
  top: 61.5%;
  left: calc(100% - 66px);
  width: 60px;
  height: 60px;
}

.smart-demo-container .raised-demo-start {
  background-image: url(../../../images/raised-button-demo.png);
}

.smart-demo-container .flat-demo-start {
  background-image: url(../../../images/flat-demo-start.png);
}

.smart-demo-container .flat-demo-start smart-button {
  background-color: transparent;
  position: absolute;
  top: 60%;
  left: 36.5%;
}

.smart-demo-container .flat-demo-start smart-button:nth-child(2) {
  left: 62.5%;
}

.smart-demo-container #button-flat .button-dark smart-button,
.smart-demo-container #button-flat .button-light smart-button,
.smart-demo-container #button-raised .button-dark smart-button,
.smart-demo-container #button-raised .button-light smart-button,
.smart-demo-container #button-floating .button-dark smart-button,
.smart-demo-container #button-floating .button-light smart-button {
  margin-top: 35px;
}

.smart-demo-container #toggle-button .toggle-button-container {
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
}

.smart-demo-container #toggle-button .toggle-button-container div {
  display: flex;
  height: 30px;
  width: 50%;
  border-radius: 2px;
  box-shadow: 0.2px 1px 1px 1px rgba(0, 0, 0, 0.3);
  background-color: #fbfbfb;
  overflow: hidden;
}

.smart-demo-container #toggle-button .toggle-button-no-selection div {
  box-shadow: initial;
  border-radius: 2px;
  background-color: initial;
}

.smart-demo-container
  #toggle-button
  .toggle-button-container
  smart-toggle-button {
  height: 100%;
  flex-grow: 1;
  border-radius: initial;
  box-shadow: initial;
  background-color: initial;
}

.smart-demo-container
  #toggle-button
  .toggle-button-container
  smart-toggle-button
  button {
  display: flex;
  justify-content: center;
}

.smart-demo-container
  #toggle-button
  .toggle-button-container
  smart-toggle-button[checked] {
  border-right: 1px solid rgba(0, 0, 0, 0.45);
}

.smart-demo-container
  #toggle-button
  .toggle-button-container
  smart-toggle-button[checked]:last-of-type {
  border-right: initial;
}

.smart-demo-container #toggle-button-icons .module:nth-child(2),
.smart-demo-container #toggle-button-icons .module:nth-child(4) {
  width: calc(100% / 2);
}

.smart-demo-container .toggle-button-icons-container {
  background-color: #eeeeee;
  height: 350px;
}

.smart-demo-container #radio-button .radio-buttons-container-light,
.smart-demo-container #radio-button .radio-buttons-container-dark,
.smart-demo-container #check-box .check-box-container-light,
.smart-demo-container #check-box .check-box-container-dark,
.smart-demo-container #switch-button .switch-button-container-light,
.smart-demo-container #switch-button .switch-button-container-dark {
  background-color: #eeeeee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 150px;
}

.smart-demo-container #radio-button .radio-buttons-container-dark,
.smart-demo-container #check-box .check-box-container-dark,
.smart-demo-container #switch-button .switch-button-container-dark {
  background-color: #000;
}

.smart-demo-container #toggle-button-icons table,
.smart-demo-container #led-button table,
.smart-demo-container #radio-button-light table,
.smart-demo-container #radio-button-dark table,
.smart-demo-container #check-box-light table,
.smart-demo-container #check-box-dark table,
.smart-demo-container #switch-button-light table,
.smart-demo-container #switch-button-dark table {
  width: 85%;
  height: 65%;
  margin-left: 7.5%;
  margin-top: 5%;
  text-align: center;
}

.smart-demo-container #radio-button-light .module:nth-child(1) p,
.smart-demo-container #radio-button-dark .module:nth-child(1) p,
.smart-demo-container #check-box-light .module:nth-child(1) p,
.smart-demo-container #check-box-dark .module:nth-child(1) p,
.smart-demo-container #switch-button-light .module:nth-child(1) p,
.smart-demo-container #switch-button-dark .module:nth-child(1) p {
  margin-bottom: initial;
  -webkit-margin-before: initial;
}

.smart-demo-container #led-button .module:nth-child(3),
.smart-demo-container #radio-button-light .module:nth-child(2),
.smart-demo-container #radio-button-dark .module:nth-child(2),
.smart-demo-container #check-box-light .module:nth-child(2),
.smart-demo-container #check-box-dark .module:nth-child(2),
.smart-demo-container #switch-button-light .module:nth-child(2),
.smart-demo-container #switch-button-dark .module:nth-child(2) {
  width: calc(100% / 2);
}

.smart-demo-container #led-button .led-buttons-table,
.smart-demo-container #radio-button-light .radio-buttons-table-light,
.smart-demo-container #radio-button-dark .radio-buttons-table-dark,
.smart-demo-container #check-box-light .check-box-table-light,
.smart-demo-container #check-box-dark .check-box-table-dark,
.smart-demo-container #switch-button-light .switch-button-table-light,
.smart-demo-container #switch-button-dark .switch-buttons-table-dark {
  height: 350px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.smart-demo-container #radio-button-dark .radio-buttons-table-dark,
.smart-demo-container #check-box-dark .check-box-table-dark,
.smart-demo-container #switch-button-dark .switch-buttons-table-dark {
  background-color: #000;
  color: rgba(255, 255, 255, 0.5);
}

.smart-demo-container #radio-button-light .radio-buttons-table-light,
.smart-demo-container #check-box-light .check-box-table-light,
.smart-demo-container #switch-button-light .switch-button-table-light {
  color: rgba(0, 0, 0, 0.5);
}

.smart-demo-container #radio-button-light smart-radio-button.focused,
.smart-demo-container #radio-button-dark smart-radio-button.focused,
.smart-demo-container #check-box-light smart-check-box.focused,
.smart-demo-container #check-box-dark smart-check-box.focused {
  background-color: var(--smart-material-focused-background-color);
}

.smart-demo-container #radio-button-light smart-radio-button[checked].focused,
.smart-demo-container #radio-button-dark smart-radio-button[checked].focused,
.smart-demo-container #check-box-light smart-check-box[checked].focused,
.smart-demo-container #check-box-dark smart-check-box[checked].focused,
.smart-demo-container #switch-button-light smart-switch-button[checked].focused,
.smart-demo-container #switch-button-dark smart-switch-button[checked].focused {
  background-color: var(--smart-material-focused-checked-background-color);
}

.smart-demo-container
  #switch-button-light
  smart-switch-button[checked].focused
  .smart-thumb::before,
.smart-demo-container
  #switch-button-dark
  smart-switch-button[checked].focused
  .smart-thumb::before,
.smart-demo-container
  #switch-button-light
  smart-switch-button[checked].pressed
  .smart-thumb::before,
.smart-demo-container
  #switch-button-dark
  smart-switch-button[checked].pressed
  .smart-thumb::before,
.smart-demo-container
  #switch-button-light
  smart-switch-button.focused
  .smart-thumb::before,
.smart-demo-container
  #switch-button-dark
  smart-switch-button.focused
  .smart-thumb::before,
.smart-demo-container
  #switch-button-light
  smart-switch-button.pressed
  .smart-thumb::before,
.smart-demo-container
  #switch-button-dark
  smart-switch-button.pressed
  .smart-thumb::before {
  transform: scale(1);
  animation: button-wave-effect 0.1s ease-in;
  background-color: var(--smart-material-pressed-background-color);
}

.smart-demo-container #led-button table,
.smart-demo-container #radio-button-light table,
.smart-demo-container #radio-button-dark table,
.smart-demo-container #check-box-light table,
.smart-demo-container #check-box-dark table,
.smart-demo-container #switch-button-light table,
.smart-demo-container #switch-button-dark table {
  margin-top: initial;
  margin-left: initial;
  border-collapse: collapse;
  table-layout: fixed;
}

.smart-demo-container #led-button table tr:nth-child(3) p {
  color: #fff;
}

.smart-demo-container #led-button table tr:nth-child(3) {
  background-color: #000;
}

.smart-demo-container .toggle-button-icons-container smart-toggle-button {
  background-color: transparent;
  box-shadow: initial;
}

.smart-demo-container .toggle-button-icons-container smart-toggle-button.hover {
  background-color: var(--smart-material-hovered-background-color);
}

.smart-demo-container
  .toggle-button-icons-container
  smart-toggle-button.focused {
  background-color: var(--smart-material-focused-background-color);
}

.smart-demo-container
  .toggle-button-icons-container
  smart-toggle-button.pressed
  button {
  color: var(--smart-material-pressed-background-color);
}

.smart-demo-container
  .toggle-button-icons-container
  smart-toggle-button.pressed
  button {
  color: var(--smart-material-pressed-color);
  background-color: rgba(0, 0, 0, 0.2);
}

.smart-demo-container #toggle-button-icons h3 {
  margin-top: initial;
  padding: 3.5%;
  padding-bottom: initial;
  color: var(--smart-material-color);
  font-weight: 400;
  color: #a9a9a9;
}

.smart-demo-container .toggle-button-icons-themes {
  display: flex;
  justify-content: center;
}

.smart-demo-container .toggle-button-icons-themes div {
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.smart-demo-container .toggle-button-icons-themes smart-toggle-button {
  width: 75px;
  height: 75px;
  font-size: 40px;
}

.smart-demo-container
  .toggle-button-icons-themes
  smart-toggle-button
  .material-icons {
  font-size: inherit;
}

.smart-demo-container .toggle-button-icons-themes smart-toggle-button button {
  font-size: inherit;
}

.smart-demo-container .toggle-button-icons-themes div:nth-child(1) {
  background-color: #2396f1;
  color: white;
}

.smart-demo-container .toggle-button-icons-themes div:nth-child(2) {
  background-color: #00bcd5;
}

.smart-demo-container
  .toggle-button-icons-themes
  div:nth-child(2)
  smart-toggle-button
  button {
  color: #000;
}

.smart-demo-container .toggle-button-icons-themes div:nth-child(3) {
  background-color: #eeeeee;
  color: #d94634;
}

.smart-demo-container .toggle-button-icons-themes div:nth-child(4) {
  background-color: #000;
  color: #fff;
}

.smart-demo-container
  .toggle-button-icons-themes
  div:nth-child(4)
  smart-toggle-button {
  --smart-material-color: #fff;
  --smart-material-pressed-color: #fff;
  --smart-material-focused-background-color: #4c4c4c;
  --smart-material-hovered-background-color: #383838;
  --smart-material-pressed-background-color: #686868;
}

.smart-demo-container
  .toggle-button-icons-themes
  div:nth-child(4)
  smart-toggle-button
  button {
  color: #fff;
}

.smart-demo-container .toggle-button-icons-themes div:nth-child(5) {
  background-color: #000;
  color: #db4534;
}

.smart-demo-container
  .toggle-button-icons-themes
  div:nth-child(5)
  smart-toggle-button {
  --smart-material-color: #fff;
  --smart-material-pressed-color: #db4534;
  --smart-material-focused-background-color: #3f2803;
  --smart-material-hovered-background-color: #601209;
  --smart-material-pressed-background-color: #6a433e;
}

.smart-demo-container
  .toggle-button-icons-themes
  div:nth-child(5)
  smart-toggle-button
  button {
  color: #db4534;
}

.smart-demo-container .repeat-buttons-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #eeeeee;
  padding: 10px;
}

.smart-demo-container .progress-bar-container,
.smart-demo-container .progress-bar-container-dark-theme {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #eeeeee;
  padding: 10px;
}

.smart-demo-container .progress-bar-container-dark-theme {
  background-color: #000;
}

.smart-demo-container #progressBarCircularControl .smart-label-container,
.smart-demo-container #progressBarCircularControl2 .smart-label-container,
.smart-demo-container #progressBarAnimated .smart-label-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.smart-demo-container
  #progressBarCircularControl
  .smart-label-container
  smart-repeat-button {
  width: 100%;
  height: 50%;
}

.smart-demo-container
  #progressBarAnimated
  .smart-label-container
  smart-power-button {
  width: 100%;
  height: 100%;
}

.smart-demo-container
  #progressBarAnimated
  .smart-label-container
  smart-power-button
  .smart-input::after {
  font-size: 30px;
}

.smart-demo-container #progressBarCircularControl2 .smart-label-container {
  flex-direction: row;
}

.smart-demo-container
  #progressBarCircularControl2
  .smart-label-container
  smart-repeat-button {
  width: 50%;
  height: 100%;
}

.smart-demo-container #repeat-button-demo .repeat-buttons-container {
  flex-direction: column;
  height: 200px;
}

.smart-demo-container .repeat-buttons-container .material-icons {
  font-size: 35px;
}

.smart-demo-container .repeat-buttons-container smart-repeat-button {
  width: 50px;
  height: 50px;
}

.smart-demo-container #repeat-buttons-specs-behavior .module > div,
.smart-demo-container #power-button .power-button-light > div,
.smart-demo-container #power-button .power-button-dark > div,
.smart-demo-container #power-button .power-button-flat-light > div,
.smart-demo-container #power-button .power-button-flat-dark > div,
.smart-demo-container #led-button .led-button-light > div,
.smart-demo-container #led-button .led-button-dark > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 350px;
  background-color: #eeeeee;
}

.smart-demo-container #power-button .power-button-dark > div,
.smart-demo-container #led-button .led-button-dark > div,
.smart-demo-container #power-button .power-button-flat-dark > div {
  background-color: #333333;
  color: #fff;
  text-align: center;
  padding: 50px;
}

.smart-demo-container
  #repeat-buttons-specs-behavior
  .module:last-of-type
  > div {
  background-color: #000;
}

.smart-demo-container #repeat-buttons-specs-behavior smart-repeat-button,
.smart-demo-container #power-button .power-button-light smart-power-button,
.smart-demo-container #power-button .power-button-flat-light smart-power-button,
.smart-demo-container #power-button .power-button-flat-dark smart-power-button,
.smart-demo-container #power-button .power-button-dark smart-power-button {
  width: 50px;
  height: 50px;
}

/* Firefox Specific CSS */
@-moz-document url-prefix() {
  .smart-demo-container #power-button .power-button-light smart-power-button,
  .smart-demo-container
    #power-button
    .power-button-flat-light
    smart-power-button,
  .smart-demo-container
    #power-button
    .power-button-flat-dark
    smart-power-button,
  .smart-demo-container #power-button .power-button-dark smart-power-button {
    margin-top: 35px;
  }
}

.smart-demo-container
  #power-button
  .power-button-light
  > div
  smart-power-button:nth-child(3)
  .smart-input,
.smart-demo-container
  #power-button
  .power-button-dark
  > div
  smart-power-button:nth-child(3)
  .smart-input,
.smart-demo-container
  #power-button
  .power-button-flat-light
  > div
  smart-power-button:nth-child(3)
  .smart-input,
.smart-demo-container
  #power-button
  .power-button-flat-dark
  > div
  smart-power-button:nth-child(3)
  .smart-input {
  background-color: var(--smart-material-focused-background-color);
}

.smart-demo-container .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #eeeeee;
}

.module h3 {
  margin-top: 30px;
}

.module p {
  margin-bottom: 20px;
}

.module img {
  width: 100%;
}

.smart-demo-container
  .floating-action-area
  #floating-hover-action.smart-visibility-hidden {
  animation: material-button-hide 0.2s ease-out;
  transition: animation, visibility 0.2s ease-out;
}

.smart-demo-container .floating-action-area #floating-hover-action {
  animation: material-button-appear 0.2s ease-in;
}

.smart-demo-container
  .floating-action-area
  #floating-hover-action.material-dark.floating:active {
  box-shadow: 0.2px 5px 10px 3px rgba(0, 0, 0, 0.3);
}

@keyframes material-button-appear {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes material-button-hide {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
</style>
