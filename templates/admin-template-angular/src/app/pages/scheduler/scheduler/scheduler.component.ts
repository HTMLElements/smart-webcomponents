import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerViews } from 'smart-webcomponents-angular/scheduler';

@Component({
  selector: 'sm-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchedulerPageComponent {

  @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

  today = new Date();

  currentYear = this.today.getFullYear();

  currentMonth = this.today.getMonth();

  data = [
    {
      label: 'Google AdWords Strategy',
      dateStart: new Date(this.currentYear, this.currentMonth, 10, 9, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 11, 10, 30),
      allDay: true
    }, {
      label: 'New Brochures',
      dateStart: new Date(this.currentYear, this.currentMonth, 11, 11, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 12, 14, 15)
    }, {
      label: 'Brochure Design Review',
      dateStart: new Date(this.currentYear, this.currentMonth, 12, 13, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 14, 16, 15)
    }, {
      label: 'Website Re-Design Plan',
      dateStart: new Date(this.currentYear, this.currentMonth, 16, 16, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 20, 11, 15)
    },
    {
      label: 'Rollout of New Website and Marketing Brochures',
      dateStart: new Date(this.currentYear, this.currentMonth, 2, 8, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 2, 10, 45)
    }, {
      label: 'Update Sales Strategy Documents',
      dateStart: new Date(this.currentYear, this.currentMonth, 2, 12, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 2, 13, 45)
    }, {
      label: 'Non-Compete Agreements',
      dateStart: new Date(this.currentYear, this.currentMonth, 3, 8, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 3, 9, 0)
    }, {
      label: 'Approve Hiring of John Jeffers',
      dateStart: new Date(this.currentYear, this.currentMonth, 3, 10, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 3, 11, 15)
    }, {
      label: 'Update NDA Agreement',
      dateStart: new Date(this.currentYear, this.currentMonth, 3, 11, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 3, 13, 45)
    }, {
      label: 'Update Employee Files with New NDA',
      dateStart: new Date(this.currentYear, this.currentMonth, 3, 14, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 3, 16, 45)
    }, {
      label: 'Submit Questions Regarding New NDA',
      dateStart: new Date(this.currentYear, this.currentMonth, 6, 8, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 6, 9, 30)
    }, {
      label: 'Submit Signed NDA',
      dateStart: new Date(this.currentYear, this.currentMonth, 6, 12, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 6, 14, 0)
    }, {
      label: 'Review Revenue Projections',
      dateStart: new Date(this.currentYear, this.currentMonth, 6, 17, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 6, 18, 0)
    }, {
      label: 'Comment on Revenue Projections',
      dateStart: new Date(this.currentYear, this.currentMonth, 5, 9, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 5, 11, 15)
    }, {
      label: 'Provide New Health Insurance Docs',
      dateStart: new Date(this.currentYear, this.currentMonth, 5, 12, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 5, 14, 15)
    }, {
      label: 'Review Changes to Health Insurance Coverage',
      dateStart: new Date(this.currentYear, this.currentMonth, 5, 14, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 5, 15, 30)
    }, {
      label: 'Review Training Course for any Ommissions',
      dateStart: new Date(this.currentYear, this.currentMonth, 8, 14, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 9, 12, 0)
    }, {
      label: 'Recall Rebate Form',
      dateStart: new Date(this.currentYear, this.currentMonth, 8, 12, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 8, 13, 15)
    }, {
      label: 'Create Report on Customer Feedback',
      dateStart: new Date(this.currentYear, this.currentMonth, 9, 15, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 9, 17, 30)
    }, {
      label: 'Review Customer Feedback Report',
      dateStart: new Date(this.currentYear, this.currentMonth, 9, 16, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 9, 18, 30)
    }, {
      label: 'Customer Feedback Report Analysis',
      dateStart: new Date(this.currentYear, this.currentMonth, 10, 9, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 10, 10, 30)
    }, {
      label: 'Prepare Shipping Cost Analysis Report',
      dateStart: new Date(this.currentYear, this.currentMonth, 10, 12, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 10, 13, 30)
    }, {
      label: 'Provide Feedback on Shippers',
      dateStart: new Date(this.currentYear, this.currentMonth, 10, 14, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 10, 16, 0)
    }, {
      label: 'Select Preferred Shipper',
      dateStart: new Date(this.currentYear, this.currentMonth, 10, 17, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 10, 20, 0)
    }, {
      label: 'Complete Shipper Selection Form',
      dateStart: new Date(this.currentYear, this.currentMonth, 11, 8, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 11, 10, 0)
    }, {
      label: 'Upgrade Server Hardware',
      dateStart: new Date(this.currentYear, this.currentMonth, 11, 12, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 11, 14, 15)
    }, {
      label: 'Upgrade Personal Computers',
      dateStart: new Date(this.currentYear, this.currentMonth, 11, 14, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 11, 16, 30)
    }, {
      label: 'Upgrade Apps to Windows RT or stay with WinForms',
      dateStart: new Date(this.currentYear, this.currentMonth, 12, 10, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 12, 13, 0)
    }, {
      label: 'Estimate Time Required to Touch-Enable Apps',
      dateStart: new Date(this.currentYear, this.currentMonth, 12, 14, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 12, 16, 30)
    }, {
      label: 'Report on Tranistion to Touch-Based Apps',
      dateStart: new Date(this.currentYear, this.currentMonth, 12, 18, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 12, 19, 0)
    }, {
      label: 'Submit New Website Design',
      dateStart: new Date(this.currentYear, this.currentMonth, 15, 8, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 15, 10, 0)
    }, {
      label: 'Create Icons for Website',
      dateStart: new Date(this.currentYear, this.currentMonth, 15, 11, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 15, 13, 15)
    }, {
      label: 'Create New Product Pages',
      dateStart: new Date(this.currentYear, this.currentMonth, 16, 9, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 16, 11, 45)
    }, {
      label: 'Approve Website Launch',
      dateStart: new Date(this.currentYear, this.currentMonth, 16, 12, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 16, 15, 15)
    }, {
      label: 'Update Customer Shipping Profiles',
      dateStart: new Date(this.currentYear, this.currentMonth, 17, 9, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 17, 11, 0)
    }, {
      label: 'Create New Shipping Return Labels',
      dateStart: new Date(this.currentYear, this.currentMonth, 17, 12, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 17, 14, 0)
    }, {
      label: 'Get Design for Shipping Return Labels',
      dateStart: new Date(this.currentYear, this.currentMonth, 17, 15, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 17, 16, 30)
    }, {
      label: 'PSD needed for Shipping Return Labels',
      dateStart: new Date(this.currentYear, this.currentMonth, 18, 8, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 18, 9, 15)
    }, {
      label: 'Contact ISP and Discuss Payment Options',
      dateStart: new Date(this.currentYear, this.currentMonth, 18, 11, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 18, 16, 0)
    }, {
      label: 'Prepare Year-End Support Summary Report',
      dateStart: new Date(this.currentYear, this.currentMonth, 18, 17, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 18, 20, 0)
    }, {
      label: 'Review New Training Material',
      dateStart: new Date(this.currentYear, this.currentMonth, 19, 8, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 19, 9, 15)
    }, {
      label: 'Distribute Training Material to Support Staff',
      dateStart: new Date(this.currentYear, this.currentMonth, 19, 12, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 19, 14, 0)
    }, {
      label: 'Training Material Distribution Schedule',
      dateStart: new Date(this.currentYear, this.currentMonth, 19, 14, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 19, 16, 15)
    }, {
      label: 'Approval on Converting to New HDMI Specification',
      dateStart: new Date(this.currentYear, this.currentMonth, 22, 9, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 22, 10, 15)
    }, {
      label: 'Create New Spike for Automation Server',
      dateStart: new Date(this.currentYear, this.currentMonth, 22, 10, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 22, 12, 30)
    }, {
      label: 'Code Review - New Automation Server',
      dateStart: new Date(this.currentYear, this.currentMonth, 22, 13, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 22, 15, 0)
    }, {
      label: 'Confirm Availability for Sales Meeting',
      dateStart: new Date(this.currentYear, this.currentMonth, 23, 10, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 23, 15, 15)
    }, {
      label: 'Reschedule Sales Team Meeting',
      dateStart: new Date(this.currentYear, this.currentMonth, 23, 16, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 23, 18, 0)
    }, {
      label: 'Send 2 Remotes for Giveaways',
      dateStart: new Date(this.currentYear, this.currentMonth, 24, 9, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 24, 11, 45)
    }, {
      label: 'Discuss Product Giveaways with Management',
      dateStart: new Date(this.currentYear, this.currentMonth, 24, 12, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 24, 16, 45)
    }, {
      label: 'Replace Desktops on the 3rd Floor',
      dateStart: new Date(this.currentYear, this.currentMonth, 25, 9, 30),
      dateEnd: new Date(this.currentYear, this.currentMonth, 25, 10, 45)
    }, {
      label: 'Update Database with New Leads',
      dateStart: new Date(this.currentYear, this.currentMonth, 25, 12, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 25, 14, 15)
    }, {
      label: 'Mail New Leads for Follow Up',
      dateStart: new Date(this.currentYear, this.currentMonth, 25, 14, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 25, 15, 30)
    }, {
      label: 'Send Territory Sales Breakdown',
      dateStart: new Date(this.currentYear, this.currentMonth, 25, 18, 0),
      dateEnd: new Date(this.currentYear, this.currentMonth, 25, 20, 0)
    }, {
      label: 'Territory Sales Breakdown Report',
      dateStart: new Date(this.currentYear, this.currentMonth, 26, 8, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 26, 9, 45)
    }, {
      label: 'Report on the State of Engineering Dept',
      dateStart: new Date(this.currentYear, this.currentMonth, 26, 14, 45),
      dateEnd: new Date(this.currentYear, this.currentMonth, 26, 15, 30)
    }, {
      label: 'Staff Productivity Report',
      dateStart: new Date(this.currentYear, this.currentMonth, 26, 16, 15),
      dateEnd: new Date(this.currentYear, this.currentMonth, 26, 19, 30)
    }
  ]

  views: SchedulerViews = ['day', 'week', 'month'];

  schedulerSettings = {
    view: 'week',
    dateCurrent: new Date(),
    dataSource: this.data,
    hourStart: 9,
    timelineDayScale: 'halfHour'
  }

  constructor() { }

}
