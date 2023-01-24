import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			currentDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'אסטרטגיית AdWords של גוגל',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30)
		}, {
			label: 'עלונים חדשים',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 15)
		}, {
			label: 'סקירת עיצוב חוברות',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 16, 15)
		}, {
			label: 'תכנית עיצוב מחדש של אתרים',
			dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
			dateEnd: new Date(currentYear, currentMonth, 20, 11, 15)
		}, {
			label: 'השקת חוברות אתרים ושיווק חדשות',
			dateStart: new Date(currentYear, currentMonth, 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, 2, 10, 45)
		}, {
			label: 'עדכן מסמכי אסטרטגיית מכירה',
			dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 2, 13, 45)
		}, {
			label: 'הסכמים שאינם מתחרים',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0)
		}, {
			label: 'לאשר שכירת ג\'ון ג\'פרס',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15)
		}, {
			label: 'עדכן את הסכם ה- NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45)
		}, {
			label: 'עדכן קבצי עובדים עם NDA חדש',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45)
		}, {
			label: 'הסכמים להתחרות',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0)
		}, {
			label: 'אשר את העסקת מארק ווטרברג',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15)
		}, {
			label: 'עדכן חוזי NBA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45)
		}, {
			label: 'עדכן מידע על עובדים',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45)
		}, {
			label: 'סקור הסכמים',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0)
		}, {
			label: 'לפטר את ג\'ון ג\'פרס',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15)
		}, {
			label: 'סגור את הסכם ה- NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45)
		}, {
			label: 'מחק קבצי עובדים מפוטרים מ- NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45)
		}, {
			label: 'Review Questions Regarding New NBA',
			dateStart: new Date(currentYear, currentMonth, 6, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, 6, 9, 30)
		}, {
			label: 'הגש NDA חתום',
			dateStart: new Date(currentYear, currentMonth, 6, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 6, 14, 0)
		}, {
			label: 'סקור תחזיות הכנסות',
			dateStart: new Date(currentYear, currentMonth, 6, 17, 15),
			dateEnd: new Date(currentYear, currentMonth, 6, 18, 0)
		}, {
			label: 'תגובה על תחזיות הכנסות',
			dateStart: new Date(currentYear, currentMonth, 5, 9, 15),
			dateEnd: new Date(currentYear, currentMonth, 5, 11, 15)
		}, {
			label: 'ספק מסמכי ביטוח בריאות חדשים',
			dateStart: new Date(currentYear, currentMonth, 5, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 5, 14, 15)
		}, {
			label: 'סקור שינויים בכיסוי ביטוח הבריאות',
			dateStart: new Date(currentYear, currentMonth, 5, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, 5, 15, 30)
		}, {
			label: 'סקור קורס אימונים עבור כל השמטה',
			dateStart: new Date(currentYear, currentMonth, 8, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, 9, 12, 0)
		}, {
			label: 'זוכר את טופס ההנחה',
			dateStart: new Date(currentYear, currentMonth, 8, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 8, 13, 15)
		}, {
			label: 'צור דוח על משוב לקוחות',
			dateStart: new Date(currentYear, currentMonth, 9, 15, 15),
			dateEnd: new Date(currentYear, currentMonth, 9, 17, 30)
		}, {
			label: 'סקור את דוח משוב הלקוחות',
			dateStart: new Date(currentYear, currentMonth, 9, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, 9, 18, 30)
		}, {
			label: 'ניתוח דוחות משוב לקוחות',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30)
		}, {
			label: 'הכן דוח ניתוח עלות משלוח',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 30)
		}, {
			label: 'ספק משוב על שולחים',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0)
		}, {
			label: 'בחר המשלח המועדף',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0)
		}, {
			label: 'טופס בחירת השולח המלא',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 0)
		}, {
			label: 'שדרג את חומרת השרת',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 15)
		}, {
			label: 'שדרג מחשבים אישיים',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 30)
		}, {
			label: 'שדרג אפליקציות ל- Windows RT או הישאר עם WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 13, 0)
		}, {
			label: 'הערכת זמן נדרש ליישומי הפעלת מגע',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 30)
		}, {
			label: 'דווח על מעבר לאפליקציות מבוססות מגע',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 19, 0)
		}, {
			label: 'הגישו עיצוב אתרים חדש',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 0)
		}, {
			label: 'צור סמלים לאתר',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 13, 15)
		}, {
			label: 'צור דפי מוצרים חדשים',
			dateStart: new Date(currentYear, currentMonth, 16, 9, 45),
			dateEnd: new Date(currentYear, currentMonth, 16, 11, 45)
		}, {
			label: 'אשר את הפעלת האתר',
			dateStart: new Date(currentYear, currentMonth, 16, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 16, 15, 15)
		}, {
			label: 'עדכן פרופילי משלוח לקוחות',
			dateStart: new Date(currentYear, currentMonth, 17, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 17, 11, 0)
		}, {
			label: 'צור תוויות החזרת משלוח חדשות',
			dateStart: new Date(currentYear, currentMonth, 17, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 17, 14, 0)
		}, {
			label: 'קבל עיצוב למשלוח תוויות חזרה',
			dateStart: new Date(currentYear, currentMonth, 17, 15, 0),
			dateEnd: new Date(currentYear, currentMonth, 17, 16, 30)
		}, {
			label: 'PSD דרוש למשלוח תוויות חזרה',
			dateStart: new Date(currentYear, currentMonth, 18, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, 18, 9, 15)
		}, {
			label: 'צור קשר עם ספק שירותי האינטרנט ודן באפשרויות התשלום',
			dateStart: new Date(currentYear, currentMonth, 18, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, 18, 16, 0)
		}, {
			label: 'הכן דוח סיכום תמיכה בסוף השנה',
			dateStart: new Date(currentYear, currentMonth, 18, 17, 0),
			dateEnd: new Date(currentYear, currentMonth, 18, 20, 0)
		}, {
			label: 'סקור חומר הדרכה חדש',
			dateStart: new Date(currentYear, currentMonth, 19, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, 19, 9, 15)
		}, {
			label: 'חומר הדרכה מופץ לצוות התמיכה',
			dateStart: new Date(currentYear, currentMonth, 19, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 19, 14, 0)
		}, {
			label: 'לוח זמנים להפצת חומרי אימון',
			dateStart: new Date(currentYear, currentMonth, 19, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, 19, 16, 15)
		}, {
			label: 'אישור להמרה למפרט HDMI חדש',
			dateStart: new Date(currentYear, currentMonth, 22, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 22, 10, 15)
		}, {
			label: 'צור ספייק חדש לשרת אוטומציה',
			dateStart: new Date(currentYear, currentMonth, 22, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, 22, 12, 30)
		}, {
			label: 'סקירת קוד - שרת אוטומציה חדש',
			dateStart: new Date(currentYear, currentMonth, 22, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, 22, 15, 0)
		}, {
			label: 'אשר זמינות לפגישת מכירות',
			dateStart: new Date(currentYear, currentMonth, 23, 10, 15),
			dateEnd: new Date(currentYear, currentMonth, 23, 15, 15)
		}, {
			label: 'קבע פגישה של צוות מכירות מחדש',
			dateStart: new Date(currentYear, currentMonth, 23, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, 23, 18, 0)
		}, {
			label: 'שלח 2 שלטים לטלטלות',
			dateStart: new Date(currentYear, currentMonth, 24, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 24, 11, 45)
		}, {
			label: 'שוחח עם ההנהלה על בגדי מוצר',
			dateStart: new Date(currentYear, currentMonth, 24, 12, 15),
			dateEnd: new Date(currentYear, currentMonth, 24, 16, 45)
		}, {
			label: 'החלף שולחנות עבודה בקומה השלישית',
			dateStart: new Date(currentYear, currentMonth, 25, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 25, 10, 45)
		}, {
			label: 'עדכן מסד נתונים עם לידים חדשים',
			dateStart: new Date(currentYear, currentMonth, 25, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 25, 14, 15)
		}, {
			label: 'שלח דוא"ל לידים חדשים למעקב',
			dateStart: new Date(currentYear, currentMonth, 25, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, 25, 15, 30)
		}, {
			label: 'שלח פירוט מכירות בטריטוריה',
			dateStart: new Date(currentYear, currentMonth, 25, 18, 0),
			dateEnd: new Date(currentYear, currentMonth, 25, 20, 0)
		}, {
			label: 'דוח פירוט מכירות בטריטוריה',
			dateStart: new Date(currentYear, currentMonth, 26, 8, 45),
			dateEnd: new Date(currentYear, currentMonth, 26, 9, 45)
		}, {
			label: 'דוח על מצב המחלקה להנדסה',
			dateStart: new Date(currentYear, currentMonth, 26, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, 26, 15, 30)
		}, {
			label: 'דוח פריון הצוות',
			dateStart: new Date(currentYear, currentMonth, 26, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, 26, 19, 30)
		}];
	}

	view = 'week';

	views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth', 'agenda'];

	rightToLeft = true;

	locale = 'he';

	messages = {
		'he': {
			'invalidValue': '{{elementType}}: ערך {{property}} לא חוקי. {{property}} צריך להיות מסוג {{typeOne}} או {{typeTwo}}.',
			'invalidTimeZone': '{{elementType}}: ערך timeZone לא חוקי. TimeZone צריך להיות ממסד הנתונים של אזור הזמן של IANA.',
			'incorrectArgument': '{{elementType}}: טיעון שגוי {{argumentName}} בשיטה {{methodName}}.',
			'noId': 'smartScheduler דורש מזהה על מנת לשמור / לטעון / לנקות מצב.',
			'agenda': 'סֵדֶר הַיוֹם',
			'day': 'יְוֹם',
			'week': 'שָׁבוּעַ',
			'month': 'חוֹדֶשׁ',
			'allDay': 'כל היום',
			'timelineDay': 'יום ציר הזמן',
			'timelineWeek': 'שבוע ציר הזמן',
			'timelineMonth': 'חודש ציר הזמן',
			'newEvent': 'אירוע חדש',
			'ok': 'בסדר',
			'cancel': 'לְבַטֵל',
			'delete': 'לִמְחוֹק',
			'label': 'תווית',
			'dateStart': 'תאריך התחלה',
			'dateEnd': 'תאריך סיום',
			'repeat': 'חזור',
			'description': 'תיאור',
			'repeatFreq': 'חזור',
			'repeatInterval': 'חזור על כל',
			'repeatOn': 'חזור על',
			'repeatEnd': 'סיום חזור',
			'repeatEndOption': 'לעולם לא',
			'repeatEndOnOption': 'עַל',
			'repeatEndAfterOption': 'לאחר',
			'repeatEndAfter': 'התרחשות',
			'hidden': 'מוּסתָר',
			'hourly': 'לפי שעה',
			'daily': 'יומי',
			'weekly': 'שְׁבוּעִי',
			'monthly': 'יַרחוֹן',
			'yearly': 'שְׁנָתִי',
			'repeatConfirm': 'האם אתה רוצה לערוך רק את האירוע הנוכחי או את כל הסדרה?',
			'repeatConfirmLabel': 'ערוך אירוע חוזר',
			'createEvent': 'צור אירוע חדש',
			'editEvent': 'ערוך אירוע',
			'editSeries': 'ערוך סדרה',
			'eventException': 'חריג אירוע',
			'collector': 'יותר',
			'repeatEveryHour': 'שעה (ות',
			'repeatEveryDay': 'ימים',
			'repeatEveryWeek': 'שבועות',
			'repeatEveryMonth': 'חודשים',
			'repeatEveryYear': 'שנים',
			'backgroundColor': 'צבע רקע',
			'status': 'סטָטוּס',
			'resources': 'אֶמְצָעִי',
			'selectPlaceholder': 'בחר...',
			'none': 'אף אחד',
			'free': 'חינם',
			'busy': 'עסוק',
			'tentative': 'זְמַנִי',
			'outOfOffice': 'מחוץ למשרד',
			'exceptions': 'חריגים',
			'resetExceptions': 'אפס חריגים',
			'notifications': 'הוֹדָעָה',
			'notificationMessage': 'מתחיל ב',
			'today': 'היום',
			'agendaShortcut': 'א',
			'dayShortcut': 'ד',
			'weekShortcut': 'IN',
			'monthShortcut': 'M',
			'timelineDayShortcut': 'T+D',
			'timelineWeekShortcut': 'T+W',
			'timelineMonthShortcut': 'T+M',
			'showWeekends': 'הצגת סופי שבוע',
			'beforeAt': 'לפני בשעה',
			'days': 'ימים',
			'weeks': 'שבועות',
			'placeholder': 'הוסף הודעה',
			'now': 'עַכשָׁיו',
			'dateTabLabel': 'תַאֲרִיך',
			'timeTabLabel': 'זְמַן',
			'hours': 'שעה (ות',
			'minutes': 'דקות',
			'am': 'אני',
			'pm': 'אחר הצהריים'
		}
	};

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler id="scheduler" dataSource={this.data} view={this.view}
					views={this.views}
					rightToLeft={this.rightToLeft}
					locale={this.locale}
					messages={this.messages}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
