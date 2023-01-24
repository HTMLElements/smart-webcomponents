<template>
  <div class="vue-root">
    <smart-button id="openButton">Open/Close</smart-button>
    <smart-window opened label="Window 1">
      <div id="article">
        <section>
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section>
          <h3>Where does it come from?</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words, consectetur,
            from a Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
            a line in section 1.10.32. The standard chunk of Lorem Ipsum used since
            the 1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the
            1914 translation by H. Rackham.
          </p>
        </section>
      </div>
    </smart-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smartWindow = document.querySelector("smart-window");
      smartWindow.headerButtons = [
        "close",
        "pin",
        "dock",
        "block",
        "autoclose",
        "readonly"
      ];

      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          smartWindow.opened ? smartWindow.close() : smartWindow.open();
        });
      smartWindow.addEventListener("click", function(event) {
        const target = event.target;
        if (target.closest(".smart-dock-button")) {
          console.log("Dock");
          alert("Dock button pressed");
        } else if (target.closest(".smart-block-button")) {
          console.log("Block");
          alert("Block button pressed");
        } else if (target.closest(".smart-autoclose-button")) {
          console.log("Autoclose");
          alert("Autoclose button pressed");
        } else if (target.closest(".smart-readonly-button")) {
          console.log("Readonly");
          alert("Readonly button pressed");
        } else if (target.closest(".smart-pin-button")) {
          console.log("Pin");
          alert("Pin button pressed");
        } else if (target.closest(".smart-close-button")) {
          console.log("Pin");
          alert("Close button pressed");
        }
      });
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root {
  width: 99%;
  height: 99%;
}

.smart-window #article {
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .smart-window {
    width: 90% !important;
    left: 5% !important;
    top: 5px !important;
  }
}

.smart-window .smart-dock-button:after {
  content: "D";
}

.smart-window .smart-block-button:after {
  content: "B";
}

.smart-window .smart-autoclose-button:after {
  content: "A";
}

.smart-window .smart-readonly-button:after {
  content: "R";
}
</style>
