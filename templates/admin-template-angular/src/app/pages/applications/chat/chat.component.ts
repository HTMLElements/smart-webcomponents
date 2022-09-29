import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const chatBody: HTMLElement = document.getElementById('chatBody')!;

    chatBody.scrollTop = chatBody.scrollHeight - chatBody.offsetHeight;
  }

}
