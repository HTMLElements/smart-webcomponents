<template>
  <div class="vue-root">
    <smart-editor id="editor">
      <div>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </smart-editor>
    <div class="options">
      <div class="description">
        <p>
          The following demo illustrates an attempt to inject XSS into the
          Editor's content. However the <b>sanitized</b> property is enabled and
          does not allow scripts and javascript functions to be executed from
          inside the content of the element.
        </p>
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
              sanitized: true,
              value: `
Cross-Site Scripting (XSS) attacks are a type of injection,
in which malicious scripts are injected into otherwise benign and trusted websites.
XSS attacks occur when an attacker uses a web application to send malicious code,
generally in the form of a browser side script, to a different end user.
Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses
input from a user within the output it generates without validating or encoding it.
The following is an attempt for a XSS attack:
<script><\/script>
<IMG """><SCRIPT>alert(" XSS")<\/SCRIPT>"\>
<IMG SRC=/ onerror="alert(String.fromCharCode(88,83,83))"><\/img>
\<a onmouseover=alert(document.cookie)\>xxs link\</a\>
<IMG SRC=\`javascript: alert("RSnake says, 'XSS'")\`>
<IMG SRC=JaVaScRiPt:alert('XSS')>
<svg/onload='+/" /+/onmouseover=1/+/[*/[]/+alert(1)//'>
<SCRIPT SRC=http://xss.rocks/xss.js><\/SCRIPT>
<IMG src=javascript:alert(&quot;XSS&quot;)>`,
            };
          }
        }
      );
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