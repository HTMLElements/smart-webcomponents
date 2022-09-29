import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // openButtonClick() {
  //   const toast = document.querySelector('.mark-as-readed'),
  //     openButton = document.querySelectorAll('.list .custom-control-input');

  //   openButton.forEach(function (item) {
  //     item.addEventListener('click', function () {
  //       if (item.checked) {
  //         toast.open();
  //       }
  //     });
  //   });
  // }
}
