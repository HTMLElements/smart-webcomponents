<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <h2>Tabs make it easy to explore and switch between different views.</h2>
        <div class="module">
          <p>
            Tabs enable content organization at a high level, such as switching between
            views, data sets, or functional aspects of an app.
          </p>
          <h3>Types of Tabs Layouts</h3>
          <p>
            Fixed
            <br />Scrollable
            <br />Overflow with DropDown
            <br />Shrink
            <br />Wrap
          </p>
          <h3>Tab labels</h3>
          <p>Tab labels may include icons and text.</p>
        </div>
      </section>
      <section id="tabs-usage">
        <h2 id="usageHeading">Usage</h2>
        <div>
          <p>
            A tab provides the affordance for displaying grouped content. A tab label
            succinctly describes the tab’s associated grouping of content.
          </p>
        </div>
      </section>
      <smart-tabs id="tabs3" class="animation mobile">
        <smart-tab-item label="Tab One">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum
        </smart-tab-item>
        <smart-tab-item label="Tab Two">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum comes
          from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
          Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
          treatise on the theory of ethics.
        </smart-tab-item>
        <smart-tab-item label="Tab Three">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </smart-tab-item>
      </smart-tabs>
      <div>Fixed tab bar pinned to top</div>
      <smart-tabs>
        <smart-tab-item label="<i class='material-icons'>phone</i>">Calls</smart-tab-item>
        <smart-tab-item label="<i class='material-icons'>favorite</i>">Favorites</smart-tab-item>
        <smart-tab-item label="<i class='material-icons'>perm_contact_calendar</i>">Contacts</smart-tab-item>
      </smart-tabs>
      <div>Default app bar and fixed tab bar with icons</div>
      <smart-tabs id="tabs8" class="animation desktop padding" tab-layout="dropdown">
        <smart-tab-item label="Web">Web Content</smart-tab-item>
        <smart-tab-item label="Shopping">Shopping Content</smart-tab-item>
        <smart-tab-item label="Videos">Videos Content</smart-tab-item>
        <smart-tab-item label="Images">Images Content</smart-tab-item>
        <smart-tab-item label="News">News Content</smart-tab-item>
        <smart-tab-item label="Maps">Maps Content</smart-tab-item>
        <smart-tab-item label="Books">Books Content</smart-tab-item>
        <smart-tab-item label="Flights">Flights Content</smart-tab-item>
        <smart-tab-item label="Apps">Apps Content</smart-tab-item>
      </smart-tabs>
      <div>Tabs with a dropdown menu</div>
      <smart-tabs id="tabs9">
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
        <smart-tab-item label="Item Five">Content Five</smart-tab-item>
        <smart-tab-item label="Item Six">Content Six</smart-tab-item>
        <smart-tab-item label="Item Seven">Content Seven</smart-tab-item>
        <smart-tab-item label="Item Eight">Content Eight</smart-tab-item>
        <smart-tab-item label="Item Nine">Content Nine</smart-tab-item>
        <smart-tab-item label="Item Ten">Content Ten</smart-tab-item>
        <smart-tab-item label="Item Eleven">Content Eleven</smart-tab-item>
      </smart-tabs>
      <div>Tabs with overflow pagination</div>
      <smart-tabs id="tabs10" tab-position="left">
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab bar on the left</div>
      <smart-tabs id="tabs11" tab-position="right">
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab bar on the right</div>
      <smart-tabs id="tabs12" tab-position="bottom">
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab bar on the bottom</div>
      <smart-tabs id="tabs13" tab-text-orientation="vertical">
        <smart-tab-item label="One">Content One</smart-tab-item>
        <smart-tab-item label="Two">Content Two</smart-tab-item>
        <smart-tab-item label="Three">Content Three</smart-tab-item>
        <smart-tab-item label="Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab labels with vertical text</div>
      <smart-tabs
        id="tabs14"
        class="animation desktop"
        tab-position="left"
        tab-text-orientation="vertical"
      >
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab bar on the left with vertical labels</div>
      <smart-tabs
        id="tabs15"
        class="animation desktop"
        tab-position="right"
        tab-text-orientation="vertical"
      >
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab bar on the right with vertical labels</div>
      <smart-tabs
        id="tabs16"
        class="animation desktop"
        tab-position="bottom"
        tab-text-orientation="vertical"
      >
        <smart-tab-item label="Item One">Content One</smart-tab-item>
        <smart-tab-item label="Item Two">Content Two</smart-tab-item>
        <smart-tab-item label="Item Three">Content Three</smart-tab-item>
        <smart-tab-item label="Item Four">Content Four</smart-tab-item>
      </smart-tabs>
      <div>Tab bar on the bottom with vertical labels</div>
      <smart-tabs id="tabs17" class="animation desktop">
        <smart-tab-items-group label="Fruits">
          <smart-tab-item label="Apple">Apple information</smart-tab-item>
          <smart-tab-item label="Lime">Lime information</smart-tab-item>
          <smart-tab-item label="Orange">Orange information</smart-tab-item>
        </smart-tab-items-group>
        <smart-tab-items-group label="Vegetables">
          <smart-tab-item label="Carrot">Carrot information</smart-tab-item>
          <smart-tab-item label="Raddish">Raddish information</smart-tab-item>
        </smart-tab-items-group>
        <smart-tab-item label="Meat">Meat information</smart-tab-item>
        <smart-tab-item label="Fish">Fish information</smart-tab-item>
      </smart-tabs>
      <div>Tabs with grouping</div>
      <smart-tabs class="albums">
        <smart-tab-item label="Pop">
          <img src="https://htmlelements.com/demos/images/albums_pop.png" />
        </smart-tab-item>
        <smart-tab-item label="Alternative">
          <img src="https://htmlelements.com/demos/images/albums_alternative.png" />
        </smart-tab-item>
        <smart-tab-item label="Rock">
          <img src="https://htmlelements.com/demos/images/albums_rock.png" />
        </smart-tab-item>
        <smart-tab-item label="R & B">
          <img src="https://htmlelements.com/demos/images/albums_rnb.png" />
        </smart-tab-item>
      </smart-tabs>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // your code here
    });
  }
};
</script>

<style>
smart-tabs {
  width: 60%;
  margin-top: 30px;
  height: 250px;
}

smart-tabs.albums {
  width: 380px;
  height: 420px;
}

@media only screen and (max-width: 700px) {
  smart-tabs,
  smart-tabs.albums {
    width: 100%;
  }
}
</style>
