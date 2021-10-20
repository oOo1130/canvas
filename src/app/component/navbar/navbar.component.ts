import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menus : any = [];
  constructor() {
    this.menus =[
      {
        id:"active",
        name:"Dashboard"
      },
      {
        id:"1",
        name:"Features"
      },
      {
        id:"1",
        name:"Crud"
      },
      {
        id:"1",
        name:"Apps"
      },
      {
        id:"1",
        name:"Pages"
      },
    ]
   }
  ngOnInit() {
  }
  

}
