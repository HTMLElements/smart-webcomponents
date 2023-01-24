<template>
  <div class="vue-root">
    <div class="button-demo blobs-button">
      <label>Blobs button</label>
      <div class="demo-buttons-group">
        <smart-button class="blob-btn">
          Blob Button
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </smart-button>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-blobs-button">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </div>
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
    onMounted(() => {});
  }
};
</script>

<style>
.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
  color: white;
}

.demo-buttons-group {
  margin-top: 20px;
}

/* Blobs button */
.blob-btn button {
  background: white;
  z-index: 1;
}

.blob-btn {
  border-radius: 30px;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;

  width: auto;
  height: 50px;
  z-index: 1;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #0505a9;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: 30px;
}

.blob-btn:before {
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}

.blob-btn:after {
  content: "";
  z-index: -2;
  position: absolute;
  left: 3px;
  top: 3px;
  width: 100%;
  height: 100%;
  transition: all 0.3s 0.2s;
  border-radius: 30px;
}

.blob-btn:hover {
  color: #ffffff;
  border-radius: 30px;
  transition: color 0.5s;
}

.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
  border-radius: 30px;
}

.blob-btn__inner {
  border: 2px solid #0505a9;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}

.blob-btn__blobs {
  position: relative;
  display: block;
  height: 100%;
  -webkit-filter: url("#goo");
  filter: url("#goo");
}

.blob-btn__blob {
  position: absolute;
  top: 2px;
  width: 25%;
  height: 100%;
  background: #0505a9;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 150%, 0) scale(1.7);
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: -webkit-transform 0.45s;
  transition: transform 0.45s;
  transition: transform 0.45s, -webkit-transform 0.45s;
}

@supports ((-webkit-filter: url("#goo")) or (filter: url("#goo"))) {
  .blob-btn__blob {
    -webkit-transform: translate3d(0, 150%, 0) scale(1.4);
    transform: translate3d(0, 150%, 0) scale(1.4);
  }
}

.blob-btn__blob:nth-child(1) {
  left: 0%;
  transition-delay: 0s;
}

.blob-btn__blob:nth-child(2) {
  left: 30%;
  transition-delay: 0.08s;
}

.blob-btn__blob:nth-child(3) {
  left: 60%;
  transition-delay: 0.16s;
}

.blob-btn__blob:nth-child(4) {
  left: 90%;
  transition-delay: 0.24s;
}

.blob-btn:hover .blob-btn__blob {
  -webkit-transform: translateZ(0) scale(1.7);
  transform: translateZ(0) scale(1.7);
}

@supports ((-webkit-filter: url("#goo")) or (filter: url("#goo"))) {
  .blob-btn:hover .blob-btn__blob {
    -webkit-transform: translateZ(0) scale(1.4);
    transform: translateZ(0) scale(1.4);
  }
}

.svg-blobs-button {
  height: 0;
}
</style>
