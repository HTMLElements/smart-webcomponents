<template>
  <div class="vue-root">
    <div class="demo-header">
      <div class="demo-header-label">Smart Scheduler Team</div>
      <div class="demo-content">
        <div class="person-a">
          <smart-check-box id="steven" checked></smart-check-box>
        </div>
        <div class="person-b">
          <smart-check-box id="mark" checked></smart-check-box>
        </div>
        <div class="person-c">
          <smart-check-box id="janet" checked></smart-check-box>
        </div>
      </div>
    </div>
    <smart-scheduler id="scheduler"></smart-scheduler>
    <div class="options">
      <div class="option">
        <h4>Choose Language</h4>
        <smart-input id="input" readonly></smart-input>
      </div>
      <div class="option">
        <p></p>
        <smart-check-box checked id="checkbox"
          >Show Working Hours</smart-check-box
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.scheduler.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const today = new Date(),
        currentDate = today.getDate(),
        currentYear = today.getFullYear(),
        currentMonth = today.getMonth(),
        data = [
          {
            label: "Non-Compete Agreements",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              8,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0),
            class: "steven",
            enLabel: "Non-Compete Agreements",
            deLabel: "Wettbewerbsverbote",
            frLabel: "Accords de non-concurrence",
            bgLabel: "Незавършени Споразумения",
          },
          {
            label: "Approve Hiring of John Jeffers",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              10,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              11,
              15
            ),
            class: "mark",
            enLabel: "Approve Hiring of John Jeffers",
            deLabel: "Genehmigen Sie die Einstellung von John Jeffers",
            frLabel: "Approuver l'embauche de John Jeffers",
            bgLabel: "Одобри назначаването на Джон Джефърс",
          },
          {
            label: "Update NDA Agreement",
            dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 2,
              13,
              45
            ),
            class: "janet",
            enLabel: "Update NDA Agreement",
            deLabel: "NDA-Vereinbarung aktualisieren",
            frLabel: "Mettre à jour l'accord NDA",
            bgLabel: "Обнови NDA Споразуменето",
          },
          {
            label: "Update Employee Files with New NDA",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              14,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              16,
              45
            ),
            class: "steven",
            enLabel: "Update Employee Files with New NDA",
            deLabel: "Aktualisieren Sie Mitarbeiterdateien mit neuer NDA",
            frLabel:
              "Mettre à jour les fichiers des employés avec un nouveau NDA",
            bgLabel: "Обнови Работните Документи с нов NDA",
          },
          {
            label: "Compete Agreements",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate - 1,
              8,
              15
            ),
            dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 9, 0),
            class: "mark",
            enLabel: "Compete Agreements",
            deLabel: "Wettbewerbsvereinbarungen",
            frLabel: "Accords de concurrence",
            bgLabel: "Завърши Споразуменията",
          },
          {
            label: "Approve Hiring of Mark Waterberg",
            dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15),
            class: "janet",
            enLabel: "Approve Hiring of Mark Waterberg",
            deLabel: "Genehmigen Sie die Einstellung von Mark Waterberg",
            frLabel: "Approuver l'embauche de Mark Waterberg",
            bgLabel: "Одобри Назначаването на Марк Уотърбърг",
          },
          {
            label: "Update NBA Contracts",
            dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45),
            class: "janet",
            enLabel: "Update NBA Contracts",
            deLabel: "Aktualisieren Sie die NBA-Verträge",
            frLabel: "Mettre à jour les contrats NBA",
            bgLabel: "Обнови NBA Договорите",
          },
          {
            label: "Mitarbeiterinformationen aktualisieren",
            dateStart: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              14,
              0
            ),
            dateEnd: new Date(
              currentYear,
              currentMonth,
              currentDate + 1,
              16,
              45
            ),
            class: "mark",
            enLabel: "Mitarbeiterinformationen aktualisieren",
            deLabel: "Mettre à jour les informations sur les employés",
            frLabel: "Mettre à jour les informations sur les employés",
            bgLabel: "Обнови Информацията за Служителите",
          },
          {
            label: "Review Agreements",
            dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0),
            class: "steven",
            enLabel: "Review Agreements",
            deLabel: "Vereinbarungen überprüfen",
            frLabel: "Examiner les accords",
            bgLabel: "Прегледай Споразуменията",
          },
          {
            label: "Fire John Jeffers",
            dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15),
            class: "steven",
            enLabel: "Fire John Jeffers",
            deLabel: "Feuer John Jeffers",
            frLabel: "Feu John Jeffers",
            bgLabel: "Уволни Джон Джефърс",
          },
          {
            label: "Close The NDA Agreement",
            dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45),
            class: "mark",
            enLabel: "Close The NDA Agreement",
            deLabel: "Schließen Sie die NDA-Vereinbarung",
            frLabel: "Fermer l'accord NDA",
            bgLabel: "Приключи с NDA Споразумението",
          },
          {
            label: "Erase Fired Employee Files From NDA",
            dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
            dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
            class: "mark",
            enLabel: "Erase Fired Employee Files From NDA",
            deLabel: "Löschen Sie entlassene Mitarbeiterdateien aus der NDA",
            frLabel: "Effacer les fichiers des employés licenciés de NDA",
            bgLabel: "Премахни Служебните Файлове на Бившите служители от NDA",
          },
        ];
      window.Smart(
        "#scheduler",
        class {
          get properties() {
            return {
              //Properties
              view: "week",
              hourStart: 7,
              viewSelectorType: "auto",
              views: ["day", "week", "month", "agenda"],
              locale: "de",
              messages: {
                bg: {
                  invalidValue:
                    "{{elementType}}: Невалидно {{property}} свойство. {{property}} трябва да бъде от тип {{typeOne}} или {{typeTwo}}.",
                  invalidTimeZone:
                    "{{elementType}}: Невалидна timeZone стойност. TimeZone трябва да бъде валидна IANA часова зона.",
                  incorrectArgument:
                    "{{elementType}}: Невалиден аргумент {{argumentName}} при извикване на метод {{methodName}}.",
                  noId:
                    "smartScheduler трябва да има зададено id за да може да записва/зарежда/изтрива състояния.",
                  agenda: "Дневен график",
                  agendaPlaceholder: "Няма Събития За Показване",
                  day: "Ден",
                  week: "Седмица",
                  month: "Месец",
                  allDay: "Цял Ден",
                  timelineDay: "Дневна Хронология",
                  timelineWeek: "Седмична Хронология",
                  timelineMonth: "Месечна Хронология",
                  newEvent: "Ново събитие",
                  ok: "Приеми",
                  cancel: "Откажи",
                  delete: "Изтрий",
                  label: "Име",
                  dateStart: "Начална дата",
                  dateEnd: "Крайна дата",
                  repeat: "Повторение",
                  description: "Описание",
                  repeatFreq: "Честота на повтаряне",
                  repeatInterval: "Повтаряй всеки",
                  repeatOn: "Повтаряй на",
                  repeatEnd: "Повтаряй",
                  repeatEndOption: "Никога",
                  repeatEndOnOption: "На",
                  repeatEndAfterOption: "След",
                  repeatEndAfter: "повторения",
                  hidden: "Скрий",
                  hourly: "Часово",
                  daily: "Дневно",
                  weekly: "Седмично",
                  monthly: "Месечно",
                  yearly: "Годишно",
                  repeatConfirm:
                    "Искате ли да промените само текущото събитие или цялата поредица?",
                  repeatConfirmLabel: "Промени Повтарящо се Събитие",
                  createEvent: "Създай Ново Събитие",
                  editEvent: "Промени Събитие",
                  editSeries: "Промени Серия",
                  eventException: "Събитийно Изключение",
                  collector: "още",
                  repeatEveryHour: "часове",
                  repeatEveryDay: "дни",
                  repeatEveryWeek: "седмици",
                  repeatEveryMonth: "месеци",
                  repeatEveryYear: "години",
                  backgroundColor: "Фонов цвят",
                  status: "Статут",
                  resources: "Ресурси",
                  selectPlaceholder: "Изберете...",
                  none: "Няма",
                  free: "Свободен",
                  busy: "Зает",
                  tentative: "Несигурен",
                  outOfOffice: "Извън офиса",
                  exceptions: "Изключения",
                  resetExceptions: "Премахни Изключенията",
                  notifications: "Нотификации",
                  notificationMessage: " започва на ",
                  today: "Днес",
                  agendaShortcut: "А",
                  dayShortcut: "Д",
                  weekShortcut: "С",
                  monthShortcut: "М",
                  timelineDayShortcut: "Т+А",
                  timelineWeekShortcut: "Т+У",
                  timelineMonthShortcut: "Т+П",
                  showWeekends: "Покажи уикенда",
                  beforeAt: "по-рано в",
                  days: "дни",
                  weeks: "седмици",
                  placeholder: "Добави нотификация",
                  now: "Сега",
                  dateTabLabel: "Дата",
                  timeTabLabel: "Време",
                  hours: "Часове",
                  minutes: "Минути",
                  am: "по",
                  pm: "со",
                },
                en: {
                  invalidValue:
                    "{{elementType}}: Invalid {{property}} value. {{property}} should be of type {{typeOne}} or {{typeTwo}}.",
                  invalidTimeZone:
                    "{{elementType}}: Invalid timeZone value. TimeZone should be from the IANA time zone database.",
                  incorrectArgument:
                    "{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",
                  noId:
                    "smartScheduler requires an id in order to save/load/clear a state.",
                  agenda: "Agenda",
                  agendaPlaceholder: "No events to display",
                  day: "Day",
                  week: "Week",
                  month: "Month",
                  allDay: "All Day",
                  timelineDay: "Timeline Day",
                  timelineWeek: "Timeline Week",
                  timelineMonth: "Timeline Month",
                  newEvent: "New Event",
                  ok: "Ok",
                  cancel: "Cancel",
                  delete: "Delete",
                  label: "Label",
                  dateStart: "Start Date",
                  dateEnd: "End Date",
                  repeat: "Repeat",
                  description: "Description",
                  repeatFreq: "Repeat",
                  repeatInterval: "Repeat Every",
                  repeatOn: "Repeat On",
                  repeatEnd: "End Repeat",
                  repeatEndOption: "Never",
                  repeatEndOnOption: "On",
                  repeatEndAfterOption: "After",
                  repeatEndAfter: "occurrence(s)",
                  hidden: "Hidden",
                  hourly: "Hourly",
                  daily: "Daily",
                  weekly: "Weekly",
                  monthly: "Monthly",
                  yearly: "Yearly",
                  repeatConfirm:
                    "Do you want to edit only the current event or the whole series ?",
                  repeatConfirmLabel: "Edit Repeating Event",
                  createEvent: "Create a new Event",
                  editEvent: "Edit event",
                  editSeries: "Edit series",
                  eventException: "Event Exception",
                  collector: "more",
                  repeatEveryHour: "hours",
                  repeatEveryDay: "days",
                  repeatEveryWeek: "weeks",
                  repeatEveryMonth: "months",
                  repeatEveryYear: "years",
                  backgroundColor: "Background Color",
                  status: "Status",
                  resources: "Resources",
                  selectPlaceholder: "Select...",
                  none: "None",
                  free: "Free",
                  busy: "Busy",
                  tentative: "Tentative",
                  outOfOffice: "Out of Office",
                  exceptions: "Exceptions",
                  resetExceptions: "Reset Exceptions",
                  notifications: "Notification(s)",
                  notificationMessage: "is starting on",
                  today: "Today",
                  agendaShortcut: "A",
                  dayShortcut: "D",
                  weekShortcut: "W",
                  monthShortcut: "M",
                  timelineDayShortcut: "T+D",
                  timelineWeekShortcut: "T+W",
                  timelineMonthShortcut: "T+M",
                  showWeekends: "Show weekends",
                  beforeAt: "before at",
                  days: "days",
                  weeks: "weeks",
                  placeholder: "Add notification",
                  now: "Now",
                  dateTabLabel: "DATE",
                  timeTabLabel: "TIME",
                  hours: "Hours",
                  minutes: "Minutes",
                  am: "am",
                  pm: "pm",
                },
                de: {
                  invalidValue:
                    "{{elementType}}: Ungültiger {{property}} Wert. {{property}} sollte vom Typ {{typeOne}} oder {{typeTwo}} sein.",
                  invalidTimeZone:
                    "{{elementType}}: Ungültiger Zeitzonenwert. Die Zeitzone sollte aus der IANA-Zeitzonendatenbank stammen.",
                  incorrectArgument:
                    "{{elementType}}: Falsches Argument {{argumentName}} in Methode {{methodName}}.",
                  noId:
                    "smartScheduler benötigt eine ID, um einen Status zu speichern / laden / löschen.",
                  agenda: "Agenda",
                  agendaPlaceholder: "Keine Ereignisse zum Anzeigen",
                  day: "Tag",
                  week: "Woche",
                  month: "Monat",
                  allDay: "Den ganzen Tag",
                  timelineDay: "Zeitleiste Тag",
                  timelineWeek: "Zeitleiste Woche",
                  timelineMonth: "Zeitleiste Monat",
                  newEvent: "Neues Veranstaltung",
                  ok: "Ok",
                  cancel: "Stornieren",
                  delete: "Löschen",
                  label: "Etikette",
                  dateStart: "Anfangsdatum",
                  dateEnd: "Endtermin",
                  repeat: "Wiederholen",
                  description: "Beschreibung",
                  repeatFreq: "Wiederholen",
                  repeatInterval: "Wiederhole jeden",
                  repeatOn: "Wiederholen Sie Ein",
                  repeatEnd: "Ende Wiederholung",
                  repeatEndOption: "noch nie",
                  repeatEndOnOption: "Auf",
                  repeatEndAfterOption: "Nach",
                  repeatEndAfter: "Auftreten",
                  hidden: "Versteckt",
                  hourly: "Stündlich",
                  daily: "Täglich",
                  weekly: "Wöchentlich",
                  monthly: "Monatlich",
                  yearly: "Jährlich",
                  repeatConfirm:
                    "Möchten Sie nur das aktuelle Ereignis oder die gesamte Serie bearbeiten? ?",
                  repeatConfirmLabel: "Wiederholtes Ereignis bearbeiten",
                  createEvent: "Erstellen Sie ein neues Ereignis",
                  editEvent: "Ereignis bearbeiten",
                  editSeries: "Serie bearbeiten",
                  eventException: "Ereignisausnahme",
                  collector: "Mehr",
                  repeatEveryHour: "Std",
                  repeatEveryDay: "Tage",
                  repeatEveryWeek: "Wochen",
                  repeatEveryMonth: "Monate",
                  repeatEveryYear: "Jahre",
                  backgroundColor: "Hintergrundfarbe",
                  status: "Status",
                  resources: "Ressourcen",
                  selectPlaceholder: "Wählen...",
                  none: "Keiner",
                  free: "Frei",
                  busy: "Beschäftigt",
                  tentative: "Vorsichtig",
                  outOfOffice: "Ausserhaus",
                  exceptions: "Ausnahmen",
                  resetExceptions: "Ausnahmen zurücksetzen",
                  notifications: "Benachrichtigung",
                  notificationMessage: "beginnt am",
                  today: "Heute",
                  agendaShortcut: "A",
                  dayShortcut: "D",
                  weekShortcut: "W",
                  monthShortcut: "M",
                  timelineDayShortcut: "T+D",
                  timelineWeekShortcut: "T+W",
                  timelineMonthShortcut: "T+M",
                  showWeekends: "Showwochenenden",
                  beforeAt: "vorher um",
                  days: "Tage",
                  weeks: "Wochen",
                  placeholder: "Benachrichtigung hinzufügen",
                  now: "Jetzt",
                  dateTabLabel: "DATUM",
                  timeTabLabel: "ZEIT",
                  hours: "Std",
                  minutes: "Protokoll",
                  am: "nm",
                  pm: "vm",
                },
                fr: {
                  invalidValue:
                    "{{elementType}}: valeur {{property}} non valide. {{property}} doit être de type {{typeOne}} ou {{typeTwo}}.",
                  invalidTimeZone:
                    "{{elementType}}: valeur timeZone non valide. TimeZone doit provenir de la base de données des fuseaux horaires de l'IANA.",
                  incorrectArgument:
                    "{{elementType}}: argument incorrect {{argumentName}} dans la méthode {{methodName}}.",
                  noId:
                    "smartScheduler nécessite un identifiant pour enregistrer / charger / effacer un état.",
                  agenda: "Ordre du jour",
                  agendaPlaceholder: "Aucun événement à afficher",
                  day: "journée",
                  week: "La semaine",
                  month: "Mois",
                  allDay: "Toute la journée",
                  timelineDay: "Chronologie journée",
                  timelineWeek: "Chronologie La semaine",
                  timelineMonth: "Chronologie Mois",
                  newEvent: "Nouvel évènement",
                  ok: "D'accord",
                  cancel: "Annuler",
                  delete: "Supprimer",
                  label: "Étiquette",
                  dateStart: "Date de début",
                  dateEnd: "Date de fin",
                  repeat: "Répéter",
                  description: "La description",
                  repeatFreq: "Répéter",
                  repeatInterval: "Répéter Chaque",
                  repeatOn: "Répéter Sur",
                  repeatEnd: "Fin Répéter",
                  repeatEndOption: "Never",
                  repeatEndOnOption: "Sur",
                  repeatEndAfterOption: "Après",
                  repeatEndAfter: "l' occurrence",
                  hidden: "Caché",
                  hourly: "À l'heure",
                  daily: "du quotidien",
                  weekly: "Hebdomadaire",
                  monthly: "Mensuele",
                  yearly: "Annuel",
                  repeatConfirm:
                    "Voulez-vous modifier uniquement l'événement en cours ou toute la série ?",
                  repeatConfirmLabel: "Modifier l'événement récurrent",
                  createEvent: "Créer un nouvel événement",
                  editEvent: "Modifier l'événement",
                  editSeries: "Modifier la série",
                  eventException: "Exception d'événement",
                  collector: "plus",
                  repeatEveryHour: "heures",
                  repeatEveryDay: "journées",
                  repeatEveryWeek: "semaines",
                  repeatEveryMonth: "mois",
                  repeatEveryYear: "années",
                  backgroundColor: "Couleur de l'arrière plan",
                  status: "Statut",
                  resources: "Ressources",
                  selectPlaceholder: "Sélectionner...",
                  none: "Aucun",
                  free: "Libre",
                  busy: "Occupé",
                  tentative: "Provisoire",
                  outOfOffice: "Absent du bureau",
                  exceptions: "Des exceptions",
                  resetExceptions: "Réinitialiser les exceptions",
                  notifications: "la notification",
                  notificationMessage: "commence le",
                  today: "Aujourd'hui",
                  agendaShortcut: "UN",
                  dayShortcut: "Ré",
                  weekShortcut: "W",
                  monthShortcut: "M",
                  timelineDayShortcut: "T+D",
                  timelineWeekShortcut: "T+W",
                  timelineMonthShortcut: "T+M",
                  showWeekends: "Afficher les week-ends",
                  beforeAt: "avant à",
                  days: "journées",
                  weeks: "semaines",
                  placeholder: "Ajouter une notification",
                  now: "Maintenant",
                  dateTabLabel: "DATE",
                  timeTabLabel: "TEMPS",
                  hours: "Heures",
                  minutes: "Minutes",
                  am: "am",
                  pm: "pm",
                },
              },
            };
          }
        }
      );
      window.Smart(
        "#input",
        class {
          get properties() {
            return {
              value: "de",
              dataSource: ["bg", "en", "de", "fr"],
              dropDownButtonPosition: "right",
            };
          }
        }
      );

      const scheduler = document.querySelector("smart-scheduler"),
        demoHeader = document.querySelector(".demo-header"),
        checkBox = document.getElementById("checkbox");

      loadEvents(true);

      document
        .getElementById("input")
        .addEventListener("change", function (event) {
          const locale = event.target.value;
          scheduler.locale = locale;
          loadEvents();
          switch (locale) {
            case "en":
              checkBox.innerHTML = "Show Working Hours";
              break;
            case "bg":
              checkBox.innerHTML = "Покажи Работните Часове";
              break;
            case "de":
              checkBox.innerHTML = "Arbeitszeiten Anzeigen";
              break;
            case "fr":
              checkBox.innerHTML = "Afficher Les Heures De Travail";
              break;
          }
        });
      demoHeader.addEventListener("change", function () {
        const eventIds = Array.from(
          demoHeader.querySelectorAll(".smart-check-box[checked]")
        ).map((i) => i.id);
        scheduler.dataSource = data.filter(
          (d) => eventIds.indexOf(d.class) > -1
        );
        loadEvents();
      });
      checkBox.addEventListener("change", function (event) {
        if (event.target.checked) {
          scheduler.hourStart = 8;
          scheduler.hourEnd = 16;
        } else {
          scheduler.hourStart = 0;
          scheduler.hourEnd = 23;
        }
      });

      function loadEvents(initialize) {
        const events = initialize ? data : scheduler.events,
          locale = scheduler.locale;

        for (let i = 0; i < events.length; i++) {
          const event = events[i];
          event.label = event[locale + "Label"];
        }

        scheduler.dataSource = events;
      }
    });
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  --smart-scheduler-shortcut-size: 30px;
}

.smart-scheduler {
  width: calc(100% - 260px);
  height: calc(100% - 140px);
}

#app,
.vue-root {
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

.options {
  box-sizing: border-box;
  overflow: hidden;
}

.options .smart-input {
  width: 100%;
}

.demo-header {
  width: calc(100% - 260px);
  height: 140px;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;
  grid-column-gap: 10px;
  position: relative;
}

.demo-header-label {
  width: 100%;
  font-size: 45px;
  text-shadow: 1px 5px 5px var(--smart-border);
  display: flex;
  align-items: flex-end;
}

.demo-content {
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.demo-header .person-a,
.demo-header .person-b,
.demo-header .person-c {
  height: 100%;
  width: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 10px;
  box-shadow: 0 0 5px 4px var(--smart-border);
}

.demo-header .person-a {
  background-image: url(./../../../demos/images/people/steven.png);
}

.demo-header .person-b {
  background-image: url(./../../../demos/images/people/mark.png);
}

.demo-header .person-c {
  background-image: url(./../../../demos/images/people/janet.png);
}

@media (max-width: 750px) {
  .smart-scheduler {
    width: 100%;
  }

  .demo-header {
    width: 100%;
  }
}

#steven {
  --smart-primary: #208056;
  --smart-ui-state-border-active: var(--smart-primary);
  --smart-ui-state-active: var(--smart-primary);
}

#mark {
  --smart-primary: #7b60bf;
  --smart-ui-state-border-active: var(--smart-primary);
  --smart-ui-state-active: var(--smart-primary);
}

#janet {
  --smart-primary: #807120;
  --smart-ui-state-border-active: var(--smart-primary);
  --smart-ui-state-active: var(--smart-primary);
}

.steven {
  --smart-scheduler-event-background-rgb: 32, 128, 86;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}

.mark {
  --smart-scheduler-event-background-rgb: 123, 96, 191;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}

.janet {
  --smart-scheduler-event-background-rgb: 128, 113, 32;
  --smart-scheduler-event-background: rgba(
    var(--smart-scheduler-event-background-rgb),
    1
  );
  --smart-scheduler-event-focus: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.9
  );
  --smart-scheduler-event-hover: rgba(
    var(--smart-scheduler-event-background-rgb),
    0.8
  );
}
</style>
