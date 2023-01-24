<template>
  <div class="vue-root">
    <smart-editor id="editor"></smart-editor>
    <div class="options">
      <div class="description">
        <h4>Content Filtering</h4>
        <p>
          <b>Smart.Editor</b> allows to filter out elements, element attributes
          or element style attributes via it's <b>contentFiltering</b> property.
        </p>
        <p>
          Making changes to the editor below will automatically refresh the
          content of the Editor based on the new settings.
        </p>
      </div>
      <div class="option">
        <h4>Tag Filter Settings:</h4>
        <smart-input id="tagFilterMode"></smart-input>
        <smart-multi-combo-input id="tags"></smart-multi-combo-input>
      </div>
      <div class="option">
        <h4>Attribute Filter Settings:</h4>
        <smart-input id="attributeFilterMode"></smart-input>
        <smart-multi-combo-input id="attributes"></smart-multi-combo-input>
      </div>
      <div class="option">
        <h4>Style Attribute Filter Settings:</h4>
        <smart-input id="styleAttributeFilterMode"></smart-input>
        <smart-multi-combo-input id="styleAttributes"></smart-multi-combo-input>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.multicomboinput.js";
import "smart-webcomponents/source/modules/smart.editor.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tags = [
          "a",
          "div",
          "img",
          "li",
          "p",
          "ul",
          "span",
          "table",
          "tbody",
          "td",
          "tr",
          "h4",
        ],
        attributes = ["class", "href", "style", "src"],
        styleAttributes = ["background-color", "float"],
        inputProps = {
          dropDownButtonPosition: "right",
          readonly: true,
          dataSource: [
            {
              label: "Black List",
              value: "blackList",
            },
            {
              label: "White List",
              value: "whiteList",
            },
          ],
        },
        initialValue = `
<div class="section">
<div>
<h2 style="text-align: center;">Camels</h2>
<p style="background-color: floralwhite;">A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as
"humps"
on its back. Camels have long been domesticated and, as livestock, they provide food (milk and meat)
and
textiles (fiber and felt from hair). Camels are working animals especially suited to their desert
habitat
and are a vital means of transport for passengers and cargo. There are three surviving species of
camel.
The
one-humped dromedary makes up 94% of the world's camel population, and the two-humped Bactrian camel
makes
up 6%. The Wild Bactrian camel is a separate species and is now critically endangered.

The word camel is also used informally in a wider sense, where the more correct term is "camelid",
to
include all seven species of the family Camelidae: the true camels (the above three species), along
with
the
"New World" camelids: the llama, the alpaca, the guanaco, and the vicuña. The word itself is derived
via
Latin: camelus and Greek: κάμηλος (kamēlos) from Hebrew, Arabic or Phoenician: gāmāl.</p>

<h4>Three types of camels:</h4>
<ul>
<li>Bactrian camel</li>
<li>Dromedary / Arabian camel</li>
<li>Wild Bactrian camel</li>
</ul>

<table>
<thead>
<tr>
<th>Image</th>
<th>Common name</th>
<th>Scientific name</th>
<th>Distribution
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<img src="./../../../src/images/bactrial-camel.min.jpg" width="120" height="95" />
</td>
<td>Bactrian camel</td>
<td><i>Camelus bactrianus</i></td>
<td>domesticated; Central Asia, including the
historical region of Bactria.
</td>
</tr>
<tr>
<td>
<img src="./../../../src/images/arabian-camel.min.jpg" width="120" height="93" />
</td>
<td>
Dromedary / Arabian camel
</td>
<td><i>Camelus dromedarius</i></td>
<td>domesticated; the Middle East, Sahara Desert and Afghanistan; introduced to Australia </td>
</tr>
<tr>
<td><img src="./../../../src/images/wild-bactrian-camel.min.jpg" width="120" height="90" /></td>
<td>Wild Bactrian camel</td>
<td><i>Camelus ferus</i></td>
<td>Remote areas of northwest China and Mongolia </td>
</tr>
</tbody>
</table>

<p>
<a href="https://en.wikipedia.org/wiki/Camel">You can read more about it here</a>
</p>
</div>
<img src="./../../../src/images/travel/1.jpg"></img>
</div>`;
      window.Smart(
        "#editor",
        class {
          get properties() {
            return {
              //Properties
              contentFiltering: {
                tags: tags,
                tagFilterMode: "blackList",
                attributes: attributes,
                attributeFilterMode: "whiteList",
                styleAttributes: styleAttributes,
                styleAttributeFilterMode: "blackList",
              },
            };
          }
        }
      );
      window.Smart(
        "#tagFilterMode",
        class {
          get properties() {
            return Object.assign(
              {
                value: "Black List",
              },
              inputProps
            );
          }
        }
      );
      window.Smart(
        "#attributeFilterMode",
        class {
          get properties() {
            return Object.assign(
              {
                value: "White List",
              },
              inputProps
            );
          }
        }
      );
      window.Smart(
        "#styleAttributeFilterMode",
        class {
          get properties() {
            return Object.assign(
              {
                value: "Black List",
              },
              inputProps
            );
          }
        }
      );
      window.Smart(
        "#tags",
        class {
          get properties() {
            return {
              dropDownButtonPosition: "right",
              dataSource: tags,
              value: tags.toString(),
            };
          }
        }
      );
      window.Smart(
        "#attributes",
        class {
          get properties() {
            return {
              dropDownButtonPosition: "right",
              dataSource: attributes,
              value: attributes.toString(),
            };
          }
        }
      );
      window.Smart(
        "#styleAttributes",
        class {
          get properties() {
            return {
              dropDownButtonPosition: "right",
              dataSource: styleAttributes,
              value: styleAttributes.toString(),
            };
          }
        }
      );

      window.onload = function () {
        const editor = document.getElementById("editor"),
          tagFilterMode = document.getElementById("tagFilterMode"),
          attributeFilterMode = document.getElementById("attributeFilterMode"),
          styleAttributeFilterMode = document.getElementById(
            "styleAttributeFilterMode"
          ),
          tags = document.getElementById("tags"),
          attributes = document.getElementById("attributes"),
          styleAttributes = document.getElementById("styleAttributes");
        editor.value = initialValue;
        document
          .querySelector(".options")
          ?.addEventListener("change", function () {
            editor.contentFiltering = {
              tags: tags.value.split(","),
              tagFilterMode: inputProps.dataSource.find(
                (i) => i.label === tagFilterMode.value
              ).value,
              attributes: attributes.value.split(","),
              attributeFilterMode: inputProps.dataSource.find(
                (i) => i.label === attributeFilterMode.value
              ).value,
              styleAttributes: styleAttributes.value.split(","),
              styleAttributeFilterMode: inputProps.dataSource.find(
                (i) => i.label === styleAttributeFilterMode.value
              ).value,
            };
            editor.value = initialValue;
          });
      };
    });
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.smart-editor {
  width: calc(100% - 300px);
  height: 100%;
}

@media (max-width: 750px) {
  .smart-editor {
    width: 100%;
  }
}

.options smart-input {
  margin-bottom: 10px;
}

.smart-editor .section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-column-gap: 20px;
}

.smart-editor .section img {
  border: 1px dashed var(--smart-border);
  padding: 10px;
}

.smart-editor .section table {
  table-layout: initial;
}

.smart-editor .section table img {
  padding: initial;
  border: initial;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 260px;
}

@media (max-width: 750px) {
  .options {
    position: relative;
    top: 30px;
    width: 240px;
    margin: 0 auto;
  }
}

#app,
.vue-root {
  width: 100%;
  height: 100%;
}
</style>
