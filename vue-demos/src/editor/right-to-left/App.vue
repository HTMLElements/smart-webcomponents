<template>
  <div class="vue-root">
    <smart-editor id="editor" right-to-left>
      <div>
        <h2>למה אנו משתמשים בזה?</h2>
        <p dir="rtl">
          זוהי עובדה מבוססת שדעתו של הקורא תהיה מוסחת על ידי טקטס קריא כאשר הוא
          יביט בפריסתו. המטרה בשימוש ב-Lorem Ipsum הוא שיש לו פחות או יותר תפוצה
          של אותיות, בניגוד למלל '� יסוי � יסוי � יסוי', ונותן חזות קריאה
          יותר.הרבה הוצאות מחשבים ועורכי דפי אינטרנט משתמשים כיום ב-Lorem Ipsum
          כטקסט ברירת המחדל שלהם, וחיפוש של 'lorem ipsum' יחשוף אתרים רבים
          בראשית דרכם.גרסאות רבות נוצרו במהלך השנים, לעתים בשגגה לעיתים במכוון
          (זריקת בדיחות וכדומה).
        </p>
      </div>
      <div>
        <h2>מה זה Lorem Ipsum?</h2>
        <p dir="rtl">
          <strong>Lorem Ipsum</strong> הוא פשוט טקסט גולמי של תעשיית ההדפסה
          וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא
          ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה
          שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר
          כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של
          גליון פונטי המכיל פסקאות של Lorem Ipsum. ועוד יותר לאחרונה עם פרסום
          תוכנות המחשב האישי כגון Aldus page maker שמכיל גרסאות של Lorem Ipsum.
        </p>
      </div>
      <br />
      <div>
        <h2>היכן אפשר להשיג?</h2>
        <p dir="rtl">
          יש המון גרסאות זמינות לפסקאות של Lorem Ipsum. אבל רובם עברו שינויים
          בצורה זו או אחרת, על ידי השתלת הומור או מילים אקראיות שלא נראות אפילו
          מעט אמינות. אם אתה הולך להשתמש במקטעים של של Lorem Ipsum אתה צריך
          להיות בטוח שאין משהו מביך חבוי בתוך הטקסט. כל מחוללי הטקסט של Lorem
          Ipsum שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי
          הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו
          משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת
          לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים
          חוזרים, הומור, או מילים לא מאופייניות וכדומה
        </p>
      </div>
      <div>
        <h2>מנין זה בא?</h2>
        <p dir="rtl">
          בניגוד לטענה הרווחת, Lorem Ipsum אינו סתם טקסט רנדומלי. יש לו שורשים
          וחלקים מתוך הספרות הלטינית הקלאסית מאז 45 לפני הספירה. מה שהופך אותו
          לעתיק מעל 2000 שנה. ריצ'רד מקלינטוק, פרופסור לטיני בקולג' של
          המפדן-סידני בורג'יניה, חיפש את אחת המילים המעורפלות ביותר בלטינית -
          consectetur - מתוך פסקאות של Lorem Ipsum ודרך ציטוטים של המילה מתוך
          הספרות הקלאסית, הוא גילה מקור בלתי ניתן לערעור. Lorem Ipsum מגיע מתוך
          מקטע 1.10.32 ו- 1.10.33 של "de Finibus Bonorum et Malorum" (הקיצוניות
          של הטוב והרע) שנכתב על ידי קיקרו ב-45 לפני הספירה. ספר זה הוא מאמר על
          תאוריית האתיקה, שהיה מאוד מפורסם בתקופת הרנסנס. השורה הראשונה של
          "Lorem ipsum dolor sit amet", שמופיעה בטקסטים של Lorem Ipsum, באה
          משורה במקטע 1.10.32
        </p>
        <p dir="rtl">
          הפסקאות הסטנדרטיות של Lorem Ipsum שהיו בשימוש מאז המאה ה-16 משוחזרות
          בתחתית הדף לאלה שמעונייניםץ מקטעים 1.10.32 ו- 1.10.33 מתוך "de Finibus
          Bonorum et Malorum" של קיקרו משוחזרים גם כן בצורתן המקורית מלווים
          בגרסה האנגלית משנת 1914, שתורגם על ידי ה. רקהם.
        </p>
      </div>
    </smart-editor>
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
              toolbarItems: [
                {
                  name: "bold",
                },
                {
                  name: "italic",
                },
                "Underline",
                "StrikeThrough",
                "hyperlink",
                "removeLink",
                "copy",
                "cut",
                "paste",
                "alignment",
                "table",
                "image",
                "sourcecode",
                {
                  name: "formats",
                  dataSource: [
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "code",
                    "blockquote",
                  ],
                },
                "splitmode",
                "undo",
                "redo",
                "LowerCase",
                "UpperCase",
                "OrderedList",
                "UnorderedList",
                "Outdent",
                "Indent",
              ],
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
