<template>
  <div class="vue-root">
    <div class="options">
      <div class="option">
        <smart-button id="openButton">Open/Close</smart-button>
      </div>
    </div>
    <smart-window id="formWindow" opened label="Window" footer-template="footerTemplate">
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
        <section>
          <h3>Why do we use it?</h3>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editors now use
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose (injected
            humour and the like).
          </p>
        </section>
        <section>
          <h3>Where can I get some?</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a dictionary
            of over 200 Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
            is therefore always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
        </section>
        <section>
          <h3>More</h3>
          <p>
            Fusce blandit eros vitae libero iaculis, sit amet rhoncus augue dignissim.
            Sed urna ante, fermentum a augue eu, pretium luctus sapien. Pellentesque
            in sapien nibh. Nunc tortor sapien, pharetra at magna quis, imperdiet luctus
            nulla. Ut posuere libero eu erat cursus, sit amet vehicula tellus iaculis.
            Sed egestas porta massa nec varius. Vestibulum rhoncus molestie justo,
            eget viverra ligula varius eu. Cras nec aliquam risus. Quisque sodales
            nisi a risus ultrices tincidunt. In nec maximus nulla. Nulla pretium a
            velit pellentesque euismod. Proin congue nisl quis eros malesuada, quis
            mattis augue faucibus. Mauris vitae felis at sem tempor fermentum sit amet
            eget dui. Sed vel ipsum eu eros pulvinar congue. Phasellus vitae ullamcorper
            sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Curabitur imperdiet, purus ac mattis fermentum,
            ipsum tortor consequat purus, ac lobortis odio risus at magna. Nulla facilisi.
            Donec et massa nisl. Etiam dignissim accumsan eleifend. Aliquam rhoncus
            lorem sed purus congue, vitae eleifend tellus scelerisque.
          </p>
        </section>
      </div>
    </smart-window>

    <smart-window
      id="modal"
      modal
      window-parent="formWindow"
      label="Dialog"
      footer-template="footerTemplate"
    >
      <h3>Are you sure ?</h3>
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
      const footerTemplate = document.createElement("template");
      footerTemplate.id = "footerTemplate";
      footerTemplate.innerHTML = `<smart-button class="cancel">Cancel</smart-button>
      <smart-button class="agree">Agree</smart-button>`;
      document.body.appendChild(footerTemplate);

      const modal = document.getElementById("modal"),
        formWindow = document.getElementById("formWindow");
      modal.headerButtons = ["close"];

      function cancelHandler(event) {
        const target = event.target;
        target.closest("smart-window") === modal
          ? modal.close()
          : formWindow.close();
      }

      function agreeHandler(event) {
        const target = event.target;
        if (target.closest("smart-window") === modal) {
          formWindow.close();
          modal.close();
        } else {
          modal.open();
        }
      }

      document
        .getElementById("openButton")
        .addEventListener("click", function() {
          formWindow.opened ? formWindow.close() : formWindow.open();
        });

      formWindow.whenRendered(() => {
        modal.whenRendered(() => {
          document
            .getElementsByClassName("cancel")[0]
            .addEventListener("click", cancelHandler);
          document
            .getElementsByClassName("cancel")[1]
            .addEventListener("click", cancelHandler);
          document
            .getElementsByClassName("agree")[0]
            .addEventListener("click", agreeHandler);
          document
            .getElementsByClassName("agree")[1]
            .addEventListener("click", agreeHandler);

          modal.getElementsByClassName("cancel")[0].innerHTML = "No";
          modal.getElementsByClassName("agree")[0].innerHTML = "Yes";
        });
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

@media screen and (max-width: 700px) {
  .smart-window {
    width: 90% !important;
    left: 5% !important;
    top: 5px !important;
  }
}
.smart-window #article {
  overflow: auto;
}
#formWindow > .smart-container > .smart-content {
  flex-direction: column;
}

#formWindow {
  --smart-window-default-width: 50%;
  --smart-window-default-height: 75%;
  --smart-window-footer-height: 50px;
}

#modal {
  --smart-window-default-width: 35%;
  --smart-window-default-height: 35%;
  --smart-window-footer-height: 50px;
}

#modal > .smart-container > .smart-content {
  justify-content: center;
}

#formWindow #article {
  overflow-y: auto;
  width: 100%;
}

smart-window > .smart-container > .smart-footer {
  display: flex;
  justify-content: flex-end;
}

smart-window > .smart-container > .smart-footer smart-button {
  width: 100px;
  height: 100%;
  margin-left: 10px;
}

#modal > .smart-container > .smart-footer {
  justify-content: center;
}

#contentHolder {
  width: 100%;
  height: 100%;
}
</style>
