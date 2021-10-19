import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixbar',
  templateUrl: './fixbar.component.html',
  styleUrls: ['./fixbar.component.css']
})
export class FixbarComponent implements OnInit {
  fixIcons:any = [];
  constructor() { 
    this.fixIcons = [
      {
        id:"drop",
        name:"fas fa-tint"
      },
      {
        id:"setting",
        name:"fas fa-cog"
      },
      {
        id:"plane",
        name:"fas fa-paper-plane"
      }
    ]
  }

  ngOnInit(): void {
  }

}
