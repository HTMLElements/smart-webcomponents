<template>
  <div class="vue-root">
    <smart-drop-down-button placeholder="טקסט" right-to-left>
      מה זה לורם איפסום? Lorem Ipsum הוא פשוט טקסט דמה של ענף ההדפס והקליעה.
      Lorem Ipsum היה הטקסט הרגיל של התעשייה מאז שנות ה 1500-, אז מדפסת לא ידועה
      לקחה מטען מסוג זה וערבלה אותו כדי ליצור ספר דגימה. הוא שרד לא רק חמש מאות
      שנים, אלא גם את הקפיצה לסידור אלקטרוני האלקטרוני, שנשאר ללא שינוי. זה פופולרי
      בשנות השישים עם שחרור גיליונות Letraset המכילים קטעי לורם איפסום, ולאחרונה
      גם עם תוכנת פרסום שולחניים כמו Aldus PageMaker כולל גרסאות של Lorem Ipsum.
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
  --smart-editor-drop-down-max-height: 200px;
  width: 200px;
}
</style>
