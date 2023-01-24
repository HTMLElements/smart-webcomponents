<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.</h2>
          <div class="module">
            <p>
              Tooltips identify an element when they are activated. They may contain
              brief helper text about its function. For example, they may contain text
              information about actionable icons.
            </p>
            <p>Tooltip labels do not receive input focus.</p>
          </div>
          <div class="module">
            <h3>Summoned by:</h3>
            <p>
              Hovering over an element with a cursor
              <br />Focusing on an element with a keyboard (usually the tab key)
              <br />Upon touch
            </p>
          </div>
          <div class="module"></div>
        </div>
      </section>
      <nav>
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#tooltip-usage">Usage</a>
          </li>
          <li>
            <a href="#tooltip-interaction">Interaction</a>
          </li>
          <li>
            <a href="#tooltip-desktop">Tooltips - desktop style</a>
          </li>
          <li>
            <a href="#tooltip-mobile">Tooltips - mobile style</a>
          </li>
        </ul>
      </nav>
      <section id="tooltip-usage">
        <h2>Usage</h2>
        <div class="module">
          <p>Use tooltips for interactive imagery.</p>
        </div>
        <div class="module light module-large">
          <table>
            <tr>
              <td>
                <smart-button id="usageTooltipNormalBtn">
                  <i class="material-icons">&#xE8AD;</i>
                </smart-button>
                <br />
                <br />
                <smart-tooltip
                  id="usageTooltipNormal"
                  selector="usageTooltipNormalBtn"
                  position="bottom"
                  class="animation material"
                >Print</smart-tooltip>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section id="tooltip-usage2">
        <div class="module">
          <p>
            Tooltips usually don’t display rich information including images and formatted
            text.
          </p>
          <p>
            Tooltips are different than ALT-attributes, which are intended primarily
            for static images.
          </p>
          <p>
            Tooltips by default don’t have directional arrows; instead, they rely
            on motion emanating from the source to convey direction.
          </p>
        </div>
        <div class="quick">
          <p>Move the pointer over the icon</p>
          <i style="margin-left:100px;" id="quickAdd" class="material-icons">&#xE145;</i>
          <smart-tooltip
            id="tooltipQuickAdd"
            selector="quickAdd"
            position="bottom"
            class="animation material"
          >Quick add</smart-tooltip>
        </div>
        <div class="module">
          <br />
          <br />
          <div class="menu-container toggle-button-exclusive-selection">
            <div id="smallMenu">
              <smart-toggle-button class="exclusive-selection" group="small">
                <i class="material-icons">format_bold</i>
              </smart-toggle-button>
              <smart-toggle-button class="exclusive-selection" group="small">
                <i class="material-icons">format_italic</i>
              </smart-toggle-button>
              <smart-toggle-button class="exclusive-selection" group="small">
                <i class="material-icons">format_underlined</i>
              </smart-toggle-button>
              <smart-toggle-button class="exclusive-selection" group="small">
                <i class="material-icons">format_color_fill</i>
              </smart-toggle-button>
            </div>
          </div>
          <smart-tooltip id="commonSmallMenuTooltip" position="bottom" class="animation material"></smart-tooltip>
        </div>
      </section>
      <section id="tooltip-interaction">
        <h2>Interaction</h2>
        <div class="module">
          <p>
            A tooltip is triggered by tapping and holding an item. Keep the tooltip
            displayed as long as the user continues to hold the element.
          </p>
          <h2>Motion details</h2>
          <p>
            The tooltip entrance occurs over 150ms, using the Deceleration Curve.
            It also exits over 150ms, using the Acceleration Curve.
          </p>
          <h2>Tooltip delay</h2>
          <p>
            User can control the delay of tooltip show by configuring the "delay"
            property.
          </p>
        </div>
        <div class="module module-large" style="padding:10px;">
          <smart-button id="button300ms" class="material">300ms</smart-button>
          <br />
          <br />
          <smart-tooltip
            id="tooltip300ms"
            selector="button300ms"
            position="bottom"
            class="animation material"
          >300ms delay</smart-tooltip>
          <br />
          <br />
          <smart-button id="button500ms" class="material">500ms</smart-button>
          <br />
          <br />
          <smart-tooltip
            id="tooltip500ms"
            selector="button500ms"
            position="bottom"
            class="animation material"
          >500ms delay</smart-tooltip>
          <br />
          <br />
          <smart-button id="button1000ms" class="material">1000ms</smart-button>
          <br />
          <br />
          <smart-tooltip
            id="tooltip1000ms"
            selector="button1000ms"
            position="bottom"
            class="animation material"
          >1000ms delay</smart-tooltip>
          <br />
          <br />
          <smart-button id="button1500ms" class="material">1500ms</smart-button>
          <br />
          <br />
          <smart-tooltip
            id="toolti1500ms"
            selector="button1500ms"
            position="bottom"
            class="animation material"
          >1500ms delay</smart-tooltip>
        </div>
      </section>
      <section id="tooltip-desktop">
        <div class="module module-large" style="position:relative;">
          <div class="menu-container toggle-button-exclusive-selection">
            <div id="largeMenu">
              <smart-toggle-button id="btnBold" class="exclusive-selection" group="large">
                <i class="material-icons">format_bold</i>
              </smart-toggle-button>
              <smart-toggle-button id="btnItalic" class="exclusive-selection" group="large">
                <i class="material-icons">format_italic</i>
              </smart-toggle-button>
              <smart-toggle-button id="btnUnderline" class="exclusive-selection" group="large">
                <i class="material-icons">format_underlined</i>
              </smart-toggle-button>
              <smart-toggle-button id="btnAlignLeft" class="exclusive-selection" group="large">
                <i class="material-icons">format_align_left</i>
              </smart-toggle-button>
              <smart-toggle-button id="btnAlignCenter" class="exclusive-selection" group="large">
                <i class="material-icons">format_align_center</i>
              </smart-toggle-button>
            </div>
          </div>
          <smart-tooltip
            id="commonLargeMenuTooltip"
            selector="btnAlignJustify"
            position="bottom"
            class="animation material"
          >Align Justify</smart-tooltip>
        </div>
      </section>
      <section id="tooltip-mobile">
        <h2>Tooltips</h2>
        <div class="module"></div>
        <div class="module light" style="position:relative;">
          <div>
            <smart-button id="button4a" class="primary">
              <i class="material-icons">&#xE5D5;</i>
            </smart-button>
            <br />
            <br />
            <smart-tooltip
              id="tooltip4a"
              selector="button4a"
              position="bottom"
              class="animation mobile"
            >Refresh</smart-tooltip>
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
import "smart-webcomponents/source/modules/smart.tooltip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tooltips = document.querySelectorAll("smart-tooltip");
      tooltips[1].offset = [0, 20];
      tooltips[2].offset = [0, 10];
      tooltips[3].delay = 300;
      tooltips[3].offset = [0, 10];
      tooltips[4].delay = 500;
      tooltips[4].offset = [0, 10];
      tooltips[5].delay = 1000;
      tooltips[5].offset = [0, 10];
      tooltips[6].delay = 1500;
      tooltips[6].offset = [0, 10];
      tooltips[7].offset = [0, 10];
      tooltips[8].offset = [0, 10];

      const smallMenu = document.getElementById("smallMenu"),
        smallMenuButtons = smallMenu.querySelectorAll("smart-toggle-button"),
        smallMenuLabels = ["Bold", "Italic", "Underline", "Color"],
        commonSmallMenuTooltip = document.getElementById(
          "commonSmallMenuTooltip"
        ),
        largeMenu = document.getElementById("largeMenu"),
        largeMenuButtons = largeMenu.querySelectorAll("smart-toggle-button"),
        largeMenuLabels = [
          "Font Family",
          "Font Size",
          "Bold",
          "Italic",
          "Underline",
          /* 'Color',*/ "Align Left",
          "Align Center",
          "Align Right",
          "Align Justify"
        ],
        commonLargeMenuTooltip = document.getElementById(
          "commonLargeMenuTooltip"
        );
      attachTooltipToGroup(
        commonSmallMenuTooltip,
        smallMenuButtons,
        smallMenuLabels
      );
      attachTooltipToGroup(
        commonLargeMenuTooltip,
        largeMenuButtons,
        largeMenuLabels
      );

      function attachTooltipToGroup(tooltip, elements, labels) {
        for (let i = 0; i < elements.length; i++) {
          const btn = elements[i],
            label = labels[i];
          btn.addEventListener("mouseenter", function() {
            tooltip.selector = btn;
            tooltip.value = label;
            tooltip.open();
          });
        }
      }
    });
  }
};
</script>

<style>
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
</style>
