<template>
  <div class="vue-root">
    <smart-check-box id="showLines" checked>הצג שורות</smart-check-box>
    <smart-check-box id="showRootLines" checked>הצג קווי שורש</smart-check-box>
    <br />
    <smart-tree
      id="tree4"
      filterable
      filter-input-placeholder="סנן שאילתה ..."
      filter-mode="containsIgnoreCase"
      right-to-left
      showLines
      showRootLines
    >
      <smart-tree-item>בית</smart-tree-item>
      <smart-tree-items-group>
        פתרונות
        <smart-tree-item>חינוך</smart-tree-item>
        <smart-tree-item>שירותים פיננסיים</smart-tree-item>
        <smart-tree-item>ממשלה</smart-tree-item>
        <smart-tree-item>ייצור</smart-tree-item>
        <smart-tree-items-group>
          פתרונות
          <smart-tree-item>צילום ווידאו לצרכן</smart-tree-item>
          <smart-tree-item>נייד</smart-tree-item>
          <smart-tree-item>יישומי אינטרנט עשירים</smart-tree-item>
          <smart-tree-item>תקשורת טכנית</smart-tree-item>
          <smart-tree-item>הדרכה ולמידה אלקטרונית</smart-tree-item>
          <smart-tree-item>ועידת רשת</smart-tree-item>
        </smart-tree-items-group>
        <smart-tree-item>כל הענפים והפתרונות</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        מוצרים
        <smart-tree-item>מוצרי מחשב</smart-tree-item>
        <smart-tree-item>מוצרים ניידים</smart-tree-item>
        <smart-tree-item>כל המוצרים</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        תמיכה
        <smart-tree-item>תמיכה בבית</smart-tree-item>
        <smart-tree-item>שירות לקוחות</smart-tree-item>
        <smart-tree-item>בסיס ידע</smart-tree-item>
        <smart-tree-item>ספרים</smart-tree-item>
        <smart-tree-item>הכשרה והסמכה</smart-tree-item>
        <smart-tree-item>תוכניות תמיכה</smart-tree-item>
        <smart-tree-item>פורומים</smart-tree-item>
        <smart-tree-item>תיעוד</smart-tree-item>
        <smart-tree-item>עדכונים</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        קהילות
        <smart-tree-item>מעצבים</smart-tree-item>
        <smart-tree-item>מפתחים</smart-tree-item>
        <smart-tree-item>מחנכים ותלמידים</smart-tree-item>
        <smart-tree-item>שותפים</smart-tree-item>
        <smart-tree-items-group>
          לפי משאב
          <smart-tree-item>מעבדות</smart-tree-item>
          <smart-tree-item>טלוויזיה</smart-tree-item>
          <smart-tree-item>פורומים</smart-tree-item>
          <smart-tree-item>חליפין</smart-tree-item>
          <smart-tree-item>בלוגים</smart-tree-item>
          <smart-tree-item>התנסות בעיצוב</smart-tree-item>
        </smart-tree-items-group>
      </smart-tree-items-group>
      <smart-tree-items-group>
        החברה
        <smart-tree-item>עלינו</smart-tree-item>
        <smart-tree-item>ללחוץ</smart-tree-item>
        <smart-tree-item>קשרי משקיעים</smart-tree-item>
        <smart-tree-item>ענייני חברה</smart-tree-item>
        <smart-tree-item>קריירה</smart-tree-item>
        <smart-tree-item>חלון ראווה</smart-tree-item>
        <smart-tree-item>אירועים</smart-tree-item>
        <smart-tree-item>תיצור איתנו קשר</smart-tree-item>
        <smart-tree-item>להיות שותף</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree = document.getElementById("tree4");
      document
        .getElementById("showLines")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          tree.showLines = checked;
        });
      document
        .getElementById("showRootLines")
        .addEventListener("change", function() {
          const checked = event.detail.value;
          tree.showRootLines = checked;
        });
    });
  }
};
</script>

<style>
smart-tree {
  width: 300px;
  margin-top: 20px;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
  }
}
</style>
