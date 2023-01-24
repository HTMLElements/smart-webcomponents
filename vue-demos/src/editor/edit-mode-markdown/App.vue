<template>
  <div class="vue-root">
    <smart-editor id="editor"></smart-editor>
    <div class="options">
      <h3>Description</h3>
      <div class="description">
        Smart Editor can be used as a Markdown editor thanks to the
        <b>editMode</b> property. When set to 'markdown' the Editor accepts
        markdown content and parses it to HTML when the user switches to
        SourceCode/Preview mode. Most of the toolbar items are available for the
        <b>markdown edit mode</b> like format, hyperlink, table, etc. Clicking
        on them will insert the approriate code inside the Editor. In order to
        view the HTML output click on the the <b>Source Code</b> Toolbar item or
        press the following keyboard key combination: Control + Shift + H.
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.editor.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#editor",
        class {
          get properties() {
            return {
              //Properties
              editMode: "markdown",
              toolbarItems: [
                "bold",
                "italic",
                "Underline",
                "StrikeThrough",
                "hyperlink",
                "removeLink",
                "copy",
                "cut",
                "paste",
                "alignment",
                "table",
                "image",
                "sourcecode",
                "formats",
                "splitmode",
                "undo",
                "redo",
                "OrderedList",
                "UnorderedList",
              ],
              value: `
# H1
## H2
### H3
#### H4
##### H5
###### H6

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
1. Ordered sub-list
4. And another item.

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
\`\`\`

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Three or more...

---

Hyphens

***

Asterisks

___

Underscores
`,
            };
          }
        }
      );

      const editor = document.getElementById("editor");
      editor.splitMode();
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
