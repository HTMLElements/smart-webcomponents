import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
