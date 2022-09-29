import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmbedVideoComponent implements AfterViewInit {

  @ViewChild('iframe21') iframe21!: ElementRef;
  @ViewChild('iframe16') iframe16!: ElementRef;
  @ViewChild('iframe4') iframe4!: ElementRef;
  @ViewChild('iframe1') iframe1!: ElementRef;

  constructor() { }

  ngAfterViewInit() {

    const setWidth = () => {
      
      this.iframe21.nativeElement.style.height = this.iframe21.nativeElement.offsetWidth * 0.42857 + 'px';
      this.iframe16.nativeElement.style.height = this.iframe21.nativeElement.offsetWidth * 0.5625 + 'px';
      this.iframe4.nativeElement.style.height = this.iframe4.nativeElement.offsetWidth * 0.75 + 'px';
      this.iframe1.nativeElement.style.height = this.iframe1.nativeElement.offsetWidth + 'px';
      
    }

    window.onresize = function () {
      setWidth();
    };

    setWidth();
  }
}
