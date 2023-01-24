<template>
  <div class="vue-root">
    <smart-drop-down-button label="Label" hint="hint" placeholder="Outlined" class="outlined">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </smart-drop-down-button>
    <smart-drop-down-button class="underlined" label="Label" hint="hint" placeholder="Underlined">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </smart-drop-down-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-drop-down-button {
  float: left;
  margin-left: 25px;
  margin-top: 25px;
}
</style>
