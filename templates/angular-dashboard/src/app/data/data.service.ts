import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data3Months = {
    totalActive: 145,
    totalClosed: 55,
    totalOpen: 30,
    closeRate: 38,
    activeChartData: [
      { month: 1, count: 6 },
      { month: 2, count: 13 },
      { month: 3, count: 15 },
      { month: 4, count: 10 },
      { month: 5, count: 13 },
      { month: 6, count: 9 },
      { month: 7, count: 13 },
      { month: 8, count: 16 },
      { month: 9, count: 15 },
      { month: 10, count: 10 },
      { month: 11, count: 13 },
      { month: 12, count: 12 }    
    ],
    closedChartData: [
      { month: 1, count: 8 },
      { month: 2, count: 13 },
      { month: 3, count: 11 },
      { month: 4, count: 8 },
      { month: 5, count: 10 },
      { month: 6, count: 12 },
      { month: 7, count: 10 },
      { month: 8, count: 7 },
      { month: 9, count: 9 },
      { month: 10, count: 6 },
      { month: 11, count: 6 },
      { month: 12, count: 5 }  
    ],  
    openChartData: [
      { month: 1, count: 5 },
      { month: 2, count: 6 },
      { month: 3, count: 5 },
      { month: 4, count: 7 },
      { month: 5, count: 9 },
      { month: 6, count: 8 },
      { month: 7, count: 8 },
      { month: 8, count: 10 },
      { month: 9, count: 12 },
      { month: 10, count: 15 },
      { month: 11, count: 13 },
      { month: 12, count: 10 }  
    ],
    allIssuesData: [
      { month: 1, closed: 8, open: 5 },
      { month: 2, closed: 13, open: 6 },
      { month: 3, closed: 11, open: 5 },
      { month: 4, closed: 8, open: 7 },
      { month: 5, closed: 10, open: 9 },
      { month: 6, closed: 12, open: 8 },
      { month: 7, closed: 10, open: 8 },
      { month: 8, closed: 7, open: 10 },
      { month: 9, closed: 9, open: 12 },
      { month: 10, closed: 6, open: 15 },
      { month: 11, closed: 6, open: 13 },
      { month: 12, closed: 5, open: 10 }  
    ]
  };
  private data3ToMeMonths = {
    totalActive: 136,
    totalClosed: 35,
    totalOpen: 36,
    closeRate: 32,
    activeChartData: [
      { month: 1, count: 6 },
      { month: 2, count: 13 },
      { month: 3, count: 15 },
      { month: 4, count: 10 },
      { month: 5, count: 13 },
      { month: 6, count: 9 },
      { month: 7, count: 13 },
      { month: 8, count: 16 },
      { month: 9, count: 15 },
      { month: 10, count: 10 },
      { month: 11, count: 13 },
      { month: 12, count: 12 }    
    ],
    closedChartData: [
      { month: 1, count: 8 },
      { month: 2, count: 8 },
      { month: 3, count: 13 },
      { month: 4, count: 10 },
      { month: 5, count: 8 },
      { month: 6, count: 7 },
      { month: 7, count: 10 },
      { month: 8, count: 12 },
      { month: 9, count: 15 },
      { month: 10, count: 13 },
      { month: 11, count: 10 },
      { month: 12, count: 8 }  
    ],  
    openChartData: [
      { month: 1, count: 7 },
      { month: 2, count: 11 },
      { month: 3, count: 8 },
      { month: 4, count: 7 },
      { month: 5, count: 8 },
      { month: 6, count: 6 },
      { month: 7, count: 9 },
      { month: 8, count: 12 },
      { month: 9, count: 14 },
      { month: 10, count: 15 },
      { month: 11, count: 16 },
      { month: 12, count: 13 }  
    ],
    allIssuesData: [
      { month: 1, closed: 8, open: 7 },
      { month: 2, closed: 8, open: 11 },
      { month: 3, closed: 13, open: 8 },
      { month: 4, closed: 10, open: 7 },
      { month: 5, closed: 8, open: 8 },
      { month: 6, closed: 7, open: 6 },
      { month: 7, closed: 10, open: 9 },
      { month: 8, closed: 12, open: 12 },
      { month: 9, closed: 15, open: 14 },
      { month: 10, closed: 13, open: 15 },
      { month: 11, closed: 10, open: 16 },
      { month: 12, closed: 8, open: 13 }  
    ]
  };
  private data3ByMeMonths = {
    totalActive: 121,
    totalClosed: 48,
    totalOpen: 26,
    closeRate: 30,
    activeChartData: [
      { month: 1, count: 6 },
      { month: 2, count: 13 },
      { month: 3, count: 15 },
      { month: 4, count: 10 },
      { month: 5, count: 13 },
      { month: 6, count: 9 },
      { month: 7, count: 13 },
      { month: 8, count: 16 },
      { month: 9, count: 15 },
      { month: 10, count: 10 },
      { month: 11, count: 13 },
      { month: 12, count: 12 }    
    ],
    closedChartData: [
      { month: 1, count: 8 },
      { month: 2, count: 13 },
      { month: 3, count: 11 },
      { month: 4, count: 8 },
      { month: 5, count: 10 },
      { month: 6, count: 12 },
      { month: 7, count: 10 },
      { month: 8, count: 7 },
      { month: 9, count: 9 },
      { month: 10, count: 6 },
      { month: 11, count: 6 },
      { month: 12, count: 5 }  
    ],  
    openChartData: [
      { month: 1, count: 12 },
      { month: 2, count: 13 },
      { month: 3, count: 8 },
      { month: 4, count: 7 },
      { month: 5, count: 9 },
      { month: 6, count: 8 },
      { month: 7, count: 8 },
      { month: 8, count: 10 },
      { month: 9, count: 12 },
      { month: 10, count: 15 },
      { month: 11, count: 13 },
      { month: 12, count: 10 }  
    ],
    allIssuesData: [
      { month: 1, closed: 8, open: 12 },
      { month: 2, closed: 13, open: 13 },
      { month: 3, closed: 11, open: 8 },
      { month: 4, closed: 8, open: 7 },
      { month: 5, closed: 10, open: 9 },
      { month: 6, closed: 12, open: 8 },
      { month: 7, closed: 10, open: 8 },
      { month: 8, closed: 7, open: 10 },
      { month: 9, closed: 9, open: 12 },
      { month: 10, closed: 6, open: 15 },
      { month: 11, closed: 6, open: 13 },
      { month: 12, closed: 5, open: 10 }  
    ]
  };

  private data6Months = {
    totalActive: 208,
    totalClosed: 162,
    totalOpen: 176,
    closeRate: 68,
    activeChartData: [
      { month: 1, count: 10 },
      { month: 2, count: 16 },
      { month: 3, count: 20 },
      { month: 4, count: 18 },
      { month: 5, count: 15 },
      { month: 6, count: 12 },
      { month: 7, count: 10 },
      { month: 8, count: 22 },
      { month: 9, count: 23 },
      { month: 10, count: 15 },
      { month: 11, count: 22 },
      { month: 12, count: 25 }    
    ],
    closedChartData: [
      { month: 1, count: 12 },
      { month: 2, count: 16 },
      { month: 3, count: 15 },
      { month: 4, count: 12 },
      { month: 5, count: 16 },
      { month: 6, count: 18 },
      { month: 7, count: 15 },
      { month: 8, count: 10 },
      { month: 9, count: 15 },
      { month: 10, count: 14 },
      { month: 11, count: 10 },
      { month: 12, count: 9 }  
    ],  
    openChartData: [
      { month: 1, count: 8 },
      { month: 2, count: 8 },
      { month: 3, count: 10 },
      { month: 4, count: 11 },
      { month: 5, count: 9 },
      { month: 6, count: 14 },
      { month: 7, count: 17 },
      { month: 8, count: 20 },
      { month: 9, count: 22 },
      { month: 10, count: 25 },
      { month: 11, count: 19 },
      { month: 12, count: 13 }  
    ],
    allIssuesData: [
      { month: 1, closed: 12, open: 8 },
      { month: 2, closed: 16, open: 8 },
      { month: 3, closed: 15, open: 10 },
      { month: 4, closed: 12, open: 11 },
      { month: 5, closed: 16, open: 9 },
      { month: 6, closed: 18, open: 14 },
      { month: 7, closed: 15, open: 17 },
      { month: 8, closed: 10, open: 20 },
      { month: 9, closed: 15, open: 22 },
      { month: 10, closed: 14, open: 25 },
      { month: 11, closed: 10, open: 19 },
      { month: 12, closed: 9 , open: 13 }  
    ]
  };
  private data6ToMeMonths = {
    totalActive: 140,
    totalClosed: 111,
    totalOpen: 126,
    closeRate: 75,
    activeChartData: [
      { month: 1, count: 10 },
      { month: 2, count: 16 },
      { month: 3, count: 20 },
      { month: 4, count: 18 },
      { month: 5, count: 15 },
      { month: 6, count: 12 },
      { month: 7, count: 10 },
      { month: 8, count: 22 },
      { month: 9, count: 23 },
      { month: 10, count: 15 },
      { month: 11, count: 22 },
      { month: 12, count: 25 }    
    ],
    closedChartData: [
      { month: 1, count: 16 },
      { month: 2, count: 12 },
      { month: 3, count: 14 },
      { month: 4, count: 15 },
      { month: 5, count: 10 },
      { month: 6, count: 12 },
      { month: 7, count: 15 },
      { month: 8, count: 18 },
      { month: 9, count: 20 },
      { month: 10, count: 15 },
      { month: 11, count: 18 },
      { month: 12, count: 15 }  
    ],  
    openChartData: [
      { month: 1, count: 12 },
      { month: 2, count: 14 },
      { month: 3, count: 10 },
      { month: 4, count: 11 },
      { month: 5, count: 8 },
      { month: 6, count: 7 },
      { month: 7, count: 12 },
      { month: 8, count: 16 },
      { month: 9, count: 22 },
      { month: 10, count: 18 },
      { month: 11, count: 12 },
      { month: 12, count: 13 }  
    ],
    allIssuesData: [
      { month: 1, closed: 16, open: 12 },
      { month: 2, closed: 12, open: 14 },
      { month: 3, closed: 14, open: 10 },
      { month: 4, closed: 15, open: 11 },
      { month: 5, closed: 10, open: 8 },
      { month: 6, closed: 12, open: 7 },
      { month: 7, closed: 15, open: 12 },
      { month: 8, closed: 18, open: 16 },
      { month: 9, closed: 20, open: 22 },
      { month: 10, closed: 15, open: 18 },
      { month: 11, closed: 18, open: 12 },
      { month: 12, closed: 15, open: 13 }  
    ]
  };
  private data6ByMeMonths = {
    totalActive: 155,
    totalClosed: 120,
    totalOpen: 110,
    closeRate: 70,
    activeChartData: [
      { month: 1, count: 10 },
      { month: 2, count: 16 },
      { month: 3, count: 20 },
      { month: 4, count: 18 },
      { month: 5, count: 15 },
      { month: 6, count: 12 },
      { month: 7, count: 10 },
      { month: 8, count: 22 },
      { month: 9, count: 23 },
      { month: 10, count: 15 },
      { month: 11, count: 22 },
      { month: 12, count: 25 }    
    ],
    closedChartData: [
      { month: 1, count: 15 },
      { month: 2, count: 13 },
      { month: 3, count: 11 },
      { month: 4, count: 12 },
      { month: 5, count: 8 },
      { month: 6, count: 14 },
      { month: 7, count: 17 },
      { month: 8, count: 16 },
      { month: 9, count: 15 },
      { month: 10, count: 6 },
      { month: 11, count: 10 },
      { month: 12, count: 9 }  
    ],  
    openChartData: [
      { month: 1, count: 6 },
      { month: 2, count: 6 },
      { month: 3, count: 10 },
      { month: 4, count: 8 },
      { month: 5, count: 10 },
      { month: 6, count: 13 },
      { month: 7, count: 16 },
      { month: 8, count: 20 },
      { month: 9, count: 16 },
      { month: 10, count: 18 },
      { month: 11, count: 12 },
      { month: 12, count: 10 }  
    ],
    allIssuesData: [
      { month: 1, closed: 15, open: 6 },
      { month: 2, closed: 13, open: 6 },
      { month: 3, closed: 11, open: 10 },
      { month: 4, closed: 12, open: 8 },
      { month: 5, closed: 8, open: 10 }, 
      { month: 6, closed: 14, open: 13 },
      { month: 7, closed: 17, open: 16 },
      { month: 8, closed: 16, open: 20 },
      { month: 9, closed: 15, open: 16 },
      { month: 10, closed: 6, open: 18},
      { month: 11, closed: 10, open: 12 },
      { month: 12, closed: 9, open: 10}  
    ]
  };

  private data1Year = {
    totalActive: 281,
    totalClosed: 213,
    totalOpen: 237,
    closeRate: 89,
    activeChartData: [
      { month: 1, count: 16 },
      { month: 2, count: 22 },
      { month: 3, count: 25 },
      { month: 4, count: 26 },
      { month: 5, count: 24 },
      { month: 6, count: 22 },
      { month: 7, count: 14 },
      { month: 8, count: 25 },
      { month: 9, count: 27 },
      { month: 10, count: 25 },
      { month: 11, count: 25 },
      { month: 12, count: 30 }    
    ],
    closedChartData: [
      { month: 1, count: 16 },
      { month: 2, count: 20 },
      { month: 3, count: 18 },
      { month: 4, count: 15 },
      { month: 5, count: 20 },
      { month: 6, count: 24 },
      { month: 7, count: 19 },
      { month: 8, count: 14 },
      { month: 9, count: 18 },
      { month: 10, count: 18 },
      { month: 11, count: 15 },
      { month: 12, count: 16 }  
    ],  
    openChartData: [
      { month: 1, count: 13 },
      { month: 2, count: 15 },
      { month: 3, count: 12 },
      { month: 4, count: 16 },
      { month: 5, count: 14 },
      { month: 6, count: 20 },
      { month: 7, count: 20 },
      { month: 8, count: 26 },
      { month: 9, count: 28 },
      { month: 10, count: 30 },
      { month: 11, count: 26 },
      { month: 12, count: 17 }  
    ],
    allIssuesData: [
      { month: 1, closed: 16, open: 13 },
      { month: 2, closed: 20, open: 15 },
      { month: 3, closed: 18, open: 12 },
      { month: 4, closed: 15, open: 16 },
      { month: 5, closed: 20, open: 14 },
      { month: 6, closed: 24, open: 20 },
      { month: 7, closed: 19, open: 20 },
      { month: 8, closed: 14, open: 26 },
      { month: 9, closed: 18, open: 28 },
      { month: 10, closed: 18, open: 30 },
      { month: 11, closed: 15, open: 26 },
      { month: 12, closed: 16, open: 17 }  
    ]
  };
  private data1ToMeYear = {
    totalActive: 130,
    totalClosed: 100,
    totalOpen: 120,
    closeRate: 91,
    activeChartData: [
      { month: 1, count: 16 },
      { month: 2, count: 22 },
      { month: 3, count: 25 },
      { month: 4, count: 26 },
      { month: 5, count: 24 },
      { month: 6, count: 22 },
      { month: 7, count: 14 },
      { month: 8, count: 25 },
      { month: 9, count: 27 },
      { month: 10, count: 25 },
      { month: 11, count: 25 },
      { month: 12, count: 30 }    
    ],
    closedChartData: [
      { month: 1, count: 12 },
      { month: 2, count: 15 },
      { month: 3, count: 15 },
      { month: 4, count: 18 },
      { month: 5, count: 20 },
      { month: 6, count: 24 },
      { month: 7, count: 24 },
      { month: 8, count: 24 },
      { month: 9, count: 16 },
      { month: 10, count: 16 },
      { month: 11, count: 12 },
      { month: 12, count: 9 }  
    ],  
    openChartData: [
      { month: 1, count: 10 },
      { month: 2, count: 13 },
      { month: 3, count: 12 },
      { month: 4, count: 10 },
      { month: 5, count: 8 },
      { month: 6, count: 14 },
      { month: 7, count: 16 },
      { month: 8, count: 21 },
      { month: 9, count: 26 },
      { month: 10, count: 25 },
      { month: 11, count: 19 },
      { month: 12, count: 24 }  
    ],
    allIssuesData: [
      { month: 1, closed: 12, open: 10 },
      { month: 2, closed: 15, open: 13 },
      { month: 3, closed: 15, open: 12 },
      { month: 4, closed: 18, open: 10 },
      { month: 5, closed: 20, open: 8 },
      { month: 6, closed: 24, open: 14 },
      { month: 7, closed: 24, open: 16 },
      { month: 8, closed: 24, open: 21 },
      { month: 9, closed: 16, open: 26 },
      { month: 10, closed: 16, open: 25 },
      { month: 11, closed: 12, open: 19 },
      { month: 12, closed: 9, open: 24 }  
    ]
  };
  private data1ByMeYear = {
    totalActive: 210,
    totalClosed: 140,
    totalOpen: 175,
    closeRate: 84,
    activeChartData: [
      { month: 1, count: 16 },
      { month: 2, count: 22 },
      { month: 3, count: 25 },
      { month: 4, count: 26 },
      { month: 5, count: 24 },
      { month: 6, count: 22 },
      { month: 7, count: 14 },
      { month: 8, count: 25 },
      { month: 9, count: 27 },
      { month: 10, count: 25 },
      { month: 11, count: 25 },
      { month: 12, count: 30 }    
    ],
    closedChartData: [
      { month: 1, count: 16 },
      { month: 2, count: 20 },
      { month: 3, count: 20 },
      { month: 4, count: 12 },
      { month: 5, count: 13 },
      { month: 6, count: 15 },
      { month: 7, count: 19 },
      { month: 8, count: 14 },
      { month: 9, count: 12 },
      { month: 10, count: 8 },
      { month: 11, count: 7 },
      { month: 12, count: 14 }  
    ],  
    openChartData: [
      { month: 1, count: 12 },
      { month: 2, count: 11 },
      { month: 3, count: 8 },
      { month: 4, count: 8 },
      { month: 5, count: 12 },
      { month: 6, count: 16 },
      { month: 7, count: 15 },
      { month: 8, count: 14 },
      { month: 9, count: 17 },
      { month: 10, count: 24 },
      { month: 11, count: 18 },
      { month: 12, count: 14 }  
    ],
    allIssuesData: [
      { month: 1, closed: 16, open: 12 },
      { month: 2, closed: 20, open: 11 },
      { month: 3, closed: 20, open: 8 },
      { month: 4, closed: 12, open: 8 },
      { month: 5, closed: 13, open: 12 },
      { month: 6, closed: 15, open: 16 },
      { month: 7, closed: 19, open: 15 },
      { month: 8, closed: 14, open: 14 },
      { month: 9, closed: 12, open: 17 },
      { month: 10, closed: 8, open: 24 },
      { month: 11, closed: 7, open: 18 },
      { month: 12, closed: 14, open: 14 }  
    ]
  };

  get3MonthsData() { 
    return this.data3Months;    
  }
  get3MonthsToMeData() { 
    return this.data3ToMeMonths;    
  }
  get3MonthsByMeData() { 
    return this.data3ByMeMonths;    
  }

  get6MonthsData() { 
    return this.data6Months;    
  }
  get6MonthsToMeData() { 
    return this.data6ToMeMonths;    
  }
  get6MonthsByMeData() { 
    return this.data6ByMeMonths;    
  }

  get1YearData() { 
    return this.data1Year;    
  }
  get1YearToMeData() { 
    return this.data1ToMeYear;    
  }
  get1YearByMeData() { 
    return this.data1ByMeYear;    
  }

  getTasksData(locale = 'en') {
    const text = {
        en: [
            'Research', 'Displaying data from data source', 'Showing cover and title', 'Property validation',
            'formatFunction and formatSettings', 'Expand/collapse arrow', 'Virtual scrolling', 'Deferred scrolling',
            'Infinite scrolling', 'Visible/hidden columns', 'Public methods', 'Editing',
            'Header', 'Dragging with feedback', 'Vertical virtualization', 'Observable columns array',
            'Reusing existing HTML elements', 'Virtualize collapsed cards'
        ],
        he: [
            'מחקר', 'הצגת נתונים ממקור נתונים', 'מראה כריכה וכותרת', 'אימות נכס',
            'formatFunction ו formatSettings', 'הרחב / כווץ חץ', 'גלילה וירטואלית', 'גלילה נדחית',
            'גלילה אינסופית', 'עמודות גלויות / מוסתרות', 'שיטות ציבוריות', 'עריכה',
            'כותרת עליונה', 'גרירה עם משוב', 'וירטואליזציה אנכית', 'מערך עמודות ניתן לצפייה',
            'שימוש חוזר באלמנטים HTML קיימים', 'וירטואליזציה של כרטיסים שהתמוטטו'
        ]
    },
        tags = {
            en: ['initial', 'data', 'visual', 'property', 'scrolling', 'method'],
            he: ['התחלתי', 'נתונים', 'חזותי', 'תכונה', 'גלילה', 'שיטה']
        },
        data = [
            {
                id: 0,
                status: 'done',
                text: text[locale][0],
                tags: tags[locale][0],
                progress: 100,
                userId: 2

            }, {
                id: 1,
                status: 'done',
                text: text[locale][1],
                tags: tags[locale][1],
                priority: 'high',
                progress: 100,
                userId: 3
            }, {
                id: 2,
                status: 'done',
                text: text[locale][2],
                tags: tags[locale][2] + ', ' + tags[locale][3],
                priority: 'high',
                progress: 100,
                userId: 2
            }, {
                id: 3,
                status: 'done',
                text: text[locale][3],
                tags: tags[locale][3],
                checklist: [
                    { text: 'addNewButton', completed: true },
                    { text: 'allowDrag', completed: true },
                    { text: 'cardHeight', completed: true },
                    { text: 'cellOrientation', completed: true },
                    { text: 'collapsible', completed: true },
                    { text: 'columns', completed: true }
                ],
                userId: 1
            }, {
                id: 4,
                status: 'done',
                text: text[locale][4],
                tags: tags[locale][1] + ', ' + tags[locale][3],
                progress: 100,
                userId: 0
            }, {
                id: 5,
                status: 'testing',
                text: text[locale][5],
                tags: tags[locale][2],
                progress: 90,
                userId: 3
            }, {
                id: 7,
                status: 'testing',
                text: text[locale][6],
                tags: tags[locale][4] + ', ' + tags[locale][1],
                progress: 10,
                userId: 3
            }, {
                id: 6,
                status: 'testing',
                text: text[locale][7],
                tags: tags[locale][4],
                color: '#9966CC',
                userId: 3
            }, {
                id: 8,
                status: 'inProgress',
                text: text[locale][8],
                tags: tags[locale][4] + ', ' + tags[locale][1],
                progress: 25,
                userId: 0
            }, {
                id: 9,
                status: 'inProgress',
                text: text[locale][9],
                tags: tags[locale][2],
                priority: 'high',
                progress: 85,
                color: 'red',
                userId: 1
            }, {
                id: 10,
                status: 'inProgress',
                text: text[locale][10],
                tags: tags[locale][5],
                checklist: [
                    { text: 'closePanel', completed: true },
                    { text: 'openCustomizePanel', completed: true },
                    { text: 'openFilterPanel', completed: true },
                    { text: 'openSortPanel', completed: false },
                    { text: 'showColumn', completed: false },
                    { text: 'hideColumn', completed: false },
                    { text: 'addFilter', completed: false },
                    { text: 'removeFilter', completed: false }
                ],
                userId: 2
            }, {
                id: 11,
                status: 'toDo',
                text: text[locale][11],
                tags: tags[locale][5],
                priority: 'high',
                progress: 0
            }, {
                id: 12,
                status: 'toDo',
                text: text[locale][12],
                tags: tags[locale][2]
            }, {
                id: 13,
                status: 'toDo',
                text: text[locale][13],
                tags: tags[locale][2] + ', ' + tags[locale][5] + ', ' + tags[locale][1],
                priority: 'low',
                userId: 4
            }, {
                id: 14,
                status: 'toDo',
                text: text[locale][14],
                checklist: [
                    { text: text[locale][16], completed: false },
                    { text: text[locale][17], completed: false }
                ],
                userId: 1
            }
        ],
        time = new Date().getTime(),
        msInMonth = 2592000000,
        msInDay = 86400000,
        comments = [
            'Ut ultrices dolor vitae magna lacinia vehicula.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Donec vitae dapibus mauris, quis cursus nibh.',
            'Aenean ultrices maximus ex id scelerisque. Suspendisse cursus maximus nulla, sed ornare lectus aliquet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'Curabitur at accumsan metus, rhoncus porttitor ligula.',
            'Nulla sodales faucibus accumsan.'
        ];

    for (let i = 0; i < data.length; i++) {
        const task: any = data[i];

        // if (task.status === 'inProgress') {
        //     task.startDate = new Date(time - Math.floor(Math.random() * 9 + 1) * msInDay);
        // }
        // else if (task.status === 'testing') {
        //     task.startDate = new Date(time - Math.floor(Math.random() * 20 + 10) * msInDay);
        // }
        // else if (task.status === 'done') {
        //     task.startDate = new Date(time - Math.floor(Math.random() * 20 + 20) * msInDay);
        // }
        task.startDate = new Date(time - Math.floor(Math.random() * 20 + 10) * msInDay);

        if (task.priority === 'high' && task.status !== 'done') {
            task.dueDate = new Date(time - Math.floor(Math.random() * 3 + 1) * msInDay);
        }
        else if (task.priority === 'low') {
            task.dueDate = new Date(time + msInMonth + Math.floor(Math.random() * 30 + 10) * msInDay);
        }
        else if (task.startDate) {
            task.dueDate = new Date(task.startDate.getTime() + msInMonth + Math.floor(Math.random() * 2 + 1) * msInDay);
        }
        else {
            task.dueDate = new Date(time + msInMonth + Math.floor(Math.random() * 2 + 1) * msInDay);
        }

        let numberOfComments = Math.round(Math.random() * 3);

        task.comments = [];

        if (Math.round(Math.random() + 1) === 2) {
            let prevTime = time - Math.floor(Math.random() * 10 + 3) * msInDay;

            for (let j = 0; j < numberOfComments; j++) {
                prevTime = prevTime + Math.floor(Math.random() * 2 + 1) * msInDay + msInDay / Math.floor(Math.random() * 5 + 1);

                task.comments.push({
                    text: comments[Math.round(Math.random() * 5)],
                    userId: Math.round(Math.random() * 4),
                    time: new Date(prevTime)
                });
            }
        }
    }
    return data;
  }
}
