<template>
  <div class="vue-root">
    <div class="button-demo flipcover-buttons">
      <label>Flip Cover Buttons</label>
      <div class="demo-buttons-group">
        <div class="flip-cover-twiter"></div>
        <br />
        <br />
        <div class="flip-cover-linkedin"></div>
        <br />
        <br />
        <div class="flip-cover-email"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      "use strict";
      flipCover("twiter", {
        url: "https://google.com",
        text: "Smart Web Components",
        width: "80px"
      });
      flipCover("linkedin", {
        url: "https://google.com",
        text: "Smart Web Components",
        width: "80px"
      });
      flipCover("email", {
        text: "Smart Web Components @gmail",
        width: "80px",
        height: "50px"
      });

      function flipCover(css, options) {
        options = options || {};
        if (typeof css === "object") {
          options = css;
        } else {
          options.css = css;
        }
        css = options.css;
        let url = options.url;
        let text = options.text || css;
        let width = options.width;
        let height = options.height;
        let section = document.querySelector(".flip-cover-" + css);
        if (!section) {
          return;
        }
        section.classList.add(css + "-section");
        let button = document.createElement("div");
        button.classList.add(css + "-button");
        button.style.width = "100%";
        button.style.height = "100%";
        let link = document.createElement("a");
        if (url) {
          link.setAttribute("href", url);
        }
        let smartButton = document.createElement("smart-button");
        smartButton.innerHTML = text;
        link.appendChild(smartButton);
        button.appendChild(link);
        let cover = document.createElement("div");
        cover.classList.add(css + "-cover");
        if (width) {
          section.style.width = width;
        }
        let outer = document.createElement("div");
        outer.classList.add(css + "-outer");
        let inner = document.createElement("div");
        inner.classList.add(css + "-inner");
        if (height) {
          section.style.height = height;
          let lineHeight = ":after{line - height: " + height + ";}";
          let outerStyle = document.createElement("style");
          outerStyle.innerHTML = "." + css + "-outer" + lineHeight;
          outer.appendChild(outerStyle);
          let innerStyle = document.createElement("style");
          innerStyle.innerHTML = "." + css + "-inner" + lineHeight;
          inner.appendChild(innerStyle);
        }
        cover.appendChild(outer);
        cover.appendChild(inner);
        section.appendChild(button);
        section.appendChild(cover);
      }
    });
  }
};
</script>

<style>
.button-demo {
  margin-top: 20px;
  margin-left: 50px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
  color: black;
}

.demo-buttons-group {
  margin-top: 20px;
}

/*#20 FlipCover Buttons*/
smart-button.smart-button-element {
  text-transform: none;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  border: 1px solid #ccc;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.smart-button-element button {
  padding: 0;
  background: transparent;
  display: inline-block;
  white-space: initial;
  outline: none;
}

@font-face {
  font-family: icon;
  src: url("https://bennettfeely.com/fonts/icons.woff");
}

.dribbble-section,
.dribbble-section * {
  box-sizing: border-box;
}

.dribbble-section,
.dribbble-section div {
  transition-duration: 0.6s;
}

.dribbble-section button,
.dribbble-section:hover button {
  text-decoration: none;
  font-weight: bold;
  color: #fc1786;
  font-size: 16px;
  font-family: "Times New Roman";
}

.dribbble-section {
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  padding: 0;
  min-height: 2.5em;
  background: #a9adb6;
  border-radius: 0.3em;
  perspective: 300;
  width: 80px;
  height: 30px;
}

.dribbble-button {
  text-align: center;
  transition-timing-function: ease;
  opacity: 0;
}

.dribbble-button a {
  text-decoration: none;
  font-weight: bold;
  color: #fc1786;
}

.dribbble-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: left bottom;
  transform-style: preserve-3d;
  font: 1.25em / 2 "icon";
  color: white;
  text-align: center;
  pointer-events: none;
  z-index: 100;
}

.dribbble-inner,
.dribbble-outer {
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.25em;
  background-image: -webkit-linear-gradient(
    top,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.dribbble-inner:after,
.dribbble-outer:after {
  content: "d";
}

.dribbble-outer {
  background-color: #fc1786;
  transform: translateZ(0.25em);
}

.dribbble-inner {
  background-color: #fd49a0;
}

.dribbble-section:hover {
  background: #ebeff2;
}

.dribbble-section:hover .dribbble-button {
  opacity: 1;
}

.dribbble-section:hover .dribbble-cover {
  transform: rotateY(-120deg);
}

.dribbble-section:hover .dribbble-inner {
  background-color: #fc1786;
}

.dribbble-section:hover .dribbble-outer {
  background-color: #ab0254;
}

.dribbble-section:hover .dribbble-cover,
.dribbble-section:hover .dribbble-inner,
.dribbble-section:hover .dribbble-outer {
  transition-timing-function: cubic-bezier(0.2, 0.7, 0.1, 1.1);
}

.twiter-section,
.twiter-section * {
  box-sizing: border-box;
}

.twiter-section,
.twiter-section div {
  transition-duration: 0.6s;
}

.twiter-section button,
.twiter-section:hover button {
  text-decoration: none;
  font-weight: bold;
  color: #2ec8fa;
  font-size: 16px;
  font-family: "Times New Roman";
}

.twiter-section {
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  padding: 0;
  min-height: 2.5em;
  background: #a9adb6;
  border-radius: 0.3em;
  perspective: 300;
  /*box-shadow: 0 -1px 2px #fff, inset 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 0.25em 1em rgba(0, 0, 0, 0.1);*/
  width: 80px;
  height: 30px;
}

.twiter-button {
  text-align: center;
  transition-timing-function: ease;
  opacity: 0;
}

.twiter-button a {
  text-decoration: none;
  font-weight: bold;
  color: #2ec8fa;
}

.twiter-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: left bottom;
  transform-style: preserve-3d;
  font: 1.25em / 2 "icon";
  color: white;
  text-align: center;
  pointer-events: none;
  z-index: 100;
}

.twiter-inner,
.twiter-outer {
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.25em;
  background-image: -webkit-linear-gradient(
    top,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.twiter-inner:after,
.twiter-outer:after {
  content: "t";
}

.twiter-outer {
  background-color: #2ec8fa;
  transform: translateZ(0.25em);
}

.twiter-inner {
  background-color: #60d5fb;
}

.twiter-section:hover {
  background: #ebeff2;
}

.twiter-section:hover .twiter-button {
  opacity: 1;
}

.twiter-section:hover .twiter-cover {
  transform: rotateY(-120deg);
}

.twiter-section:hover .twiter-inner {
  background-color: #2ec8fa;
}

.twiter-section:hover .twiter-outer {
  background-color: #0590bd;
}

.twiter-section:hover .twiter-cover,
.twiter-section:hover .twiter-inner,
.twiter-section:hover .twiter-outer {
  transition-timing-function: cubic-bezier(0.2, 0.7, 0.1, 1.1);
}

.linkedin-section,
.linkedin-section * {
  box-sizing: border-box;
}

.linkedin-section,
.linkedin-section div {
  transition-duration: 0.6s;
}

.linkedin-section button,
.linkedin-section:hover button {
  text-decoration: none;
  font-weight: bold;
  color: #2672ae;
  font-size: 16px;
  font-family: "Times New Roman";
}

.linkedin-section {
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  padding: 0;
  min-height: 2.5em;
  background: #a9adb6;
  border-radius: 0.3em;
  perspective: 300;
  /*box-shadow: 0 -1px 2px #fff, inset 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 0.25em 1em rgba(0, 0, 0, 0.1);*/
  width: 80px;
  height: 30px;
}

.linkedin-button {
  text-align: center;
  transition-timing-function: ease;
  opacity: 0;
}

.linkedin-button a {
  text-decoration: none;
  font-weight: bold;
  color: #2672ae;
}

.linkedin-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: left bottom;
  transform-style: preserve-3d;
  font: 1.25em / 2 "icon";
  color: white;
  text-align: center;
  pointer-events: none;
  z-index: 100;
}

.linkedin-inner,
.linkedin-outer {
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.25em;
  background-image: -webkit-linear-gradient(
    top,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.linkedin-inner:after,
.linkedin-outer:after {
  content: "in";
}

.linkedin-outer {
  background-color: #2672ae;
  transform: translateZ(0.25em);
}

.linkedin-inner {
  background-color: #348dd3;
}

.linkedin-section:hover {
  background: #ebeff2;
}

.linkedin-section:hover .linkedin-button {
  opacity: 1;
}

.linkedin-section:hover .linkedin-cover {
  transform: rotateY(-120deg);
}

.linkedin-section:hover .linkedin-inner {
  background-color: #2672ae;
}

.linkedin-section:hover .linkedin-outer {
  background-color: #143b5a;
}

.linkedin-section:hover .linkedin-cover,
.linkedin-section:hover .linkedin-inner,
.linkedin-section:hover .linkedin-outer {
  transition-timing-function: cubic-bezier(0.2, 0.7, 0.1, 1.1);
}

.email-section,
.email-section * {
  box-sizing: border-box;
}

.email-section,
.email-section div {
  transition-duration: 0.6s;
}

.email-section button,
.email-section:hover button {
  text-decoration: none;
  font-weight: bold;
  color: #f80;
  font-size: 16px;
  font-family: "Times New Roman";
}

.email-section {
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  padding: 0;
  min-height: 2.5em;
  background: #a9adb6;
  border-radius: 0.3em;
  perspective: 300;
  /*box-shadow: 0 -1px 2px #fff, inset 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 0.25em 1em rgba(0, 0, 0, 0.1);*/
  width: 80px;
  height: 30px;
}

.email-button {
  text-align: center;
  transition-timing-function: ease;
  opacity: 0;
}

.email-button a {
  text-decoration: none;
  font-weight: bold;
  color: #f80;
}

.email-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: left bottom;
  transform-style: preserve-3d;
  font: 1.25em / 2 "icon";
  color: white;
  text-align: center;
  pointer-events: none;
  z-index: 100;
}

.email-inner,
.email-outer {
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.25em;
  background-image: -webkit-linear-gradient(
    top,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.email-inner:after,
.email-outer:after {
  content: "g";
}

.email-outer {
  background-color: #f80;
  transform: translateZ(0.25em);
}

.email-inner {
  background-color: #ffa033;
}

.email-section:hover {
  background: #ebeff2;
}

.email-section:hover .email-button {
  opacity: 1;
}

.email-section:hover .email-cover {
  transform: rotateY(-120deg);
}

.email-section:hover .email-inner {
  background-color: #f80;
}

.email-section:hover .email-outer {
  background-color: #995200;
}

.email-section:hover .email-cover,
.email-section:hover .email-inner,
.email-section:hover .email-outer {
  transition-timing-function: cubic-bezier(0.2, 0.7, 0.1, 1.1);
}
</style>
