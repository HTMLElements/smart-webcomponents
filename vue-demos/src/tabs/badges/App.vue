<template>
  <div class="vue-root">
    <smart-tabs id="tabs" selected-index="0" animation="none">
      <smart-tab-item label="primaryTemplate">
        <smart-list-box class="mailList">
          <smart-list-item>
            Re: Exam
            <strong class="date">9/1/17</strong>
          </smart-list-item>
          <smart-list-item>
            Dinner tonight?
            <strong class="date">8/16/17</strong>
          </smart-list-item>
          <smart-list-item>
            Hi
            <strong class="date">8/1/17</strong>
          </smart-list-item>
          <smart-list-item>
            About the interview
            <strong class="date">7/11/17</strong>
          </smart-list-item>
          <smart-list-item>
            Re: Query about car purchase
            <strong class="date">6/29/17</strong>
          </smart-list-item>
          <smart-list-item>
            Your weekly newsletter
            <strong class="date">6/17/17</strong>
          </smart-list-item>
        </smart-list-box>
      </smart-tab-item>
      <smart-tab-item label="promotionsTemplate">Your Promotions tab is empty.</smart-tab-item>
      <smart-tab-item label="spamTemplate">
        <smart-list-box class="mailList">
          <smart-list-item>
            Join our club today!
            <strong class="date">9/1/17</strong>
          </smart-list-item>
        </smart-list-box>
      </smart-tab-item>
    </smart-tabs>
    <!--smart-tab-item label templates-->
    <template id="primaryTemplate">
      Primary
      <span class="smart-badge smart-badge-success">10</span>
    </template>

    <template id="promotionsTemplate">
      Promotions
      <span class="smart-badge smart-badge-info">0</span>
    </template>

    <template id="spamTemplate">
      Spam
      <span class="smart-badge smart-badge-danger">1</span>
    </template>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
#tabs {
  border-color: #878787;
  width: 100%;
  height: 350px;
  outline: none;
}

#tabs .smart-tab-strip {
  background-color: #e0e0e0;
}

#tabs .smart-tab-label-container {
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: transparent;
}

#tabs .smart-tab-label-container.smart-tab-selected {
  background-color: #f2f2f2;
}

#tabs .smart-tab-label-container.smart-tab-hovered {
  background-color: #e5e5e5;
  color: black;
}

#tabs .smart-tab-label-container:nth-child(1).smart-tab-selected {
  border-color: #5cb85c;
}

#tabs .smart-tab-label-container:nth-child(1).smart-tab-hovered {
  border-color: #7dd17d;
}

#tabs .smart-tab-label-container:nth-child(2).smart-tab-selected {
  border-color: #5bc0de;
}

#tabs .smart-tab-label-container:nth-child(2).smart-tab-hovered {
  border-color: #7eddf7;
}

#tabs .smart-tab-label-container:nth-child(3).smart-tab-selected {
  border-color: #d9534f;
}

#tabs .smart-tab-label-container:nth-child(3).smart-tab-hovered {
  border-color: #f27371;
}

.mailList {
  border: none;
  width: 100%;
  height: 100%;
}

.smart-list-item-container {
  width: 100%;
}

.date {
  float: right;
}

.smart-list-box .smart-content-label {
    width: 100%;
}
</style>
