import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('listbox', { read: ListBoxComponent, static: false }) navListbox: ListBoxComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.getElementById('nav').addEventListener('itemClick', event => {
      this.router.navigate([(<any>event).detail.value]);
    });
  }

  ngAfterViewInit() {
    if (window.location.pathname === '/tasks') {
      this.navListbox.select(window.location.pathname.substring(1));
    }
  }
}
