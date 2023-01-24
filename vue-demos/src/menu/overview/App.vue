<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Menus display a list of choices on a transient sheet of material.</h2>
          <div class="module">
            <p>
              Menus appear upon interaction with a button, action, or other control.
              They display a list of choices, with one choice per line.
            </p>
            <p>
              Menu items may be disabled if not applicable to a certain context. Contextual
              menus dynamically change their available menu items based on the current
              state of the app.
            </p>
          </div>
          <div class="module">
            <h3>Types</h3>
            <p>
              Simple menus (mobile and tablet)
              <br />Cascading menus (desktop)
              <br />Tree menus
              <br />List menus
            </p>
            <h3>Elevation</h3>
            <p>Menus dropdowns appear above other in-app elements.</p>
            <h3>Behavior</h3>
            <p>
              Scrollable
              <br />Minimizable
            </p>
          </div>
          <div class="module"></div>
        </div>
      </section>
      <section id="menu-usage">
        <h2>Usage</h2>
        <div class="module module-wide">
          <p>
            A menu is a temporary piece of material that appears upon interaction
            with a button, action, pointer, or other control. It contains at least
            two menu items.
          </p>
          <p>
            Each menu item consists of a discrete option or action that can affect
            the app, the view, or selected elements within a view.
          </p>
        </div>
        <div class="module">
          <div id="menu1Container">
            <smart-button id="menu1Token" class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-menu id="menu1" class="material animation" mode="dropDown">
              <smart-menu-item label="Refresh"></smart-menu-item>
              <smart-menu-item label="Settings"></smart-menu-item>
              <smart-menu-item label="Send feedback"></smart-menu-item>
              <smart-menu-item label="Help"></smart-menu-item>
              <smart-menu-item label="Signout"></smart-menu-item>
            </smart-menu>
          </div>
          <div>
            The action overflow in the app bar will emit a menu. It contains five
            menu items: “Refresh”, “Settings”, “Send feedback”,“Help,” and “Signout”.
          </div>
        </div>
        <div class="module">
          <h3>Menu labels</h3>
          <p>
            The label of a button or control should concisely and accurately reflect
            the items within the menu. Menu bars typically use single words as labels,
            like “file,” “view,” and “edit.” Other contexts may require longer labels.
          </p>
          <h3>Disabled menu options</h3>
          <p>
            Menus display a consistent set of menu items. A menu item may be enabled
            or disabled based on the current state of the application.
          </p>
        </div>
        <div class="module module-wide">
          <div id="menu2Container">
            <smart-menu id="menu2" class="material animation" checkboxes>
              <smart-menu-items-group>
                File
                <smart-menu-item shortcut="Ctrl+N">New</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+0">Open</smart-menu-item>
                <smart-menu-items-group>
                  Open Containing Folder
                  <smart-menu-item>Explorer</smart-menu-item>
                  <smart-menu-item>cmd</smart-menu-item>
                </smart-menu-items-group>
                <smart-menu-item shortcut="Ctrl+S" disabled>Save</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+Alt+S" separator>Save As...</smart-menu-item>
                <smart-menu-item shortcut="Alt+F4">Exit</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Edit
                <smart-menu-item shortcut="Ctrl+Z">Undo</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+Y" separator>Redo</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+X">Cut</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+C">Copy</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+V" disabled>Paste</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group checkable check-mode="checkbox">
                View
                <smart-menu-item shortcut="Ctrl+W, S" checked>Solution Explorer</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+\, Ctrl+M" checked>Team Explorer</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+W, L">Server Explorer</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group checkable check-mode="radioButton">
                Encoding
                <smart-menu-item>Encode in ANSI</smart-menu-item>
                <smart-menu-item>Encode in UTF-8</smart-menu-item>
                <smart-menu-item>Encode in UTF-8-BOM</smart-menu-item>
                <smart-menu-item>Encode in UTCS-2 BE BOM</smart-menu-item>
                <smart-menu-item>Encode in UTCS-2 LE BOM</smart-menu-item>
              </smart-menu-items-group>
            </smart-menu>
          </div>
          <div>
            The title “View” accurately describes the unifying characteristic of the
            menu items it contains.
          </div>
        </div>
        <div class="module module-wide">
          <h3>Contextual menus</h3>
          <p>
            Contextual menus dynamically change their available menu items based on
            the current state of the application.
          </p>
          <ul>
            <li>Menu items that are irrelevant to the current context may be removed</li>
            <li>
              Menu items which are relevant but need certain conditions to be met may
              be disabled. For example, the Copy menu option becomes enabled when text
              is selected.
            </li>
          </ul>
          <h3>Single menu-item states</h3>
          <p>
            Some app states may result in a contextual menu with only a single menu
            item. For example, when highlighting text on a web page, Android display
            only the Copy menu item, as users cannot cut or paste text.
          </p>
        </div>
        <div class="module">
          <div id="menu3Container">
            <smart-button class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-button class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-button class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-button class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-button class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-button class="material flat menu-token">
              <i class="material-icons">&#xE5D4;</i>
            </smart-button>
            <smart-menu id="menu3" class="material animation" mode="dropDown">
              <smart-menu-item label="<i class='material-icons'>&#xE417;</i> Preview"></smart-menu-item>
              <smart-menu-item label="<i class='material-icons'>&#xE80D;</i> Share"></smart-menu-item>
              <smart-menu-item label="<i class='material-icons'>&#xE157;</i> Get link" separator></smart-menu-item>
              <smart-menu-item label="<i class='material-icons'>&#xE14D;</i> Make a copy"></smart-menu-item>
              <smart-menu-item label="<i class='material-icons'>&#xE2C4;</i> Download" separator></smart-menu-item>
              <smart-menu-item label="<i class='material-icons'>&#xE872;</i> Remove"></smart-menu-item>
            </smart-menu>
          </div>
          <div>Contextual menu</div>
        </div>
      </section>
      <section id="menu-items">
        <h2>Menu items</h2>
        <div class="module">
          <h3>Single-line display</h3>
          <p>
            Each menu item is limited to a single line of text (a single word or short
            phrase) that describes the action it will perform when selected.
          </p>
          <p>Menu items may also contain:</p>
          <ul>
            <li>Icons and helper text, like keyboard shortcuts</li>
            <li>Controls like checkmarks to indicate multiple selected items or states</li>
          </ul>
          <h3>Menu ordering</h3>
          <p>
            Menus with static content should have the most frequently used menu items
            placed at the top of the menu.
          </p>
          <p>
            Menus with dynamic content may have other behavior, such as placing previously
            used fonts at the top of the menu. The order can change based on user actions.
          </p>
          <h3>Menu nesting</h3>
          <p>
            Menu items can reveal nested submenus. Ideally, limit nesting to one level
            deep, as it can be difficult to navigate multiple nested submenus.
          </p>
          <h3>Open direction</h3>
          <p>
            Submenu open direction (dropdown position) can be also specified. Available
            options are: 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'overlay-left',
            'overlay-right', and 'auto' (behaves like 'bottom-right', but also has
            browser bounds detection).
          </p>
          <h3>Disabled actions</h3>
          <p>
            Displaying actions as disabled, rather than removing them, lets the user
            know they exist under the right conditions.
          </p>
          <p>
            For example, Redo is disabled when there is nothing to redo. Cut and Copy
            are disabled until content is selected.
          </p>
          <h3>Scrollable content</h3>
          <p>
            If the height of the main Menu or a submenu is specified and the content
            overflows, the content becomes scrollable.
          </p>
        </div>
        <div class="module">
          <div class="vertical-menu-container">
            <smart-menu id="menu4" class="material animation" mode="vertical" checkboxes>
              <smart-menu-items-group label="File">
                <smart-menu-item label="New" shortcut="Ctrl+N"></smart-menu-item>
                <smart-menu-item label="Open" shortcut="Ctrl+0"></smart-menu-item>
                <smart-menu-items-group label="Open Containing Folder">
                  <smart-menu-item label="Explorer"></smart-menu-item>
                  <smart-menu-item label="cmd"></smart-menu-item>
                </smart-menu-items-group>
                <smart-menu-item label="Save" shortcut="Ctrl+S" disabled></smart-menu-item>
                <smart-menu-item label="Save As..." shortcut="Ctrl+Alt+S" separator></smart-menu-item>
                <smart-menu-item label="Exit" shortcut="Alt+F4"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="Edit">
                <smart-menu-item label="Undo" shortcut="Ctrl+Z"></smart-menu-item>
                <smart-menu-item label="Redo" shortcut="Ctrl+Y" separator></smart-menu-item>
                <smart-menu-item label="Cut" shortcut="Ctrl+X"></smart-menu-item>
                <smart-menu-item label="Copy" shortcut="Ctrl+C"></smart-menu-item>
                <smart-menu-item label="Paste" shortcut="Ctrl+V" disabled></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="Encoding">
                <smart-menu-item label="Encode in ANSI"></smart-menu-item>
                <smart-menu-item label="Encode in UTF-8"></smart-menu-item>
                <smart-menu-item label="Encode in UTF-8-BOM"></smart-menu-item>
                <smart-menu-item label="Encode in UTCS-2 BE BOM"></smart-menu-item>
                <smart-menu-item label="Encode in UTCS-2 LE BOM" separator></smart-menu-item>
                <smart-menu-items-group label="Character sets">
                  <smart-menu-items-group label="Cyrillic">
                    <smart-menu-item label="ISO 8859-5"></smart-menu-item>
                    <smart-menu-item label="KOI8-R"></smart-menu-item>
                    <smart-menu-item label="KOI8-U"></smart-menu-item>
                    <smart-menu-item label="Windows-1251"></smart-menu-item>
                  </smart-menu-items-group>
                  <smart-menu-items-group label="Chinese">
                    <smart-menu-item label="Big5 (Traditional)"></smart-menu-item>
                    <smart-menu-item label="GB2312 (Simplified)"></smart-menu-item>
                  </smart-menu-items-group>
                  <smart-menu-items-group label="Western European">
                    <smart-menu-item label="ISO 8859-1"></smart-menu-item>
                    <smart-menu-item label="ISO 8859-15"></smart-menu-item>
                    <smart-menu-item label="OEM 850"></smart-menu-item>
                    <smart-menu-item label="Windows-1252"></smart-menu-item>
                  </smart-menu-items-group>
                </smart-menu-items-group>
              </smart-menu-items-group>
              <smart-menu-items-group label="Show" checkable check-mode="checkbox">
                <smart-menu-item label="Grid lines" checked></smart-menu-item>
                <smart-menu-item label="Page breaks"></smart-menu-item>
                <smart-menu-item label="Rules" checked></smart-menu-item>
              </smart-menu-items-group>
            </smart-menu>
          </div>
          <div>Vertical Menu with nested items and auto/bottom-right open direction</div>
        </div>
        <div class="module"></div>
        <div class="module module-wide">
          <div class="vertical-menu-container">
            <smart-menu
              id="menu5"
              class="material animation"
              mode="vertical"
              checkboxes
              drop-down-position="top-left"
            >
              <smart-menu-items-group label="File">
                <smart-menu-item label="New" shortcut="Ctrl+N"></smart-menu-item>
                <smart-menu-item label="Open" shortcut="Ctrl+0"></smart-menu-item>
                <smart-menu-item label="Save" shortcut="Ctrl+S" disabled></smart-menu-item>
                <smart-menu-item label="Save As..." shortcut="Ctrl+Alt+S" separator></smart-menu-item>
                <smart-menu-item label="Exit" shortcut="Alt+F4"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="Edit">
                <smart-menu-item label="Undo" shortcut="Ctrl+Z"></smart-menu-item>
                <smart-menu-item label="Redo" shortcut="Ctrl+Y" separator></smart-menu-item>
                <smart-menu-item label="Cut" shortcut="Ctrl+X"></smart-menu-item>
                <smart-menu-item label="Copy" shortcut="Ctrl+C"></smart-menu-item>
                <smart-menu-item label="Paste" shortcut="Ctrl+V" disabled></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="Encoding">
                <smart-menu-item label="Encode in ANSI"></smart-menu-item>
                <smart-menu-item label="Encode in UTF-8"></smart-menu-item>
                <smart-menu-item label="Encode in UTF-8-BOM"></smart-menu-item>
                <smart-menu-item label="Encode in UTCS-2 BE BOM"></smart-menu-item>
                <smart-menu-item label="Encode in UTCS-2 LE BOM" separator></smart-menu-item>
              </smart-menu-items-group>
            </smart-menu>
          </div>
          <div>Vertical Menu with nested items and top-left open direction</div>
        </div>
      </section>
      <section id="tree-menu">
        <h2>Tree menu</h2>
        <div class="module">
          A tree menu is a vertical menu that shows submenus with indentation under
          the parent item, akin to a tree view.
        </div>
        <div class="module module-wide">
          <div class="vertical-menu-container">
            <smart-menu id="menu6" class="material animation" mode="tree">
              <smart-menu-items-group>
                File
                <smart-menu-item shortcut="Ctrl+N">New</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+0">Open</smart-menu-item>
                <smart-menu-items-group>
                  Open Containing Folder
                  <smart-menu-item>Explorer</smart-menu-item>
                  <smart-menu-item>cmd</smart-menu-item>
                </smart-menu-items-group>
                <smart-menu-item shortcut="Ctrl+S" disabled>Save</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+Alt+S" separator>Save As...</smart-menu-item>
                <smart-menu-item shortcut="Alt+F4">Exit</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Edit
                <smart-menu-item shortcut="Ctrl+Z">Undo</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+Y" separator>Redo</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+X">Cut</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+C">Copy</smart-menu-item>
                <smart-menu-item shortcut="Ctrl+V" disabled>Paste</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Encoding
                <smart-menu-item>Encode in ANSI</smart-menu-item>
                <smart-menu-item>Encode in UTF-8</smart-menu-item>
                <smart-menu-item>Encode in UTF-8-BOM</smart-menu-item>
                <smart-menu-item>Encode in UTCS-2 BE BOM</smart-menu-item>
                <smart-menu-item separator>Encode in UTCS-2 LE BOM</smart-menu-item>
                <smart-menu-items-group>
                  Character sets
                  <smart-menu-items-group>
                    Cyrillic
                    <smart-menu-item>ISO 8859-5</smart-menu-item>
                    <smart-menu-item>KOI8-R</smart-menu-item>
                    <smart-menu-item>KOI8-U</smart-menu-item>
                    <smart-menu-item>Windows-1251</smart-menu-item>
                  </smart-menu-items-group>
                  <smart-menu-items-group>
                    Chinese
                    <smart-menu-item>Big5 (Traditional)</smart-menu-item>
                    <smart-menu-item>GB2312 (Simplified)</smart-menu-item>
                  </smart-menu-items-group>
                  <smart-menu-items-group>
                    Western European
                    <smart-menu-item>ISO 8859-1</smart-menu-item>
                    <smart-menu-item>ISO 8859-15</smart-menu-item>
                    <smart-menu-item>OEM 850</smart-menu-item>
                    <smart-menu-item>Windows-1252</smart-menu-item>
                  </smart-menu-items-group>
                </smart-menu-items-group>
              </smart-menu-items-group>
            </smart-menu>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const menu1Container = document.getElementById("menu1Container"),
        menu3Container = document.getElementById("menu3Container"),
        //listMenu2Container = document.getElementById("listMenu2Container"),
        menuTokens = document.getElementsByClassName("menu-token"),
        menu1 = document.getElementById("menu1"),
        menu3 = document.getElementById("menu3");
      menu1.classList.remove("animation");
      menu1.open(202, 35);
      menu1.classList.add("animation");
      window.scrollTo(0, 0);
      document.body.addEventListener("contextmenu", function(event) {
        let target = event.target;
        if (
          menu1Container.contains(target) ||
          menu3Container.contains(target)
        ) {
          event.preventDefault();
        }
      });
      document.addEventListener("mousedown", function(event) {
        if (!menu1.contains(event.target)) {
          menu1.close();
        }
        if (!menu3.contains(event.target)) {
          menu3.close();
        }
      });
      menuTokens[0].addEventListener("mouseup", function() {
        menu1.open(202, 35);
      });
      menu3Container.addEventListener("mouseup", function(event) {
        let token = event.target.closest(".menu-token");
        if (token) {
          menu3.open(194, token.offsetTop);
        }
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
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
}
#listMenu4 td {
  padding: 0;
}
/* ------------ */

.smart-demo-container {
  font-family: var(--smart-material-font-family);
  /*line-height: 24px;*/
  font-size: 13px;
  margin-left: 0;
  padding-top: 50px;
  margin: 5% 10%;
}

.smart-demo-container section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
}

.smart-demo-container section:first-of-type h2 {
  font-size: 34px;
}

.smart-demo-container section:first-of-type div h2 {
  font-size: 20px;
}

.smart-demo-container section > h2:first-of-type {
  padding-top: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

#overviewHeading,
#usageHeading {
  border-top: none !important;
}

.smart-demo-container section {
  margin-top: 80px;
}

.smart-demo-container section:first-of-type {
  margin-top: 0;
}

.smart-demo-container section div h2 {
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

.smart-demo-container nav h2 {
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
  width: 90%;
  height: auto;
  display: block;
  font: inherit;
  vertical-align: top;
  position: relative;
}

.smart-demo-container .raised-demo-start {
  background-image: url(https://htmlelements.com/demos/images/raised-button-demo.png);
}

section .light-theme {
  background-color: #eeeeee;
  padding: 120px 60px 120px 60px;
}

section .dark-theme {
  background-color: #333333;
  padding: 120px 60px 120px 60px;
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

.module > div:nth-child(odd) {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 360px;
  height: 640px;
  background-size: 100%;
  position: relative;
}

/* current demo-specific styles */
.module-wide {
  width: calc(100% / 2);
}

#menu1Container,
#menu2Container,
#menu2,
#menu4,
#listMenu1Container,
#listMenu1,
#listMenu2Container,
#listMenu2,
#listMenu3Container,
#listMenu3,
#listMenu4 {
  position: relative;
}

#menu5,
smart-button.material.menu-token {
  position: absolute;
}

#menu1Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage1.png);
}

smart-button.material.menu-token {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

smart-button.material.menu-token:not(#menu1Token):not(#menu7Token) {
  right: 15px;
}

smart-button.material.menu-token:nth-of-type(1) {
  top: 248px;
}

smart-button.material.menu-token:nth-of-type(2) {
  top: 312px;
}

smart-button.material.menu-token:nth-of-type(3) {
  top: 376px;
}

smart-button.material.menu-token:nth-of-type(4) {
  top: 440px;
}

smart-button.material.menu-token:nth-of-type(5) {
  top: 504px;
}

smart-button.material.menu-token:nth-of-type(6) {
  top: 568px;
}

smart-button.material.menu-token > button {
  padding: 3px;
}

#menu1Token,
#menu7Token {
  left: 322px;
  top: 36px;
}

#menu1Token > button:not(.hover),
#menu7Token > button:not(.hover) {
  color: white;
}

#menu1,
#menu3,
#menu7 {
  height: auto;
  transform-origin: 100% 0;
}

.module-wide {
  overflow: visible;
}
#menu2Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage3do.png);
  width: 743px;
  height: 434px;
}

#menu2 {
  top: 77px;
  left: 71px;
  background: transparent;
}

#menu3Container {
  height: 621px;
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage4a.png);
}

#menu-items .vertical-menu-container,
#tree-menu .vertical-menu-container {
  width: 100%;
  position: relative;
  left: 50px;
  background-color: #eeeeee;
}

#menu-items .vertical-menu-container {
  height: 800px;
}

#tree-menu .vertical-menu-container {
  padding: 50px;
  height: 400px;
}

#menu4,
#menu5,
#menu6 {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

#menu4 {
  top: 50px;
  left: 50px;
}

#menu5 {
  bottom: 50px;
  right: 50px;
}

#menu6 {
  width: 300px;
  height: 300px;
}

#listMenu1Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage2.png);
}

#listMenu1,
#listMenu2,
#listMenu3,
#listMenu4 {
  --smart-list-menu-filter-input-size: 40px;
  top: 80px;
  width: 360px;
  height: 512px;
}

#listMenu2Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage3.png);
}

#listMenu3Container {
  background-image: url(https://htmlelements.com/demos/images/components-listcontrols-expand1.png);
}

#listMenu4Container {
  background-image: url(https://htmlelements.com/demos/images/components-listcontrols-leave1.png);
}

#listMenu4 {
  height: 560px;
}

#plusButton {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: cyan;
  font-size: 33px;
}

#plusButton > button {
  background-color: inherit;
}

button > i.material-icons {
  margin-left: 9px;
}

#listMenu4 .mail-name,
#listMenu4 .mail-title {
  font-weight: bold;
}

#listMenu4 .mail-name {
  font-size: medium;
}

#listMenu4 .mail-title {
  width: 180px;
}

#listMenu4 .mail-time {
  font-size: small;
}

#listMenu4 .mail-preview {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#listMenu4 i.material-icons {
  margin: 0;
  display: flex;
  justify-content: center;
  width: 50px;
}

table {
  white-space: initial;
}
</style>
