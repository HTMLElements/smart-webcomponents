<template>
  <div class="vue-root">
    <smart-splitter id="splitter" right-to-left>
      <smart-splitter-item id="item0">
        <p>
          הנמר (Panthera tigris) הוא מין החתולים הגדול ביותר, שזוהה בעיקר בזכות
          דפוס הפסים האנכיים הכהים שלו על פרווה כתומה אדמדמה עם החלק התחתון הבהיר
          יותר.
        </p>
      </smart-splitter-item>
      <smart-splitter-item id="item1">
        <h2>טיגריס בנגלי</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
        />
        <p>
          מעיל הנמר של בנגל צהוב עד כתום בהיר, עם פסים הנעים בין חום כהה לשחור;
          הבטן והחלקים הפנימיים של הגפיים לבנים, והזנב כתום עם טבעות שחורות.
        </p>
        <p>
          אורך הזכרים הממוצע בין 270 ל 310 ס"מ (110 עד 120 אינץ ') כולל הזנב, ואילו
          הנקבות בממוצע 240 עד 265 ס"מ (94 עד 104 אינץ'). בדרך כלל הזנב הוא 85 עד
          110 ס"מ.
        </p>
      </smart-splitter-item>
    </smart-splitter>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-splitter {
  width: 800px;
  max-width: 100%;
  height: auto;
}

smart-splitter-item > .smart-container {
  padding: 10px;
}

smart-splitter smart-splitter-item {
  border: lightgray solid 1px;
  background-color: white;
}

#item0 {
  width: 200px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
