<template>
  <div class="vue-root">
    <smart-editor id="editor">
      <div class="airplanes">
        <img
          src="./../../../src/images/travel/15.jpg"
          alignment="left"
          height="300"
        />
        <h2>Airplanes</h2>
        <p>
          An <b>airplane</b> or <b>aeroplane</b> (informally <b>plane</b>) is a
          <a
            href="https://en.wikipedia.org/wiki/Fixed-wing_aircraft"
            title="Fixed-wing aircraft"
            >fixed-wing aircraft</a
          >
          that is propelled forward by thrust from a jet engine, propeller, or
          rocket engine. Airplanes come in a variety of sizes, shapes, and wing
          configurations. The broad spectrum of uses for airplanes includes
          recreation, transportation of goods and people,military, and research.
          Worldwide, commercial aviation transports more than four billion
          passengers annually on airliners and transports more than 200 billion
          tonne - kilometers of cargo annually, which is less than 1% of the
          world's cargo movement. Most airplanes are flown by a pilot on board
          the aircraft, but some are designed to be
          <a
            href="https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle"
            title="Unmanned aerial vehicle"
            >remotely or computer-controlled</a
          >
          such as drones.
        </p>
        <p>
          The
          <a
            href="https://en.wikipedia.org/wiki/Wright_brothers"
            title="Wright brothers"
            >Wright brothers</a
          >
          invented and flew the first airplane in 1903, recognized as "the first
          sustained and controlled heavier-than-air powered flight". They built
          on the works of
          <a
            href="https://en.wikipedia.org/wiki/George_Cayley"
            title="George Cayley"
            >George Cayley</a
          >
          dating from 1799, when he set forth the concept of the modern airplane
          (and later built and flew models and successful passenger-carrying
          gliders). Between 1867 and 1896, the German pioneer of human aviation
          <a
            href="https://en.wikipedia.org/wiki/Otto_Lilienthal"
            title="Otto Lilienthal"
            >Otto Lilienthal</a
          >
          also studied heavier-than-air flight. Following its limited use in
          World War I, aircraft technology continued to develop. Airplanes had a
          presence in all the major battles of World War II. The first jet
          aircraft was the German
          <a
            href="https://en.wikipedia.org/wiki/Heinkel_He_178"
            title="Heinkel He 178"
            >Heinkel He 178</a
          >
          in 1939. The first jet airliner, the
          <a
            href="https://en.wikipedia.org/wiki/De_Havilland_Comet"
            title="De Havilland Comet"
            >de Havilland Comet</a
          >, was introduced in 1952. The
          <a href="https://en.wikipedia.org/wiki/Boeing_707" title="Boeing 707"
            >Boeing 707</a
          >, the first widely successful commercial jet, was in commercial
          service for more than 50 years, from 1958 to at least 2013.
        </p>
        <table>
          <thead>
            <tr>
              <th><b>Characteristics</b></th>
              <th><b>Description</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Airframe</td>
              <td>
                The structural parts of a fixed-wing aircraft are called the
                airframe
              </td>
            </tr>
            <tr>
              <td>Wings</td>
              <td>
                The wings of a fixed-wing aircraft are static planes extending
                either side of the aircraft. When the aircraft travels forwards,
                air flows over the wings, which are shaped to create lift.
              </td>
            </tr>
            <tr>
              <td>Fuselage</td>
              <td>
                A fuselage is a long, thin body, usually with tapered or rounded
                ends to make its shape aerodynamically smooth.
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <b><i>Wings vs. bodies</i></b>
                <div class="table-wrapper">
                  <table>
                    <tbody>
                      <tr>
                        <td>Flying wing</td>
                        <td>
                          A flying wing is a tailless aircraft which has no
                          definite fuselage. Most of the crew, payload and
                          equipment are housed inside the main wing structure.
                        </td>
                      </tr>
                      <tr>
                        <td>Blended wing body</td>
                        <td>
                          Blended wing body aircraft have a flattened and
                          airfoil shaped body, which produces most of the lift
                          to keep itself aloft, and distinct and separate wing
                          structures, though the wings are smoothly blended in
                          with the body.
                        </td>
                      </tr>
                      <tr>
                        <td>Lifting body</td>
                        <td>
                          A lifting body is a configuration in which the body
                          itself produces lift. In contrast to a flying wing,
                          which is a wing with minimal or no conventional
                          fuselage, a lifting body can be thought of as a
                          fuselage with little or no conventional wing.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td>Empennage and foreplane</td>
              <td>
                The classic airfoil section wing is unstable in flight and
                difficult to control. Flexible-wing types often rely on an
                anchor line or the weight of a pilot hanging beneath to maintain
                the correct attitude.
              </td>
            </tr>
            <tr>
              <td>Controls and instruments</td>
              <td>
                Airplanes have complex flight control systems. The main controls
                allow the pilot to direct the aircraft in the air by controlling
                the attitude (roll, pitch and yaw) and engine thrust.
              </td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: right">
          <i>From Wikipedia, the free encyclopedia</i>
        </p>
      </div>
    </smart-editor>
    <div class="options">
      <h4>Description</h4>
      <div class="description">
        <p>
          The <b>FindAndReplace</b> toolbar item triggers a Dialog Window that
          allows to find and (optionally) replace a specific letter or word
          inside Editor's content. This feature is available only when
          <b>editMode = 'html'</b>
        </p>
        <p>
          An additional Search Bar is also available by pressing the
          <b>Control + F</b> keys on the keyboard when the Editor is focused.
          The search toolbar allows to quickly find a letter or a word inside
          the Editor's content section. This feature is also available only when
          <b>editMode = 'html'</b>
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
              toolbarItems: ["findAndReplace"],
              contextMenu: "browser",
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
  width: 100%;
  height: 100%;
}

.smart-editor .airplanes img {
  padding: 15px;
  margin: 0 20px 20px 0;
  box-shadow: 0 0 5px 3px var(--smart-border);
}

.smart-editor table tr {
  height: 30px;
}

.smart-editor .table-wrapper {
  padding: 10px;
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
