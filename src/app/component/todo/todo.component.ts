import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  agents : any = [];
  actionbars : any = [];
  constructor() { 
    this.agents =[
      {
        job:"Create FireStone Logo",
        timeline:"2",
      },
      {
        job:"Shakeholder Meeting",
        timeline:"3",
      },
      {
        job:"Scoping & Estimations",
        timeline:"5",
      },
      {
        job:"Sprint Showcase",
        timeline:"1",
      },
      {
        job:"Project Retro",
        timeline:"12",
      }
    ]
  }

  ngOnInit(): void {
  }

}