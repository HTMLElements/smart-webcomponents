<template>
  <div class="vue-root">
    <h3>cutCopyMaskFormat :</h3>
    <smart-masked-text-box mask="00/00/0000" cut-copy-mask-format="excludePromptAndLiterals"></smart-masked-text-box>: excludePromptAndLiterals
    <br />
    <smart-masked-text-box mask="00/00/0000" cut-copy-mask-format="includePrompt"></smart-masked-text-box>: includePrompt
    <br />
    <smart-masked-text-box mask="00/00/0000" cut-copy-mask-format="includeLiterals"></smart-masked-text-box>: includeLiterals
    <br />
    <smart-masked-text-box mask="00/00/0000" cut-copy-mask-format="includePromptAndLiterals"></smart-masked-text-box>: includePromptAndLiterals
    <br />
    <br />
    <h3>Paste copied text from a masked text box:</h3>
    <smart-text-box placeholder="Paste Here ..."></smart-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
